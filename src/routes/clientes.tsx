import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";
import betimcoop from "../assets/clients/betimcoop.jpg.asset.json";
import rodarBrasil from "../assets/clients/rodar-brasil.jpg.asset.json";
import sintesc from "../assets/clients/sintesc.jpg.asset.json";
import gpgSeguros from "../assets/clients/gpg-seguros.jpg.asset.json";
import oxGenium from "../assets/clients/ox-genium.jpg.asset.json";
import coopertransp from "../assets/clients/coopertransp.jpg.asset.json";
import joelmaFerraz from "../assets/clients/joelma-ferraz.jpg.asset.json";
import angelTour from "../assets/clients/angel-tour.jpg.asset.json";
import simocemg from "../assets/clients/simocemg.jpg.asset.json";
import marreta from "../assets/clients/marreta.jpg.asset.json";
import abrasil from "../assets/clients/abrasil.jpg.asset.json";
import kamargos from "../assets/clients/kamargos.jpg.asset.json";
import maister from "../assets/clients/maister.jpg.asset.json";
import tca from "../assets/clients/tca.jpg.asset.json";

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
  { src: rodarBrasil.url, name: "Rodar Brasil", desc: "Cooperativa de Transportes" },
  { src: sintesc.url, name: "SINTESC", desc: "Sindicato dos Transportadores Escolares — RMBH" },
  { src: simocemg.url, name: "SIMOCEMG", desc: "Sindicato dos Motoristas Cegonheiros de MG" },
  { src: coopertransp.url, name: "Coopertransp", desc: "Transporte de Passageiros e Cargas — Nova Lima" },
  { src: angelTour.url, name: "Angel Tour", desc: "Turismo e Transporte" },
  { src: gpgSeguros.url, name: "GPG Seguros", desc: "Corretora de Seguros" },
  { src: oxGenium.url, name: "Ox-Genium", desc: "" },
  { src: marreta.url, name: "Frango do Marreta", desc: "" },
  { src: abrasil.url, name: "Abrasil Digital Print", desc: "" },
  { src: joelmaFerraz.url, name: "Joelma Ferraz", desc: "" },
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
