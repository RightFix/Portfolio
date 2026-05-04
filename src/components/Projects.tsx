import { useState, useMemo } from 'react';
import type { GitHubRepo } from '../types/github';

interface ProjectsProps {
  repos: GitHubRepo[];
  loading: boolean;
  error: string | null;
}

const LANGUAGE_COLORS: Record<string, string> = {
  Python: '#3572A5',
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
  Ruby: '#701516',
  Java: '#b07219',
  Go: '#00ADD8',
  Rust: '#dea584',
};

function SkeletonCard() {
  return (
    <div className="project-card">
      <div className="skeleton" style={{ width: '60%', height: '1.5rem' }}></div>
      <div className="skeleton" style={{ width: '100%', height: '1rem' }}></div>
      <div className="skeleton" style={{ width: '40%', height: '1rem' }}></div>
    </div>
  );
}

export function Projects({ repos, loading, error }: ProjectsProps) {
  const [filter, setFilter] = useState<string>('All');

  const filteredRepos = useMemo(() => {
    if (filter === 'All') return repos;
    return repos.filter((repo) => repo.language === filter);
  }, [repos, filter]);

  const languages = useMemo(() => {
    const langs = [...new Set(repos.map((r) => r.language).filter(Boolean))];
    return ['All', ...langs] as string[];
  }, [repos]);

  const getLangColor = (lang: string | null) => LANGUAGE_COLORS[lang ?? ''] ?? '#6e7681';

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        {!loading && !error && repos.length > 0 && (
          <div className="filter-bar">
            {languages.map((lang) => (
              <button
                key={lang}
                className={`filter-btn ${filter === lang ? 'active' : ''}`}
                onClick={() => setFilter(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
        )}
        {error ? (
          <div className="error-message">
            <i className="fas fa-exclamation-circle"></i>
            <p>{error}</p>
          </div>
        ) : (
          <div className="projects-grid">
            {loading
              ? Array(6)
                  .fill(null)
                  .map((_, i) => <SkeletonCard key={i} />)
              : filteredRepos.map((repo) => (
                  <div key={repo.name} className="project-card">
                    <div className="project-header">
                      <h3>{repo.name}</h3>
                      {repo.license && (
                        <span className="license-badge">
                          <i className="fas fa-balance-scale"></i> {repo.license.name}
                        </span>
                      )}
                    </div>
                    <p>{repo.description || 'No description available'}</p>
                    <div className="project-meta">
                      <span className="language-dot" style={{ backgroundColor: getLangColor(repo.language) }}></span>
                      <span className="project-language">{repo.language || 'Unknown'}</span>
                      <span className="meta-item">
                        <i className="fas fa-star"></i> {repo.stargazers_count}
                      </span>
                      <span className="meta-item">
                        <i className="fas fa-code-branch"></i> {repo.forks_count}
                      </span>
                    </div>
                    <div className="project-links">
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i> Code
                      </a>
                      {repo.homepage && repo.name !== 'notepad' && (
                        <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                          <i className="fas fa-external-link-alt"></i> Live
                        </a>
                      )}
                    </div>
                  </div>
                ))}
          </div>
        )}
      </div>
    </section>
  );
}