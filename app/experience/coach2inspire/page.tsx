import { ContentSection } from '@/components/ContentSection';
import Image from 'next/image';

export default function Coach2InspireExperience() {
  return (
    <main className="min-h-screen flex flex-col py-12">
      <ContentSection>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Director of Programming, Coach2Inspire
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Durham, NC · Sep 2021 – Apr 2025
        </p>

        <section className="prose prose-lg dark:prose-invert max-w-none mb-10 space-y-4">
          <p>
            Coach2Inspire combined two things I care deeply about: youth sports and character
            development. I spent weekends and evenings in gyms and on fields, trying to design
            drills and sessions that taught more than just how to move your feet on defense.
          </p>
          <p>
            As Director of Programming, I coordinated a team of volunteers, built out practice
            plans, and made sure every clinic felt organized and welcoming. The most meaningful
            feedback I got wasn&apos;t about wins or losses—it was hearing parents say their kids
            left practice a little more confident and excited to come back.
          </p>
        </section>

        <section className="mb-10">
          <div className="relative w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/coach2inspire.jpg"
              alt="Coach2Inspire at Duke University"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>
      </ContentSection>
    </main>
  );
}


