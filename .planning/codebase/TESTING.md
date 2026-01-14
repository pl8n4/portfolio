# Testing Patterns

**Analysis Date:** 2026-01-14

## Test Framework

**Runner:**
- None configured

**Assertion Library:**
- None installed

**Run Commands:**
```bash
# No test commands available
# package.json does not include test script
```

## Test File Organization

**Location:**
- No test files present

**Naming:**
- Not established (no tests exist)

**Structure:**
- `src/components/` directory exists but is empty
- No `__tests__/` directory
- No `*.test.ts` or `*.spec.ts` files

## Test Structure

**Current Status:** No tests implemented

**Recommended Pattern (if adding tests):**
```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders header navigation', () => {
    render(<App />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('opens project modal on card click', () => {
    render(<App />);
    // test implementation
  });
});
```

## Mocking

**Framework:**
- Not applicable (no tests)

**What Would Need Mocking:**
- `requestIdleCallback` (not available in test environment)
- Image loading (for preload tests)

## Fixtures and Factories

**Test Data:**
- Not established

**Potential Factory:**
```typescript
function createTestProject(overrides?: Partial<Project>): Project {
  return {
    title: 'Test Project',
    keywords: 'Test, Keywords',
    description: 'Test description',
    ...overrides
  };
}
```

## Coverage

**Requirements:**
- No coverage requirements defined
- No coverage tooling configured

**Configuration:**
- Not applicable

## Test Types

**Unit Tests:**
- None present

**Integration Tests:**
- None present

**E2E Tests:**
- None present

## Recommended Test Setup

**If Adding Tests:**

1. **Install Vitest + Testing Library:**
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

2. **Add to `vite.config.ts`:**
```typescript
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
});
```

3. **Create setup file `src/test/setup.ts`:**
```typescript
import '@testing-library/jest-dom';
```

4. **Add test script to `package.json`:**
```json
{
  "scripts": {
    "test": "vitest",
    "test:coverage": "vitest run --coverage"
  }
}
```

## Priority Test Cases

**If Implementing Tests:**

1. **High Priority:**
   - Modal open/close behavior
   - Keyboard navigation (ESC key)
   - Focus management

2. **Medium Priority:**
   - Project card rendering
   - Image preloading logic
   - Responsive layout

3. **Low Priority:**
   - Static content rendering
   - CSS class application

---

*Testing analysis: 2026-01-14*
*Update when test patterns change*
