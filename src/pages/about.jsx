import AnimatedSection from '../effects/AnimatedSection.jsx';
import TiltCard from '../effects/TiltCard.jsx';

export default function About() {
  const jsonData = {
    name: 'Ibitokun David',
    role: 'Backend Engineer',
    primary_stack: ['Django', 'React', 'Python'],
    status: 'Open to opportunities',
    current_focus: 'Building robust APIs',
  };

  const renderString = (value) => (
    <span className="text-surface-tint">&quot;{value}&quot;</span>
  );

  return (
    <section id="about" className="px-5 py-24 md:px-6">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection animation="fade-up" className="mb-8">
          <span className="font-code text-sm text-primary-container">
            01 // PROFILE
          </span>
          <h2 className="mt-2 font-headline text-4xl text-on-surface">
            About the Engineer
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <AnimatedSection animation="fade-right" delay={100}>
            <TiltCard className="relative h-full overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-low p-8 transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]">
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-primary-container/5 blur-3xl" />
              <p className="relative text-base leading-relaxed text-on-surface-variant">
                Hi, I’m David, a passionate and motivated web developer with a
                growing skill set in React and Django. I enjoy turning ideas into
                real, functional web applications, combining creativity with clean,
                efficient code.
                <br />
                <br />
                I started my journey in web development with a curiosity for how
                websites work, and now I’m focused on building responsive,
                user-friendly websites and web applications. Currently, I’m
                developing projects that use React for modern frontend interfaces
                and Django for robust, secure backend systems.
                <br />
                <br />
                As I learn and grow, I’m always excited to explore new tools,
                frameworks, and challenges in web development. My goal is to keep
                improving, collaborate with great teams, and build solutions that
                make a difference. Right now, I’m building my portfolio with
                practical projects to showcase my skills, and I’m open to
                opportunities for learning, internships, and collaborations.
              </p>
            </TiltCard>
          </AnimatedSection>

          <AnimatedSection animation="fade-left" delay={200}>
            <TiltCard className="flex h-full flex-col overflow-hidden rounded-lg border border-outline-variant bg-surface-dim transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]">
              <div className="flex items-center justify-between border-b border-outline-variant bg-surface-variant px-4 py-2">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-error" />
                  <div className="h-3 w-3 rounded-full bg-[#fbbc05]" />
                  <div className="h-3 w-3 rounded-full bg-primary-container" />
                </div>
                <span className="font-code text-xs text-on-surface-variant">
                  about_me.json
                </span>
              </div>
              <div className="flex-1 overflow-auto whitespace-pre p-6 font-code text-xs text-on-surface-variant">
                <span className="text-primary-container">{'{'}</span>
                {'\n'}
                {Object.entries(jsonData).map(([key, value], index, arr) => (
                  <span key={key}>
                    {'  '}
                    <span className="text-secondary">&quot;{key}&quot;</span>
                    <span className="text-on-surface-variant">: </span>
                    {Array.isArray(value) ? (
                      <>
                        <span className="text-primary-container">[</span>
                        {'\n'}
                        {value.map((item) => (
                          <span key={item}>
                            {'    '}
                            {renderString(item)}
                            {index < value.length - 1 && (
                              <span className="text-on-surface-variant">,</span>
                            )}
                            {'\n'}
                          </span>
                        ))}
                        {'  '}
                        <span className="text-primary-container">]</span>
                      </>
                    ) : (
                      renderString(value)
                    )}
                    {index < arr.length - 1 && (
                      <span className="text-on-surface-variant">,</span>
                    )}
                    {'\n'}
                  </span>
                ))}
                <span className="text-primary-container">{'}'}</span>
              </div>
            </TiltCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
