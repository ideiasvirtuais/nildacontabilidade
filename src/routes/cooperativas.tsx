import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";
import { CheckCircle2, ArrowRight, Users, Scale, FileText, HelpCircle } from "lucide-react";
import { useState } from "react";
import { breadcrumbScript } from "../lib/breadcrumb";

export const Route = createFileRoute("/cooperativas")({
  head: () => ({
    meta: [
      { title: "Contabilidade e Assessoria para Cooperativas — Nilda Contabilidade" },
      { name: "description", content: "Especialistas em cooperativas de transporte de cargas e passageiros. Governança, AGO/AGE, Conselho Fiscal, FATES, Reforma Tributária, ANTT e CIOT." },
      { property: "og:title", content: "Contabilidade e Assessoria para Cooperativas" },
      { property: "og:description", content: "Assessoria especializada para cooperativas de transporte em todo o Brasil." },
      { property: "og:url", content: "/cooperativas" },
    ],
    links: [{ rel: "canonical", href: "/cooperativas" }],
  }),
  component: Cooperativas,
});

const atendemos = [
  "Cooperativas de transporte de cargas",
  "Cooperativas de passageiros",
  "Cooperativas de transporte de minérios",
  "Cooperativas hortifrutigranjeiras",
  "Cooperativas de cegonheiros (transporte de veículos)",
  "Cooperativas de transporte escolar",
  "Cooperativas participantes de licitações públicas",
];

const servicos = [
  { icon: Users, title: "Governança cooperativa", desc: "Estruturação e acompanhamento contínuo da governança do quadro social." },
  { icon: FileText, title: "AGO, AGE e Conselho Fiscal", desc: "Preparação, condução e formalização de assembleias e do Conselho Fiscal." },
  { icon: Scale, title: "Estatutos sociais", desc: "Elaboração, revisão e atualização de estatutos e regimentos internos." },
  { icon: CheckCircle2, title: "FATES e Fundo de Reserva", desc: "Controle, aplicação e prestação de contas dos fundos obrigatórios." },
  { icon: Scale, title: "Planejamento tributário", desc: "Regimes tributários adequados ao ato cooperado e ato não cooperado." },
  { icon: FileText, title: "Reforma Tributária", desc: "Análise de impactos e adequação das cooperativas ao novo modelo." },
  { icon: CheckCircle2, title: "ANTT e CIOT", desc: "Regularização, emissão e acompanhamento junto à ANTT e CIOT." },
  { icon: FileText, title: "eSocial e DCTFWeb", desc: "Envio, conformidade e correção de obrigações digitais." },
  { icon: Users, title: "Orientação à diretoria e cooperados", desc: "Suporte técnico e treinamento contínuo para gestão cooperativista." },
];

const problemas = [
  "Falta de separação entre ato cooperado e não cooperado",
  "Assembleias mal formalizadas ou fora do prazo estatutário",
  "INSS de cooperados calculado de forma equivocada",
  "Ausência de controle sobre FATES e Fundo de Reserva",
  "Inconsistências no eSocial e DCTFWeb",
  "Estatutos desatualizados frente à legislação vigente",
  "Insegurança sobre os impactos da Reforma Tributária",
];

const faq = [
  {
    q: "O que é considerado ato cooperado?",
    a: "É a operação realizada entre a cooperativa e seus cooperados, ou entre cooperativas associadas, para o cumprimento do objeto social. O tratamento contábil e tributário é diferente do ato não cooperado.",
  },
  {
    q: "Cooperativas precisam pagar INSS sobre os cooperados?",
    a: "Sim, existe recolhimento previdenciário específico, cujo cálculo depende da natureza da atividade, da forma de remuneração e da legislação vigente para cada segmento.",
  },
  {
    q: "Como a Reforma Tributária afeta as cooperativas?",
    a: "A Reforma Tributária traz mudanças relevantes para o setor. Fazemos análise de impactos e ajustes estratégicos para preservar a competitividade e o adequado tratamento do ato cooperado.",
  },
  {
    q: "Vocês atendem cooperativas fora de Minas Gerais?",
    a: "Sim. Atendemos cooperativas em todo o Brasil, com experiência em operações interestaduais nos mais diversos segmentos.",
  },
];

function Cooperativas() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto max-w-7xl px-6 py-24 text-primary-foreground">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs uppercase tracking-widest text-accent">
            Especialidade
          </div>
          <h1 className="max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            Contabilidade e assessoria para <span className="text-accent">cooperativas</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Somos referência em cooperativas de transporte de cargas e passageiros, com atendimento em todo o Brasil.
            Vamos muito além da contabilidade: cuidamos da governança, das assembleias e da orientação estratégica da
            sua cooperativa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contato" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground shadow-[var(--shadow-orange)] hover:-translate-y-0.5">
              Falar com um especialista <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading eyebrow="Quem atendemos" title="Cooperativas de transporte e afins." />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {atendemos.map((a) => (
            <li key={a} className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="text-foreground">{a}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading eyebrow="Principais serviços" title="Assessoria completa para o cooperativismo." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicos.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent/15 text-accent">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Problemas que resolvemos" title="Onde as cooperativas mais tropeçam." />
            <p className="mt-6 text-muted-foreground">
              Identificamos e corrigimos os pontos críticos que geram autuações, retrabalho e insegurança na gestão
              cooperativista.
            </p>
          </div>
          <ul className="space-y-3">
            {problemas.map((p) => (
              <li key={p} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-sm">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                  ✕
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
          <div className="rounded-3xl bg-primary p-10 text-primary-foreground shadow-[var(--shadow-elegant)]">
            <div className="text-xs uppercase tracking-[0.25em] text-accent">Governança cooperativa</div>
            <h3 className="mt-2 font-display text-3xl">Estrutura sólida gera decisão segura.</h3>
            <p className="mt-4 text-primary-foreground/80">
              Cooperativas bem governadas conduzem assembleias formais, mantêm o Conselho Fiscal ativo, gerenciam FATES e
              Fundo de Reserva com clareza e oferecem transparência ao quadro social.
            </p>
          </div>
          <div className="rounded-3xl border border-accent/40 bg-card p-10 shadow-[var(--shadow-soft)]">
            <div className="text-xs uppercase tracking-[0.25em] text-accent">Reforma Tributária</div>
            <h3 className="mt-2 font-display text-3xl text-primary">Prepare a sua cooperativa.</h3>
            <p className="mt-4 text-muted-foreground">
              Analisamos os impactos da Reforma Tributária no seu regime, revisamos o tratamento do ato cooperado e
              construímos um plano de adequação sob medida.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <SectionHeading eyebrow="FAQ" title="Perguntas frequentes." />
        <div className="mt-10 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {faq.map((f, i) => (
            <button
              key={f.q}
              onClick={() => setOpen(open === i ? -1 : i)}
              className="flex w-full items-start gap-4 p-6 text-left"
            >
              <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div className="flex-1">
                <div className="font-medium text-primary">{f.q}</div>
                {open === i && <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>}
              </div>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
