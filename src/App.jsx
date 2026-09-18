import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/navbar.jsx';
import Index from './pages/Index.jsx';
import Footer from './components/footer.jsx';
import ProjectsOverview from './pages/portfolio_page/portfolio-index.jsx';
import CursorGlow from './effects/CursorGlow.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return undefined;
    const element = document.getElementById(hash.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-on-surface grid-pattern">
        <ScrollToTop />
        <ScrollToHash />
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
