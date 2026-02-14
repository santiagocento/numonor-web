import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support | Numonor",
  description: "Get help with Numonor through our support email, contact form, and FAQ.",
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[var(--fds-neutral-bg-weaker)] px-6 py-[var(--fds-space-4xl)] text-[var(--fds-neutral-text-strong)]">
      <article className="mx-auto flex w-full max-w-3xl flex-col gap-[var(--fds-space-lg)]">
        <header className="flex flex-col gap-[var(--fds-space-xs)]">
          <h1 className="font-[var(--font-display)] text-[length:var(--fds-font-size-5xl)] leading-[var(--fds-line-2xl)] text-[var(--fds-primary-text-strong)]">
            Support
          </h1>
          <p className="text-[length:var(--fds-font-size-md)] text-[var(--fds-neutral-text-default)]">
            Need help? Contact us and we&apos;ll get back to you as soon as possible.
          </p>
        </header>

        <section className="flex flex-col gap-[var(--fds-space-sm)]">
          <h2 className="font-[var(--font-display)] text-[length:var(--fds-font-size-2xl)]">
            Support Email
          </h2>
          <p>
            For direct support, write to{" "}
            <a className="text-[var(--fds-primary-text-default)] underline" href="mailto:support@numonor.app">
              support@numonor.app
            </a>
            .
          </p>
        </section>

        <section className="flex flex-col gap-[var(--fds-space-sm)]">
          <h2 className="font-[var(--font-display)] text-[length:var(--fds-font-size-2xl)]">
            Contact Form
          </h2>
          <form className="flex flex-col gap-[var(--fds-space-md)] rounded-[var(--fds-radius-lg)] border border-[var(--fds-neutral-border-weak)] bg-[var(--fds-neutral-bg-weak)] p-[var(--fds-space-lg)]">
            <label className="flex flex-col gap-[var(--fds-space-xs)]">
              <span className="text-[length:var(--fds-font-size-sm)] text-[var(--fds-neutral-text-default)]">
                Name
              </span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="rounded-[var(--fds-radius-sm)] border border-[var(--fds-neutral-border-default)] bg-[var(--fds-neutral-bg-weaker)] px-[var(--fds-space-md)] py-[var(--fds-space-sm)] text-[length:var(--fds-font-size-md)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--fds-primary-border-default)]"
              />
            </label>

            <label className="flex flex-col gap-[var(--fds-space-xs)]">
              <span className="text-[length:var(--fds-font-size-sm)] text-[var(--fds-neutral-text-default)]">
                Email
              </span>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                className="rounded-[var(--fds-radius-sm)] border border-[var(--fds-neutral-border-default)] bg-[var(--fds-neutral-bg-weaker)] px-[var(--fds-space-md)] py-[var(--fds-space-sm)] text-[length:var(--fds-font-size-md)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--fds-primary-border-default)]"
              />
            </label>

            <label className="flex flex-col gap-[var(--fds-space-xs)]">
              <span className="text-[length:var(--fds-font-size-sm)] text-[var(--fds-neutral-text-default)]">
                Message
              </span>
              <textarea
                name="message"
                rows={5}
                placeholder="How can we help?"
                className="rounded-[var(--fds-radius-sm)] border border-[var(--fds-neutral-border-default)] bg-[var(--fds-neutral-bg-weaker)] px-[var(--fds-space-md)] py-[var(--fds-space-sm)] text-[length:var(--fds-font-size-md)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--fds-primary-border-default)]"
              />
            </label>

            <button
              type="submit"
              className="inline-flex w-fit items-center justify-center rounded-[var(--fds-radius-md)] border border-[var(--fds-primary-border-default)] bg-[var(--fds-primary-bg-default)] px-[var(--fds-space-lg)] py-[var(--fds-space-sm)] text-[length:var(--fds-font-size-md)] text-[var(--fds-neutral-bg-weaker)] transition hover:bg-[var(--fds-primary-bg-strong)]"
            >
              Send message
            </button>
          </form>
        </section>

        <section className="flex flex-col gap-[var(--fds-space-sm)]">
          <h2 className="font-[var(--font-display)] text-[length:var(--fds-font-size-2xl)]">FAQ</h2>
          <div className="flex flex-col gap-[var(--fds-space-sm)]">
            <details className="rounded-[var(--fds-radius-sm)] border border-[var(--fds-neutral-border-weak)] bg-[var(--fds-neutral-bg-weak)] px-[var(--fds-space-md)] py-[var(--fds-space-sm)]">
              <summary className="cursor-pointer font-medium">Is Numonor free to play?</summary>
              <p className="mt-[var(--fds-space-xs)] text-[var(--fds-neutral-text-default)]">
                Numonor can be downloaded for free. Some features may vary by platform.
              </p>
            </details>
            <details className="rounded-[var(--fds-radius-sm)] border border-[var(--fds-neutral-border-weak)] bg-[var(--fds-neutral-bg-weak)] px-[var(--fds-space-md)] py-[var(--fds-space-sm)]">
              <summary className="cursor-pointer font-medium">Where is my progress saved?</summary>
              <p className="mt-[var(--fds-space-xs)] text-[var(--fds-neutral-text-default)]">
                Your progress is stored on your device and can sync with iCloud if enabled.
              </p>
            </details>
            <details className="rounded-[var(--fds-radius-sm)] border border-[var(--fds-neutral-border-weak)] bg-[var(--fds-neutral-bg-weak)] px-[var(--fds-space-md)] py-[var(--fds-space-sm)]">
              <summary className="cursor-pointer font-medium">How long does support take to reply?</summary>
              <p className="mt-[var(--fds-space-xs)] text-[var(--fds-neutral-text-default)]">
                We usually respond within 1-2 business days.
              </p>
            </details>
          </div>
        </section>

        <Link
          href="/"
          className="mt-[var(--fds-space-md)] text-[length:var(--fds-font-size-sm)] text-[var(--fds-primary-text-default)] underline"
        >
          Back to Home
        </Link>
      </article>
    </main>
  );
}
