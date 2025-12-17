import { ContentSection } from '@/components/ContentSection';
import ContactForm from '@/components/ContactForm';

/**
 * Contact Page
 * 
 * EDIT THIS FILE TO:
 * - Update contact page description
 * - Modify page layout
 * 
 * Location: app/contact/page.tsx
 */

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col py-12">
      <ContentSection>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
          Get In Touch
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          {/* EDIT THIS PARAGRAPH */}
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            I'm always open to connecting with fellow product managers, engineers, and 
            anyone interested in building great products. Feel free to reach out using the form below.
          </p>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Send me a message!
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <ContactForm />
          </div>
        </div>
      </ContentSection>
    </main>
  );
}
