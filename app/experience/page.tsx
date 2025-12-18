import { ContentSection } from '@/components/ContentSection';
import { ExperienceCard } from '@/components/ExperienceCard';

/**
 * Experience Page
 * 
 * EDIT THIS FILE TO:
 * - Add or remove experience entries
 * - Update role details
 * - Modify section headings
 * 
 * Location: app/experience/page.tsx
 * 
 * CONTENT SOURCE:
 * All work experience and leadership roles are taken directly from:
 * Andrew_Dawson_Resume_26_v9.pdf
 * 
 * The content has been included verbatim (cleaned for web display) and accurately
 * reflects the resume as of the date the website was created.
 */

export default function Experience() {
  // Work Experience Data
  // EDIT THIS ARRAY to add/remove/modify work experience entries
  const workExperience = [
    {
      title: 'Co-Founder',
      organization: 'GunnerPool',
      location: 'Remote',
      dateRange: 'Dec 2025 – Present',
      href: '/experience/gunnerpool',
    },
    {
      title: 'Product Management Fellow',
      organization: 'Christensen Family Center for Innovation',
      location: 'Durham, NC',
      dateRange: 'Jan 2025 – Present',
      href: '/experience/product-management-fellow-cfci',
    },
    {
      title: 'Product Manager',
      organization: 'GameRun',
      location: 'Durham, NC',
      dateRange: 'Sep 2025 – Dec 2025',
      href: '/experience/product-manager-gamerun',
    },
    {
      title: 'Project Management Intern',
      organization: 'First Citizens Bank',
      location: 'Raleigh, NC',
      dateRange: 'May 2025 – Sep 2025',
      href: '/experience/project-management-intern-first-citizens',
    },
    {
      title: 'Product Manager',
      organization: 'BabyBumps',
      location: 'Durham, NC',
      dateRange: 'Sep 2024 – Dec 2024',
      href: '/experience/product-manager-babybumps',
    },
    {
      title: 'Project Engineering Intern',
      organization: 'Ameresco',
      location: 'Columbia, MD',
      dateRange: 'May 2024 – Aug 2024',
      href: '/experience/project-engineering-intern-ameresco',
    },
    {
      title: 'Mechanical Engineering Intern',
      organization: 'Makai Ocean Engineering',
      location: 'Waimanalo, HI',
      dateRange: 'May 2023 – Aug 2023',
      href: '/experience/mechanical-engineering-intern-makai',
    },
  ];

  // Projects Data
  const projects = [
    {
      title: 'Music Madness',
      organization: 'Personal Project',
      location: 'Durham, NC',
      dateRange: '2025',
      href: '/experience/project-music-madness',
    },
    {
      title: 'Fantasy Power Rankings',
      organization: 'Personal Project',
      location: 'Durham, NC',
      dateRange: '2025',
      href: '/experience/project-fantasy-power-rankings',
    },
  ];

  // Leadership Experience Data
  // EDIT THIS ARRAY to add/remove/modify leadership entries
  const leadershipExperience = [
    {
      title: 'Founder & President',
      organization: "Duke Hui 'O Hawai'i",
      location: 'Durham, NC',
      dateRange: 'Dec 2023 – May 2025',
      href: '/experience/founder-president-duke-hui-o-hawaii',
    },
    {
      title: 'Director of Programming',
      organization: 'Coach2Inspire',
      location: 'Durham, NC',
      dateRange: 'Sep 2021 – Apr 2025',
      href: '/experience/director-of-programming-coach2inspire',
    },
  ];

  return (
    <main className="min-h-screen flex flex-col py-12">
      <ContentSection>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12">
          Experience
        </h1>

        {/* Work Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">
            Work Experience
          </h2>
          <div className="space-y-6">
            {workExperience.map((exp, index) => (
              <ExperienceCard
                key={index}
                title={exp.title}
                organization={exp.organization}
                location={exp.location}
                dateRange={exp.dateRange}
                href={exp.href}
              />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">
            Projects
          </h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <ExperienceCard
                key={index}
                title={project.title}
                organization={project.organization}
                location={project.location}
                dateRange={project.dateRange}
                href={project.href}
              />
            ))}
          </div>
        </section>

        {/* Leadership Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8">
            Leadership
          </h2>
          <div className="space-y-6">
            {leadershipExperience.map((exp, index) => (
              <ExperienceCard
                key={index}
                title={exp.title}
                organization={exp.organization}
                location={exp.location}
                dateRange={exp.dateRange}
                href={exp.href}
              />
            ))}
          </div>
        </section>
      </ContentSection>
    </main>
  );
}

