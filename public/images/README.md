# Imagens do site

Coloque aqui as imagens da marca usadas no site.

## Logo (navbar e footer)

- **Arquivo:** `logo.svg` ou `logo.png`
- **Caminho completo:** `public/images/logo.svg` (ou `logo.png`)
- Se usar PNG, altere em `src/config/site.ts` em `brand.logo.src` para `"/images/logo.png"`.
- O componente `Logo` (`src/components/ui/Logo.tsx`) usa essa imagem; trocar o arquivo aqui não exige mudança de layout ou estilos.

## Imagem do card no Hero (tela inicial)

- **Arquivo:** `hero-image.png` ou `hero-image.svg` (recomendado: sem fundo/transparente)
- **Caminho completo:** `public/images/hero-image.png` (ou `hero-image.svg`)
- Se usar SVG, altere em `src/config/site.ts` em `brand.heroImage.src` para `"/images/hero-image.svg"`.
- Substitui o "RO" no card azul da tela inicial. Trocar o arquivo aqui não exige mudança de layout ou estilos.

**Favicon** (ícone da aba do navegador) fica em outro lugar: **`src/app/favicon.ico`** (nome exato; Next.js App Router usa automaticamente).
