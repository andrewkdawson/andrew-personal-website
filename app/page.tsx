import { Hero } from '@/components/Hero';
import { ContentSection } from '@/components/ContentSection';
import Image from 'next/image';

/**
 * Home Page
 * 
 * EDIT THIS FILE TO:
 * - Update the hero text (line ~20)
 * - Change the intro paragraph (line ~25-28)
 * - Modify the "Currently" and "Studying" sections (lines ~35-45)
 * - Update image paths - add your images to /public folder
 * 
 * Location: app/page.tsx
 * 
 * Content source: Andrew_Dawson_Resume_26_v9.pdf
 */

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header Image with Overlay Content */}
      {/* 
        EDIT IMAGE PATH:
        Add your landscape image to the /public folder and update the path below.
        Example: if your image is /public/landscape.jpg, use "/landscape.jpg"
      */}
      <div className="relative w-full min-h-screen flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/landscape.jpg"
            alt="Landscape"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40 dark:bg-black/50"></div>
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 flex-1 flex flex-col">
          {/* Hero Section */}
          {/* 
            EDIT IMAGE PATH:
            Add your portrait image to the /public folder and update the path below.
            Example: if your image is /public/andrew-portrait.jpg, use "/andrew-portrait.jpg"
          */}
          <Hero 
            title="Aloha, I'm Andrew!" 
            imageSrc="/headshot.jpeg"
            imageAlt="Andrew Kwon Dawson"
          />

          {/* Intro Paragraph Section */}
          <ContentSection className="mb-12">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {/* 
                EDIT THIS PARAGRAPH:
                Replace the text below with your own introduction.
                This is a starter paragraph based on the resume - feel free to customize it!
              */}
              <p className="text-lg md:text-xl text-white leading-relaxed mb-8 drop-shadow-lg">
                I'm a product-focused Master of Engineering Management student at Duke University. 
                Raised in Honolulu, Hawai'i, I find purpose in building products with 
                aloha, the philosophy of love and empathy that I was taught to live by.            
              </p>
            </div>
          </ContentSection>

          {/* Status Section */}
          <ContentSection className="mb-16">
            <div className="space-y-6">
              {/* Currently Section */}
              <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg p-6 border border-white/20 dark:border-gray-700/50 shadow-xl">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Currently: Product Management Fellow @ Christensen Family Center for Innovation
                </h2>
                <p className="text-base text-gray-700 dark:text-gray-300">
                Co-led launch of Duke Product Lab; mentor 20+ student PMs; 
                oversaw hiring & onboarding for inaugural cohort.
                </p>
              </div>

              {/* Studying Section */}
              <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg p-6 border border-white/20 dark:border-gray-700/50 shadow-xl">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Studying: Duke University
                </h2>
                <p className="text-base text-gray-700 dark:text-gray-300">
                  Master of Engineering Management ('26)
                  <br />
                  B.S. Mechanical Engineering & B.A. Computer Science ('25)
                </p>
              </div>
            </div>
          </ContentSection>
        </div>
      </div>
    </main>
  );
}
