"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteNav() {
  const pathname = usePathname();
  const isGrid = pathname === "/";
  const isList = pathname === "/list";

  // The section anchors only exist on the two portfolio layouts, so from any
  // other page they have to point back home first.
  const sectionHref = (hash: string) => (isGrid || isList ? hash : `/${hash}`);

  const navLinks = [
    { href: sectionHref("#about"), label: "About" },
    { href: sectionHref("#projects"), label: "Work" },
    { href: sectionHref("#resume"), label: "Experience" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-line bg-paper">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="group flex shrink-0 items-center gap-2">
          <Image
            src="/logo.png"
            alt="Syed Faizan logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-sm"
            priority
          />
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

          <Link
            href="/contact"
            className="btn-primary hidden rounded-lg px-3.5 py-1.5 text-xs font-medium sm:inline-flex"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </nav>
  );
}