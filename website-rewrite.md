# Portfolio Rewrite Plan

**Project Type:** WEB
**Context:** Repositioning `GoBhargavi.github.io` as a Senior AI Full Stack Engineer / Architect using strictly defined resume boundaries and 5 specific GitHub repositories.

## Overview
Transform the current portfolio into an engineering-heavy, AI-focused architecture showcase. The design must deviate from standard safe SaaS templates, leaning into technical credibility, deep case studies, and systemic problem-solving.

## Success Criteria
- Hero clearly communicates "AI + Full Stack + Systems".
- 5 GitHub projects are structured as deep Problem/Solution case studies.
- Enterprise AI work & Technical Depth sections clearly articulated without fabrications.
- No PII (phone, email, specific location).
- Adheres to `frontend-specialist` strict anti-cliché, no-purple rules.

## Tech Stack
- Next.js 15, React 18
- Tailwind CSS (Custom styling, geometric focus)
- Framer Motion (Layered animations)

## File Structure Changes
```text
src/
├── app/page.tsx (Updated layout assembly)
├── data/
│   └── resumeData.json (Sanitized and restructured)
└── components/
    ├── Hero.tsx (Rewritten)
    ├── About.tsx (Rewritten)
    ├── Expertise.tsx (New)
    ├── Projects.tsx (Case Study Rewrite)
    ├── EnterpriseWork.tsx (New)
    ├── Experience.tsx (Condensed)
    ├── TechnicalDepth.tsx (New)
    ├── Education.tsx (Condensed)
    └── Certifications.tsx (Condensed)
```

## Task Breakdown

| Task | Agent | Skills | INPUT → OUTPUT → VERIFY | Dependencies |
|------|-------|--------|-------------------------|--------------|
| **1. Data Sanitation & Restructuring** | `code-archaeologist` | `clean-code` | `resumeData.json` → Sanitized JSON strictly conforming to new constraints → No PII + all 5 repos exist | None |
| **2. Hero & About Reconstruction** | `frontend-specialist` | `frontend-design` | Resumedata → Radically designed `Hero.tsx` & `About.tsx` → Renders with "AI + Full Stack + Systems" | Task 1 |
| **3. Expertise & Tech Depth Sections** | `frontend-specialist` | `react-best-practices` | Categories → `Expertise.tsx` & `TechnicalDepth.tsx` components → Renders RAG pipeline approach | Task 1 |
| **4. Case Studies Reformat** | `frontend-specialist` | `frontend-design` | GitHub Repos → `Projects.tsx` with Problem/Solution framework → 5 items display properly | Task 1 |
| **5. Enterprise Work Section**| `frontend-specialist` | `tailwind-patterns` | AI Resume points → `EnterpriseWork.tsx` → Displays Architecture/AI/Impact | Task 1 |
| **6. Condense History & Certs** | `frontend-specialist` | `clean-code` | Past work → Condensed `Experience`, `Education`, `Certs` → Clean formatting | Task 1 |
| **7. Page Assembly** | `frontend-specialist` | `frontend-design` | Components → `app/page.tsx` → Layout flows continuously | Tasks 2-6 |

## ✅ PHASE X COMPLETE
*To be filled upon completion of implementation.*
- Lint: [ ]
- Security: [ ]
- Build: [ ]
- Date: [ ]
