import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "primary" | "success" | "warning" | "info" | "neutral";

const variantClasses: Record<BadgeVariant, string> = {
  primary:
    "bg-[var(--fds-badge-bg-blue)] text-[var(--fds-badge-text-blue)] border border-transparent",
  success:
    "bg-[var(--fds-badge-bg-green)] text-[var(--fds-badge-text-green)] border border-transparent",
  warning:
    "bg-[var(--fds-badge-bg-yellow)] text-[var(--fds-badge-text-yellow)] border border-transparent",
  info:
    "bg-[var(--fds-badge-bg-lightblue)] text-[var(--fds-badge-text-lightblue)] border border-transparent",
  neutral:
    "bg-[var(--fds-badge-bg-gray)] text-[var(--fds-badge-text-gray)] border border-transparent",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

function Badge({ className, variant = "primary", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-[var(--fds-space-sm)] py-[var(--fds-space-2xs)] text-[length:var(--fds-font-size-sm)] leading-[var(--fds-line-sm)]",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
