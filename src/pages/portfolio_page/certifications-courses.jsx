import { FaCertificate } from 'react-icons/fa';
import AnimatedSection from '../../effects/AnimatedSection.jsx';
import TiltCard from '../../effects/TiltCard.jsx';

export default function CertificationsCourses() {
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

  return (
    <section className="px-5 md:px-6">
      <div className="mx-auto max-w-[1200px]">
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
            {certifications.map((certification) => (
              <AnimatedSection key={certification.id} animation="fade-left">
                <TiltCard>
                  <div className="rounded-2xl border border-outline-variant bg-surface-container-low p-6 transition-all duration-300 hover:border-primary-container/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.08)]">
                    <h4 className="mb-2 font-headline text-xl text-on-surface">
                      {certification.title}
                    </h4>
                    <p className="text-primary-container">
                      {certification.issuer} • {certification.date}
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