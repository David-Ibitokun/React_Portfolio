import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiExternalLink, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import AnimatedSection from '../../effects/AnimatedSection.jsx';
import LeetxenderImg from '../../assets/images/leetxender.webp';
import SmmleetImg from '../../assets/images/smmleet.webp';
import TcnMlpImg from '../../assets/images/TCN_MLP_Preview.webp';
import EcommerceImg from '../../assets/images/Sumia_Preview.webp';

const projectData = {
  '1': {
    id: '1',
    title: 'LeetXender Platform',
    image: LeetxenderImg,
    link: 'https://leetxender.com',
    highlight: 'Platform modernization & UX redesign',
    tech: ['Python', 'Django', 'JavaScript', 'AJAX', 'Tailwind CSS', 'Bootstrap', 'Chart.js', 'CSV'],
    overview:
      'LeetXender is a customer operations platform built on Django, supporting support dashboards, ticketing, chat experiences, analytics, CRM, and internal operations. I spearheaded the modernization of the entire platform, improving usability, mobile accessibility, and cross-team efficiency.',
    roles: [
      'Frontend Developer — Redesigned UI/UX for support dashboards, ticketing, and chat interfaces with responsive Tailwind CSS and Bootstrap patterns',
      'Full-Stack Engineer — Architected AJAX-driven CRUD, search, sorting, and caching workflows for contacts, automation rules, and campaign management',
      'Systems Optimizer — Optimized email/SMS communication systems with improved inbox filtering, compose validation, and campaign activity reporting',
      'Security Engineer — Designed and shipped secure account management flows including password change, account deletion, and profile form validation'
    ],
    contributions: [
      'Spearheaded the modernization of the Django-based customer operations platform by redesigning support dashboards, ticketing flows, chat experiences, and analytics views with responsive Tailwind CSS and Bootstrap patterns, improving usability, mobile accessibility, and cross-team efficiency across support, CRM, and internal operations',
      'Architected AJAX-driven CRUD, search, sorting, and caching workflows for contacts, automation rules, and campaign management, reducing manual admin work, accelerating data access, and improving operational throughput across high-volume customer communication workflows',
      'Optimized communication and engagement systems by improving inbox filtering, compose validation, reply/forward handling, and campaign activity reporting across email and SMS channels, increasing data accuracy, reducing user friction, and improving visibility into outbound performance',
      'Designed and shipped secure account management enhancements, including password change, account deletion, and profile form validation flows, strengthening self-service user controls, reducing support overhead, and improving trust and compliance in authentication workflows',
      'Built analytics-rich, mobile-first dashboards and global search capabilities using Python, Django, JavaScript, AJAX, Chart.js, and responsive frontend tooling, enabling faster decision-making, better operational insight discovery, and a more scalable user experience for business teams',
      'Integrated CSV import and data processing workflows for bulk contact and campaign operations'
    ],
    issuesResolved: [
      {
        issue: 'Slow page loads on the support dashboard due to unoptimized database queries and full-page reloads',
        resolution:
          'Implemented AJAX partial page updates and added database query caching with Django\'s select_related/prefetch_related, reducing load times from ~4s to under 1s'
      },
      {
        issue: 'Ticket classification was entirely manual, causing delays in routing urgent requests',
        resolution:
          'Built a tag-based auto-routing system that parses incoming ticket content and assigns priority labels, cutting manual triage time by ~50%'
      },
      {
        issue: 'Email/SMS inbox had no filtering, making it hard to search through thousands of messages',
        resolution:
          'Added multi-criteria filtering (date range, sender, status, tags) with server-side pagination and indexed search queries'
      },
      {
        issue: 'Chat messages were lost on page refresh with no persistence layer',
        resolution:
          'Integrated WebSocket-based real-time messaging with message history stored in the database, ensuring conversations survive page reloads'
      }
    ]
  },
  '2': {
    id: '2',
    title: 'Smmleet',
    image: SmmleetImg,
    link: 'https://smmleet.com',
    highlight: 'SMS activation & dashboard optimization',
    tech: ['Python', 'Django', 'REST API', 'SQL', 'GrizzlySMS API'],
    overview:
      'Smmleet is an SMS activation and rental service platform. I architected the core SMS workflows, designed REST APIs, optimized database performance, and modernized the entire Django dashboard experience.',
    roles: [
      'Backend Developer — Architected Django-based SMS activation and rental workflows via GrizzlySMS API',
      'API Engineer — Designed REST API endpoints, models, migrations, views, serializers, and admin tooling',
      'Performance Engineer — Optimized dashboard data access with deferred fields and SQL annotations',
      'Frontend Developer — Modernized the dashboard with modular templates, dynamic routing, and responsive layouts'
    ],
    contributions: [
      'Architected Django-based SMS activation and rental workflows using the GrizzlySMS API, delivering service selection, country availability, status tracking, cancellation, extension, completion, and SMS-code retrieval capabilities',
      'Designed REST API endpoints, models, migrations, views, serializers, and admin tooling for SMS activations',
      'Optimized dashboard and announcement data access with deferred fields and SQL annotations, reducing query overhead and page response times',
      'Modernized the Django dashboard experience by modularizing shared templates, extracting the sidebar, implementing dynamic page routing, improving responsive/mobile layouts, and integrating wallet context across payments and SMS workflows, increasing task completion'
    ],
    issuesResolved: [
      {
        issue: 'API calls to GrizzlySMS would occasionally fail silently, leaving orders in a pending state',
        resolution:
          'Implemented a retry mechanism with exponential backoff and a background task that reconciles stuck orders with the API provider\'s status endpoint'
      },
      {
        issue: 'Dashboard queries were causing N+1 database query problems, leading to 5-8 second page loads',
        resolution:
          'Added select_related and prefetch_related across all list queries, introduced database indexes on frequently filtered columns, and reduced load times to under 2s'
      },
      {
        issue: 'Service pricing updates required code changes and redeployment',
        resolution:
          'Built an admin pricing configuration panel that allows dynamic pricing updates stored in the database, eliminating the need for code deploys for pricing changes'
      },
      {
        issue: 'No visibility into API rate limit status, causing sudden service outages',
        resolution:
          'Added rate limit monitoring with visual dashboard indicators and automatic throttling when approaching provider limits'
      }
    ]
  },
  '3': {
    id: '3',
    title: 'AI Crop-Climate Prediction',
    image: TcnMlpImg,
    link: 'https://nig-climate-with-dl.streamlit.app/',
    highlight: 'ML model achieving R² 0.825 with interpretability',
    tech: ['TensorFlow', 'Keras', 'Streamlit', 'Python', 'Ensemble Modeling'],
    overview:
      'A climate-informed crop-yield prediction platform covering 4 crops (rice, maize, yam, cassava) across 6 regions of Nigeria. Architected TCN-MLP ensemble models, built a production Streamlit application, and deployed explainable AI features.',
    roles: [
      'ML Engineer — Architected TCN-MLP ensemble architectures with stratified 5-fold cross-validation',
      'Application Developer — Engineered a production-ready Streamlit app with interactive prediction and model evaluation',
      'Data Engineer — Integrated NASA POWER climate data and processed agricultural datasets',
      'ML Researcher — Implemented LOFO explainable AI and climate-impact analysis'
    ],
    contributions: [
      'Architected an end-to-end climate-informed crop-yield prediction platform using TensorFlow/Keras, TCN-MLP architectures, ensemble modeling, and stratified 5-fold cross-validation, improving model generalization and achieving an overall R² of 0.825',
      'Engineered a production-ready Streamlit application with interactive prediction, data exploration, model evaluation, climate-pattern analysis, and ensemble-interpretability workflows',
      'Optimized the inference pipeline with cached model and artifact loading, configurable monthly climate sequences, robust validation, and improved error handling, reducing application load and prediction latency',
      'Implemented explainable AI and climate-impact analysis using Leave-One-Feature-Out (LOFO), enabling stakeholders to interpret key climate drivers and make data-informed decisions',
      'Spearheaded reproducible data and deployment workflows integrating NASA POWER climate data, processed agricultural datasets, model artifacts, automated reporting, and deployment documentation, supporting operational deployment across 4 crops (rice, maize, yam, cassava) and 6 regions of Nigeria'
    ],
    issuesResolved: [
      {
        issue: 'Initial single-model approach showed high variance across different crop-region combinations',
        resolution:
          'Implemented ensemble modeling with weighted averaging of TCN and MLP predictions, reducing variance by ~25% and improving overall R² from 0.76 to 0.825'
      },
      {
        issue: 'Climate data from NASA POWER had missing values and inconsistent formatting across different regions',
        resolution:
          'Built a robust preprocessing pipeline with interpolation for missing values, outlier detection, and standardized formatting across all crop-region datasets'
      },
      {
        issue: 'Model predictions were black-box — users couldn\'t understand which features drove predictions',
        resolution:
          'Integrated LOFO feature importance analysis that ranks climate features by their impact on predictions, giving users actionable insights into what matters most'
      },
      {
        issue: 'Streamlit app initial load was slow due to model deserialization overhead',
        resolution:
          'Implemented model caching with @st.cache_resource and preloaded model weights, reducing initial load time from ~15s to under 3s'
      }
    ]
  },
  '4': {
    id: '4',
    title: 'E-commerce Dashboard',
    image: EcommerceImg,
    link: 'https://davidibitokun.pythonanywhere.com/',
    highlight: 'Full-stack web application',
    tech: ['Django', 'React', 'SQL'],
    overview:
      'A full-stack e-commerce platform with a Django backend and React frontend. I designed the database schema, built data management workflows, and implemented the admin dashboard.',
    roles: [
      'Full-Stack Developer — Built the complete application from database design through frontend implementation',
      'Database Designer — Created normalized relational database schema for products, orders, users, and inventory',
      'API Developer — Designed RESTful endpoints connecting the Django backend to the React frontend'
    ],
    contributions: [
      'Designed and implemented a normalized relational database schema covering products, categories, orders, users, and inventory tracking',
      'Built RESTful API endpoints in Django for CRUD operations on all entities, with proper authentication and authorization',
      'Developed React-based admin dashboard with real-time sales metrics, inventory alerts, and order management',
      'Implemented data management workflows for product uploads, order processing, and inventory reconciliation',
      'Built user authentication and role-based access control for admin, manager, and customer roles',
      'Configured deployment on PythonAnywhere with proper environment variables and production settings'
    ],
    issuesResolved: [
      {
        issue: 'Inventory tracking was not real-time, leading to overselling when multiple users purchased simultaneously',
        resolution:
          'Implemented database-level row locking (select_for_update) during checkout to prevent race conditions and ensure accurate inventory counts'
      },
      {
        issue: 'API responses were slow due to unoptimized queries fetching all related data',
        resolution:
          'Added pagination, field-level filtering, and select_related/prefetch_related to reduce response payloads and query counts'
      },
      {
        issue: 'React frontend had no error boundaries, causing full app crashes on API failures',
        resolution:
          'Implemented React error boundaries and graceful fallback UI, ensuring the dashboard remains partially functional even when individual API calls fail'
      },
      {
        issue: 'No data backup strategy — a server issue could result in complete data loss',
        resolution:
          'Set up automated database backups with scheduled dumps and configured Django\'s database routing for read replicas'
      }
    ]
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return (
      <section className="px-5 py-24 md:px-6">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="font-headline text-4xl font-bold text-on-surface">
            Project Not Found
          </h2>
          <p className="mt-4 text-on-surface-variant">
            The project you're looking for doesn't exist.
          </p>
          <Link
            to="/projects"
            className="mt-6 inline-flex items-center gap-2 font-code text-sm text-primary-container hover:underline"
          >
            <FiArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="px-5 py-24 md:px-6">
      <div className="mx-auto max-w-[1200px]">
        {/* Back Link */}
        <AnimatedSection animation="fade-up">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 font-code text-sm text-primary-container hover:underline mb-8 transition-transform"
          >
            <FiArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Link>
        </AnimatedSection>

        {/* Hero Section */}
        <AnimatedSection animation="fade-up" className="mb-16">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-1/2">
              <div className="group relative rounded-3xl overflow-hidden border border-outline-variant bg-surface-dim shadow-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 sm:h-80 object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full border border-outline-variant bg-surface/90 px-3.5 py-1.5 font-code text-xs text-primary-container backdrop-blur-md shadow-lg">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-primary-container" />
                  STATUS: DEPLOYED
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <span className="text-xs font-code text-primary-container font-semibold uppercase tracking-wider mb-2">
                {project.highlight}
              </span>
              <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface leading-tight">
                {project.title}
              </h1>
              <p className="mt-4 text-on-surface-variant leading-relaxed text-base sm:text-lg">
                {project.overview}
              </p>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-surface-container-low border border-outline-variant text-on-surface-variant shadow-sm hover:border-primary-container/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-primary-container/10 border border-primary-container/20 font-code text-sm text-primary-container hover:bg-primary-container/20 transition-all shadow-sm hover:shadow"
                >
                  <FiExternalLink size={16} />
                  View Live Project
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Roles Section */}
        <AnimatedSection animation="fade-up" className="mb-16">
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-6 flex items-center gap-3">
            Roles & Responsibilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.roles.map((role, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-5 rounded-2xl bg-surface-container-low border border-outline-variant hover:border-outline transition-all shadow-sm"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary-container/10 text-primary-container font-code font-bold text-sm">
                  0{idx + 1}
                </span>
                <p className="text-on-surface-variant text-sm leading-relaxed">{role}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Contributions Section */}
        <AnimatedSection animation="fade-up" className="mb-16">
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-6 flex items-center gap-3">
            Key Contributions
          </h2>
          <div className="space-y-4">
            {project.contributions.map((contribution, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-5 rounded-2xl bg-surface-container-low border border-outline-variant hover:border-outline transition-all shadow-sm"
              >
                <FiCheckCircle className="text-primary-container shrink-0 mt-1" size={20} />
                <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">{contribution}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Issues Resolved Section */}
        <AnimatedSection animation="fade-up" className="mb-16">
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-6 flex items-center gap-3">
            Issues Resolved & Engineering Decisions
          </h2>
          <div className="space-y-6">
            {project.issuesResolved.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-surface-container-low border border-outline-variant overflow-hidden shadow-sm"
              >
                <div className="p-5 sm:p-6 border-b border-outline-variant/40 bg-surface-dim/40 flex gap-4 items-start">
                  <FiAlertCircle className="text-amber-500 shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-headline text-xs font-bold text-amber-500 uppercase tracking-wider mb-1">
                      Challenge / Issue
                    </h3>
                    <p className="text-on-surface text-sm sm:text-base leading-relaxed font-medium">
                      {item.issue}
                    </p>
                  </div>
                </div>
                <div className="p-5 sm:p-6 bg-primary-container/5 flex gap-4 items-start">
                  <FiCheckCircle className="text-primary-container shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-headline text-xs font-bold text-primary-container uppercase tracking-wider mb-1">
                      Solution & Impact
                    </h3>
                    <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
                      {item.resolution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Bottom CTA */}
        <AnimatedSection animation="fade-up" className="mt-20 text-center border-t border-outline-variant/50 pt-10">
          <p className="text-on-surface-variant mb-4 text-sm sm:text-base">
            Interested in exploring other pieces of work?
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-container-low border border-outline-variant font-code text-sm text-on-surface hover:bg-surface-dim transition-all shadow-sm"
          >
            <FiArrowLeft size={16} />
            Back to All Projects
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}