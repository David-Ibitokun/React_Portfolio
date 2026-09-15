import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-outline-variant/30 bg-surface px-5 py-8 md:px-6">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 md:flex-row">
        <div className="font-headline text-lg font-bold tracking-tighter text-on-surface">
          DAVID
        </div>

        <p className="text-sm text-on-surface-variant">
          Copyright © {currentYear} - All right reserved by David Ibitokun
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/David-Ibitokun"
            target="_blank"
            rel="noreferrer"
            className="text-on-surface-variant transition-all duration-300 hover:scale-110 hover:text-primary-container hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/david-ibitokun-58299226a/"
            target="_blank"
            rel="noreferrer"
            className="text-on-surface-variant transition-all duration-300 hover:scale-110 hover:text-primary-container hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
