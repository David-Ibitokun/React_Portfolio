import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';
import AnimatedSection from '../effects/AnimatedSection.jsx';
import TiltCard from '../effects/TiltCard.jsx';

export default function Resume() {
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Bells University of Technology, Ota',
      date: '2021 - 2026',
      description: []
    }
  ];

  const experiences = [
    {
      id: 3,
      role: 'Intern',
      company: 'APTECH',
      website: null,
      date: 'March 2025 – August 2025',
      location: 'Abeokuta, Ogun State, Nigeria',
      description: [
        'Architected and deployed scalable full-stack web applications with Django (e-commerce website) and React frontends.',
        'Designed and optimized relational database schemas using SQL.',
        'Performed data analytics and business intelligence tasks using MS Excel for data analysis.'
      ],
      skills: ['Django', 'React', 'SQL', 'MS Excel']
    },
    {
      id: 4,
      role: 'Full-Stack Developer',
      company: 'LeetXender',
      website: null,
      date: '2025 - Present',
      location: 'Remote',
      description: [
        'Redesigned a Django-based customer operations platform with Tailwind CSS and Bootstrap, improving support dashboards, ticketing, chat, and analytics.',
        'Built AJAX-driven CRUD, search, and caching workflows for contacts, automation rules, and campaigns.',
        'Improved inbox filtering, message validation, reply/forward handling, and campaign reporting across email and SMS.',
        'Shipped secure account-management features including password changes, account deletion, and profile validation.',
        'Developed mobile-first dashboards and global search with Python, Django, JavaScript, AJAX, and Chart.js.'
      ],
      skills: ['Python / Django', 'JavaScript / AJAX', 'Tailwind CSS / Bootstrap', 'Chart.js', 'HTML / CSS', 'CSV import']
    },
    {
      id: 5,
      role: 'Full-Stack Developer',
      company: 'Smmleet',
      website: null,
      date: '2025 - Present',
      location: 'Remote',
      description: [
        'Built Django-based SMS activation and rental workflows using the GrizzlySMS API, including service selection, status tracking, and SMS-code retrieval.',
        'Designed REST API endpoints, models, migrations, views, serializers, and admin tooling for SMS activations.',
        'Optimized dashboard and announcement queries with deferred fields and SQL annotations, reducing page response times.',
        'Modernized the Django dashboard with modular templates, dynamic routing, responsive layouts, and wallet integration across payments and SMS workflows.'
      ],
      skills: ['Python / Django', 'REST API', 'SQL', 'Responsive Design', 'GrizzlySMS API']
    }
  ];

  return (
    <section id="resume" className="px-5 py-24 md:px-6">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection animation="fade-up" className="mb-12">
          <span className="font-code text-sm text-primary-container">
            // RESUME
          </span>
          <h2 className="mt-2 font-headline text-4xl text-on-surface">
            Education and Experiences
          </h2>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-outline-variant md:block" />
          <div className="space-y-8">
            {education.map((edu, index) => (
              <AnimatedSection key={edu.id} animation="fade-left" delay={index * 150}>
                <TiltCard className="relative md:ml-12">
                  <div className="relative rounded-2xl border border-outline-variant bg-surface-container-low p-6 transition-all duration-300 hover:border-primary-container/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.08)]">
                    <span className="absolute -left-3 top-8 hidden h-6 w-6 rounded-full border-2 border-outline-variant bg-surface transition-colors duration-300 hover:border-primary-container md:block">
                      <span className="absolute inset-1 rounded-full bg-primary-container animate-pulse" />
                    </span>

                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="flex-1">
                        <h3 className="font-headline text-2xl text-on-surface">
                          {edu.degree}
                        </h3>
                        <p className="mt-1 text-base font-semibold text-primary-container">
                          {edu.institution}
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-on-surface-variant">
                          <span className="flex items-center gap-1.5 transition-colors hover:text-primary-container">
                            <FaCalendarAlt size={14} />
                            {edu.date}
                          </span>
                        </div>
                      </div>

                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-container/10 text-primary-container transition-all hover:bg-primary-container hover:text-on-primary">
                        <FaGraduationCap size={20} />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </AnimatedSection>
            ))}

            {experiences.map((experience, index) => (
              <AnimatedSection key={experience.id} animation="fade-left" delay={index * 150}>
                <TiltCard className="relative md:ml-12">
                  <div className="relative rounded-2xl border border-outline-variant bg-surface-container-low p-6 transition-all duration-300 hover:border-primary-container/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.08)]">
                    <span className="absolute -left-3 top-8 hidden h-6 w-6 rounded-full border-2 border-outline-variant bg-surface transition-colors duration-300 hover:border-primary-container md:block">
                      <span className="absolute inset-1 rounded-full bg-primary-container animate-pulse" />
                    </span>

                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="flex-1">
                        <h3 className="font-headline text-2xl text-on-surface">
                          {experience.role}
                        </h3>
                        <p className="mt-1 text-base font-semibold text-primary-container">
                          {experience.company}
                          {experience.website && (
                            <span className="text-on-surface-variant">
                              {' '}
                              ({experience.website})
                            </span>
                          )}
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-on-surface-variant">
                          <span className="flex items-center gap-1.5 transition-colors hover:text-primary-container">
                            <FaCalendarAlt size={14} />
                            {experience.date}
                          </span>
                          <span className="flex items-center gap-1.5 transition-colors hover:text-primary-container">
                            <FaMapMarkerAlt size={14} />
                            {experience.location}
                          </span>
                        </div>

                        <ul className="mt-5 space-y-2 border-l-2 border-primary-container/30 pl-4">
                          {experience.description.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-base leading-relaxed text-on-surface-variant transition-colors hover:text-on-surface"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {experience.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full bg-surface-dim px-3 py-1 text-xs font-medium text-on-surface-variant transition-all hover:bg-primary-container/10 hover:text-primary-container"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-container/10 text-primary-container transition-all hover:bg-primary-container hover:text-on-primary">
                        <FaBriefcase size={20} />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
