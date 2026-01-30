import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StoreButton } from "@/components/landing/store-button";

interface HeroStat {
  label: string;
  value: string;
}

interface HeroStoreLabels {
  appLabel: string;
  playLabel: string;
}

interface HeroProps {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  primaryCta: string;
  stats: HeroStat[];
  store: HeroStoreLabels;
}

export function Hero({
  badge,
  title,
  subtitle,
  description,
  primaryCta,
  stats,
  store,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--fds-secondary-bg-weak)_60%,transparent),transparent)]" />
        <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--fds-info-bg-weak)_70%,transparent),transparent)]" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--fds-success-bg-weak)_65%,transparent),transparent)]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-[var(--fds-space-5xl)] px-6 pb-[var(--fds-space-6xl)] pt-[var(--fds-space-6xl)] lg:flex-row lg:items-center">
        <div className="flex-1">
          <Badge variant="primary" className="mb-[var(--fds-space-lg)]">
            {badge}
          </Badge>
          <h1 className="font-[var(--font-display)] text-[length:var(--fds-font-size-9xl)] leading-[var(--fds-line-4xl)] text-[var(--fds-primary-text-stronger)]">
            {title}
          </h1>
          <p className="mt-[var(--fds-space-sm)] text-[length:var(--fds-font-size-2xl)] leading-[var(--fds-line-xl)] text-[var(--fds-neutral-text-default)]">
            {subtitle}
          </p>
          <p className="mt-[var(--fds-space-md)] max-w-xl text-[length:var(--fds-font-size-md)] leading-[var(--fds-line-md)] text-[var(--fds-neutral-text-weak)]">
            {description}
          </p>

          <div className="mt-[var(--fds-space-xl)] flex flex-col gap-[var(--fds-space-sm)] sm:flex-row justify-center sm:justify-start">
            <Button size="lg" className="w-full sm:w-auto">
              {primaryCta}
            </Button>
          </div>

          <div className="mt-[var(--fds-space-xl)] grid gap-[var(--fds-space-md)] sm:grid-cols-3">
            {stats.map((stat) => (
              <Card key={stat.label} className="bg-[var(--fds-neutral-bg-weak)] shadow-[var(--fds-shadow-20-1)]">
                <CardContent className="p-[var(--fds-space-md)]">
                  <p className="text-[length:var(--fds-font-size-3xl)] leading-[var(--fds-line-xl)] text-[var(--fds-primary-text-strong)]">
                    {stat.value}
                  </p>
                  <p className="text-[length:var(--fds-font-size-sm)] text-[var(--fds-neutral-text-weak)]">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-[var(--fds-space-xl)] grid gap-[var(--fds-space-sm)] sm:grid-cols-2">
            <StoreButton
              label={store.appLabel}
              platform="App Store"
              href="https://apps.apple.com"
              icon={
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
              }
            />
            <StoreButton
              label={store.playLabel}
              platform="Google Play"
              href="https://play.google.com"
              icon={
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
