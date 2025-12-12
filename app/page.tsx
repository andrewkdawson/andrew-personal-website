import { Hero } from '@/components/Hero';
import { ContentSection } from '@/components/ContentSection';

/**
 * Home Page
 * 
 * EDIT THIS FILE TO:
 * - Update the hero text (line ~20)
 * - Change the intro paragraph (line ~25-28)
 * - Modify the "Currently" and "Studying" sections (lines ~35-45)
 * 
 * Location: app/page.tsx
 * 
 * Content source: Andrew_Dawson_Resume_26_v9.pdf
 */

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <Hero title="Aloha, I'm Andrew" />

      {/* Intro Paragraph Section */}
      <ContentSection className="mb-12">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* 
            EDIT THIS PARAGRAPH:
            Replace the text below with your own introduction.
            This is a starter paragraph based on the resume - feel free to customize it!
          */}
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            I'm Andrew Kwon Dawson — a product-focused MechE + CS student at Duke University 
            studying Product Management and Innovation. I build user-centered products, lead 
            student teams, and mentor aspiring product managers.
          </p>
        </div>
      </ContentSection>

      {/* Status Section */}
      <ContentSection className="mb-16">
        <div className="space-y-6">
          {/* Currently Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Currently:
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300 font-medium">
              Product Management Fellow @ Christensen Family Center for Innovation
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 ml-4">
              • Co-led launch of Duke Product Lab; mentor 20+ student PMs; oversaw hiring & onboarding for inaugural cohort.
            </p>
          </div>

          {/* Studying Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Studying:
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300">
              <span className="font-medium">Duke University</span> — MEM ('26), BS Mechanical Engineering & BA Computer Science ('25)
            </p>
          </div>
        </div>
      </ContentSection>
    </main>
  );
}
