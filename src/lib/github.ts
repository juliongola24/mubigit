import { supabase } from "@/integrations/supabase/client";

const CRED_KEY = "mubissule_painel_cred";

export type PanelCred = { username: string; password: string };

export function getCred(): PanelCred | null {
  try {
    const raw = localStorage.getItem(CRED_KEY);
    return raw ? (JSON.parse(raw) as PanelCred) : null;
  } catch {
    return null;
  }
}

export function setCred(cred: PanelCred) {
  localStorage.setItem(CRED_KEY, JSON.stringify(cred));
}

export function clearCred() {
  localStorage.removeItem(CRED_KEY);
}

export type RepoItem = {
  name: string;
  path: string;
  type: "file" | "dir";
  sha: string;
  size?: number;
};

export type RepoCommit = {
  sha: string;
  message: string;
  date: string;
  author: string;
  url: string;
};

/** Chama a Edge Function `github`, que faz o commit no repositório. */
export async function ghAction<T = any>(
  action: string,
  payload: Record<string, unknown> = {},
  cred?: PanelCred,
): Promise<T> {
  const auth = cred ?? getCred();
  if (!auth) throw new Error("Sessão do painel expirada. Entre novamente.");

  const { data, error } = await supabase.functions.invoke("github", {
    body: { action, username: auth.username, password: auth.password, ...payload },
  });

  if (error) {
    let details = error.message;
    const ctx = (error as unknown as { context?: Response }).context;
    if (ctx && typeof ctx.text === "function") {
      try {
        details = await ctx.text();
      } catch {
        /* mantém a mensagem original */
      }
    }
    throw new Error(details);
  }

  if (data && typeof data === "object" && "error" in (data as object)) {
    throw new Error(String((data as { error: unknown }).error));
  }

  return data as T;
}
