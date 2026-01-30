import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StoreButton } from "@/components/landing/store-button";

interface CTAProps {
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  storeAppLabel: string;
  storePlayLabel: string;
}

export function CTA({
  title,
  description,
  primaryCta,
  secondaryCta,
  storeAppLabel,
  storePlayLabel,
}: CTAProps) {
  return (
    <section className="px-6 pt-12 pb-[var(--fds-space-2xl)]">
      <Card className="mx-auto max-w-6xl overflow-hidden border-[var(--fds-primary-border-default)] bg-[var(--fds-gradient-01)] text-[var(--fds-neutral-bg-weaker)]">
        <CardContent className="p-[var(--fds-space-5xl)]">
          <div className="grid gap-[var(--fds-space-2xl)] lg:grid-cols-[1.3fr_1fr]">
            <div>
              <h2 className="font-[var(--font-display)] text-[length:var(--fds-font-size-5xl)] leading-[var(--fds-line-2xl)]">
                {title}
              </h2>
              <p className="mt-[var(--fds-space-sm)] text-[length:var(--fds-font-size-md)] leading-[var(--fds-line-md)] text-[var(--fds-neutral-bg-default)]">
                {description}
              </p>
              <div className="mt-[var(--fds-space-lg)] flex flex-wrap gap-[var(--fds-space-sm)]">
                <Button variant="primary" size="lg" className="bg-[var(--fds-neutral-bg-weaker)] text-[var(--fds-secondary-text-strong)]">
                  {primaryCta}
                </Button>
                <Button variant="ghost" size="lg" className="text-[var(--fds-neutral-bg-weaker)]">
                  {secondaryCta}
                </Button>
              </div>
            </div>
            <div className="grid gap-[var(--fds-space-sm)]">
              <StoreButton
                label={storeAppLabel}
                platform="App Store"
                href="https://apps.apple.com"
                icon={
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                }
                variant="secondary"
              />
              <StoreButton
                label={storePlayLabel}
                platform="Google Play"
                href="https://play.google.com"
                icon={
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                }
                variant="secondary"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
