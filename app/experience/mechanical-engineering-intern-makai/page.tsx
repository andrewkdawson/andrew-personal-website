import { ContentSection } from '@/components/ContentSection';

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

        <section className="prose prose-lg dark:prose-invert max-w-none mb-10">
          <p>
            Working at Makai Ocean Engineering was my first real taste of building hardware that
            had to survive the ocean. I spent most of my time designing and assembling subsea
            components—taking CAD models from the screen into real parts that needed to fit,
            seal, and hold up to pressure.
          </p>
          <p>
            I loved the hands-on nature of the work. There&apos;s a different kind of satisfaction
            when you torque down a final bolt and know that your assembly will spend months
            underwater doing its job. I also got to see how small process improvements in the shop
            could add up to meaningful gains in build time and reliability.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Photos & Notes
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            This is a great place to add build photos, test setups, or sketches that show how the
            designs evolved over the summer.
          </p>
        </section>
      </ContentSection>
    </main>
  );
}


