import ProjectsOverview from './projects-overview.jsx';
import Testimonials from './testimonials.jsx';
import AwardsHackathons from './awards-hackathons.jsx';
import CertificationsCourses from './certifications-courses.jsx';
import MiniTools from './mini-tools.jsx';

export default function PortfolioIndex() {
  return (
    <>
      <ProjectsOverview />
      <Testimonials />
      {/* <AwardsHackathons />
      <CertificationsCourses />
      <MiniTools /> */}
    </>
  );
}
