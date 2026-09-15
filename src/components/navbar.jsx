import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const navLinks = useMemo(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      // { id: 'resume', label: 'Resume' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveLink(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-outline-variant/30 bg-surface/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:px-6">
        <a
          href="#home"
          className="font-headline text-xl font-bold tracking-tighter text-on-surface"
        >
          DAVID
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              spy={true}
              onSetActive={() => setActiveLink(link.id)}
              className={`font-code text-sm tracking-wide transition-colors duration-200 cursor-pointer ${
                activeLink === link.id
                  ? 'border-b-2 border-primary-container font-bold text-primary-container'
                  : 'text-on-surface-variant hover:text-primary-container'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* <Link
          to="resume"
          smooth={true}
          duration={500}
          className="hidden cursor-pointer rounded bg-primary-container px-4 py-2 font-code text-sm font-bold text-on-primary transition-all hover:brightness-110 md:block"
        >
          RESUME
        </Link> */}

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
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                smooth={true}
                duration={500}
                spy={true}
                onClick={() => setIsOpen(false)}
                className={`font-code text-sm tracking-wide transition-colors duration-200 ${
                  activeLink === link.id
                    ? 'font-bold text-primary-container'
                    : 'text-on-surface-variant hover:text-primary-container'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="resume"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded bg-primary-container px-4 py-2 text-center font-code text-sm font-bold text-on-primary"
            >
              RESUME
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
