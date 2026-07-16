import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageCircle, Instagram, Facebook, Linkedin, ShieldCheck } from "lucide-react";
import { NildaLogo } from "./NildaLogo";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <NildaLogo variant="light" className="h-16 w-auto sm:h-20" />
          <p className="mt-4 text-sm text-primary-foreground/70">
            Contabilidade, consultoria tributária e assessoria jurídica especializada para cooperativas e empresas
            desde 1996.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-primary-foreground/80">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" />
            CRC/MG 064314/O-3
          </div>

          {/* Redes sociais (placeholders — atualizar quando os perfis forem confirmados) */}
          <div className="mt-6 flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram Nilda Contabilidade"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-primary-foreground/80 transition-colors hover:border-accent hover:text-accent"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook Nilda Contabilidade"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-primary-foreground/80 transition-colors hover:border-accent hover:text-accent"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn Nilda Contabilidade"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-primary-foreground/80 transition-colors hover:border-accent hover:text-accent"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-accent">Navegação</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/empresa" className="hover:text-accent">Empresa</Link></li>
            <li><Link to="/cooperativas" className="hover:text-accent">Cooperativas</Link></li>
            <li><Link to="/servicos" className="hover:text-accent">Serviços</Link></li>
            <li><Link to="/depoimentos" className="hover:text-accent">Depoimentos</Link></li>
            <li><Link to="/blog" className="hover:text-accent">Blog</Link></li>
            <li><Link to="/legislacao" className="hover:text-accent">Legislação</Link></li>
            <li><Link to="/clientes" className="hover:text-accent">Clientes</Link></li>
            <li><Link to="/contato" className="hover:text-accent">Contato</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-accent">Contato</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> (31) 3531-4004</li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-accent" />
              <a
                href="https://wa.me/5531985538780"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                WhatsApp (31) 98553-8780
              </a>
            </li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> (31) 98555-4004</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> <a href="mailto:contato@nildacontabilidade.com.br" className="hover:text-accent">contato@nildacontabilidade.com.br</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> <a href="mailto:fiscal@nildacontabilidade.com.br" className="hover:text-accent">fiscal@nildacontabilidade.com.br</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> <a href="mailto:pessoal@nildacontabilidade.com.br" className="hover:text-accent">pessoal@nildacontabilidade.com.br</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> <a href="mailto:contabil@nildacontabilidade.com.br" className="hover:text-accent">contabil@nildacontabilidade.com.br</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-accent">Endereço</h4>
          <a
            href="https://maps.app.goo.gl/WnE8pEYURky41qsj6"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-accent"
          >
            <MapPin className="mt-1 h-4 w-4 shrink-0" />
            <span>Rua Doutor Euzébio Dias Bicalho, 35<br />Bairro Chácara — Betim/MG<br />CEP 32670-286</span>
          </a>
          <a
            href="https://maps.app.goo.gl/WnE8pEYURky41qsj6"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block overflow-hidden rounded-xl border border-white/10"
          >
            <iframe
              title="Mapa Nilda Contabilidade — Betim/MG"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.0734997785908!2d-44.1878171!3d-19.963411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6d9487d629e51%3A0x21baa2d07096b297!2sNilda%20Contabilidade%20em%20Betim!5e0!3m2!1spt-BR!2sbr!4v1784051890847!5m2!1spt-BR!2sbr"
              className="pointer-events-none block aspect-[4/3] h-auto w-full sm:aspect-[16/9] md:aspect-[4/3]"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </a>

        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-primary-foreground/60 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Nilda Contabilidade. Todos os direitos reservados. · CRC/MG 064314/O-3</span>
          <span>
            Site desenvolvido por{" "}
            <a
              href="https://www.ideiasvirtuais.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary-foreground/80 transition-colors hover:text-accent"
            >
              IDEIAS VIRTUAIS
            </a>{" "}
            - {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
