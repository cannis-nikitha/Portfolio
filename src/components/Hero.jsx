import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileText, MapPin, Zap, ChevronRight } from 'lucide-react';
import { personal } from '../data/portfolioData';

const techBadges = [
  "React.js", "Python", "C++", "JavaScript", "OpenCV",
  "MySQL", "MongoDB", "Arduino", "CNN", "Git",
  "REST APIs", "Linux", "NumPy", "HTML5", "CSS3",
  "React.js", "Python", "C++", "JavaScript", "OpenCV",
  "MySQL", "MongoDB", "Arduino", "CNN", "Git",
  "REST APIs", "Linux", "NumPy", "HTML5", "CSS3",
];

export default function Hero() {
  const [displayed, setDisplayed] = useState('');
  const titles = [
    "Full-Stack Web Developer",
    "Exploring & Building with Machine Learning",
    "Worked on Embedded Systems Projects",
    "Problem Solver & State Level Athlete",
  ];
  const [titleIdx, setTitleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIdx];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
      }, 60);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx(c => c - 1);
      }, 30);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setTitleIdx(i => (i + 1) % titles.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, titleIdx]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-20 pb-12 overflow-hidden">
      {/* Animated orbs */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary-500/8 rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left – Text Content */}
          <div className="animate-slide-up">
            {/* Status Badge */}
            {personal.openToWork && (
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-green-500/20 text-green-400 text-xs font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                {personal.status}
              </div>
            )}

            {/* Name */}
            <h1 className="font-black text-5xl sm:text-6xl lg:text-7xl leading-none mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>
              <span className="text-white">Hi, I'm </span>
              <span className="glow-text block">{personal.name}</span>
            </h1>

            {/* Typewriter Title */}
            <div className="h-9 mb-5">
              <p className="text-lg sm:text-xl font-medium text-slate-300">
                <span className="text-mono">&lt;</span>
                <span className="text-primary-400">{displayed}</span>
                <span className="animate-pulse text-primary-400">|</span>
                <span className="text-mono">/&gt;</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              M.Sc. Software Systems student at{' '}
              <span className="text-primary-400 font-semibold">PSG College of Technology</span>
              , Coimbatore. I build intelligent web apps, ML computer vision pipelines, and embedded IoT solutions — one commit at a time.
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-slate-500 text-sm mb-8">
              <MapPin size={14} className="text-primary-500" />
              {personal.location}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <button onClick={scrollToProjects} className="btn-primary">
                <Zap size={15} />
                View Projects
              </button>
              <button onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })} className="btn-secondary">
                <FileText size={15} />
                View Resume
              </button>
              <button onClick={scrollToContact} className="btn-ghost">
                <Mail size={15} />
                Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href={personal.github} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group text-sm">
                <Github size={18} className="group-hover:text-primary-400 transition-colors" />
                <span>GitHub</span>
                <ChevronRight size={13} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
              <div className="w-px h-4 bg-slate-700" />
              <a href={personal.linkedin} target="_blank" rel="noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group text-sm">
                <Linkedin size={18} className="group-hover:text-secondary-400 transition-colors" />
                <span>LinkedIn</span>
                <ChevronRight size={13} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
              <div className="w-px h-4 bg-slate-700" />
              <a href={`mailto:${personal.email}`}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group text-sm">
                <Mail size={18} className="group-hover:text-primary-400 transition-colors" />
                <span>Email</span>
                <ChevronRight size={13} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
            </div>
          </div>

          {/* Right – Avatar Card */}
          <div className="flex justify-center lg:justify-end animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 blur-2xl animate-glow" />

              {/* Card */}
              <div className="relative glass-card rounded-3xl p-6 w-72 sm:w-80 animate-float">
                {/* Avatar */}
                <div className="relative mb-4">
                  <div className="w-28 h-28 mx-auto rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-600 flex items-center justify-center text-5xl font-black text-white shadow-2xl shadow-primary-500/30 overflow-hidden">
                    {/* Try to load avatar image, fall back to initials */}
                    <img
                      src={personal.avatar}
                      alt={personal.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <span className="hidden w-full h-full items-center justify-center text-4xl font-black" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      {personal.initials}
                    </span>
                  </div>
                  {/* Online badge */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-dark-card" />
                </div>

                {/* Info */}
                <div className="text-center mb-4">
                  <h2 className="font-bold text-white text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>{personal.name}</h2>
                  <p className="text-primary-400 text-xs font-medium mt-0.5">M.Sc. Software Systems</p>
                  <p className="text-slate-500 text-xs mt-0.5">PSG College of Technology</p>
                </div>

                {/* Mini Stats */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { label: 'Projects', value: '5+' },
                    { label: 'Tech Stack', value: '15+' },
                    { label: 'Year', value: '3rd' },
                  ].map(stat => (
                    <div key={stat.label} className="text-center py-2 px-1 rounded-lg bg-white/3 border border-white/5">
                      <div className="text-white font-bold text-sm">{stat.value}</div>
                      <div className="text-slate-500 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {['React', 'Python', 'C++', 'ML', 'Arduino'].map(t => (
                    <span key={t} className="tag text-xs">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Ribbon */}
        <div className="mt-16 overflow-hidden">
          <p className="text-center text-xs text-slate-600 uppercase tracking-widest mb-4 font-semibold">Technologies I Work With</p>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark-bg to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark-bg to-transparent z-10 pointer-events-none" />
            <div className="flex gap-3 animate-marquee whitespace-nowrap">
              {techBadges.map((t, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-white/5 text-xs text-slate-400 font-medium flex-shrink-0">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors group"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} className="animate-bounce group-hover:text-primary-400" />
          </button>
        </div>
      </div>
    </section>
  );
}
