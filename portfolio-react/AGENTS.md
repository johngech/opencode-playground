# Portfolio React Project

## Brand
- **Name**: Yohannes Getachew
- **Role**: AI-Native Full-Stack Developer

## Tech Stack
- React 19 + TypeScript 6 + Vite 8
- CSS Modules (component-scoped styling)
- Vitest for testing
- Bun (package manager)

## Project Structure
```
portfolio-react/
├── src/
│   ├── components/       # React components with CSS Modules
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   ├── Callout/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── data/           # Typed data files
│   │   ├── skills.ts
│   │   └── projects.ts
│   ├── types/           # TypeScript interfaces
│   │   └── index.ts
│   ├── App.tsx          # Main app component
│   └── index.css        # Global styles
├── vanilla/             # Original HTML/CSS/JS (archived)
├── package.json
├── tsconfig.app.json
├── vite.config.ts
└── vitest.config.ts
```

## Commands
```bash
bun run dev      # Start dev server
bun run build   # Production build
bun test        # Run tests
```

## Theme
- Dark background: #0a0a0a
- Electric Blue accent: #00D4FF
- Font: Inter, JetBrains Mono

## Components

### Navbar
- Fixed position with backdrop blur
- Scroll-aware background change at 100px
- Logo + navigation links

### Hero
- Full viewport height
- Animated background
- Name, title, tagline
- CTA buttons (View My Work, Get In Touch)
- Scroll indicator

### About
- Bio text content
- Single-column layout

### Skills
- 4 categories: Languages, Frameworks, Tools, AI & Engineering
- Animated bar charts using IntersectionObserver
- 16 skills total

### Projects
- 4 project cards with icons
- Hover effects
- Tech stack tags
- Links

### Callout
- Conversion message
- CTA button

### Contact
- Form with validation
- Submit feedback states
- Social links (GitHub, LinkedIn, Email)

### Footer
- Copyright

## Features Implemented
- Animated skill bars with scroll reveal
- Project card hover effects
- Contact form with submission feedback
- Smooth scroll for anchor links
- Responsive design (mobile-first)