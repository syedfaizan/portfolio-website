import type { Metadata } from "next";
import Link from "next/link";
import personalInfo from "../personal-info.json";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Message received",
  description:
    "Thanks for reaching out — I'll get back to you within 24 hours.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/thank-you" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/thank-you`,
    siteName: `${personalInfo.name} — Portfolio`,
    title: "Message received",
    description: "Thanks for reaching out — I'll get back to you within 24 hours.",
  },
};

export default function ThankYouPage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-20 text-center sm:px-6 md:py-28">
      <span
        aria-hidden
        className="gradient-green flex h-14 w-14 items-center justify-center rounded-full text-2xl text-white"
      >
        ✓
      </span>
      <h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight text-ink md:text-5xl">
        Thanks — message received
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
        I&apos;ll get back to you within 24 hours (usually much sooner). In the
        meantime, feel free to connect or explore my work.
      </p>

      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="btn-primary rounded-lg px-6 py-3 text-sm font-medium"
        >
          Back to portfolio
        </Link>
        <a
          href={personalInfo.linkedin}
          className="btn-outline rounded-lg px-6 py-3 text-sm font-medium"
        >
          Connect on LinkedIn
        </a>
      </div>

      <p className="mt-10 text-xs text-muted">
        Need to add something? Email{" "}
        <a
          href={`mailto:${personalInfo.email}`}
          className="font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:text-accent-deep"
        >
          {personalInfo.email}
        </a>
      </p>
    </div>
  );
}
