import { ContentSection } from '@/components/ContentSection';

export default function FantasyPowerRankingsProject() {
  return (
    <main className="min-h-screen flex flex-col py-12">
      <ContentSection>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Fantasy Power Rankings
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Mini-Project · 2025
        </p>

        <section className="prose prose-lg dark:prose-invert max-w-none mb-10">
          <p>
            Fantasy Power Rankings is a small web app for creating custom fantasy team power
            rankings. It pulls in league data and gives commissioners an easier way to sort teams
            than scrolling through spreadsheets or the default standings page.
          </p>
          <p>
            My friends and I used to do this manually every week, so the project was partly a
            selfish quality-of-life upgrade. I wanted to experiment with how different inputs—record,
            points for, strength of schedule—could be combined into views that felt satisfying and
            &quot;right&quot; to people who care way too much about their fantasy teams.
          </p>
        </section>

        {/* FEATURES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Features
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <span className="font-semibold">Sleeper League Import:</span> Enter a Sleeper league
              ID and automatically pull team names and logos.
            </li>
            <li>
              <span className="font-semibold">Manual JSON Import:</span> Paste or upload JSON with
              team data—useful for commissioner exports from platforms like ESPN.
            </li>
            <li>
              <span className="font-semibold">Ranking Mode:</span> Straight sortable list of all
              teams with drag-and-drop ordering and localStorage persistence.
            </li>
            <li>
              <span className="font-semibold">Tier List Mode:</span> S/A/B/C/D/F tier list with
              drag-and-drop support and the ability to add or remove custom tiers on the fly.
            </li>
            <li>
              <span className="font-semibold">Future ESPN Integration:</span> Exploration into ESPN
              authentication (espn_s2 + SWID) and why a direct integration isn&apos;t yet feasible
              without private APIs or user cookies.
            </li>
          </ul>
        </section>

        {/* TECH STACK */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Tech Stack
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <span className="font-semibold">Framework:</span>{' '}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Next.js 15 (App Router)
              </a>
            </li>
            <li>
              <span className="font-semibold">Styling:</span>{' '}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Tailwind CSS
              </a>
            </li>
            <li>
              <span className="font-semibold">Drag &amp; Drop:</span>{' '}
              <a
                href="https://github.com/hello-pangea/dnd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                @hello-pangea/dnd
              </a>
            </li>
            <li>
              <span className="font-semibold">Hosting:</span>{' '}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Vercel
              </a>
            </li>
          </ul>
        </section>

        {/* LIVE DEMO */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Live Demo
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Try Fantasy Power Rankings here:
          </p>
          <a
            href="https://fantasy-rankings-seven.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline"
          >
            👉 https://fantasy-rankings-seven.vercel.app/
          </a>
        </section>
      </ContentSection>
    </main>
  );
}


