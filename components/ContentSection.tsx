/**
 * ContentSection Component
 * 
 * Reusable section wrapper for consistent spacing and styling.
 * 
 * EDIT THIS FILE TO:
 * - Change section spacing
 * - Modify max-width constraints
 * 
 * Location: components/ContentSection.tsx
 */
interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function ContentSection({ children, className = '' }: ContentSectionProps) {
  return (
    <section className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </section>
  );
}

