import { useEffect, useState } from "react";

type Issue = {
  kind: "resource" | "chunk" | "runtime";
  message: string;
  source?: string;
  stack?: string;
  at: number;
};

const CHUNK_PATTERNS = [
  /Failed to fetch dynamically imported module/i,
  /Importing a module script failed/i,
  /error loading dynamically imported module/i,
  /Loading chunk \S+ failed/i,
  /ChunkLoadError/i,
  /No such module/i,
  /Unable to preload CSS/i,
  /Unexpected token '<'/i, // HTML served in place of JS/CSS (SPA fallback swallowing an asset 404)
];

function isChunkError(msg: string) {
  return CHUNK_PATTERNS.some((r) => r.test(msg));
}

export function BundleDiagnostics() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const push = (i: Issue) =>
      setIssues((prev) => (prev.some((p) => p.message === i.message && p.source === i.source) ? prev : [...prev, i]));

    const onError = (event: ErrorEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "SCRIPT" || target.tagName === "LINK" || target.tagName === "IMG")) {
        const src = (target as HTMLScriptElement).src || (target as HTMLLinkElement).href || "";
        push({
          kind: "resource",
          message: `Falha ao carregar recurso <${target.tagName.toLowerCase()}>`,
          source: src,
          at: Date.now(),
        });
        return;
      }
      const msg = event.message || String(event.error ?? "erro desconhecido");
      push({
        kind: isChunkError(msg) ? "chunk" : "runtime",
        message: msg,
        source: event.filename,
        stack: event.error?.stack,
        at: Date.now(),
      });
    };

    const onRejection = (event: PromiseRejectionEvent) => {
      const reason: any = event.reason;
      const msg = reason?.message || String(reason ?? "promise rejeitada");
      push({
        kind: isChunkError(msg) ? "chunk" : "runtime",
        message: msg,
        source: reason?.url,
        stack: reason?.stack,
        at: Date.now(),
      });
    };

    window.addEventListener("error", onError, true); // capture phase for resource errors
    window.addEventListener("unhandledrejection", onRejection);
    return () => {
      window.removeEventListener("error", onError, true);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, []);

  if (dismissed || issues.length === 0) return null;

  const hasChunk = issues.some((i) => i.kind === "chunk" || i.kind === "resource");

  const hardReload = () => {
    try {
      if ("caches" in window) caches.keys().then((keys) => keys.forEach((k) => caches.delete(k)));
      if ("serviceWorker" in navigator)
        navigator.serviceWorker.getRegistrations?.().then((rs) => rs.forEach((r) => r.unregister()));
    } catch {}
    const url = new URL(window.location.href);
    url.searchParams.set("_r", Date.now().toString());
    window.location.replace(url.toString());
  };

  const copy = () => {
    const text = issues
      .map(
        (i) =>
          `[${i.kind}] ${i.message}${i.source ? `\n  source: ${i.source}` : ""}${i.stack ? `\n  ${i.stack}` : ""}`,
      )
      .join("\n\n");
    navigator.clipboard?.writeText(
      `Diagnóstico Nilda Contabilidade\nURL: ${window.location.href}\nUA: ${navigator.userAgent}\n\n${text}`,
    );
  };

  return (
    <div
      role="alertdialog"
      aria-label="Diagnóstico de carregamento"
      style={{
        position: "fixed",
        left: 12,
        right: 12,
        bottom: 12,
        zIndex: 2147483647,
        maxWidth: 560,
        margin: "0 auto",
        background: "#111827",
        color: "#f9fafb",
        border: "1px solid #f59e0b",
        borderRadius: 12,
        padding: 16,
        fontFamily: "system-ui, -apple-system, sans-serif",
        fontSize: 13,
        lineHeight: 1.4,
        boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "baseline" }}>
        <strong style={{ color: "#fbbf24", fontSize: 14 }}>
          {hasChunk ? "Bundle corrompido detectado" : "Erro em tempo de execução"}
        </strong>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Fechar diagnóstico"
          style={{ background: "transparent", color: "#f9fafb", border: 0, cursor: "pointer", fontSize: 18 }}
        >
          ×
        </button>
      </div>
      <p style={{ margin: "6px 0 10px", color: "#d1d5db" }}>
        {hasChunk
          ? "Um arquivo JS/CSS falhou ao carregar. Isso costuma ser um build antigo em cache ou asset ausente no servidor."
          : "Um erro impediu parte do site de funcionar. Detalhes abaixo."}
      </p>
      <ul style={{ margin: 0, paddingLeft: 16, maxHeight: 180, overflowY: "auto" }}>
        {issues.slice(-5).map((i, idx) => (
          <li key={idx} style={{ marginBottom: 8 }}>
            <code style={{ color: "#fca5a5", wordBreak: "break-word" }}>{i.message}</code>
            {i.source ? (
              <div style={{ color: "#9ca3af", fontSize: 11, wordBreak: "break-all" }}>{i.source}</div>
            ) : null}
          </li>
        ))}
      </ul>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
        <button
          onClick={hardReload}
          style={{
            background: "#f59e0b",
            color: "#111827",
            border: 0,
            borderRadius: 6,
            padding: "6px 12px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Recarregar limpando cache
        </button>
        <button
          onClick={copy}
          style={{
            background: "transparent",
            color: "#f9fafb",
            border: "1px solid #4b5563",
            borderRadius: 6,
            padding: "6px 12px",
            cursor: "pointer",
          }}
        >
          Copiar diagnóstico
        </button>
      </div>
    </div>
  );
}
