const SITE = "https://nildacontabilidade.lovable.app";

// Human-readable labels for known top-level route segments.
// Unknown segments (e.g. dynamic $slug values) fall back to a title-cased
// version of the URL segment so dynamic pages still get a valid trail.
const SEGMENT_LABELS: Record<string, string> = {
  empresa: "A Empresa",
  cooperativas: "Cooperativas",
  servicos: "Serviços",
  depoimentos: "Depoimentos",
  blog: "Blog Técnico",
  legislacao: "Legislação",
  clientes: "Clientes",
  contato: "Contato",
};

function humanize(segment: string): string {
  try {
    segment = decodeURIComponent(segment);
  } catch {
    // keep raw segment if decoding fails
  }
  const cleaned = segment.replace(/[-_+]/g, " ").trim();
  if (!cleaned) return segment;
  return cleaned
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export type BreadcrumbItem = { name: string; path: string };

/**
 * Build a breadcrumb trail (excluding the "Início" root) from a pathname.
 * Works for static and dynamic routes — unknown segments are humanized.
 */
export function buildBreadcrumbTrail(pathname: string): BreadcrumbItem[] {
  const clean = (pathname || "/").split("?")[0].split("#")[0];
  const segments = clean.split("/").filter(Boolean);
  const trail: BreadcrumbItem[] = [];
  let acc = "";
  for (const seg of segments) {
    acc += "/" + seg;
    trail.push({
      name: SEGMENT_LABELS[seg] ?? humanize(seg),
      path: acc,
    });
  }
  return trail;
}

/** Serialize a trail (already excluding Início) to a JSON-LD BreadcrumbList. */
export function breadcrumbJsonLd(trail: BreadcrumbItem[]): string {
  const items = [{ name: "Início", path: "/" }, ...trail];
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  });
}

/** Route-level helper: build a script descriptor for head({ scripts }). */
export function breadcrumbScript(trail: BreadcrumbItem[]) {
  return {
    type: "application/ld+json" as const,
    children: breadcrumbJsonLd(trail),
  };
}
