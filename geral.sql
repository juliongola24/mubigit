-- =====================================================================
-- geral.sql — Script único do projecto Mubissule
-- Corre este ficheiro inteiro no SQL Editor do Supabase.
-- É idempotente: podes voltar a correr sempre que o actualizares.
-- =====================================================================

-- ---------------------------------------------------------------------
-- 1) Tabela de login simples (texto simples) — nome: debug
--    ATENÇÃO: senhas em texto simples, apenas para fase de testes.
--    A tabela é lida APENAS pela Edge Function `github` (service role);
--    o navegador nunca lhe acede directamente.
-- ---------------------------------------------------------------------
create table if not exists public.debug (
  id         uuid primary key default gen_random_uuid(),
  username   text not null unique,
  password   text not null,
  criado_em  timestamptz not null default now()
);

-- Permissões da Data API (obrigatório no Supabase)
revoke all on public.debug from anon;
revoke all on public.debug from authenticated;
grant all on public.debug to service_role;

-- RLS activo e sem políticas públicas: só o service role (Edge Function) lê.
alter table public.debug enable row level security;
drop policy if exists "debug leitura publica" on public.debug;

-- ---------------------------------------------------------------------
-- 2) Utilizador(es) do painel (edita/acrescenta linhas aqui)
-- ---------------------------------------------------------------------
insert into public.debug (username, password)
values ('admin', 'admin123')
on conflict (username) do update set password = excluded.password;

-- ---------------------------------------------------------------------
-- 3) Conferir
-- ---------------------------------------------------------------------
-- select id, username, criado_em from public.debug;
