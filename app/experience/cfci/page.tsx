import { ContentSection } from '@/components/ContentSection';

/**
 * Product Management Fellow (CFCI) Detail Page
 *
 * EDIT THIS FILE TO:
 * - Update the narrative about your fellowship
 * - Add/remove images and videos
 *
 * Location: app/experience/product-management-fellow-cfci/page.tsx
 */

export default function CfciFellowExperience() {
  return (
    <main className="min-h-screen flex flex-col py-12">
      <ContentSection>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Product Management Fellow, Christensen Family Center for Innovation
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Durham, NC · Jan 2025 – Present
        </p>

        <section className="prose prose-lg dark:prose-invert max-w-none mb-10 space-y-4">
          <p>
            As a Product Management Fellow at CFCI, I’ve had the chance to help build Duke’s Product
            Lab from the ground up. A big part of my work has been designing structure where there
            wasn’t any before—everything from how teams are staffed, to how we run kickoff
            workshops, to how we measure whether a project was truly valuable for the partner and
            for the students.
          </p>
          <p>
            My favorite part of the role is mentoring student PMs who are running their very first
            product cycles. I spend a lot of time in 1:1s helping them scope MVPs, write clear
            problem statements, and translate messy stakeholder feedback into actionable next
            sprints. Coaching them forces me to make my own thinking sharper and more intentional.
          </p>
          <p>
            I also work closely with partners and leadership to make sure we’re not just “shipping
            features” for class credit, but actually building things that will live on after the
            semester. That has meant saying no to projects that don’t have a clear owner, and
            pushing for better definitions of success before we ever open a Figma file.
          </p>
        </section>

        {/* MEDIA PLACEHOLDERS */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Photos & Artifacts
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-900/5 dark:bg-gray-100/5 p-6 text-sm text-gray-500 dark:text-gray-400">
              Add photos from Product Lab sessions, whiteboards, or team workshops here.
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Links
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>
              <a
                href="https://cfci.pratt.duke.edu/2025/11/19/student-highlight-andrew-dawson/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                CFCI Student Highlight: Andrew Dawson
              </a>
            </li>
          </ul>
        </section>
      </ContentSection>
    </main>
  );
}


