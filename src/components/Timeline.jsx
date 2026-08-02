import { timeline } from '../data/portfolioData';

const typeColors = {
  education: { dot: 'bg-primary-400', badge: 'bg-primary-500/10 text-primary-400 border-primary-500/20' },
  project:   { dot: 'bg-secondary-400', badge: 'bg-secondary-500/10 text-secondary-400 border-secondary-500/20' },
  achievement: { dot: 'bg-amber-400', badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
};

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-mono text-primary-500 text-sm mb-2 font-semibold">// my journey</p>
          <h2 className="section-title">Academic & Leadership Timeline</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Key milestones spanning education, projects, competitive programming, and athletics.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-6 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-secondary-500/30 to-transparent" />

          <div className="space-y-8">
            {timeline.map((item, index) => {
              const colors = typeColors[item.type] || typeColors.project;
              const isEven = index % 2 === 0;

              return (
                <div key={item.id} className={`relative flex items-start gap-4 sm:gap-0 ${
                  isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}>
                  {/* Connector Dot */}
                  <div className="absolute left-6 sm:left-1/2 sm:-translate-x-1/2 flex items-center justify-center z-10">
                    <div className={`w-4 h-4 rounded-full border-2 border-dark-bg ${colors.dot} shadow-lg`} />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-14 sm:ml-0 sm:w-[calc(50%-28px)] ${isEven ? 'sm:mr-14' : 'sm:ml-14'}`}>
                    <div className="glass-card rounded-2xl p-5 hover:border-primary-500/20 transition-all duration-300">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{item.icon}</span>
                          <h4 className="text-white font-semibold text-sm leading-snug">{item.title}</h4>
                        </div>
                        <span className={`tag text-xs flex-shrink-0 border ${colors.badge}`}>
                          {item.year}
                        </span>
                      </div>

                      {/* Org */}
                      <p className="text-primary-400 text-xs font-medium mb-2 ml-7">{item.org}</p>

                      {/* Description */}
                      <p className="text-slate-400 text-sm leading-relaxed ml-7">{item.description}</p>

                      {/* Type Badge */}
                      <div className="mt-3 ml-7">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border capitalize ${colors.badge}`}>
                          {item.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
