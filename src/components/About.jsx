import { Code2, Target, Cpu } from 'lucide-react';
import { personal, about, education } from '../data/portfolioData';

const interests = [
  { icon: <Code2 size={18} />, label: "Full-Stack Development", color: "cyan" },
  { icon: <Cpu size={18} />, label: "ML & Computer Vision", color: "purple" },
  { icon: <Target size={18} />, label: "DSA & Competitive Programming", color: "cyan" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-mono text-primary-500 text-sm mb-2 font-semibold">// about me</p>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            A passionate developer, competitive programmer, and district athlete.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left – Summary (3/5) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="glass-card rounded-2xl p-7">
              <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/15 flex items-center justify-center text-primary-400">
                  👋
                </span>
                Professional Summary
              </h3>
              <p className="text-slate-300 leading-relaxed text-[15px]">
                {about.summary}
              </p>
            </div>

            {/* Areas of Focus */}
            <div className="glass-card rounded-2xl p-7">
              <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-secondary-500/15 flex items-center justify-center text-secondary-400">
                  🎯
                </span>
                Core Focus Areas
              </h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {about.focus.map((area) => (
                  <div key={area} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/3 border border-white/5 hover:border-primary-500/20 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Facts */}
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { label: "Current Status", value: "M.Sc. Year 3", icon: "📍" },
                { label: "Location", value: "Coimbatore, TN", icon: "🗺️" },
                { label: "Athlete", value: "State Level High Jump", icon: "🏅" },
              ].map(fact => (
                <div key={fact.label} className="glass-card rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">{fact.icon}</div>
                  <div className="text-white font-semibold text-sm">{fact.value}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{fact.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Education (2/5) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-5 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/15 flex items-center justify-center text-primary-400">
                  🎓
                </span>
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={edu.id} className="relative pl-5 pb-4 last:pb-0">
                    {/* Timeline dot + line */}
                    <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-gradient-to-br from-primary-400 to-secondary-500" />
                    {i < education.length - 1 && (
                      <div className="absolute left-[3px] top-3 bottom-0 w-px bg-gradient-to-b from-primary-500/30 to-transparent" />
                    )}

                    <div className="bg-white/3 border border-white/5 rounded-xl p-4 hover:border-primary-500/20 transition-all duration-200">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="text-white font-semibold text-sm leading-snug">{edu.degree}</h4>
                        <span className="tag text-xs flex-shrink-0">{edu.gpa}</span>
                      </div>
                      <p className="text-primary-400 text-xs font-medium">{edu.institution}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{edu.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-secondary-500/15 flex items-center justify-center text-secondary-400">
                  💡
                </span>
                Interests
              </h3>
              <div className="space-y-2">
                {interests.map((item) => (
                  <div key={item.label}
                    className={`flex items-center gap-3 p-2.5 rounded-lg transition-all duration-200 border border-transparent hover:border-${item.color === 'cyan' ? 'primary' : 'secondary'}-500/20 hover:bg-${item.color === 'cyan' ? 'primary' : 'secondary'}-500/5`}>
                    <span className={item.color === 'cyan' ? 'text-primary-400' : 'text-secondary-400'}>
                      {item.icon}
                    </span>
                    <span className="text-slate-300 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
