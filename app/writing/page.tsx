import { ContentSection } from '@/components/ContentSection';
import { WritingCard } from '@/components/WritingCard';
import { getAllPosts } from '@/lib/posts';

/**
 * Writing Page
 *
 * Automatically generates cards for all Markdown files in the /posts folder.
 * 
 * To add a new post:
 * 1. Write in Word/Docs/Pages
 * 2. Convert to Markdown (using Pandoc: pandoc file.docx -o file.md)
 * 3. Add frontmatter at the top of the .md file (see example in /posts folder)
 * 4. Save as [slug].md in the /posts folder
 * 5. The card will automatically appear here!
 */

export default function Writing() {
  const posts = getAllPosts();

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
          {posts.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400">
              No posts yet.
            </p>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => {
                // Format date for display (parse as local date to avoid timezone issues)
                const formattedDate = post.date
                  ? (() => {
                      const dateStr = post.date;
                      // Parse YYYY-MM-DD as local date (not UTC)
                      const [year, month, day] = dateStr.split('-').map(Number);
                      const date = new Date(year, month - 1, day);
                      return date.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      });
                    })()
                  : '';

                return (
                  <WritingCard
                    key={post.slug}
                    title={post.title}
                    description={post.excerpt || ''}
                    href={`/writing/${post.slug}`}
                    tag={post.tag}
                    date={formattedDate}
                  />
                );
              })}
            </div>
          )}
        </section>
      </ContentSection>
    </main>
  );
}

