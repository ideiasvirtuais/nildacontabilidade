import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeading } from "../components/SectionHeading";
import { ExternalLink } from "lucide-react";

export const Route = createFileRoute("/legislacao")({
  head: () => ({
    meta: [
      { title: "Legislação Trabalhista e Fiscal — Nilda Contabilidade" },
      {
        name: "description",
        content:
          "Consulte legislações trabalhistas, fiscais e tributárias organizadas por tipo e por tema. Fontes oficiais para cooperativas e empresas.",
      },
      {
        name: "keywords",
        content: "legislação trabalhista, legislação fiscal, CLT, FGTS, INSS, legislação para cooperativas",
      },
      { property: "og:title", content: "Legislação — Nilda Contabilidade" },
      { property: "og:description", content: "Legislação por tipo e por tema — fontes oficiais." },
      { property: "og:url", content: "https://nildacontabilidade.lovable.app/legislacao" },
    ],
    links: [{ rel: "canonical", href: "https://nildacontabilidade.lovable.app/legislacao" }],
  }),
  component: Legislacao,
});

const porTipo = [
  ["Atos Declaratórios", "http://acesso.mte.gov.br/legislacao/atos-declaratorios.htm"],
  ["Circulares", "http://acesso.mte.gov.br/legislacao/circulares.htm"],
  ["Constituição", "http://acesso.mte.gov.br/legislacao/constituicao.htm"],
  ["Convenções", "http://acesso.mte.gov.br/legislacao/convencoes.htm"],
  ["Decretos", "http://acesso.mte.gov.br/legislacao/decretos.htm"],
  ["Decretos-Leis", "http://acesso.mte.gov.br/legislacao/decretos-leis.htm"],
  ["Enunciados", "http://acesso.mte.gov.br/legislacao/enunciados.htm"],
  ["Despachos", "http://acesso.mte.gov.br/legislacao/despachos.htm"],
  ["Instruções Normativas", "http://acesso.mte.gov.br/legislacao/instrucoes-normativas.htm"],
  ["Leis", "http://acesso.mte.gov.br/legislacao/leis.htm"],
  ["Leis Complementares", "http://acesso.mte.gov.br/legislacao/leis-complementares.htm"],
  ["Medidas Provisórias", "http://acesso.mte.gov.br/legislacao/medidas-provisorias.htm"],
  ["Normas Regulamentadoras", "http://www.mte.gov.br/index.php/seguranca-e-saude-no-trabalho/normatizacao/normas-regulamentadoras"],
  ["Notas Técnicas", "http://acesso.mte.gov.br/legislacao/notas-tecnicas.htm"],
  ["Ordens de Serviço", "http://acesso.mte.gov.br/legislacao/ordens-de-servico.htm"],
  ["Portarias", "http://acesso.mte.gov.br/legislacao/portarias.htm"],
  ["Resoluções", "http://acesso.mte.gov.br/legislacao/resolucoes.htm"],
  ["Resoluções Administrativas", "http://acesso.mte.gov.br/legislacao/resolucoes-administrativas.htm"],
  ["Resoluções Normativas", "http://acesso.mte.gov.br/legislacao/resolucoes-normativas.htm"],
  ["Resoluções Recomendadas", "http://acesso.mte.gov.br/legislacao/resolucoes-recomendadas.htm"],
] as const;

const porTema = [
  ["Abono salarial", "http://acesso.mte.gov.br/abono/legislacao.htm"],
  ["Ações do PNPE", "http://acesso.mte.gov.br/legislacao/acoes-do-pnpe.htm"],
  ["Aprendizagem", "http://acesso.mte.gov.br/legislacao/aprendizagem.htm"],
  ["Assistência e Homologação de Rescisão", "http://acesso.mte.gov.br/legislacao/assistencia-e-homologacao-de-rescisao-de-contrato-de-trabalho.htm"],
  ["CAGED", "http://acesso.mte.gov.br/legislacao/cadastro-geral-de-empregados-e-desempregados-caged.htm"],
  ["Cadastro Nacional de Entidades Sindicais", "http://acesso.mte.gov.br/legislacao/cadastro-nacional-de-entidades-sindicais.htm"],
  ["Comissão de Conciliação Prévia", "http://acesso.mte.gov.br/legislacao/comissao-de-conciliacao-previa.htm"],
  ["CODEFAT", "http://acesso.mte.gov.br/codefat/legislacao.htm"],
  ["CNES — Economia Solidária", "http://acesso.mte.gov.br/ecosolidaria/legislacao.htm"],
  ["CNIg — Imigração", "http://acesso.mte.gov.br/trab_estrang/legislacao.htm"],
  ["CLT", "https://www.planalto.gov.br/ccivil_03/decreto-lei/Del5452.htm"],
  ["Consórcios Sociais da Juventude", "http://acesso.mte.gov.br/legislacao/consorcios-sociais-da-juventude.htm"],
  ["Contribuição Sindical", "http://acesso.mte.gov.br/legislacao/contribuicao-sindical.htm"],
  ["Fiscalização do Trabalho", "http://acesso.mte.gov.br/fisca_trab/legislacao-1.htm"],
  ["FAT", "http://acesso.mte.gov.br/fat/legislacao.htm"],
  ["FGTS", "http://acesso.mte.gov.br/legislacao/fundo-de-garantia-do-tempo-de-servico-fgts.htm"],
  ["Juventude Cidadã", "http://acesso.mte.gov.br/legislacao/juventude-cidada.htm"],
  ["Mediação", "http://acesso.mte.gov.br/mediacao/legislacao.htm"],
  ["Ouvidoria", "http://acesso.mte.gov.br/ouvidoria/legislacao-especifica.htm"],
  ["Lixo hospitalar", "http://acesso.mte.gov.br/legislacao/procedimento-operacional-lixo-hospitalar.htm"],
  ["PAT — Alimentação do Trabalhador", "http://acesso.mte.gov.br/pat/legislacao.htm"],
  ["PNPE — Primeiro Emprego", "http://acesso.mte.gov.br/legislacao/programa-nacional-de-estimulo-ao-primeiro-emprego-pnpe.htm"],
  ["PNMPO — Microcrédito", "http://acesso.mte.gov.br/pnmpo/legislacao-especifica.htm"],
  ["ProJovem Trabalhador", "http://acesso.mte.gov.br/politicas_juventude/projovem-trabalhador.htm"],
  ["Qualificação Profissional", "http://acesso.mte.gov.br/pnq/legislacao.htm"],
  ["Convenções e Acordos Coletivos", "http://acesso.mte.gov.br/legislacao/registro-de-convencoes-e-acordos-coletivos-de-trabalho.htm"],
  ["Registro Sindical", "http://acesso.mte.gov.br/legislacao/cadastro-nacional-de-entidades-sindicais.htm"],
  ["RAIS", "http://acesso.mte.gov.br/rais/legislacao.htm"],
  ["Salário Mínimo", "http://acesso.mte.gov.br/data/files/FF8080812BE914E6012BEE9C0AE25062/leg_evolucao.pdf"],
  ["Segurança e Saúde no Trabalho", "http://acesso.mte.gov.br/legislacao/seguranca-e-saude-no-trabalho.htm"],
  ["Seguro Desemprego", "http://acesso.mte.gov.br/seg_desemp/legislacao.htm"],
  ["Trabalho Doméstico", "http://acesso.mte.gov.br/main.jsp?lumChannelId=FF8080812B7750C1012B7CE564144402"],
  ["Trabalho Escravo", "http://acesso.mte.gov.br/trab_escravo/legislacao.htm"],
  ["Trabalho Estrangeiro", "http://acesso.mte.gov.br/trab_estrang/legislacao.htm"],
  ["Trabalho Infantil", "http://acesso.mte.gov.br/trab_infantil/legislacao.htm"],
  ["Trabalho Temporário", "http://acesso.mte.gov.br/trab_temp/legislacao.htm"],
] as const;

function Legislacao() {
  const [tab, setTab] = useState<"tipo" | "tema">("tipo");
  const list = tab === "tipo" ? porTipo : porTema;
  return (
    <>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading eyebrow="Legislação" title="Referências úteis para consulta." description="Links diretos para as fontes oficiais de legislação trabalhista e sindical." />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 inline-flex rounded-full border border-border bg-card p-1">
          <button
            onClick={() => setTab("tipo")}
            className={`rounded-full px-5 py-2 text-sm ${tab === "tipo" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
          >
            Por tipo
          </button>
          <button
            onClick={() => setTab("tema")}
            className={`rounded-full px-5 py-2 text-sm ${tab === "tema" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
          >
            Por tema
          </button>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {list.map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-[var(--shadow-soft)]"
            >
              <span className="text-foreground">{label}</span>
              <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent" />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
