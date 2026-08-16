import { createFileRoute } from "@tanstack/react-router";
import SobreNos from "@/pages/SobreNos";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre o Centro Mubissule | Medicina Natural" },
      {
        name: "description",
        content:
          "Conheça a história, a missão e a abordagem de medicina natural do Centro Mubissule em Angola.",
      },
      { property: "og:title", content: "Sobre o Centro Mubissule" },
      {
        property: "og:description",
        content: "História, missão e abordagem terapêutica do Centro Mubissule.",
      },
    ],
  }),
  component: SobreNos,
});
