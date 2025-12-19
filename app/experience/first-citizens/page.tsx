import { ContentSection } from '@/components/ContentSection';
import Image from 'next/image';

export default function FirstCitizensExperience() {
  return (
    <main className="min-h-screen flex flex-col py-12">
      <ContentSection>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Project Management Intern, First Citizens Bank
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Raleigh, NC · May 2025 – Sep 2025
        </p>

        <section className="prose prose-lg dark:prose-invert max-w-none mb-10 space-y-4">
          <p>
            At First Citizens, I joined the Commercial Digital team at a moment when there were far
            more ideas than capacity. My work focused on bringing clarity to that chaos by tracking
            projects, surfacing tradeoffs, and helping leaders make confident decisions about what
            to start, pause, or stop altogether.
          </p>
          <p>
            I built a prioritization framework that combined technical complexity, strategic
            alignment, and customer impact into a single view. It wasn&apos;t glamorous, but it
            gave us a shared language to talk about why one intake request should move ahead of
            another. Seeing that framework adopted by the Enterprise Project Office was a big
            validation that an intern can still meaningfully influence how a large organization
            makes decisions.
          </p>
          <p>
            I left the summer with a much deeper appreciation
            for how process, communication, and tooling all have to work together for a digital
            program to actually ship.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Photos
          </h2>
          
          <div className="space-y-6">
            <div className="relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/fcb-team.jpg"
                alt="First Citizens Bank team"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/fcb-presentation.jpg"
                alt="First Citizens Bank presentation on product prioritization framework"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>

          </div>
        </section>
      </ContentSection>
    </main>
  );
}


