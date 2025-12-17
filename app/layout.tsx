import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";

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
  title: "Andrew Kwon Dawson | Product Manager & Engineer",
  description: "Product-focused MechE + CS student at Duke University. Building user-centered products and mentoring aspiring product managers.",
  keywords: ["product management", "engineering", "Duke University", "Andrew Kwon Dawson"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col`}
      >
        <NavBar />
        <div className="flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}
