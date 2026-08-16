import { createFileRoute } from "@tanstack/react-router";
import Painel from "@/pages/Painel";

export const Route = createFileRoute("/painel")({
  head: () => ({
    meta: [
      { title: "Painel de Publicação | Mubissule" },
      {
        name: "description",
        content: "Painel interno de publicação de conteúdos do Centro Mubissule.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Painel de Publicação | Mubissule" },
      {
        property: "og:description",
        content: "Área interna de gestão de conteúdos do Centro Mubissule.",
      },
    ],
  }),
  component: Painel,
});
