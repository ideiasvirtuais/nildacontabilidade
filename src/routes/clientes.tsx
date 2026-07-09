import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";
import { Building } from "lucide-react";
import { breadcrumbScript } from "../lib/breadcrumb";

export const Route = createFileRoute("/clientes")({
  head: () => ({
    meta: [
      { title: "Clientes — Nilda Contabilidade" },
      { name: "description", content: "Empresas de diversos ramos que confiam na Nilda Contabilidade." },
      { property: "og:title", content: "Clientes — Nilda Contabilidade" },
      { property: "og:description", content: "Empresas atendidas pela Nilda Contabilidade." },
      { property: "og:url", content: "/clientes" },
    ],
    links: [{ rel: "canonical", href: "/clientes" }],
  }),
  component: Clientes,
});

function Clientes() {
  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading
            eyebrow="Clientes"
            title="Empresas de diversos setores confiam no nosso trabalho."
            description="Atendemos organizações de pequeno, médio e grande porte, em ramos variados de atividade."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-soft)]"
            >
              <div className="grid h-14 w-14 place-items-center rounded-full bg-secondary text-primary">
                <Building className="h-6 w-6" />
              </div>
              <div className="text-sm text-muted-foreground">Cliente {String(i + 1).padStart(2, "0")}</div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Quer se juntar à nossa carteira de clientes? <a href="/contato" className="text-primary hover:text-accent">Fale conosco</a>.
        </p>
      </section>
    </>
  );
}
