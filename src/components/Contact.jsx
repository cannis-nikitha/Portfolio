import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { personal } from '../data/portfolioData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry – ' + form.name)}&body=${encodeURIComponent(`Hi Cannis,\n\nMy name is ${form.name} (${form.email}).\n\n${form.message}\n\nBest regards,\n${form.name}`)}`;
    window.open(mailtoLink);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const contactLinks = [
    {
      icon: <Mail size={18} />,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      color: 'cyan',
      copyable: true,
    },
    {
      icon: <Phone size={18} />,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`,
      color: 'purple',
    },
    {
      icon: <MapPin size={18} />,
      label: 'Location',
      value: personal.location,
      href: null,
      color: 'cyan',
    },
    {
      icon: <Github size={18} />,
      label: 'GitHub',
      value: `github.com/${personal.githubUsername}`,
      href: personal.github,
      color: 'purple',
    },
    {
      icon: <Linkedin size={18} />,
      label: 'LinkedIn',
      value: 'cannis-nikitha',
      href: personal.linkedin,
      color: 'cyan',
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 w-[500px] h-64 bg-primary-500/6 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-mono text-primary-500 text-sm mb-2 font-semibold">// contact</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Whether you have an internship opportunity, project collaboration, or just want to connect — I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left – Contact Info */}
          <div className="space-y-4">
            <div className="glass-card rounded-2xl p-7">
              <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary-500/15 flex items-center justify-center text-primary-400">
                  📬
                </span>
                Contact Information
              </h3>
              <div className="space-y-3">
                {contactLinks.map((link) => (
                  <div key={link.label} className="flex items-center gap-4 p-3.5 rounded-xl bg-white/3 border border-white/5 hover:border-primary-500/20 transition-all duration-200 group">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      link.color === 'cyan' ? 'bg-primary-500/15 text-primary-400' : 'bg-secondary-500/15 text-secondary-400'
                    }`}>
                      {link.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">{link.label}</p>
                      {link.href ? (
                        <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined}
                          rel="noreferrer"
                          className="text-white text-sm font-medium hover:text-primary-400 transition-colors truncate block">
                          {link.value}
                        </a>
                      ) : (
                        <p className="text-white text-sm font-medium truncate">{link.value}</p>
                      )}
                    </div>
                    {link.copyable && (
                      <button onClick={copyEmail}
                        className="flex-shrink-0 p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all duration-200">
                        {copiedEmail ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a href={personal.github} target="_blank" rel="noreferrer"
                className="btn-secondary justify-center text-sm">
                <Github size={16} /> GitHub
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer"
                className="btn-ghost justify-center text-sm">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Right – Contact Form */}
          <div className="glass-card rounded-2xl p-7">
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-secondary-500/15 flex items-center justify-center text-secondary-400">
                ✉️
              </span>
              Send a Message
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 gap-3">
                <CheckCircle2 size={48} className="text-green-400" />
                <p className="text-white font-semibold text-lg">Message Ready!</p>
                <p className="text-slate-400 text-sm text-center">Your email client has opened. Send the email to reach Cannis.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-primary-500/50 focus:bg-primary-500/5 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Email *</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-primary-500/50 focus:bg-primary-500/5 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    placeholder="Internship Opportunity / Collaboration"
                    className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-primary-500/50 focus:bg-primary-500/5 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Message *</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about the opportunity or your project..."
                    className="w-full bg-white/3 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-primary-500/50 focus:bg-primary-500/5 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  id="contact-submit"
                  type="submit"
                  className="btn-primary w-full justify-center py-3 text-sm"
                >
                  <Send size={15} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
