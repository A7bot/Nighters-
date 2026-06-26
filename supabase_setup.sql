-- ================================================================
-- NIGHTERS CYBER ACADEMY — Final Unified Schema Update
-- Safe for live production: retains your existing registered users
-- ================================================================

-- 1. CLEAR DEPENDENT VIEWS FIRST TO PREVENT POSTGRES COMPILE LOCKS
drop view if exists leaderboard;

-- 2. VERIFY & PATCH LIVE CORES ON USER PROFILES TABLE
create table if not exists profiles (
  id uuid references auth.users on delete cascade primary key,
  created_at timestamptz not null default now()
);

alter table profiles add column if not exists username text;
alter table profiles add column if not exists email text;
alter table profiles add column if not exists points integer not null default 0;
alter table profiles add column if not exists current_level integer not null default 1;
alter table profiles add column if not exists phase integer not null default 1;
alter table profiles add column if not exists strikes integer not null default 0;
alter table profiles add column if not exists completed_challenges integer not null default 0;
alter table profiles add column if not exists attendance_days integer not null default 0;
alter table profiles add column if not exists streak integer not null default 0;
alter table profiles add column if not exists last_checkin date;
alter table profiles add column if not exists is_admin boolean not null default false;

-- Fallback to populate empty usernames for old users safely
update profiles set username = 'operative_' || substring(id::text, 1, 6) where username is null;

-- Enforce explicit constraint configurations safely
alter table profiles drop constraint if exists profiles_username_key;
alter table profiles add constraint profiles_username_key unique (username);

-- 3. RESET PROFILE ACCESS POLICIES
alter table profiles enable row level security;
drop policy if exists "p_read" on profiles;
drop policy if exists "p_insert" on profiles;
drop policy if exists "p_update" on profiles;
create policy "p_read"   on profiles for select using (true);
create policy "p_insert" on profiles for insert with check (auth.uid() = id);
create policy "p_update" on profiles for update using (auth.uid() = id);

-- 4. LEVEL PROGRESS SUBSYSTEM
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

-- 5. ATTENDANCE JOURNAL ARCHIVE
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

-- 6. ASSIGNMENTS LAB SUBMISSIONS ENGINE (with Admin Feedback)
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

-- 7. SECURITY INFRASTRUCTURE STRIKE AUDITING
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

-- 8. CAPTURE THE FLAG (CTF) DATA TIERS
create table if not exists ctf_challenges (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null,
  points integer not null default 50,
  description text not null,
  hint text,
  flag_hash text not null,
  solver_count integer not null default 0,
  first_blood text,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

alter table ctf_challenges enable row level security;
drop policy if exists "ctf_read" on ctf_challenges;
create policy "ctf_read" on ctf_challenges for select using (true);

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

-- 9. RE-COMPILE CLEAN RE-INDEXED LEADERBOARD VIEW
create view leaderboard as
  select 
    id, 
    username, 
    points, 
    completed_challenges, 
    current_level, 
    phase, 
    attendance_days
  from profiles
  order by points desc, completed_challenges desc;

-- 10. SECURE RPC VERIFICATION ENGINE WITH POINTS REWARDS CALCULATOR
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
