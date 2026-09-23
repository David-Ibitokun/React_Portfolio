import Home from './home';
import About from './about';
import Skills from './skills';
import Resume from './resume';
import Projects from './selected_projects.jsx';
import Testimonials from './testimonials.jsx';
import Contact from './contact';
import References from './references.jsx'

export default function Index() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Resume />
      <Projects />
      {/* <Testimonials /> */}
      <References />
      <Contact />
    </>
  );
}
