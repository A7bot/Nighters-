-- ================================================================
-- NIGHTERS CYBER ACADEMY — Database Setup
-- Run ALL of this in Supabase → SQL Editor → Run
-- ================================================================

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
create policy "p_read"   on profiles for select using (true);
create policy "p_insert" on profiles for insert with check (auth.uid()=id);
create policy "p_update" on profiles for update using (auth.uid()=id);

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
create policy "lp_own"  on level_progress for all using (auth.uid()=user_id);
create policy "lp_read" on level_progress for select using (true);

create table if not exists assignments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade not null,
  username text not null,
  level_num integer not null,
  level_title text,
  content text not null,
  status text not null default 'pending' check (status in ('pending','reviewed','passed','failed')),
  score integer,
  admin_feedback text,
  submitted_at timestamptz not null default now(),
  reviewed_at timestamptz
);
alter table assignments enable row level security;
create policy "a_insert"   on assignments for insert with check (auth.uid()=user_id);
create policy "a_read_own" on assignments for select using (auth.uid()=user_id);

create table if not exists help_tickets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade not null,
  username text not null,
  level_num integer,
  problem text not null,
  status text not null default 'open' check (status in ('open','answered','closed')),
  admin_reply text,
  created_at timestamptz not null default now(),
  replied_at timestamptz
);
alter table help_tickets enable row level security;
create policy "ht_insert"   on help_tickets for insert with check (auth.uid()=user_id);
create policy "ht_read_own" on help_tickets for select using (auth.uid()=user_id);

create table if not exists ctf_challenges (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  category text not null default 'web',
  difficulty text not null check (difficulty in ('easy','medium','hard')),
  points integer not null default 10,
  flag_hash text not null,
  hint1 text, hint1_cost integer not null default 2,
  hint2 text, hint2_cost integer not null default 5,
  icon text not null default '🚩',
  active boolean not null default true,
  week_date date,
  first_blood text,
  solver_count integer not null default 0,
  created_at timestamptz not null default now()
);
alter table ctf_challenges enable row level security;
create policy "ctf_read" on ctf_challenges for select using (true);

create or replace view ctf_public as
  select id,title,description,category,difficulty,points,hint1,hint1_cost,hint2,hint2_cost,icon,active,week_date,first_blood,solver_count,created_at
  from ctf_challenges;
grant select on ctf_public to anon, authenticated;

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
create policy "cs_insert" on ctf_submissions for insert with check (auth.uid()=user_id);
create policy "cs_read"   on ctf_submissions for select using (auth.uid()=user_id);

create table if not exists attendance (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade not null,
  username text not null,
  date date not null,
  checked_in_at timestamptz not null default now(),
  status text not null default 'present' check (status in ('present','late')),
  points_awarded integer not null default 2,
  unique(user_id, date)
);
alter table attendance enable row level security;
create policy "att_insert" on attendance for insert with check (auth.uid()=user_id);
create policy "att_read"   on attendance for select using (true);

create table if not exists exams (
  id uuid primary key default gen_random_uuid(),
  title text not null, description text,
  phase integer not null default 1,
  opens_at timestamptz not null, closes_at timestamptz not null,
  duration_minutes integer, pass_percentage integer not null default 60,
  created_at timestamptz not null default now()
);
alter table exams enable row level security;
create policy "ex_read" on exams for select using (true);

create table if not exists exam_questions (
  id uuid primary key default gen_random_uuid(),
  exam_id uuid references exams(id) on delete cascade not null,
  type text not null check (type in ('mcq','short')),
  question text not null, options jsonb,
  correct_answer text not null, points integer not null default 1,
  order_num integer not null default 0
);
alter table exam_questions enable row level security;
create policy "eq_read" on exam_questions for select using (true);

create table if not exists exam_results (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade not null,
  username text not null,
  exam_id uuid references exams(id) on delete cascade not null,
  score_raw integer not null default 0, score_pct integer not null default 0,
  total_pts integer not null default 0, passed boolean not null default false,
  answers jsonb, submitted_at timestamptz not null default now(),
  unique(user_id, exam_id)
);
alter table exam_results enable row level security;
create policy "er_insert" on exam_results for insert with check (auth.uid()=user_id);
create policy "er_own"    on exam_results for select using (auth.uid()=user_id);

create table if not exists announcements (
  id uuid primary key default gen_random_uuid(),
  title text not null, body text,
  urgent boolean not null default false,
  created_at timestamptz not null default now()
);
alter table announcements enable row level security;
create policy "ann_read" on announcements for select using (true);

create table if not exists strike_log (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade not null,
  username text not null, reason text not null,
  issued_at timestamptz not null default now()
);
alter table strike_log enable row level security;
create policy "sl_own" on strike_log for select using (auth.uid()=user_id);

create table if not exists hint_usage (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade not null,
  challenge_id uuid not null, challenge_type text not null default 'ctf',
  hint_key text not null, cost integer not null default 2,
  used_at timestamptz not null default now(),
  unique(user_id, challenge_id, hint_key)
);
alter table hint_usage enable row level security;
create policy "hu_own" on hint_usage for all using (auth.uid()=user_id);

create table if not exists login_log (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade not null,
  fingerprint text, logged_at timestamptz not null default now()
);
alter table login_log enable row level security;
create policy "ll_insert" on login_log for insert with check (auth.uid()=user_id);

-- CTF Flag Check Function
create or replace function check_ctf_flag(
  p_challenge_id uuid, p_flag_hash text,
  p_user_id uuid, p_username text, p_fingerprint text
) returns jsonb language plpgsql security definer as $$
declare v_hash text; v_pts integer; v_count integer; v_bonus integer:=0; v_solved boolean;
begin
  select exists(select 1 from ctf_submissions where user_id=p_user_id and challenge_id=p_challenge_id and correct=true) into v_solved;
  if v_solved then return jsonb_build_object('ok',false,'msg','Already solved'); end if;
  select flag_hash,points,solver_count into v_hash,v_pts,v_count from ctf_challenges where id=p_challenge_id and active=true;
  if not found then return jsonb_build_object('ok',false,'msg','Challenge not found'); end if;
  insert into ctf_submissions(user_id,username,challenge_id,flag_hash,correct,fingerprint)
  values(p_user_id,p_username,p_challenge_id,p_flag_hash,p_flag_hash=v_hash,p_fingerprint)
  on conflict(user_id,challenge_id) do nothing;
  if p_flag_hash!=v_hash then return jsonb_build_object('ok',false,'msg','Wrong flag'); end if;
  if v_count=0 then v_bonus:=20; elsif v_count=1 then v_bonus:=10; elsif v_count=2 then v_bonus:=5; end if;
  update ctf_challenges set solver_count=solver_count+1,first_blood=case when v_count=0 then p_username else first_blood end where id=p_challenge_id;
  update profiles set points=points+v_pts+v_bonus,completed_challenges=completed_challenges+1 where id=p_user_id;
  return jsonb_build_object('ok',true,'pts',v_pts,'bonus',v_bonus,'first_blood',v_count=0);
end; $$;

-- AFTER RUNNING:
-- 1. Authentication → Settings → DISABLE email confirmations
-- 2. Register on your site → then in Table Editor set is_admin=true for your account
-- 3. Update ADMIN_EMAILS in app.js with your real email
