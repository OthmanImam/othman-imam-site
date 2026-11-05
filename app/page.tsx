import Image from "next/image";
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import TypedTerminal from "./components/TypedTerminal";
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  CheckIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  XIcon,
} from "./components/icons";
import {
  FOCUS_AREAS,
  FEATURED_WORK,
  LANGUAGE_CHIPS,
  MERGE_LOG,
  MERGE_LOG_WORK,
  MORE_RECENTLY,
  ORG_BREAKDOWN,
  PERSONAL_OSS,
  PIPELINE,
  PRINCIPLES,
  PROFILE,
  STATS,
  TICKER_ITEMS,
} from "./data";

const TICKER = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

function TickerContent() {
  return (
    <>
      {TICKER.map((item, i) => (
        <span
          key={i}
          aria-hidden={i >= TICKER_ITEMS.length}
          className="mx-6 inline-flex items-center gap-6 whitespace-nowrap"
        >
          <span className="text-text-2">{item}</span>
          <span aria-hidden="true" className="text-accent">
            ◆
          </span>
        </span>
      ))}
    </>
  );
}

function SectionHeader({
  index,
  title,
  note,
}: {
  index: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="mb-10 border-b rule-soft pb-5 sm:mb-14">
      <p className="section-index mb-3">{index}</p>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h2 className="font-display text-4xl font-black leading-[1.02] tracking-tight text-text sm:text-5xl">
          {title}
        </h2>
        {note && (
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-muted">
            {note}
          </p>
        )}
      </div>
    </div>
  );
}

function MergedBadge() {
  return (
    <span className="inline-flex h-5 items-center gap-1 rounded-[3px] border border-accent/35 bg-accent/10 px-1.5 font-mono text-[0.55rem] font-bold uppercase tracking-[0.18em] text-accent">
      <CheckIcon className="h-3 w-3" />
      Merged
    </span>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content" tabIndex={-1} className="relative">
        {/* ════════════ HERO ════════════ */}
        <header
          id="top"
          className="hero-atmosphere relative overflow-hidden border-b rule-soft"
        >
          <div className="mx-auto max-w-6xl px-4 pb-14 pt-12 sm:px-6 sm:pt-16 lg:pb-20">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Left — statement */}
              <div className="lg:col-span-7">
                <p className="mb-5 font-mono text-[0.72rem] tracking-[0.14em] text-accent sm:text-[0.8rem]">
                  {PROFILE.eyebrow}
                  <span aria-hidden="true" className="caret ml-1 inline-block h-[0.85em] w-[0.45em] translate-y-[0.1em] bg-accent align-baseline" />
                </p>

                <h1 className="font-display font-black leading-[0.95] tracking-[-0.03em] text-text">
                  <span className="block text-[clamp(3.6rem,13vw,7.5rem)]">
                    Othman
                  </span>
                  <span className="block text-[clamp(3.6rem,13vw,7.5rem)]">
                    Imam<span className="text-accent">.</span>
                  </span>
                  <span className="mt-4 block max-w-xl font-display text-[clamp(1.5rem,4.6vw,2.6rem)] font-semibold italic leading-[1.1] text-text-2">
                    Software that holds up{" "}
                    <em className="not-italic text-accent">in production.</em>
                  </span>
                </h1>

                <p className="mt-6 max-w-md text-[0.82rem] leading-6 text-muted sm:text-[0.88rem]">
                  {PROFILE.sub}
                </p>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#work"
                    className="btn-primary inline-flex h-12 items-center gap-2 rounded-[4px] bg-accent px-6 font-mono text-[0.75rem] font-bold uppercase tracking-[0.16em] text-ink"
                  >
                    View selected work
                    <ArrowDownIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={PROFILE.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost inline-flex h-12 items-center gap-2 rounded-[4px] border border-hairline px-6 font-mono text-[0.75rem] font-bold uppercase tracking-[0.16em] text-text-2"
                  >
                    GitHub
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                </div>

                {/* Micro-row stats */}
                <dl className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-hairline bg-hairline sm:grid-cols-4">
                  {[
                    { k: "STATUS", v: "OPEN TO COLLAB" },
                    { k: "MERGED PRs", v: String(STATS.merged) },
                    { k: "PUBLIC REPOS", v: String(STATS.repos) },
                    { k: "SINCE", v: "MAY 2024" },
                  ].map((s) => (
                    <div
                      key={s.k}
                      className="bg-ink/80 px-3 py-3 backdrop-blur-sm"
                    >
                      <dt className="font-mono text-[0.52rem] uppercase tracking-[0.22em] text-muted">
                        {s.k}
                      </dt>
                      <dd className="mt-1 font-mono text-[0.78rem] font-bold tracking-wide text-accent">
                        {s.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Right — avatar plate + typed terminal */}
              <div className="relative lg:col-span-5">
                <figure className="plate-corners relative mx-auto w-44 sm:w-52 lg:ml-auto lg:mr-2 lg:w-56">
                  <span className="plate-corner absolute inset-0" aria-hidden="true"><span /></span>
                  <div className="relative overflow-hidden rounded-md border border-hairline-teal bg-ink-2 shadow-[0_0_80px_-20px_rgba(94,234,212,0.25)]">
                    <Image
                      src="/avatar.png"
                      alt="Othman Imam — portrait, white cap and maroon shirt"
                      width={224}
                      height={224}
                      priority
                      className="aspect-square w-full object-cover"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"
                    />
                  </div>
                  <figcaption className="mt-2 text-center font-mono text-[0.55rem] uppercase tracking-[0.28em] text-muted">
                    fig. 01 — othman_imam.png
                  </figcaption>
                </figure>

                <div className="relative z-10 mx-auto -mt-6 w-full max-w-md sm:-mt-10 lg:-mt-14 lg:mr-0">
                  <TypedTerminal />
                </div>
              </div>
            </div>

            {/* Bottom quote */}
            <div className="mt-14 flex items-center gap-5 sm:mt-16">
              <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-transparent via-hairline-teal to-accent/40" />
              <p className="text-center font-display text-lg italic text-text-2 sm:text-2xl">
                “Ship less, but ship it <span className="text-accent">right</span>.”
              </p>
              <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-l from-transparent via-hairline-teal to-accent/40" />
            </div>
          </div>
        </header>

        {/* ════════════ TICKER ════════════ */}
        <div
          className="ticker overflow-hidden border-b rule-soft bg-ink-2/40 py-3"
          aria-hidden="true"
        >
          <div className="ticker-track flex font-mono text-[0.68rem] uppercase tracking-[0.3em]">
            <TickerContent />
            <TickerContent />
          </div>
        </div>

        {/* ════════════ 01 — OVERVIEW ════════════ */}
        <section
          id="overview"
          aria-labelledby="overview-title"
          className="scroll-mt-24 border-b rule-soft"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <SectionHeader
              index="01 — Overview"
              title="Correctness is non-negotiable."
              note="who / why / now"
            />
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <h3
                  id="overview-title"
                  className="sr-only"
                >
                  Overview — who Othman Imam is
                </h3>
                <p className="font-display text-[clamp(1.6rem,4.2vw,2.75rem)] font-semibold leading-[1.18] tracking-tight text-text">
                  I write software where{" "}
                  <span className="italic text-accent">correctness</span> is
                  non-negotiable:{" "}
                  <span className="text-text-2">
                    on-chain contracts that move value, and backend services that
                    keep organizational data consistent.
                  </span>
                </p>
                <p className="mt-6 max-w-lg text-sm leading-7 text-muted">
                  My work is almost entirely open source — small, reviewable PRs
                  that close real issues, with the docs and tests that make them
                  mergeable on the first or second pass. I care about the boring
                  half of engineering: the error paths, the migrations, the
                  startup sequence, the health check.
                </p>
              </div>

              {/* Spec block */}
              <div className="lg:col-span-4 lg:col-start-9">
                <div className="rounded-md border border-hairline bg-ink-2/50 p-5 font-mono text-[0.72rem] leading-6">
                  <p className="mb-3 border-b rule-soft pb-3 text-[0.6rem] uppercase tracking-[0.3em] text-muted">
                    now.txt — currently
                  </p>
                  {[
                    ["role", "smart contracts + backend"],
                    ["chain", "stellar · soroban"],
                    ["stack", "rust · typescript · nestjs"],
                    ["data", "postgresql · kafka · typeorm"],
                    ["mode", "open source, review-ready"],
                    ["since", "may 2024"],
                  ].map(([k, v]) => (
                    <p key={k} className="flex gap-3">
                      <span className="w-12 shrink-0 text-accent/80">{k}</span>
                      <span className="text-text-2">{v}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Pull-quote callout */}
            <Reveal className="mt-14 sm:mt-16">
              <figure className="relative border-y rule-teal py-8 text-center sm:py-10">
                <span
                  aria-hidden="true"
                  className="absolute -top-7 left-1/2 -translate-x-1/2 bg-ink px-4 font-display text-6xl leading-none text-accent"
                >
                  “
                </span>
                <blockquote className="mx-auto max-w-4xl font-display text-[clamp(1.4rem,4.5vw,2.6rem)] font-black leading-[1.15] tracking-tight text-text">
                  Specify it. Implement it. Document it.{" "}
                  <span className="italic text-accent">
                    Prove it with tests.
                  </span>
                </blockquote>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* ════════════ 02 — FOCUS ════════════ */}
        <section
          id="focus"
          aria-labelledby="focus-title"
          className="scroll-mt-24 border-b rule-soft bg-ink-2/20"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <SectionHeader
              index="02 — Focus Areas"
              title="Four lanes, one bar."
              note="hover / focus to expand"
            />
            <h3 id="focus-title" className="sr-only">
              Focus areas — smart contracts, contract engineering, backend services, open source
            </h3>
            <ul className="border-t rule-soft">
              {FOCUS_AREAS.map((area) => (
                <li key={area.id} className="focus-row group border-b rule-soft">
                  <div className="grid grid-cols-12 items-baseline gap-x-4 gap-y-3 px-2 py-6 sm:px-4 sm:py-7">
                    <span className="col-span-3 col-start-1 row-start-1 font-mono text-[0.72rem] tracking-[0.3em] text-accent sm:col-span-2">
                      {area.id}
                    </span>
                    <h4 className="col-span-9 col-start-4 row-start-1 font-display text-2xl font-bold tracking-tight text-text sm:col-span-4 sm:col-start-3 sm:text-3xl">
                      {area.title}
                    </h4>
                    <div className="col-span-12 col-start-1 row-start-2 sm:col-span-10 sm:col-start-3 lg:col-span-4 lg:col-start-7">
                      <p className="text-[0.8rem] leading-6 text-text-2">
                        {area.blurb}
                      </p>
                      <p className="focus-detail mt-2 text-[0.72rem] leading-6 text-muted">
                        {area.detail}
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2" aria-label="Keywords">
                        {area.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-[3px] border border-hairline px-2 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.18em] text-muted"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <span className="col-span-1 col-start-12 row-start-1 hidden self-center justify-self-end sm:block">
                      <ArrowUpRightIcon className="focus-arrow h-6 w-6 text-muted transition-colors group-hover:text-accent" />
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ════════════ 03 — SELECTED WORK ════════════ */}
        <section
          id="work"
          aria-labelledby="work-title"
          className="section-atmosphere scroll-mt-24 border-b rule-soft"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <SectionHeader
              index="03 — Selected Work"
              title="The merge ledger."
              note="selected, not exhaustive"
            />
            <h3 id="work-title" className="sr-only">
              Selected work — case studies and recent merges
            </h3>

            {/* Feature cards — asymmetric */}
            <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
              {FEATURED_WORK.map((work, i) => (
                <article
                  key={work.repo}
                  className={`relative flex flex-col rounded-md border border-hairline bg-ink/70 p-6 backdrop-blur-sm transition-colors hover:border-accent/30 sm:p-7 ${
                    i === 0
                      ? "lg:col-span-7"
                      : "lg:col-span-5 lg:mt-16"
                  }`}
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-muted">
                      {work.index}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="rounded-[3px] border border-hairline-teal px-2 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.18em] text-text-2">
                        {work.tag}
                      </span>
                      <MergedBadge />
                    </div>
                  </div>

                  <a
                    href={work.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-fit items-center gap-1.5 font-mono text-[0.78rem] text-accent hover:underline"
                  >
                    {work.repo}
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </a>
                  <h4 className="mt-2 font-display text-2xl font-bold leading-tight tracking-tight text-text sm:text-3xl">
                    {work.project}
                  </h4>
                  <p className="mt-3 text-[0.8rem] leading-6 text-text-2">
                    {work.summary}
                  </p>

                  <ul className="mt-5 space-y-3 border-t rule-soft pt-5">
                    {work.prs.map((pr) => (
                      <li key={pr.url}>
                        <a
                          href={pr.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex flex-wrap items-baseline gap-x-3 gap-y-0.5"
                        >
                          <span className="font-mono text-[0.72rem] font-bold text-accent group-hover:underline">
                            {pr.label}
                          </span>
                          <span className="text-[0.68rem] leading-5 text-muted">
                            {pr.note}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-muted">
                    {work.footnote}
                  </p>
                </article>
              ))}
            </div>

            {/* Recent service work */}
            <div className="mt-10 grid gap-6 lg:grid-cols-12">
              {MERGE_LOG_WORK.map((item) => (
                <a
                  key={item.repo}
                  href={item.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-md border border-hairline bg-ink/60 p-5 transition-colors hover:border-accent/30 lg:col-span-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-[0.72rem] font-bold text-accent group-hover:underline">
                      {item.repo}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-muted">
                        {item.tag}
                      </span>
                      <MergedBadge />
                    </div>
                  </div>
                  <p className="mt-3 text-[0.78rem] leading-6 text-text-2">
                    {item.title}
                  </p>
                  <p className="mt-3 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-muted">
                    {item.note} ↗
                  </p>
                </a>
              ))}
            </div>

            {/* Merge log — dense list */}
            <div className="mt-12">
              <p className="mb-4 font-mono text-[0.62rem] uppercase tracking-[0.3em] text-muted">
                {"// more from the ledger — small, merged, done"}
              </p>
              <ul className="border-t rule-soft">
                {MORE_RECENTLY.map((row) => (
                  <li key={`${row.repo}-${row.ref}`}>
                    <a
                      href={row.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="log-row group grid grid-cols-12 items-baseline gap-x-3 gap-y-1 border-b rule-soft px-2 py-3"
                    >
                      <span className="col-span-12 font-mono text-[0.62rem] text-muted sm:col-span-4">
                        {row.repo}
                      </span>
                      <span className="col-span-9 text-[0.74rem] leading-5 text-text-2 sm:col-span-5">
                        {row.title}
                      </span>
                      <span className="col-span-3 flex items-center justify-end gap-2 sm:col-span-3">
                        <span className="font-mono text-[0.62rem] text-muted">
                          {row.ref}
                        </span>
                        <MergedBadge />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Personal OSS */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {PERSONAL_OSS.map((repo) => (
                <a
                  key={repo.repo}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-md border border-hairline-teal bg-accent/[0.04] p-5 transition-colors hover:border-accent/40"
                >
                  <p className="font-mono text-[0.58rem] uppercase tracking-[0.3em] text-accent">
                    Personal OSS
                  </p>
                  <p className="mt-2 flex items-center gap-1.5 font-mono text-[0.74rem] font-bold text-text group-hover:text-accent">
                    {repo.repo}
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </p>
                  <p className="mt-2 text-[0.72rem] leading-5 text-muted">
                    {repo.title}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ 04 — PROCESS ════════════ */}
        <section
          id="process"
          aria-labelledby="process-title"
          className="scroll-mt-24 border-b rule-soft"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <SectionHeader
              index="04 — Process"
              title="How I work."
              note="spec, not slogan"
            />
            <h3 id="process-title" className="sr-only">
              Process — pipeline and working principles
            </h3>

            {/* Pipeline diagram */}
            <div
              className="overflow-hidden rounded-md border border-hairline bg-ink-2/40 p-5 sm:p-6"
              role="list"
              aria-label="Delivery pipeline: issue, design, implement, document, test, merge"
            >
              <p className="mb-4 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-muted">
                {"// the pipeline — every PR walks it"}
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {PIPELINE.map((stage, i) => (
                  <div key={stage.step} role="listitem" className="relative">
                    <div className="flex h-full flex-col rounded-[4px] border border-hairline-teal bg-ink/70 px-3 py-3">
                      <span className="font-mono text-[0.52rem] text-muted">
                        0{i + 1}
                      </span>
                      <span className="mt-1 font-mono text-[0.72rem] font-bold tracking-[0.14em] text-accent">
                        {stage.step}
                      </span>
                      <span className="mt-1 font-mono text-[0.55rem] lowercase leading-4 text-text-2">
                        {stage.note}
                      </span>
                    </div>
                    {i < PIPELINE.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute -right-2.5 top-1/2 z-10 hidden -translate-y-1/2 bg-ink-2/0 font-mono text-accent lg:block"
                      >
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Principles */}
            <ol className="mt-10 grid gap-x-10 gap-y-0 md:grid-cols-2">
              {PRINCIPLES.map((p) => (
                <li
                  key={p.n}
                  className="flex gap-6 border-t rule-soft py-6"
                >
                  <span
                    aria-hidden="true"
                    className="font-display text-5xl font-black leading-none text-transparent sm:text-6xl"
                    style={{ WebkitTextStroke: "1.25px rgba(94,234,212,0.65)" }}
                  >
                    {p.n}
                  </span>
                  <div>
                    <h4 className="font-display text-xl font-bold tracking-tight text-text sm:text-2xl">
                      {p.title}
                    </h4>
                    <p className="mt-2 text-[0.78rem] leading-6 text-muted">
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            {/* Marquee ticker */}
            <div
              className="ticker mt-10 overflow-hidden border-y rule-teal py-3"
              aria-hidden="true"
            >
              <div className="ticker-track flex font-mono text-[0.68rem] uppercase tracking-[0.32em]">
                <TickerContent />
                <TickerContent />
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ 05 — ACTIVITY ════════════ */}
        <section
          id="activity"
          aria-labelledby="activity-title"
          className="section-atmosphere scroll-mt-24 border-b rule-soft"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <SectionHeader
              index="05 — Activity, Honestly"
              title="The receipts."
              note="github.com/othmanimam — nov 2026"
            />
            <h3 id="activity-title" className="sr-only">
              Activity — merge statistics and recent merged pull requests
            </h3>

            {/* Stat band — oversized numeral */}
            <div className="grid items-end gap-8 border-b rule-soft pb-10 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <p
                  aria-hidden="true"
                  className="font-display text-[clamp(7rem,24vw,12rem)] font-black leading-[0.85] tracking-[-0.05em] text-text"
                >
                  {STATS.merged}
                  <span className="text-accent">.</span>
                </p>
                <p className="mt-4 font-mono text-[0.72rem] uppercase tracking-[0.3em] text-accent">
                  merged PRs
                </p>
              </div>
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-hairline bg-hairline sm:grid-cols-4 lg:col-span-6 lg:grid-cols-2 xl:grid-cols-4">
                {[
                  { k: "AUTHORED", v: String(STATS.authored) },
                  { k: "PUBLIC REPOS", v: String(STATS.repos) },
                  { k: "FOLLOWERS", v: String(STATS.followers) },
                  { k: "SINCE", v: "MAY 2024" },
                ].map((s) => (
                  <div key={s.k} className="bg-ink/80 px-3 py-5 text-center">
                    <dt className="font-mono text-[0.52rem] uppercase tracking-[0.22em] text-muted">
                      {s.k}
                    </dt>
                    <dd className="mt-2 font-display text-2xl font-black text-text sm:text-3xl">
                      {s.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Merge log */}
            <div className="mt-10">
              <p className="mb-3 font-mono text-[0.62rem] uppercase tracking-[0.3em] text-muted">
                {"// the merge log — most recent first"}
              </p>
              <ul className="border-t rule-soft">
                {MERGE_LOG.map((row) => (
                  <li key={row.url}>
                    <a
                      href={row.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="log-row group grid grid-cols-12 items-baseline gap-x-3 gap-y-1 border-b rule-soft px-2 py-3"
                    >
                      <time
                        dateTime={row.date}
                        className="col-span-4 font-mono text-[0.65rem] text-muted sm:col-span-2"
                      >
                        {row.date}
                      </time>
                      <span
                        className="col-span-8 truncate font-mono text-[0.6rem] text-muted sm:col-span-3"
                        title={row.repo}
                        aria-label={row.repo}
                      >
                        {row.repo.split("/")[1] ?? row.repo}
                      </span>
                      <span className="col-span-9 text-[0.72rem] leading-5 text-text-2 sm:col-span-5">
                        {row.title}
                      </span>
                      <span className="col-span-3 flex items-center justify-end gap-2 sm:col-span-2">
                        <span className="hidden font-mono text-[0.6rem] text-muted sm:inline">
                          {row.ref}
                        </span>
                        <MergedBadge />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-3 font-mono text-[0.6rem] tracking-[0.08em] text-muted">
                {"// snapshot from GitHub, Nov 2026 — not a live feed"}
              </p>
            </div>

            {/* Org breakdown + language chips */}
            <div className="mt-12 grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="mb-4 font-mono text-[0.62rem] uppercase tracking-[0.3em] text-muted">
                  {"// merged by org — qualitative"}
                </p>
                <ul className="space-y-3">
                  {ORG_BREAKDOWN.map((o) => (
                    <li key={o.org} className="grid grid-cols-12 items-center gap-3">
                      <span className="col-span-4 font-mono text-[0.68rem] text-text-2 sm:col-span-3">
                        {o.org}
                      </span>
                      <span className="col-span-6 h-[3px] overflow-hidden rounded-full bg-hairline sm:col-span-7">
                        <span
                          className="block h-full rounded-full bg-accent/70"
                          style={{ width: `${o.weight}%` }}
                        />
                      </span>
                      <span className="col-span-2 text-right font-mono text-[0.52rem] leading-4 text-muted">
                        {o.note.split("·")[0].trim()}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-4 lg:col-start-9">
                <p className="mb-4 font-mono text-[0.62rem] uppercase tracking-[0.3em] text-muted">
                  {"// language focus"}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {LANGUAGE_CHIPS.map((chip) => (
                    <li
                      key={chip}
                      className="rounded-[3px] border border-hairline bg-ink/60 px-3 py-1.5 font-mono text-[0.65rem] tracking-[0.08em] text-text-2 transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[0.68rem] leading-5 text-muted">
                  Weighted by merged work, not by repo count — Rust for the
                  contracts, TypeScript for everything that serves them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ 06 — CONTACT ════════════ */}
        <section
          id="contact"
          aria-labelledby="contact-title"
          className="scroll-mt-24"
        >
          <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-24">
            <p className="section-index">06 — Contact</p>
            <h2
              id="contact-title"
              className="mx-auto mt-6 max-w-5xl font-display text-[clamp(2rem,6.4vw,4.2rem)] font-black leading-[1.05] tracking-tight text-text"
            >
              Open to contract-based{" "}
              <span className="italic text-accent">smart-contract work</span>,
              backend roles, and meaningful open-source collaboration.
            </h2>
            <p className="mx-auto mt-6 max-w-md font-mono text-[0.7rem] uppercase leading-6 tracking-[0.24em] text-muted">
              {"// fastest reply: github — email placeholder below"}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${PROFILE.email}`}
                className="btn-primary inline-flex h-12 items-center gap-2 rounded-[4px] bg-accent px-6 font-mono text-[0.75rem] font-bold uppercase tracking-[0.16em] text-ink"
              >
                <MailIcon className="h-4 w-4" />
                {PROFILE.email}
              </a>
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex h-12 items-center gap-2 rounded-[4px] border border-hairline px-6 font-mono text-[0.75rem] font-bold uppercase tracking-[0.16em] text-text-2"
              >
                <GitHubIcon className="h-4 w-4" />
                @OthmanImam
              </a>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex h-11 items-center gap-2 rounded-[4px] border border-hairline px-5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted"
                aria-label="LinkedIn profile (placeholder handle)"
              >
                <LinkedInIcon className="h-4 w-4" />
                linkedin/in/your-handle
                <span className="text-[0.5rem] text-muted/70">(placeholder)</span>
              </a>
              <a
                href={PROFILE.x}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex h-11 items-center gap-2 rounded-[4px] border border-hairline px-5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted"
                aria-label="X profile (placeholder handle)"
              >
                <XIcon className="h-4 w-4" />
                x.com/your-handle
                <span className="text-[0.5rem] text-muted/70">(placeholder)</span>
              </a>
            </div>
          </div>
        </section>

        {/* ════════════ FOOTER ════════════ */}
        <footer className="border-t rule-soft bg-ink">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted sm:flex-row sm:px-6">
            <p>
              © 2026 Othman Imam — shipped with Next.js,{" "}
              <span className="text-accent">merged with intent.</span>
            </p>
            <p className="font-display normal-case italic tracking-normal text-text-2">
              “Ship less, but ship it right.”
            </p>
            <a
              href="#top"
              className="flex min-h-[44px] items-center gap-2 text-text-2 transition-colors hover:text-accent"
              aria-label="Back to top"
            >
              back to top
              <ArrowUpRightIcon className="h-4 w-4 -rotate-45" />
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
