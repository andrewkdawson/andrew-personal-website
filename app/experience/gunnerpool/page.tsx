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
            GunnerPool started as a simple idea between friends who were obsessed with fantasy
            sports and tournament brackets. I wanted to build a product that felt as fun and
            competitive as our group chats, while making it easy for casual players to join in
            without needing to be hardcore stat nerds.
          </p>
          <p>
            As co-founder and product lead, I’ve been responsible for shaping the experience end
            to end—from early Figma prototypes and user interviews with sports fans, to validating
            the game structure, onboarding, and scoring system. Most of my time goes into
            translating scrappy ideas into a roadmap that engineers can actually ship, while
            constantly testing if the game feels intuitive and fair for first-time users.
          </p>
          <p>
            Building GunnerPool has been a reminder that the best products feel like they were
            designed inside the group chat: simple, expressive, and built around shared rituals
            like trash talk, upsets, and friendly rivalry.
          </p>
        </section>

        {/* MEDIA SECTION */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Screenshots & Demo
          </h2>
          {/* 
            REPLACE THIS PLACEHOLDER:
            1. Add images to /public/gunnerpool/
            2. Duplicate the <figure> block below for each image.
          */}
          <div className="grid gap-6 md:grid-cols-2">
            <figure className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-900/10 dark:bg-gray-100/5 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">
              <span>Add GunnerPool screenshots here (update src in this file).</span>
            </figure>
          </div>
        </section>

        {/* OPTIONAL VIDEO SECTION */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Walkthrough Video
          </h2>
          {/* 
            To embed a video:
            - Use a hosted link (YouTube, Loom, etc.) with an iframe
            OR
            - Place an .mp4 file in /public/gunnerpool/ and use the <video> tag below.
          */}
          <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-black/80 text-gray-400 text-sm p-6">
            <p>Embed a short demo video of the product here.</p>
          </div>
        </section>
      </ContentSection>
    </main>
  );
}


