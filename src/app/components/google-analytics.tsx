"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useConsent } from "@/lib/consent";

/** Google Analytics 4 (GA4) measurement ID. */
export const GA_MEASUREMENT_ID = "G-CTETS7GMPN";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: string,
      target: string | Date,
      params?: Record<string, unknown>
    ) => void;
  }
}

export function GoogleAnalytics() {
  const consent = useConsent();
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  // Nothing is loaded until analytics is explicitly accepted.
  // The initial page view is sent automatically by `gtag('config', ...)`; App
  // Router client-side navigations need a manual `page_view` event.
  useEffect(() => {
    if (consent !== "granted") return;

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    window.gtag?.("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [consent, pathname]);

  if (consent !== "granted") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });`}
      </Script>
    </>
  );
}
