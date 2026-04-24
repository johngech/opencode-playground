# Portfolio Website Project

## ⚠️ IMPORTANT

The original vanilla HTML/CSS/JS version has been migrated to React.
The React version is now the primary project in `portfolio-react/`.
The original files are preserved in `vanilla/` for reference.

## Brand
- **Name**: Yohannes Getachew
- **Role**: AI-Native Full-Stack Developer

## Current Tech Stack
- React 19 + TypeScript 6 + Vite 8
- CSS Modules (component-scoped styling)
- Vitest for testing
- Bun (package manager)

## Project Location
```
portfolio-react/   - React-TS version (PRIMARY)
vanilla/          - Original HTML/CSS/JS (archived)
```

## Design
- Dark theme (#0a0a0a) with Electric Blue accent (#00D4FF)
- Single-page scroll with sections: Hero → About → Skills → Projects → Callout → Contact
- Responsive (mobile-first)

## Commands
```bash
cd portfolio-react
bun run dev      # Start dev server
bun run build   # Production build
bun test        # Run tests
```

## Sections
1. **Hero**: Name, title "AI-Native Full-Stack Developer", CTA button
2. **About**: Brief bio highlighting adapting new tools, DevOps, AI-Engineering interest
3. **Skills**: Animated bar charts by category (Languages, Frameworks, Tools, AI/DevOps)
4. **Projects**: 4 project cards with title, description, tech stack, links
5. **Callout**: Conversion message
6. **Contact**: Form + social links (GitHub, LinkedIn, Email)

## Features
- Animated skill bars with IntersectionObserver
- Project cards with hover effects
- Smooth scroll behavior
- Contact form with submission feedback
- Fully responsive design