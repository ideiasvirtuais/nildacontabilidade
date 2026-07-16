import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
import { buildBreadcrumbTrail } from "../lib/breadcrumb";

/**
 * Visible breadcrumb trail. Uses the same builder as the JSON-LD generator
 * so the visual UI and structured data stay in sync.
 * Hidden on the home page (single "Início" item is not useful).
 */
export function Breadcrumbs() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const trail = buildBreadcrumbTrail(pathname);
  if (trail.length === 0) return null;

  return (
    <nav
      aria-label="Você está em"
      className="border-b border-border/60 bg-muted/30"
    >
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-6 py-3 text-xs text-muted-foreground sm:text-sm">
        <li className="flex items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1 transition-colors hover:text-primary"
          >
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Início</span>
          </Link>
        </li>
        {trail.map((item, idx) => {
          const isLast = idx === trail.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              <ChevronRight
                className="h-3.5 w-3.5 text-muted-foreground/60"
                aria-hidden="true"
              />
              {isLast ? (
                <span
                  className="font-medium text-foreground"
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
