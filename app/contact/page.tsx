import { ContentSection } from '@/components/ContentSection';
import { ContactForm } from '@/components/ContactForm';

/**
 * Contact Page
 * 
 * EDIT THIS FILE TO:
 * - Update contact information (email, LinkedIn)
 * - Modify contact page description
 * - Change contact info layout
 * 
 * Location: app/contact/page.tsx
 * 
 * Content source: Andrew_Dawson_Resume_26_v9.pdf
 */

export default function Contact() {
  // EDIT THESE CONTACT DETAILS
  const contactInfo = {
    email: 'andrew@kwondawson.com',
    linkedin: 'https://linkedin.com/in/andrewkdawson',
  };

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
            anyone interested in building great products. Feel free to reach out via 
            email or LinkedIn, or use the form below.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Contact Information
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                Email
              </h3>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-lg text-blue-600 dark:text-blue-400 hover:underline"
              >
                {contactInfo.email}
              </a>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                LinkedIn
              </h3>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-600 dark:text-blue-400 hover:underline"
              >
                {contactInfo.linkedin}
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Send a Message
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <ContactForm />
          </div>
        </div>
      </ContentSection>
    </main>
  );
}

