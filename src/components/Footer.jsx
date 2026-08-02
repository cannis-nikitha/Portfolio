import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personal } from '../data/portfolioData';

const navLinks = ['About', 'Skills', 'Projects', 'Journey', 'Achievements', 'GitHub', 'Contact'];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase() === 'journey' ? 'timeline' : id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-xs">
                CN
              </div>
              <span className="font-bold text-white">{personal.name}</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              M.Sc. Software Systems student building intelligent web apps, ML models, and embedded solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Navigate</h4>
            <div className="grid grid-cols-2 gap-1">
              {navLinks.map(link => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-left text-slate-500 hover:text-primary-400 text-sm transition-colors py-0.5"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Connect</h4>
            <div className="space-y-2">
              <a href={`mailto:${personal.email}`}
                className="flex items-center gap-2 text-slate-500 hover:text-primary-400 text-sm transition-colors">
                <Mail size={14} /> {personal.email}
              </a>
              <a href={personal.github} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-slate-500 hover:text-primary-400 text-sm transition-colors">
                <Github size={14} /> @{personal.githubUsername}
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-slate-500 hover:text-secondary-400 text-sm transition-colors">
                <Linkedin size={14} /> LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © {year} {personal.name}. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1">
            Built with <Heart size={11} className="text-red-500 fill-current" /> using React & Tailwind CSS
          </p>
          <div className="flex items-center gap-3">
            <a href={personal.github} target="_blank" rel="noreferrer"
              className="text-slate-600 hover:text-white transition-colors">
              <Github size={16} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer"
              className="text-slate-600 hover:text-white transition-colors">
              <Linkedin size={16} />
            </a>
            <a href={`mailto:${personal.email}`}
              className="text-slate-600 hover:text-white transition-colors">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
