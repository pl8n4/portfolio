# Technology Stack

**Analysis Date:** 2026-01-14

## Languages

**Primary:**
- TypeScript 5.9.3 - All application code (`src/*.tsx`, `vite.config.ts`)

**Secondary:**
- JavaScript - Build configuration (`eslint.config.js`)
- CSS3 - Styling with custom properties (`src/styles/global.css`)
- HTML5 - Entry point (`index.html`)

## Runtime

**Environment:**
- Node.js 18+ (recommended per `README.md`)
- Browser runtime (React 19 client-side rendering)
- Target: ES2022 for app code, ES2023 for build tools

**Package Manager:**
- npm (primary package manager)
- Lockfile: `package-lock.json` present

## Frameworks

**Core:**
- React 19.2.0 - UI framework (`src/main.tsx`, `src/App.tsx`)
- React DOM 19.2.0 - DOM rendering

**Build/Dev:**
- Vite 7.2.4 - Build tool and dev server (`vite.config.ts`)
- @vitejs/plugin-react 5.1.1 - React plugin for Vite
- TypeScript 5.9.3 - Type checking and transpilation

**Testing:**
- None configured (no test framework installed)

## Key Dependencies

**Critical:**
- react 19.2.0 - UI framework (core application)
- react-dom 19.2.0 - DOM rendering

**Development:**
- typescript 5.9.3 - Type system
- vite 7.2.4 - Build tooling
- eslint 9.39.1 - Code linting
- typescript-eslint 8.46.4 - TypeScript ESLint support
- eslint-plugin-react-hooks 7.0.1 - React hooks linting
- eslint-plugin-react-refresh 0.4.24 - Fast Refresh validation

**Type Definitions:**
- @types/react 19.2.5
- @types/react-dom 19.2.3
- @types/node 24.10.1

## Configuration

**Environment:**
- No environment variables required for local development
- Deployment token stored in GitHub Secrets (`AZURE_STATIC_WEB_APPS_API_TOKEN_*`)

**Build:**
- `tsconfig.json` - TypeScript root config with project references
- `tsconfig.app.json` - App TypeScript config (strict mode, JSX react-jsx)
- `tsconfig.node.json` - Build tool TypeScript config
- `vite.config.ts` - Vite build configuration
- `eslint.config.js` - Flat ESLint configuration

## Platform Requirements

**Development:**
- Any platform with Node.js 18+
- No external dependencies (Docker, databases, etc.)

**Production:**
- Azure Static Web Apps (deployment target)
- Static file hosting (no server-side execution)
- GitHub Actions for CI/CD (`.github/workflows/azure-static-web-apps-black-mud-0791fa010.yml`)

---

*Stack analysis: 2026-01-14*
*Update after major dependency changes*
