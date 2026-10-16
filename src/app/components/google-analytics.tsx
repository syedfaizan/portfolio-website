"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  // The initial page view is sent automatically by `gtag('config', ...)`.
  // For App Router client-side navigations the config is not re-run, so send
  // a `page_view` event manually on every route change.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    window.gtag?.("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

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
gtag('config', '${GA_MEASUREMENT_ID}');`}
      </Script>
    </>
  );
}
