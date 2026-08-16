import { createFileRoute } from "@tanstack/react-router";
import Privacidade from "@/pages/Privacidade";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Mubissule" },
      {
        name: "description",
        content:
          "Como o Centro Mubissule recolhe, usa e protege os dados pessoais dos visitantes e pacientes.",
      },
      { property: "og:title", content: "Política de Privacidade | Mubissule" },
      {
        property: "og:description",
        content: "Tratamento e proteção de dados pessoais no Centro Mubissule.",
      },
    ],
  }),
  component: Privacidade,
});
