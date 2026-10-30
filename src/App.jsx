import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { ProjectDetail } from './components/ProjectDetail';
import './App.css';

/**
 * Robust lightweight client router for clean URLs (/projects/:projectId)
 * Supports browser back/forward, direct refresh, window.history.pushState,
 * and link interception for seamless SPA transitions.
 */
export function App() {
  const [currentPath, setCurrentPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    // Handle browser back and forward button navigation
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };

    // Intercept internal link clicks for clean SPA transitions without hard refreshes
    const handleLinkClick = (e) => {
      // Find closest anchor tag
      const anchor = e.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Don't intercept target="_blank", downloads, mailto, tel, or external links
      if (
        anchor.target === '_blank' ||
        anchor.hasAttribute('download') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('http://') ||
        href.startsWith('https://')
      ) {
        return;
      }

      // Handle internal clean project URLs (/projects/...)
      if (href.startsWith('/projects/')) {
        e.preventDefault();
        window.history.pushState({}, '', href);
        setCurrentPath(href);
        window.scrollTo(0, 0);
        return;
      }

      // Handle root or hash navigation back from project detail page (e.g., / or /#work)
      if (href === '/' || href.startsWith('/#')) {
        if (window.location.pathname !== '/') {
          e.preventDefault();
          const targetHash = href.includes('#') ? href.split('#')[1] : null;
          window.history.pushState({}, '', href);
          setCurrentPath('/');
          if (targetHash) {
            setTimeout(() => {
              const el = document.getElementById(targetHash);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.scrollTo(0, 0);
              }
            }, 50);
          } else {
            window.scrollTo(0, 0);
          }
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  // Check if current route is a project detail page
  const projectDetailMatch = currentPath.match(/^\/projects\/([a-zA-Z0-9_-]+)/);
  const activeProjectId = projectDetailMatch ? projectDetailMatch[1] : null;

  return (
    <div className="portfolio-app">
      <Header />
      <main id="main-content">
        {activeProjectId ? (
          <ProjectDetail projectId={activeProjectId} />
        ) : (
          <>
            <Hero />
            <Projects />
            <About />
            <Skills />
            <Experience />
            <Contact />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
