import type { Config } from "tailwindcss";

/**
 * Tailwind CSS Configuration
 * 
 * Duke-themed semantic color system
 * Location: tailwind.config.ts
 */

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Semantic color tokens mapped to CSS variables
        // Use these tokens instead of raw hex values for maintainability
        background: {
          DEFAULT: 'var(--color-background)',
        },
        section: {
          DEFAULT: 'var(--color-section)',
        },
        surface: {
          DEFAULT: 'var(--color-surface)',
        },
        elevated: {
          DEFAULT: 'var(--color-elevated)',
        },
        muted: {
          DEFAULT: 'var(--color-muted)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          strong: 'var(--color-accent-strong)',
        },
        link: {
          DEFAULT: 'var(--color-link)',
          hover: 'var(--color-link-hover)',
        },
        gold: {
          DEFAULT: 'var(--color-gold)',
          subtle: 'var(--color-gold-subtle)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
          subtle: 'var(--color-border-subtle)',
        },
        focus: {
          DEFAULT: 'var(--color-focus)',
        },
        // Text colors
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
        },
        // Legacy duke-navy palette (kept for backwards compatibility)
        'duke-navy': {
          DEFAULT: '#012169',
          50: '#E6EBF5',
          100: '#CCD7EB',
          200: '#99AFD7',
          300: '#6687C3',
          400: '#335FAF',
          500: '#012169',
          600: '#011A54',
          700: '#01143F',
          800: '#000D2A',
          900: '#000715',
        },
      },
    },
  },
  plugins: [],
};

export default config;
