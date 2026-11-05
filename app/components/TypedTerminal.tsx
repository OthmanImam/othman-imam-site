"use client";

import { useEffect, useState } from "react";

type LineKind = "cmd" | "out" | "ok";

type TerminalLine = {
  kind: LineKind;
  text: string;
};

const SCRIPT: TerminalLine[] = [
  { kind: "cmd", text: "$ ship --it --right" },
  { kind: "out", text: "spec      → scoped, edge cases named" },
  { kind: "out", text: "build     → typed, documented in-PR" },
  { kind: "out", text: "test      → snapshots green" },
  { kind: "ok", text: "✓ merged — 342 and counting" },
];

const LAST = SCRIPT.length - 1;
const CHAR_MS = 26;
const LINE_PAUSE_MS = 240;

export default function TypedTerminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const done =
    lineIndex === LAST && charCount >= SCRIPT[LAST].text.length;

  const transcript = SCRIPT.map((line) => line.text).join("\n");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const t = window.setTimeout(() => {
        setLineIndex(LAST);
        setCharCount(SCRIPT[LAST].text.length);
      }, 0);
      return () => window.clearTimeout(t);
    }

    const current = SCRIPT[lineIndex];

    if (charCount < current.text.length) {
      const t = window.setTimeout(() => setCharCount((c) => c + 1), CHAR_MS);
      return () => window.clearTimeout(t);
    }

    if (lineIndex < LAST) {
      const t = window.setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharCount(0);
      }, LINE_PAUSE_MS);
      return () => window.clearTimeout(t);
    }
  }, [lineIndex, charCount]);

  return (
    <div className="w-full overflow-hidden rounded-md border border-hairline-teal bg-[#0a1a20]/90 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur-sm">
      {/* Completed transcript is announced once, politely — typing is not */}
      <div role="status" aria-live="polite" className="sr-only">
        {done ? transcript : ""}
      </div>

      {/* Animated visual — hidden from assistive tech */}
      <div aria-hidden="true">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-hairline px-4 py-2.5">
        <span aria-hidden="true" className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </span>
        <span className="mx-auto text-[0.62rem] uppercase tracking-[0.28em] text-muted">
          othman@ledger — zsh
        </span>
        <span aria-hidden="true" className="w-8" />
      </div>

      {/* Body */}
      <div className="min-h-[10.5rem] px-4 py-4 text-[0.72rem] leading-6 sm:text-[0.78rem]">
        {SCRIPT.map((line, i) => {
          if (i > lineIndex) return null;
          const text =
            i === lineIndex ? line.text.slice(0, charCount) : line.text;
          const color =
            line.kind === "cmd"
              ? "text-accent"
              : line.kind === "ok"
                ? "text-accent"
                : "text-text-2";
          return (
            <p key={i} className={`whitespace-pre-wrap ${color}`}>
              {text}
              {i === lineIndex && !done && (
                <span
                  aria-hidden="true"
                  className="caret ml-0.5 inline-block h-[0.9em] w-[0.5em] translate-y-[0.12em] bg-accent align-baseline"
                />
              )}
            </p>
          );
        })}
        {done && (
          <p className="text-muted">
            <span
              aria-hidden="true"
              className="caret ml-0.5 inline-block h-[0.9em] w-[0.5em] translate-y-[0.12em] bg-muted align-baseline"
            />
          </p>
        )}
      </div>
      </div>
    </div>
  );
}
