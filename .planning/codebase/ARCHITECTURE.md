# Architecture

**Analysis Date:** 2026-01-14

## Pattern Overview

**Overall:** Single Page Application (SPA) with Component-Based Presentation

**Key Characteristics:**
- Client-side rendered React application
- Single monolithic component (`App.tsx`)
- Static content with no backend
- Modal-based interactions for project details

## Layers

**Entry Point Layer:**
- Purpose: Bootstrap React application
- Contains: HTML mount point, React root initialization
- Location: `index.html`, `src/main.tsx`
- Depends on: React, ReactDOM
- Used by: Browser

**UI Component Layer:**
- Purpose: All UI rendering and state management
- Contains: Single App component with all sections (header, hero, projects, gallery)
- Location: `src/App.tsx`
- Depends on: React hooks, asset imports
- Used by: Entry point layer

**Styling Layer:**
- Purpose: Visual presentation with design system
- Contains: CSS custom properties, component styles, responsive breakpoints
- Location: `src/styles/global.css`
- Depends on: Nothing
- Used by: UI Component layer

**Asset Layer:**
- Purpose: Static images and documents
- Contains: JPG/PNG images, PDF files
- Location: `src/assets/`
- Depends on: Nothing
- Used by: UI Component layer (via imports)

## Data Flow

**Page Load:**

1. Browser requests `index.html`
2. HTML loads Google Fonts (preconnect)
3. Vite module loads `src/main.tsx`
4. React mounts App component to `#root`
5. App renders all sections with inline content
6. CSS animations trigger (fadeIn, slideUp)
7. Event listeners registered (keyboard, clicks)

**User Interaction (Project Modal):**

1. User clicks project card
2. `openProject(project)` stores active element reference
3. `setActiveProject(project)` updates state
4. React re-renders with modal visible
5. `useEffect` sets body overflow, focuses close button
6. Image preloading scheduled via `requestIdleCallback`
7. User presses ESC or clicks overlay
8. `closeProject()` clears state
9. Focus restored to original element

**State Management:**
- Local component state via React hooks
- `useState` for UI visibility (modals, previews)
- `useRef` for DOM references (focus, preload tracking)
- `useEffect` for side effects (keyboard listeners, body styles)

## Key Abstractions

**Project:**
- Purpose: Portfolio project data structure
- Definition: `src/App.tsx` (type definition)
- Properties: title, keywords, description, details, media, links
- Pattern: TypeScript type (not class)

**Modal Management:**
- Purpose: Display detailed project/image views
- Pattern: State-controlled conditional rendering
- Two modal types: Project details, Image preview
- Accessibility: ARIA labels, focus management, ESC key support

**Image Preloading:**
- Purpose: Performance optimization for project images
- Pattern: `requestIdleCallback` with fallback to `setTimeout`
- Location: `preloadImage()` function in `src/App.tsx`
- Uses Set to track already-preloaded images

## Entry Points

**HTML Entry:**
- Location: `index.html`
- Triggers: Browser navigation
- Responsibilities: Load fonts, provide mount point, load main script

**React Entry:**
- Location: `src/main.tsx`
- Triggers: Script load from HTML
- Responsibilities: Mount App component with StrictMode

**Main Component:**
- Location: `src/App.tsx`
- Triggers: React mount
- Responsibilities: All UI rendering, state management, event handling

## Error Handling

**Strategy:** Minimal (static content, no external calls)

**Patterns:**
- Image decode errors silently caught (graceful degradation)
- No try/catch blocks (no async operations that could fail)
- TypeScript strict mode prevents type errors at compile time

## Cross-Cutting Concerns

**Logging:**
- None (static portfolio, no server-side logging)

**Validation:**
- TypeScript compile-time type checking
- No runtime validation needed

**Accessibility:**
- ARIA labels on interactive elements
- Keyboard navigation (ESC closes modals)
- Focus management (restore focus on modal close)
- Semantic HTML (buttons for actions, links for navigation)

**Performance:**
- Image preloading with idle callback
- Lazy loading attribute on gallery images
- Async image decoding
- CSS animations with reduced-motion support

---

*Architecture analysis: 2026-01-14*
*Update when major patterns change*
