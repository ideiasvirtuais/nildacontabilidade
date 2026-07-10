import { Link } from "@tanstack/react-router";
import logoAsset from "../assets/nilda-logo.png.asset.json";

export function NildaLogo({ className = "" }: { className?: string; variant?: "dark" | "light" }) {
  return (
    <img
      src={logoAsset.url}
      alt="Nilda Contabilidade & Jurídico"
      width={600}
      height={480}
      loading="eager"
      decoding="async"
      className={`bg-white object-contain ${className}`}
    />
  );
}

export function NildaLogoLink() {
  return (
    <Link to="/" className="inline-flex items-center rounded-md bg-white p-1">
      <NildaLogo className="h-14 w-auto" />
    </Link>
  );
}
