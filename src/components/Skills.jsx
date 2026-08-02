import { useState } from 'react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section id="skills" className="py-24 relative">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-secondary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-mono text-primary-500 text-sm mb-2 font-semibold">// technical skills</p>
          <h2 className="section-title">My Skill Set</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Technologies and tools I've worked with across web development, machine learning, embedded systems, and computer science fundamentals.
          </p>
        </div>

        {/* Skill Category Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className={`glass-card rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                activeCategory === category.id
                  ? category.color === 'cyan'
                    ? 'border-primary-500/40 bg-primary-500/5 shadow-lg shadow-primary-500/10'
                    : 'border-secondary-500/40 bg-secondary-500/5 shadow-lg shadow-secondary-500/10'
                  : ''
              }`}
              onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${
                    category.color === 'cyan'
                      ? 'bg-primary-500/15 shadow-inner shadow-primary-500/10'
                      : 'bg-secondary-500/15 shadow-inner shadow-secondary-500/10'
                  }`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-white text-sm">{category.label}</h3>
                </div>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                  category.color === 'cyan'
                    ? 'text-primary-400 bg-primary-500/10'
                    : 'text-secondary-400 bg-secondary-500/10'
                }`}>
                  {category.skills.length}
                </span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border ${
                      category.color === 'cyan'
                        ? 'bg-primary-500/8 border-primary-500/15 text-primary-300 hover:bg-primary-500/15 hover:border-primary-500/30'
                        : 'bg-secondary-500/8 border-secondary-500/15 text-secondary-300 hover:bg-secondary-500/15 hover:border-secondary-500/30'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      category.color === 'cyan' ? 'bg-primary-400' : 'bg-secondary-400'
                    }`} />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Summary Bar */}
        <div className="mt-10 glass rounded-2xl p-5 flex flex-wrap justify-center gap-8">
          {[
            { label: 'Languages', value: '4', icon: '🔤' },
            { label: 'Frameworks & Libraries', value: '6+', icon: '📦' },
            { label: 'Databases', value: '2', icon: '🗄️' },
            { label: 'Tools', value: '6+', icon: '🛠️' },
            { label: 'Core CS Topics', value: '6', icon: '⚙️' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-white font-bold text-xl">{stat.value}</div>
              <div className="text-slate-500 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
