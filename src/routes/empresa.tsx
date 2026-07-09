import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";
import { CheckCircle2, ArrowRight, MapPin } from "lucide-react";
import empresaContadora from "../assets/empresa-contadora.jpg";

export const Route = createFileRoute("/empresa")({
  head: () => ({
    meta: [
      { title: "A Empresa — Nilda Contabilidade" },
      { name: "description", content: "Fundada em 1996 em Betim/MG, a Nilda Contabilidade oferece serviços contábeis, tributários e assessoria especializada para cooperativas, transportadoras e empresas em todo o Brasil." },
      { property: "og:title", content: "A Empresa — Nilda Contabilidade" },
      { property: "og:description", content: "Escritório contábil em Betim/MG desde 1996, com atendimento em todo o Brasil." },
      { property: "og:url", content: "/empresa" },
    ],
    links: [{ rel: "canonical", href: "/empresa" }],
  }),
  component: Empresa,
});

const contadora = [
  "Bacharel em Ciências Contábeis",
  "Pós-graduada em Direito Tributário",
  "Especialista em cooperativas",
  "Fundadora da Nilda Contabilidade desde 1996",
];

function Empresa() {
  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading
            eyebrow="A Empresa"
            title="Contabilidade e assessoria especializada desde 1996."
            description="Fundada em Betim/MG, a Nilda Contabilidade atua há quase três décadas com serviços contábeis, tributários, societários e assessoria especializada para cooperativas, transportadoras e empresas em todo o Brasil."
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
        <div className="relative order-last md:order-first">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-accent/10" />
          <img
            src={empresaContadora}
            alt="Nilda Luiz, fundadora da Nilda Contabilidade, em seu escritório em Betim/MG"
            width={1024}
            height={1280}
            loading="lazy"
            className="h-full w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]"
          />
        </div>
        <div className="space-y-5 text-muted-foreground">
          <h2 className="font-display text-3xl text-primary">Nossa história</h2>
          <p>
            A Nilda Contabilidade foi fundada em 1996 na cidade de <strong className="text-primary">Betim/MG</strong>.
            Desde então, atua oferecendo serviços contábeis, tributários, societários e assessoria especializada para
            cooperativas, transportadoras e empresas.
          </p>
          <p>
            Ao longo dos anos, construímos expertise no segmento cooperativista e ampliamos nosso atendimento para
            clientes em todo o Brasil — com experiência em operações interestaduais e nos mais diversos setores do
            transporte, indústria, comércio e serviços.
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

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl border border-border bg-card p-10 shadow-[var(--shadow-soft)] md:p-14">
          <div className="text-xs uppercase tracking-[0.25em] text-accent">A fundadora</div>
          <h3 className="mt-2 font-display text-4xl text-primary">Nilda Luiz</h3>
          <p className="mt-1 text-sm text-muted-foreground">Contadora — CRC/MG 064314/O-3</p>
          <ul className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
            {contadora.map((c) => (
              <li key={c} className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-foreground">{c}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
            Sob sua liderança, a Nilda Contabilidade tornou-se referência em cooperativas de transporte de cargas e
            passageiros, com atuação nacional.
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Desde 1996", desc: "Oferecendo soluções contábeis e assessoria especializada." },
              { title: "Especialistas", desc: "Cooperativas de transporte de cargas e passageiros." },
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
