import { useCallback, useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { ghAction, type RepoCommit, type RepoItem } from "@/lib/github";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import {
  ChevronLeft,
  File as FileIcon,
  Folder,
  GitCommitVertical,
  LogOut,
  Plus,
  RefreshCw,
  Save,
  Trash2,
} from "lucide-react";

const parentOf = (path: string) => path.split("/").slice(0, -1).join("/");

export default function Painel() {
  const [session, setSession] = useState<Session | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setChecking(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    document.title = "Painel de Publicação | Mubissule";
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, nofollow";
    document.head.appendChild(robots);
    return () => robots.remove();
  }, []);

  if (checking) {
    return (
      <main className="flex min-h-screen items-center justify-center text-muted-foreground">
        A carregar painel…
      </main>
    );
  }

  return (
    <>
      {session ? <Editor onSignOut={() => supabase.auth.signOut()} /> : <Login />}
    </>
  );
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) toast.error(error.message);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Painel Mubissule</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={submit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Palavra-passe</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "A entrar…" : "Entrar"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}

function Editor({ onSignOut }: { onSignOut: () => void }) {
  const [repo, setRepo] = useState<{ owner: string; repo: string; branch: string } | null>(null);
  const [path, setPath] = useState("");
  const [items, setItems] = useState<RepoItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<{ path: string; sha?: string } | null>(null);
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const [commits, setCommits] = useState<RepoCommit[]>([]);

  const loadDir = useCallback(async (dir: string) => {
    setLoading(true);
    try {
      const res = await ghAction<{ items: RepoItem[] }>("list", { path: dir });
      setItems(res.items);
      setPath(dir);
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  const loadCommits = useCallback(async () => {
    try {
      const res = await ghAction<{ commits: RepoCommit[] }>("commits");
      setCommits(res.commits);
    } catch {
      /* histórico é opcional */
    }
  }, []);

  useEffect(() => {
    ghAction<{ owner: string; repo: string; branch: string }>("config")
      .then(setRepo)
      .catch((e) => toast.error((e as Error).message));
    loadDir("");
    loadCommits();
  }, [loadDir, loadCommits]);

  const openFile = async (item: RepoItem) => {
    setLoading(true);
    try {
      const res = await ghAction<{ path: string; sha: string; content: string }>("read", {
        path: item.path,
      });
      setFile({ path: res.path, sha: res.sha });
      setContent(res.content);
      setMessage(`chore(painel): atualiza ${res.path}`);
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const createFile = () => {
    const name = window.prompt("Nome do novo ficheiro (dentro de /" + path + ")");
    if (!name) return;
    const full = path ? `${path}/${name}` : name;
    setFile({ path: full });
    setContent("");
    setMessage(`feat(painel): cria ${full}`);
  };

  const save = async () => {
    if (!file) return;
    setSaving(true);
    try {
      const res = await ghAction<{ sha: string; commit: string }>("save", {
        path: file.path,
        content,
        sha: file.sha,
        message,
      });
      setFile({ ...file, sha: res.sha });
      toast.success("Commit enviado ao GitHub — a Vercel vai reconstruir o site.");
      loadDir(path);
      loadCommits();
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setSaving(false);
    }
  };

  const remove = async (item: RepoItem) => {
    if (!window.confirm(`Apagar ${item.path} do repositório?`)) return;
    try {
      await ghAction("delete", { path: item.path, sha: item.sha });
      toast.success(`${item.name} removido.`);
      if (file?.path === item.path) setFile(null);
      loadDir(path);
      loadCommits();
    } catch (e) {
      toast.error((e as Error).message);
    }
  };

  return (
    <main className="min-h-screen bg-muted/30 p-4 md:p-8">
      <header className="mx-auto mb-6 flex max-w-6xl flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">Painel de Publicação</h1>
          <p className="text-sm text-muted-foreground">
            {repo ? `${repo.owner}/${repo.repo} · branch ${repo.branch}` : "A ligar ao GitHub…"}
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={onSignOut}>
          <LogOut className="mr-2 h-4 w-4" /> Sair
        </Button>
      </header>

      <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-[320px_1fr]">
        <Card>
          <CardHeader className="flex-row items-center justify-between space-y-0">
            <CardTitle className="text-base">/{path}</CardTitle>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" onClick={createFile} title="Novo ficheiro">
                <Plus className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => loadDir(path)}
                title="Actualizar"
              >
                <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-1">
            {path && (
              <button
                onClick={() => loadDir(parentOf(path))}
                className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-sm hover:bg-accent"
              >
                <ChevronLeft className="h-4 w-4" /> voltar
              </button>
            )}
            {items.map((item) => (
              <div key={item.path} className="flex items-center gap-1">
                <button
                  onClick={() => (item.type === "dir" ? loadDir(item.path) : openFile(item))}
                  className="flex flex-1 items-center gap-2 truncate rounded px-2 py-1.5 text-left text-sm hover:bg-accent"
                >
                  {item.type === "dir" ? (
                    <Folder className="h-4 w-4 shrink-0 text-primary" />
                  ) : (
                    <FileIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
                  )}
                  <span className="truncate">{item.name}</span>
                </button>
                {item.type === "file" && (
                  <Button variant="ghost" size="icon" onClick={() => remove(item)}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                {file ? file.path : "Selecione um ficheiro"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                disabled={!file}
                spellCheck={false}
                className="min-h-[420px] font-mono text-xs"
                placeholder="Conteúdo do ficheiro…"
              />
              <div className="flex flex-col gap-2 sm:flex-row">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Mensagem do commit"
                  disabled={!file}
                />
                <Button onClick={save} disabled={!file || saving}>
                  <Save className="mr-2 h-4 w-4" />
                  {saving ? "A enviar…" : "Commit"}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <GitCommitVertical className="h-4 w-4" /> Últimos commits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {commits.length === 0 && (
                <p className="text-sm text-muted-foreground">Sem histórico disponível.</p>
              )}
              {commits.map((c) => (
                <a
                  key={c.sha}
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded px-2 py-1.5 text-sm hover:bg-accent"
                >
                  <span className="font-mono text-xs text-muted-foreground">{c.sha}</span>{" "}
                  {c.message.split("\n")[0]}
                </a>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
