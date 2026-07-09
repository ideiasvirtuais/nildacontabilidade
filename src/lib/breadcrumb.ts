const SITE = "https://nildacontabilidade.lovable.app";

export function breadcrumbScript(trail: Array<{ name: string; path: string }>) {
  const items = [{ name: "Início", path: "/" }, ...trail];
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: item.name,
        item: `${SITE}${item.path}`,
      })),
    }),
  };
}
