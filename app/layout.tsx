import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Othman Imam — Smart Contracts · Backend Systems · Open Source",
  description:
    "Personal site of Othman Imam — smart-contract engineer on Stellar/Soroban and backend systems engineer in TypeScript/NestJS. Open-source work, reviewed and merged: 342 merged PRs across 167 public repos since May 2024.",
  openGraph: {
    title: "Othman Imam — Smart Contracts · Backend Systems · Open Source",
    description:
      "Specify it. Implement it. Document it. Prove it with tests. Smart contracts on Stellar/Soroban and backend systems in TypeScript/NestJS — open source, review-ready.",
    type: "website",
    siteName: "Othman Imam",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="grain min-h-full bg-ink font-mono text-text">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[4px] focus:border focus:border-accent/40 focus:bg-accent focus:px-5 focus:py-3 focus:font-mono focus:text-[0.75rem] focus:font-bold focus:uppercase focus:tracking-[0.16em] focus:text-ink"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
