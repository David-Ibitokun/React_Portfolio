import Profile from '../assets/images/profile_pic_1.webp';
import AnimatedSection from '../effects/AnimatedSection.jsx';
import TiltCard from '../effects/TiltCard.jsx';
import TextScramble from '../effects/TextScramble.jsx';
import FloatingElement from '../effects/FloatingElement.jsx';

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center px-5 pt-24 md:px-6"
    >
      <div className="pointer-events-none absolute inset-0 z-0 opacity-20">
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-container/30 via-background to-background" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 md:grid-cols-12">
        <AnimatedSection
          animation="fade-right"
          className="flex flex-col gap-4 md:col-span-7"
        >
          <div className="flex items-center gap-2 font-code text-sm text-primary-container">
            <span className="h-[1px] w-8 bg-primary-container" />
            <span>SYSTEM.INIT()</span>
          </div>

          <h1 className="font-headline text-5xl leading-[0.9] tracking-tighter text-on-surface md:text-7xl lg:text-[80px]">
            <TextScramble text="Ibitokun" />
            <br />
            <span className="text-on-surface-variant">
              <TextScramble text="David" delay={400} />
            </span>
          </h1>

          <h2 className="mt-2 font-headline text-2xl text-primary-container">
            &gt; Web Developer_
          </h2>

          <p className="max-w-2xl text-lg text-on-surface-variant">
            I enjoy turning ideas into real, functional web applications,
            combining creativity with clean, efficient code.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group relative overflow-hidden rounded bg-primary-container px-8 py-4 text-center font-code text-sm font-bold text-on-primary transition-all hover:shadow-[0_0_25px_rgba(0,240,255,0.5)]"
            >
              <span className="relative z-10">INITIALIZE_CONTACT</span>
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            </a>
            <a
              href="#projects"
              className="rounded border border-primary-container px-8 py-4 text-center font-code text-sm text-primary-container transition-all hover:bg-primary-container/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
            >
              VIEW_PROJECTS
            </a>
          </div>
        </AnimatedSection>

        <div className="relative flex justify-center md:col-span-5 md:justify-end">
          <FloatingElement duration={5}>
            <TiltCard className="relative h-[400px] w-[300px] md:h-[500px] md:w-[400px]">
              <div className="absolute inset-0 rotate-3 scale-105 rounded-2xl border border-outline-variant bg-surface-container opacity-50 transition-transform duration-500 hover:rotate-6" />
              <div className="absolute inset-0 -rotate-2 scale-95 rounded-2xl border border-outline-variant/50 bg-surface-container-high opacity-50 transition-transform duration-500 hover:-rotate-4" />

              <div className="group relative z-10 h-full w-full overflow-hidden rounded-2xl border border-outline bg-surface-dim shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(0,240,255,0.15)]">
                <div className="flex h-8 items-center gap-2 border-b border-outline-variant bg-surface-variant px-4">
                  <div className="h-3 w-3 rounded-full bg-error" />
                  <div className="h-3 w-3 rounded-full bg-[#fbbc05]" />
                  <div className="h-3 w-3 rounded-full bg-primary-container" />
                  <span className="ml-4 font-code text-xs text-on-surface-variant">
                    profile_img.png
                  </span>
                </div>
                <div className="relative h-[calc(100%-32px)] w-full [isolation:isolate]">
                  <img
                    src={Profile}
                    alt="Ibitokun David"
                    className="absolute inset-0 h-full w-full object-cover [image-rendering:-webkit-optimize-contrast] [transform:translateZ(0)] [backface-visibility:hidden]"
                  />
                  <img
                    src={Profile}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover grayscale transition-opacity duration-500 group-hover:opacity-0 [image-rendering:-webkit-optimize-contrast] [transform:translateZ(0)] [backface-visibility:hidden]"
                  />
                </div>
              </div>

              <div className="glass-panel absolute -bottom-6 -left-6 z-20 flex flex-col gap-1 rounded-lg border border-outline-variant p-4 shadow-xl transition-transform duration-300 hover:scale-105">
                <span className="font-code text-xs text-on-surface-variant">
                  QUERY_RESULT
                </span>
                <span className="font-headline text-xl text-primary-container">
                  10+ Projects
                </span>
              </div>
            </TiltCard>
          </FloatingElement>
        </div>
      </div>
    </section>
  );
}
