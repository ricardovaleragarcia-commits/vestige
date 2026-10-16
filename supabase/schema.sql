-- Vestige database schema
-- Safe to keep in a public repository: security comes from Row Level Security, not secrecy.

create extension if not exists pgcrypto;

create type vestige_visibility as enum ('public', 'private');
create type vestige_status as enum ('pending', 'approved', 'rejected');

-- Accounts. Admins are flagged here, never in client code.
create table profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  is_admin boolean not null default false,
  created_at timestamptz not null default now()
);

-- Creates the profile automatically whenever someone signs up.
create or replace function handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into profiles (id) values (new.id);
  return new;
end $$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();

create table vestiges (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,                     -- public inventory code, e.g. vstg-0482
  owner_id uuid not null references profiles (id) on delete cascade,
  visibility vestige_visibility not null default 'private',
  status vestige_status not null default 'pending',

  description text not null check (char_length(description) between 10 and 600),      -- [desc.]
  failed_future text not null check (char_length(failed_future) between 10 and 1200), -- [f.f.]

  original_path text not null,   -- private storage bucket only, never served directly
  display_path text,             -- derived: EXIF stripped, size-capped
  blur_path text,                -- derived: heavy blur, safe for everyone to see

  width int not null check (width > 0),
  height int not null check (height > 0),
  aspect_ratio numeric generated always as (width::numeric / height) stored,

  image_hash text,               -- perceptual hash, to recognise returning vestiges

  created_at timestamptz not null default now(),
  approved_at timestamptz,
  retired_at timestamptz         -- set when the piece leaves the Collection; never deleted
);

create index vestiges_collection_idx on vestiges (approved_at desc) where status = 'approved' and retired_at is null;
create index vestiges_owner_idx on vestiges (owner_id);
create index vestiges_hash_idx on vestiges (image_hash);

-- Public view for the Collection. Never exposes owner_id.
-- Private pieces show only the blur. Their texts are always readable.
create view collection_items as
select
  id,
  code,
  visibility,
  width,
  height,
  aspect_ratio,
  blur_path,
  case when visibility = 'public' then display_path end as display_path,
  description,
  failed_future
from vestiges
where status = 'approved' and retired_at is null;

-- Row Level Security
alter table profiles enable row level security;
alter table vestiges enable row level security;

create or replace function is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select coalesce((select is_admin from profiles where id = auth.uid()), false);
$$;

-- Profiles: each user reads only their own row.
create policy "profiles: read own" on profiles
  for select using (auth.uid() = id or is_admin());

-- Vestiges: owners see their own pieces (any status); admins see everything.
create policy "vestiges: owner reads own" on vestiges
  for select using (auth.uid() = owner_id or is_admin());

create policy "vestiges: owner inserts as pending" on vestiges
  for insert with check (auth.uid() = owner_id and status = 'pending' and retired_at is null);

create policy "vestiges: admin manages" on vestiges
  for update using (is_admin()) with check (is_admin());

create policy "vestiges: admin deletes" on vestiges
  for delete using (is_admin());

-- Owners may change only visibility. Everything else is locked to admins.
create or replace function guard_owner_update() returns trigger
language plpgsql as $$
begin
  if not is_admin() then
    if (new.owner_id, new.status, new.description, new.failed_future, new.original_path, new.retired_at)
       is distinct from
       (old.owner_id, old.status, old.description, old.failed_future, old.original_path, old.retired_at) then
      raise exception 'Owners can only change the visibility of a vestige';
    end if;
  end if;
  return new;
end $$;

create trigger vestiges_guard
  before update on vestiges
  for each row execute function guard_owner_update();

-- Retirement: keeps the Collection to a manageable size.
-- Oldest approved pieces beyond the cap are retired, not deleted.
-- Run monthly (for example with pg_cron).
create or replace function retire_overflow(cap int default 100)
returns int language plpgsql security definer set search_path = public as $$
declare
  affected int;
begin
  with ranked as (
    select id, row_number() over (order by approved_at desc) as rn
    from vestiges
    where status = 'approved' and retired_at is null
  )
  update vestiges v
  set retired_at = now()
  from ranked r
  where v.id = r.id and r.rn > cap;

  get diagnostics affected = row_count;
  return affected;
end $$;

-- Example monthly schedule (requires the pg_cron extension):
-- select cron.schedule('retire-overflow', '0 3 1 * *', $$select retire_overflow(100)$$);

-- API access. Automatic exposure of new tables is disabled, so every grant is explicit.
grant select on collection_items to anon, authenticated;
grant select, insert, update, delete on vestiges to authenticated;
grant select on profiles to authenticated;

-- Retirement is a maintenance task: only the server (service role) may run it.
revoke execute on function retire_overflow(int) from public, anon, authenticated;
grant execute on function retire_overflow(int) to service_role;

-- Storage: originals are private. Derived images are public-read.
insert into storage.buckets (id, name, public) values
  ('originals', 'originals', false),
  ('derived', 'derived', true)
on conflict (id) do nothing;

-- Make the first admin manually after creating your account:
-- update profiles set is_admin = true where id = '<your-user-id>';
