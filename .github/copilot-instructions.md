# Copilot Instructions for Portfolio Project

## Project Overview
- **Framework:** Next.js 14 (App Router, TypeScript, React 18)
- **UI:** TailwindCSS, Radix UI, Framer Motion
- **Structure:**
  - `src/app/` — Next.js app directory (pages, layouts, API routes)
  - `src/components/` — Reusable UI and animation components
  - `src/constants/` — Centralized data/config (e.g., project lists)
  - `src/types/` — Shared TypeScript types/interfaces
  - `src/utils/` and `src/lib/` — Utility and helper functions

## Key Conventions
- **TypeScript:**
  - Use `interface` for object shapes, keep types in `src/types/`
  - Use `import type` for type-only imports
  - Prefer `const` over `let`; use `let` only for reassignment
  - Use `async/await` for async code
- **Styling:**
  - Use Tailwind utility classes; extend via `tailwind.config.ts`
  - Global styles in `src/app/globals.css`
- **Component Patterns:**
  - All UI primitives (accordion, button, etc.) in `src/components/ui/`
  - Animation components in `src/components/animation/`
  - Use `"use client"` for client-only components
- **Data:**
  - Project/skill/experience data in `src/constants/`
  - Use enums or union types for fixed value sets

## Workflows
- **Development:**
  - Install: `npm install` (or `pnpm install`)
  - Start: `npm run dev` (Next.js dev server at http://localhost:3000)
  - Build: `npm run build` then `npm start` for production
  - Lint: `npm run lint` (ESLint, config in `eslint.config.ts`)
  - Format: Prettier (`.prettierrc`)
- **Docker:**
  - Build: `docker build -t portfolio .`
  - Run: `docker run -p 3000:3000 -e RESEND_API_KEY=your_resend_api_key portfolio`
  - See `README.docker.md` for multi-stage build details
- **Environment:**
  - Set `RESEND_API_KEY` in `.env.local` for contact form/email

## Patterns & Integration
- **API Routes:**
  - Located in `src/app/api/`
  - Use for server-side logic (e.g., contact form)
- **External Services:**
  - Email via Resend API (see `src/app/api/contact/route.ts`)
  - Analytics via Vercel Analytics (if enabled)
- **Testing:**
  - No explicit test suite found; verify changes via local/dev server

## Example: Adding a New Project Card
1. Add project data to `src/constants/project.ts`
2. Update UI in `src/app/work/_components/ProjectSection.tsx`

## Additional Guidance
- Follow code style in `.github/instructions/typescript.instruction.md`
- For troubleshooting Docker, see `README.docker.md`
- For custom animation, see `src/utils/motion.ts` and `src/components/animation/`

---
For more, see `README.md` and `README.docker.md`. When in doubt, follow patterns from existing files in `src/components/` and `src/app/`.
