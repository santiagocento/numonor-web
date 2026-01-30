"use client";

import { useEffect, useMemo, useState } from "react";
import { landingCopy, type LandingLanguage } from "@/lib/i18n/landing";
import { cn } from "@/lib/utils";
import { CTA } from "@/components/landing/cta";
import { Features } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";

type ThemePreference = "light" | "dark";
type LanguagePreference = LandingLanguage;

const copy = landingCopy;

const themeOptions: Array<{ value: ThemePreference; label: keyof typeof copy.es.toggles }> = [
  { value: "light", label: "light" },
  { value: "dark", label: "dark" },
];

const languageOptions: Array<{ value: LanguagePreference; label: "es" | "en" }> = [
  { value: "es", label: "es" },
  { value: "en", label: "en" },
];

function ToggleGroup<T extends string>({
  label,
  value,
  options,
  onChange,
  labels,
}: {
  label: string;
  value: T;
  options: Array<{ value: T; label: string }>;
  onChange: (value: T) => void;
  labels: Record<string, string>;
}) {
  return (
    <div className="flex items-center gap-[var(--fds-space-xs)]">
      <span className="text-[length:var(--fds-font-size-sm)] text-[var(--fds-neutral-text-weak)]">
        {label}
      </span>
      <div className="flex items-center rounded-full border border-[var(--fds-neutral-border-weak)] bg-[var(--fds-neutral-bg-weaker)] p-1">
        {options.map((option) => {
          const isActive = option.value === value;
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={isActive}
              onClick={() => onChange(option.value)}
              className={cn(
                "rounded-full px-[var(--fds-space-sm)] py-[var(--fds-space-2xs)] text-[length:var(--fds-font-size-sm)] transition",
                isActive
                  ? "bg-[var(--fds-primary-bg-default)] text-[var(--fds-neutral-bg-weaker)]"
                  : "text-[var(--fds-neutral-text-weak)] hover:text-[var(--fds-neutral-text-strong)]"
              )}
            >
              {labels[option.label] ?? option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function LandingPage() {
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") {
      return "light";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  const [themePreference, setThemePreference] = useState<ThemePreference>(() => systemTheme);
  const [hasManualTheme, setHasManualTheme] = useState(false);
  const [languagePreference, setLanguagePreference] = useState<LanguagePreference>(() => {
    if (typeof window === "undefined") {
      return "en";
    }
    const navLanguage = window.navigator.language?.toLowerCase() ?? "en";
    return navLanguage.startsWith("es") ? "es" : "en";
  });

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const updateTheme = () => {
      const nextTheme = media.matches ? "dark" : "light";
      setSystemTheme(nextTheme);
      if (!hasManualTheme) {
        setThemePreference(nextTheme);
      }
    };
    media.addEventListener("change", updateTheme);
    return () => media.removeEventListener("change", updateTheme);
  }, [hasManualTheme]);

  const resolvedTheme = themePreference ?? systemTheme;
  const resolvedLanguage = languagePreference ?? "en";
  const year = new Date().getFullYear();

  useEffect(() => {
    document.documentElement.dataset.theme = resolvedTheme;
    document.documentElement.classList.toggle("theme-dark", resolvedTheme === "dark");
    document.documentElement.classList.toggle("theme-light", resolvedTheme === "light");
  }, [resolvedTheme]);

  useEffect(() => {
    document.documentElement.lang = resolvedLanguage;
  }, [resolvedLanguage]);

  const content = useMemo(() => copy[resolvedLanguage], [resolvedLanguage]);

  return (
    <main className="min-h-screen bg-[var(--fds-neutral-bg-weaker)] text-[var(--fds-neutral-text-strong)]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-end gap-[var(--fds-space-lg)] px-6 pt-[var(--fds-space-lg)]">
        <ToggleGroup
          label={content.toggles.theme}
          value={themePreference}
          options={themeOptions}
          onChange={(value) => {
            setThemePreference(value);
            setHasManualTheme(true);
          }}
          labels={{
            light: content.toggles.light,
            dark: content.toggles.dark,
          }}
        />
        <ToggleGroup
          label={content.toggles.language}
          value={languagePreference}
          options={languageOptions}
          onChange={setLanguagePreference}
          labels={{
            es: "ES",
            en: "EN",
          }}
        />
      </div>
      <Hero {...content.hero} />
      <Features {...content.features} />
      <CTA {...content.cta} />
      <Footer
        tagline={content.footer.tagline}
        copyright={content.footer.copyright(year)}
      />
    </main>
  );
}
