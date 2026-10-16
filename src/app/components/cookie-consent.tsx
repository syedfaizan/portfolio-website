"use client";

import Link from "next/link";
import { clearConsent, setConsent, useConsent } from "@/lib/consent";

export function CookieConsent() {
  const consent = useConsent();

  // No decision yet → show the banner. `null` also covers the pre-hydration
  // render on both the server and the client, so there is no flash mismatch.
  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-3 bottom-16 z-50 md:inset-x-auto md:bottom-4 md:right-4 md:max-w-md"
    >
      <div className="panel p-5 shadow-lg">
        <p className="font-label text-[11px] uppercase tracking-[0.18em] text-accent">
          Cookies
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          I use cookies for anonymous analytics to see which parts of this site
          are useful. You can accept or decline — declining keeps analytics off.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setConsent("granted")}
            className="btn-primary rounded-lg px-4 py-2 text-sm font-medium"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => setConsent("denied")}
            className="btn-outline rounded-lg px-4 py-2 text-sm font-medium"
          >
            Decline
          </button>
          <Link
            href="/contact"
            className="font-label text-xs text-ink-soft underline decoration-line underline-offset-4 transition-colors hover:text-accent"
          >
            Questions?
          </Link>
        </div>
      </div>
    </div>
  );
}

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => clearConsent()}
      className="transition-colors hover:text-accent"
    >
      Cookie settings
    </button>
  );
}
