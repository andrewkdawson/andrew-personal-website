/**
 * ExperienceCard Component
 * 
 * Displays a single work experience or leadership role.
 * 
 * EDIT THIS FILE TO:
 * - Change card styling
 * - Modify date format
 * - Update bullet point styling
 * 
 * Location: components/ExperienceCard.tsx
 */
interface ExperienceCardProps {
  title: string;
  organization: string;
  location: string;
  dateRange: string;
  bullets: string[];
  isLeadership?: boolean;
}

export function ExperienceCard({
  title,
  organization,
  location,
  dateRange,
  bullets,
  isLeadership = false,
}: ExperienceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200 dark:border-gray-700">
      <div className="mb-4">
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
      <ul className="space-y-2">
        {bullets.map((bullet, index) => (
          <li
            key={index}
            className="text-gray-700 dark:text-gray-300 leading-relaxed flex items-start"
          >
            <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1.5 flex-shrink-0">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

