import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Root Layout
 * 
 * EDIT THIS FILE TO:
 * - Update site metadata (title, description)
 * - Change default language
 * - Modify global layout structure
 * 
 * Location: app/layout.tsx
 */
export const metadata: Metadata = {
  title: "Andrew Kwon Dawson",
  description: "Product-focused Master of Engineering Management student at Duke University.",
  keywords: ["product management", "engineering", "Duke University", "Andrew Dawson", "Andrew Kwon Dawson", "Hawaii"],
};

// Script to force dark mode immediately, before React hydrates
// This prevents flash of light mode and ensures dark mode is always on
const darkModeScript = `
  (function() {
    // Always apply dark mode, regardless of device settings or localStorage
    document.documentElement.classList.add('dark');
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('dark');`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-text-primary min-h-screen flex flex-col`}
      >
        <NavBar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
