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
      title: 'Product Management Fellow',
      organization: 'Christensen Family Center for Innovation',
      location: 'Durham, NC',
      dateRange: 'Jan 2025 – Present',
      bullets: [
        'Co-led launch of Duke Product Lab, pairing 4+ student teams with industry partners to build real tech products',
        'Mentoring 20+ student product managers on core skills, including user research, KPIs, and product strategy',
        "Oversaw hiring and onboarding of 15+ student PMs, designers, and engineers for Product Lab's inaugural cohort",
      ],
    },
    {
      title: 'Product Manager',
      organization: 'GameRun',
      location: 'Durham, NC',
      dateRange: 'Sep 2025 – Dec 2025',
      bullets: [
        'Led development of an AI-driven sports analytics tool enabling elite baseball athletes to visualize progress, track performance, and receive data-backed, personalized training insights',
        'Conducted 15+ user discovery interviews with athletes and coaches to identify usability and visualization needs',
        'Directed 5+ prototype iterations in Figma and Lovable, translating user insights into high-impact UX refinements',
        'Defined roadmap and 4 core MVP success metrics to align design and engineering teams for launch readiness',
      ],
    },
    {
      title: 'Project Management Intern',
      organization: 'First Citizens Bank',
      location: 'Raleigh, NC',
      dateRange: 'May 2025 – Sep 2025',
      bullets: [
        'Supported the Commercial Digital Program, maintaining documentation for 8+ concurrent product initiatives',
        'Independently developed a prioritization framework adopted by Enterprise Project Office leadership, reducing project intake time by ~20% through strategic, technical, and customer impact criteria',
        'Assisted with backlog refinement of 100+ Jira tickets, improving sprint readiness for 2026 product cycle',
      ],
    },
    {
      title: 'Product Manager',
      organization: 'BabyBumps',
      location: 'Durham, NC',
      dateRange: 'Sep 2024 – Dec 2024',
      bullets: [
        'Delivered a functional MVP for a surrogacy startup in two 4-week sprints, from Figma wireframes to JavaScript web app, enabling early testing (10+ users) and validating product-market fit',
        'Drove product vision and strategy, developing a stakeholder-aligned roadmap to meet user and business needs',
        'Managed cross-functional team of 4 engineers and designers, driving on-time delivery and stakeholder alignment',
        'Conducted 12+ user research sessions, translating feedback into prioritized feature updates',
      ],
    },
    {
      title: 'Project Engineering Intern',
      organization: 'Ameresco',
      location: 'Columbia, MD',
      dateRange: 'May 2024 – Aug 2024',
      bullets: [
        'Managed budgets, timelines, and scope for 3 contracted renewable energy projects valued at $100M+ each',
        'Analyzed 10,000+ climate and energy data points to identify performance trends and inform key project metrics',
      ],
    },
    {
      title: 'Mechanical Engineering Intern',
      organization: 'Makai Ocean Engineering',
      location: 'Waimanalo, HI',
      dateRange: 'May 2023 – Aug 2023',
      bullets: [
        'Designed and assembled 100+ subsea components and prototype systems using CAD software',
        'Performed assembly, testing, and lean manufacturing of hardware components, improving efficiency by ~15%',
      ],
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
      bullets: [
        "Founded organization serving 40+ Duke students promoting diversity and inclusion rooted in Hawaiian culture",
        'Organized Musubi for Maui fundraiser, raising $1,700+ for the Lahaina wildfire relief efforts',
        "Established mentorship program matching 100% of incoming Hawai'i freshmen with upperclass mentors",
      ],
    },
    {
      title: 'Director of Programming',
      organization: 'Coach2Inspire',
      location: 'Durham, NC',
      dateRange: 'Sep 2021 – Apr 2025',
      bullets: [
        'Coached Durham youth teams emphasizing values of leadership, discipline, teamwork, and healthy living',
        'Managed 15+ committee members, organizing training programs, drill resources, and clinics (50+ participants)',
      ],
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
                bullets={exp.bullets}
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
                bullets={exp.bullets}
                isLeadership={true}
              />
            ))}
          </div>
        </section>
      </ContentSection>
    </main>
  );
}

