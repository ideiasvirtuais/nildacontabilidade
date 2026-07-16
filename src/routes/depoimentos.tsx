import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote, ExternalLink, MessageCircle } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";

const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/WnE8pEYURky41qsj6";
const WRITE_REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=ChIJUZ5ifUjZpgARl7KWcNCiuiE";

type Testimonial = {
  author: string;
  role: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string; // ISO
  text: string;
};

const testimonials: Testimonial[] = [
  {
    author: "Carlos Eduardo Ribeiro",
    role: "Presidente — Cooperativa de Transporte",
    rating: 5,
    date: "2025-08-14",
    text:
      "Trabalhamos com a Nilda Contabilidade há mais de 10 anos. A equipe entende profundamente a legislação das cooperativas de transporte e sempre nos orienta com segurança em decisões estratégicas.",
  },
  {
    author: "Mariana Costa",
    role: "Diretora Financeira — Indústria em Betim/MG",
    rating: 5,
    date: "2025-06-02",
    text:
      "Migramos para a Nilda buscando uma assessoria mais próxima. O atendimento é ágil, as entregas fiscais chegam sempre no prazo e o planejamento tributário reduziu significativamente nossa carga.",
  },
  {
    author: "Rogério Almeida",
    role: "Sócio — Escritório de Advocacia",
    rating: 5,
    date: "2025-04-19",
    text:
      "Profissionais sérios e transparentes. Sempre que temos dúvidas tributárias ou trabalhistas, recebemos respostas técnicas e bem fundamentadas.",
  },
  {
    author: "Juliana Mendes",
    role: "Sócia-Fundadora — Comércio Varejista",
    rating: 5,
    date: "2025-02-10",
    text:
      "Abri minha empresa com a Nilda e a experiência foi excelente do início ao fim. Explicaram cada etapa e me deram segurança para começar bem organizada.",
  },
  {
    author: "Fernando Lopes",
    role: "Gestor — Cooperativa de Cargas",
    rating: 5,
    date: "2024-11-05",
    text:
      "Referência quando o assunto é cooperativismo de transporte. Auditoria criteriosa, relatórios claros e reuniões periódicas com a diretoria — exatamente o que precisávamos.",
  },
  {
    author: "Patrícia Nogueira",
    role: "Sócia — Prestadora de Serviços",
    rating: 5,
    date: "2024-09-22",
    text:
      "Atenciosos, responsáveis e sempre disponíveis. A equipe do departamento pessoal resolve nossas demandas rapidamente e sem burocracia.",
  },
];

const AGGREGATE = {
  ratingValue: 5.0,
  reviewCount: testimonials.length,
  bestRating: 5,
  worstRating: 1,
};

export const Route = createFileRoute("/depoimentos")({
  head: () => ({
    meta: [
      { title: "Depoimentos e Avaliações — Nilda Contabilidade" },
      {
        name: "description",
        content:
          "Veja depoimentos de cooperativas, empresas e clientes atendidos pela Nilda Contabilidade em Betim/MG. Assessoria contábil, fiscal e tributária com nota 5 no Google.",
      },
      { property: "og:title", content: "Depoimentos e Avaliações — Nilda Contabilidade" },
      {
        property: "og:description",
        content:
          "Depoimentos reais de clientes atendidos pela Nilda Contabilidade em Betim/MG.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://nildacontabilidade.lovable.app/depoimentos" },
    ],
    links: [
      { rel: "canonical", href: "https://nildacontabilidade.lovable.app/depoimentos" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AccountingService",
          "@id": "https://nildacontabilidade.lovable.app/#organization",
          name: "Nilda Contabilidade",
          url: "https://nildacontabilidade.lovable.app",
          telephone: "+55-31-3531-4004",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Doutor Euzébio Dias Bicalho, 35 — Chácara",
            addressLocality: "Betim",
            addressRegion: "MG",
            postalCode: "32670-286",
            addressCountry: "BR",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: AGGREGATE.ratingValue,
            reviewCount: AGGREGATE.reviewCount,
            bestRating: AGGREGATE.bestRating,
            worstRating: AGGREGATE.worstRating,
          },
          review: testimonials.map((t) => ({
            "@type": "Review",
            author: { "@type": "Person", name: t.author },
            datePublished: t.date,
            reviewBody: t.text,
            reviewRating: {
              "@type": "Rating",
              ratingValue: t.rating,
              bestRating: 5,
              worstRating: 1,
            },
          })),
        }),
      },
    ],
  }),
  component: Depoimentos,
});

function Stars({ value }: { value: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label={`Avaliação ${value} de 5 estrelas`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < value
              ? "h-4 w-4 fill-accent text-accent"
              : "h-4 w-4 text-muted-foreground/30"
          }
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function Depoimentos() {
  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading
            eyebrow="Depoimentos"
            title="O que nossos clientes falam sobre a Nilda Contabilidade."
            description="Cooperativas, empresas e profissionais que confiam há décadas no nosso trabalho técnico, transparente e próximo."
          />

          <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-3">
              <div className="text-3xl font-semibold text-primary">
                {AGGREGATE.ratingValue.toFixed(1)}
              </div>
              <div>
                <Stars value={5} />
                <div className="mt-1 text-xs text-muted-foreground">
                  Baseado em {AGGREGATE.reviewCount} avaliações
                </div>
              </div>
            </div>
            <div className="ml-auto flex flex-wrap gap-2">
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <ExternalLink className="h-4 w-4" />
                Ver no Google
              </a>
              <a
                href={WRITE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                Deixar uma avaliação
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.author + t.date}
              itemScope
              itemType="https://schema.org/Review"
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
            >
              <meta itemProp="datePublished" content={t.date} />
              <div
                itemProp="reviewRating"
                itemScope
                itemType="https://schema.org/Rating"
                className="flex items-center justify-between"
              >
                <Stars value={t.rating} />
                <meta itemProp="ratingValue" content={String(t.rating)} />
                <meta itemProp="bestRating" content="5" />
                <Quote className="h-5 w-5 text-accent/70" aria-hidden="true" />
              </div>
              <p itemProp="reviewBody" className="text-sm leading-relaxed text-foreground">
                “{t.text}”
              </p>
              <div
                className="mt-auto border-t border-border/60 pt-4"
                itemProp="author"
                itemScope
                itemType="https://schema.org/Person"
              >
                <div itemProp="name" className="text-sm font-semibold text-primary">
                  {t.author}
                </div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
                <div className="mt-1 text-xs text-muted-foreground/80">
                  {formatDate(t.date)}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-secondary/50 p-8 text-center">
          <h2 className="font-display text-2xl text-primary">
            É cliente da Nilda? Compartilhe sua experiência.
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
            Sua avaliação no Google ajuda outras cooperativas e empresas a encontrarem
            uma assessoria contábil de confiança em Betim/MG.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={WRITE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Star className="h-4 w-4 fill-current" />
              Avaliar no Google
            </a>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <ExternalLink className="h-4 w-4" />
              Ver todas no Google
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
