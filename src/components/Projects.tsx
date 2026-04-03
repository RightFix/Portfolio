import type { GitHubRepo } from '../types/github';

interface ProjectsProps {
  repos: GitHubRepo[];
  loading: boolean;
  error: string | null;
}

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
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
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
              : repos.map((repo) => (
                  <div key={repo.name} className="project-card">
                    <h3>{repo.name}</h3>
                    <p>{repo.description || 'No description available'}</p>
                    <span className="project-language">
                      {repo.language || 'Unknown'}
                    </span>
                    <div className="project-links">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github"></i> Code
                      </a>
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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