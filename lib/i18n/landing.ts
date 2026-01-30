export const landingCopy = {
  es: {
    toggles: {
      theme: "Tema",
      language: "Idioma",
      light: "Claro",
      dark: "Oscuro",
    },
    hero: {
      badge: "Puzzle lógico de números · retos diarios",
      title: "Numonor",
      subtitle: "El rompecabezas de números que te obliga a pensar en patrones, ritmo y estrategia.",
      description:
        "Entrena tu cerebro con niveles calibrados, pistas inteligentes y desafíos sin presión. Cada tablero es una historia distinta.",
      primaryCta: "Jugar ahora",
      secondaryCta: "Ver niveles",
      stats: [
        { label: "Puzzles", value: "420+" },
        { label: "Modos", value: "5" },
        { label: "Jugadores", value: "120k" },
      ],
      store: {
        appLabel: "Descargar en",
        playLabel: "Disponible en",
      },
    },
    features: {
      badge: "Por qué engancha",
      title: "Un puzzle que se siente vivo",
      description:
        "Cada sesión combina lógica, intuición y una estética cálida que hace que quieras resolver uno más.",
      items: [
        {
          title: "Entrenamiento cerebral",
          description:
            "Mejora la lógica y la memoria con puzzles generados para mantener tu curva de aprendizaje activa.",
          tag: "Cognición",
        },
        {
          title: "Ritmo relajado",
          description:
            "Sesiones suaves y meditativas para pensar sin apuro y disfrutar el proceso.",
          tag: "Relax",
        },
        {
          title: "Diseño sensorial",
          description:
            "Feedback visual y sonoro pensado para que cada acierto se sienta como un mini logro.",
          tag: "Experiencia",
        },
        {
          title: "Pistas inteligentes",
          description:
            "Ayudas justas que no rompen el desafío, perfectas para avanzar sin frustración.",
          tag: "Asistencia",
        },
      ],
      footerNote: "Experiencia calibrada con IA humana",
    },
    cta: {
      title: "¿Listo para una sesión tranquila y bien pensada?",
      description:
        "Únete a miles de jugadores que ya usan Numonor para entrenar su mente con estilo.",
      primaryCta: "Empezar ahora",
      secondaryCta: "Ver modos de juego",
      storeAppLabel: "Descargar en",
      storePlayLabel: "Disponible en",
    },
    footer: {
      tagline: "Lógica, calma y estrategia en un solo tablero.",
      copyright: (year: number) => `© ${year} Numonor. Todos los derechos reservados.`,
    },
  },
  en: {
    toggles: {
      theme: "Theme",
      language: "Language",
      light: "Light",
      dark: "Dark",
    },
    hero: {
      badge: "Numbers logic puzzle · daily sessions",
      title: "Numonor",
      subtitle: "The numbers puzzle that makes you think in patterns, rhythm, and strategy.",
      description:
        "Train your brain with curated levels, smart hints, and pressure-free challenges. Every board tells a different story.",
      primaryCta: "Play now",
      secondaryCta: "See levels",
      stats: [
        { label: "Puzzles", value: "420+" },
        { label: "Modes", value: "5" },
        { label: "Players", value: "120k" },
      ],
      store: {
        appLabel: "Download on",
        playLabel: "Available on",
      },
    },
    features: {
      badge: "Why it clicks",
      title: "A puzzle that feels alive",
      description:
        "Each session blends logic, intuition, and warm aesthetics that make you want to solve just one more.",
      items: [
        {
          title: "Brain training",
          description:
            "Improve logic and memory with puzzles tuned to keep your learning curve active.",
          tag: "Cognition",
        },
        {
          title: "Relaxed pace",
          description:
            "Soft, meditative sessions to think without rushing and enjoy the process.",
          tag: "Relax",
        },
        {
          title: "Sensory design",
          description:
            "Visual and audio feedback crafted so every win feels like a small achievement.",
          tag: "Experience",
        },
        {
          title: "Smart hints",
          description:
            "Helpful nudges that keep the challenge intact and help you move forward without frustration.",
          tag: "Guidance",
        },
      ],
      footerNote: "Experience tuned by human-crafted AI",
    },
    cta: {
      title: "Ready for a calm, thoughtful session?",
      description:
        "Join thousands of players already using Numonor to train their minds with style.",
      primaryCta: "Start now",
      secondaryCta: "See game modes",
      storeAppLabel: "Download on",
      storePlayLabel: "Available on",
    },
    footer: {
      tagline: "Logic, calm, and strategy in a single board.",
      copyright: (year: number) => `© ${year} Numonor. All rights reserved.`,
    },
  },
} as const;

export type LandingLanguage = keyof typeof landingCopy;
