# External Integrations

**Analysis Date:** 2026-01-14

## APIs & External Services

**Payment Processing:**
- Not applicable (static portfolio site)

**Email/SMS:**
- Not applicable

**External APIs:**
- None in current codebase (portfolio displays projects that used external APIs, but this site doesn't call them)

## Data Storage

**Databases:**
- None (static site with no data persistence)

**File Storage:**
- Local static assets in `src/assets/` (bundled at build time)
- No external file storage services

**Caching:**
- None (relies on browser caching and CDN)

## Authentication & Identity

**Auth Provider:**
- None required (public portfolio site)

**OAuth Integrations:**
- None

## Monitoring & Observability

**Error Tracking:**
- None configured

**Analytics:**
- None configured

**Logs:**
- Azure Static Web Apps default logging (deployment only)

## CI/CD & Deployment

**Hosting:**
- Azure Static Web Apps - Static site hosting
- Deployment: Automatic on push to `main` branch
- Workflow: `.github/workflows/azure-static-web-apps-black-mud-0791fa010.yml`

**CI Pipeline:**
- GitHub Actions - Build and deploy workflow
- Triggers: Push to `main`, pull requests
- Steps: npm install, npm run build, deploy to Azure

## Environment Configuration

**Development:**
- No environment variables required
- Run locally with `npm run dev`

**Production:**
- Secret: `AZURE_STATIC_WEB_APPS_API_TOKEN_BLACK_MUD_0791FA010` (stored in GitHub Secrets)
- No other production configuration needed

## Webhooks & Callbacks

**Incoming:**
- None

**Outgoing:**
- None

## External Resources (Content Only)

The portfolio displays links and references to external services, but doesn't integrate with them:

**Social Links:**
- GitHub: `https://github.com/pl8n4` - Repository links
- LinkedIn: `https://www.linkedin.com/in/pablo-lasarte-a0a68b204/` - Profile link

**External Fonts:**
- Google Fonts - `index.html` (preconnect)
  - Inter (400, 500, 600, 700)
  - Space Grotesk (500, 600, 700)

---

*Integration audit: 2026-01-14*
*Update when adding/removing external services*
