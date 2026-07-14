# Reforma editorial — Nilda Contabilidade

Aplicar as 12 mudanças da sua lista + a sugestão principal (Cooperativas de Transporte como posicionamento). Abaixo o que vai onde, com decisões que preciso confirmar antes de tocar em código.

## Estado atual (relevante)

- Rotas já existem: `/`, `/empresa`, `/cooperativas`, `/servicos`, `/clientes`, `/blog`, `/legislacao`, `/contato`.
- `ClientsCarousel` já existe com 13 logos genéricas (`cliente-1` … `cliente-13`) — vou renomear para as marcas reais (Betimcoop, Coopitatiaiuçu, etc.), mas os arquivos de imagem precisam ser trocados.
- Fundadora já aparece no home e em `/empresa`, mas de forma resumida — vou expandir com o texto novo.
- Rodapé já tem endereço, telefones e e-mails. Falta CRC, WhatsApp destacado, redes sociais e mapa embed.
- Hero usa `hero-office.jpg` (imagem de notebook) — vou trocar por outra que evoque cooperativas de transporte.

## O que vou implementar direto

**1. Home / Hero**
- H1: **"Contabilidade, Consultoria Tributária e Assessoria Jurídica Especializada para Cooperativas e Empresas."** (opção 1, mais institucional — reservo a opção 2 se você preferir).
- Subtítulo: texto novo ("Desde 1996 oferecendo soluções…").
- Chip topo mantém "Desde 1996 · Atendimento em todo o Brasil".
- Botões: "Assessoria para Cooperativas" • "Solicite um Diagnóstico Tributário" (destaque laranja) • "Fale Conosco" (outline).
- Imagem: gero via `imagegen` (foto fotorrealista de reunião/atendimento com foco em transporte cooperativo — caminhão + prancheta + reunião). Substitui `hero-office.jpg`.

**2. Nova seção "Por que escolher a Nilda Contabilidade?"** (logo abaixo do hero)
- 7 cards com ícones Lucide: Desde 1996 · Brasil todo · Especialização em Cooperativas · Contabilidade + Jurídico Integrados · Reforma Tributária · Planejamento Tributário · Recuperação de Créditos.

**3. Faixa de destaque "Especialistas em Cooperativas de Transporte"** (sua sugestão principal)
- Banner curto e forte entre a seção anterior e a Especialidades: "Cargas, Passageiros e Hortifrutigranjeiros — referência nacional".

**4. Carrossel de clientes**
- Renomeio o componente para exibir nomes reais no `alt` (Betimcoop, Coopitatiaiuçu, CooperlogHF, Coopersind, Coopervia, Coopertraf + 7 outras).
- **Preciso das logos oficiais** (ver perguntas abaixo).

**5. Área de Serviços (`/servicos`)**
- Duas colunas / dois blocos de cards:
  - **Cooperativas:** Constituição · Regularização · Assessoria Contábil · Assessoria Tributária · Consultoria Jurídica · Auditoria · Perícia.
  - **Empresas:** Contabilidade · Fiscal · Departamento Pessoal · Planejamento Tributário · Recuperação Tributária · Holding · Reforma Tributária.

**6. Área "Sobre" (`/empresa`)**
- Bloco de apresentação da fundadora Nilda Luiz com os 6 bullets (Bacharel, Pós, Especialista Cooperativas, Especialista Tributação, 40+ anos, Brasil todo).

**7. Nova seção "Nossos Diferenciais"** (ponto 12) — na home, antes do CTA final
- 7 checkmarks: consultivo · 30 anos · cooperativas · Brasil todo · equipe especializada · Reforma Tributária · soluções personalizadas.

**8. Blog (`/blog`) com categorias**
- Adiciono chips de categoria no topo: Reforma Tributária · Cooperativas · Transporte · Tributação · Planejamento Tributário · Notícias · Legislação. Cada artigo passa a ter uma tag `category` e o filtro é client-side.

**9. Rodapé (`SiteFooter`)**
- Adiciono: CRC (064314/O-3), botão WhatsApp destacado, ícones de redes sociais (placeholders até você me passar URLs), embed do Google Maps (iframe) do endereço de Betim/MG.

**10. SEO — palavras-chave** em `head()` de cada rota
- `/`: contabilidade para cooperativas, contabilidade em Belo Horizonte, cooperativas de transporte, reforma tributária.
- `/cooperativas`: cooperativas de transporte, ato cooperado, auditoria em cooperativas.
- `/servicos`: assessoria tributária, planejamento tributário, recuperação de créditos.
- `/empresa`: escritório contábil Betim, Nilda Luiz contadora.
- `/blog`, `/legislacao`, `/contato`: variações relacionadas.
- Atualizo `sitemap.xml` se necessário.

## Precisa da sua decisão antes de implementar

1. **Título do hero** — vou com a Opção 1 (institucional) por default. Confirme se prefere a Opção 2 ("Referência em Contabilidade… em Todo o Brasil").
2. **Logos dos clientes** — hoje as 13 imagens são genéricas. Você tem os PNGs/SVGs oficiais de Betimcoop, Coopitatiaiuçu, CooperlogHF, Coopersind, Coopervia, Coopertraf (e outras)? Se sim, me envie (podem ser zip ou colar links). Se não tiver agora, deixo o carrossel com placeholders nominais e você troca depois via upload.
3. **Redes sociais** — quais links reais devo colocar no rodapé (Instagram, LinkedIn, Facebook)? Se não tiver, deixo os ícones fora até você me passar.
4. **Imagem do hero** — posso gerar via IA (reunião cooperativa + caminhão de fundo, estilo fotográfico realista). Aprova, ou prefere subir uma foto real depois?

## Ordem de execução (assim que você aprovar)

1. Perguntas 1–4 respondidas → começo.
2. Home (hero, "Por que escolher", faixa Transporte, Diferenciais).
3. Serviços (split Cooperativas × Empresas).
4. Empresa (fundadora expandida).
5. Blog (categorias).
6. Rodapé (CRC, WhatsApp, redes, mapa).
7. SEO (head de cada rota + sitemap).
8. Substituição da imagem hero (imagegen) + renomeação dos alts do carrossel.
9. Build local para checar tudo.

## Detalhes técnicos

- Todo texto e ícones seguem o design system atual (`--accent`, `--gradient-hero`, cards com `border-border`), sem introduzir cores novas.
- Ícones via `lucide-react` (já em uso).
- Categorias do blog: componente client-side com `useState` filtrando a lista `artigos` — sem backend.
- Mapa: iframe do Google Maps `embed` (endereço já cadastrado) — sem API key.
- Nenhuma migração de banco. Nenhum novo pacote npm.
- Alterações ficam no build SPA (`bun run build:ftp`) e no SSR do Lovable — mesmo código.
