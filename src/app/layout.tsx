import type { Metadata } from "next";
import "./globals.css";
import personalInfo from "./personal-info.json";
import { CurrentYear } from "./components/current-year";
import { GoogleAnalytics } from "./components/google-analytics";
import { SiteNav } from "./components/site-nav";

export const metadata: Metadata = {
  title: `${personalInfo.name} — Tech Lead | React.js, Node.js, TypeScript`,
  description:
    "Technical Lead with 11.5 years of experience building scalable, high-performance web applications with React.js, Next.js, TypeScript, and Node.js.",
  keywords: [
    "tech lead",
    "react",
    "next.js",
    "typescript",
    "node.js",
    "graphql",
    "frontend",
    "full-stack",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-paper text-stone-700 antialiased">
        <div className="flex min-h-screen flex-col">
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
                © <CurrentYear /> {personalInfo.name} · Built with Next.js &amp;
                Tailwind CSS
              </p>
            </div>
          </footer>
        </div>

        {process.env.NODE_ENV === "production" && <GoogleAnalytics />}
      </body>
    </html>
  );
}