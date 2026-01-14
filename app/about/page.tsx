import { ContentSection } from '@/components/ContentSection';
import { MediaCarousel } from '@/components/MediaCarousel';

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

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left: Story / Text */}
          <section className="md:flex-1 mb-12">
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
                Growing up in Hawai’i, I was taught to live with aloha,
                a philosophy of love, empathy, and responsibility to care
                for others. These values shape how I see technology: not
                just as innovation, but as a way to connect and improve lives.
                That perspective drew me to product management, where
                I’ve found purpose in the intersection of technology and the
                human experience.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Currently, I’m pursuing my Master of Engineering Management
                at Duke, adding hands-on learning in strategy, product development,
                and leadership to my technical background from my undergraduate
                double major in Mechanical Engineering and Computer Science.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                As a Product Management Fellow for the Christensen Family
                Center for Innovation, I mentor aspiring PMs and helped lead the
                launch of Duke Product Lab. I have hands-on product experience
                working with BabyBumps, a surrogacy startup, and GameRun, a
                sports-tech AI startup.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Outside the classroom, I’m a former collegiate basketball and
                water polo recruit who still loves all things sports, and I’m
                passionate about storytelling, whether through books, film, or music.
                I'm an avid reader with an unhealthy love for the Phoenix Suns, and
                I'm faith-driven, striving to keep God first in all aspects of life.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Check out my{' '}
                <a
                  href="https://www.goodreads.com/andrewkdawson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  Goodreads
                </a>{' '}
                to see what I'm reading!
              </p>
            </div>
          </section>

          {/* Right: Media Carousel */}
          <aside className="md:w-80 w-full">
            {/* 
              EDIT MEDIA:
              Open components/MediaCarousel.tsx and update the `mediaItems` array
              to point to your own photos and videos.
            */}
            <MediaCarousel />
          </aside>
        </div>


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

