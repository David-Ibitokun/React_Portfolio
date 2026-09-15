import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import AnimatedSection from '../effects/AnimatedSection.jsx';
import TiltCard from '../effects/TiltCard.jsx';

export default function Resume() {
  const experiences = [
    {
      id: 1,
      role: 'Full-Stack Developer',
      company: 'Visaro Nigeria',
      website: 'visaro.ng',
      date: 'December 2025 - August 2026',
      location: 'Remote',
      description: [
        'Designed and implemented modern, minimalist UI/UX components with seamless state integration.',
        'Executed technical communication guidelines and user verification onboarding pipelines.',
      ],
      skills: ['React', 'JavaScript', 'REST APIs', 'Tailwind CSS', 'TypeScript'],
    },
    {
      id: 2,
      role: 'Back-End Developer',
      company: 'Jexhub Limited',
      website: null,
      date: 'November 2024 - January 2026',
      location: 'Remote',
      description: [
        'Co-developed and maintained Jexcelhub, an enterprise e-commerce platform using Django and MySQL.',
        'Built server-side business logic for cart, inventory, and order fulfillment pipelines.',
        'Engineered RESTful endpoints with strict data validation in Agile sprint cycles.',
      ],
      skills: ['Python', 'Django', 'MySQL', 'REST APIs', 'Git'],
    },
  ];

  return (
    <section id="resume" className="px-5 py-24 md:px-6">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection animation="fade-up" className="mb-12">
          <span className="font-code text-sm text-primary-container">
            03 // RESUME
          </span>
          <h2 className="mt-2 font-headline text-4xl text-on-surface">
            Experience
          </h2>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-outline-variant md:block" />

          <div className="space-y-8">
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
