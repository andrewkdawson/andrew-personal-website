'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

/**
 * NavBar Component
 * 
 * EDIT THIS FILE TO:
 * - Change navigation links
 * - Update site title/logo
 * - Modify mobile menu behavior
 * 
 * Location: components/NavBar.tsx
 */
export function NavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/experience', label: 'Experience' },
    { href: '/writing', label: 'Writing' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-accent border-b border-accent-strong backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <Link href="/" className="text-xl font-bold text-text-primary hover:text-link transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded" style={{fontFamily: 'var(--font-eb-garamond), Georgia, "Times New Roman", Times, serif'}}>
            Andrew Kwon Dawson
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded ${isActive(link.href)
                  ? 'text-link border-b-2 border-accent'
                  : 'text-text-secondary hover:text-link'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            {/* LinkedIn Icon */}
            <a
              href="https://linkedin.com/in/andrewkdawson"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-link transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded"
              aria-label="LinkedIn Profile"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* LinkedIn Icon */}
            <a
              href="https://linkedin.com/in/andrewkdawson"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-secondary hover:text-link transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded"
              aria-label="LinkedIn Profile"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-secondary hover:text-link focus:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-focus ${isActive(link.href)
                  ? 'text-text-primary bg-elevated'
                  : 'text-text-secondary hover:bg-elevated'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

