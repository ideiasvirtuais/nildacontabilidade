import { useRouterState } from "@tanstack/react-router";
import { breadcrumbJsonLd, buildBreadcrumbTrail } from "../lib/breadcrumb";

/**
 * Renders a BreadcrumbList JSON-LD script derived from the current pathname.
 * Provides a fallback so every page (including dynamic routes) exposes
 * structured breadcrumbs without requiring per-route head() configuration.
 *
 * Google accepts JSON-LD placed anywhere in the document (head or body).
 */
export function AutoBreadcrumbJsonLd() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const trail = buildBreadcrumbTrail(pathname);
  // Skip the home page — a single "Início" item is not a useful breadcrumb.
  if (trail.length === 0) return null;
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd(trail) }}
    />
  );
}
