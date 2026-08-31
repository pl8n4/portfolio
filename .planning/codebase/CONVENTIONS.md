# Coding Conventions

**Analysis Date:** 2026-01-14

## Naming Patterns

**Files:**
- PascalCase for React components: `App.tsx`
- camelCase for entry/utility files: `main.tsx`
- kebab-case for config files: `eslint.config.js`, `vite.config.ts`
- lowercase for assets: `headshot.jpg`, `mri_poster.pdf`

**Functions:**
- camelCase for all functions: `openProject`, `closeProject`, `preloadImage`
- Verb prefix for actions: `open*`, `close*`, `set*`, `preload*`
- No special prefix for async (none used currently)

**Variables:**
- camelCase for variables: `activeProject`, `embeddedHref`, `beyondPreviewSrc`
- Refs with `*Ref` suffix: `closeButtonRef`, `lastFocusRef`, `preloadedImageSrcRef`
- No underscore prefix for private (not needed in functional components)

**Types:**
- PascalCase: `Project`
- No `I` prefix for interfaces
- Properties use camelCase: `title`, `keywords`, `media`

## Code Style

**Formatting:**
- 2-space indentation (inferred from source)
- Single quotes for strings: `'react'`, `'./assets/headshot.jpg'`
- Semicolons required (enforced by ESLint)
- No Prettier config (relies on ESLint)

**Linting:**
- ESLint with flat config (`eslint.config.js`)
- Extends: `@eslint/js` recommended, `typescript-eslint` recommended
- Plugins: `react-hooks`, `react-refresh`
- Run: `npm run lint`

## Import Organization

**Order:**
1. React core imports
2. Asset imports (images, documents)
3. Style imports

**Example from `src/App.tsx`:**
```tsx
import React, { useState, useRef, useEffect } from 'react';
import aboutImage from './assets/headshot.jpg';
// ... other asset imports
import './styles/global.css';
```

**Path Aliases:**
- None configured (relative paths only)

## Error Handling

**Patterns:**
- Silent catch for non-critical failures: `img.decode?.().catch(() => {})`
- No try/catch blocks (no async operations)
- TypeScript strict mode prevents type errors

**Error Types:**
- Compile-time: TypeScript catches type mismatches
- Runtime: Minimal (static content, no external calls)

## Logging

**Framework:**
- None (no server-side, no analytics)

**Patterns:**
- No console.log in committed code
- No logging utilities

## Comments

**When to Comment:**
- Section headers in CSS: `/* ===== SECTION NAME ===== */`
- Minimal code comments (self-documenting naming)

**CSS Section Headers:**
```css
/* ===== WARM EARTH TONES DESIGN SYSTEM ===== */
/* ===== ANIMATIONS ===== */
/* ===== BASE STYLES ===== */
/* ===== HEADER ===== */
/* ===== RESPONSIVE ===== */
```

**TODO Comments:**
- None present in codebase

## Function Design

**Size:**
- Functions kept relatively short
- Main component is monolithic but organized

**Parameters:**
- Single parameter functions: `openProject(project: Project)`
- Event handlers: `onClick={(e) => e.stopPropagation()}`

**Return Values:**
- Explicit returns not required (JSX returned implicitly)
- Arrow functions for simple handlers

## Module Design

**Exports:**
- Default export for App component
- No named exports (single-component architecture)

**Barrel Files:**
- None (no component library to export)

## CSS Conventions

**Class Naming:**
- camelCase in JSX: `className="heroSection"`
- Semantic names: `projectCard`, `modalOverlay`, `beyondThumb`
- BEM-inspired for related elements: `modal`, `modalHeader`, `modalTitle`, `modalClose`

**CSS Custom Properties:**
- Colors: `--terracotta`, `--sage`, `--sand`, `--cream`
- Spacing: `--space-1` through `--space-6`
- Typography: `--font-sans`, `--font-display`
- Shadows: `--shadow-sm`, `--shadow-card-hover`, `--shadow-modal`
- Borders: `--radius`, `--radius-sm`

**Media Queries:**
- Mobile-first responsive design
- Breakpoints: 900px (tablet), 720px (mobile)
- Reduced motion support: `@media (prefers-reduced-motion: reduce)`

## React Patterns

**State Management:**
- `useState` for UI state: `const [activeProject, setActiveProject] = useState<Project | null>(null)`
- `useRef` for DOM references: `const closeButtonRef = useRef<HTMLButtonElement>(null)`
- `useEffect` for side effects: keyboard listeners, body overflow, focus management

**Event Handling:**
- Inline arrow functions: `onClick={() => openProject(project)}`
- Event parameter when needed: `onClick={(e) => e.stopPropagation()}`

**Conditional Rendering:**
- Ternary for simple conditions: `{activeProject ? <Modal /> : null}`
- Logical AND for presence checks: `{project.media && <img />}`

---

*Convention analysis: 2026-01-14*
*Update when patterns change*
