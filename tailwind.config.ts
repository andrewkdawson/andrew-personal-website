import type { Config } from "tailwindcss";

/**
 * Tailwind CSS Configuration
 * 
 * EDIT THIS FILE TO:
 * - Add custom colors (e.g., Hawaiian-inspired palette)
 * - Modify spacing, typography, or other design tokens
 * - Add custom plugins
 * 
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

