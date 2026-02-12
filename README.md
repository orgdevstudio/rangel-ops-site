# RangelOps - Site Institucional

Site institucional da RangelOps construído com Next.js 16, App Router e TypeScript. Landing page moderna e escalável, preparada para evoluir para um ecossistema de múltiplos aplicativos SaaS.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **React 19**

## Início Rápido

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts

- `npm run dev` — Servidor de desenvolvimento
- `npm run build` — Build de produção
- `npm run start` — Iniciar build de produção
- `npm run lint` — Executar ESLint

## Estrutura do Projeto

- `src/app/` — Rotas e páginas (App Router)
- `src/components/` — Componentes reutilizáveis (ui, layout, sections, apps)
- `src/config/` — Configurações centralizadas (site, apps)
- `src/lib/` — Utilitários
- `src/types/` — Tipos TypeScript

Documentação completa da arquitetura em [ARCHITECTURE.md](./ARCHITECTURE.md).

## Configuração

- **Marca e metadados:** `src/config/site.ts`
- **Aplicativos:** `src/config/apps.ts`

## Rotas

- `/` — Home institucional
- `/sobre` — Sobre a RangelOps
- `/aplicativos` — Listagem de aplicativos
- `/aplicativos/[slug]` — Página individual (ex: `/aplicativos/hub`)
- `/contato` — Formulário de contato
- `/legal/termos` — Termos de uso
- `/legal/privacidade` — Política de privacidade
