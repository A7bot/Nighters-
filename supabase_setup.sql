-- ================================================================
-- NIGHTERS CYBER ACADEMY — Database Setup
-- Paste ALL of this into Supabase → SQL Editor → Run
-- ================================================================

-- ── 1. PROFILES ─────────────────────────────────────────────────
create table if not exists profiles (
  id              uuid references auth.users on delete cascade primary key,
  username        text unique not null,
  email           text,
  points          integer not null default 0,
  phase           integer not null default 1,
  strikes         integer not null default 0,
  completed_challenges integer not null default 0,
  attendance_days integer not null default 0,
  streak          integer not null default 0,
  last_checkin    date,
  is_admin        boolean not null default false,
  created_at      timestamptz not null default now()
);
alter table profiles enable row level security;
create policy "profiles_read_all"   on profiles for select using (true);
create policy "profiles_insert_own" on profiles for insert with check (auth.uid() = id);
create policy "profiles_update_own" on profiles for update using (auth.uid() = id);

-- ── 2. CHALLENGES ───────────────────────────────────────────────
-- flag_hash is SHA-256 of the flag (never store plaintext)
create table if not exists challenges (
  id               uuid primary key default gen_random_uuid(),
  title            text not null,
  description      text,
  category         text not null default 'web',
  difficulty       text not null check (difficulty in ('easy','medium','hard')),
  difficulty_order integer not null default 1,
  points           integer not null default 10,
  flag_hash        text not null,
  hint1            text,
  hint1_cost       integer not null default 2,
  hint2            text,
  hint2_cost       integer not null default 5,
  phase            integer not null default 1,
  icon             text not null default '🔴',
  active           boolean not null default true,
  first_blood      text,
  solver_count     integer not null default 0,
  attachment_url   text,
  created_at       timestamptz not null default now()
);
alter table challenges enable row level security;
create policy "challenges_read_active" on challenges for select using (true);

-- Public view that hides the flag hash from students
create or replace view challenges_public as
  select id, title, description, category, difficulty, difficulty_order,
         points, hint1, hint1_cost, hint2, hint2_cost, phase, icon, active,
         first_blood, solver_count, attachment_url, created_at
  from challenges;
grant select on challenges_public to anon, authenticated;

-- ── 3. SUBMISSIONS ──────────────────────────────────────────────
create table if not exists submissions (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid references profiles(id) on delete cascade not null,
  username      text not null,
  challenge_id  uuid references challenges(id) on delete cascade not null,
  flag_hash     text not null,
  correct       boolean not null default false,
  fingerprint   text,
  submitted_at  timestamptz not null default now(),
  unique(user_id, challenge_id)
);
alter table submissions enable row level security;
create policy "submissions_insert" on submissions for insert with check (auth.uid() = user_id);
create policy "submissions_read_own" on submissions for select using (auth.uid() = user_id);

-- ── 4. HINT USAGE ───────────────────────────────────────────────
create table if not exists hint_usage (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid references profiles(id) on delete cascade not null,
  challenge_id uuid references challenges(id) on delete cascade not null,
  hint_key     text not null,
  cost         integer not null default 0,
  used_at      timestamptz not null default now(),
  unique(user_id, challenge_id, hint_key)
);
alter table hint_usage enable row level security;
create policy "hint_usage_own" on hint_usage for all using (auth.uid() = user_id);

-- ── 5. ATTENDANCE ───────────────────────────────────────────────
create table if not exists attendance (
  id             uuid primary key default gen_random_uuid(),
  user_id        uuid references profiles(id) on delete cascade not null,
  username       text not null,
  date           date not null,
  checked_in_at  timestamptz not null default now(),
  status         text not null default 'present' check (status in ('present','late')),
  points_awarded integer not null default 2,
  unique(user_id, date)
);
alter table attendance enable row level security;
create policy "attendance_insert" on attendance for insert with check (auth.uid() = user_id);
create policy "attendance_read"   on attendance for select using (true);

-- ── 6. EXAMS ────────────────────────────────────────────────────
create table if not exists exams (
  id                    uuid primary key default gen_random_uuid(),
  title                 text not null,
  description           text,
  phase                 integer not null default 1,
  opens_at              timestamptz not null,
  closes_at             timestamptz not null,
  duration_minutes      integer,
  pass_percentage       integer not null default 60,
  unlocks_next_phase    boolean not null default false,
  created_at            timestamptz not null default now()
);
alter table exams enable row level security;
create policy "exams_read" on exams for select using (true);

-- ── 7. EXAM QUESTIONS ───────────────────────────────────────────
create table if not exists exam_questions (
  id             uuid primary key default gen_random_uuid(),
  exam_id        uuid references exams(id) on delete cascade not null,
  type           text not null check (type in ('mcq','short')),
  question       text not null,
  options        jsonb,
  correct_answer text not null,
  points         integer not null default 1,
  order_num      integer not null default 0
);
alter table exam_questions enable row level security;
create policy "exam_questions_read" on exam_questions for select using (true);

-- ── 8. EXAM RESULTS ─────────────────────────────────────────────
create table if not exists exam_results (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid references profiles(id) on delete cascade not null,
  username     text not null,
  exam_id      uuid references exams(id) on delete cascade not null,
  score_raw    integer not null default 0,
  score_pct    integer not null default 0,
  total_pts    integer not null default 0,
  passed       boolean not null default false,
  answers      jsonb,
  submitted_at timestamptz not null default now(),
  unique(user_id, exam_id)
);
alter table exam_results enable row level security;
create policy "exam_results_insert"   on exam_results for insert with check (auth.uid() = user_id);
create policy "exam_results_read_own" on exam_results for select using (auth.uid() = user_id);

-- ── 9. ANNOUNCEMENTS ────────────────────────────────────────────
create table if not exists announcements (
  id         uuid primary key default gen_random_uuid(),
  title      text not null,
  body       text,
  urgent     boolean not null default false,
  created_at timestamptz not null default now()
);
alter table announcements enable row level security;
create policy "announcements_read" on announcements for select using (true);

-- ── 10. STRIKE LOG ──────────────────────────────────────────────
create table if not exists strike_log (
  id        uuid primary key default gen_random_uuid(),
  user_id   uuid references profiles(id) on delete cascade not null,
  username  text not null,
  reason    text not null,
  issued_at timestamptz not null default now()
);
alter table strike_log enable row level security;
create policy "strike_log_read_own" on strike_log for select using (auth.uid() = user_id);

-- ── 11. LOGIN LOG (anti-cheat) ───────────────────────────────────
create table if not exists login_log (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid references profiles(id) on delete cascade not null,
  fingerprint text,
  logged_at   timestamptz not null default now()
);
alter table login_log enable row level security;
create policy "login_log_insert" on login_log for insert with check (auth.uid() = user_id);

-- ── 12. FLAG CHECK FUNCTION (server-side, never exposes flag) ──
create or replace function check_flag(
  p_challenge_id uuid,
  p_flag_hash    text,
  p_user_id      uuid,
  p_username     text,
  p_fingerprint  text
)
returns jsonb
language plpgsql
security definer
as $$
declare
  v_stored_hash     text;
  v_already_solved  boolean;
  v_points          integer;
  v_solver_count    integer;
  v_bonus           integer := 0;
  v_new_total       integer;
  v_new_completed   integer;
begin
  -- Check if already solved
  select exists(
    select 1 from submissions
    where user_id = p_user_id and challenge_id = p_challenge_id and correct = true
  ) into v_already_solved;

  if v_already_solved then
    return jsonb_build_object('ok', false, 'msg', 'Already solved');
  end if;

  -- Get stored flag hash and points
  select flag_hash, points, solver_count
  into v_stored_hash, v_points, v_solver_count
  from challenges where id = p_challenge_id and active = true;

  if not found then
    return jsonb_build_object('ok', false, 'msg', 'Challenge not found');
  end if;

  -- Record submission (even wrong ones for anti-cheat)
  insert into submissions(user_id, username, challenge_id, flag_hash, correct, fingerprint)
  values(p_user_id, p_username, p_challenge_id, p_flag_hash, p_flag_hash = v_stored_hash, p_fingerprint)
  on conflict(user_id, challenge_id) do nothing;

  if p_flag_hash != v_stored_hash then
    return jsonb_build_object('ok', false, 'msg', 'Incorrect flag');
  end if;

  -- Calculate bonus (first, second, third blood)
  if v_solver_count = 0    then v_bonus := 20;
  elsif v_solver_count = 1 then v_bonus := 10;
  elsif v_solver_count = 2 then v_bonus := 5;
  end if;

  -- Update solver count and first blood
  update challenges set
    solver_count = solver_count + 1,
    first_blood  = case when v_solver_count = 0 then p_username else first_blood end
  where id = p_challenge_id;

  -- Award points to user
  select points, completed_challenges into v_new_total, v_new_completed
  from profiles where id = p_user_id;

  update profiles set
    points = v_new_total + v_points + v_bonus,
    completed_challenges = v_new_completed + 1
  where id = p_user_id;

  return jsonb_build_object(
    'ok',    true,
    'pts',   v_points,
    'bonus', v_bonus,
    'total', v_points + v_bonus,
    'first_blood', v_solver_count = 0
  );
end;
$$;

-- ── DONE ──────────────────────────────────────────────────────────
-- After running this SQL:
-- 1. Go to Authentication → Settings → disable "Enable email confirmations"
-- 2. Go to Table Editor → profiles → find your admin row → set is_admin = true
-- 3. Add your admin email to ADMIN_EMAILS in app.js
