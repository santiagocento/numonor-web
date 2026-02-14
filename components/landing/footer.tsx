import Link from "next/link";
import { Separator } from "@/components/ui/separator";

interface FooterProps {
  tagline: string;
  copyright: string;
}

export function Footer({ tagline, copyright }: FooterProps) {
  return (
    <footer className="px-6 pt-[var(--fds-space-4xl)] pb-[var(--fds-space-4xl)]">
      <div className="mx-auto max-w-7xl">
        <Separator className="mb-[var(--fds-space-lg)]" />
        <nav className="mb-[var(--fds-space-lg)] flex flex-wrap items-center gap-x-[var(--fds-space-lg)] gap-y-[var(--fds-space-xs)]">
          <Link
            href="/support"
            className="text-[length:var(--fds-font-size-sm)] text-[var(--fds-primary-text-default)] underline"
          >
            Support
          </Link>
          <Link
            href="/privacy"
            className="text-[length:var(--fds-font-size-sm)] text-[var(--fds-primary-text-default)] underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-[length:var(--fds-font-size-sm)] text-[var(--fds-primary-text-default)] underline"
          >
            Terms of Use
          </Link>
        </nav>
        <div className="flex flex-col gap-[var(--fds-space-sm)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-[var(--font-display)] text-[length:var(--fds-font-size-2xl)] text-[var(--fds-primary-text-strong)]">
              Numonor
            </p>
            <p className="text-[length:var(--fds-font-size-sm)] text-[var(--fds-neutral-text-weak)]">
              {tagline}
            </p>
          </div>
          <p className="text-[length:var(--fds-font-size-sm)] text-[var(--fds-neutral-text-weak)]">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
