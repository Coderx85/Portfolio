# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audience is recruiters and hiring managers evaluating Priyanshu (GitHub: Coderx85) for full-time software engineering roles. Secondary: peers/collaborators checking his work via GitHub activity.

## Product Purpose

A personal portfolio site that gets Priyanshu interviews and offers. It presents his resume, work experience, projects, and skills so a recruiter can quickly assess fit and reach out via the contact form.

## Positioning

Full-stack + DevOps ownership: he owns the stack end to end, from client-side UI through backend APIs to containerized deployment (Docker/Kubernetes/AWS), not just frontend or backend in isolation.

## Operating Context

- Pages: Home, Resume (print + web view toggle), Experience, Work (projects), Service, Contact.
- Resume has a dedicated print-friendly view (`src/app/resume/_components/PrintView.tsx`) alongside the web view.
- Contact page sends email via Resend (`src/app/api/contact/route.ts`); requires `RESEND_API_KEY`.
- GitHub activity/stats are shown live via `src/app/_components/GitHubStats` pulling from the `Coderx85` GitHub account.
- Deployed as a Next.js app (also has a Dockerfile for containerized deploys).

## Capabilities and Constraints

- Built with Next.js 16, React 19, TypeScript, Tailwind CSS 4, Radix UI, Framer Motion.
- Resume, experience, and skills content is structured data in `src/constants/resume.ts`, `project.ts`, `services.ts` — not CMS-driven.
- No analytics/testimonial collection system exists; any future claims must be evidence-backed (see below), not fabricated.

## Brand Commitments

- Name: Priyanshu. GitHub/handle: Coderx85. Contact email on file: work.priyanshu085@gmail.com.
- Tone in existing copy is plain, factual, first-person ("I have worked as...", "I can help you...") — not a self-aggrandizing marketing voice.

## Evidence on Hand

Real, resume-backed facts already in the codebase (treat as the only legitimate proof points; do not invent testimonials, client logos, or additional metrics beyond these):

- **Websmiths** — Full Stack Web Intern (Sep–Nov 2025): built/deployed Next.js + Fastify apps serving 500+ daily active users; PostgreSQL API work cutting avg query response time by 35%; Dockerized services on AWS EC2 at 99.9% uptime; Vitest coverage 90%+.
- **Websmiths (confirmed 2026-10, per user)** — current role: Forward Deployed Engineer at Adleia Labs. Built a multi-tenant SaaS backend serving 100+ enterprise organizations and 5k+ users (also recorded in `src/constants/resume.ts` `experienceData`). A Kafka notification microservice on that backend handles 450 req/sec — scoped to the message/notification service, NOT the whole backend. Cut production MTTR by 24%.
- **JarGoan** — Frontend Web Intern (May–Jun 2024): usability improved 20.6% via responsive/accessibility redesigns; user engagement up 26.53% via interactive React UI; bundle size cut 18% via lazy-loading.
- **Education**: B-Tech Computer Science, GCET Noida (2021–2025); Intermediate (2019–2021).
- **GitHub activity**: live contribution/stats widget on the site, pulling real data from the Coderx85 account — this stands in for testimonials/case studies since none exist.
- No client testimonials, press mentions, or case studies exist yet. Future work must not fabricate these.

## Product Principles

1. Lead with verifiable, quantified facts (the internship metrics and live GitHub activity) over generic claims — the audience is recruiters who discount unverifiable marketing language.
2. Full-stack + DevOps ownership is the throughline: copy and project framing should keep surfacing client-to-deployment ownership, not just one layer of the stack.
3. Keep the resume's print view and web view both fully usable — recruiters may want either format.
4. Never fabricate testimonials, client names, or metrics beyond what's recorded in Evidence on Hand.
