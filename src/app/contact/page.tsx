import type { Metadata } from "next";
import personalInfo from "../personal-info.json";
import { ContactForm } from "../components/contact-form";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Hire Syed Faizan — Technical Lead with 11+ years in React.js, Next.js, TypeScript and Node.js. Available for senior and lead roles; replies within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/contact`,
    siteName: `${personalInfo.name} — Portfolio`,
    title: `Contact ${personalInfo.name}`,
    description:
      "Hire Syed Faizan — Technical Lead with 11+ years in React.js, Next.js, TypeScript and Node.js.",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
      <div className="panel relative p-6 sm:p-10">
        <span
          aria-hidden
          className="gradient-green absolute inset-x-0 top-0 h-[3px] rounded-t-[15px]"
        />

        <p className="font-label inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink-soft">
          <span className="h-1.5 w-1.5 bg-accent" />
          Available for new opportunities
        </p>
        <h1 className="mt-5 font-heading text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          Let&apos;s build something great
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft">
          Tell me about the role, team or project. I read every message and reply
          within 24 hours — or reach me directly using the details below.
        </p>

        <div className="mt-8">
          <ContactForm />
        </div>
      </div>

      <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="panel p-5">
          <dt className="font-label text-[11px] uppercase tracking-[0.18em] text-muted">
            Email
          </dt>
          <dd className="mt-1">
            <a
              href={`mailto:${personalInfo.email}`}
              className="break-all text-sm font-medium text-ink transition-colors hover:text-accent"
            >
              {personalInfo.email}
            </a>
          </dd>
        </div>
        <div className="panel p-5">
          <dt className="font-label text-[11px] uppercase tracking-[0.18em] text-muted">
            Phone
          </dt>
          <dd className="mt-1">
            <a
              href={`tel:${personalInfo.phone.replace(/[^+\d]/g, "")}`}
              className="text-sm font-medium text-ink transition-colors hover:text-accent"
            >
              {personalInfo.phone}
            </a>
          </dd>
        </div>
        <div className="panel p-5">
          <dt className="font-label text-[11px] uppercase tracking-[0.18em] text-muted">
            Based in
          </dt>
          <dd className="mt-1 text-sm font-medium text-ink">
            {personalInfo.location}
          </dd>
        </div>
      </dl>
    </div>
  );
}
