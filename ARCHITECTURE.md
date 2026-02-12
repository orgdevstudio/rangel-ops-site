# Arquitetura do Projeto RangelOps

Documentação da arquitetura do site institucional RangelOps, construído com Next.js 16, App Router e TypeScript. Este documento serve como referência para desenvolvimento, onboarding e manutenção do projeto.

## Visão Geral

O projeto segue uma arquitetura modular e escalável, preparada para evoluir de um site institucional para um ecossistema de múltiplos aplicativos SaaS. A separação de responsabilidades e desacoplamento de componentes permitem crescimento sustentável e manutenção eficiente.

## Stack Tecnológica

- **Framework:** Next.js 16 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS v4
- **Runtime:** React 19

## Estrutura de Diretórios

```
src/
├── app/                    # App Router (rotas, layouts, páginas)
│   ├── apps/[slug]/       # Rotas dinâmicas para páginas de apps
│   ├── layout.tsx         # Layout raiz com SEO e estrutura global
│   ├── page.tsx           # Landing page principal
│   └── globals.css        # Estilos globais
│
├── components/            # Componentes React reutilizáveis
│   ├── ui/               # Componentes base (Button, Container, Section, Card)
│   ├── layout/           # Componentes de layout (Navbar, Footer)
│   ├── sections/         # Seções da landing (Hero, Features, AppsGrid, CTA, AboutPreview)
│   └── apps/             # Componentes específicos de apps (AppCard)
│
├── config/               # Configurações centralizadas
│   ├── site.ts           # Informações da marca, metadados, links
│   └── apps.ts           # Dados dos aplicativos SaaS
│
├── lib/                  # Utilitários e helpers
│   └── utils.ts          # Funções utilitárias (cn, etc.)
│
└── types/                # Tipos TypeScript compartilhados
    └── index.ts          # Interfaces (App, NavLink, FeatureItem)
```

## Princípios e Convenções

### 1. Separação de Responsabilidades

- **app/** — Apenas roteamento, composição e layout. Não contém lógica de negócio.
- **components/** — Componentes puros e reutilizáveis, desacoplados do contexto.
- **config/** — Dados e configurações centralizados para fácil manutenção.
- **lib/** — Funções puras e utilitários sem estado.
- **types/** — Definições TypeScript compartilhadas.

### 2. Componentes

- **ui/** — Componentes atômicos e reutilizáveis. Props bem tipadas, variantes via props.
- **layout/** — Estrutura de página (header, footer). Consomem config para links.
- **sections/** — Blocos semânticos da landing. Cada seção é independente e configurável.
- **apps/** — Componentes específicos do domínio de aplicativos.

### 3. Configuração Centralizada

- `config/site.ts` — Nome da marca, descrição, metadados SEO, links de navegação, footer, redes sociais.
- `config/apps.ts` — Lista de aplicativos com slug, descrição, status. Base para grid e páginas individuais.

### 4. Tipagem

- Todos os componentes exportam suas props via interfaces.
- Tipos compartilhados em `types/index.ts`.
- Uso de `as const` em configs para inferência precisa.

## Padrões de Código

### Importação

- Use path alias `@/` para imports absolutos: `import { Button } from "@/components/ui"`.
- Prefira barrel exports (index.ts) para agrupar exports de pastas.

### Componentes

- Um componente por arquivo.
- Props interfaces exportadas para reutilização.
- Variantes via props (ex: `variant`, `size`) em vez de múltiplos componentes.

### Estilização

- Tailwind CSS como única fonte de estilos.
- Função `cn()` para concatenação condicional de classes.
- Design tokens via variáveis CSS em `globals.css` quando necessário.

### Responsividade

- Abordagem mobile-first.
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px).
- Testar em viewports pequenos primeiro.

## Rotas e Expansão Futura

### Estrutura Atual

- `/` — Home institucional enxuta (Hero + preview + CTA).
- `/sobre` — Página institucional detalhada com diferenciais.
- `/aplicativos` — Listagem completa dos aplicativos SaaS.
- `/aplicativos/[slug]` — Página individual de cada aplicativo.
- `/contato` — Formulário institucional de contato.
- `/legal/termos` — Termos de uso.
- `/legal/privacidade` — Política de privacidade.

### Navegação

- Navegação por rotas reais (Next.js Link), sem scroll anchors.
- Navbar com destaque do link ativo via `usePathname()`.

## SEO e Metadados

- Metadados em `layout.tsx` via `siteConfig.metadata`.
- Open Graph e Twitter Cards configurados.
- `metadataBase` para URLs absolutas de imagens e links.
- `lang="pt-BR"` no HTML.

## Performance

- Componentes de seção podem ser lazy-loaded se necessário.
- Imagens: usar `next/image` para otimização.
- Fontes: Geist via `next/font` para evitar layout shift.

## Manutenção

### Adicionar novo aplicativo

1. Incluir objeto em `config/apps.ts`.
2. A rota `/apps/[slug]` passa a gerar a página automaticamente.
3. O `AppCard` e `AppsGrid` já consomem a lista.

### Alterar conteúdo da marca

- Editar `config/site.ts` — alterações refletem em Navbar, Footer, metadados.

### Logos e favicon (duas imagens)

- **Favicon (ícone da aba):** coloque ou substitua o arquivo em **`src/app/favicon.ico`** (nome exato). O App Router do Next.js serve esse arquivo automaticamente.
- **Logo da marca (navbar/footer):** coloque o arquivo em **`public/images/logo.svg`** (ou `logo.png`). Se usar PNG, ajuste `brand.logo.src` em `src/config/site.ts` para `"/images/logo.png"`. O componente reutilizável `Logo` (`src/components/ui/Logo.tsx`) usa essa imagem; trocar o arquivo não exige alterar layout ou estilos.

### Adicionar nova seção à landing

1. Criar componente em `components/sections/`.
2. Exportar no `index.ts` da pasta.
3. Importar e usar em `app/page.tsx`.

---

*Documento mantido junto ao código. Atualizar conforme a arquitetura evolui.*
