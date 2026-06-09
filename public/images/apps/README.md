# Ícones dos aplicativos

Coloque aqui o **ícone de cada app** (PNG ou WebP, fundo transparente ou sólido conforme o design).

Os caminhos são referenciados em `src/config/apps.ts` no campo `icon` de cada aplicativo (URL pública a partir de `/`).

## SellerFlow

| Campo | Valor |
|--------|--------|
| **Arquivo** | `sellerflow.png` (ou `sellerflow.webp`) |
| **Caminho completo no projeto** | `public/images/apps/sellerflow.png` |
| **URL usada no código** | `/images/apps/sellerflow.png` |

Recomendações:

- Quadrado (ex.: **512×512** ou **1024×1024**); o site exibe em tamanhos pequenos (cartão e topo da página do app).
- Se usar WebP, altere em `src/config/apps.ts` o `icon` do SellerFlow para `"/images/apps/sellerflow.webp"`.

## Rotivy

| Campo | Valor |
|--------|--------|
| **Arquivo** | `rotivy.png` |
| **Caminho completo no projeto** | `public/images/apps/rotivy.png` |
| **URL usada no código** | `/images/apps/rotivy.png` |

Recomendações:

- Quadrado **512×512** ou **1024×1024** px; PNG com fundo transparente.
- Open Graph opcional: `rotivy-og.png` (**1200×630** px) em `public/images/apps/`, referenciado via `ogImage` em `src/config/apps.ts`.
