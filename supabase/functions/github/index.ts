// Edge Function: ponte entre o painel do site e a API do GitHub.
// O Supabase serve apenas para autenticar o administrador e guardar
// o token do GitHub em segredo — o conteúdo do site continua no repo.

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

const GITHUB_TOKEN = Deno.env.get("GITHUB_TOKEN") ?? "";
const GITHUB_OWNER = Deno.env.get("GITHUB_OWNER") ?? "";
const GITHUB_REPO = Deno.env.get("GITHUB_REPO") ?? "";
const GITHUB_BRANCH = Deno.env.get("GITHUB_BRANCH") ?? "main";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

// Login simples (texto) contra a tabela public.debug, lida com service role
// para que a tabela nunca fique acessível ao cliente.
async function checkCredentials(username?: string, password?: string) {
  if (!username || !password) return false;
  const url =
    `${SUPABASE_URL}/rest/v1/debug?select=username&username=eq.` +
    `${encodeURIComponent(username)}&password=eq.${encodeURIComponent(password)}&limit=1`;
  const res = await fetch(url, {
    headers: { apikey: SERVICE_ROLE_KEY, Authorization: `Bearer ${SERVICE_ROLE_KEY}` },
  });
  if (!res.ok) {
    console.error("Falha ao consultar tabela debug:", res.status, await res.text());
    return false;
  }
  const rows = await res.json();
  return Array.isArray(rows) && rows.length > 0;
}

async function gh(path: string, init: RequestInit = {}) {
  const res = await fetch(`https://api.github.com${path}`, {
    ...init,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
  });
  const text = await res.text();
  let body: unknown;
  try {
    body = text ? JSON.parse(text) : null;
  } catch {
    body = text;
  }
  if (!res.ok) {
    console.error(`GitHub API falhou [${res.status}]: ${text}`);
    throw new Response(
      JSON.stringify({ error: "GitHub API falhou", status: res.status, details: body }),
      { status: res.status, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
  return body as any;
}

const repoBase = () => `/repos/${GITHUB_OWNER}/${GITHUB_REPO}`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { action, path = "", content, sha, message, branch, username, password } =
      await req.json();

    const ok = await checkCredentials(username, password);
    if (!ok) return json({ error: "Credenciais inválidas" }, 401);

    if (action === "login") return json({ ok: true, username });

    if (!GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO) {
      return json(
        { error: "Configuração incompleta: defina GITHUB_TOKEN, GITHUB_OWNER e GITHUB_REPO." },
        500,
      );
    }

    const ref = branch || GITHUB_BRANCH;

    switch (action) {
      case "config":
        return json({ owner: GITHUB_OWNER, repo: GITHUB_REPO, branch: ref });

      case "list": {
        const data = await gh(
          `${repoBase()}/contents/${encodeURI(path)}?ref=${encodeURIComponent(ref)}`,
        );
        const items = (Array.isArray(data) ? data : [data]).map((i: any) => ({
          name: i.name,
          path: i.path,
          type: i.type,
          sha: i.sha,
          size: i.size,
        }));
        items.sort((a, b) =>
          a.type === b.type ? a.name.localeCompare(b.name) : a.type === "dir" ? -1 : 1,
        );
        return json({ items });
      }

      case "read": {
        const data = await gh(
          `${repoBase()}/contents/${encodeURI(path)}?ref=${encodeURIComponent(ref)}`,
        );
        const decoded = new TextDecoder().decode(
          Uint8Array.from(atob(String(data.content ?? "").replace(/\n/g, "")), (c) =>
            c.charCodeAt(0),
          ),
        );
        return json({ path: data.path, sha: data.sha, content: decoded });
      }

      case "save": {
        const bytes = new TextEncoder().encode(String(content ?? ""));
        let bin = "";
        bytes.forEach((b) => (bin += String.fromCharCode(b)));
        const data = await gh(`${repoBase()}/contents/${encodeURI(path)}`, {
          method: "PUT",
          body: JSON.stringify({
            message: message || `chore(painel): atualiza ${path}`,
            content: btoa(bin),
            branch: ref,
            ...(sha ? { sha } : {}),
          }),
        });
        return json({ sha: data.content?.sha, commit: data.commit?.sha });
      }

      case "delete": {
        const data = await gh(`${repoBase()}/contents/${encodeURI(path)}`, {
          method: "DELETE",
          body: JSON.stringify({
            message: message || `chore(painel): remove ${path}`,
            sha,
            branch: ref,
          }),
        });
        return json({ commit: data.commit?.sha });
      }

      case "commits": {
        const data = await gh(
          `${repoBase()}/commits?sha=${encodeURIComponent(ref)}&per_page=10`,
        );
        return json({
          commits: data.map((c: any) => ({
            sha: c.sha.slice(0, 7),
            message: c.commit.message,
            date: c.commit.author?.date,
            author: c.commit.author?.name,
            url: c.html_url,
          })),
        });
      }

      default:
        return json({ error: `Ação desconhecida: ${action}` }, 400);
    }
  } catch (e) {
    if (e instanceof Response) return e;
    console.error("Erro inesperado:", e);
    return json({ error: String((e as Error)?.message ?? e) }, 500);
  }
});
