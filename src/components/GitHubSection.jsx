import { useState, useEffect } from 'react';
import { Github, Star, GitFork, Users, BookOpen, ExternalLink, Linkedin } from 'lucide-react';
import { personal } from '../data/portfolioData';

export default function GitHubSection() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${personal.githubUsername}`),
          fetch(`https://api.github.com/users/${personal.githubUsername}/repos?sort=updated&per_page=6`),
        ]);
        if (!profileRes.ok) throw new Error('GitHub API error');
        const profileData = await profileRes.json();
        const reposData = await reposRes.json();
        setProfile(profileData);
        setRepos(Array.isArray(reposData) ? reposData.slice(0, 6) : []);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchGitHub();
  }, []);

  return (
    <section id="github" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-mono text-primary-500 text-sm mb-2 font-semibold">// open source & connect</p>
          <h2 className="section-title">GitHub & LinkedIn</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Explore my open-source work on GitHub and connect with me professionally on LinkedIn.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column – GitHub Profile Card */}
          <div className="lg:col-span-1 space-y-5">
            {/* Profile Card */}
            <div className="glass-card rounded-2xl p-6">
              {loading ? (
                <div className="animate-pulse space-y-3">
                  <div className="w-20 h-20 bg-white/5 rounded-2xl mx-auto" />
                  <div className="h-4 bg-white/5 rounded w-3/4 mx-auto" />
                  <div className="h-3 bg-white/5 rounded w-1/2 mx-auto" />
                </div>
              ) : error || !profile ? (
                <div className="text-center py-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary-500/15 flex items-center justify-center text-primary-400 mx-auto mb-3">
                    <Github size={28} />
                  </div>
                  <p className="text-white font-bold">{personal.name}</p>
                  <p className="text-slate-500 text-sm mt-1">{personal.githubUsername}</p>
                  <a href={personal.github} target="_blank" rel="noreferrer" className="btn-primary mt-4 text-xs justify-center w-full">
                    <Github size={13} /> View GitHub Profile
                  </a>
                </div>
              ) : (
                <div className="text-center">
                  <img
                    src={profile.avatar_url}
                    alt={profile.name || personal.name}
                    className="w-20 h-20 rounded-2xl mx-auto mb-3 border-2 border-primary-500/30"
                  />
                  <h3 className="text-white font-bold text-base">{profile.name || personal.name}</h3>
                  <p className="text-slate-500 text-xs mb-1">@{profile.login}</p>
                  {profile.bio && <p className="text-slate-400 text-xs leading-relaxed mb-4">{profile.bio}</p>}

                  <div className="grid grid-cols-3 gap-2 my-4">
                    {[
                      { label: 'Repos', value: profile.public_repos },
                      { label: 'Followers', value: profile.followers },
                      { label: 'Following', value: profile.following },
                    ].map(s => (
                      <div key={s.label} className="p-2 rounded-lg bg-white/3 border border-white/5">
                        <div className="text-white font-bold text-sm">{s.value}</div>
                        <div className="text-slate-500 text-xs">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  <a href={personal.github} target="_blank" rel="noreferrer"
                    className="btn-primary text-xs justify-center w-full">
                    <Github size={13} /> Open GitHub Profile
                  </a>
                </div>
              )}
            </div>

            {/* LinkedIn Card */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/15 flex items-center justify-center">
                  <Linkedin size={20} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">LinkedIn</h3>
                  <p className="text-slate-500 text-xs">Professional Network</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Connect with me on LinkedIn to follow my professional journey and academic milestones.
              </p>
              <a href={personal.linkedin} target="_blank" rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold bg-blue-600/15 text-blue-400 border border-blue-500/25 hover:bg-blue-600/25 hover:border-blue-500/40 transition-all duration-200">
                <Linkedin size={15} />
                Connect on LinkedIn
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Right – Repos */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-2xl p-6 h-full">
              <h3 className="text-white font-semibold text-base mb-5 flex items-center gap-2">
                <BookOpen size={18} className="text-primary-400" />
                Latest Repositories
              </h3>

              {loading ? (
                <div className="grid sm:grid-cols-2 gap-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="animate-pulse p-4 rounded-xl bg-white/3 border border-white/5 space-y-2">
                      <div className="h-3 bg-white/5 rounded w-2/3" />
                      <div className="h-2 bg-white/5 rounded w-full" />
                      <div className="h-2 bg-white/5 rounded w-1/2" />
                    </div>
                  ))}
                </div>
              ) : error || repos.length === 0 ? (
                <div className="text-center py-10">
                  <Github size={40} className="text-slate-700 mx-auto mb-3" />
                  <p className="text-slate-500 text-sm">Repositories will appear here once public.</p>
                  <a href={personal.github} target="_blank" rel="noreferrer"
                    className="btn-secondary mt-4 text-sm inline-flex">
                    View GitHub <ExternalLink size={13} />
                  </a>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-3">
                  {repos.map(repo => (
                    <a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-4 rounded-xl bg-white/3 border border-white/5 hover:border-primary-500/25 hover:bg-primary-500/5 transition-all duration-200 group block"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="text-white font-semibold text-sm group-hover:text-primary-400 transition-colors line-clamp-1">
                          {repo.name}
                        </h4>
                        <ExternalLink size={12} className="text-slate-600 group-hover:text-primary-400 flex-shrink-0 transition-colors" />
                      </div>
                      {repo.description && (
                        <p className="text-slate-500 text-xs leading-relaxed mb-3 line-clamp-2">{repo.description}</p>
                      )}
                      <div className="flex items-center gap-3">
                        {repo.language && (
                          <span className="text-xs text-slate-400 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-primary-400 inline-block" />
                            {repo.language}
                          </span>
                        )}
                        {repo.stargazers_count > 0 && (
                          <span className="text-xs text-slate-500 flex items-center gap-1">
                            <Star size={11} /> {repo.stargazers_count}
                          </span>
                        )}
                        {repo.forks_count > 0 && (
                          <span className="text-xs text-slate-500 flex items-center gap-1">
                            <GitFork size={11} /> {repo.forks_count}
                          </span>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              )}

              {repos.length > 0 && (
                <div className="mt-4 text-center">
                  <a href={personal.github} target="_blank" rel="noreferrer"
                    className="text-primary-400 text-sm hover:text-primary-300 transition-colors inline-flex items-center gap-1">
                    View all repositories <ExternalLink size={13} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
