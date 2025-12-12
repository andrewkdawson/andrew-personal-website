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
      // Hawaiian-inspired color palette suggestions
      colors: {
        // You can add custom colors here
        // Example: 'hawaiian-blue': '#0077BE',
        // Example: 'hawaiian-coral': '#FF6B6B',
      },
    },
  },
  plugins: [],
};

export default config;

