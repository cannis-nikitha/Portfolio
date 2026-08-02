import { useState } from 'react';
import { FileText, ExternalLink, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { personal } from '../data/portfolioData';

export default function ResumeSection() {
  const [zoom, setZoom] = useState(100);
  const [page, setPage] = useState(1);
  const totalPages = 1; // Update if multi-page resume

  return (
    <section id="resume" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-secondary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-mono text-primary-500 text-sm mb-2 font-semibold">// resume</p>
          <h2 className="section-title">My Resume</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            A full overview of my education, skills, projects, and achievements.
          </p>
        </div>

        {/* Viewer Card */}
        <div className="glass-card rounded-2xl overflow-hidden">
          {/* Toolbar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-white/2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary-500/15 flex items-center justify-center text-primary-400">
                <FileText size={16} />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Cannis_Nikitha_Resume.pdf</p>
                <p className="text-slate-500 text-xs">M.Sc. Software Systems | PSG College of Technology</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Zoom Controls */}
              <button
                onClick={() => setZoom(z => Math.max(60, z - 10))}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                title="Zoom out"
              >
                <ZoomOut size={15} />
              </button>
              <span className="text-slate-400 text-xs w-12 text-center">{zoom}%</span>
              <button
                onClick={() => setZoom(z => Math.min(150, z + 10))}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                title="Zoom in"
              >
                <ZoomIn size={15} />
              </button>

              {/* Separator */}
              <div className="w-px h-4 bg-white/10 mx-1" />

              {/* Open in new tab */}
              <a
                href={personal.resumePdf}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-primary-400 border border-primary-500/25 hover:bg-primary-500/10 transition-all"
              >
                <ExternalLink size={12} />
                Open
              </a>
            </div>
          </div>

          {/* PDF Embed */}
          <div
            className="relative bg-[#1a1a2e] flex justify-center"
            style={{ minHeight: '80vh', padding: '24px 0' }}
          >
            {/* The object/iframe falls back to a stylised placeholder if resume.pdf isn't uploaded yet */}
            <object
              data={`${personal.resumePdf}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
              type="application/pdf"
              style={{
                width: `${zoom}%`,
                maxWidth: '900px',
                minHeight: '75vh',
                borderRadius: '8px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                transition: 'width 0.3s ease',
              }}
            >
              {/* Fallback if browser can't display PDF */}
              <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-400 mb-5">
                  <FileText size={36} />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Resume Preview</h3>
                <p className="text-slate-400 text-sm max-w-sm mb-6 leading-relaxed">
                  Place your resume PDF at <code className="text-primary-400 bg-primary-500/10 px-1.5 py-0.5 rounded text-xs">public/resume.pdf</code> to display it here. Your browser will render it inline.
                </p>
                <a
                  href={personal.resumePdf}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary text-sm"
                >
                  <ExternalLink size={15} />
                  Open Resume
                </a>

                {/* Stylized resume preview placeholder */}
                <div className="mt-10 w-full max-w-lg bg-white/3 rounded-xl border border-white/8 p-8 text-left space-y-4">
                  <div className="text-center mb-6">
                    <div className="text-white font-black text-2xl mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      CANNIS NIKITHA
                    </div>
                    <div className="text-primary-400 text-sm">M.Sc. Software Systems | PSG College of Technology, Coimbatore</div>
                    <div className="text-slate-500 text-xs mt-1">cannisnikitha@gmail.com · +91 7200236267 · github.com/cannis-nikitha</div>
                  </div>

                  {[
                    { title: 'Education', items: ['M.Sc. Software Systems – PSG College of Technology (CGPA: 6.5)', 'XII HSC – St. Joseph\'s Matric Hr. Sec. School (86.5%)', 'X SSLC – St. Joseph\'s Matric Hr. Sec. School (81.6%)'] },
                    { title: 'Technical Skills', items: ['Languages: Python, C, C++, JavaScript', 'Web: React.js, HTML5, CSS3, REST APIs', 'Databases: MySQL, MongoDB', 'Tools: Git, GitHub, VS Code, Linux, Arduino'] },
                    { title: 'Projects', items: ['Cinescope – Movie Recommendation App (React.js, REST API)', 'Image Recognition & Object Detection (Python, CNN, OpenCV)', 'Traffic Simulation (Graph, Dijkstra\'s, A*, Min-Heap)', 'DNS Traffic Monitoring & Spoofing Detection', 'Blind Assistance Device (Arduino, Ultrasonic, PWM)'] },
                    { title: 'Achievements', items: ['State Level High Jump Athlete – Tamil Nadu', 'Inter-College Podium Finish – Athletics', 'Competitive Programmer – LeetCode & HackerRank'] },
                  ].map(section => (
                    <div key={section.title}>
                      <h4 className="text-primary-400 font-bold text-xs uppercase tracking-widest mb-2 border-b border-primary-500/20 pb-1">{section.title}</h4>
                      <ul className="space-y-1">
                        {section.items.map(item => (
                          <li key={item} className="text-slate-400 text-xs flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary-500 flex-shrink-0 mt-1.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </object>
          </div>

          {/* Footer Bar */}
          <div className="flex items-center justify-between px-5 py-3 border-t border-white/5 bg-white/2">
            <p className="text-slate-500 text-xs">
              Add your PDF to <code className="text-primary-400 bg-primary-500/10 px-1 py-0.5 rounded text-xs">public/resume.pdf</code> to view it here
            </p>
            <a
              href={personal.resumePdf}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-primary-400 hover:text-primary-300 transition-colors flex items-center gap-1"
            >
              Open in new tab <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
