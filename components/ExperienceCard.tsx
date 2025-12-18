/**
 * ExperienceCard Component
 *
 * Displays a single work experience, project, or leadership role as a clickable card.
 *
 * EDIT THIS FILE TO:
 * - Change card styling
 * - Modify date format
 * - Update hover / focus behavior
 *
 * Location: components/ExperienceCard.tsx
 */
import Link from 'next/link';

interface ExperienceCardProps {
  title: string;
  organization: string;
  location: string;
  dateRange: string;
  href: string;
}

export function ExperienceCard({
  title,
  organization,
  location,
  dateRange,
  href,
}: ExperienceCardProps) {
  return (
    <Link
      href={href}
      className="block bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      <div className="p-6 flex flex-col h-full">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {title}
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium">{organization}</span>
            <span className="hidden sm:inline">•</span>
            <span>{location}</span>
            <span className="hidden sm:inline">•</span>
            <span>{dateRange}</span>
          </div>
        </div>

        {/* Small prompt to indicate the card is clickable */}
        <p className="mt-auto text-sm text-blue-600 dark:text-blue-400 font-medium">
          Read the story →
        </p>
      </div>
    </Link>
  );
}

