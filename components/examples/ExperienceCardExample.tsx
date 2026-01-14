import Link from 'next/link';

/**
 * ExperienceCard Example Component
 * 
 * Demonstrates semantic color token usage:
 * - bg-surface for card background
 * - border-border for card border
 * - text-text-primary for title
 * - text-text-muted for metadata
 * - text-link for CTA link
 * - hover states with elevated background
 * 
 * Location: components/examples/ExperienceCardExample.tsx
 */
interface ExperienceCardExampleProps {
  title: string;
  organization: string;
  location: string;
  dateRange: string;
  href: string;
}

export function ExperienceCardExample({
  title,
  organization,
  location,
  dateRange,
  href,
}: ExperienceCardExampleProps) {
  return (
    <Link
      href={href}
      className="block bg-surface rounded-lg shadow-sm hover:shadow-md hover:bg-elevated transition-all border border-border focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
    >
      <div className="p-6 flex flex-col h-full">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-text-primary mb-1">
            {title}
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-sm text-text-muted">
            <span className="font-medium">{organization}</span>
            <span className="hidden sm:inline">•</span>
            <span>{location}</span>
            <span className="hidden sm:inline">•</span>
            <span>{dateRange}</span>
          </div>
        </div>

        {/* CTA link */}
        <p className="mt-auto text-sm text-link hover:text-link-hover font-medium transition-colors">
          Read the story →
        </p>
      </div>
    </Link>
  );
}
