import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Numonor",
  description: "Privacy Policy for Numonor.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--fds-neutral-bg-weaker)] px-6 py-[var(--fds-space-4xl)] text-[var(--fds-neutral-text-strong)]">
      <article className="mx-auto flex w-full max-w-3xl flex-col gap-[var(--fds-space-lg)]">
        <header className="flex flex-col gap-[var(--fds-space-xs)]">
          <h1 className="font-[var(--font-display)] text-[length:var(--fds-font-size-5xl)] leading-[var(--fds-line-2xl)] text-[var(--fds-primary-text-strong)]">
            Privacy Policy
          </h1>
          <p className="text-[length:var(--fds-font-size-sm)] text-[var(--fds-neutral-text-weak)]">
            Effective date: February 11, 2026
          </p>
        </header>

        <section className="flex flex-col gap-[var(--fds-space-sm)]">
          <h2 className="font-[var(--font-display)] text-[length:var(--fds-font-size-2xl)]">
            1. Overview
          </h2>
          <p>
            Numonor is designed to minimize data collection. We do not run a backend that collects or stores your
            personal data or puzzle activity.
          </p>
        </section>

        <section className="flex flex-col gap-[var(--fds-space-sm)]">
          <h2 className="font-[var(--font-display)] text-[length:var(--fds-font-size-2xl)]">
            2. What Data We Collect
          </h2>
          <p>
            We do not directly collect personal information such as your name, email address, or puzzle progress
            through our own servers.
          </p>
        </section>

        <section className="flex flex-col gap-[var(--fds-space-sm)]">
          <h2 className="font-[var(--font-display)] text-[length:var(--fds-font-size-2xl)]">
            3. Local Storage on Your Device
          </h2>
          <p>
            Gameplay data (for example, settings and puzzle progress) is stored locally on your device. If you delete
            the App or reset your device storage, this data may be removed.
          </p>
        </section>

        <section className="flex flex-col gap-[var(--fds-space-sm)]">
          <h2 className="font-[var(--font-display)] text-[length:var(--fds-font-size-2xl)]">
            4. iCloud Sync
          </h2>
          <p>
            If enabled by you, data may sync through your personal iCloud account. iCloud is provided by Apple and is
            governed by Apple&apos;s terms and privacy policy. We do not access or store your iCloud credentials.
          </p>
        </section>

        <section className="flex flex-col gap-[var(--fds-space-sm)]">
          <h2 className="font-[var(--font-display)] text-[length:var(--fds-font-size-2xl)]">
            5. Third-Party Services
          </h2>
          <p>
            Aside from optional platform services such as iCloud, Numonor does not rely on third-party analytics or
            advertising SDKs to profile users.
          </p>
        </section>

        <section className="flex flex-col gap-[var(--fds-space-sm)]">
          <h2 className="font-[var(--font-display)] text-[length:var(--fds-font-size-2xl)]">
            6. Children&apos;s Privacy
          </h2>
          <p>
            Because we do not intentionally collect personal data through our own backend, we do not knowingly process
            personal information from children.
          </p>
        </section>

        <section className="flex flex-col gap-[var(--fds-space-sm)]">
          <h2 className="font-[var(--font-display)] text-[length:var(--fds-font-size-2xl)]">
            7. Data Rights
          </h2>
          <p>
            Since data is stored on your device or in your iCloud account, you can manage or delete it directly using
            your device and Apple account settings.
          </p>
        </section>

        <section className="flex flex-col gap-[var(--fds-space-sm)]">
          <h2 className="font-[var(--font-display)] text-[length:var(--fds-font-size-2xl)]">
            8. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. The current version will always be available on this
            page.
          </p>
        </section>

        <section className="flex flex-col gap-[var(--fds-space-sm)]">
          <h2 className="font-[var(--font-display)] text-[length:var(--fds-font-size-2xl)]">
            9. Contact
          </h2>
          <p>
            If you have questions about this Privacy Policy, contact:{" "}
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
