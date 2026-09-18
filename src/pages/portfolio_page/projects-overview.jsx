import { FaProjectDiagram } from 'react-icons/fa';
import AnimatedSection from '../../effects/AnimatedSection.jsx';
import TiltCard from '../../effects/TiltCard.jsx';

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
      tech: ['Python / Django', 'REST API', 'SQL'],
      link: 'https://smmleet.com'
    },
    {
      id: 3,
      title: 'E-commerce Dashboard',
      description: 'Architected full-stack web applications with Django and React frontends during APTECH internship.',
      tech: ['Django', 'React', 'SQL', 'MS Excel'],
      link: 'https://davidibitokun.pythonanywhere.com/'
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
      </div>
    </section>
  );
}
