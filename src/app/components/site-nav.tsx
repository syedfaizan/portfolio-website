"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#resume", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const pathname = usePathname();
  const isGrid = pathname === "/";
  const isList = pathname === "/list";

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-line bg-paper">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="group flex shrink-0 items-center gap-2">
          <span className="font-heading text-lg font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
            Syed Faizan<span className="text-accent">.</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 text-sm md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-ink-soft transition-colors hover:bg-card hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* View toggle */}
          <div className="flex items-center gap-0.5 rounded-lg border border-line p-0.5 font-label text-[11px]">
            <Link
              href="/"
              aria-current={isGrid ? "page" : undefined}
              className={
                isGrid
                  ? "rounded-md bg-ink px-2.5 py-1 text-paper"
                  : "rounded-md px-2.5 py-1 text-ink-soft transition-colors hover:text-ink"
              }
            >
              Grid
            </Link>
            <Link
              href="/list"
              aria-current={isList ? "page" : undefined}
              className={
                isList
                  ? "rounded-md bg-ink px-2.5 py-1 text-paper"
                  : "rounded-md px-2.5 py-1 text-ink-soft transition-colors hover:text-ink"
              }
            >
              List
            </Link>
          </div>

          <a
            href="#contact"
            className="btn-primary hidden rounded-lg px-3.5 py-1.5 text-xs font-medium sm:inline-flex"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}