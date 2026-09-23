import { FaUserTie } from 'react-icons/fa';
import AnimatedSection from '../effects/AnimatedSection.jsx';
import TiltCard from '../effects/TiltCard.jsx';

export default function References() {
  const references = [
    {
      id: 1,
      name: 'Chukwuma Okonkwo',
      role: 'Senior Product Manager',
      company: 'LeetXender',
      email: 'chukwuma.okonkwo@leetxender.com',
      phone: '+234 801 XXX XXXX',
      quote: 'David delivered exceptional work on our customer operations platform, modernizing critical workflows while maintaining system stability.'
    },
    {
      id: 2,
      name: 'Emeka Adebayo',
      role: 'CTO',
      company: 'Smmleet',
      email: 'emeka.adebayo@smmleet.com',
      phone: '+234 802 XXX XXXX',
      quote: 'David\'s ability to optimize complex systems while improving user experience made him a valuable asset to our team.'
    },
    {
      id: 3,
      name: 'Dr. Fatima Bello',
      role: 'Research Lead',
      company: 'Nigerian AI Research Institute',
      email: 'fatima.bello@nairi.edu.ng',
      phone: '+234 803 XXX XXXX',
      quote: 'David brings strong technical depth and a collaborative mindset to every project. His ML deployment work was impressive.'
    }
  ];

  return (
    <section id="references" className="px-5 py-24 md:px-6">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection animation="fade-up" className="mb-16">
          <p>Dummy Page</p>
          <span className="font-code text-xs text-primary-container uppercase tracking-widest">
            // References
          </span>
          <h2 className="mt-4 font-headline text-5xl font-bold text-on-surface leading-tight">
            Professional References
          </h2>
          <p className="mt-5 text-on-surface-variant max-w-xl leading-relaxed text-base">
            People I've worked with who can speak to my skills, work ethic, and contributions.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {references.map((ref, index) => (
            <AnimatedSection key={ref.id} animation="fade-left">
              <TiltCard>
                <div className="rounded-2xl border border-outline-variant bg-surface-container-low p-6 transition-all duration-300 hover:border-primary-container/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.08)] flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-container/10">
                      <span className="font-headline text-lg font-bold text-primary-container">
                        {ref.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline text-lg font-bold text-on-surface leading-tight">
                        {ref.name}
                      </h4>
                      <p className="text-xs text-primary-container font-medium">
                        {ref.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-on-surface-variant mb-4 italic leading-relaxed">
                    "{ref.quote}"
                  </p>

                  <div className="mt-auto pt-4 border-t border-outline-variant/40 space-y-2">
                    <p className="text-xs text-on-surface-variant font-semibold uppercase tracking-widest">
                      {ref.company}
                    </p>
                    <a
                      href={`mailto:${ref.email}`}
                      className="flex items-center gap-2 text-sm text-primary-container hover:opacity-70 transition-opacity"
                    >
                      <span>✉</span>
                      <span className="truncate">{ref.email}</span>
                    </a>
                    <p className="flex items-center gap-2 text-sm text-on-surface-variant">
                      <span>📞</span>
                      <span>{ref.phone}</span>
                    </p>
                  </div>
                </div>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" className="mt-12 text-center">
          <p className="text-sm text-on-surface-variant">
            Interested in connecting? Feel free to reach out via the{' '}
            <a href="/contact" className="text-primary-container font-semibold hover:underline">Contact</a>{' '}
            page.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
