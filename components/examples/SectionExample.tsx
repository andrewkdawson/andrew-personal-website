/**
 * Section Example Component
 * 
 * Demonstrates semantic color token usage:
 * - bg-section for section background
 * - border-border-subtle for dividers
 * - text-text-primary for headings
 * - Proper spacing and hierarchy
 * 
 * Location: components/examples/SectionExample.tsx
 */
interface SectionExampleProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function SectionExample({ children, title, className = '' }: SectionExampleProps) {
  return (
    <section className={`bg-section py-16 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <>
            <h2 className="text-3xl font-bold text-text-primary mb-8">{title}</h2>
            <hr className="border-border-subtle mb-12" />
          </>
        )}
        <div className="space-y-8">
          {children}
        </div>
      </div>
    </section>
  );
}

/**
 * Usage Example:
 * 
 * <SectionExample title="Work Experience">
 *   <ExperienceCardExample {...props} />
 *   <ExperienceCardExample {...props} />
 * </SectionExample>
 */
