import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";
import { ArrowRight, BookOpen } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog Técnico — Nilda Contabilidade" },
      { name: "description", content: "Artigos técnicos sobre cooperativas, ato cooperado, INSS, CIOT, ANTT, Reforma Tributária, FATES e mais." },
      { property: "og:title", content: "Blog Técnico — Nilda Contabilidade" },
      { property: "og:description", content: "Conteúdos técnicos para cooperativas e transportadoras." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const artigos = [
  { title: "Ato cooperado", desc: "O que caracteriza e como tratar contábil e tributariamente." },
  { title: "INSS dos cooperados", desc: "Cálculo, recolhimento e obrigações previdenciárias." },
  { title: "CIOT — Código Identificador da Operação de Transporte", desc: "Emissão, prazos e responsabilidades." },
  { title: "ANTT para transportadoras e cooperativas", desc: "Regularização e conformidade contínua." },
  { title: "Reforma Tributária e o cooperativismo", desc: "Impactos práticos e planejamento de transição." },
  { title: "FATES — Fundo de Assistência Técnica, Educacional e Social", desc: "Como constituir, aplicar e prestar contas." },
  { title: "Conselho Fiscal em cooperativas", desc: "Composição, atribuições e boas práticas." },
  { title: "Assembleias (AGO e AGE)", desc: "Convocação, quórum, ata e formalização." },
  { title: "Cooperado pessoa física e jurídica", desc: "Diferenças de tributação e obrigações." },
  { title: "Transporte e cooperativas", desc: "Particularidades operacionais e fiscais do segmento." },
];

function Blog() {
  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading
            eyebrow="Blog técnico"
            title="Conteúdos para cooperativas e transportadoras."
            description="Artigos técnicos preparados pela nossa equipe para apoiar diretorias, cooperados e gestores."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {artigos.map((a) => (
            <article
              key={a.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-soft)]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent/15 text-accent">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg text-primary">{a.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{a.desc}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
                Em breve <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </article>
          ))}
        </div>
        <div className="mt-14 rounded-3xl bg-primary px-8 py-10 text-primary-foreground md:px-14">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl">Tem uma dúvida técnica?</h3>
              <p className="mt-2 text-primary-foreground/75">
                Fale com nossos especialistas em cooperativas e transportadoras.
              </p>
            </div>
            <Link to="/contato" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:-translate-y-0.5">
              Fale conosco <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
