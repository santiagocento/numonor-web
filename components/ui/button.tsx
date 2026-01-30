import * as React from "react";
import { cn } from "@/lib/utils";

type SlotProps = React.HTMLAttributes<HTMLElement> & { children: React.ReactNode };

const Slot = React.forwardRef<HTMLElement, SlotProps>(
  ({ children, className, ...props }, ref) => {
    if (!React.isValidElement(children)) return null;
    const child = children as React.ReactElement<any, any>;
    return React.cloneElement<any, any>(child, {
      ...(props as Record<string, unknown>),
      className: cn(className, (child.props as { className?: string }).className),
    });
  }
);
Slot.displayName = "Slot";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--fds-primary-bg-default)] text-[var(--fds-neutral-bg-weaker)] border border-[var(--fds-primary-border-default)] shadow-[var(--fds-shadow-10-1)] hover:bg-[var(--fds-primary-bg-strong)]",
  secondary:
    "bg-[var(--fds-secondary-bg-weak)] text-[var(--fds-secondary-text-strong)] border border-[var(--fds-secondary-border-default)] hover:bg-[var(--fds-secondary-bg-default)]",
  outline:
    "bg-transparent text-[var(--fds-primary-text-default)] border border-[var(--fds-primary-border-default)] hover:bg-[var(--fds-primary-bg-weak)]",
  ghost:
    "bg-transparent text-[var(--fds-primary-text-strong)] hover:bg-[var(--fds-neutral-bg-weak)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-[var(--fds-space-md)] py-[var(--fds-space-xs)] text-[length:var(--fds-font-size-sm)]",
  md: "px-[var(--fds-space-lg)] py-[var(--fds-space-sm)] text-[length:var(--fds-font-size-md)]",
  lg: "px-[var(--fds-space-xl)] py-[var(--fds-space-md)] text-[length:var(--fds-font-size-lg)]",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild, children, ...props }, ref) => {
    const mergedClassName = cn(
      "inline-flex items-center justify-center gap-[var(--fds-space-xs)] rounded-[var(--fds-radius-md)] font-medium leading-[var(--fds-line-md)] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fds-primary-border-strong)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--fds-neutral-bg-weaker)] disabled:pointer-events-none disabled:opacity-50",
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    if (asChild) {
      return (
        <Slot className={mergedClassName} {...props}>
          {children}
        </Slot>
      );
    }

    return (
      <button ref={ref} className={mergedClassName} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
