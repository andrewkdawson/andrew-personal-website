import Link from 'next/link';

/**
 * WritingCard Component
 *
 * Displays a single blog / writing entry as a clickable card.
 *
 * EDIT THIS FILE TO:
 * - Change card styling
 * - Update metadata layout
 *
 * Location: components/WritingCard.tsx
 */

interface WritingCardProps {
  title: string;
  description: string;
  href: string;
  tag?: string;
  date?: string;
}

export function WritingCard({
  title,
  description,
  href,
  tag,
  date,
}: WritingCardProps) {
  return (
    <Link
      href={href}
      className="block bg-white dark:bg-duke-navy-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-duke-navy-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      <div className="p-6 flex flex-col h-full">
        <div className="mb-3">
          {tag && (
            <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 mb-2">
              {tag}
            </span>
          )}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {title}
          </h3>
          {date && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              {date}
            </p>
          )}
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
          {description}
        </p>
        <p className="mt-4 text-sm text-blue-600 dark:text-blue-400 font-medium">
          Read more →
        </p>
      </div>
    </Link>
  );
}