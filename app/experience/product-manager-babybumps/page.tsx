import { ContentSection } from '@/components/ContentSection';

export default function BabyBumpsExperience() {
  return (
    <main className="min-h-screen flex flex-col py-12">
      <ContentSection>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Product Manager, BabyBumps
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Durham, NC · Sep 2024 – Dec 2024
        </p>

        <section className="prose prose-lg dark:prose-invert max-w-none mb-10">
          <p>
            BabyBumps was one of the highlights of 2024 for me. Through the Christensen Family
            Center for Innovation, I joined founder Dr. Victoria Fritz and fellow PM Ellie Kang to
            build a product for families navigating surrogacy—an experience that is emotionally
            intense, highly regulated, and often confusing for everyone involved.
          </p>
          <p>
            The team originally framed BabyBumps as a “dating app for surrogacy,” and my first
            months were spent turning that concept into Figma wireframes and a clickable prototype.
            But once we started talking with surrogates and intended parents, we heard loud and
            clear that the metaphor didn&apos;t match how they wanted to be seen or how they made
            decisions. Those interviews pushed us to pivot toward a new vision: a calm, guided hub
            for education, expectations, and next steps—the center of surrogacy instead of a swipe
            experience.
          </p>
          <p>
            As PM, I helped lead that pivot. I shaped the product vision, broke work into two
            focused four‑week sprints, and coordinated our cross‑functional team of engineers and
            designers using agile ceremonies and Jira. We rebuilt the experience as a React web app
            and validated flows with users, iterating on how we explained timelines, costs, and
            roles so the product reduced anxiety rather than adding to it.
          </p>
          <p>
            The work taught me to be comfortable with uncertainty, to communicate clearly across
            disciplines, and—most importantly—to not fall in love with a single clever idea. The
            most rewarding moments were the conversations with surrogates and families, knowing
            that thoughtful product decisions could make a deeply personal journey feel a little
            more supported.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Project Overview
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            For more detail on the surrogacy journey redesign, you can reference the original
            project overview:
          </p>
          <a
            href="https://dukecfci.notion.site/Reimagining-Surrogacy-with-a-Guided-Online-Journey-22b478a62ca181c384a2f333412a3ff1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View the project overview
          </a>
        </section>
      </ContentSection>
    </main>
  );
}


