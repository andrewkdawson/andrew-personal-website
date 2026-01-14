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
    <footer className="bg-gray-50 dark:bg-duke-navy-800 border-t border-gray-200 dark:border-duke-navy-700 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-1">
            <div className="text-sm text-gray-600 dark:text-gray-400">
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
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
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
