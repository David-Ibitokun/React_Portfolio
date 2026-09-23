import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiExternalLink, FiCheckCircle } from 'react-icons/fi';
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
    tech: ['Python', 'Django', 'JavaScript', 'AJAX', 'Tailwind CSS', 'Bootstrap'],
    overview:
      'LeetXender is a comprehensive platform providing competitive programming tools, support infrastructure, and community features. I led the redesign and modernization of core user-facing systems.',
    roles: [
      'Frontend Developer — Redesigned UI/UX for support dashboards, ticketing, and chat interfaces',
      'Full-Stack Engineer — Built AJAX-driven workflows for contact forms, automation pipelines, and campaign management',
      'Systems Optimizer — Overhauled email/SMS communication systems with improved inbox filtering and validation'
    ],
    contributions: [
      'Redesigned the support dashboard from the ground up, introducing a modern card-based layout with real-time ticket status tracking, reducing average support response time by ~30%',
      'Implemented AJAX-driven contact and campaign management workflows, eliminating full-page reloads and improving user engagement',
      'Built an automated ticket routing system that classifies incoming requests and assigns them to appropriate team members based on tags and priority',
      'Revamped the internal chat interface with WebSocket-based real-time messaging, typing indicators, and message threading',
      'Optimized email and SMS communication pipelines by adding inbox filtering, template validation, and delivery tracking',
      'Introduced responsive design patterns across all portal pages using Tailwind CSS and Bootstrap, ensuring consistent experience across devices'
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
      'Smmleet is a social media and SMS activation service platform. I built the core SMS workflows, admin tooling, and optimized the database layer for performance.',
    roles: [
      'Backend Developer — Designed and implemented Django-based SMS activation workflows with third-party API integration',
      'API Engineer — Created REST API endpoints for service management and external integrations',
      'Performance Engineer — Optimized database queries and reduced page load times across the platform'
    ],
    contributions: [
      'Built end-to-end SMS activation workflows integrating the GrizzlySMS API, handling number provisioning, status polling, and result delivery',
      'Designed REST API endpoints for managing services, orders, and user accounts, enabling external integrations and programmatic access',
      'Created admin tooling for service management, including bulk operations, service health monitoring, and pricing configuration',
      'Optimized slow database queries by adding proper indexes, using select_related for foreign key lookups, and implementing query result caching',
      'Implemented error handling and retry logic for API calls to handle rate limiting and transient failures gracefully',
      'Built a dashboard analytics module showing real-time activation success rates, revenue metrics, and service availability'
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
      'A machine learning project building crop-climate prediction models for Nigerian agriculture. I engineered TCN-MLP ensemble models, built an interactive Streamlit app, and deployed explainable AI features.',
    roles: [
      'ML Engineer — Designed and trained TCN-MLP ensemble architectures for crop yield prediction',
      'Application Developer — Built a production Streamlit app with interactive predictions and explainable AI (LOFO)',
      'Data Engineer — Processed and integrated NASA POWER climate data across 4 crops and 6 Nigerian regions'
    ],
    contributions: [
      'Engineered a hybrid TCN-MLP model architecture combining temporal convolutional networks with multi-layer perceptrons, achieving R² 0.825 accuracy on held-out test data',
      'Built an interactive Streamlit application allowing users to input climate parameters and receive real-time yield predictions with confidence intervals',
      'Integrated LOFO (Leave-One-Feature-Out) feature importance analysis to make model predictions explainable and actionable for end users',
      'Processed and cleaned NASA POWER climate dataset spanning multiple years, 4 crop types, and 6 geographic regions in Nigeria',
      'Implemented an ensemble modeling strategy combining predictions from multiple model variants to improve robustness and reduce variance',
      'Deployed the application on Streamlit Cloud with proper environment configuration and model serialization'
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
            className="inline-flex items-center gap-2 font-code text-sm text-primary-container hover:underline mb-8"
          >
            <FiArrowLeft size={16} />
            Back to Projects
          </Link>
        </AnimatedSection>

        {/* Hero */}
        <AnimatedSection animation="fade-up" className="mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden border border-outline-variant bg-surface-dim">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover opacity-80"
                />
                <div className="absolute top-4 right-4 flex items-center gap-2 rounded border border-outline-variant bg-surface/90 px-3 py-1 font-code text-xs text-primary-container backdrop-blur">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-primary-container" />
                  STATUS: DEPLOYED
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="font-headline text-4xl font-bold text-on-surface leading-tight">
                {project.title}
              </h1>
              <p className="mt-2 text-sm text-primary-container font-semibold uppercase tracking-wide">
                {project.highlight}
              </p>
              <p className="mt-4 text-on-surface-variant leading-relaxed">
                {project.overview}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-3 py-1.5 rounded-lg bg-surface-container-low border border-outline-variant text-on-surface-variant"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-code text-sm text-primary-container"
                >
                  <FiExternalLink size={16} />
                  View Live Project
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Roles */}
        <AnimatedSection animation="fade-up" className="mb-12">
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-6">
            Roles
          </h2>
          <div className="space-y-3">
            {project.roles.map((role, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-4 rounded-xl bg-surface-container-low border border-outline-variant"
              >
                <span className="text-primary-container font-bold text-lg flex-shrink-0 mt-0.5">
                  {idx + 1}.
                </span>
                <p className="text-on-surface-variant leading-relaxed">{role}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Contributions */}
        <AnimatedSection animation="fade-up" className="mb-12">
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-6">
            Contributions
          </h2>
          <div className="space-y-4">
            {project.contributions.map((contribution, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-4 rounded-xl bg-surface-container-low border border-outline-variant"
              >
                <FiCheckCircle className="text-primary-container flex-shrink-0 mt-1" size={20} />
                <p className="text-on-surface-variant leading-relaxed">{contribution}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Issues Resolved */}
        <AnimatedSection animation="fade-up" className="mb-12">
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-6">
            Issues Resolved
          </h2>
          <div className="space-y-6">
            {project.issuesResolved.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-surface-container-low border border-outline-variant overflow-hidden"
              >
                <div className="p-5 border-b border-outline-variant/40 bg-surface-dim/50">
                  <h3 className="font-headline text-base font-bold text-on-surface mb-1">
                    Issue
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {item.issue}
                  </p>
                </div>
                <div className="p-5 bg-primary-container/5">
                  <h3 className="font-headline text-base font-bold text-primary-container mb-1">
                    Resolution
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {item.resolution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Bottom CTA */}
        <AnimatedSection animation="fade-up" className="mt-16 text-center">
          <p className="text-on-surface-variant mb-4">
            Interested in learning more?
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-code text-sm text-primary-container hover:underline"
          >
            <FiArrowLeft size={16} />
            Back to All Projects
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
