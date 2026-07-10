import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  Home,
  Building2,
  Users,
  Briefcase,
  BookOpen,
  Scale,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { NildaLogo } from "./NildaLogo";

const nav: { to: string; label: string; icon: LucideIcon }[] = [
  { to: "/", label: "Início", icon: Home },
  { to: "/empresa", label: "Empresa", icon: Building2 },
  { to: "/cooperativas", label: "Cooperativas", icon: Users },
  { to: "/servicos", label: "Serviços", icon: Briefcase },
  { to: "/blog", label: "Blog", icon: BookOpen },
  { to: "/legislacao", label: "Legislação", icon: Scale },
  { to: "/contato", label: "Contato", icon: Mail },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Nilda Contabilidade — Início">
          <NildaLogo className="h-10 w-auto sm:h-12 md:h-14 lg:h-16" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {nav.map((n) => {
            const Icon = n.icon;
            return (
              <Link
                key={n.to}
                to={n.to}
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                activeProps={{ className: "text-primary font-medium" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {n.label}
              </Link>
            );
          })}
          <a
            href="tel:+553135314004"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" /> (31) 3531-4004
          </a>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {nav.map((n) => {
              const Icon = n.icon;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded px-2 py-2 text-sm text-foreground hover:bg-muted"
                >
                  <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                  {n.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
