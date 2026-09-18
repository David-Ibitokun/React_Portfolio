import { FaTrophy } from 'react-icons/fa';
import AnimatedSection from '../../effects/AnimatedSection.jsx';
import TiltCard from '../../effects/TiltCard.jsx';

export default function AwardsHackathons() {
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

  return (
    <section className="px-5 md:px-6">
      <div className="mx-auto max-w-[1200px]">
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
                    <h4 className="mb-2 font-headline text-xl text-on-surface">
                      {award.title}
                    </h4>
                    <p className="mb-2 text-primary-container">
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
      </div>
    </section>
  );
}