import { FaTools } from 'react-icons/fa';
import AnimatedSection from '../../effects/AnimatedSection.jsx';
import TiltCard from '../../effects/TiltCard.jsx';

export default function MiniTools() {
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
    <section className="px-5 md:px-6">
      <div className="mx-auto max-w-[1200px]">
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
                  <h4 className="mb-3 font-headline text-xl text-on-surface">
                    {tool.title}
                  </h4>
                  <p className="mb-4 text-on-surface-variant">
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
    </section>
  );
}