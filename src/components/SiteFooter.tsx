import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageCircle, Instagram, Facebook, Linkedin, ShieldCheck } from "lucide-react";
import { NildaLogo } from "./NildaLogo";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      aria-labelledby="site-footer-heading"
      className="mt-24 bg-primary text-primary-foreground"
    >
      <h2 id="site-footer-heading" className="sr-only">
        Rodapé do site — Nilda Contabilidade
      </h2>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        {/* Marca */}
        <section aria-labelledby="footer-brand-heading">
          <h3 id="footer-brand-heading" className="sr-only">
            Sobre a Nilda Contabilidade
          </h3>
          <Link to="/" aria-label="Nilda Contabilidade — Ir para o início">
            <NildaLogo variant="light" className="h-16 w-auto sm:h-20" />
          </Link>
          <p className="mt-4 text-sm text-primary-foreground/70">
            Contabilidade, consultoria tributária e assessoria jurídica especializada para cooperativas e empresas
            desde 1996.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-primary-foreground/80">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" aria-hidden="true" focusable="false" />
            <span>
              <span className="sr-only">Registro profissional: </span>
              CRC/MG 064314/O-3
            </span>
          </p>

          {/* Redes sociais (placeholders — atualizar quando os perfis forem confirmados) */}
          <nav aria-label="Redes sociais" className="mt-6">
            <ul className="flex items-center gap-3">
              <li>
                <a
                  href="#"
                  aria-label="Instagram da Nilda Contabilidade (em breve)"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-primary-foreground/80 transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" focusable="false" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="Facebook da Nilda Contabilidade (em breve)"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-primary-foreground/80 transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  <Facebook className="h-4 w-4" aria-hidden="true" focusable="false" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="LinkedIn da Nilda Contabilidade (em breve)"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-primary-foreground/80 transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" focusable="false" />
                </a>
              </li>
            </ul>
          </nav>
        </section>

        {/* Navegação */}
        <nav aria-labelledby="footer-nav-heading">
          <h3 id="footer-nav-heading" className="text-sm uppercase tracking-widest text-accent">
            Navegação
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/empresa" className="rounded-sm hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Empresa</Link></li>
            <li><Link to="/cooperativas" className="rounded-sm hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Cooperativas</Link></li>
            <li><Link to="/servicos" className="rounded-sm hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Serviços</Link></li>
            <li><Link to="/depoimentos" className="rounded-sm hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Depoimentos</Link></li>
            <li><Link to="/blog" className="rounded-sm hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Blog</Link></li>
            <li><Link to="/legislacao" className="rounded-sm hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Legislação</Link></li>
            <li><Link to="/clientes" className="rounded-sm hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Clientes</Link></li>
            <li><Link to="/contato" className="rounded-sm hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">Contato</Link></li>
          </ul>
        </nav>

        {/* Contato */}
        <section aria-labelledby="footer-contact-heading">
          <h3 id="footer-contact-heading" className="text-sm uppercase tracking-widest text-accent">
            Contato
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" aria-hidden="true" focusable="false" />
              <a href="tel:+553135314004" className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                <span className="sr-only">Telefone fixo: </span>
                (31) 3531-4004
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-accent" aria-hidden="true" focusable="false" />
              <a
                href="https://wa.me/5531985538780"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Enviar mensagem no WhatsApp para (31) 98553-8780 (abre em nova aba)"
              >
                WhatsApp (31) 98553-8780
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" aria-hidden="true" focusable="false" />
              <a href="tel:+5531985554004" className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                <span className="sr-only">Celular: </span>
                (31) 98555-4004
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" aria-hidden="true" focusable="false" />
              <a href="mailto:contato@nildacontabilidade.com.br" className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">contato@nildacontabilidade.com.br</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" aria-hidden="true" focusable="false" />
              <a href="mailto:fiscal@nildacontabilidade.com.br" className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">fiscal@nildacontabilidade.com.br</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" aria-hidden="true" focusable="false" />
              <a href="mailto:pessoal@nildacontabilidade.com.br" className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">pessoal@nildacontabilidade.com.br</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" aria-hidden="true" focusable="false" />
              <a href="mailto:contabil@nildacontabilidade.com.br" className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">contabil@nildacontabilidade.com.br</a>
            </li>
          </ul>
        </section>

        {/* Endereço */}
        <section aria-labelledby="footer-address-heading">
          <h3 id="footer-address-heading" className="text-sm uppercase tracking-widest text-accent">
            Endereço
          </h3>
          <address className="not-italic">
            <a
              href="https://maps.app.goo.gl/WnE8pEYURky41qsj6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex gap-2 rounded-sm text-sm text-primary-foreground/80 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Ver endereço no Google Maps (abre em nova aba): Rua Doutor Euzébio Dias Bicalho, 35, Bairro Chácara, Betim/MG, CEP 32670-286"
            >
              <MapPin className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" focusable="false" />
              <span>Rua Doutor Euzébio Dias Bicalho, 35<br />Bairro Chácara — Betim/MG<br />CEP 32670-286</span>
            </a>
          </address>
          <a
            href="https://maps.app.goo.gl/WnE8pEYURky41qsj6"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block overflow-hidden rounded-xl border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            aria-label="Abrir localização da Nilda Contabilidade no Google Maps (abre em nova aba)"
          >
            <iframe
              title="Mapa com a localização da Nilda Contabilidade em Betim/MG"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.0734997785908!2d-44.1878171!3d-19.963411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6d9487d629e51%3A0x21baa2d07096b297!2sNilda%20Contabilidade%20em%20Betim!5e0!3m2!1spt-BR!2sbr!4v1784051890847!5m2!1spt-BR!2sbr"
              className="pointer-events-none block aspect-[4/3] h-auto w-full sm:aspect-[16/9] md:aspect-[4/3]"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </a>
        </section>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-primary-foreground/70 md:flex-row md:items-center md:justify-between">
          <p>
            <span aria-hidden="true">©</span>
            <span className="sr-only">Copyright</span>{" "}
            {year} Nilda Contabilidade. Todos os direitos reservados. · CRC/MG 064314/O-3
          </p>
          <p>
            Site desenvolvido por{" "}
            <a
              href="https://www.ideiasvirtuais.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm font-medium text-primary-foreground/80 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Ideias Virtuais — site do desenvolvedor (abre em nova aba)"
            >
              IDEIAS VIRTUAIS
            </a>{" "}
            - {year}
          </p>
        </div>
      </div>
    </footer>
  );
}
