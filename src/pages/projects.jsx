import SumiaPreview from '../assets/images/Sumia_Preview.webp';
import TcnMlpPreview from '../assets/images/TCN_MLP_Preview.webp';
import { FiCode } from 'react-icons/fi';
import AnimatedSection from '../effects/AnimatedSection.jsx';
import TiltCard from '../effects/TiltCard.jsx';

export default function Projects() {
  const projects = [
    {
      name: 'E-Commerce Core API',
      description:
        'A robust backend architecture for an e-commerce platform featuring secure user authentication, inventory management, and payment processing integration.',
      url: 'https://davidibitokun.pythonanywhere.com/',
      image: SumiaPreview,
      tags: ['Django', 'PostgreSQL', 'REST API'],
    },
    {
      name: 'AI Crop-Climate Prediction and Evaluation',
      description:
        'A machine learning-based application for predicting and evaluating crop yields based on climate data.',
      url: 'https://nig-climate-with-dl.streamlit.app/',
      image: TcnMlpPreview,
      tags: ['React', 'Django', 'JWT'],
    },
  ];

  return (
    <section id="projects" className="px-5 py-24 md:px-6">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection animation="fade-up" className="mb-8">
          <span className="font-code text-sm text-primary-container">
            04 // DEPLOYMENTS
          </span>
          <h2 className="mt-2 font-headline text-4xl text-on-surface">
            System Architecture & Projects
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedSection key={project.name} animation="fade-up" delay={index * 150}>
              <TiltCard className="h-full">
                <article className="group h-full overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-low transition-all duration-300 hover:border-primary-container/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]">
                  <div className="relative h-64 overflow-hidden border-b border-outline-variant bg-surface-dim">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-full w-full object-cover opacity-60 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                    />
                    <div className="absolute top-4 right-4 flex items-center gap-2 rounded border border-outline-variant bg-surface/90 px-3 py-1 font-code text-xs text-primary-container backdrop-blur transition-all group-hover:bg-primary-container/10">
                      <div className="h-2 w-2 animate-pulse rounded-full bg-primary-container" />
                      STATUS: DEPLOYED
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-surface-variant px-2 py-1 font-code text-xs text-on-surface-variant transition-all hover:bg-primary-container/10 hover:text-primary-container"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-headline text-2xl text-on-surface transition-colors group-hover:text-primary-container">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-base text-on-surface-variant">
                      {project.description}
                    </p>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link mt-6 inline-flex items-center gap-1 font-code text-sm text-primary-container"
                    >
                      <FiCode size={18} />
                      <span className="relative">
                        View Project
                        <span className="absolute bottom-0 left-0 h-px w-0 bg-primary-container transition-all duration-300 group-hover/link:w-full" />
                      </span>
                    </a>
                  </div>
                </article>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
