import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/empresa")({
  head: () => ({
    meta: [
      { title: "A Empresa — Nilda Contabilidade" },
      { name: "description", content: "Conheça a Nilda Contabilidade: escritório contábil em Betim/MG desde 1996, focado em seriedade, comprometimento e transparência." },
      { property: "og:title", content: "A Empresa — Nilda Contabilidade" },
      { property: "og:description", content: "Escritório contábil em Betim/MG desde 1996." },
      { property: "og:url", content: "/empresa" },
    ],
    links: [{ rel: "canonical", href: "/empresa" }],
  }),
  component: Empresa,
});

function Empresa() {
  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading eyebrow="A Empresa" title="Prestação de serviços e assessoria contábil e jurídica." />
        </div>
      </section>
      <section className="mx-auto max-w-4xl space-y-6 px-6 py-20 text-muted-foreground">
        <p>
          A <strong className="text-primary">Nilda Contabilidade</strong> é uma empresa de prestação de serviços e
          assessoria contábil e jurídica. Atuamos no mercado empresarial desde 1996, trabalhamos com o intuito de atender
          as necessidades de nossos clientes dentro da prática legal e ética, obedecendo sempre à legislação vigente no país.
        </p>
        <p>
          Com conhecimento, tecnologia e dedicação, estamos atentos às constantes mudanças e trabalhamos para oferecer
          o melhor resultado aos nossos clientes. Seja sua empresa de grande, médio ou pequeno porte, a Nilda Contabilidade
          tem como prioridade atender com excelência os mais diversos ramos de atividades empresariais.
        </p>
        <p>
          Mantendo um canal aberto de comunicação com seus clientes, a Nilda Contabilidade dispõe de recursos eficientes
          de tecnologia e informação por meio de banco de dados sempre atualizados que vão facilitar nas tomadas de decisão.
          Estamos localizados na cidade de <strong className="text-primary">Betim – MG</strong>, com estrutura própria e bem localizada.
        </p>
        <p>
          Além disso, a Nilda Contabilidade conta com uma equipe de profissionais capacitados para atender nossos clientes
          com seriedade, comprometimento e transparência — pilares maiores do nosso empreendimento.
        </p>
      </section>
    </>
  );
}
