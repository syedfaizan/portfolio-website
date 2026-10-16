"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import personalInfo from "../personal-info.json";
import { WEB3FORMS_ACCESS_KEY } from "@/lib/site";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

type Status = "idle" | "submitting" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const errors: FieldErrors = {};
    if (!name) {
      errors.name = "Please tell me your name.";
    }
    if (!email) {
      errors.email = "Please add an email so I can reply.";
    } else if (!EMAIL_PATTERN.test(email)) {
      errors.email = "That email doesn't look right — please check it.";
    }
    if (message.length < 10) {
      errors.message = "Please add a little more detail (at least 10 characters).";
    }

    setFieldErrors(errors);
    setFormError("");

    if (Object.keys(errors).length > 0) {
      const firstInvalid = form.querySelector<HTMLElement>("[aria-invalid='true']");
      firstInvalid?.focus();
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      setFormError(
        "The form isn't connected yet. Please email me directly at " +
          personalInfo.email +
          "."
      );
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New enquiry from ${name} — syedfaizan.dev`,
          from_name: "syedfaizan.dev",
          replyto: email,
          name,
          email,
          company,
          message,
        }),
      });

      const result = (await response.json().catch(() => null)) as
        | { success?: boolean; message?: string }
        | null;

      if (!response.ok || !result?.success) {
        throw new Error(result?.message ?? "Something went wrong.");
      }

      router.push("/thank-you");
    } catch (error) {
      setStatus("error");
      setFormError(
        error instanceof Error && error.message
          ? `${error.message} Please try again, or email ${personalInfo.email} directly.`
          : `Something went wrong. Please try again, or email ${personalInfo.email} directly.`
      );
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-busy={isSubmitting}
      className="text-left"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="font-label text-[11px] uppercase tracking-[0.18em] text-muted"
          >
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            disabled={isSubmitting}
            aria-invalid={fieldErrors.name ? "true" : undefined}
            aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
            placeholder="Your name"
            className={`mt-2 w-full rounded-lg border bg-card px-3.5 py-2.5 text-sm text-ink transition-colors placeholder:text-muted focus:outline-none focus:ring-2 disabled:opacity-60 ${
              fieldErrors.name
                ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
                : "border-line focus:border-accent focus:ring-accent/20"
            }`}
          />
          {fieldErrors.name && (
            <p
              id="contact-name-error"
              role="alert"
              className="mt-1.5 text-xs font-medium text-red-600"
            >
              {fieldErrors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="font-label text-[11px] uppercase tracking-[0.18em] text-muted"
          >
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            disabled={isSubmitting}
            aria-invalid={fieldErrors.email ? "true" : undefined}
            aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
            placeholder="you@company.com"
            className={`mt-2 w-full rounded-lg border bg-card px-3.5 py-2.5 text-sm text-ink transition-colors placeholder:text-muted focus:outline-none focus:ring-2 disabled:opacity-60 ${
              fieldErrors.email
                ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
                : "border-line focus:border-accent focus:ring-accent/20"
            }`}
          />
          {fieldErrors.email && (
            <p
              id="contact-email-error"
              role="alert"
              className="mt-1.5 text-xs font-medium text-red-600"
            >
              {fieldErrors.email}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="contact-company"
          className="font-label text-[11px] uppercase tracking-[0.18em] text-muted"
        >
          Company or role <span className="text-muted">(optional)</span>
        </label>
        <input
          id="contact-company"
          name="company"
          type="text"
          autoComplete="organization"
          disabled={isSubmitting}
          placeholder="Where are you hiring from?"
          className="mt-2 w-full rounded-lg border border-line bg-card px-3.5 py-2.5 text-sm text-ink transition-colors placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:opacity-60"
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="contact-message"
          className="font-label text-[11px] uppercase tracking-[0.18em] text-muted"
        >
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          disabled={isSubmitting}
          aria-invalid={fieldErrors.message ? "true" : undefined}
          aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
          placeholder="Tell me about the role, project or team…"
          className={`mt-2 w-full resize-y rounded-lg border bg-card px-3.5 py-2.5 text-sm text-ink transition-colors placeholder:text-muted focus:outline-none focus:ring-2 disabled:opacity-60 ${
            fieldErrors.message
              ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
              : "border-line focus:border-accent focus:ring-accent/20"
          }`}
        />
        {fieldErrors.message && (
          <p
            id="contact-message-error"
            role="alert"
            className="mt-1.5 text-xs font-medium text-red-600"
          >
            {fieldErrors.message}
          </p>
        )}
      </div>

      {/* Honeypot — hidden from humans, filled by basic bots. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      {status === "error" && formError && (
        <p
          role="alert"
          className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-xs font-medium text-red-700"
        >
          {formError}
        </p>
      )}

      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full rounded-lg px-6 py-3 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <span
                aria-hidden
                className="mr-2 h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/40 border-t-white"
              />
              Sending…
            </>
          ) : (
            "Send message"
          )}
        </button>
        <p className="text-xs text-muted">
          Replies usually within 24 hours. No spam, ever.
        </p>
      </div>
    </form>
  );
}
