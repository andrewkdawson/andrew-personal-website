import { ContentSection } from '@/components/ContentSection';

/**
 * Sample Writing Detail Page
 *
 * EDIT THIS FILE TO:
 * - Replace the sample story with your own writing
 * - Use this as a template when adding new pieces
 */

export default function Top10Books2025() {
  return (
    <main className="min-h-screen flex flex-col py-12">
      <ContentSection>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          My Top 10 Books of 2025
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Books · December 31, 2025
        </p>

        <section className="prose prose-lg dark:prose-invert max-w-none">
          {/* EDIT THIS STORY */}
          <p>
            Coming soon...
          </p>
        </section>
      </ContentSection>
    </main>
  );
}