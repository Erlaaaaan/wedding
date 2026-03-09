"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header
      className="py-4 px-6 sticky top-0 z-50 shadow-sm relative overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, rgba(245,218,167,0.95) 0%, rgba(245,230,232,0.90) 45%, rgba(245,218,167,0.95) 100%)",
        borderBottom: "1px solid rgba(158, 28, 96, 0.15)",
      }}
    >
      {/* Floral line-art background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute -left-10 -top-10 w-48 h-48 opacity-[0.22]"
          viewBox="0 0 120 120"
        >
          <g
            fill="none"
            stroke="#9E1C60"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 70 C15 45, 30 30, 55 25 C45 35, 40 50, 48 65 C38 62, 28 64, 20 70 Z" />
            <path d="M55 25 C70 20, 90 28, 95 45 C86 38, 74 36, 62 42 C64 32, 60 28, 55 25 Z" />
            <path d="M48 65 C60 78, 82 86, 102 78 C88 76, 76 68, 70 56 C64 64, 57 66, 48 65 Z" />
            <circle cx="58" cy="55" r="4" />
            <path d="M14 86 C32 78, 42 90, 52 104" />
            <path d="M22 92 C34 88, 42 98, 48 110" />
          </g>
        </svg>
        <svg
          className="absolute -right-10 -top-12 w-52 h-52 opacity-[0.18]"
          viewBox="0 0 120 120"
        >
          <g
            fill="none"
            stroke="#811844"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M100 60 C92 40, 72 30, 50 34 C62 42, 72 56, 70 72 C80 70, 92 66, 100 60 Z" />
            <path d="M50 34 C35 36, 22 50, 24 66 C30 58, 40 54, 52 58 C50 48, 49 40, 50 34 Z" />
            <path d="M70 72 C62 90, 44 102, 24 96 C38 92, 52 82, 56 68 C60 72, 64 74, 70 72 Z" />
            <circle cx="56" cy="60" r="3.5" />
          </g>
        </svg>
        <svg
          className="absolute -left-12 -bottom-16 w-60 h-60 opacity-[0.14]"
          viewBox="0 0 120 120"
        >
          <g
            fill="none"
            stroke="#9E1C60"
            strokeWidth="0.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 70 C40 55, 55 75, 70 102" />
            <path d="M30 78 C46 70, 58 86, 66 108" />
            <path d="M44 64 C48 54, 62 46, 76 52 C66 54, 58 60, 56 70 C52 66, 48 64, 44 64 Z" />
          </g>
        </svg>
        <svg
          className="absolute -right-14 -bottom-16 w-60 h-60 opacity-[0.12]"
          viewBox="0 0 120 120"
        >
          <g
            fill="none"
            stroke="#811844"
            strokeWidth="0.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M102 70 C80 55, 65 75, 50 102" />
            <path d="M90 78 C74 70, 62 86, 54 108" />
            <path d="M76 64 C72 54, 58 46, 44 52 C54 54, 62 60, 64 70 C68 66, 72 64, 76 64 Z" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <Link
          href="/#hero"
          className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-center hover:opacity-90 transition-opacity"
          style={{ color: "#9E1C60" }}
        >
          Erlan Justin & Andrea&apos;s Wedding
        </Link>
      </div>
      {/* Mobile Menu Button - positioned absolute so title stays centered */}
      <button
        className="md:hidden absolute right-6 top-1/2 -translate-y-1/2"
        style={{ color: "#9E1C60" }}
        aria-label="Menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
}
