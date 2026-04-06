# Wolf on Solana ($WOS)

Premium React/Vite landing site for the Wolf on Solana meme coin project.

## Stack

- Vite
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI / shadcn-style components

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Project notes

- Main app entry: `src/App.tsx`
- Homepage: `src/pages/Index.tsx`
- Shared layout: `src/components/Layout.tsx`
- Global styles: `src/index.css`

## Deployment

This project outputs a static Vite build to `dist/`, so it can be deployed to platforms like:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Build command:

```bash
npm run build
```

Publish directory:

```bash
dist
```
