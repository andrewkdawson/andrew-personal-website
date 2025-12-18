
import { ContentSection } from '@/components/ContentSection';
import { WritingCard } from '@/components/WritingCard';

/**
 * Writing Page
 *
 * EDIT THIS FILE TO:
 * - Add or remove writing entries
 * - Update titles, descriptions, and tags
 *
 * Location: app/writing/page.tsx
 */

export default function Writing() {
  // EDIT THIS ARRAY: add new writing entries over time.
  const posts = [
    {
      title: 'Top 10 Books of 2025',
      description:
        "I got back into reading this year. Here are my favorite books that I read in 2025.",
      href: '/writing/top-10-books-2025',
      tag: 'Books',
      date: 'December 31, 2025',
    },
  ];

  return (
    <main className="min-h-screen flex flex-col py-12">
      <ContentSection>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Writing
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-10 max-w-2xl">
          Stories, essays, insights, and reflections. My creative outlet. 
        </p>

        <section className="mb-16">
          <div className="space-y-6">
            {posts.map((post) => (
              <WritingCard
                key={post.href}
                title={post.title}
                description={post.description}
                href={post.href}
                tag={post.tag}
                date={post.date}
              />
            ))}
          </div>
        </section>
      </ContentSection>
    </main>
  );
}

