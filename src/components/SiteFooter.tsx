import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { NildaLogo } from "./NildaLogo";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <NildaLogo variant="light" className="h-14 w-auto" />
          <p className="mt-4 text-sm text-primary-foreground/70">
            Assessoria contábil e jurídica com seriedade, comprometimento e transparência desde 1996.
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-accent">Navegação</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/empresa" className="hover:text-accent">Empresa</Link></li>
            <li><Link to="/cooperativas" className="hover:text-accent">Cooperativas</Link></li>
            <li><Link to="/servicos" className="hover:text-accent">Serviços</Link></li>
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
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> (31) 98553-8780</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> (31) 98555-4004</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> contato@nildacontabilidade.com.br</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-accent">Endereço</h4>
          <p className="mt-4 flex gap-2 text-sm text-primary-foreground/80">
            <MapPin className="mt-1 h-4 w-4 shrink-0" />
            <span>Rua Doutor Euzébio Dias Bicalho, 35<br />Bairro Chácara — Betim/MG<br />CEP 32670-286</span>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Nilda Contabilidade. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
