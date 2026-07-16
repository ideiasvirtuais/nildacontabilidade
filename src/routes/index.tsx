import { createFileRoute, Link } from "@tanstack/react-router";
import heroCooperativas from "../assets/hero-cooperativas.jpg";
import empresaContadora from "../assets/empresa-contadora.jpg";
import {
  ArrowRight,
  Truck,
  Users2,
  Building2,
  Scale,
  MapPin,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  CalendarClock,
  Globe2,
  Landmark,
  Gavel,
  Receipt,
  BadgePercent,
  Handshake,
  GraduationCap,
  Settings2,
  RefreshCcw,
} from "lucide-react";
import { ClientsCarousel } from "../components/ClientsCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nilda Contabilidade — Contabilidade para Cooperativas e Empresas" },
      {
        name: "description",
        content:
          "Desde 1996: contabilidade, consultoria tributária e assessoria jurídica especializada para cooperativas de transporte, cooperativas em geral e empresas em todo o Brasil.",
      },
      {
        name: "keywords",
        content:
          "contabilidade em Betim, escritório de contabilidade Betim MG, contador em Betim, contabilidade Belo Horizonte, contabilidade Contagem, contabilidade para cooperativas, cooperativas de transporte, assessoria tributária Betim, planejamento tributário MG, reforma tributária, recuperação de créditos tributários, auditoria em cooperativas",
      },
      { property: "og:title", content: "Nilda Contabilidade — Contabilidade para Cooperativas e Empresas" },
      {
        property: "og:description",
        content:
          "Desde 1996 oferecendo soluções contábeis, tributárias e jurídicas para cooperativas e empresas dos mais diversos segmentos, com atendimento personalizado em todo o Brasil.",
      },
      { property: "og:url", content: "https://nildacontabilidade.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://nildacontabilidade.lovable.app/" }],
  }),
  component: Home,
});

const porQue = [
  { icon: CalendarClock, title: "Desde 1996", desc: "Quase 30 anos de atuação consolidada no setor contábil." },
  { icon: Globe2, title: "Atendimento em todo o Brasil", desc: "Cooperativas e empresas atendidas em todos os estados." },
  { icon: Truck, title: "Especialização em Cooperativas", desc: "Referência nacional em cooperativas de transporte." },
  { icon: Scale, title: "Contabilidade e Jurídico integrados", desc: "Assessoria contábil e jurídica sob o mesmo teto." },
  { icon: RefreshCcw, title: "Especialistas em Reforma Tributária", desc: "Análise de impactos e plano de transição." },
  { icon: BadgePercent, title: "Planejamento Tributário", desc: "Regimes adequados e economia dentro da lei." },
  { icon: Receipt, title: "Recuperação de Créditos Tributários", desc: "Levantamento, compensação e ressarcimento." },
];

const especialidades = [
  { icon: Truck, title: "Cooperativas de Transporte", desc: "Cargas, passageiros e hortifrutigranjeiros com expertise em operações interestaduais." },
  { icon: Users2, title: "Cooperativismo", desc: "Governança, AGO/AGE, Conselho Fiscal, FATES e Fundo de Reserva." },
  { icon: Building2, title: "Empresas em Geral", desc: "Indústria, comércio, construção civil e prestação de serviços." },
  { icon: Scale, title: "Licitações Públicas", desc: "Saúde, educação e transporte — contratos públicos por licitação." },
];

const segmentos = [
  "Cooperativas de transporte de cargas",
  "Cooperativas de passageiros",
  "Transportadoras",
  "Transporte de minérios",
  "Transporte hortifrutigranjeiro",
  "Transporte de veículos (cegonheiros)",
  "Transporte escolar",
  "Licitações públicas",
  "Indústria e comércio",
  "Construção civil",
  "Prestação de serviços",
  "Planejamento tributário",
];

const diferenciais = [
  { icon: Handshake, title: "Atendimento consultivo" },
  { icon: CalendarClock, title: "30 anos de experiência" },
  { icon: Truck, title: "Especialização em cooperativas" },
  { icon: Globe2, title: "Atendimento em todo o Brasil" },
  { icon: Users2, title: "Equipe especializada" },
  { icon: RefreshCcw, title: "Atualização permanente sobre a Reforma Tributária" },
  { icon: Settings2, title: "Soluções personalizadas" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div className="text-primary-foreground">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs uppercase tracking-widest text-accent">
              <Sparkles className="h-3.5 w-3.5" /> Desde 1996 · Atendimento em todo o Brasil
            </div>
            <h1 className="font-display text-4xl leading-[1.05] md:text-6xl">
              Contabilidade, Consultoria Tributária e Assessoria Jurídica Especializada para{" "}
              <span className="text-accent">Cooperativas e Empresas</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
              Desde 1996 oferecendo soluções contábeis, tributárias e jurídicas para cooperativas e empresas dos mais
              diversos segmentos, com atendimento personalizado em todo o território nacional.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/cooperativas"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground shadow-[var(--shadow-orange)] transition-transform hover:-translate-y-0.5"
              >
                Assessoria para cooperativas <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-full border border-accent/50 bg-accent/15 px-6 py-3 text-sm font-medium text-accent hover:bg-accent/25"
              >
                Solicite um diagnóstico tributário <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm text-primary-foreground hover:bg-white/10"
              >
                Fale conosco
              </Link>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/15 pt-8">
              <div>
                <dt className="text-xs uppercase tracking-widest text-accent">Fundação</dt>
                <dd className="mt-1 font-display text-2xl">1996</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-accent">Sede</dt>
                <dd className="mt-1 font-display text-2xl">Betim/MG</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-accent">Atuação</dt>
                <dd className="mt-1 font-display text-2xl">Brasil</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-accent/20 blur-3xl" />
            <img
              src={heroCooperativas}
              alt="Reunião de assessoria contábil para cooperativa de transporte, com frota de caminhões e ônibus ao fundo"
              width={1600}
              height={1104}
              className="relative rounded-2xl shadow-[var(--shadow-elegant)]"
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-card p-5 shadow-[var(--shadow-elegant)] md:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-accent/15">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div className="text-sm">
                  <div className="font-medium text-primary">Atendimento nacional</div>
                  <div className="text-muted-foreground">Todos os estados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que escolher */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">Nossos diferenciais</div>
          <h2 className="font-display text-4xl text-primary md:text-5xl">
            Por que escolher a Nilda Contabilidade?
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {porQue.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-soft)]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/15 text-accent">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg text-primary">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Faixa de destaque: Cooperativas de Transporte */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-6 py-14">
          <div className="max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs uppercase tracking-widest text-accent">
              <Truck className="h-3.5 w-3.5" /> Referência nacional
            </div>
            <h2 className="font-display text-3xl md:text-4xl">
              Especialistas em Cooperativas de Transporte de{" "}
              <span className="text-accent">Cargas, Passageiros e Hortifrutigranjeiros</span>.
            </h2>
            <p className="mt-3 text-primary-foreground/80">
              Um dos poucos escritórios do país com atuação consolidada nesse segmento — do CIOT e ANTT ao ato cooperado
              e à Reforma Tributária.
            </p>
          </div>
          <Link
            to="/cooperativas"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:-translate-y-0.5"
          >
            Conhecer a assessoria <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Especialidades */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">Nossa especialidade</div>
            <h2 className="font-display text-4xl text-primary md:text-5xl">
              Referência em cooperativas, transportadoras e empresas.
            </h2>
          </div>
          <Link to="/servicos" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent">
            Todos os serviços <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {especialidades.map((h) => (
            <div
              key={h.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-soft)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent">
                <h.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-xl text-primary">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Carrossel de clientes */}
      <ClientsCarousel />

      {/* Segmentos */}
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">Áreas de atuação</div>
            <h2 className="font-display text-4xl text-primary md:text-5xl">
              Experiência em diversos segmentos empresariais.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Do cooperativismo de transporte ao setor de indústria e comércio, a Nilda Contabilidade atende com
              conhecimento técnico e visão de negócio.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 md:col-span-3">
            {segmentos.map((s) => (
              <li key={s} className="flex items-start gap-2 rounded-lg bg-card px-4 py-3 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-foreground">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sobre + fundadora */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">Quase três décadas</div>
            <h2 className="font-display text-4xl text-primary md:text-5xl">
              Assessoria contábil que caminha ao lado do seu negócio.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Fundada em 1996 em Betim/MG, a Nilda Contabilidade oferece serviços contábeis, tributários, societários
                e assessoria jurídica especializada para cooperativas, transportadoras e empresas.
              </p>
              <p>
                Nosso trabalho vai além da contabilidade: apoiamos a governança cooperativa, orientamos diretorias e
                cooperados, conduzimos assembleias e planejamos estratégias tributárias frente à Reforma Tributária.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-primary">
              <ShieldCheck className="h-5 w-5 text-accent" />
              Seriedade, comprometimento e transparência — pilares do nosso trabalho.
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <div className="text-xs uppercase tracking-[0.25em] text-accent">A fundadora</div>
            <div className="mt-4 flex items-center gap-4">
              <img
                src={empresaContadora}
                alt="Nilda Luiz, fundadora da Nilda Contabilidade"
                width={80}
                height={80}
                loading="lazy"
                className="h-20 w-20 shrink-0 rounded-full object-cover object-top shadow-[var(--shadow-soft)]"
              />
              <div>
                <h3 className="font-display text-3xl text-primary">Nilda Luiz</h3>
                <p className="mt-1 text-sm text-muted-foreground">Contadora — CRC/MG 064314/O-3</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-foreground">
              <li className="flex gap-3"><GraduationCap className="h-5 w-5 shrink-0 text-accent" /> Bacharel em Ciências Contábeis</li>
              <li className="flex gap-3"><Gavel className="h-5 w-5 shrink-0 text-accent" /> Pós-graduada em Direito Tributário</li>
              <li className="flex gap-3"><Users2 className="h-5 w-5 shrink-0 text-accent" /> Especialista em cooperativas</li>
              <li className="flex gap-3"><Landmark className="h-5 w-5 shrink-0 text-accent" /> Especialista em tributação</li>
              <li className="flex gap-3"><CalendarClock className="h-5 w-5 shrink-0 text-accent" /> Mais de 40 anos de experiência</li>
              <li className="flex gap-3"><Globe2 className="h-5 w-5 shrink-0 text-accent" /> Atendimento em todo o Brasil</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Nossos Diferenciais */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 max-w-2xl">
            <div className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">O que nos diferencia</div>
            <h2 className="font-display text-4xl text-primary md:text-5xl">Nossos diferenciais.</h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {diferenciais.map((d) => (
              <li
                key={d.title}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/15 text-accent">
                  <d.icon className="h-5 w-5" />
                </span>
                <span className="pt-1.5 text-sm font-medium text-foreground">{d.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-10 py-16 text-primary-foreground md:px-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative flex flex-wrap items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="font-display text-3xl md:text-4xl">
                Sua cooperativa ou empresa merece assessoria especializada.
              </h3>
              <p className="mt-3 text-primary-foreground/75">
                Fale com a nossa equipe e descubra como podemos apoiar seu negócio em todo o Brasil.
              </p>
            </div>
            <Link
              to="/contato"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:-translate-y-0.5"
            >
              Fale conosco <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
