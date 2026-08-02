import { X, Github, ExternalLink } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;
  const isCyan = project.color === 'cyan';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
      onClick={onClose}
    >
      <div
        className="glass-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`p-6 border-b border-white/5 flex items-start justify-between gap-4`}>
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 ${
              isCyan ? 'bg-primary-500/15' : 'bg-secondary-500/15'
            }`}>
              {project.icon}
            </div>
            <div>
              <h2 className="text-white font-bold text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {project.title}
              </h2>
              <p className={`text-sm font-medium ${isCyan ? 'text-primary-400' : 'text-secondary-400'}`}>
                {project.subtitle}
              </p>
            </div>
          </div>
          <button onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-white hover:bg-white/5 transition-all flex-shrink-0">
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {/* Description */}
          <div>
            <h3 className="text-slate-300 font-semibold text-sm uppercase tracking-wider mb-2">Overview</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
          </div>

          {/* Problem */}
          <div className={`p-4 rounded-xl border ${
            isCyan ? 'border-primary-500/20 bg-primary-500/5' : 'border-secondary-500/20 bg-secondary-500/5'
          }`}>
            <h3 className={`text-sm font-semibold mb-1.5 ${isCyan ? 'text-primary-400' : 'text-secondary-400'}`}>
              🎯 Problem Solved
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">{project.problem}</p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-slate-300 font-semibold text-sm uppercase tracking-wider mb-3">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-slate-400 text-sm">
                  <span className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${isCyan ? 'bg-primary-400' : 'bg-secondary-400'}`} />
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-slate-300 font-semibold text-sm uppercase tracking-wider mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className={`tag ${!isCyan ? 'tag-purple' : ''}`}>{t}</span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex gap-3 pt-2">
            <a href={project.github} target="_blank" rel="noreferrer"
              className="btn-secondary flex-1 justify-center text-sm">
              <Github size={15} /> View Code
            </a>
            {project.demo ? (
              <a href={project.demo} target="_blank" rel="noreferrer"
                className="btn-primary flex-1 justify-center text-sm">
                <ExternalLink size={15} /> Live Demo
              </a>
            ) : (
              <div className="flex-1 flex items-center justify-center py-2 px-4 rounded-lg text-sm text-slate-600 border border-white/5 cursor-not-allowed">
                No Live Demo
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
