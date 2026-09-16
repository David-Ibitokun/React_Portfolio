import { FaProjectDiagram, FaQuoteLeft, FaTrophy, FaCertificate, FaTools } from 'react-icons/fa';
import AnimatedSection from '../effects/AnimatedSection.jsx';
import TiltCard from '../effects/TiltCard.jsx';

export default function ProjectsOverview() {
  const projects = [
    {
      id: 1,
      title: 'LeetXender Platform',
      description: 'Modernized Django customer operations platform with responsive UI, enhancing usability and cross-team efficiency.',
      tech: ['Python / Django', 'JavaScript / AJAX', 'Tailwind CSS', 'Chart.js'],
      link: null
    },
    {
      id: 2,
      title: 'Smmleet SMS System',
      description: 'Built SMS activation workflows via GrizzlySMS API with REST API endpoints and responsive UI.',
      tech: ['Python / Django', 'REST API', 'SQL', 'GrizzlySMS API'],
      link: null
    },
    {
      id: 3,
      title: 'E-commerce Dashboard',
      description: 'Architected full-stack web applications with Django and React frontends during APTECH internship.',
      tech: ['Django', 'React', 'SQL', 'MS Excel'],
      link: null
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: 'Ibrahim delivered exceptional work on our customer operations platform, modernizing critical workflows while maintaining system stability.',
      author: 'Senior Product Manager, LeetXender'
    },
    {
      id: 2,
      quote: 'His ability to optimize complex systems while improving user experience made him a valuable asset to our team.',
      author: 'CTO, Smmleet'
    }
  ];

  const awards = [
    {
      id: 1,
      title: 'Best Innovation Award',
      event: '2025 Tech Innovation Hackathon',
      description: 'Recognized for developing a novel SMS activation system that reduced processing time by 40%'
    },
    {
      id: 2,
      title: 'Top Contributor',
      event: 'DjangoCon Africa 2025',
      description: 'Acknowledged for significant contributions to open-source Django community projects'
    }
  ];

  const certifications = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2025'
    },
    {
      id: 2,
      title: 'Google Professional Data Engineer',
      issuer: 'Google Cloud',
      date: '2024'
    },
    {
      id: 3,
      title: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      date: '2023'
    }
  ];

  const miniTools = [
    {
      id: 1,
      title: 'CLI Project Manager',
      description: 'Python tool for scaffolding and managing multiple project directories with version tracking',
      tech: ['Python', 'Click', 'Git']
    },
    {
      id: 2,
      title: 'Data Visualizer',
      description: 'React component library for generating dynamic charts from CSV data',
      tech: ['React', 'D3.js', 'TypeScript']
    }
  ];

  return (
    <section id="projects-overview" className="px-5 py-24 md:px-6">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection animation="fade-up" className="mb-12">
          <span className="font-code text-sm text-primary-container">
            // PROJECTS & ACHIEVEMENTS
          </span>
          <h2 className="mt-2 font-headline text-4xl text-on-surface">
            Portfolio & Recognition
          </h2>
        </AnimatedSection>

        {/* Featured Projects */}
        <div className="mb-16">
          <AnimatedSection animation="fade-up" className="mb-8">
            <div className="flex items-center gap-3">
              <FaProjectDiagram className="text-primary-container" size={24} />
              <h3 className="font-headline text-2xl text-on-surface">
                Featured Projects
              </h3>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <AnimatedSection key={project.id} animation="fade-left">
                <TiltCard>
                  <div className="rounded-2xl border border-outline-variant bg-surface-container-low p-6 transition-all duration-300 hover:border-primary-container/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.08)]">
                    <h4 className="font-headline text-xl text-on-surface mb-3">
                      {project.title}
                    </h4>
                    <p className="text-on-surface-variant mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-surface-dim px-3 py-1 text-xs font-medium text-on-surface-variant"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary-container hover:underline"
                      >
                        View Project <span>→</span>
                      </a>
                    )}
                  </div>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <AnimatedSection animation="fade-up" className="mb-8">
            <div className="flex items-center gap-3">
              <FaQuoteLeft className="text-primary-container" size={24} />
              <h3 className="font-headline text-2xl text-on-surface">
                Testimonials
              </h3>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <AnimatedSection key={testimonial.id} animation="fade-left">
                <TiltCard>
                  <div className="rounded-2xl border border-outline-variant bg-surface-container-low p-6 transition-all duration-300 hover:border-primary-container/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.08)]">
                    <blockquote className="text-on-surface-variant italic border-l-2 border-primary-container/30 pl-4 mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <p className="text-primary-container font-medium">
                      {testimonial.author}
                    </p>
                  </div>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Awards & Hackathons */}
        <div className="mb-16">
          <AnimatedSection animation="fade-up" className="mb-8">
            <div className="flex items-center gap-3">
              <FaTrophy className="text-primary-container" size={24} />
              <h3 className="font-headline text-2xl text-on-surface">
                Awards & Hackathons
              </h3>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {awards.map((award) => (
              <AnimatedSection key={award.id} animation="fade-left">
                <TiltCard>
                  <div className="rounded-2xl border border-outline-variant bg-surface-container-low p-6 transition-all duration-300 hover:border-primary-container/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.08)]">
                    <h4 className="font-headline text-xl text-on-surface mb-2">
                      {award.title}
                    </h4>
                    <p className="text-primary-container mb-2">
                      {award.event}
                    </p>
                    <p className="text-on-surface-variant">
                      {award.description}
                    </p>
                  </div>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <AnimatedSection animation="fade-up" className="mb-8">
            <div className="flex items-center gap-3">
              <FaCertificate className="text-primary-container" size={24} />
              <h3 className="font-headline text-2xl text-on-surface">
                Certifications & Courses
              </h3>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {certifications.map((cert) => (
              <AnimatedSection key={cert.id} animation="fade-left">
                <TiltCard>
                  <div className="rounded-2xl border border-outline-variant bg-surface-container-low p-6 transition-all duration-300 hover:border-primary-container/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.08)]">
                    <h4 className="font-headline text-xl text-on-surface mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-primary-container">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Mini Tools */}
        <div>
          <AnimatedSection animation="fade-up" className="mb-8">
            <div className="flex items-center gap-3">
              <FaTools className="text-primary-container" size={24} />
              <h3 className="font-headline text-2xl text-on-surface">
                Mini Tools & Utilities
              </h3>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {miniTools.map((tool) => (
              <AnimatedSection key={tool.id} animation="fade-left">
                <TiltCard>
                  <div className="rounded-2xl border border-outline-variant bg-surface-container-low p-6 transition-all duration-300 hover:border-primary-container/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.08)]">
                    <h4 className="font-headline text-xl text-on-surface mb-3">
                      {tool.title}
                    </h4>
                    <p className="text-on-surface-variant mb-4">
                      {tool.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {tool.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-surface-dim px-3 py-1 text-xs font-medium text-on-surface-variant"
                        >
                          {tech}
                        </span>
                      ))}
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
