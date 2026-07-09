import { Building2 } from "lucide-react";

const clientes = [
  "Coop Transporte MG",
  "TransCargas Brasil",
  "LogPassageiros",
  "MineraCoop",
  "HortiFruti Express",
  "AutoCegonha Log",
  "EscolarBus",
  "ConstruBetim",
];

export function ClientsCarousel() {
  const loop = [...clientes, ...clientes];

  return (
    <section className="border-y border-border bg-secondary py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <div className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">
            Quem confia em nós
          </div>
          <h2 className="font-display text-3xl text-primary md:text-4xl">
            Clientes que caminham conosco
          </h2>
        </div>

        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex w-max animate-[marquee_35s_linear_infinite] gap-4 sm:gap-6">
            {loop.map((nome, i) => (
              <div
                key={`${nome}-${i}`}
                className="flex h-20 w-44 shrink-0 items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 shadow-sm grayscale transition hover:grayscale-0 sm:h-24 sm:w-56 sm:gap-3 sm:px-6"
              >
                <Building2 className="h-5 w-5 shrink-0 text-accent sm:h-6 sm:w-6" />
                <span className="text-center font-display text-xs leading-tight text-primary sm:text-sm">
                  {nome}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
