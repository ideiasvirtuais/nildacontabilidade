import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { Mail, MapPin, Navigation, Phone, Send } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Nilda Contabilidade | Rua Dr. Euzébio Dias Bicalho, 35 — Betim/MG" },
      {
        name: "description",
        content:
          "Nilda Contabilidade — Rua Doutor Euzébio Dias Bicalho, 35, Bairro Chácara, Betim/MG, CEP 32670-286. Telefone (31) 3531-4004, WhatsApp (31) 98553-8780. Atendimento a cooperativas e empresas em todo o Brasil.",
      },
      {
        name: "keywords",
        content:
          "endereço Nilda Contabilidade, contabilidade Bairro Chácara Betim, escritório contábil Betim MG, contador Betim endereço, CEP 32670-286, contabilidade Belo Horizonte, WhatsApp Nilda Contabilidade",
      },
      { name: "geo.region", content: "BR-MG" },
      { name: "geo.placename", content: "Betim, Minas Gerais" },
      { name: "geo.position", content: "-19.963411;-44.1878171" },
      { name: "ICBM", content: "-19.963411, -44.1878171" },
      { property: "og:title", content: "Contato — Nilda Contabilidade em Betim/MG" },
      {
        property: "og:description",
        content:
          "Rua Doutor Euzébio Dias Bicalho, 35 — Bairro Chácara, Betim/MG. Telefone (31) 3531-4004 · WhatsApp (31) 98553-8780.",
      },
      { property: "og:url", content: "https://nildacontabilidade.lovable.app/contato" },
      { property: "og:type", content: "website" },
      { property: "place:location:latitude", content: "-19.963411" },
      { property: "place:location:longitude", content: "-44.1878171" },
    ],
    links: [{ rel: "canonical", href: "https://nildacontabilidade.lovable.app/contato" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "@id": "https://nildacontabilidade.lovable.app/contato#contact",
          url: "https://nildacontabilidade.lovable.app/contato",
          name: "Contato — Nilda Contabilidade",
          about: { "@id": "https://nildacontabilidade.lovable.app/#organization" },
          mainEntity: {
            "@type": ["AccountingService", "LocalBusiness"],
            "@id": "https://nildacontabilidade.lovable.app/#organization",
            name: "Nilda Contabilidade",
            telephone: "+55-31-3531-4004",
            email: "contato@nildacontabilidade.com.br",
            hasMap: "https://maps.app.goo.gl/WnE8pEYURky41qsj6",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rua Doutor Euzébio Dias Bicalho, 35",
              addressLocality: "Betim",
              addressRegion: "MG",
              postalCode: "32670-286",
              addressCountry: "BR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -19.963411,
              longitude: -44.1878171,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "18:00",
              },
            ],
          },
        }),
      },
    ],
  }),
  component: Contato,
});

const emails = [
  "contato@nildacontabilidade.com.br",
  "fiscal@nildacontabilidade.com.br",
  "pessoal@nildacontabilidade.com.br",
  "contabil@nildacontabilidade.com.br",
];

function Contato() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading eyebrow="Fale conosco" title="Estamos prontos para atender sua empresa." description="Entre em contato pelos canais abaixo ou envie sua mensagem pelo formulário." />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2">
        <div className="space-y-8">
          <section aria-labelledby="contato-telefones">
            <h2 id="contato-telefones" className="font-display text-2xl text-primary">Contatos</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" aria-hidden="true" focusable="false" />
                <a href="tel:+553135314004" className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                  <span className="sr-only">Telefone fixo: </span>(31) 3531-4004
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" aria-hidden="true" focusable="false" />
                <a
                  href="https://wa.me/5531985538780"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Enviar mensagem no WhatsApp para (31) 98553-8780 (abre em nova aba)"
                  className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  (31) 98553-8780
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" aria-hidden="true" focusable="false" />
                <a href="tel:+5531985554004" className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                  <span className="sr-only">Celular: </span>(31) 98555-4004
                </a>
              </li>
            </ul>
          </section>

          <section aria-labelledby="contato-emails">
            <h2 id="contato-emails" className="font-display text-2xl text-primary">E-mails</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {emails.map((e) => (
                <li key={e} className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-accent" aria-hidden="true" focusable="false" />
                  <a href={`mailto:${e}`} className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">{e}</a>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="contato-endereco">
            <h2 id="contato-endereco" className="font-display text-2xl text-primary">Endereço</h2>
            <address
              itemScope
              itemType="https://schema.org/PostalAddress"
              className="mt-4 flex gap-3 text-sm not-italic text-muted-foreground"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" focusable="false" />
              <span>
                <span itemProp="streetAddress">Rua Doutor Euzébio Dias Bicalho, 35</span> —{" "}
                <span itemProp="addressLocality">Bairro Chácara</span>
                <br />
                <span itemProp="addressLocality">Betim</span>/
                <span itemProp="addressRegion">MG</span> — CEP{" "}
                <span itemProp="postalCode">32670-286</span>
                <meta itemProp="addressCountry" content="BR" />
              </span>
            </address>
            <a
              href="https://maps.app.goo.gl/WnE8pEYURky41qsj6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver endereço no Google Maps (abre em nova aba)"
              className="mt-3 inline-flex items-center gap-2 rounded-sm text-sm font-medium text-primary hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" focusable="false" /> Ver no Google Maps
            </a>
          </section>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          aria-labelledby="contato-form-heading"
          className="space-y-4 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]"
        >
          <h2 id="contato-form-heading" className="font-display text-2xl text-primary">Envie uma mensagem</h2>
          <p className="text-xs text-muted-foreground">
            Campos marcados com <span aria-hidden="true">*</span> são obrigatórios.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="text-sm">
              <label htmlFor="contato-nome" className="mb-1 block text-muted-foreground">
                Nome <span aria-hidden="true" className="text-accent">*</span>
              </label>
              <input
                id="contato-nome"
                name="nome"
                type="text"
                autoComplete="name"
                required
                aria-required="true"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-ring focus:ring-2"
              />
            </div>
            <div className="text-sm">
              <label htmlFor="contato-telefone" className="mb-1 block text-muted-foreground">Telefone</label>
              <input
                id="contato-telefone"
                name="telefone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-ring focus:ring-2"
              />
            </div>
          </div>
          <div className="text-sm">
            <label htmlFor="contato-email" className="mb-1 block text-muted-foreground">
              E-mail <span aria-hidden="true" className="text-accent">*</span>
            </label>
            <input
              id="contato-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              aria-required="true"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-ring focus:ring-2"
            />
          </div>
          <div className="text-sm">
            <label htmlFor="contato-assunto" className="mb-1 block text-muted-foreground">Assunto</label>
            <input
              id="contato-assunto"
              name="assunto"
              type="text"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-ring focus:ring-2"
            />
          </div>
          <div className="text-sm">
            <label htmlFor="contato-mensagem" className="mb-1 block text-muted-foreground">
              Mensagem <span aria-hidden="true" className="text-accent">*</span>
            </label>
            <textarea
              id="contato-mensagem"
              name="mensagem"
              rows={5}
              required
              aria-required="true"
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-ring focus:ring-2"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <Send className="h-4 w-4" aria-hidden="true" focusable="false" /> Enviar
          </button>
          <p role="status" aria-live="polite" className="min-h-[1.25rem] text-sm text-accent">
            {sent && "Mensagem enviada! Entraremos em contato em breve."}
          </p>
        </form>
      </section>

      <section aria-labelledby="contato-mapa-heading" className="mx-auto max-w-7xl px-6 pb-20">
        <h2 id="contato-mapa-heading" className="sr-only">Mapa e rota até o escritório</h2>
        <div className="overflow-hidden rounded-2xl border border-border">
          <iframe
            title="Mapa com a localização da Nilda Contabilidade em Betim/MG"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.0734997785908!2d-44.1878171!3d-19.963411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6d9487d629e51%3A0x21baa2d07096b297!2sNilda%20Contabilidade%20em%20Betim!5e0!3m2!1spt-BR!2sbr!4v1784051890847!5m2!1spt-BR!2sbr"
            className="block h-[260px] w-full sm:h-[360px] md:h-[440px] lg:h-[520px]"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <div className="flex flex-col items-start gap-3 border-t border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Rua Doutor Euzébio Dias Bicalho, 35 — Bairro Chácara, Betim/MG
            </p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Nilda+Contabilidade+em+Betim&destination_place_id=ChIJUZ5ifUjZpgARl7KWcNCiuiE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Traçar rota até o escritório no Google Maps (abre em nova aba)"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" focusable="false" /> Traçar rota até o escritório
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
