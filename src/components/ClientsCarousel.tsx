import c1 from "../assets/clients/cliente-1.jpg.asset.json";
import c2 from "../assets/clients/cliente-2.jpg.asset.json";
import c3 from "../assets/clients/cliente-3.jpg.asset.json";
import c4 from "../assets/clients/cliente-4.jpg.asset.json";
import c5 from "../assets/clients/cliente-5.jpg.asset.json";
import c6 from "../assets/clients/cliente-6.jpg.asset.json";
import c7 from "../assets/clients/cliente-7.jpg.asset.json";
import c8 from "../assets/clients/cliente-8.jpg.asset.json";
import c9 from "../assets/clients/cliente-9.jpg.asset.json";
import c10 from "../assets/clients/cliente-10.jpg.asset.json";
import c11 from "../assets/clients/cliente-11.jpg.asset.json";
import c12 from "../assets/clients/cliente-12.jpg.asset.json";
import c13 from "../assets/clients/cliente-13.jpg.asset.json";

const logos = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13].map((a, i) => ({
  src: a.url,
  alt: `Cliente ${i + 1}`,
}));

export function ClientsCarousel() {
  const loop = [...logos, ...logos];

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
          <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-4 sm:gap-6">
            {loop.map((logo, i) => (
              <div
                key={`${logo.alt}-${i}`}
                className="flex h-24 w-48 shrink-0 items-center justify-center rounded-xl border border-border bg-white p-4 shadow-sm sm:h-28 sm:w-56"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  decoding="async"
                  className="max-h-full max-w-full object-contain"
                />
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
