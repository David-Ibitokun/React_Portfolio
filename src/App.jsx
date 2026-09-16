import Navbar from './components/navbar.jsx';
import Home from './pages/home.jsx';
import Footer from './components/footer.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Skills from './pages/skills.jsx';
import Projects from './pages/projects.jsx';
import Resume from './pages/resume.jsx';
import CursorGlow from './effects/CursorGlow.jsx';

function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface grid-pattern">
      <CursorGlow />
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
