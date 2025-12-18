import { ContentSection } from '@/components/ContentSection';
import Image from 'next/image';

export default function HuiOHawaiiExperience() {
  return (
    <main className="min-h-screen flex flex-col py-12">
      <ContentSection>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Founder &amp; President, Duke Hui ʻO Hawaiʻi
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Durham, NC · Dec 2023 – May 2025
        </p>

        <section className="prose prose-lg dark:prose-invert max-w-none mb-10 space-y-4">
          <p>
            Founding Hui ʻO Hawaiʻi at Duke grew out of a real absence I felt as a student from
            Oʻahu. When I first arrived in Durham, there wasn&apos;t a cohesive community for
            students with connections to Hawaiʻi—no place where ʻohana, plate lunch, and the
            cadence of our language were simply understood. I missed the aloha spirit I grew up
            with and wanted to bring a piece of that to my new home.
          </p>
          <p>
            I started Hui ʻO Hawaiʻi with a simple mission: share the warmth and values of Hawaiʻi
            with the broader Duke community while creating a support system for students from the
            islands. With an incredible leadership team, we built programming that ranges from
            cultural nights to small gatherings where students can just exhale and be themselves.
          </p>
        </section>

        <section className="mb-10">
          <div className="relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/hawaii-exec.jpg"
              alt="Hui O Hawai'i members at Duke University"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        <section className="prose prose-lg dark:prose-invert max-w-none mb-10 space-y-4">
          <p>
            Two initiatives that mean a lot to me are our Musubi for Maui fundraiser—where we made
            and sold spam musubi to raise over $1,700 for Lahaina wildfire relief—and a mentorship
            program that matches every incoming student from Hawaiʻi with an upperclass mentor
            based on hometown, major, and interests. Both are small ways of making sure students
            feel seen, supported, and connected to home even when they&apos;re 5,000 miles away.
          </p>
        </section>

        <section className="mb-10">
          <div className="relative w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/musubi.jpg"
              alt="Musubi for Maui fundraiser event"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        <section className="prose prose-lg dark:prose-invert max-w-none mb-10 space-y-4">
          <p>
            The most fulfilling part has been watching new students walk into our events and
            instantly relax. Knowing that Hui ʻO Hawaiʻi will outlive my time at Duke—and keep that
            sense of ʻohana alive for future classes—is one of the things I&apos;m proudest of.
          </p>
        </section>
      </ContentSection>
    </main>
  );
}


