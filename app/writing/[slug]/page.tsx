import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { ContentSection } from '@/components/ContentSection';
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts';
import type { Components } from 'react-markdown';

/**
 * Dynamic Writing Detail Page
 * 
 * Automatically generates pages for any Markdown file in the /posts folder.
 * 
 * To add a new post:
 * 1. Convert your Word/Docs file to Markdown (using Pandoc or similar)
 * 2. Add frontmatter at the top (title, date, tag, excerpt)
 * 3. Save as [slug].md in the /posts folder
 * 4. The page will automatically appear on the Writing index
 */

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function WritingPost({ 
  params 
}: { 
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

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

  // Custom components for ReactMarkdown to apply proper Tailwind styling
  const markdownComponents: Components = {
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4 first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        {children}
      </p>
    ),
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900 dark:text-white">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="italic text-gray-700 dark:text-gray-300">
        {children}
      </em>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2 ml-4">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2 ml-4">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="leading-relaxed">
        {children}
      </li>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-blue-600 hover:underline dark:text-blue-400"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-gray-600 dark:text-gray-400 my-4">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800 dark:text-gray-200">
        {children}
      </code>
    ),
  };

  return (
    <main className="min-h-screen flex flex-col py-12">
      <ContentSection>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          {post.title}
        </h1>
        {(post.tag || formattedDate) && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
            {post.tag && `${post.tag}`} {post.tag && formattedDate && '•'} {formattedDate}
          </p>
        )}

        <section className="max-w-none">
          <ReactMarkdown components={markdownComponents}>
            {post.content}
          </ReactMarkdown>
        </section>
      </ContentSection>
    </main>
  );
}

