import { ContentSection } from '@/components/ContentSection';
import Image from 'next/image';

export default function MakaiExperience() {
  return (
    <main className="min-h-screen flex flex-col py-12">
      <ContentSection>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Mechanical Engineering Intern, Makai Ocean Engineering
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Waimanalo, HI · May 2023 – Aug 2023
        </p>

        <section className="prose prose-lg dark:prose-invert max-w-none mb-10 space-y-4">
          <p>
            In 2023, I had the opportunity to work as a Mechanical Engineering Intern at Makai Ocean
            Engineering. In this role, I used SOLIDWORKS to design and assemble complex subsea
            systems, performed hands-on assembly and testing of various hardware components and
            systems in marine environments, used a mill to machine various parts, and operated
            forklift, pallet jack, and other handling equipment to streamline assembly processes.
          </p>
          <p>
            I enjoyed working for this innovative company and gained experience through my work on
            underwater autonomous vehicles. Much of my work was classified, but I can say that it
            was innovative and fascinating!
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Photos
          </h2>

          <div className="space-y-6">

            <div className="relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/makai.JPG"
                alt="Makai Ocean Engineering team on the pier"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/makai-mill.JPG"
                alt="Working on a Bridgeport milling machine at Makai Ocean Engineering"
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


