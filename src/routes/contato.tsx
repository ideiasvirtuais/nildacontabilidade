import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Nilda Contabilidade | Betim/MG" },
      {
        name: "description",
        content:
          "Fale com a Nilda Contabilidade em Betim/MG. Telefones, WhatsApp, e-mails e endereço. Atendimento contábil para cooperativas e empresas em todo o Brasil.",
      },
      {
        name: "keywords",
        content:
          "contato contabilidade Betim, escritório contábil Belo Horizonte, whatsapp Nilda Contabilidade, contabilidade cooperativas contato",
      },
      { property: "og:title", content: "Contato — Nilda Contabilidade" },
      { property: "og:description", content: "Endereço, telefones, WhatsApp e e-mails." },
      { property: "og:url", content: "https://nildacontabilidade.lovable.app/contato" },
    ],
    links: [{ rel: "canonical", href: "https://nildacontabilidade.lovable.app/contato" }],
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
          <div>
            <h3 className="font-display text-2xl text-primary">Contatos</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-accent" /> (31) 3531-4004</li>
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-accent" /> (31) 98553-8780</li>
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-accent" /> (31) 98555-4004</li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-2xl text-primary">E-mails</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {emails.map((e) => (
                <li key={e} className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-accent" />
                  <a href={`mailto:${e}`} className="hover:text-primary">{e}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-2xl text-primary">Endereço</h3>
            <p className="mt-4 flex gap-3 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 text-accent" />
              Rua Doutor Euzébio Dias Bicalho, 35 — Bairro Chácara<br />Betim/MG — CEP 32670-286
            </p>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="space-y-4 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]"
        >
          <h3 className="font-display text-2xl text-primary">Envie uma mensagem</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm">
              <span className="mb-1 block text-muted-foreground">Nome</span>
              <input required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-ring focus:ring-2" />
            </label>
            <label className="text-sm">
              <span className="mb-1 block text-muted-foreground">Telefone</span>
              <input className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-ring focus:ring-2" />
            </label>
          </div>
          <label className="block text-sm">
            <span className="mb-1 block text-muted-foreground">E-mail</span>
            <input type="email" required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-ring focus:ring-2" />
          </label>
          <label className="block text-sm">
            <span className="mb-1 block text-muted-foreground">Assunto</span>
            <input className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-ring focus:ring-2" />
          </label>
          <label className="block text-sm">
            <span className="mb-1 block text-muted-foreground">Mensagem</span>
            <textarea rows={5} required className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-ring focus:ring-2" />
          </label>
          <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            <Send className="h-4 w-4" /> Enviar
          </button>
          {sent && <p className="text-sm text-accent">Mensagem enviada! Entraremos em contato em breve.</p>}
        </form>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="overflow-hidden rounded-2xl border border-border">
          <iframe
            title="Mapa Nilda Contabilidade em Betim"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.0734997785908!2d-44.1878171!3d-19.963411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6d9487d629e51%3A0x21baa2d07096b297!2sNilda%20Contabilidade%20em%20Betim!5e0!3m2!1spt-BR!2sbr!4v1784051890847!5m2!1spt-BR!2sbr"
            className="h-[400px] w-full"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </section>

    </>
  );
}
