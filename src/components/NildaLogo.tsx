import { Link } from "@tanstack/react-router";

type Props = {
  className?: string;
  variant?: "dark" | "light";
};

export function NildaLogo({ className = "", variant = "dark" }: Props) {
  // Aspect ratio of the source PNG (approx 1280×1044)
  const isLight = variant === "light";
  return (
    <img
      src="/nilda-logo.png"
      alt="Nilda Contabilidade & Jurídico"
      width={1280}
      height={1044}
      loading="eager"
      decoding="async"
      className={[
        "object-contain",
        isLight ? "rounded-md bg-white p-1.5 shadow-sm" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

export function NildaLogoLink() {
  return (
    <Link to="/" className="inline-flex items-center" aria-label="Nilda Contabilidade — Início">
      <NildaLogo className="h-10 w-auto sm:h-12 md:h-14" />
    </Link>
  );
}
