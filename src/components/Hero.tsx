import type { GitHubUser } from '../types/github';

interface HeroProps {
  user: GitHubUser | null;
  loading: boolean;
}

export function Hero({ user, loading }: HeroProps) {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <img
            src="https://avatars.githubusercontent.com/u/119728765?v=4"
            alt="Righteousness"
            className="profile-img"
          />
          <h1>
            Hi, I'm <span className="highlight">Righteousness</span>
          </h1>
          <p className="tagline">Full Stack Developer | Open Source Enthusiast</p>
          <div className="stats">
            <div className="stat">
              <span className="stat-number">
                {loading ? (
                  <i className="fas fa-spinner fa-spin"></i>
                ) : (
                  user?.public_repos ?? '?'
                )}
              </span>
              <span className="stat-label">Repositories</span>
            </div>
            <div className="stat">
              <span className="stat-number">
                {loading ? (
                  <i className="fas fa-spinner fa-spin"></i>
                ) : (
                  user?.followers ?? '?'
                )}
              </span>
              <span className="stat-label">Followers</span>
            </div>
            <div className="stat">
              <span className="stat-number">
                {loading ? (
                  <i className="fas fa-spinner fa-spin"></i>
                ) : (
                  user?.following ?? '?'
                )}
              </span>
              <span className="stat-label">Following</span>
            </div>
          </div>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/RightFix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}