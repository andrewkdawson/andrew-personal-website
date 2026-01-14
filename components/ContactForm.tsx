'use client';

import { useForm, ValidationError } from '@formspree/react';

/**
 * ContactForm Component
 * 
 * Integrated with Formspree for form submission handling.
 * 
 * EDIT THIS FILE TO:
 * - Change form field labels
 * - Modify validation messages
 * - Update success/error messages
 * - Change form ID if needed (currently: mrezzpoq)
 * 
 * Location: components/ContactForm.tsx
 * 
 * Formspree Form ID: mrezzpoq
 * Formspree Endpoint: https://formspree.io/f/mrezzpoq
 */
export default function ContactForm() {
  const [state, handleSubmit] = useForm('mrezzpoq');

  // Show success message after successful submission
  if (state.succeeded) {
    return (
      <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
        <p className="text-sm text-green-800 dark:text-green-200">
          Thank you! Your message has been sent. I'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-text-secondary mb-2"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-focus focus:border-transparent bg-elevated text-text-primary placeholder:text-text-muted"
          placeholder="Your name"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-sm text-red-600 dark:text-red-400" />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-text-secondary mb-2"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-focus focus:border-transparent bg-elevated text-text-primary placeholder:text-text-muted"
          placeholder="your.email@example.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-red-600 dark:text-red-400" />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-text-secondary mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-focus focus:border-transparent bg-elevated text-text-primary placeholder:text-text-muted"
          placeholder="Your message..."
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-sm text-red-600 dark:text-red-400" />
      </div>

      {state.errors && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-sm text-red-800 dark:text-red-200">
            Something went wrong. Please try again later.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full md:w-auto px-6 py-3 bg-accent hover:bg-accent-strong text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-focus focus:ring-offset-2 focus:ring-offset-surface"
      >
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
