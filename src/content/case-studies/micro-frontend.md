---
title: "Scaling Architecture: Micro-Frontends for Senior Living"
description: "How decoupled architecture empowered 6 autonomous teams and reduced bundle sizes by 40%."
date: "2024-02-15"
technologies: ["Anuglar 17", "Module Federation", "TypeScript", "Nx Monorepo"]
role: "Lead Frontend Engineer"
impact: "40% Smaller Bundle | 6 Teams Unblocked"
heroImage: "/images/micro-frontend-hero.png"
---

## The Challenge
Our senior living healthcare platform was struggling with scale. A monolithic codebase had become a bottleneck for deployment velocity. **Six feature teams** were constantly blocked by shared dependencies and merge conflicts. Additionally, the application bundle size had ballooned to over 5MB, resulting in slow load times for clinical users on limited network connections.

We needed an architectural shift that would empower team autonomy without sacrificing performance or coherent UX.

## The Solution
I led the migration from a monolithic Angular application to a **Micro-Frontend Architecture** using **Webpack Module Federation**.

### Architectural Strategy
The migration involved breaking down the application into domain-specific verticals:
1.  **Core Shell**: Authentication, Navigation, and Shared State.
2.  **Clinical Module**: Resident care and medication management.
3.  **Billing Module**: Financial workflows and reporting.
4.  **Admin Module**: Configuration and user management.

This separation allowed teams to develop, test, and deploy independently.

### Key Implementation Details
#### Module Federation Config
The core of the strategy was the Module Federation configuration. Here's how we exposed remote modules while sharing critical dependencies like Angular core to prevent duplication.

```typescript
// webpack.config.js (Host Application)
const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  remotes: {
    "clinical": "http://localhost:4201/remoteEntry.js",
    "billing": "http://localhost:4202/remoteEntry.js",
  },
  
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
```

#### Shared UI Library
To maintain visual consistency across independent micro-frontends, I established a shared UI component library within our **Nx Monorepo**. This ensured that a button in the Billing module looked identical to one in the Clinical module, enforcing our design system automatically.

## Results & Impact
*   **Performance**: Initial load bundle size reduced by **40%** due to lazy-loading remote modules only when needed.
*   **Velocity**: Deployment frequency increased by **3x** as teams no longer waited for a monolithic release train.
*   **Resilience**: Failures in one micro-frontend (e.g., Reporting) no longer crashed the entire application shell.

## Lessons Learned
Micro-frontends introduce complexity in orchestration and version management. Early investment in **automated tooling** and **contract testing** between the shell and remotes was critical. If I were to do this again, I would prioritize standardizing the local development environment earlier to reduce friction for new developers onboarding to the distributed system.
