import Link from "next/link";
import personalInfo from "../personal-info.json";
import { SectionHeading } from "../components/section-heading";
import { SocialLinks } from "../components/social-links";

export default function ListPage() {
  return (
    <div className="space-y-24 pt-10 md:space-y-32 md:pt-16">
      {/* View switcher */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex justify-end">
          <p className="text-sm text-ink-soft">
            Prefer a grid?{" "}
            <Link
              href="/"
              className="font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent-deep"
            >
              Switch to the grid layout ↗
            </Link>
          </p>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6">
        <div className="max-w-3xl">
          <p className="font-label inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ink-soft">
            <span className="h-1.5 w-1.5 bg-accent" />
            Available for new opportunities
          </p>
          <h1 className="mt-7 font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
            Tech Lead building{" "}
            <span className="text-gradient-green italic">scalable web experiences</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            11.5 years crafting high-performance platforms with React.js,
            Next.js, TypeScript, and Node.js — leading teams and driving
            architecture for e-commerce, media, and enterprise clients.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="#projects"
              className="btn-primary rounded-lg px-6 py-3 text-sm font-medium"
            >
              View my work
            </Link>
            <Link
              href="#contact"
              className="btn-outline rounded-lg px-6 py-3 text-sm font-medium"
            >
              Get in touch
            </Link>
          </div>

          <div className="mt-12 border-t border-line pt-8">
            <SocialLinks />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl scroll-mt-24 px-6">
        <SectionHeading eyebrow="About" title="A little about me" />
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="panel p-8 lg:col-span-3">
            <p className="text-[15px] leading-relaxed text-stone-700">
              Technical Lead specialising in full-stack JavaScript development
              with deep expertise in React.js, TypeScript, Next.js, and Node.js.
              Proven track record of leading engineering teams and delivering
              production-grade solutions for media and e-commerce clients across
              the UAE and India.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-stone-700">
              Currently driving technical direction at NuLogic for a major UAE
              retail client, having previously led the Ads library at Condé Nast
              (serving Vogue, Wired, GQ) and built scalable e-commerce platforms
              at Raena and Team Pumpkin.
            </p>

            <div className="mt-7 border-t border-line pt-6">
              <p className="font-label text-[11px] uppercase tracking-[0.18em] text-muted">
                Often found
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {personalInfo.softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="chip font-label rounded-md px-2.5 py-1 text-[11px] uppercase tracking-wide"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="panel p-8 lg:col-span-2">
            <p className="font-label text-[11px] uppercase tracking-[0.18em] text-muted">
              Tech stack
            </p>
            <div className="mt-5 space-y-5">
              {personalInfo.skills.map((group) => (
                <div
                  key={group.category}
                  className="border-b border-line pb-4 last:border-0 last:pb-0"
                >
                  <p className="mb-2.5 text-xs font-semibold text-ink">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
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
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-5xl scroll-mt-24 px-6">
        <SectionHeading eyebrow="Selected work" title="Featured work" />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {personalInfo.projects.map((project) => (
            <article
              key={project.title}
              className="panel panel-hover group flex flex-col p-7"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="font-heading text-xl font-semibold tracking-tight text-ink">
                  {project.title}
                </h3>
                <span className="mt-1.5 h-2 w-2 shrink-0 bg-accent" />
              </div>
              <p className="flex-1 text-sm leading-relaxed text-ink-soft">
                {project.description}
              </p>
              <div className="mb-5 mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="chip font-label rounded-md px-2.5 py-1 text-[11px] uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link !== "#" && (
                <Link
                  href={project.link}
                  className="inline-flex items-center gap-1.5 font-label text-xs font-medium text-accent transition-colors hover:text-accent-deep"
                >
                  View project
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="resume" className="mx-auto max-w-4xl scroll-mt-24 px-6">
        <SectionHeading eyebrow="Career" title="Experience" />
        <div className="relative mt-12">
          <span
            aria-hidden
            className="absolute bottom-2 left-2 top-1 w-[2px] bg-line"
          />
          <div className="space-y-8">
            {personalInfo.experience.map((job) => (
              <div
                key={`${job.role}-${job.period}`}
                className="relative pl-12"
              >
                <span
                  aria-hidden
                  className="absolute left-[1px] top-2 h-4 w-4 rounded-full border-[3px] border-paper bg-accent"
                />
                <div className="panel p-6">
                  <div className="mb-1.5 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-base font-semibold text-ink">
                      {job.role}
                    </h3>
                    <span className="font-label w-fit text-[11px] text-muted">
                      {job.period}
                    </span>
                  </div>
                  <p className="mb-4 whitespace-pre-line text-sm font-medium text-accent">
                    {job.company}
                  </p>
                  <ul className="space-y-2 text-sm leading-relaxed text-ink-soft">
                    {job.achievements.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-accent/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Publications */}
      <section className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Background" title="Education & recognition" />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="panel p-7">
            <p className="font-label text-[11px] uppercase tracking-[0.18em] text-muted">
              Education
            </p>
            <div className="mt-4 space-y-5">
              {personalInfo.education.map((edu, i) => (
                <div
                  key={edu.degree}
                  className={i > 0 ? "border-t border-line pt-5" : ""}
                >
                  <h3 className="font-heading text-lg font-semibold text-ink">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft">
                    {edu.institution} · {edu.year}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-7">
            <p className="font-label text-[11px] uppercase tracking-[0.18em] text-muted">
              Publications
            </p>
            <ul className="mt-4 space-y-3">
              {personalInfo.publications.map((pub) => (
                <li key={pub.title} className="text-sm">
                  <p className="font-medium text-ink">{pub.title}</p>
                  <p className="mt-0.5 text-ink-soft">
                    {pub.journal ?? pub.description} · {pub.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-4xl scroll-mt-24 px-6">
        <div className="panel relative p-10 text-center md:p-14">
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
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-ink-soft">
            Currently open to new opportunities and interesting challenges.
            Whether you need a technical lead or a hands-on engineer, I&apos;d
            love to hear from you.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-primary rounded-lg px-6 py-3 text-sm font-medium"
            >
              {personalInfo.email}
            </a>
            {personalInfo.phone && (
              <a
                href={`tel:${personalInfo.phone.replace(/[^+\d]/g, "")}`}
                className="btn-outline rounded-lg px-6 py-3 text-sm font-medium"
              >
                {personalInfo.phone}
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}