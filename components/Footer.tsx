/**
 * Footer Component
 * 
 * EDIT THIS FILE TO:
 * - Update copyright text
 * - Add social media links
 * - Change footer styling
 * 
 * Location: components/Footer.tsx
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Andrew Kwon Dawson. All rights reserved.
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Built with Next.js & TailwindCSS
          </div>
        </div>
      </div>
    </footer>
  );
}

