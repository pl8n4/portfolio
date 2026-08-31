# Codebase Concerns

**Analysis Date:** 2026-01-14

## Tech Debt

**Monolithic Component:**
- Issue: All UI logic in single `src/App.tsx` file (414 lines)
- Why: Rapid development of portfolio site
- Impact: Harder to maintain as features grow, no component reuse
- Fix approach: Extract reusable components to `src/components/` (Header, ProjectCard, Modal, Gallery)

**Empty Components Directory:**
- Issue: `src/components/` exists but is empty
- Why: Component extraction not yet done
- Impact: Suggests intended architecture not followed through
- Fix approach: Either extract components or remove empty directory

## Known Bugs

**Beyond Modal Click Propagation:**
- Symptoms: Clicking the modal content area (not just overlay) closes the modal
- Trigger: Click anywhere on the Beyond preview modal
- File: `src/App.tsx:313`
- Workaround: None needed (works but may surprise users)
- Root cause: Inner modal div has `onClick={closeBeyondPreview}` without `stopPropagation()`
- Fix: Add `onClick={(e) => e.stopPropagation()}` to `.beyondModal` div

## Security Considerations

**No Security Issues Detected:**
- npm audit: 0 vulnerabilities
- No hardcoded secrets
- No user input handling
- No external API calls

**Deployment Token:**
- Risk: Low (token in GitHub Secrets, not exposed)
- File: `.github/workflows/azure-static-web-apps-black-mud-0791fa010.yml:39`
- Current mitigation: Stored in GitHub Secrets
- Recommendations: None needed

## Performance Bottlenecks

**No Performance Issues Detected:**

The codebase includes good performance patterns:
- Image preloading with `requestIdleCallback` (`src/App.tsx:82-88`)
- Lazy loading on gallery images (`src/App.tsx:249,269,289`)
- Async image decoding (`src/App.tsx:87`)
- CSS animations with reduced motion support (`src/styles/global.css:731`)

## Fragile Areas

**Focus Management:**
- File: `src/App.tsx:143-150`
- Why fragile: Complex ref management across two modal types
- Common failures: Focus not restored correctly if modals opened in quick succession
- Safe modification: Test all modal open/close sequences
- Test coverage: None (no tests)

**Beyond Preview Focus:**
- File: `src/App.tsx`
- Why fragile: Beyond preview modal doesn't restore focus like project modal does
- Issue: `lastFocusRef` pattern only applied to project modal
- Fix: Apply same focus management to Beyond preview modal

## Scaling Limits

**Not Applicable:**
- Static site with no backend
- Azure Static Web Apps handles scaling
- No database or API constraints

## Dependencies at Risk

**All Dependencies Current:**
- React 19.2.0 (latest)
- TypeScript 5.9.3 (latest)
- Vite 7.2.4 (latest)
- No deprecated packages

## Missing Critical Features

**No Test Framework:**
- Problem: Zero automated tests
- Current workaround: Manual testing
- Blocks: Can't verify changes don't break existing functionality
- Implementation complexity: Low (Vitest setup ~30 min)

**Missing .env.example:**
- Problem: No documentation of environment setup for deployment
- File: Root directory (missing)
- Current workaround: README mentions Azure token requirement
- Blocks: New contributors may miss deployment secret setup
- Implementation complexity: Trivial

## Test Coverage Gaps

**100% Gap:**
- What's not tested: Everything
- Risk: Any change could break functionality unnoticed
- Priority: Medium (portfolio site, not critical app)
- Difficulty to test: Low (Vitest + Testing Library well-suited)

**Recommended First Tests:**
1. Modal open/close behavior
2. Keyboard navigation (ESC key)
3. Focus management

## Minor Issues

**Empty Alt Text:**
- File: `src/App.tsx:314`
- Issue: `<img className="beyondModalImg" src={beyondPreviewSrc} alt="" />`
- Impact: Accessibility concern (images should have descriptive alt)
- Fix: Pass alt text from source or derive from context

**Unsafe Type Assertion:**
- File: `src/App.tsx:99-100`
- Issue: `as unknown as` double assertion for `requestIdleCallback`
- Impact: Bypasses TypeScript type checking
- Fix: Use proper type declarations or `@types/web` for `requestIdleCallback`

**Silent Error Suppression:**
- File: `src/App.tsx:88`
- Issue: `.catch(() => {})` silently swallows decode errors
- Impact: No visibility into image decode failures
- Fix: Add error logging in development mode

---

*Concerns audit: 2026-01-14*
*Update as issues are fixed or new ones discovered*
