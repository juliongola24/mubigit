import { createFileRoute } from "@tanstack/react-router";
import NossaEquipe from "@/pages/NossaEquipe";

export const Route = createFileRoute("/equipe")({
  head: () => ({
    meta: [
      { title: "Nossa Equipe | Centro Mubissule" },
      {
        name: "description",
        content:
          "Conheça os terapeutas e consultores do Centro Mubissule de medicina natural em Angola.",
      },
      { property: "og:title", content: "Nossa Equipe | Centro Mubissule" },
      {
        property: "og:description",
        content: "Terapeutas e consultores do Centro Mubissule.",
      },
    ],
  }),
  component: NossaEquipe,
});
