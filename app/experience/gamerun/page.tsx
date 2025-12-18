import { ContentSection } from '@/components/ContentSection';

/**
 * Product Manager, GameRun Detail Page
 */

export default function GameRunExperience() {
  return (
    <main className="min-h-screen flex flex-col py-12">
      <ContentSection>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Product Manager, GameRun
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Durham, NC · Sep 2025 – Dec 2025
        </p>

        <section className="prose prose-lg dark:prose-invert max-w-none mb-10 space-y-4">
          <p>
            GameRun was my first time owning a product that blended elite sports and AI. I spent a
            lot of the early weeks just listening—sitting with coaches, asking college and
            professional players to walk me through how they actually review film, and trying to
            understand what “progress” looked like from their point of view.
          </p>
          <p>
            From those conversations, it became clear that the athletes didn&apos;t want another
            wall of charts; they wanted a simple way to see if the work they were putting in was
            actually moving the needle. That insight shaped everything from our dashboard layout to
            how we surfaced AI-driven recommendations. I led the effort to translate those needs
            into clear user stories, prioritized a tight MVP, and then iterated quickly with the
            team through multiple Figma and product builds.
          </p>
          <p>
            The most rewarding part was watching a pitcher light up when he saw a visual of how his
            off-season work had shifted his pitch mix—and then immediately ask, “What should I work
            on next?” That moment captured the goal of the product: make complex data feel like
            simple, actionable coaching.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Product Screens & Flows
          </h2>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-900/5 dark:bg-gray-100/5 p-6 text-sm text-gray-500 dark:text-gray-400">
            Drop in screenshots of the dashboard, AI insights, and user flows here.
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Demo
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            You can also explore a recorded walkthrough of the v1 GameRun product:
          </p>
          <a
            href="https://drive.google.com/file/d/1xrUuopvoFW8OudjYEV6QFI-Hprhdll5X/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View the final demo
          </a>
        </section>
      </ContentSection>
    </main>
  );
}


