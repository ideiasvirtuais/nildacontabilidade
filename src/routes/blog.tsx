import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { ArrowRight, BookOpen } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog Técnico — Nilda Contabilidade" },
      {
        name: "description",
        content:
          "Artigos técnicos sobre Reforma Tributária, Cooperativas, Transporte, Tributação, Planejamento Tributário, Notícias e Legislação.",
      },
      {
        name: "keywords",
        content:
          "blog contábil, reforma tributária, cooperativas de transporte, planejamento tributário, legislação, notícias contábeis",
      },
      { property: "og:title", content: "Blog Técnico — Nilda Contabilidade" },
      { property: "og:description", content: "Conteúdos técnicos para cooperativas e empresas." },
      { property: "og:url", content: "https://nildacontabilidade.lovable.app/blog" },
    ],
    links: [{ rel: "canonical", href: "https://nildacontabilidade.lovable.app/blog" }],
  }),
  component: Blog,
});

const categories = [
  "Todos",
  "Reforma Tributária",
  "Cooperativas",
  "Transporte",
  "Tributação",
  "Planejamento Tributário",
  "Notícias",
  "Legislação",
] as const;

type Category = (typeof categories)[number];

const artigos: { title: string; desc: string; category: Exclude<Category, "Todos"> }[] = [
  { title: "Ato cooperado", desc: "O que caracteriza e como tratar contábil e tributariamente.", category: "Cooperativas" },
  { title: "INSS dos cooperados", desc: "Cálculo, recolhimento e obrigações previdenciárias.", category: "Cooperativas" },
  { title: "CIOT — Código Identificador da Operação de Transporte", desc: "Emissão, prazos e responsabilidades.", category: "Transporte" },
  { title: "ANTT para transportadoras e cooperativas", desc: "Regularização e conformidade contínua.", category: "Transporte" },
  { title: "Reforma Tributária e o cooperativismo", desc: "Impactos práticos e planejamento de transição.", category: "Reforma Tributária" },
  { title: "IBS, CBS e IS: o que muda para as empresas", desc: "Panorama dos novos tributos da Reforma.", category: "Reforma Tributária" },
  { title: "FATES — Fundo de Assistência Técnica, Educacional e Social", desc: "Como constituir, aplicar e prestar contas.", category: "Cooperativas" },
  { title: "Conselho Fiscal em cooperativas", desc: "Composição, atribuições e boas práticas.", category: "Cooperativas" },
  { title: "Assembleias (AGO e AGE)", desc: "Convocação, quórum, ata e formalização.", category: "Legislação" },
  { title: "Cooperado pessoa física e jurídica", desc: "Diferenças de tributação e obrigações.", category: "Tributação" },
  { title: "Planejamento tributário para transportadoras", desc: "Regimes, créditos e economia dentro da lei.", category: "Planejamento Tributário" },
  { title: "Recuperação de créditos tributários", desc: "Levantamento, compensação e ressarcimento.", category: "Planejamento Tributário" },
  { title: "Novidades da Receita Federal", desc: "Alterações recentes que afetam empresas e cooperativas.", category: "Notícias" },
];

function Blog() {
  const [active, setActive] = useState<Category>("Todos");
  const list = useMemo(
    () => (active === "Todos" ? artigos : artigos.filter((a) => a.category === active)),
    [active],
  );

  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading
            eyebrow="Blog técnico"
            title="Conteúdos para cooperativas e empresas."
            description="Artigos técnicos preparados pela nossa equipe para apoiar diretorias, cooperados e gestores."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        {/* Filtro de categorias */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((c) => {
            const selected = c === active;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-widest transition-colors ${
                  selected
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-accent hover:text-primary"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        {list.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-border bg-card p-10 text-center text-sm text-muted-foreground">
            Nenhum artigo publicado nesta categoria ainda.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((a) => (
              <article
                key={a.title}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-[var(--shadow-soft)]"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-accent/15 text-accent">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                    {a.category}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg text-primary">{a.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{a.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
                  Em breve <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </article>
            ))}
          </div>
        )}

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
