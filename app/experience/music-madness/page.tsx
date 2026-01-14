import { ContentSection } from '@/components/ContentSection';
import Image from 'next/image';

export default function MusicMadnessProject() {
  return (
    <main className="min-h-screen flex flex-col py-12">
      <ContentSection>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Music Madness 🎵
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Personal Project · 2025
        </p>

        <section className="prose prose-lg dark:prose-invert max-w-none mb-10 space-y-4">
          <p>
            Music Madness is an interactive web app that generates head-to-head tournament brackets
            from an artist&apos;s discography, letting users pick winners round by round until a
            champion song is crowned. It&apos;s built to feel like March Madness for music: fast,
            opinionated, and fun with friends.
          </p>
          <p>
            I love music and bracket debates, so this project was a way to combine both. I wanted
            something where a group could sit on the couch, search any artist on Spotify, and
            instantly get a bracket that feels &quot;real&quot; enough to argue about, but simple
            enough that anyone can jump in without a tutorial.
          </p>
        </section>

        {/* USER FLOW / SCREENSHOTS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            User Flow
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300">
              A typical session looks like this:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Search for an artist and pull their full discography using the Spotify API.</li>
              <li>
                Music Madness automatically builds a single-elimination bracket, seeding songs and
                handling duplicates and alternate versions.
              </li>
              <li>
                Users advance through rounds by picking winners in each matchup until a champion
                track is crowned.
              </li>
              <li>
                Along the way, they can preview songs, see popularity rankings, and save or share
                the final bracket image with friends.
              </li>
            </ol>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              Visually, the app walks users from a simple search/home screen into a dense but
              readable bracket view, and finally into a celebratory champion modal with artwork and
              quick links.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/music-madness.jpg"
              alt="Music Madness user flow diagram showing the three main screens"
              width={1600}
              height={900}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* FEATURES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Features
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <span className="font-semibold">Artist Search:</span> Enter any artist&apos;s name to
              instantly pull their discography using the Spotify Web API.
            </li>
            <li>
              <span className="font-semibold">Automatic Song Import:</span> Fetches track titles,
              album covers, and metadata directly from Spotify—no manual entry needed.
            </li>
            <li>
              <span className="font-semibold">Bracket Generator:</span> Randomizes songs into a
              single-elimination tournament bracket.
            </li>
            <li>
              <span className="font-semibold">Duplicate Handling:</span> Merges duplicates like
              different capitalizations or &quot;feat.&quot; variants so votes stay clean.
            </li>
            <li>
              <span className="font-semibold">Song Popularity Ranking:</span> Uses Spotify
              popularity scores to seed tracks so big hits tend to rise later in the bracket.
            </li>
            <li>
              <span className="font-semibold">Spotify Previews:</span> Lets users play short track
              previews directly from Spotify before picking winners.
            </li>
            <li>
              <span className="font-semibold">Save &amp; Share Brackets:</span> Exports or shares
              finished brackets so friends can compare results.
            </li>
            <li>
              <span className="font-semibold">Interactive UI:</span> Clean, responsive bracket
              interface that makes it easy to advance rounds on desktop or mobile.
            </li>
            <li>
              <span className="font-semibold">Quality of Life:</span> Sticky headers, dynamic tab
              titles, and auto-advancing logic when matchups are empty.
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
              <span className="font-semibold">Frontend:</span> React, Next.js, JavaScript (ES6+)
            </li>
            <li>
              <span className="font-semibold">Styling:</span> Tailwind CSS
            </li>
            <li>
              <span className="font-semibold">Deployment:</span> Vercel
            </li>
            <li>
              <span className="font-semibold">Music Data:</span>{' '}
              <a
                href="https://developer.spotify.com/documentation/web-api"
                target="_blank"
                rel="noopener noreferrer"
                className="text-duke-800 dark:text-duke-400 hover:underline"
              >
                Spotify Web API
              </a>
            </li>
            <li>
              <span className="font-semibold">Version Control:</span> Git + GitHub
            </li>
          </ul>
        </section>

        {/* LIVE DEMO */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Live Demo
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            You can try out Music Madness yourself here:
          </p>
          <a
            href="https://music-madness.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-lg font-semibold text-duke-800 dark:text-duke-400 hover:underline"
          >
            👉 music-madness.vercel.app
          </a>
        </section>
      </ContentSection>
    </main>
  );
}


