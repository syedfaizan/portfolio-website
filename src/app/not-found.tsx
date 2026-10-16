import type { Metadata } from "next";
import Link from "next/link";
import personalInfo from "./personal-info.json";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "That page doesn't exist. Head back to the portfolio to see Syed Faizan's work, experience and contact details.",
};

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-20 text-center sm:px-6 md:py-28">
      <p className="font-label text-xs uppercase tracking-[0.25em] text-accent">
        404
      </p>
      <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-ink md:text-5xl">
        This page took a wrong turn
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
        The link may be broken, or the page may have moved. Here&apos;s the way
        back.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="btn-primary rounded-lg px-6 py-3 text-sm font-medium"
        >
          Back to home
        </Link>
        <Link
          href="/list"
          className="btn-outline rounded-lg px-6 py-3 text-sm font-medium"
        >
          Classic layout
        </Link>
        <Link
          href="/contact"
          className="btn-outline rounded-lg px-6 py-3 text-sm font-medium"
        >
          Get in touch
        </Link>
      </div>

      <p className="mt-10 text-xs text-muted">
        Or email{" "}
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
