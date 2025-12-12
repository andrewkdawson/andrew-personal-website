import { ContentSection } from '@/components/ContentSection';

/**
 * About Page
 * 
 * EDIT THIS FILE TO:
 * - Update the short bio (line ~20-25)
 * - Modify the longer biography section (line ~30-40)
 * - Change interests & hobbies (line ~45-55)
 * - Add or remove sections as needed
 * 
 * Location: app/about/page.tsx
 * 
 * This page is intentionally flexible - customize it to tell your story!
 */

export default function About() {
  return (
    <main className="min-h-screen flex flex-col py-12">
      <ContentSection>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
          About Me
        </h1>

        {/* Short Bio Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            {/* EDIT THIS HEADING */}
            Bio
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {/* 
              EDIT THIS PARAGRAPH:
              Write a short, punchy bio (2-3 sentences) that introduces who you are.
            */}
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a product manager and engineer passionate about building user-centered 
              solutions. Currently pursuing my Master of Engineering Management at Duke 
              while mentoring the next generation of product managers.
            </p>
          </div>
        </section>

        {/* Longer Biography Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            {/* EDIT THIS HEADING */}
            My Story
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {/* 
              EDIT THIS SECTION:
              Tell your story here. This can be multiple paragraphs.
              Share your background, what drives you, your journey, etc.
            */}
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Born and raised in Honolulu, Hawai'i, I've always been drawn to the intersection 
              of technology and human-centered design. My dual degrees in Mechanical Engineering 
              and Computer Science at Duke have given me a unique perspective on building products 
              that solve real problems.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Through my work at Duke Product Lab, GameRun, and other projects, I've learned 
              that great products start with understanding users deeply. I'm passionate about 
              mentoring others and creating spaces where people can thrive, whether that's 
              through product work or community building.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not building products, you'll find me coaching youth sports, organizing 
              events for the Hawaiian community at Duke, or exploring the outdoors.
            </p>
          </div>
        </section>

        {/* Interests & Hobbies Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            {/* EDIT THIS HEADING */}
            Interests & Hobbies
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {/* 
              EDIT THIS SECTION:
              List your interests, hobbies, and passions.
              You can use a list, paragraphs, or any format you prefer.
            */}
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Basketball and water polo (former collegiate recruit)</li>
              <li>Phoenix Suns fan</li>
              <li>Road trip karaoke</li>
              <li>Movie nights</li>
              <li>Hawaiian culture and community building</li>
              <li>Youth coaching and mentorship</li>
            </ul>
          </div>
        </section>

        {/* 
          ADD MORE SECTIONS HERE:
          Feel free to add more sections like:
          - Skills & Expertise
          - Education Details
          - Values & Principles
          - Fun Facts
          - etc.
          
          Just copy the section structure above and customize!
        */}
      </ContentSection>
    </main>
  );
}

