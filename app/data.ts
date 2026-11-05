/* ─────────────────────────────────────────────────────────────
   Othman Imam — static content ledger
   All content is baked in at build time. No live network calls.
   Snapshot sources: github.com/OthmanImam, Nov 2026.
   ───────────────────────────────────────────────────────────── */

export const PROFILE = {
  name: "Othman Imam",
  handle: "OthmanImam",
  githubUrl: "https://github.com/OthmanImam",
  eyebrow: "// github.com/OthmanImam",
  tagline: "Software that holds up in production.",
  sub: "Smart contracts on Stellar/Soroban · Backend systems in TypeScript/NestJS · Open source, review-ready.",
  status: "OPEN TO COLLABORATE",
  quote: "Ship less, but ship it right.",
  email: "your-email@example.com",
  linkedin: "https://linkedin.com/in/your-handle",
  x: "https://x.com/your-handle",
} as const;

export const STATS = {
  merged: 342,
  authored: 363,
  repos: 167,
  followers: 16,
  since: "May 2024",
} as const;

export const NAV_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Activity", href: "#activity" },
  { label: "Contact", href: "#contact" },
] as const;

export const TICKER_ITEMS = [
  "typed over ad-hoc",
  "docs ship with code",
  "tests are the spec",
  "small reviewable diffs",
] as const;

export const FOCUS_AREAS = [
  {
    id: "F.01",
    title: "Smart Contracts",
    blurb:
      "Rust on Stellar's Soroban — escrow-style job flows, bidding, deliverables, and the state machines that hold them together.",
    detail:
      "End-to-end contract lifecycle: job posting, competitive bidding, acceptance, delivery, and resolution — with explicit state transitions and typed events at every boundary.",
    tags: ["Rust", "Soroban", "Stellar"],
  },
  {
    id: "F.02",
    title: "Contract Engineering",
    blurb:
      "Structured event emission, explicit error handling, snapshot-tested behavior, Rustdoc-level docs.",
    detail:
      "Contracts written to be reviewed: typed `DeliverableSubmittedEvent`-style emissions, no panics-as-control-flow, snapshot tests that pin the ABI, and public functions documented in the same PR they ship in.",
    tags: ["Rustdoc", "Snapshot tests", "Typed events"],
  },
  {
    id: "F.03",
    title: "Backend Services",
    blurb:
      "Modular feature work in TypeScript codebases — NestJS, TypeORM, PostgreSQL, Kafka.",
    detail:
      "Company-level configuration modules, service providers wired correctly on the first boot, database migrations that run on startup, and health checks that stay cheap enough for Render.",
    tags: ["NestJS", "TypeORM", "PostgreSQL", "Kafka"],
  },
  {
    id: "F.04",
    title: "Open Source",
    blurb:
      "Scoped, review-ready PRs that close real issues — docs and tests included.",
    detail:
      "One issue, one PR, one clear story. Diffs sized for review, commit messages that explain the why, and documentation that makes the next contributor's job easier.",
    tags: ["Review-ready", "Docs-included", "Test-backed"],
  },
] as const;

export const FEATURED_WORK = [
  {
    index: "W.01",
    repo: "DXmakers/lance",
    repoUrl: "https://github.com/DXmakers/lance",
    project: "JobRegistry contract",
    tag: "Soroban · Rust",
    status: "MERGED",
    summary:
      "Full job-lifecycle implementation of the JobRegistry contract, function by function — validation, error handling, event logging, and Rustdoc-level documentation, each landed as a reviewable, tested PR.",
    prs: [
      {
        label: "#219 — submit_bid",
        note: "validation, error handling, event logging",
        url: "https://github.com/DXmakers/lance/pull/219",
      },
      {
        label: "#220 — submit_deliverable",
        note: "Rustdoc, typed DeliverableSubmittedEvent, snapshot tests",
        url: "https://github.com/DXmakers/lance/pull/220",
      },
    ],
    footnote: "Also: accept_bid — bid validation, events, docs, tests.",
  },
  {
    index: "W.02",
    repo: "DistinctCodes/AssetsUp",
    repoUrl: "https://github.com/DistinctCodes/AssetsUp",
    project: "Company settings module",
    tag: "TypeScript · NestJS",
    status: "MERGED",
    summary:
      "System-wide configuration managed at the company level — a module designed so every tenant inherits sane defaults and overrides them deliberately, not accidentally.",
    prs: [
      {
        label: "#265 — company settings",
        note: "reviewed & approved by maintainers",
        url: "https://github.com/DistinctCodes/AssetsUp/pull/265",
      },
    ],
    footnote: "Reviewed & approved by maintainers before merge.",
  },
] as const;

export const MERGE_LOG_WORK = [
  {
    repo: "InclusaAI/realtime-media-backend",
    repoUrl: "https://github.com/InclusaAI/realtime-media-backend",
    title:
      "2026-09 → 11 — deployed to Render, Kafka module provider fix, audio-tap Nest dependencies, lightweight health check, Swagger docs",
    tag: "NestJS · Kafka",
    status: "MERGED",
    note: "Recently active · series #13–#18",
  },
  {
    repo: "InclusaAI/backend",
    repoUrl: "https://github.com/InclusaAI/backend/pull/11",
    title: "feat: add fanout preference and presenter assist services",
    tag: "NestJS · TypeScript",
    status: "MERGED",
    note: "#11 · Sep 2026",
  },
] as const;

export const MORE_RECENTLY = [
  {
    repo: "SynapGridTech/synapgrid-api",
    title: "Industrial-grade NestJS + TypeORM API",
    ref: "#1",
    url: "https://github.com/SynapGridTech/synapgrid-api/pull/1",
    status: "MERGED",
  },
  {
    repo: "SynapGridTech/synapgrid-api",
    title: "Fix PostgreSQL startup migrations",
    ref: "#2",
    url: "https://github.com/SynapGridTech/synapgrid-api/pull/2",
    status: "MERGED",
  },
  {
    repo: "SynapGridTech/kadartisan-backend",
    title: "fix(auth): actually deliver OTP codes over email/SMS",
    ref: "#27",
    url: "https://github.com/SynapGridTech/kadartisan-backend/pull/27",
    status: "MERGED",
  },
  {
    repo: "LintError/orionpay-UI",
    title: "Stellar blockchain integration for crypto payments",
    ref: "#7",
    url: "https://github.com/LintError/orionpay-UI/pull/7",
    status: "MERGED",
  },
  {
    repo: "MoogleFricks/HerPlate",
    title: "Build HPTF nonprofit website",
    ref: "#1 · #2",
    url: "https://github.com/MoogleFricks/HerPlate",
    status: "MERGED",
  },
  {
    repo: "InclusaAI/realtime-media-backend",
    title: "Render-readiness series — deployment, health check, Swagger, Kafka provider",
    ref: "#13–#18",
    url: "https://github.com/InclusaAI/realtime-media-backend",
    status: "MERGED",
  },
] as const;

export const PERSONAL_OSS = [
  {
    repo: "OthmanImam/InterChangableTrade-Prot",
    title: "Soroban contracts for decentralized trading on Stellar",
    url: "https://github.com/OthmanImam/InterChangableTrade-Prot",
  },
  {
    repo: "vndor-backend",
    title: "AURORA — on-chain AI language-learning platform backend",
    url: "https://github.com/OthmanImam",
  },
] as const;

export const PIPELINE = [
  { step: "ISSUE", note: "scoped" },
  { step: "DESIGN", note: "edge cases" },
  { step: "IMPLEMENT", note: "typed events" },
  { step: "DOCUMENT", note: "Rustdoc" },
  { step: "TEST", note: "snapshots" },
  { step: "MERGE", note: "reviewed" },
] as const;

export const PRINCIPLES = [
  {
    n: "01",
    title: "Typed over ad-hoc.",
    body: "Structured events and explicit errors beat tuples and panics. If the type system can say it, it should.",
  },
  {
    n: "02",
    title: "Docs ship with code.",
    body: "If a function is public, it is documented in the same PR. Documentation is not a follow-up ticket.",
  },
  {
    n: "03",
    title: "Tests are the spec.",
    body: "Behavior changes must show up in the snapshots. Reviewers read the ABI diff before the code diff.",
  },
  {
    n: "04",
    title: "Small, reviewable diffs.",
    body: "One issue, one PR, one clear story. A diff a maintainer can hold in their head is a diff that lands.",
  },
] as const;

export const MERGE_LOG = [
  {
    date: "2026-11-03",
    repo: "InclusaAI/realtime-media-backend",
    title: "Add short Swagger docs URL",
    ref: "#18",
    url: "https://github.com/InclusaAI/realtime-media-backend/pull/18",
  },
  {
    date: "2026-11-03",
    repo: "InclusaAI/realtime-media-backend",
    title: "Use lightweight Render health check",
    ref: "#17",
    url: "https://github.com/InclusaAI/realtime-media-backend/pull/17",
  },
  {
    date: "2026-11-03",
    repo: "InclusaAI/realtime-media-backend",
    title: "Fix audio tap Nest dependencies for startup",
    ref: "#16",
    url: "https://github.com/InclusaAI/realtime-media-backend/pull/16",
  },
  {
    date: "2026-11-03",
    repo: "InclusaAI/realtime-media-backend",
    title: "Fix Kafka module provider export",
    ref: "#15",
    url: "https://github.com/InclusaAI/realtime-media-backend/pull/15",
  },
  {
    date: "2026-11-03",
    repo: "InclusaAI/realtime-media-backend",
    title: "Prepare realtime media backend for Render deployment",
    ref: "#14",
    url: "https://github.com/InclusaAI/realtime-media-backend/pull/14",
  },
  {
    date: "2026-10-28",
    repo: "SynapGridTech/synapgrid-api",
    title: "Fix PostgreSQL startup migrations",
    ref: "#2",
    url: "https://github.com/SynapGridTech/synapgrid-api/pull/2",
  },
  {
    date: "2026-09-07",
    repo: "InclusaAI/backend",
    title: "feat: add fanout preference and presenter assist services",
    ref: "#11",
    url: "https://github.com/InclusaAI/backend/pull/11",
  },
] as const;

export const ORG_BREAKDOWN = [
  { org: "InclusaAI", note: "backend platform + realtime media", weight: 100 },
  { org: "DXmakers", note: "Soroban JobRegistry contracts", weight: 72 },
  { org: "DistinctCodes", note: "AssetsUp NestJS platform", weight: 56 },
  { org: "SynapGridTech", note: "NestJS + TypeORM APIs", weight: 44 },
  { org: "LintError", note: "Stellar payments UI", weight: 30 },
  { org: "MoogleFricks", note: "HerPlate nonprofit site", weight: 22 },
] as const;

export const LANGUAGE_CHIPS = [
  "Rust",
  "Soroban",
  "TypeScript",
  "NestJS",
  "Node.js",
  "PostgreSQL",
  "Kafka",
  "GitHub Actions",
  "Git",
] as const;
