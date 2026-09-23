import { FaQuoteLeft } from 'react-icons/fa';
import AnimatedSection from '../effects/AnimatedSection.jsx';
import TiltCard from '../effects/TiltCard.jsx';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: 'David delivered exceptional work on our customer operations platform, modernizing critical workflows while maintaining system stability.',
      author: 'Senior Product Manager, LeetXender'
    },
    {
      id: 2,
      quote: 'David\'s ability to optimize complex systems while improving user experience made him a valuable asset to our team.',
      author: 'CTO, Smmleet'
    }
  ];

  return (
    <section id="testimonials" className="px-5 py-24 md:px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16">
          <AnimatedSection animation="fade-up" className="mb-8">
            <span className="font-code text-sm text-primary-container">
              // TESTIMONIALS
            </span>
            <h2 className="mt-2 font-headline text-4xl text-on-surface">
              Testimonials
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <AnimatedSection key={testimonial.id} animation="fade-left">
                <TiltCard>
                  <div className="rounded-2xl border border-outline-variant bg-surface-container-low p-6 transition-all duration-300 hover:border-primary-container/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.08)]">
                    <blockquote className="mb-4 border-l-2 border-primary-container/30 pl-4 italic text-on-surface-variant">
                      "{testimonial.quote}"
                    </blockquote>
                    <p className="font-medium text-primary-container">
                      {testimonial.author}
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