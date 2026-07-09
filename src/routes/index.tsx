import { createFileRoute, Link } from "@tanstack/react-router";
import heroOffice from "../assets/hero-office.jpg";
import { ArrowRight, Building2, FileCheck2, Scale, Users, ShieldCheck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

const highlights = [
  { icon: Building2, title: "Contábil", desc: "Balanços, conciliações e demonstrativos completos." },
  { icon: Scale, title: "Fiscal & Tributário", desc: "Planejamento e apuração de impostos em todas as esferas." },
  { icon: Users, title: "Recursos Humanos", desc: "Folha, admissões, rescisões e obrigações trabalhistas." },
  { icon: FileCheck2, title: "Processos", desc: "Abertura, alterações e legalização de empresas." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div className="text-primary-foreground">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-accent">
              <Sparkles className="h-3.5 w-3.5" /> Desde 1996 em Betim/MG
            </div>
            <h1 className="font-display text-5xl leading-[1.05] md:text-6xl">
              Contabilidade com <span className="text-accent">seriedade</span>, tecnologia e ética.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
              A Nilda Contabilidade é uma empresa de prestação de serviços e assessoria contábil e jurídica.
              Atendemos empresas de pequeno, médio e grande porte, em diversos ramos de atividade.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground shadow-[0_10px_30px_-10px_var(--gold)] transition-transform hover:-translate-y-0.5"
              >
                Fale conosco <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm text-primary-foreground hover:bg-white/10"
              >
                Ver serviços
              </Link>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/15 pt-8">
              <div>
                <dt className="text-xs uppercase tracking-widest text-accent">Fundação</dt>
                <dd className="mt-1 font-display text-2xl">1996</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-accent">Sede</dt>
                <dd className="mt-1 font-display text-2xl">Betim</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-accent">Setores</dt>
                <dd className="mt-1 font-display text-2xl">04</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-accent/20 blur-3xl" />
            <img
              src={heroOffice}
              alt="Escritório da Nilda Contabilidade"
              width={1600}
              height={1000}
              className="relative rounded-2xl shadow-[var(--shadow-elegant)]"
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">O que fazemos</div>
            <h2 className="font-display text-4xl text-primary md:text-5xl">Quatro pilares para o crescimento da sua empresa</h2>
          </div>
          <Link to="/servicos" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent">
            Todos os serviços <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-soft)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <h.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-xl text-primary">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About block */}
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">A empresa</div>
            <h2 className="font-display text-4xl text-primary md:text-5xl">Quase três décadas ao lado dos nossos clientes.</h2>
          </div>
          <div className="space-y-5 text-muted-foreground md:col-span-3">
            <p>
              Atuamos no mercado empresarial desde 1996, trabalhando para atender as necessidades dos nossos clientes
              dentro da prática legal e ética, obedecendo sempre à legislação vigente no país.
            </p>
            <p>
              Com conhecimento, tecnologia e dedicação, estamos atentos às constantes mudanças e trabalhamos para oferecer
              o melhor resultado. Seja sua empresa de grande, médio ou pequeno porte, a Nilda Contabilidade tem como
              prioridade atender com excelência os mais diversos ramos de atividades empresariais.
            </p>
            <div className="flex items-center gap-3 pt-2 text-sm text-primary">
              <ShieldCheck className="h-5 w-5 text-accent" />
              Seriedade, comprometimento e transparência — pilares do nosso trabalho.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-10 py-16 text-primary-foreground md:px-16">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative flex flex-wrap items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="font-display text-3xl md:text-4xl">Vamos cuidar da contabilidade da sua empresa?</h3>
              <p className="mt-3 text-primary-foreground/75">
                Solicite uma conversa com nossa equipe e descubra como podemos apoiar seu negócio.
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
