import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureItem {
  title: string;
  description: string;
  tag: string;
}

interface FeaturesProps {
  badge: string;
  title: string;
  description: string;
  items: FeatureItem[];
  footerNote: string;
}

export function Features({ badge, title, description, items, footerNote }: FeaturesProps) {
  return (
    <section className="bg-[var(--fds-neutral-bg-weak)]">
      <div className="mx-auto max-w-7xl px-6 py-[var(--fds-space-6xl)]">
        <div className="max-w-2xl">
          <Badge variant="neutral">{badge}</Badge>
          <h2 className="mt-[var(--fds-space-sm)] font-[var(--font-display)] text-[length:var(--fds-font-size-5xl)] leading-[var(--fds-line-2xl)] text-[var(--fds-primary-text-stronger)]">
            {title}
          </h2>
          <p className="mt-[var(--fds-space-sm)] text-[length:var(--fds-font-size-md)] leading-[var(--fds-line-md)] text-[var(--fds-neutral-text-default)]">
            {description}
          </p>
        </div>

        <div className="mt-[var(--fds-space-3xl)] grid gap-[var(--fds-space-lg)] md:grid-cols-2">
          {items.map((feature) => (
            <Card
              key={feature.title}
              className="border-[var(--fds-secondary-border-default)] bg-[var(--fds-neutral-bg-weaker)]"
            >
              <CardHeader>
                <Badge variant="primary" className="w-fit">
                  {feature.tag}
                </Badge>
                <CardTitle className="text-[length:var(--fds-font-size-3xl)]">
                  {feature.title}
                </CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-[var(--fds-space-sm)] text-[length:var(--fds-font-size-sm)] text-[var(--fds-neutral-text-weak)]">
                  <span className="h-2 w-2 rounded-full bg-[var(--fds-primary-bg-default)]" />
                  {footerNote}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
