const logos = [
  { src: "/clients/betimcoop.jpg", alt: "Betimcoop — Transporte e Logística" },
  { src: "/clients/rodar-brasil.jpg", alt: "Rodar Brasil — Cooperativa de Transportes" },
  { src: "/clients/ouro-minas.jpg", alt: "Ouro Minas — Cooperativa de Transporte" },
  { src: "/clients/coopervia.jpg", alt: "Coopervia — Cooperativa de Transporte" },
  { src: "/clients/coopersind.jpg", alt: "Coopersind — Cooperativa de Transporte" },
  { src: "/clients/cooperinter.jpg", alt: "Cooperinter — Transporte Intermunicipal e Interestadual, Cargas e Turismo de MG" },
  { src: "/clients/coopertraf.jpg", alt: "Coopertraf — Cooperativa de Serviços de Transporte Rodoviário Público de Passageiros" },
  { src: "/clients/coopitatiaiucu.jpg", alt: "Coopitatiaiuçu — Cooperativa de Transporte" },
  { src: "/clients/sintesc.jpg", alt: "SINTESC — Sindicato dos Transportadores Escolares da RMBH" },
  { src: "/clients/simocemg.jpg", alt: "SIMOCEMG — Sindicato dos Motoristas Cegonheiros de MG" },
  { src: "/clients/coopertransp.jpg", alt: "Coopertransp — Cooperativa de Transporte de Passageiros e Cargas" },
  { src: "/clients/angel-tour.jpg", alt: "Angel Tour" },
  { src: "/clients/maister.jpg", alt: "Maister Motores" },
  { src: "/clients/gpg-seguros.jpg", alt: "GPG Seguros" },
  { src: "/clients/tca.jpg", alt: "TCA — Estudos, Projetos e Monitoramento Ambiental" },
  { src: "/clients/ox-genium.jpg", alt: "Ox-Genium" },
  { src: "/clients/marreta.jpg", alt: "Frango do Marreta" },
  { src: "/clients/abrasil.jpg", alt: "Abrasil Digital Print" },
  { src: "/clients/kamargos.jpg", alt: "Foto Studio Kamargos" },
  { src: "/clients/joelma-ferraz.jpg", alt: "Joelma Ferraz" },
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
            Betimcoop, Rodar Brasil, SINTESC, SIMOCEMG, Coopertransp, Angel Tour, Maister Motores, GPG Seguros, TCA,
            Ox-Genium, Frango do Marreta, Abrasil Digital Print, Foto Studio Kamargos e Joelma Ferraz — entre outras
            cooperativas e empresas atendidas pela Nilda Contabilidade.
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
                className="flex h-28 w-56 shrink-0 items-center justify-center rounded-xl border border-border bg-white p-4 shadow-sm sm:h-32 sm:w-64"
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
