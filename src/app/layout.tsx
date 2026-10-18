import type { Metadata } from "next";
import "./globals.css";
import personalInfo from "./personal-info.json";
import { CurrentYear } from "./components/current-year";
import { GoogleAnalytics } from "./components/google-analytics";
import { SiteNav } from "./components/site-nav";
import { StickyCta } from "./components/sticky-cta";
import { SITE_URL } from "@/lib/site";

const siteTitle = `${personalInfo.name} — Tech Lead | React.js, Node.js, TypeScript`;
const siteDescription =
  "Technical Lead with 11.5 years of experience building scalable, high-performance web applications with React.js, Next.js, TypeScript, and Node.js.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteTitle,
    template: `%s | ${personalInfo.name}`,
  },
  description: siteDescription,
  keywords: [
    "tech lead",
    "react",
    "next.js",
    "typescript",
    "node.js",
    "graphql",
    "frontend",
    "full-stack",
    "hire react developer",
    "remote tech lead",
  ],
  authors: [{ name: personalInfo.name, url: SITE_URL }],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: `${personalInfo.name} — Portfolio`,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  jobTitle: "Technical Lead",
  description: siteDescription,
  url: SITE_URL,
  email: `mailto:${personalInfo.email}`,
  telephone: personalInfo.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressCountry: "IN",
  },
  sameAs: [personalInfo.github, personalInfo.linkedin],
  knowsAbout: personalInfo.skills.flatMap((group) => group.items),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-paper text-stone-700 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />

        <div className="flex min-h-screen flex-col pb-20 md:pb-0">
          <header>
            <SiteNav />
          </header>

          <main id="top" className="flex-1 pt-16">
            {children}
          </main>

          <footer className="mt-24 border-t border-line">
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 px-6 py-10">
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-label text-xs text-ink-soft">
                <a
                  href={personalInfo.github}
                  className="transition-colors hover:text-accent"
                >
                  GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  className="transition-colors hover:text-accent"
                >
                  LinkedIn
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="transition-colors hover:text-accent"
                >
                  Email
                </a>
                <a
                  href={personalInfo.website}
                  className="transition-colors hover:text-accent"
                >
                  syedfaizan.dev
                </a>
              </div>

              <p className="text-xs text-muted">
                {personalInfo.location} · Available for remote and on-site roles
              </p>



              <p className="text-xs text-muted">
                © <CurrentYear /> {personalInfo.name} · Built with Next.js &amp;
                Tailwind CSS
              </p>
            </div>
          </footer>
        </div>

        <StickyCta />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
