import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { Check } from "lucide-react";
import { breadcrumbScript } from "../lib/breadcrumb";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Nilda Contabilidade" },
      { name: "description", content: "Serviços contábeis, fiscais, tributários, de processos e RH oferecidos pela Nilda Contabilidade em Betim/MG." },
      { property: "og:title", content: "Serviços — Nilda Contabilidade" },
      { property: "og:description", content: "Contábil, Fiscal & Tributário, Processos, RH e Planejamento Estratégico." },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
  component: Servicos,
});

const departments = {
  "Contábil": [
    "Organização e classificação de todos os documentos contábeis",
    "Conciliação bancária",
    "Elaboração de correção monetária e reavaliação de bens do ativo permanente e patrimônio líquido",
    "Elaboração das demonstrações contábeis — Balancete, Balanço Patrimonial, DRE, Demonstração de Lucros Acumulados e demonstrativos analíticos",
    "Elaboração de declarações acessórias: DASN, DCTF, DACON, DIMOB, DMED, DIRF, DIPJ, IRPF, entre outras",
    "Controle do limite de distribuição dos lucros dos sócios",
    "Apuração pelo Lucro Arbitrado, Presumido e Real",
    "Emissão do Livro Diário e Livro Razão",
    "Escrituração do Livro Caixa e do LALUR",
    "Controle de tributos, relação e cálculo de débitos em atraso",
    "Parcelamentos junto à Receita Federal (REFIS, PAES, Dívida Ativa, etc.)",
  ],
  "Processos": [
    "Legalização, abertura, alterações, transferências e encerramento de empresas",
    "Enquadramento no Simples Nacional",
    "Registro no Cartório de Pessoas Jurídicas",
    "Pesquisas fiscais de empresas e pessoa física junto à Receita Federal",
    "Parcelamento de impostos junto aos órgãos federais, estaduais e municipais",
    "Parcelamento de INSS e FGTS",
    "Emissão de certidões negativas",
    "SICAF",
    "Recuperação de créditos: compensação e ressarcimento de impostos e tributos",
  ],
  "Fiscal & Tributário": [
    "Planejamento fiscal e tributário",
    "Análise, classificação e lançamento das notas fiscais em geral da empresa",
    "Elaboração dos impostos normais e cumprimento das obrigações acessórias mensais e anuais",
    "Declaração de Microempresa junto ao estado e município",
    "Acompanhamento de mudanças na legislação fiscal",
    "Consultoria a empresas com fins de planejamento tributário",
    "Escrituração de livros fiscais federais (Entradas, Saídas e Apuração do IPI)",
    "Escrituração de livros fiscais estaduais (Entradas, Saídas e Apuração do ICMS)",
    "Escrituração de livros fiscais municipais (Apuração do ISS)",
    "Registro de inventário da empresa",
    "Confecção de guias de recolhimento (DAS, COFINS, PIS, IRPJ, CSLL, ICMS, IPI, ISS, etc.)",
    "GIAs de apuração mensal, trimestral e anual",
    "Declarações acessórias: DECLAN-IPM, PAF-ECF, SINTEGRA, entre outras",
  ],
  "Recursos Humanos": [
    "Registro de empregados",
    "Confecção de folha de pagamento",
    "Administração de direitos e benefícios",
    "Apuração e emissão de guias do INSS, FGTS, IRRF, contribuição sindical, assistencial e confederativa",
    "Rescisões contratuais de empregados",
    "Homologação junto ao sindicato de classe e Ministério do Trabalho",
    "Certidões negativas do INSS e Certificado de Regularidade do FGTS",
    "Confecção e entrega do CAGED, DIRF, SEFIP e RAIS",
  ],
};

type Dept = keyof typeof departments;

function Servicos() {
  const tabs = Object.keys(departments) as Dept[];
  const [active, setActive] = useState<Dept>(tabs[0]);
  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading
            eyebrow="Serviços"
            title="Estrutura completa de contabilidade para o seu negócio."
            description="Nossos departamentos trabalham de forma integrada para entregar informação de qualidade e apoio nas decisões estratégicas."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-wrap gap-2 border-b border-border">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`relative px-5 py-3 text-sm font-medium transition-colors ${
                active === t ? "text-primary" : "text-muted-foreground hover:text-primary"
              }`}
            >
              Departamento {t}
              {active === t && <span className="absolute inset-x-3 -bottom-px h-0.5 bg-accent" />}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {departments[active].map((item) => (
            <li key={item} className="flex gap-3 rounded-xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span className="text-sm text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-4xl space-y-5 px-6 py-20 text-muted-foreground">
          <SectionHeading eyebrow="Dica" title="Planejamento estratégico para o seu escritório" />
          <p className="mt-6 italic text-primary">
            "A maioria das pessoas não planeja fracassar, fracassa por não planejar."
          </p>
          <p>
            Embora o termo planejamento estratégico não seja novo, surgem muitas interrogações quando é levado para o
            segmento jurídico. A gestão estrategicamente planejada torna real a profissionalização das estruturas, e cresce
            a eficiência nos serviços prestados em todas as atividades desempenhadas.
          </p>
          <p>
            Não basta ter uma imagem brilhante do que se deseja alcançar sem olhar para o passado e o presente do escritório.
            É importante esclarecer que o planejamento estratégico não é uma medida com princípio, meio e fim: sua
            abrangência é bem maior, uma vez que incorpora uma condução consciente que passa a fazer parte da rotina.
          </p>
          <p>
            O envolvimento coletivo, planos de expansão bem analisados, o reconhecimento do capital intelectual da equipe e
            um plano "B" flexível garantem que o escritório siga um curso orientado e conhecido por todos — sem perder
            de vista seus princípios e valores.
          </p>
        </div>
      </section>
    </>
  );
}
