import { Link } from "@tanstack/react-router";

export function NildaLogo({ className = "", variant = "dark" }: { className?: string; variant?: "dark" | "light" }) {
  const blue = variant === "light" ? "#ffffff" : "#1e3a8a";
  const orange = "#f97316";
  return (
    <svg viewBox="0 0 220 90" className={className} role="img" aria-label="Nilda Contabilidade">
      <text
        x="10"
        y="48"
        fontFamily="'Fraunces', Georgia, serif"
        fontSize="52"
        fontStyle="italic"
        fontWeight="700"
        fill={orange}
      >
        N
      </text>
      <text
        x="52"
        y="48"
        fontFamily="'Fraunces', Georgia, serif"
        fontSize="46"
        fontStyle="italic"
        fontWeight="600"
        fill={blue}
      >
        ilda
      </text>
      <line x1="12" y1="56" x2="150" y2="56" stroke={blue} strokeWidth="1.5" />
      <text
        x="80"
        y="72"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="12"
        fontWeight="600"
        letterSpacing="1.5"
        fill={orange}
      >
        CONTABILIDADE
      </text>
      <text
        x="80"
        y="86"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="10"
        fontWeight="500"
        letterSpacing="2"
        fill={orange}
      >
        &amp; JURÍDICO
      </text>
    </svg>
  );
}

export function NildaLogoLink() {
  return (
    <Link to="/" className="inline-flex items-center">
      <NildaLogo className="h-14 w-auto" />
    </Link>
  );
}
