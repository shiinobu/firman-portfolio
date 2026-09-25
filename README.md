# Firman Aprilian Sugiharto | Fullstack Engineer

<div align="justify">

Personal portfolio: https://firman-aprilian.vercel.app

A home page (work, about, stack, experience, contact) and a case study for each project. Built with Next.js 16 (App Router), React 19 with the React Compiler, TypeScript and Tailwind CSS v4. Every page is statically generated.

## Getting started

Requires Node.js 20.9 or newer and npm. No environment variables are needed.

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run build      # production build
npm run start      # serve the production build
```

This Next.js version has breaking changes. The matching docs are bundled in `node_modules/next/dist/docs/`; read the relevant guide before changing framework-level code (see `AGENTS.md`).

## Content

Site details, projects, work history and skills live in data files, and the pages render from them. The Hero, About and Contact text is in `src/components/sections/`.

| File | What it holds |
| --- | --- |
| `src/config/site.ts` | name, role, URL, email, phone, profile links, CV path, tagline, meta description |
| `src/config/contact.ts`, `src/config/navigation.ts` | the contact links and the header navigation |
| `src/data/projects.ts` | projects, case-study content, real API requests |
| `src/data/experience.ts` | work history |
| `src/data/skills.ts` | the stack table |
| `assets/cv/` and `public/Firman-Aprilian-Sugiharto-CV.pdf` | the CV. Edit the HTML, print it to PDF from Chrome (A4, margins none, background graphics on) and save over the PDF |

To add a project, append an entry to `projects` and put its screenshots in `public/projects/<slug>/`. The case-study page, sitemap entry and social image are generated from it. An optional `video` (mp4, webm and a poster, in the same folder) replaces the first screenshot on the featured card and at the top of the case study.

## Design system

- **Tokens** live in `src/app/globals.css`: `paper`, `ink`, `signal` (online / available), `alert` (offline) and an inverted band that stays dark in both themes. Every text and background pair was checked against WCAG AA in both themes.
- **Themes.** Light is the default. Dark is opt-in through `data-theme="dark"`: the header toggle sets it, `localStorage` remembers it, and a small inline script applies it before first paint.
- **Fonts** are Archivo (variable, width and weight axes) and JetBrains Mono, loaded with `next/font`. Tailwind needs `@theme inline` so the font tokens read the `next/font` variables where they are defined; with a plain `@theme` and the variables on `<body>`, `font-mono` silently falls back to the sans font.
- **Conventions.** Rules and tables instead of cards, mono type only for data, and color that means status. Body text is never justified.
- **Heartbeat strip** (`src/components/heartbeat`) is a simulation of the Device Monitoring System's logic: one tick is one heartbeat, and three missed ticks mean OFFLINE. The model is pure functions of a tick number, so server and client renders match. It pauses off-screen, in background tabs and under `prefers-reduced-motion`.

## SEO and sharing

- `pageMetadata()` in `src/lib/metadata.ts` builds each page's metadata. Next merges `openGraph` and `alternates` shallowly across segments, so a value set in the root layout would make every page canonicalise to the home page. Each page defines its own.
- Open Graph and Twitter images are generated at build time (`opengraph-image.tsx`, `src/lib/og.tsx`) from the fonts in `assets/og/`. `ImageResponse` reads ttf, otf and woff only, and static instances rather than variable fonts.
- A schema.org `Person` block is in the root layout, plus `robots.txt` and `sitemap.xml`.

## Project structure

```text
├── assets/
│   ├── cv/                 source of the CV (HTML)
│   └── og/                 fonts for the generated social images
├── public/
│   ├── projects/           project screenshots and the DMS recording
│   └── Firman-Aprilian-Sugiharto-CV.pdf   file behind the Download CV buttons
└── src/
    ├── app/                routes, layout, design tokens, social images, robots, sitemap
    ├── components/
    │   ├── heartbeat/      the heartbeat simulation
    │   ├── layout/         Container, Section, Footer
    │   ├── navigation/     Navbar, NavLinks, ThemeToggle
    │   ├── projects/       featured card, list rows and the case-study parts
    │   ├── sections/       home page sections
    │   └── ui/             Button, IconLink, Badge, InlineList, icons
    ├── config/             site details, navigation, contact links
    ├── data/               projects, experience, skills
    ├── lib/                metadata helper, social image renderer
    └── types/              project and experience types
```

## Deployment

Deployed on Vercel. Production deploys from `main` through the GitHub integration; other branches get preview deployments. Before pushing, make sure these pass:

```bash
npm run lint
npm run build
```

Vercel Analytics and Speed Insights are mounted in the root layout. Their scripts exist only on Vercel, so on localhost they return 404; that is expected.

## License

This is a personal portfolio. Unless stated otherwise, the source code and content are not licensed for redistribution or commercial reuse.

</div>