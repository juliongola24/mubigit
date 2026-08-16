import { createFileRoute } from "@tanstack/react-router";
import TermosUso from "@/pages/TermosUso";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos de Uso | Mubissule" },
      {
        name: "description",
        content:
          "Condições de utilização do site e dos conteúdos de saúde do Centro Mubissule.",
      },
      { property: "og:title", content: "Termos de Uso | Mubissule" },
      {
        property: "og:description",
        content: "Regras de utilização do site do Centro Mubissule.",
      },
    ],
  }),
  component: TermosUso,
});
