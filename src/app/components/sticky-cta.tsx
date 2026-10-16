"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import personalInfo from "../personal-info.json";

export function StickyCta() {
  const pathname = usePathname();

  // These pages already centre on getting in touch.
  if (pathname === "/contact" || pathname === "/thank-you") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2">
        <div className="min-w-0 flex-1">
          <p className="truncate font-label text-[10px] uppercase tracking-[0.18em] text-accent">
            Open to work
          </p>
          <p className="truncate text-xs text-ink-soft">
            Let&apos;s talk about your team
          </p>
        </div>
        <a
          href={`mailto:${personalInfo.email}`}
          aria-label={`Email ${personalInfo.name}`}
          className="btn-outline shrink-0 rounded-lg px-3 py-2 text-xs font-medium"
        >
          Email
        </a>
        <Link
          href="/contact"
          className="btn-primary shrink-0 rounded-lg px-4 py-2 text-xs font-medium"
        >
          Hire me
        </Link>
      </div>
    </div>
  );
}
