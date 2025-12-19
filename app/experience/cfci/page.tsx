import { ContentSection } from '@/components/ContentSection';
import Image from 'next/image';

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
            wasn’t any before. We had to define everything from how teams are staffed, to how we run kickoff
            workshops, to how we measure whether a project was truly valuable for the partner and
            for the students. 
          </p>
          <p>
            One of my key responsibilities is managing the application and hiring process.
            I personally interviewed and hired all of Product Lab's current product managers, engineers, and designers.
          </p>
          <p>
            My favorite part of the role is mentoring student PMs who are running their very first
            product cycles. Coaching these students forces me to make my own thinking sharper and more intentional.
            I find a great deal of joy and fulfillment in helping them grow and succeed!
          </p>
        </section>

        {/* MEDIA PLACEHOLDERS */}
        <section className="mb-10">
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

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Photos
          </h2>
          <div className="space-y-6">
            <div className="relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/cfci-stairs.jpg"
                alt="CFCI Product Lab team on stairs"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/cfci-classroom.jpg"
                alt="CFCI Product Lab team in classroom"
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


