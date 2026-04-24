# Migrate Portfolio to React-TS Vite SPA

## TL;DR

> **Quick Summary**: Convert the existing vanilla HTML/CSS/JS portfolio to a React-TS single-page application using Vite, while maintaining exact visual fidelity and all existing functionality.

> **Deliverables**:
> - New Vite-React-TS project structure
> - 8 React components (Navbar, Hero, About, Skills, Projects, Callout, Contact, Footer)
> - 5 custom hooks for interactivity
> - CSS Modules for each component
> - Basic component tests
> - Data files with TypeScript interfaces

> **Estimated Effort**: Medium
> **Parallel Execution**: YES - 4 waves
> **Critical Path**: Setup → Foundation → Components → Integration → Testing

---

## Context

### Original Request

Convert portfolio website from vanilla HTML/CSS/JS to React-TS with Vite while maintaining exact visual fidelity.

### Interview Summary

**Key Discussions**:
- Visual Priority: Maintain exact visual fidelity (pixel-perfect match)
- Styling Approach: CSS Modules (component-scoped)
- Scope: Port existing only, no new features during migration
- Testing: Basic component testing
- Versions: Latest stable (React 18, TypeScript 5, Vite 5)
- **Package Manager**: Bun (fast JavaScript runtime)
- Structure: Standard Vite-React-TS

**Research Findings**:
- Current project has 6 sections in index.html
- 5 JavaScript functions in script.js to migrate to React hooks
- 786 lines of CSS in styles.css to convert to modules
- Uses dark theme (#0a0a0a) with electric blue accent (#00D4FF)
- Responsive mobile-first design

### Metis Review

**Identified Gaps** (addressed):
- Added specific CSS Modules mapping to ensure no visual drift
- Included hook-by-hook migration to avoid missing functionality
- Added CSS variable system for theme consistency

---

## Work Objectives

### Core Objective

Migrate the portfolio website to a React-TS SPA while maintaining:
- Exact visual appearance (colors, spacing, typography)
- All existing animations and interactivity
- Responsive behavior
- Smooth user experience

### Concrete Deliverables

- [x] New Vite-React-TS project initialized
- [ ] TypeScript configuration with strict mode
- [ ] 8 React components (one per section)
- [ ] 5 custom React hooks (one per JS function)
- [ ] CSS Modules for all components
- [ ] Data files with TypeScript interfaces
- [ ] Basic component tests
- [ ] Working dev server matching original

### Definition of Done

- [ ] Dev server runs without errors
- [ ] All 6 sections render correctly
- [ ] All animations work identically
- [ ] Contact form has interactivity
- [ ] Responsive on mobile/tablet/desktop
- [ ] Visual fidelity verified (colors, spacing, typography match)

### Must Have

- Exact color theme: #0a0a0a (dark), #00D4FF (electric blue)
- All 6 sections: Hero, About, Skills, Projects, Callout, Contact
- All 5 animations: navbar scroll, skill bars, scroll reveal, contact form, smooth scroll
- Responsive breakpoints
- TypeScript strict mode

### Must NOT Have

- New features beyond existing functionality
- Different color palette
- Altered layout structure
- Missing animations or interactivity
- Additional pages or routes (single page SPA)

---

## Verification Strategy

> **ZERO HUMAN INTERVENTION** - ALL verification is agent-executed.
> Acceptance criteria requiring "user manually tests/confirms" are FORBIDDEN.

### Test Decision

- **Infrastructure exists**: NO - Will set up
- **Automated tests**: YES (basic component tests)
- **Framework**: Vitest + React Testing Library
- **Package Manager**: Bun (fast JavaScript runtime/package manager)
- **Approach**: Tests after implementation for each component

### QA Policy

Every task MUST include agent-executed QA scenarios.
Evidence saved to `.sisyphus/evidence/task-{N}-{scenario-slug}.{ext}`.

- **Frontend/UI**: Use Playwright - Navigate, interact, assert DOM, screenshot
- **TUI/CLI**: Use interactive_bash (tmux) - Run command, send keystrokes, validate output
- **API/Backend**: Use Bash (curl) - Send requests, assert status + response fields
- **Library/Module**: Use Bash (bun/node REPL) - Import, call functions, compare output

---

## Execution Strategy

### Parallel Execution Waves

> Maximize throughput by grouping independent tasks into parallel waves.
> Each wave completes before the next begins.
> Target: 5-8 tasks per wave.

```
Wave 1 (Foundation - scaffolding and setup):
├── Task 1: Initialize Vite-React-TS project with Bun [quick]
├── Task 2: Configure TypeScript and Vite [quick]
├── Task 3: Set up project structure + directories [quick]
├── Task 4: Create global styles and CSS variables [quick]
├── Task 5: Set up Vitest + React Testing Library [quick]
└── Task 6: Add Bun test scripts [quick]

Wave 2 (Foundation - components and data):
├── Task 7: Create TypeScript interfaces [quick]
├── Task 8: Create data files (skills, projects) [quick]
├── Task 9: Create Navbar component + CSS Module [quick]
├── Task 10: Create Hero component + CSS Module [quick]
├── Task 11: Create About component + CSS Module [quick]
├── Task 12: Create Skills component + CSS Module [quick]
└── Task 13: Create Projects component + CSS Module [quick]

Wave 3 (Components, hooks, and integration):
├── Task 14: Create Callout component + CSS Module [quick]
├── Task 15: Create Contact component + CSS Module [quick]
├── Task 16: Create Footer component + CSS Module [quick]
├── Task 17: Create useNavbar hook [quick]
├── Task 18: Create useSkillBars hook [quick]
├── Task 19: Create useScrollReveal hook [quick]
├── Task 20: Create useContactForm hook [quick]
├── Task 21: Create useSmoothScroll hook [quick]
└── Task 22: Integrate all components in App.tsx [quick]

Wave FINAL (Testing and verification):
├── Task 23: Write basic component tests [quick]
├── Task 24: Run tests and fix failures [quick]
├── Task F1: Plan compliance audit (oracle) [deep]
├── Task F2: Code quality review (unspecified-high) [deep]
├── Task F3: Visual fidelity verification (playwright) [deep]
└── Task F4: Scope fidelity check (deep) [deep]
```

### Dependency Matrix

- **1-6**: - - 7-22 (all depend on setup completing)
- **7-8**: 1, 2, 3 - 9-22 (types/data needed before components)
- **9-13**: 4, 7, 8 - 22 (foundation components)
- **14-16**: 4, 7, 8 - 22 (more components)
- **17-21**: 7 - 22 (hooks)
- **22**: 9-21 - 23, F1-F4 (full integration)
- **23**: 22 - F1-F4 (tests after implementation)
- **F1-F4**: 22, 23 - - (final verification)

### Agent Dispatch Summary

- **Wave 1**: **6** - tasks 1-6 → `quick`
- **Wave 2**: **7** - tasks 7-13 → `quick`
- **Wave 3**: **8** - tasks 14-21 → `quick`, task 22 → `quick`
- **Wave FINAL**: **4** - F1 → `deep`, F2 → `unspecified-high`, F3 → `deep`, F4 → `deep`

---

## TODOs

- [x] 1. Initialize Vite-React-TS project

  **What to do**:
  - Run `bun create vite@latest portfolio --template react-ts` to create new project
  - Install dependencies: react, react-dom, typescript
  - Verify initial project structure

  **Must NOT do**:
  - Don't add any additional dependencies yet

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Simple scaffolding command, no complex logic needed
  - **Skills**: []
    - No additional skills needed

  **Parallelization**:
  - **Can Run In Parallel**: NO - First task, must run first
  - **Blocks**: All other tasks depend on this

  **Acceptance Criteria**:
  - [ ] Project created with Vite + React + TypeScript
  - [ ] package.json contains react, react-dom
  - [ ] bun install succeeds without errors

  **QA Scenarios**:

  Scenario: Project initialization succeeds
    Tool: Bash
    Preconditions: No existing Vite project
    Steps:
      1. Run `bun create vite@latest portfolio --template react-ts`
      2. cd portfolio && bun install
      3. Verify files exist: package.json, tsconfig.json, vite.config.ts
    Expected Result: Project scaffolded successfully
    Evidence: .sisyphus/evidence/task-1-init.{ext}

- [x] 2. Configure TypeScript and Vite

  **What to do**:
  - Update tsconfig.json with strict mode settings
  - Configure vite.config.ts with proper settings
  - Set up path aliases

  **Must NOT do**:
  - Don't change compiler target significantly

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: NO - Depends on Task 1
  - **Blocked By**: Task 1

  **Acceptance Criteria**:
  - [ ] TypeScript strict mode enabled
  - [ ] Path aliases configured (@/ alias)
  - [ ] Vite config properly set up

- [x] 3. Set up project structure + directories

  **What to do**:
  - Create src/components/ directory
  - Create src/hooks/ directory
  - Create src/data/ directory
  - Create src/types/ directory
  - Create src/assets/ directory
  - Set up index.html entry point

  **Must NOT do**:
  - Don't add any files to directories yet

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: NO - Depends on Task 1
  - **Blocked By**: Task 1

  **Acceptance Criteria**:
  - [ ] All directories created
  - [ ] Directory structure follows standard React pattern

- [x] 4. Create global styles and CSS variables

  **What to do**:
  - Copy CSS variables from original styles.css (colors, fonts, spacing)
  - Create global CSS file with CSS custom properties
  - Ensure theme matches exactly: #0a0a0a, #00D4FF

  **Must NOT do**:
  - Don't add component-specific styles

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES - Can start immediately (Wave 1)
  - **Blocks**: All components (Wave 2)

  **References**:
  - `styles.css:1-50` - CSS variables and theme colors

  **Acceptance Criteria**:
  - [ ] CSS variables defined for theme colors
  - [ ] Global styles for body, html
  - [ ] Font imports (Inter, JetBrains Mono)

- [x] 5. Set up Vitest + React Testing Library
- [x] 6. Add npm scripts for testing
- [x] 7. Create TypeScript interfaces
- [x] 8. Create data files (skills, projects)
- [x] 9. Create Navbar component + CSS Module
- [x] 10. Create Hero component + CSS Module
- [x] 11. Create About component + CSS Module
- [x] 12. Create Skills component + CSS Module
- [x] 13. Create Projects component + CSS Module
- [x] 14. Create Callout component + CSS Module
- [x] 15. Create Contact component + CSS Module
- [x] 16. Create Footer component + CSS Module

  **What to do**:
  - Create src/components/Footer/Footer.tsx
  - Create src/components/Footer/Footer.module.css
  - Include copyright text

  **Must NOT do**:
  - Don't change text

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES - Can start immediately (Wave 3)
  - **Blocks**: Task 22 (App integration)

  **Acceptance Criteria**:
  - [ ] Footer renders with copyright

- [x] 17. Create useNavbar hook
- [x] 18. Create useSkillBars hook
- [x] 19. Create useScrollReveal hook
- [x] 20. Create useContactForm hook
- [x] 21. Create useSmoothScroll hook
- [x] 22. Integrate all components in App.tsx

  **What to do**:
  - Create src/App.tsx
  - Import all components
  - Assemble in order: Navbar, Hero, About, Skills, Projects, Callout, Contact, Footer

  **Must NOT do**:
  - Don't change order

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: NO - Depends on all components
  - **Blocked By**: Tasks 9-16

  **Acceptance Criteria**:
  - [ ] All components render
  - [ ] Page loads without errors

- [x] 23. Write basic component tests

  **What to do**:
  - Write tests for Navbar component
  - Write tests for Hero component
  - Write tests for Skills component
  - Write tests for Contact component

  **Must NOT do**:
  - Don't skip essential tests

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: NO - Depends on Task 22
  - **Blocked By**: Task 22

  **Acceptance Criteria**:
  - [ ] Navbar renders with links
  - [ ] Hero renders with content
  - [ ] Skills render with data
  - [ ] Contact form handles submit

- [x] 24. Run tests and fix failures

  **What to do**:
  - Run all tests
  - Fix any failures
  - Ensure all pass

  **Must NOT do**:
  - Don't ignore failures

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: NO - Depends on Task 23
  - **Blocked By**: Task 23

  **Acceptance Criteria**:
  - [ ] bun test passes

---

## Final Verification Wave (MANDATORY — after ALL implementation tasks)

> 4 review agents run in PARALLEL. ALL must APPROVE. Present consolidated results to user and get explicit "okay" before completing.

- [x] F1. **Plan Compliance Audit** — `oracle`
- [x] F2. **Code Quality Review** — `unspecified-high`
- [x] F3. **Visual Fidelity Verification** — `deep` (+ `playwright` skill)
- [x] F4. **Scope Fidelity Check** — `deep`
  For each task:
  - Read "What to do", read actual diff
  - Verify 1:1 - ported existing, no new features
  - Check "Must NOT do" compliance
  - Detect cross-task contamination
  Output: `Tasks [N/N compliant] | Contamination [CLEAN/N issues] | Unaccounted [CLEAN/N files] | VERDICT`

---

## Commit Strategy

- **1**: `feat: initialize Vite-React-TS project` - package.json, tsconfig.json, vite.config.ts
- **2**: `feat: add project structure and directories` - src/components/, src/hooks/, src/data/
- **3**: `feat: add global styles and CSS variables` - App.css, index.css
- **4**: `feat: set up test infrastructure` - vitest.config.ts, setupTests.ts
- **5**: `feat: add TypeScript interfaces` - types/index.ts
- **6**: `feat: add data files` - data/skills.ts, data/projects.ts
- **7**: `feat: add Navbar component` - components/Navbar/
- **8**: `feat: add Hero component` - components/Hero/
- **9**: `feat: add About component` - components/About/
- **10**: `feat: add Skills component` - components/Skills/
- **11**: `feat: add Projects component` - components/Projects/
- **12**: `feat: add Callout component` - components/Callout/
- **13**: `feat: add Contact component` - components/Contact/
- **14**: `feat: add Footer component` - components/Footer/
- **15**: `feat: add custom hooks` - hooks/useNavbar.ts, useSkillBars.ts, useScrollReveal.ts, useContactForm.ts, useSmoothScroll.ts
- **16**: `feat: integrate all components` - App.tsx
- **17**: `test: add basic component tests` - *.test.tsx
- **18**: `fix: resolve test failures` - (as needed)

---

## Success Criteria

### Verification Commands

```bash
cd src && tsc --noEmit  # Expected: no errors
bun test              # Expected: all tests pass
bun run dev           # Expected: server starts on port 5173
```

### Final Checklist

- [ ] All "Must Have" present
- [ ] All "Must NOT Have" absent
- [ ] All tests pass
- [ ] Visual fidelity verified
- [ ] No new features added