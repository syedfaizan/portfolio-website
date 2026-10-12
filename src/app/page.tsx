import Image from "next/image";
import Link from "next/link";
import personalInfo from "./personal-info.json";
import { SocialLinks } from "./components/social-links";

const facts = [
  { label: "Location", value: personalInfo.location },
  { label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  {
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/[^+\d]/g, "")}`,
  },
  { label: "Availability", value: "Open to offers" },
];

const featured = personalInfo.projects[0];
const restProjects = personalInfo.projects.slice(1);

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      {/* View switcher */}
      <div className="mb-10 flex justify-end">
        <p className="text-sm text-ink-soft">
          Prefer a list?{" "}
          <Link
            href="/list"
            className="font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent-deep"
          >
            Switch to the classic layout ↗
          </Link>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-6">
        {/* Hero */}
        <section className="panel p-8 md:col-span-4 md:p-10">
          <p className="font-label inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink-soft">
            <span className="h-1.5 w-1.5 bg-accent" />
            Available for new opportunities
          </p>
          <h1 className="mt-6 font-heading text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Hi, I&apos;m {personalInfo.name}.
          </h1>
          <p className="mt-2 font-label text-sm uppercase tracking-wide text-gradient-green">
            Tech Lead · React.js · Node.js · TypeScript
          </p>
          <p className="mt-5 text-sm leading-relaxed text-ink-soft">
            11.5 years building scalable web platforms for e-commerce, media,
            and enterprise clients — leading teams and driving architecture
            across the stack.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="#projects"
              className="btn-primary rounded-lg px-5 py-2.5 text-sm font-medium"
            >
              View my work
            </Link>
            <Link
              href="#contact"
              className="btn-outline rounded-lg px-5 py-2.5 text-sm font-medium"
            >
              Get in touch
            </Link>
          </div>

          <div className="mt-9 border-t border-line pt-6">
            <SocialLinks />
          </div>
        </section>

        {/* Photo */}
        <div className="panel overflow-hidden md:col-span-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[15px]">
            <Image
              src="/headshot.webp"
              alt={`Portrait of ${personalInfo.name}`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="p-5">
            <p className="font-heading text-lg font-semibold text-ink">
              {personalInfo.name}
            </p>
            <p className="mt-1 font-label text-[11px] uppercase tracking-wide text-muted">
              Technical Lead · Building scalable web experiences
            </p>
          </div>
        </div>

        {/* About */}
        <section id="about" className="panel p-8 md:col-span-4">
          <p className="font-label text-xs uppercase tracking-[0.25em] text-accent">
            About
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            Technical Lead specialising in full-stack JavaScript development
            with deep expertise in React.js, TypeScript, Next.js, and Node.js.
            Proven track record of leading engineering teams and delivering
            production-grade solutions for media and e-commerce clients across
            the UAE and India.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Currently driving technical direction at NuLogic for a major UAE
            retail client, having previously led the Ads library at Condé Nast
            (Vogue, Wired, GQ) and built e-commerce platforms at Raena.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {personalInfo.softSkills.map((skill) => (
              <span
                key={skill}
                className="chip font-label rounded-md px-2.5 py-1 text-[11px] uppercase tracking-wide"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Quick facts */}
        <div className="panel p-8 md:col-span-2">
          <p className="font-label text-xs uppercase tracking-[0.25em] text-accent">
            Quick facts
          </p>
          <ul className="mt-4 space-y-3">
            {facts.map((fact) => (
              <li key={fact.label} className="text-sm">
                <p className="font-label text-[11px] uppercase tracking-wide text-muted">
                  {fact.label}
                </p>
                {fact.href ? (
                  <a
                    href={fact.href}
                    className="mt-0.5 block break-all font-medium text-ink transition-colors hover:text-accent"
                  >
                    {fact.value}
                  </a>
                ) : (
                  <p className="mt-0.5 font-medium text-ink">{fact.value}</p>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="panel p-8 md:col-span-2">
          <p className="font-label text-xs uppercase tracking-[0.25em] text-accent">
            Tech stack
          </p>
          <div className="mt-4 space-y-4">
            {personalInfo.skills.map((group) => (
              <div key={group.category}>
                <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-1">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="chip font-label rounded-md px-2 py-0.5 text-[11px]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <section id="projects" className="md:col-span-4">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <p className="font-label text-xs uppercase tracking-[0.25em] text-accent">
              Work
            </p>
            <Link
              href="#contact"
              className="font-label text-xs text-ink-soft transition-colors hover:text-accent"
            >
              Have a project in mind? ↗
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Featured project spans the full width */}
            <article className="panel panel-hover group col-span-1 p-6 sm:col-span-2 sm:p-8">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-heading text-xl font-semibold tracking-tight text-ink">
                  {featured.title}
                </h3>
                <span className="gradient-green shrink-0 rounded-md px-2 py-0.5 font-label text-[10px] uppercase tracking-wide text-white">
                  Featured
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {featured.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="chip font-label rounded-md px-2.5 py-1 text-[11px] uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {featured.link !== "#" && (
                <Link
                  href={featured.link}
                  className="mt-5 inline-flex items-center gap-1.5 font-label text-xs font-medium text-accent transition-colors hover:text-accent-deep"
                >
                  Visit rivolishop.com
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </Link>
              )}
            </article>

            {restProjects.map((project) => (
              <article
                key={project.title}
                className="panel panel-hover group flex flex-col p-6"
              >
                <h3 className="font-heading text-lg font-semibold tracking-tight text-ink">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-ink-soft">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="chip font-label rounded-md px-2 py-0.5 text-[11px] uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="resume" className="md:col-span-4">
          <div className="mb-4">
            <p className="font-label text-xs uppercase tracking-[0.25em] text-accent">
              Career
            </p>
            <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-ink">
              Experience
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {personalInfo.experience.map((job, i) => (
              <div
                key={`${job.role}-${job.period}`}
                className={`panel panel-hover p-6 ${i === 0 ? "sm:col-span-2 sm:p-7" : ""}`}
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm font-semibold text-ink">
                    {job.role}
                    <span className="ml-2 font-normal text-ink-soft">
                      · {job.company.split("\n")[0]}
                    </span>
                  </p>
                  <span className="font-label w-fit shrink-0 text-[11px] text-muted">
                    {job.period}
                  </span>
                </div>
                {job.company.includes("\n") && (
                  <p className="mt-1.5 text-xs font-medium text-accent">
                    {job.company.split("\n").slice(1).join(" ")}
                  </p>
                )}
                <ul className="mt-3 space-y-1.5 text-[13px] leading-relaxed text-ink-soft">
                  {job.achievements.slice(0, i === 0 ? 3 : 2).map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-accent/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Publications */}
        <div className="panel p-8 md:col-span-2">
          <p className="font-label text-xs uppercase tracking-[0.25em] text-accent">
            Background
          </p>
          {personalInfo.education.map((edu) => (
            <div key={edu.degree} className="mt-4">
              <p className="font-label text-[11px] uppercase tracking-wide text-muted">
                Education
              </p>
              <p className="mt-1 text-sm font-semibold text-ink">
                {edu.degree}
              </p>
              <p className="text-xs text-ink-soft">
                {edu.institution} · {edu.year}
              </p>
            </div>
          ))}
          <div className="mt-5 border-t border-line pt-5">
            <p className="font-label text-[11px] uppercase tracking-wide text-muted">
              Publications
            </p>
            <ul className="mt-2 space-y-2">
              {personalInfo.publications.map((pub) => (
                <li key={pub.title} className="text-xs">
                  <p className="font-medium text-ink">{pub.title}</p>
                  <p className="text-ink-soft">
                    {pub.journal ?? pub.description} · {pub.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <section
          id="contact"
          className="panel relative p-10 text-center md:col-span-6 md:p-14"
        >
          <span
            aria-hidden
            className="gradient-green absolute inset-x-0 top-0 h-[3px] rounded-t-[15px]"
          />
          <p className="font-label text-xs uppercase tracking-[0.25em] text-accent">
            Contact
          </p>
          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Let&apos;s build something great
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
            Currently open to new opportunities. Whether you need a technical
            lead or a hands-on engineer, I&apos;d love to hear from you.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-primary rounded-lg px-6 py-3 text-sm font-medium"
            >
              {personalInfo.email}
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/[^+\d]/g, "")}`}
              className="btn-outline rounded-lg px-6 py-3 text-sm font-medium"
            >
              {personalInfo.phone}
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}