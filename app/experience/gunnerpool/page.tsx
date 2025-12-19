import Image from 'next/image';
import { ContentSection } from '@/components/ContentSection';

/**
 * GunnerPool Detail Page
 *
 * EDIT THIS FILE TO:
 * - Update the narrative about your work at GunnerPool
 * - Add/remove images and videos
 *
 * Location: app/experience/gunnerpool/page.tsx
 */

export default function GunnerPoolExperience() {
  return (
    <main className="min-h-screen flex flex-col py-12">
      <ContentSection>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Co-Founder, GunnerPool
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Remote · Dec 2025 – Present
        </p>

        <section className="prose prose-lg dark:prose-invert max-w-none mb-10 space-y-4">
          {/* EDIT THIS NARRATIVE */}
          <p>
            Every year, my friends and I play a March Madness fantasy game we call a gunner pool,
            where the only stat that matters is the cumulative number of points a player scores 
            throughout the duration of the tournament. The contest relies on both individual and team 
            success, requiring strategic thinking and creating an immersive experience. This has been
            so much more fun than making traditional brackets.
          </p>
          <p>
            The problem is that we have to manually track the scores of the tournament on a 
            spreadsheet, which is tedious and discourages others from making their own pools.
            To solve this, my co-founder George Fang and I decided to build a web app that 
            makes gunner pools accessible, simple, and more fun. Our goal is to bring gunner 
            pools to the masses, rivaling traditional brackets, while expanding to other 
            tournaments like the CFP or the Masters.
          </p>
          <p>
            As co-founder and product lead, I’ve been responsible for shaping the experience end
            to end, from early Figma prototypes and user interviews to validating
            the game structure, onboarding, drafting, and scoring system.
          </p>
          <p>
            Our plan is to deploy by this year's NCAA tournament in March. I'm excited to share
            the platform with others and play it myself!
          </p>
        </section>

        {/* OPTIONAL VIDEO SECTION */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Low-Fidelity Prototype Demo
          </h2>
          <div className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://drive.google.com/file/d/1MICAbfdNKZx-Avd9P2dwLdcCdoGhvwx1/preview"
              className="w-full aspect-video rounded-lg"
              allow="autoplay"
            />
          </div>
        </section>
      </ContentSection>
    </main>
  );
}


