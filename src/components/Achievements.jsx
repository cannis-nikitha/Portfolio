import { achievements } from '../data/portfolioData';

const categoryColors = {
  Sports: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20' },
  Programming: { bg: 'bg-primary-500/10', text: 'text-primary-400', border: 'border-primary-500/20' },
  Leadership: { bg: 'bg-secondary-500/10', text: 'text-secondary-400', border: 'border-secondary-500/20' },
  Education: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20' },
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-mono text-primary-500 text-sm mb-2 font-semibold">// achievements</p>
          <h2 className="section-title">Honours & Recognition</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Milestones in sports, academics, competitive programming, and technical leadership.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item) => {
            const colors = categoryColors[item.category] || categoryColors.Programming;
            return (
              <div
                key={item.id}
                className="glass-card rounded-2xl p-6 group relative overflow-hidden"
              >
                {/* Glow */}
                <div className={`absolute -top-8 -right-8 w-24 h-24 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${colors.bg}`} />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center text-3xl mb-4 shadow-inner`}>
                  {item.icon}
                </div>

                {/* Category Badge */}
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${colors.bg} ${colors.text} ${colors.border} mb-3 inline-block`}>
                  {item.category}
                </span>

                {/* Title */}
                <h3 className="text-white font-bold text-base mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Summary Numbers */}
        <div className="mt-12 glass rounded-2xl p-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Projects Completed', value: '5+', icon: '🚀' },
              { label: 'Technologies Mastered', value: '15+', icon: '⚙️' },
              { label: 'Athletics Events', value: 'District', icon: '🏅' },
              { label: 'Coding Platforms', value: '2+', icon: '💡' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-white font-black text-2xl" style={{ fontFamily: 'Outfit, sans-serif' }}>{stat.value}</div>
                <div className="text-slate-500 text-sm mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
