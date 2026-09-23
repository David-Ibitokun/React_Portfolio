import { useState, useMemo } from 'react';
import { FiExternalLink, FiArrowRight, FiGrid, FiList } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import LeetxenderImg from '../../assets/images/leetxender.webp';
import SmmleetImg from '../../assets/images/smmleet.webp';
import TcnMlpImg from '../../assets/images/TCN_MLP_Preview.webp';
import EcommerceImg from '../../assets/images/Sumia_Preview.webp';
import AnimatedSection from '../../effects/AnimatedSection.jsx';
import TiltCard from '../../effects/TiltCard.jsx';

export default function ProjectsOverview() {
  const projects = [
    {
      id: 1,
      title: 'LeetXender Platform',
      image: LeetxenderImg,
      keyPoints: [
        'Redesigned support dashboards, ticketing, and chat interfaces',
        'Built AJAX-driven workflows for contact, automation, and campaign management',
        'Optimized email/SMS communication systems with improved inbox filtering and validation'
      ],
      tech: ['Python', 'Django', 'JavaScript', 'AJAX', 'Tailwind CSS', 'Bootstrap'],
      link: 'https://leetxender.com',
      highlight: 'Platform modernization & UX redesign'
    },
    {
      id: 2,
      title: 'Smmleet',
      image: SmmleetImg,
      keyPoints: [
        'Built Django-based SMS activation workflows with GrizzlySMS API integration',
        'Designed REST API endpoints and admin tooling for service management',
        'Optimized database queries reducing page load times and improving responsiveness'
      ],
      tech: ['Python', 'Django', 'REST API', 'SQL', 'GrizzlySMS API'],
      link: 'https://smmleet.com',
      highlight: 'SMS activation & dashboard optimization'
    },
    {
      id: 3,
      title: 'AI Crop-Climate Prediction',
      image: TcnMlpImg,
      keyPoints: [
        'Engineered ML model with TCN-MLP architectures achieving R² 0.825 accuracy',
        'Built production Streamlit app with interactive predictions and explainable AI (LOFO)',
        'Deployed across 4 crops and 6 regions in Nigeria using NASA POWER climate data'
      ],
      tech: ['TensorFlow', 'Keras', 'Streamlit', 'Python', 'Ensemble Modeling'],
      link: 'https://nig-climate-with-dl.streamlit.app/',
      highlight: 'ML model achieving R² 0.825 with interpretability'
    },
    {
      id: 4,
      title: 'E-commerce Dashboard',
      image: EcommerceImg,
      keyPoints: [
        'Full-stack web application with Django backend',
        'Implemented database design and data management workflows'
      ],
      tech: ['Django', 'React', 'SQL'],
      link: 'https://davidibitokun.pythonanywhere.com/',
      highlight: 'Full-stack web application'
    }
  ];

  const [selectedTechs, setSelectedTechs] = useState([]);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // Extract unique technologies
  const allTechs = useMemo(() => {
    const techSet = new Set();
    projects.forEach(project => {
      project.tech.forEach(t => techSet.add(t));
    });
    return Array.from(techSet).sort();
  }, []);

  // Filter projects by selected technologies
  const filteredProjects = useMemo(() => {
    if (selectedTechs.length === 0) return projects;
    return projects.filter(project =>
      selectedTechs.some(tech => project.tech.includes(tech))
    );
  }, [selectedTechs]);

  const toggleTech = (tech) => {
    setSelectedTechs(prev =>
      prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const clearFilters = () => setSelectedTechs([]);

  return (
    <section id="projects-overview" className="px-5 py-24 md:px-6">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <AnimatedSection animation="fade-up" className="mb-16">
          {/* <span className="font-code text-xs text-primary-container uppercase tracking-widest">
            // Projects
          </span> */}
          <h2 className="mt-4 font-headline text-5xl font-bold text-on-surface leading-tight">
            Featured Work
          </h2>
          <p className="mt-5 text-on-surface-variant max-w-xl leading-relaxed text-base">
            Recent projects spanning full-stack development, platform modernization, and machine learning.
          </p>
        </AnimatedSection>

        {/* Filter Section */}
        <AnimatedSection animation="fade-up" className="mb-16">
          <div className="space-y-5">
            {/* Filter Label and View Toggle */}
            <div className="flex items-center justify-between">
              <h3 className="font-headline text-sm font-bold text-on-surface uppercase tracking-widest">
                Filter by Tech
              </h3>
              <div className="flex items-center gap-3">
                {selectedTechs.length > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-primary-container hover:opacity-70 font-semibold transition"
                  >
                    Clear
                  </button>
                )}
                {/* View Mode Toggle */}
                <div className="flex items-center gap-1 p-1 rounded-lg bg-surface-container-low border border-outline-variant">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded transition-all duration-200 ${
                      viewMode === 'grid'
                        ? 'bg-primary-container text-on-primary-container'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                    title="Grid view"
                  >
                    <FiGrid size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded transition-all duration-200 ${
                      viewMode === 'list'
                        ? 'bg-primary-container text-on-primary-container'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                    title="List view"
                  >
                    <FiList size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Tech Filter Tags */}
            <div className="flex flex-wrap gap-2.5">
              {allTechs.map(tech => (
                <button
                  key={tech}
                  onClick={() => toggleTech(tech)}
                  className={`px-4 py-2.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                    selectedTechs.includes(tech)
                      ? 'bg-primary-container text-on-primary-container'
                      : 'bg-surface-container-low border border-outline-variant text-on-surface hover:bg-surface-container hover:border-primary-container/50'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>

            {/* Results Count */}
            {selectedTechs.length > 0 && (
              <p className="text-xs text-on-surface-variant font-medium">
                {filteredProjects.length} of {projects.length} projects
              </p>
            )}
          </div>
        </AnimatedSection>

        {/* Projects Grid/List */}
        <div>
          {filteredProjects.length > 0 ? (
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2'
                  : 'space-y-6'
              }
            >
              {filteredProjects.map((project, index) => (
                <AnimatedSection key={project.id} animation="fade-left">
                  {viewMode === 'grid' ? (
                    // Grid View Card
                    <TiltCard>
                      <article className="group h-full overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-low transition-all duration-300 hover:border-primary-container/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] flex flex-col">
                        {/* Image Preview */}
                        <div className="relative h-60 overflow-hidden border-b border-outline-variant bg-surface-dim">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-cover opacity-60 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                          />
                          <div className="absolute top-4 right-4 flex items-center gap-2 rounded border border-outline-variant bg-surface/90 px-3 py-1 font-code text-xs text-primary-container backdrop-blur transition-all group-hover:bg-primary-container/10">
                            <div className="h-2 w-2 animate-pulse rounded-full bg-primary-container" />
                            STATUS: DEPLOYED
                          </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                          {/* Title */}
                          <h4 className="font-headline text-2xl font-bold text-on-surface mb-1 leading-tight">
                            {project.title}
                          </h4>

                          {/* Highlight */}
                          <p className="text-xs text-primary-container font-semibold uppercase tracking-wide mb-4">
                            {project.highlight}
                          </p>
                          {/* <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold mb-3">
                            Roles
                          </p> */}

                          {/* Key Points */}
                          {/* <ul className="space-y-3 mb-6 flex-grow">
                            {project.keyPoints.map((point, idx) => (
                              <li key={idx} className="flex gap-3 text-sm text-on-surface-variant leading-relaxed">
                                <span className="text-primary-container font-bold flex-shrink-0 text-lg -mt-0.5">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul> */}

                          {/* Tech Stack */}
                          <div className="mb-6 pt-6 border-t border-outline-variant/40">
                            <p className="text-xs text-on-surface-variant uppercase tracking-widest font-bold mb-3">
                              Stack
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map(tech => (
                                <span
                                  key={tech}
                                  className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-colors duration-200 ${
                                    selectedTechs.includes(tech)
                                      ? 'bg-primary-container text-on-primary-container'
                                      : 'bg-surface-dim text-on-surface-variant hover:bg-surface-container'
                                  }`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Link */}
                          <div className="mt-auto flex items-center justify-between pt-4">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-flex items-center gap-2 font-code text-sm text-primary-container"
                          >
                            <FiExternalLink size={16} />
                            <span className="relative">
                              View Project
                              <span className="absolute bottom-0 left-0 h-px w-0 bg-primary-container transition-all duration-300 group-hover/link:w-full" />
                            </span>
                          </a>
                          
                          <Link
                            to={`/projects/${project.id}`}
                            className="group/link inline-flex items-center gap-2 font-code text-sm text-primary-container hover:underline"
                          >
                            More Details
                            <FiArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                          </Link>
                        </div>
                        </div>
                      </article>
                    </TiltCard>
                  ) : (
                    // List View Card
                    <article className="group overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-low transition-all duration-300 hover:border-primary-container/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]">
                      <div className="flex flex-col md:flex-row">
                        {/* Image Preview */}
                        <div className="relative w-full md:w-64 h-48 md:h-auto overflow-hidden border-b md:border-b-0 md:border-r border-outline-variant bg-surface-dim flex-shrink-0">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="h-full w-full object-cover opacity-60 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                          />
                          <div className="absolute top-4 right-4 flex items-center gap-2 rounded border border-outline-variant bg-surface/90 px-3 py-1 font-code text-xs text-primary-container backdrop-blur transition-all group-hover:bg-primary-container/10">
                            <div className="h-2 w-2 animate-pulse rounded-full bg-primary-container" />
                            STATUS: DEPLOYED
                          </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow w-full">
                          {/* Title and Highlight */}
                          <div className="mb-4">
                            <h4 className="font-headline text-2xl font-bold text-on-surface mb-2 leading-tight">
                              {project.title}
                            </h4>
                            <p className="text-xs text-primary-container font-semibold uppercase tracking-wide">
                              {project.highlight}
                            </p>
                          </div>

                          {/* Key Points */}
                          <ul className="space-y-2 mb-4 flex-grow">
                            {project.keyPoints.map((point, idx) => (
                              <li key={idx} className="flex gap-3 text-sm text-on-surface-variant leading-relaxed">
                                <span className="text-primary-container font-bold flex-shrink-0 text-lg -mt-0.5">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Tech Stack and Link */}
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-4 border-t border-outline-variant/40">
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map(tech => (
                                <span
                                  key={tech}
                                  className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-colors duration-200 ${
                                    selectedTechs.includes(tech)
                                      ? 'bg-primary-container text-on-primary-container'
                                      : 'bg-surface-dim text-on-surface-variant hover:bg-surface-container'
                                  }`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            {/* Links */}
                            <div className="flex items-center gap-6">
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/link inline-flex items-center gap-2 font-code text-sm text-primary-container whitespace-nowrap"
                              >
                                <span className="relative">
                                  View Project
                                  <span className="absolute bottom-0 left-0 h-px w-0 bg-primary-container transition-all duration-300 group-hover/link:w-full" />
                                </span>
                                <FiExternalLink size={16} />
                              </a>
                              <Link
                                to={`/projects/${project.id}`}
                                className="group/link inline-flex items-center gap-2 font-code text-sm text-primary-container whitespace-nowrap hover:underline"
                              >
                                More Details
                                <FiArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  )}
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-on-surface-variant">
                No projects match the selected technologies.
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 px-4 py-2 text-sm font-medium text-primary-container hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}