# Promptly — Next.js + Tailwind CSS

This is a direct conversion of the original static HTML page into a Next.js 14 (App Router) + TypeScript + Tailwind CSS project. The design, copy, layout, and behavior are unchanged — only the markup/tooling were translated to Next.js conventions:

- Tailwind is installed properly (no more CDN `<script>` tag) — the inline `tailwind.config` object from the original `<script>` is now `tailwind.config.ts`.
- The page is a single client component (`app/page.tsx`) since it needs interactivity (FAQ accordion, smooth-scroll anchors, scroll-reveal animation).
- The inline `<script>` at the bottom of the original file (smooth scroll + `IntersectionObserver` reveal) is now a `useEffect` hook.
- The FAQ accordion's `onclick` + `classList.toggle('hidden')` is now React state (`useState`) per FAQ item — same visual behavior.
- Google Fonts (`Inter`, `Material Symbols Outlined`) are loaded via `<link>` tags in `app/layout.tsx`, same as the original `<head>`.
- All custom CSS (`.glass-card`, `.gradient-border`, `.text-gradient`, the `scroll` keyframes, `.animate-scroll`) lives in `app/globals.css`.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project structure

```
.
├── app/
│   ├── globals.css     # Tailwind directives + original custom CSS
│   ├── layout.tsx       # Root layout, fonts, metadata
│   └── page.tsx         # The full landing page (client component)
├── next.config.mjs
├── postcss.config.js
├── tailwind.config.ts    # Original design tokens (colors, spacing, type scale)
├── tsconfig.json
└── package.json
```

## Build for production

```bash
npm run build
npm run start
```
