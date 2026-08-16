-- =====================================================================
-- geral.sql — Script único do projecto Mubissule
-- Corre este ficheiro inteiro no SQL Editor do Supabase.
-- É idempotente: podes voltar a correr sempre que o actualizares.
-- =====================================================================

-- ---------------------------------------------------------------------
-- 1) Tabela de login simples (texto simples) — nome: debug
--    ATENÇÃO: senhas em texto simples, apenas para fase de testes.
-- ---------------------------------------------------------------------
create table if not exists public.debug (
  id         uuid primary key default gen_random_uuid(),
  usuario    text not null unique,
  senha      text not null,
  criado_em  timestamptz not null default now()
);

-- Permissões da Data API (obrigatório no Supabase)
grant select on public.debug to anon;
grant select on public.debug to authenticated;
grant all    on public.debug to service_role;

-- RLS
alter table public.debug enable row level security;

drop policy if exists "debug leitura publica" on public.debug;
create policy "debug leitura publica"
  on public.debug
  for select
  to anon, authenticated
  using (true);

-- ---------------------------------------------------------------------
-- 2) Utilizador inicial (edita/acrescenta linhas aqui)
-- ---------------------------------------------------------------------
insert into public.debug (usuario, senha)
values ('admin', 'admin123')
on conflict (usuario) do update set senha = excluded.senha;

-- ---------------------------------------------------------------------
-- 3) Conferir
-- ---------------------------------------------------------------------
-- select * from public.debug;
