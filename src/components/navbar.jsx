import { useState, useMemo, useEffect, useLayoutEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme.js';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const desktopNavRef = useRef(null);
  const navLinkRefs = useRef({});
  const [indicatorStyle, setIndicatorStyle] = useState({ opacity: 0 });

  const navLinks = useMemo(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'resume', label: 'Resume' },
      // { id: 'projects', label: 'Projects', to: '/projects' },
      // { id: 'selected_projects', label: 'Selected_Projects' },
      // { id: 'testimonials', label: 'Testimonials' },
      // { id: 'references', label: 'References' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  );

  const getActiveFromHash = () => {
    if (location.pathname !== '/') return '';
    const hash = location.hash.replace('#', '');
    return navLinks.find((l) => l.id === hash)?.id || 'home';
  };

  const [activeSection, setActiveSection] = useState(getActiveFromHash);

  useEffect(() => {
    if (!isHome) return undefined;

    const updateActiveSection = () => {
      const sectionOffset = 96;
      let currentSection = 'home';

      for (const id of navLinks.map((link) => link.id)) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= sectionOffset) {
          currentSection = id;
        }
      }

      setActiveSection((previousSection) =>
        previousSection === currentSection ? previousSection : currentSection
      );
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [isHome, navLinks]);

  useLayoutEffect(() => {
    const activeLink = navLinkRefs.current[
      navLinks.find((link) => isActive(link))?.id
    ];
    const nav = desktopNavRef.current;

    if (!activeLink || !nav) {
      setIndicatorStyle({ opacity: 0 });
      return undefined;
    }

    const updateIndicator = () => {
      setIndicatorStyle({
        opacity: 1,
        width: activeLink.offsetWidth,
        transform: `translateX(${activeLink.offsetLeft}px)`,
      });
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeSection, location.pathname, navLinks]);

  useEffect(() => {
    setActiveSection(getActiveFromHash());
  }, [location.hash, location.pathname]);

  const isActive = (link) => {
    if (link.to) return location.pathname === link.to;
    if (location.pathname !== '/') return false;
    return activeSection === link.id;
  };

  const sectionClass = (link) => {
    const active = isActive(link);
    return `font-code text-sm tracking-wide relative inline-block transition-colors duration-300 ${
      active
        ? 'text-primary-container font-medium'
        : 'text-on-surface-variant hover:text-primary-container'
    }`;
  };

  const sectionClassMobile = (link) => {
    const active = isActive(link);
    return `font-code text-sm tracking-wide relative inline-block self-start transition-colors duration-300 ${
      active
        ? 'text-primary-container font-medium'
        : 'text-on-surface-variant hover:text-primary-container'
    }`;
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-outline-variant/30 bg-surface/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:px-6">
        <Link
          to="/"
          className="font-headline text-xl font-bold tracking-tighter text-on-surface"
        >
          David
        </Link>

        <div ref={desktopNavRef} className="relative hidden items-center gap-8 md:flex">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-0 h-0.5 rounded-full bg-primary-container transition-[transform,width,opacity] duration-300 ease-out"
            style={indicatorStyle}
          />
          {navLinks.map((link) => {
            return link.to ? (
              <Link
                key={link.id}
                ref={(element) => {
                  navLinkRefs.current[link.id] = element;
                }}
                to={link.to}
                className={sectionClass(link)}
              >
                <span className="relative z-10">{link.label}</span>
              </Link>
            ) : isHome ? (
              <a
                key={link.id}
                ref={(element) => {
                  navLinkRefs.current[link.id] = element;
                }}
                href={`#${link.id}`}
                className={sectionClass(link)}
              >
                <span className="relative z-10">{link.label}</span>
              </a>
            ) : (
              <Link
                key={link.id}
                ref={(element) => {
                  navLinkRefs.current[link.id] = element;
                }}
                to={`/#${link.id}`}
                className={sectionClass(link)}
              >
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          className="hidden rounded-full border border-outline-variant/50 bg-surface-container-low/50 p-2 text-on-surface transition-all hover:border-primary-container hover:text-primary-container md:block"
        >
          {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>

        <button
          className="text-on-surface md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-outline-variant/30 bg-surface/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            <button
              type="button"
              onClick={() => {
                toggleTheme();
                closeMenu();
              }}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="flex items-center gap-2 font-code text-sm text-on-surface transition-colors hover:text-primary-container"
            >
              {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
            {navLinks.map((link) => {
              const active = isActive(link);
              return link.to ? (
                <Link key={link.id} to={link.to} onClick={closeMenu} className={sectionClassMobile(link)}>
                  <span className="relative z-10">{link.label}</span>
                  <span
                    className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-primary-container transition-all duration-300 ease-out"
                    style={{
                      transform: active ? 'scaleX(1)' : 'scaleX(0)',
                      opacity: active ? 1 : 0,
                    }}
                  />
                </Link>
              ) : isHome ? (
                <a key={link.id} href={`#${link.id}`} onClick={closeMenu} className={sectionClassMobile(link)}>
                  <span className="relative z-10">{link.label}</span>
                  <span
                    className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-primary-container transition-all duration-300 ease-out"
                    style={{
                      transform: active ? 'scaleX(1)' : 'scaleX(0)',
                      opacity: active ? 1 : 0,
                    }}
                  />
                </a>
              ) : (
                <Link key={link.id} to={`/#${link.id}`} onClick={closeMenu} className={sectionClassMobile(link)}>
                  <span className="relative z-10">{link.label}</span>
                  <span
                    className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-primary-container transition-all duration-300 ease-out"
                    style={{
                      transform: active ? 'scaleX(1)' : 'scaleX(0)',
                      opacity: active ? 1 : 0,
                    }}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
