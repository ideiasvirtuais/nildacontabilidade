import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">Não foi possível carregar</h1>
        <p className="mt-2 text-sm text-muted-foreground">Ocorreu um erro. Tente novamente.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Tentar novamente
          </button>
          <a href="/" className="rounded-md border border-input bg-background px-4 py-2 text-sm">Início</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nilda Contabilidade — Assessoria contábil em Betim/MG desde 1996" },
      { name: "description", content: "Assessoria contábil, fiscal, tributária e de recursos humanos em Betim/MG. Atendemos empresas de todos os portes com seriedade e transparência desde 1996." },
      { name: "author", content: "Nilda Contabilidade" },
      { property: "og:title", content: "Nilda Contabilidade — Assessoria contábil em Betim/MG desde 1996" },
      { property: "og:description", content: "Assessoria contábil, fiscal, tributária e de recursos humanos em Betim/MG. Atendemos empresas de todos os portes com seriedade e transparência desde 1996." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Nilda Contabilidade" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nilda Contabilidade — Assessoria contábil em Betim/MG desde 1996" },
      { name: "twitter:description", content: "Assessoria contábil, fiscal, tributária e de recursos humanos em Betim/MG. Atendemos empresas de todos os portes com seriedade e transparência desde 1996." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/cb96fa82-f7d4-4c6b-a4f4-6ce9a724af8c/id-preview-9ef0c863--7f353fb9-ece9-4cfb-8a38-80c2db35a6d6.lovable.app-1783564274986.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/cb96fa82-f7d4-4c6b-a4f4-6ce9a724af8c/id-preview-9ef0c863--7f353fb9-ece9-4cfb-8a38-80c2db35a6d6.lovable.app-1783564274986.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AccountingService",
          name: "Nilda Contabilidade",
          image: "",
          telephone: "+55-31-3531-4004",
          email: "contato@nildacontabilidade.com.br",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua Doutor Euzébio Dias Bicalho, 35 — Chácara",
            addressLocality: "Betim",
            addressRegion: "MG",
            postalCode: "32670-286",
            addressCountry: "BR",
          },
          foundingDate: "1996",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
