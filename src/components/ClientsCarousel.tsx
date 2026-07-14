import betimcoop from "../assets/clients/betimcoop.jpg.asset.json";
import rodarBrasil from "../assets/clients/rodar-brasil.jpg.asset.json";
import sintesc from "../assets/clients/sintesc.jpg.asset.json";
import gpgSeguros from "../assets/clients/gpg-seguros.jpg.asset.json";
import oxGenium from "../assets/clients/ox-genium.jpg.asset.json";
import coopertransp from "../assets/clients/coopertransp.jpg.asset.json";
import joelmaFerraz from "../assets/clients/joelma-ferraz.jpg.asset.json";
import angelTour from "../assets/clients/angel-tour.jpg.asset.json";
import simocemg from "../assets/clients/simocemg.jpg.asset.json";
import marreta from "../assets/clients/marreta.jpg.asset.json";
import abrasil from "../assets/clients/abrasil.jpg.asset.json";
import kamargos from "../assets/clients/kamargos.jpg.asset.json";
import maister from "../assets/clients/maister.jpg.asset.json";
import tca from "../assets/clients/tca.jpg.asset.json";

const logos = [
  { src: betimcoop.url, alt: "Betimcoop — Transporte e Logística" },
  { src: rodarBrasil.url, alt: "Rodar Brasil — Cooperativa de Transportes" },
  { src: sintesc.url, alt: "SINTESC — Sindicato dos Transportadores Escolares da RMBH" },
  { src: simocemg.url, alt: "SIMOCEMG — Sindicato dos Motoristas Cegonheiros de MG" },
  { src: coopertransp.url, alt: "Coopertransp — Cooperativa de Transporte de Passageiros e Cargas" },
  { src: angelTour.url, alt: "Angel Tour" },
  { src: maister.url, alt: "Maister Motores" },
  { src: gpgSeguros.url, alt: "GPG Seguros" },
  { src: tca.url, alt: "TCA — Estudos, Projetos e Monitoramento Ambiental" },
  { src: oxGenium.url, alt: "Ox-Genium" },
  { src: marreta.url, alt: "Frango do Marreta" },
  { src: abrasil.url, alt: "Abrasil Digital Print" },
  { src: kamargos.url, alt: "Foto Studio Kamargos" },
  { src: joelmaFerraz.url, alt: "Joelma Ferraz" },
];

export function ClientsCarousel() {
  const loop = [...logos, ...logos];

  return (
    <section className="border-y border-border bg-secondary py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <div className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">
            Cooperativas e empresas atendidas
          </div>
          <h2 className="font-display text-3xl text-primary md:text-4xl">
            Quem confia no nosso trabalho
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
            Rodar Brasil, SINTESC, SIMOCEMG, Coopertransp, Angel Tour, GPG Seguros, Ox-Genium, Frango do Marreta,
            Abrasil Digital Print e Joelma Ferraz — entre outras cooperativas e empresas atendidas pela Nilda
            Contabilidade.
          </p>
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
                title={logo.alt}
              >
                <img
                  src={logo.src}
                  alt={`Logo ${logo.alt}`}
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
