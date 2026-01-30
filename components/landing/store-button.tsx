import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type StoreButtonProps = {
  label: string;
  platform: string;
  href: string;
  icon: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function StoreButton({
  label,
  platform,
  href,
  icon,
  variant = "primary",
}: StoreButtonProps) {
  const metaTextClass =
    variant === "secondary"
      ? "text-[var(--fds-neutral-text-weak)]"
      : "text-[var(--fds-neutral-bg-default)]";
  const titleTextClass =
    variant === "secondary"
      ? "text-[var(--fds-primary-text-strong)]"
      : "text-[var(--fds-neutral-bg-weaker)]";
  return (
    <Button
      asChild
      variant={variant === "primary" ? "primary" : "outline"}
      size="lg"
      className={cn(
        "h-auto w-full justify-start rounded-[var(--fds-radius-xl)] px-[var(--fds-space-xl)] py-[var(--fds-space-md)]",
        variant === "secondary" &&
          "bg-[var(--fds-neutral-bg-weaker)] text-[var(--fds-primary-text-strong)]"
      )}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <span className="flex items-center gap-[var(--fds-space-sm)]">
          <span className="h-8 w-8">{icon}</span>
          <span className="text-left">
            <span
              className={`block text-[length:var(--fds-font-size-xs)] uppercase tracking-wide ${metaTextClass}`}
            >
              {label}
            </span>
            <span
              className={`block text-[length:var(--fds-font-size-lg)] leading-[var(--fds-line-lg)] ${titleTextClass}`}
            >
              {platform}
            </span>
          </span>
        </span>
      </a>
    </Button>
  );
}
