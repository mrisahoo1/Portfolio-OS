# Mrityunjay Sahoo AI Portfolio

Premium, recruiter-friendly AI Engineer portfolio built with Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui-style components, lucide-react icons, and Framer Motion.

## Live URL

Use this stable production URL on resumes and recruitment websites:

```text
https://portfolio-os-orpin.vercel.app
```

This URL is the Vercel production alias for the `portfolio-os` project. It should remain the same as long as future deploys use the same linked Vercel project and production deployment command.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Deploy to Vercel without changing the final URL

This repository is linked to the Vercel project `portfolio-os`.

Use this command after code changes:

```bash
vercel deploy --prod --yes
```

Do not use the generated deployment URL for resumes. Vercel will print a unique deployment URL on every deploy, but the stable resume URL remains:

```text
https://portfolio-os-orpin.vercel.app
```

If Vercel ever asks to link the project again, link it to the existing `portfolio-os` project. Do not create a new Vercel project unless you intentionally want a new URL.

## GitHub workflow

```bash
git add -A
git commit -m "describe your change"
git push
vercel deploy --prod --yes
```

GitHub repository:

```text
https://github.com/mrisahoo1/Portfolio-OS
```

## Assets to replace

- Avatar/photo: replace files in `public/images/`, especially `avatar-placeholder.png`, `MS-1.jpg`, `MS-2.jpg`, and `MS-3.jpg`.
- Resume PDF: replace `public/resume/Mrityunjay-Sahoo-Resume.pdf` with the latest resume using the same filename so buttons keep working.
- Demo links: add public-safe demos in `data/projects.ts` under `publicShowcaseProjects`. Company/client project cards intentionally avoid public demos.
- Volkswagen LinkedIn video link: currently wired in `components/Leadership.tsx`; replace it there if the post URL changes.
- Project screenshots: add screenshots to `public/images/` and wire them into `data/projects.ts` or project cards.

## Editing content

Most portfolio content lives in local data files:

- `data/profile.ts` for identity, links, SEO person schema data, badges, and system status.
- `data/projects.ts` for featured projects, protected company/client summaries, and public showcase/demo projects.
- `data/portfolioKnowledge.ts` for the simulated Ask My Portfolio responses.
- `data/skills.ts` for the AI stack and filter cards.
- `data/experience.ts` for timeline entries.
- `data/impact.ts` for animated metrics.
- `data/notes.ts` for Field Notes placeholders.

## Ask My Portfolio live LLM integration

The current chat is frontend-only and uses curated static responses from `data/portfolioKnowledge.ts`.

A commented API integration stub exists at `app/api/ask/route.ts`. To make it live later:

1. Add an environment variable such as `OPENAI_API_KEY`, `AZURE_OPENAI_API_KEY`, `GEMINI_API_KEY`, or a Bedrock configuration in Vercel.
2. Implement provider logic in `app/api/ask/route.ts`.
3. Send the user question plus curated portfolio context to the model.
4. Return grounded answers and keep confidential project details out of the prompt and response.

## Navigation and demo strategy

- `components/PortfolioOS.tsx` is the recruiter fast-path module that reduces long-scroll friction.
- `components/SectionRail.tsx` is the desktop quick-jump rail.
- `components/DemoLab.tsx` is reserved for public-safe demos and links.
- Keep copyrighted company/client work summarized in `featuredProjects` or `moreProjects` with `source: "company"`.
- Add linkable personal/showcase projects to `publicShowcaseProjects` with `source: "public"`.

## Adding blog posts later

The Field Notes section is intentionally lightweight. For a full blog later, add MDX support and create a `content/notes` folder, or keep using `data/notes.ts` for simple local cards.

## Future upgrades

- Real LLM-powered Ask My Portfolio with grounded citations.
- Dedicated project case-study pages with safe public architecture diagrams.
- MDX blog and notes system.
- Privacy-friendly analytics.
- GitHub project auto-sync for selected public repositories.
- Dynamic Open Graph image generation.
