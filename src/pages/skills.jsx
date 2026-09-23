import { MdDns, MdDesktopWindows, MdArchitecture } from 'react-icons/md';
import AnimatedSection from '../effects/AnimatedSection.jsx';
import TiltCard from '../effects/TiltCard.jsx';

export default function Skills() {
  const skillGroups = [
    {
      title: 'Backend Development',
      icon: <MdDns size={24} />,
      items: ['Django / Django REST', 'Python', 'PostgreSQL / MySQL', 'API Design (REST)'],
    },
    {
      title: 'Frontend Integration',
      icon: <MdDesktopWindows size={24} />,
      items: ['React.js', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Tailwind CSS'],
    },
    {
      title: 'Tools & Architecture',
      icon: <MdArchitecture size={24} />,
      items: ['Git & GitHub', 'Docker (Basic)', 'Postman', 'System Design'],
    },
  ];

  return (
    <section id="skills" className="px-5 py-24 md:px-6">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection animation="fade-up" className="mb-8">
          <span className="font-code text-sm text-primary-container">
            // TECH_STACK
          </span>
          <h2 className="mt-2 font-headline text-4xl text-on-surface">
            Core Capabilities
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <AnimatedSection key={group.title} animation="fade-up" delay={index * 100}>
              <TiltCard className="h-full">
                <article className="h-full rounded-2xl border border-outline-variant bg-surface-container p-6 transition-all duration-300 hover:border-primary-container hover:shadow-[0_0_25px_rgba(0,240,255,0.1)]">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded bg-surface-variant text-primary-container transition-transform duration-300 group-hover:scale-110">
                      {group.icon}
                    </div>
                  </div>

                  <h3 className="font-headline text-2xl text-on-surface">
                    {group.title}
                  </h3>
                  <ul className="mt-4 flex flex-col gap-3 font-code text-sm text-on-surface-variant">
                    {group.items.map((item) => (
                      <li key={item} className="group/item flex items-center gap-2">
                        <span className="text-primary-container transition-transform duration-200 group-hover/item:translate-x-1">›</span>
                        <span className="transition-colors group-hover/item:text-on-surface">{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
