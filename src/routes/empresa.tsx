import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";
import {
  CheckCircle2,
  ArrowRight,
  MapPin,
  GraduationCap,
  Gavel,
  Users2,
  Landmark,
  CalendarClock,
  Globe2,
} from "lucide-react";
import empresaContadora from "../assets/empresa-contadora.jpg";

export const Route = createFileRoute("/empresa")({
  head: () => ({
    meta: [
      { title: "A Empresa — Nilda Contabilidade | Betim/MG desde 1996" },
      {
        name: "description",
        content:
          "Fundada em 1996 em Betim/MG, a Nilda Contabilidade oferece contabilidade, consultoria tributária e assessoria jurídica especializada para cooperativas e empresas em todo o Brasil.",
      },
      {
        name: "keywords",
        content:
          "escritório contábil Betim, Nilda Luiz contadora, contabilidade em Belo Horizonte, especialista em cooperativas, contabilidade para cooperativas",
      },
      { property: "og:title", content: "A Empresa — Nilda Contabilidade" },
      {
        property: "og:description",
        content:
          "Escritório contábil em Betim/MG desde 1996, especialista em cooperativas de transporte, com atendimento em todo o Brasil.",
      },
      { property: "og:url", content: "https://nildacontabilidade.lovable.app/empresa" },
    ],
    links: [{ rel: "canonical", href: "https://nildacontabilidade.lovable.app/empresa" }],
  }),
  component: Empresa,
});

const fundadora = [
  { icon: GraduationCap, text: "Bacharel em Ciências Contábeis" },
  { icon: Gavel, text: "Pós-graduada em Direito Tributário" },
  { icon: Users2, text: "Especialista em cooperativas" },
  { icon: Landmark, text: "Especialista em tributação" },
  { icon: CalendarClock, text: "Mais de 30 anos de experiência" },
  { icon: Globe2, text: "Atendimento em todo o Brasil" },
];

function Empresa() {
  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading
            eyebrow="A Empresa"
            title="Contabilidade e assessoria especializada desde 1996."
            description="Fundada em Betim/MG, a Nilda Contabilidade atua há quase três décadas com serviços contábeis, tributários, societários e assessoria jurídica especializada para cooperativas, transportadoras e empresas em todo o Brasil."
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-6 py-20 md:grid-cols-[5fr_7fr] md:gap-14">
        <div className="relative order-last mx-auto w-full max-w-sm md:sticky md:top-24 md:order-first md:mx-0 md:max-w-none">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-accent/10" />
          <img
            src={empresaContadora}
            alt="Nilda Luiz, fundadora da Nilda Contabilidade, em seu escritório em Betim/MG"
            width={1024}
            height={1280}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-3xl object-cover object-top shadow-[var(--shadow-soft)]"
          />
        </div>
        <div className="space-y-5 text-muted-foreground">
          <h2 className="font-display text-3xl text-primary">Nossa história</h2>
          <p>
            A Nilda Contabilidade foi fundada em 1996 na cidade de <strong className="text-primary">Betim/MG</strong>.
            Desde então, atua oferecendo serviços contábeis, tributários, societários e assessoria jurídica especializada
            para cooperativas, transportadoras e empresas.
          </p>
          <p>
            Ao longo dos anos, construímos expertise no segmento cooperativista — em especial cooperativas de transporte
            de cargas, passageiros e hortifrutigranjeiros — e ampliamos nosso atendimento para clientes em todo o
            Brasil, com experiência em operações interestaduais e nos mais diversos setores do transporte, indústria,
            comércio e serviços.
          </p>
          <p>
            Nosso trabalho é guiado por seriedade, comprometimento e transparência — pilares maiores do nosso
            empreendimento e da relação de confiança que construímos com cada cliente.
          </p>
          <div className="flex items-center gap-3 pt-4 text-sm text-primary">
            <MapPin className="h-5 w-5 text-accent" /> Sede em Betim/MG · Atendimento em todo o Brasil
          </div>
        </div>
      </section>

      {/* Fundadora ampliada */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl border border-border bg-card p-10 shadow-[var(--shadow-soft)] md:p-14">
          <div className="text-xs uppercase tracking-[0.25em] text-accent">A fundadora</div>
          <h3 className="mt-2 font-display text-4xl text-primary">Nilda Luiz</h3>
          <p className="mt-1 text-sm text-muted-foreground">Contadora — CRC/MG 064314/O-3</p>
          <p className="mt-6 max-w-3xl text-muted-foreground">
            Referência nacional em contabilidade para cooperativas, Nilda Luiz conduz há décadas a assessoria contábil,
            tributária e jurídica de cooperativas de transporte, cooperativas em geral e empresas dos mais diversos
            segmentos.
          </p>
          <ul className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
            {fundadora.map((c) => (
              <li key={c.text} className="flex items-start gap-3 rounded-xl border border-border bg-background p-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/15 text-accent">
                  <c.icon className="h-5 w-5" />
                </span>
                <span className="pt-1.5 text-foreground">{c.text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
            Sob sua liderança, a Nilda Contabilidade tornou-se referência em cooperativas de transporte de cargas,
            passageiros e hortifrutigranjeiros, com atuação nacional.
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Desde 1996", desc: "Oferecendo soluções contábeis e assessoria especializada." },
              { title: "Especialistas", desc: "Cooperativas de transporte de cargas, passageiros e hortifrutigranjeiros." },
              { title: "Atendimento nacional", desc: "Clientes atendidos em todo o Brasil." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl bg-card p-8 shadow-[var(--shadow-soft)]">
                <div className="font-display text-2xl text-primary">{f.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-primary px-10 py-14 text-primary-foreground md:px-16">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <h3 className="max-w-xl font-display text-3xl md:text-4xl">
              Contabilidade, consultoria e assessoria para cooperativas, transportadoras e empresas.
            </h3>
            <Link to="/cooperativas" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:-translate-y-0.5">
              Assessoria para cooperativas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
