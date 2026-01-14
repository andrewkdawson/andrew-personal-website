/**
 * Footer Component
 * 
 * Location: components/Footer.tsx
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  // EDIT THESE SOCIAL MEDIA LINKS
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/andrewkdawson' },
    { name: 'GitHub', url: 'https://github.com/andrewkdawson' },
    { name: 'Goodreads', url: 'https://www.goodreads.com/andrewkdawson' },
    { name: 'Letterboxd', url: 'https://letterboxd.com/andrewkdawson' },
  ];

  return (
    <footer className="bg-accent border-t border-accent-strong mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-1">
            <div className="text-sm text-text-muted">
              Built from scratch with Next.js, React, and Tailwind CSS.
            </div>
          </div>

          {/* Text-only Social Media Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-link-hover transition-colors text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
