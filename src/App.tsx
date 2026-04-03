import { useState, useEffect } from 'react';
import { Navbar, Hero, About, Projects, Contact, Footer } from './components';
import { useGitHubData } from './hooks/useGitHubData';
import './App.css';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved as 'light' | 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const { user, repos, loading, error } = useGitHubData();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="main-content">
        <Hero user={user} loading={loading} />
        <About />
        <Projects repos={repos} loading={loading} error={error} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;