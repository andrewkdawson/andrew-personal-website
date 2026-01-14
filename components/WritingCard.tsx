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
      className="block bg-surface rounded-lg shadow-sm hover:shadow-md hover:bg-elevated hover:border-accent/50 transition-all border border-border focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
    >
      <div className="p-6 flex flex-col h-full">
        <div className="mb-3">
          {tag && (
            <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full bg-accent/20 text-text-secondary mb-2">
              {tag}
            </span>
          )}
          <h3 className="text-xl font-bold text-text-primary mb-1">
            {title}
          </h3>
          {date && (
            <p className="text-xs text-text-muted mb-1">
              {date}
            </p>
          )}
        </div>
        <p className="text-sm text-text-secondary leading-relaxed flex-1">
          {description}
        </p>
        <p className="mt-4 text-sm text-link font-medium hover:text-link-hover transition-colors">
          Read more →
        </p>
      </div>
    </Link>
  );
}