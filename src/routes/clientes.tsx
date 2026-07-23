import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/clientes")({
  head: () => ({
    meta: [
      { title: "Clientes — Nilda Contabilidade" },
      { name: "description", content: "Cooperativas e empresas de diversos ramos que confiam na Nilda Contabilidade." },
      { property: "og:title", content: "Clientes — Nilda Contabilidade" },
      { property: "og:description", content: "Cooperativas e empresas atendidas pela Nilda Contabilidade." },
      { property: "og:url", content: "/clientes" },
    ],
    links: [{ rel: "canonical", href: "/clientes" }],
  }),
  component: Clientes,
});

const clients = [
  { src: "/clients/betimcoop.jpg", name: "Betimcoop", desc: "Transporte e Logística" },
  { src: "/clients/rodar-brasil.jpg", name: "Rodar Brasil", desc: "Cooperativa de Transportes" },
  { src: "/clients/ouro-minas.jpg", name: "Ouro Minas", desc: "Cooperativa de Transporte" },
  { src: "/clients/coopervia.jpg", name: "Coopervia", desc: "Cooperativa de Transporte" },
  { src: "/clients/coopersind.jpg", name: "Coopersind", desc: "Cooperativa de Transporte" },
  { src: "/clients/cooperinter.jpg", name: "Cooperinter", desc: "Transporte Intermunicipal e Interestadual, Cargas e Turismo — MG" },
  { src: "/clients/coopertraf.jpg", name: "Coopertraf", desc: "Serviços de Transporte Rodoviário Público de Passageiros" },
  { src: "/clients/coopitatiaiucu.jpg", name: "Coopitatiaiuçu", desc: "Cooperativa de Transporte" },
  { src: "/clients/sintesc.jpg", name: "SINTESC", desc: "Sindicato dos Transportadores Escolares — RMBH" },
  { src: "/clients/simocemg.jpg", name: "SIMOCEMG", desc: "Sindicato dos Motoristas Cegonheiros de MG" },
  { src: "/clients/coopertransp.jpg", name: "Coopertransp", desc: "Transporte de Passageiros e Cargas — Nova Lima" },
  { src: "/clients/angel-tour.jpg", name: "Angel Tour", desc: "Turismo e Transporte" },
  { src: "/clients/maister.jpg", name: "Maister Motores", desc: "" },
  { src: "/clients/gpg-seguros.jpg", name: "GPG Seguros", desc: "Corretora de Seguros" },
  { src: "/clients/tca.jpg", name: "TCA", desc: "Estudos, Projetos e Monitoramento Ambiental" },
  { src: "/clients/ox-genium.jpg", name: "Ox-Genium", desc: "" },
  { src: "/clients/marreta.jpg", name: "Frango do Marreta", desc: "" },
  { src: "/clients/abrasil.jpg", name: "Abrasil Digital Print", desc: "" },
  { src: "/clients/kamargos.jpg", name: "Foto Studio Kamargos", desc: "" },
  { src: "/clients/joelma-ferraz.jpg", name: "Joelma Ferraz", desc: "" },
];

function Clientes() {
  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading
            eyebrow="Clientes"
            title="Cooperativas e empresas de diversos setores confiam no nosso trabalho."
            description="Atendemos organizações de pequeno, médio e grande porte, em ramos variados de atividade, com destaque para cooperativas de transporte."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {clients.map((c) => (
            <div
              key={c.name}
              className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-soft)]"
            >
              <div className="flex h-24 w-full items-center justify-center">
                <img
                  src={c.src}
                  alt={`Logo ${c.name}`}
                  loading="lazy"
                  decoding="async"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div>
                <div className="text-sm font-semibold text-primary">{c.name}</div>
                {c.desc && <div className="mt-1 text-xs text-muted-foreground">{c.desc}</div>}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Quer se juntar à nossa carteira de clientes?{" "}
          <a href="/contato" className="text-primary hover:text-accent">
            Fale conosco
          </a>
          .
        </p>
      </section>
    </>
  );
}
