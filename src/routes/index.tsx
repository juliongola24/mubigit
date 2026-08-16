import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mubissule | Centro de Medicina Natural em Angola" },
      {
        name: "description",
        content:
          "Centro Mubissule: desintoxicação, massagem terapêutica, ginecologia e urologia natural, com artigos de saúde em português.",
      },
      { property: "og:title", content: "Mubissule | Centro de Medicina Natural" },
      {
        property: "og:description",
        content:
          "Tratamentos naturais, check-up geral e conteúdos de saúde do Centro Mubissule em Angola.",
      },
    ],
  }),
  component: Index,
});
