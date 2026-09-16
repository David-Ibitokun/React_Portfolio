import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/navbar.jsx';
import Index from './pages/Index.jsx';
import Footer from './components/footer.jsx';
import ProjectsOverview from './pages/projects-overview.jsx';
import CursorGlow from './effects/CursorGlow.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-on-surface grid-pattern">
        <ScrollToTop />
        <CursorGlow />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portfolio" element={<ProjectsOverview />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
