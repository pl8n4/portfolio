# Pablo Lasarte — Portfolio

Personal portfolio site showcasing selected projects, background, and contact info.

- Focus: backend systems, data engineering, applied ML
- Tech: React + TypeScript + Vite

## Highlights

- Projects section with a modal for extended write-ups and repo links
- Inline PDF viewer for research poster content
- “Beyond the Code” photo gallery with a lightweight image preview modal
- Keyboard-friendly interactions (ESC to close modals, focus managed on open/close)

## Getting started

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Install & run

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

### Useful scripts

```bash
npm run build    # production build (outputs to dist/)
npm run preview  # serve the production build locally
npm run lint     # run ESLint
```

## Editing content

- Main content: `src/App.tsx` (projects, about blurb, contact links)
- Styling: `src/styles/global.css`
- Static assets: `src/assets/` (images + PDF)

## Deployment

This repo includes a GitHub Actions workflow for Azure Static Web Apps at
`.github/workflows/azure-static-web-apps-black-mud-0791fa010.yml`.

- Builds on pushes to `main` and deploys the `dist/` output
- Requires the repo secret `AZURE_STATIC_WEB_APPS_API_TOKEN_BLACK_MUD_0791FA010`

## Contact

- Email: `pablo.lasarte1283@gmail.com`
- GitHub: https://github.com/pl8n4
- LinkedIn: https://www.linkedin.com/in/pablo-lasarte-a0a68b204/
