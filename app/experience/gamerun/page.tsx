import { ContentSection } from '@/components/ContentSection';
import Image from 'next/image';

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
          GameRun is an AI-driven sports analytics tool for elite athletes, helping them
          track progress, analyze performance, and convert complex metrics into clear, 
          actionable insights. The company’s existing GameRunIQ reports were dense and 
          text-heavy, making it hard for athletes and coaches to quickly understand what mattered.
        </p>

        <p>
          As lead product manager, I guided the redesign into a “Player Development” platform
          that paired AI-driven qualitative feedback with quantitative baseball metrics in a 
          format athletes could actually use to improve.
        </p>

        <p>
          Through user discovery interviews with collegiate athletes at all levels, we heard a 
          consistent message: players wanted to <em>see</em> progress over time, understand what 
          their numbers meant, and get simple direction on what to work on next. Those insights 
          shaped our problem framing and early dashboard concepts.
        </p>

        <p>
          I then led multiple prototype iterations in Figma and Lovable, translating user needs into
          high-impact user experience refinements. By the high-fidelity stage, athletes could interpret 
          their velocities, spin-rates, pitch metrics, and qualitative feedback at a glance instead of 
          reading paragraphs of text.
        </p>

        <p>
          To guide development, I defined four core MVP success metrics: user retention, 
          session completion rate, actionable feedback rate, and player development index.
          Retention was our north star for building a "development" tool athletes would return to.
        </p>

        <p>
          GameRun was my first experience in sports tech, an industry I care deeply about, and a 
          rewarding opportunity to build a product that genuinely helps athletes improve!
        </p>

        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Demo
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Check out a recorded demo of our work on GameRun:
          </p>
          <div className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://drive.google.com/file/d/1xrUuopvoFW8OudjYEV6QFI-Hprhdll5X/preview"
              className="w-full aspect-video rounded-lg"
              allow="autoplay"
            />
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Team
          </h2>
          <div className="relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/gamerun-team.jpg"
              alt="GameRun team with whiteboard"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Product Screens & Flows
          </h2>

          <div className="space-y-6">
            <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/gamerun-dashboard.jpg"
                alt="GameRun sports performance dashboard"
                width={1600}
                height={900}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/gamerun-web-figma.jpg"
                alt="GameRun web Figma prototype"
                width={1378}
                height={1298}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/gamerun-mobile-figma.jpg"
                alt="GameRun mobile Figma prototype"
                width={714}
                height={1288}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>
      </ContentSection>
    </main>
  );
}


