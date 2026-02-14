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
            Effective date: February 2026
          </p>
        </header>

        <section className="flex flex-col gap-[var(--fds-space-sm)]">
          <p>
            Numonor (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy. This Privacy Policy explains
            how information is handled when you use the Numonor mobile application (the &quot;App&quot;).
          </p>
        </section>

        <section className="flex flex-col gap-[var(--fds-space-sm)]">
          <h2 className="font-[var(--font-display)] text-[length:var(--fds-font-size-2xl)]">
            Information We Collect
          </h2>
          <p>
            We do not collect personally identifiable information such as your name, email address, or contact
            details.
          </p>
          <p>
            However, the App may automatically collect limited data necessary to operate and improve the service,
            including:
          </p>
          <ul className="list-disc pl-[var(--fds-space-lg)]">
            <li>Device information</li>
            <li>Anonymous identifiers</li>
            <li>Diagnostic data</li>
            <li>Advertising data</li>
          </ul>
          <p>This information is not used to personally identify you.</p>
        </section>

        <section className="flex flex-col gap-[var(--fds-space-sm)]">
          <h2 className="font-[var(--font-display)] text-[length:var(--fds-font-size-2xl)]">
            Advertising
          </h2>
          <p>
            The App displays third-party advertisements. Advertising partners may use device identifiers and other
            limited data to provide relevant ads and measure performance.
          </p>
          <p>These partners may collect data in accordance with their own privacy policies.</p>
        </section>

        <section className="flex flex-col gap-[var(--fds-space-sm)]">
          <h2 className="font-[var(--font-display)] text-[length:var(--fds-font-size-2xl)]">
            In-App Purchases
          </h2>
          <p>
            The App offers optional in-app purchases and subscriptions processed securely by Apple through StoreKit.
          </p>
          <p>We do not collect or store payment information.</p>
          <p>Apple is responsible for billing and payment processing.</p>
          <p>
            For more information, please review{" "}
            <a
              className="text-[var(--fds-primary-text-default)] underline"
              href="https://www.apple.com/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple&apos;s privacy policy
            </a>
            .
          </p>
        </section>

        <section className="flex flex-col gap-[var(--fds-space-sm)]">
          <h2 className="font-[var(--font-display)] text-[length:var(--fds-font-size-2xl)]">
            Data Sharing
          </h2>
          <p>We do not sell, trade, or rent your personal information.</p>
          <p>
            Information may be shared only with third-party services strictly necessary to operate the App, such as:
          </p>
          <ul className="list-disc pl-[var(--fds-space-lg)]">
            <li>Apple (payments and infrastructure)</li>
            <li>Advertising providers</li>
          </ul>
        </section>

        <section className="flex flex-col gap-[var(--fds-space-sm)]">
          <h2 className="font-[var(--font-display)] text-[length:var(--fds-font-size-2xl)]">
            Children&apos;s Privacy
          </h2>
          <p>The App is not directed toward children under 13.</p>
          <p>We do not knowingly collect personal data from children.</p>
        </section>

        <section className="flex flex-col gap-[var(--fds-space-sm)]">
          <h2 className="font-[var(--font-display)] text-[length:var(--fds-font-size-2xl)]">
            Security
          </h2>
          <p>
            We take reasonable measures to protect information and rely on trusted platform providers such as Apple.
          </p>
        </section>

        <section className="flex flex-col gap-[var(--fds-space-sm)]">
          <h2 className="font-[var(--font-display)] text-[length:var(--fds-font-size-2xl)]">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an
            updated effective date.
          </p>
        </section>

        <section className="flex flex-col gap-[var(--fds-space-sm)]">
          <h2 className="font-[var(--font-display)] text-[length:var(--fds-font-size-2xl)]">Contact</h2>
          <p>If you have questions about this Privacy Policy, you can contact us at:</p>
          <p>
            <a className="text-[var(--fds-primary-text-default)] underline" href="mailto:support@numonor.app">
              support@numonor.app
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
