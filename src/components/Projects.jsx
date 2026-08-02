import { useState } from 'react';
import { Github, ExternalLink, Eye } from 'lucide-react';
import { projects, projectCategories } from '../data/portfolioData';

export default function Projects({ onOpenProject }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-mono text-primary-500 text-sm mb-2 font-semibold">// projects</p>
          <h2 className="section-title">What I've Built</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            A showcase of projects spanning web development, machine learning, algorithms, network security, and embedded systems.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {projectCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-primary-500 text-white border-primary-500 shadow-lg shadow-primary-500/30'
                  : 'border-white/10 text-slate-400 hover:border-primary-500/40 hover:text-white bg-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={onOpenProject} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/cannis-nikitha"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary inline-flex"
          >
            <Github size={16} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, onOpen }) {
  const isCyan = project.color === 'cyan';

  return (
    <div className="glass-card rounded-2xl p-6 flex flex-col group relative overflow-hidden">
      {/* Background glow on hover */}
      <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
        isCyan ? 'bg-primary-500/15' : 'bg-secondary-500/15'
      }`} />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
          isCyan ? 'bg-primary-500/15' : 'bg-secondary-500/15'
        }`}>
          {project.icon}
        </div>
        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
          isCyan
            ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20'
            : 'bg-secondary-500/10 text-secondary-400 border border-secondary-500/20'
        }`}>
          {project.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-white font-bold text-base mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
        {project.title}
      </h3>
      <p className={`text-xs font-medium mb-3 ${isCyan ? 'text-primary-400' : 'text-secondary-400'}`}>
        {project.subtitle}
      </p>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
        {project.description}
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.slice(0, 4).map(t => (
          <span key={t} className={`tag ${!isCyan ? 'tag-purple' : ''} text-xs`}>{t}</span>
        ))}
        {project.tech.length > 4 && (
          <span className="tag text-xs text-slate-500">+{project.tech.length - 4}</span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mt-auto">
        <button
          onClick={() => onOpen(project)}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 border ${
            isCyan
              ? 'border-primary-500/30 text-primary-400 hover:bg-primary-500/10'
              : 'border-secondary-500/30 text-secondary-400 hover:bg-secondary-500/10'
          }`}
        >
          <Eye size={13} />
          Details
        </button>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold border border-white/10 text-slate-400 hover:text-white hover:border-white/25 transition-all duration-200"
        >
          <Github size={13} />
          Code
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-primary-500 text-white hover:bg-primary-600 transition-all duration-200"
          >
            <ExternalLink size={13} />
            Live
          </a>
        )}
      </div>
    </div>
  );
}
