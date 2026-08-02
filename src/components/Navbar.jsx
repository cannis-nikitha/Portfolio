import { useState, useEffect } from 'react';
import { Menu, X, FileText, Github, Linkedin } from 'lucide-react';
import { personal } from '../data/portfolioData';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#timeline', label: 'Journey' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#resume', label: 'Resume' },
  { href: '#github', label: 'GitHub' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass border-b border-white/5 py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary-500/25">
              CN
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-white text-sm">{personal.name}</span>
              <p className="text-xs text-slate-500 leading-none">M.Sc. Software Systems</p>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? 'text-primary-400 bg-primary-500/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <a href={personal.github} target="_blank" rel="noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200">
              <Github size={18} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200">
              <Linkedin size={18} />
            </a>
            <button
              onClick={() => { document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-primary text-xs px-4 py-2">
              <FileText size={13} />
              My Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-400 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-dark-bg/80 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-72 glass border-l border-white/5 p-6 flex flex-col animate-fade-left">
            <div className="flex items-center justify-between mb-8">
              <span className="glow-text font-bold text-lg">{personal.initials}</span>
              <button onClick={() => setMobileOpen(false)} className="text-slate-400"><X size={20} /></button>
            </div>
            <div className="flex flex-col gap-1 flex-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === link.href.slice(1)
                      ? 'text-primary-400 bg-primary-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <a href={personal.github} target="_blank" rel="noreferrer"
                className="btn-secondary text-sm justify-center">
                <Github size={15} /> GitHub
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer"
                className="btn-ghost text-sm justify-center">
                <Linkedin size={15} /> LinkedIn
              </a>
              <button onClick={() => { setMobileOpen(false); document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-primary text-sm justify-center w-full">
                <FileText size={15} /> View Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
