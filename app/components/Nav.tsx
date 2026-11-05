"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, PROFILE } from "../data";
import { GitHubIcon } from "./icons";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav
      aria-label="Primary navigation"
      className="sticky top-0 z-50 border-b border-hairline bg-ink/85 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Monogram + wordmark */}
        <a
          href="#top"
          className="group flex min-h-[44px] items-center gap-3"
          aria-label="Othman Imam — back to top"
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-hairline-teal bg-ink-2 text-base font-bold text-accent transition-colors group-hover:border-accent/40"
          >
            {"oi_"}
          </span>
          <span className="text-[0.78rem] font-semibold tracking-[0.3em] text-text transition-colors group-hover:text-accent">
            OTHMAN<span className="text-accent">.</span>IMAM
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="flex min-h-[44px] items-center text-[0.7rem] uppercase tracking-[0.22em] text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Status pill */}
          <a
            href="#contact"
            className="hidden min-h-[44px] items-center gap-2 rounded-full border border-hairline-teal bg-accent/5 px-4 text-[0.65rem] uppercase tracking-[0.18em] text-accent transition-colors hover:border-accent/40 hover:bg-accent/10 sm:flex"
          >
            <span
              aria-hidden="true"
              className="status-dot h-2 w-2 rounded-full bg-accent"
            />
            Open to collaborate
          </a>

          {/* GitHub */}
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Othman Imam on GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-[4px] border border-hairline text-text-2 transition-colors hover:border-accent/40 hover:text-accent"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-[4px] border border-hairline text-text md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              className="h-5 w-5"
              aria-hidden="true"
              focusable="false"
            >
              {open ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6 6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-hairline bg-ink/97 backdrop-blur-md md:hidden"
        >
          <ul className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[48px] items-center justify-between border-b border-hairline text-[0.75rem] uppercase tracking-[0.24em] text-text-2 transition-colors hover:text-accent"
                >
                  {link.label}
                  <span aria-hidden="true" className="text-accent">
                    →
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex min-h-[48px] items-center gap-2 text-[0.75rem] uppercase tracking-[0.24em] text-accent"
              >
                <span
                  aria-hidden="true"
                  className="status-dot h-2 w-2 rounded-full bg-accent"
                />
                Open to collaborate
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
