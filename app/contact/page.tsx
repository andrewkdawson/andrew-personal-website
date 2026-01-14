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
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-8">
          Get In Touch
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          {/* EDIT THIS PARAGRAPH */}
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            I'm always open to connecting with fellow product managers, readers, sports fans,
            and anyone interested in building great products. Feel free to reach out using the form below!
          </p>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-text-primary mb-6">
            Send me a message!
          </h2>
          <div className="bg-surface rounded-lg p-6 border border-border shadow-sm hover:shadow-md hover:border-accent/50 transition-all">
            <ContactForm />
          </div>
        </div>
      </ContentSection>
    </main>
  );
}
