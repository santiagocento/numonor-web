import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | Numonor",
  description: "Terms of Use for Numonor.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--fds-neutral-bg-weaker)] px-6 py-[var(--fds-space-4xl)] text-[var(--fds-neutral-text-strong)]">
      <article className="mx-auto flex w-full max-w-3xl flex-col gap-[var(--fds-space-lg)]">
        <header className="flex flex-col gap-[var(--fds-space-xs)]">
          <h1 className="font-[var(--font-display)] text-[length:var(--fds-font-size-5xl)] leading-[var(--fds-line-2xl)] text-[var(--fds-primary-text-strong)]">
            Terms of Use
          </h1>
          <p className="text-[length:var(--fds-font-size-sm)] text-[var(--fds-neutral-text-weak)]">
            Effective date: February 11, 2026
          </p>
        </header>

        <section className="flex flex-col gap-[var(--fds-space-sm)]">
          <h2 className="font-[var(--font-display)] text-[length:var(--fds-font-size-2xl)]">
            1. Acceptance of Terms
          </h2>
          <p>
            By downloading, installing, or using Numonor (the &quot;App&quot;), you agree to these Terms of Use. If
            you do not agree, do not use the App.
          </p>
        </section>

        <section className="flex flex-col gap-[var(--fds-space-sm)]">
          <h2 className="font-[var(--font-display)] text-[length:var(--fds-font-size-2xl)]">
            2. Use of the App
          </h2>
          <p>
            Numonor is provided for personal, non-commercial use. You agree not to misuse the App, interfere with
            its normal operation, or attempt unauthorized access to systems or services connected to the App.
          </p>
        </section>

        <section className="flex flex-col gap-[var(--fds-space-sm)]">
          <h2 className="font-[var(--font-display)] text-[length:var(--fds-font-size-2xl)]">
            3. Data Storage
          </h2>
          <p>
            Numonor does not operate a backend that stores your puzzle progress or personal data. Data is stored
            locally on your device and, if you enable it, may sync through your personal iCloud account managed by
            Apple.
          </p>
        </section>

        <section className="flex flex-col gap-[var(--fds-space-sm)]">
          <h2 className="font-[var(--font-display)] text-[length:var(--fds-font-size-2xl)]">
            4. iCloud and Third-Party Services
          </h2>
          <p>
            iCloud synchronization is optional and subject to your Apple account settings and Apple&apos;s terms and
            privacy policies. We do not control iCloud availability or Apple&apos;s data handling practices.
          </p>
        </section>

        <section className="flex flex-col gap-[var(--fds-space-sm)]">
          <h2 className="font-[var(--font-display)] text-[length:var(--fds-font-size-2xl)]">
            5. Intellectual Property
          </h2>
          <p>
            All rights, title, and interest in Numonor, including design, code, and content, remain the property of
            the App owner unless otherwise stated.
          </p>
        </section>

        <section className="flex flex-col gap-[var(--fds-space-sm)]">
          <h2 className="font-[var(--font-display)] text-[length:var(--fds-font-size-2xl)]">
            6. Disclaimer of Warranties
          </h2>
          <p>
            The App is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, express or implied,
            including merchantability, fitness for a particular purpose, and non-infringement.
          </p>
        </section>

        <section className="flex flex-col gap-[var(--fds-space-sm)]">
          <h2 className="font-[var(--font-display)] text-[length:var(--fds-font-size-2xl)]">
            7. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, the App owner will not be liable for indirect, incidental,
            special, consequential, or punitive damages arising from your use of the App.
          </p>
        </section>

        <section className="flex flex-col gap-[var(--fds-space-sm)]">
          <h2 className="font-[var(--font-display)] text-[length:var(--fds-font-size-2xl)]">
            8. Changes to These Terms
          </h2>
          <p>
            We may update these Terms from time to time. Updated Terms become effective when published in the App or
            on this page.
          </p>
        </section>

        <section className="flex flex-col gap-[var(--fds-space-sm)]">
          <h2 className="font-[var(--font-display)] text-[length:var(--fds-font-size-2xl)]">
            9. Contact
          </h2>
          <p>
            If you have questions about these Terms, contact us at:{" "}
            <a className="text-[var(--fds-primary-text-default)] underline" href="mailto:support@numonor.com">
              support@numonor.com
            </a>
          </p>
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
