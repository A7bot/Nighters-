-- ================================================================
-- NIGHTERS CYBER ACADEMY — Complete Database Schema (Production Ready)
-- Safe to run with existing users: uses 'if not exists'
-- ================================================================

-- 1. CORE USER PROFILES TABLE
create table if not exists profiles (
  id uuid references auth.users on delete cascade primary key,
  username text unique not null,
  email text,
  points integer not null default 0,
  current_level integer not null default 1,
  phase integer not null default 1,
  strikes integer not null default 0,
  completed_challenges integer not null default 0,
  attendance_days integer not null default 0,
  streak integer not null default 0,
  last_checkin date,
  is_admin boolean not null default false,
  created_at timestamptz not null default now()
);

alter table profiles enable row level security;
drop policy if exists "p_read" on profiles;
drop policy if exists "p_insert" on profiles;
drop policy if exists "p_update" on profiles;
create policy "p_read"   on profiles for select using (true);
create policy "p_insert" on profiles for insert with check (auth.uid() = id);
create policy "p_update" on profiles for update using (auth.uid() = id);

-- 2. LESSON LEVEL PROGRESS TRACKER
create table if not exists level_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade not null,
  level_num integer not null,
  status text not null default 'locked' check (status in ('locked','unlocked','in_progress','completed')),
  started_at timestamptz,
  completed_at timestamptz,
  time_spent_seconds integer not null default 0,
  quiz_score integer,
  hints_used integer not null default 0,
  unique(user_id, level_num)
);

alter table level_progress enable row level security;
drop policy if exists "lp_all" on level_progress;
create policy "lp_all" on level_progress for all using (auth.uid() = user_id);

-- 3. ASSIGNMENTS SYSTEM (with Admin Review Feedback)
create table if not exists assignments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade not null,
  username text not null,
  level_num integer not null,
  level_title text not null,
  content text not null,
  status text not null default 'pending' check (status in ('pending','reviewed','passed','failed')),
  score integer check (score >= 0 and score <= 100),
  admin_feedback text,
  submitted_at timestamptz not null default now(),
  unique(user_id, level_num)
);

alter table assignments enable row level security;
drop policy if exists "as_read" on assignments;
drop policy if exists "as_insert" on assignments;
create policy "as_read" on assignments for select using (true);
create policy "as_insert" on assignments for insert with check (auth.uid() = user_id);

-- 4. MONTHLY EXAMS SCHEDULER
create table if not exists exams (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  duration_minutes integer not null default 45,
  pass_percentage integer not null default 60,
  total_points integer not null default 100,
  active boolean not null default true,
  questions jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

alter table exams enable row level security;
drop policy if exists "ex_read" on exams;
create policy "ex_read" on exams for select using (true);

-- 5. EXAM RESULTS TRACKER
create table if not exists exam_results (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade not null,
  exam_id uuid references exams(id) on delete cascade not null,
  answers jsonb not null default '[]'::jsonb,
  score_raw integer not null default 0,
  score_pct integer not null default 0,
  passed boolean not null default false,
  submitted_at timestamptz not null default now(),
  unique(user_id, exam_id)
);

alter table exam_results enable row level security;
drop policy if exists "er_read" on exam_results;
drop policy if exists "er_insert" on exam_results;
create policy "er_read" on exam_results for select using (true);
create policy "er_insert" on exam_results for insert with check (auth.uid() = user_id);

-- 6. CAPTURE THE FLAG (CTF) CHALLENGES
create table if not exists ctf_challenges (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null,
  points integer not null default 50,
  description text not null,
  hint text,
  flag_hash text not null, -- SHA-256 string input
  solver_count integer not null default 0,
  first_blood text,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

alter table ctf_challenges enable row level security;
drop policy if exists "ctf_read" on ctf_challenges;
create policy "ctf_read" on ctf_challenges for select using (true);

-- 7. CTF SUBMISSIONS JOURNAL
create table if not exists ctf_submissions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade not null,
  username text not null,
  challenge_id uuid references ctf_challenges(id) on delete cascade not null,
  flag_hash text not null,
  correct boolean not null default false,
  fingerprint text,
  submitted_at timestamptz not null default now(),
  unique(user_id, challenge_id)
);

alter table ctf_submissions enable row level security;
drop policy if exists "sub_read" on ctf_submissions;
drop policy if exists "sub_insert" on ctf_submissions;
create policy "sub_read" on ctf_submissions for select using (true);
create policy "sub_insert" on ctf_submissions for insert with check (auth.uid() = user_id);

-- 8. DAILY ATTENDANCE LOG
create table if not exists attendance (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade not null,
  date date not null default current_date,
  status text not null default 'present' check (status in ('present','late')),
  created_at timestamptz not null default now(),
  unique(user_id, date)
);

alter table attendance enable row level security;
drop policy if exists "att_read" on attendance;
drop policy if exists "att_insert" on attendance;
create policy "att_read" on attendance for select using (true);
create policy "att_insert" on attendance for insert with check (auth.uid() = user_id);

-- 9. SECURITY STRIKE AUDIT LOGS
create table if not exists strike_log (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade not null,
  reason text not null,
  severity integer not null default 1,
  issued_at timestamptz not null default now()
);

alter table strike_log enable row level security;
drop policy if exists "str_read" on strike_log;
create policy "str_read" on strike_log for select using (true);

-- 10. SYSTEM GLOBAL LEADERBOARD VIEW
create or replace view leaderboard as
  select id, username, points, completed_challenges, current_level, phase, attendance_days
  from profiles
  order by points desc, completed_challenges desc;

-- 11. RPC: SECURE CTF VALIDATION ENGINE
create or replace function check_flag(
  p_challenge_id uuid,
  p_flag_hash text,
  p_user_id uuid,
  p_username text,
  p_fingerprint text
)
returns jsonb
language plpgsql
security definer
as $$
declare
  v_hash text;
  v_pts integer;
  v_count integer;
  v_bonus integer := 0;
  v_solved boolean;
begin
  select exists(
    select 1 from ctf_submissions 
    where user_id = p_user_id and challenge_id = p_challenge_id and correct = true
  ) into v_solved;
  
  if v_solved then 
    return jsonb_build_object('ok', false, 'msg', 'Already solved'); 
  end if;

  select flag_hash, points, solver_count into v_hash, v_pts, v_count 
  from ctf_challenges 
  where id = p_challenge_id and active = true;
  
  if not found then 
    return jsonb_build_object('ok', false, 'msg', 'Challenge not found'); 
  end if;

  insert into ctf_submissions(user_id, username, challenge_id, flag_hash, correct, fingerprint)
  values(p_user_id, p_username, p_challenge_id, p_flag_hash, (p_flag_hash = v_hash), p_fingerprint)
  on conflict(user_id, challenge_id) do nothing;

  if p_flag_hash != v_hash then 
    return jsonb_build_object('ok', false, 'msg', 'Wrong flag'); 
  end if;

  if v_count = 0 then v_bonus := 20; 
  elsif v_count = 1 then v_bonus := 10; 
  elsif v_count = 2 then v_bonus := 5; 
  end if;

  update ctf_challenges 
  set solver_count = solver_count + 1,
      first_blood = case when v_count = 0 then p_username else first_blood end 
  where id = p_challenge_id;

  update profiles 
  set points = points + v_pts + v_bonus,
      completed_challenges = completed_challenges + 1 
  where id = p_user_id;

  return jsonb_build_object(
    'ok', true, 
    'msg', 'Correct flag submitted!', 
    'pts', v_pts, 
    'bonus', v_bonus, 
    'first_blood', (v_count = 0),
    'total', (v_pts + v_bonus)
  );
end;
$$;
