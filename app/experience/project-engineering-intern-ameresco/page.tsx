import { ContentSection } from '@/components/ContentSection';

export default function AmerescoExperience() {
  return (
    <main className="min-h-screen flex flex-col py-12">
      <ContentSection>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Project Engineering Intern, Ameresco
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Columbia, MD · May 2024 – Aug 2024
        </p>

        <section className="prose prose-lg dark:prose-invert max-w-none mb-10">
          <p>
            My summer at Ameresco was an immersion in federal-scale renewable energy work. As a
            Project Engineering Intern, I joined the team delivering Energy Savings Performance
            Contract projects for government clients out of the Columbia and D.C. offices.
          </p>
          <p>
            Most days were a mix of project management and analysis: tracking timelines and costs,
            running savings calculations, and digging into climate and energy consumption data to
            spot where efficiency upgrades would actually move the needle. I also joined site
            visits, which grounded the models in real mechanical rooms, rooftops, and equipment
            that our designs had to work with.
          </p>
          <p>
            The internship gave me a front‑row seat to how engineers, project managers, and clients
            collaborate on $100M+ projects. I left with sharper skills in data analysis and
            critical thinking, but just as importantly with a better sense of how to frame trade‑offs
            and communicate recommendations when the technical and business stakes are both high.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Things I&apos;d Like to Add
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Schematics or diagrams (with sensitive details removed)</li>
            <li>Before/after comparisons of system performance</li>
          </ul>
        </section>
      </ContentSection>
    </main>
  );
}


