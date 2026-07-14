import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeading } from "../components/SectionHeading";
import {
  Check,
  ArrowRight,
  Users2,
  Building2,
  FileCheck2,
  Scale,
  ShieldCheck,
  Search,
  Landmark,
  Calculator,
  Receipt,
  UserCog,
  BadgePercent,
  PiggyBank,
  Home,
  RefreshCcw,
} from "lucide-react";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Contabilidade, Tributário e Jurídico | Nilda Contabilidade" },
      {
        name: "description",
        content:
          "Serviços para cooperativas (constituição, regularização, auditoria, perícia) e empresas (contabilidade, fiscal, DP, planejamento e recuperação tributária, holding, Reforma Tributária).",
      },
      {
        name: "keywords",
        content:
          "assessoria tributária, planejamento tributário, recuperação de créditos tributários, auditoria em cooperativas, holding familiar, reforma tributária, contabilidade para empresas",
      },
      { property: "og:title", content: "Serviços — Nilda Contabilidade" },
      {
        property: "og:description",
        content: "Serviços para cooperativas e empresas: contábil, fiscal, tributário, jurídico, auditoria e perícia.",
      },
      { property: "og:url", content: "https://nildacontabilidade.lovable.app/servicos" },
    ],
    links: [{ rel: "canonical", href: "https://nildacontabilidade.lovable.app/servicos" }],
  }),
  component: Servicos,
});

const cooperativas = [
  { icon: FileCheck2, title: "Constituição", desc: "Estatuto, assembleias, registros e enquadramento." },
  { icon: RefreshCcw, title: "Regularização", desc: "Ajustes societários, fiscais e obrigações em atraso." },
  { icon: Calculator, title: "Assessoria Contábil", desc: "Escrituração, balancetes e demonstrações completas." },
  { icon: BadgePercent, title: "Assessoria Tributária", desc: "Tratamento correto do ato cooperado e planejamento." },
  { icon: Scale, title: "Consultoria Jurídica", desc: "Governança, contratos e apoio à diretoria." },
  { icon: Search, title: "Auditoria", desc: "Auditoria contábil e de conformidade cooperativista." },
  { icon: ShieldCheck, title: "Perícia", desc: "Perícia contábil, tributária e assistência técnica." },
];

const empresas = [
  { icon: Calculator, title: "Contabilidade", desc: "Escrituração, balancetes e demonstrações contábeis." },
  { icon: Receipt, title: "Fiscal", desc: "Escrituração fiscal e obrigações acessórias." },
  { icon: UserCog, title: "Departamento Pessoal", desc: "Folha, admissões, rescisões, eSocial e FGTS." },
  { icon: BadgePercent, title: "Planejamento Tributário", desc: "Escolha do regime e economia dentro da lei." },
  { icon: PiggyBank, title: "Recuperação Tributária", desc: "Levantamento, compensação e ressarcimento de créditos." },
  { icon: Home, title: "Holding", desc: "Estruturação patrimonial, sucessória e proteção de bens." },
  { icon: RefreshCcw, title: "Reforma Tributária", desc: "Análise de impactos e plano de transição." },
];

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
            title="Estrutura completa para cooperativas e empresas."
            description="Duas frentes de atuação, uma única equipe: contabilidade, tributário e jurídico integrados."
          />
        </div>
      </section>

      {/* Cards: Cooperativas × Empresas */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Cooperativas */}
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Users2 className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-accent">Especialidade</div>
                <h2 className="font-display text-2xl text-primary">Cooperativas</h2>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Do nascimento à consolidação da cooperativa — com foco em transporte de cargas, passageiros e
              hortifrutigranjeiros.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {cooperativas.map((s) => (
                <li key={s.title} className="flex gap-3 rounded-xl border border-border bg-background p-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/15 text-accent">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-medium text-primary">{s.title}</div>
                    <div className="text-xs text-muted-foreground">{s.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              to="/cooperativas"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent"
            >
              Conhecer a assessoria para cooperativas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Empresas */}
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-accent">Todos os portes</div>
                <h2 className="font-display text-2xl text-primary">Empresas</h2>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Contabilidade, gestão tributária e estruturação patrimonial para indústria, comércio, serviços e
              transportadoras.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {empresas.map((s) => (
                <li key={s.title} className="flex gap-3 rounded-xl border border-border bg-background p-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/15 text-accent">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-medium text-primary">{s.title}</div>
                    <div className="text-xs text-muted-foreground">{s.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              to="/contato"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent"
            >
              Solicitar um diagnóstico tributário <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Departamentos internos (detalhado) */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading
            eyebrow="Por dentro dos departamentos"
            title="Como cada área trabalha."
            description="Detalhes das rotinas executadas por cada departamento da Nilda Contabilidade."
          />

          <div className="mt-10 flex flex-wrap gap-2 border-b border-border">
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
        </div>
      </section>
    </>
  );
}
