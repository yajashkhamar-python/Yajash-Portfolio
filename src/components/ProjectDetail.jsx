import React, { useState, useEffect } from 'react';
import { projectDetailsMap } from '../data/projectDetailsData';
import { selectedProjects } from '../data/portfolioData';
import { TechLogo } from './TechLogo';

export const ProjectDetail = ({ projectId }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  const project = projectDetailsMap[projectId];

  // If invalid project id, render graceful not-found view
  if (!project) {
    return (
      <div className="project-detail-page section-wrapper">
        <div className="detail-container project-detail-notfound">
          <div className="notfound-card">
            <span className="notfound-eyebrow">Project Not Found</span>
            <h1 className="notfound-title">We couldn't locate this project</h1>
            <p className="notfound-desc">
              The project case study you requested does not exist or may have been moved.
            </p>
            <a href="/" className="btn-primary-stitch">
              <span>← Back to All Projects</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Find previous and next projects
  const currentIndex = selectedProjects.findIndex((p) => p.id === projectId);
  const prevProject =
    currentIndex > 0
      ? selectedProjects[currentIndex - 1]
      : selectedProjects[selectedProjects.length - 1];
  const nextProject =
    currentIndex < selectedProjects.length - 1
      ? selectedProjects[currentIndex + 1]
      : selectedProjects[0];

  const hasLiveUrl = Boolean(project.liveUrl);
  const hasSourceUrl = Boolean(project.sourceUrl);

  return (
    <article className="project-detail-page">
      {/* Top Back Navigation Bar */}
      <nav className="detail-top-nav-bar" aria-label="Project detail navigation">
        <div className="detail-container">
          <div className="detail-top-nav-content">
            <a href="/#work" className="detail-back-link">
              <span className="back-arrow" aria-hidden="true">←</span>
              <span>Back to All Projects</span>
            </a>
            <div className="detail-top-pill">
              <span className="detail-pill-num">{project.number}</span>
              <span className="meta-sep">•</span>
              <span className="detail-pill-tag">{project.tag}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="detail-hero-section section-wrapper">
        <div className="detail-container">
          <div className="detail-hero-header-block">
            <div className="detail-hero-badge-row">
              <span className="detail-hero-num-badge">Project {project.number}</span>
              <span className="detail-hero-category">{project.category}</span>
              <span className="detail-hero-domain">{project.domain}</span>
            </div>

            <h1 className="detail-hero-title">{project.name}</h1>
            <p className="detail-hero-one-liner">{project.oneLiner}</p>

            {/* Relevant Technology Stack in Hero */}
            <div className="detail-hero-tech-row" aria-label="Project technology stack">
              {project.technologies.map((tech) => (
                <span key={tech.name} className="tech-chip">
                  {tech.name}
                </span>
              ))}
            </div>

            {/* Action buttons with strict verification hierarchy */}
            <div className="detail-hero-cta-cluster">
              {hasLiveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-stitch"
                  title={`Open live web deployment of ${project.name}`}
                >
                  <span>Live Demo</span>
                  <span className="action-arrow">↗</span>
                </a>
              )}

              {hasSourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-stitch"
                  title={`Inspect source code repository for ${project.name}`}
                >
                  <span>View Code</span>
                  <span className="action-arrow">↗</span>
                </a>
              )}
            </div>
          </div>

          {/* Prominent Genuine Application Screenshot in Browser Chrome Frame */}
          <div className="detail-hero-media-wrapper">
            <div className="browser-frame-container detail-browser-frame">
              <div className="browser-frame-header">
                <div className="browser-dots" aria-hidden="true">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="browser-url-pill">{project.domain}</span>
              </div>
              <div
                className="browser-viewport-canvas detail-hero-canvas"
                onClick={() => setSelectedImage(project.heroScreenshot)}
                title="Click to view full screenshot"
              >
                <img
                  src={project.heroScreenshot}
                  alt={`${project.name} primary interface showcase`}
                  className="project-screenshot-img"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Section 01: Project Overview */}
      <section className="section-wrapper detail-overview-section section-alt">
        <div className="detail-container">
          <div className="detail-section-intro">
            <span className="detail-section-eyebrow">Section 01</span>
            <h2 className="detail-section-title">Project Overview</h2>
            <p className="detail-section-subtitle">
              The motivation, problem scope, and targeted purpose behind developing {project.name}.
            </p>
          </div>

          <div className="detail-overview-grid">
            <div className="detail-overview-card">
              <div className="overview-card-header">
                <span className="overview-card-dot red"></span>
                <h3 className="overview-card-title">Problem Statement</h3>
              </div>
              <p className="overview-card-body">{project.overview.problem}</p>
            </div>

            <div className="detail-overview-card">
              <div className="overview-card-header">
                <span className="overview-card-dot blue"></span>
                <h3 className="overview-card-title">Solution & Purpose</h3>
              </div>
              <p className="overview-card-body">{project.overview.solution}</p>
            </div>

            <div className="detail-overview-card">
              <div className="overview-card-header">
                <span className="overview-card-dot green"></span>
                <h3 className="overview-card-title">Target Users</h3>
              </div>
              <p className="overview-card-body">{project.overview.users}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: Key Features */}
      <section className="section-wrapper detail-features-section">
        <div className="detail-container">
          <div className="detail-section-intro">
            <span className="detail-section-eyebrow">Section 02</span>
            <h2 className="detail-section-title">Key Features</h2>
            <p className="detail-section-subtitle">
              Every capability listed below is genuinely implemented and functioning in the application.
            </p>
          </div>

          <div className="detail-features-grid">
            {project.features.map((feature, fIdx) => (
              <div key={fIdx} className="detail-feature-card">
                <div className="feature-card-header">
                  <span className="feature-index-chip">0{fIdx + 1}</span>
                  <span className="feature-decor-line"></span>
                </div>
                <h3 className="feature-card-title">{feature.title}</h3>
                <p className="feature-card-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 03: Technologies Used */}
      <section className="section-wrapper detail-tech-section section-alt">
        <div className="detail-container">
          <div className="detail-section-intro">
            <span className="detail-section-eyebrow">Section 03</span>
            <h2 className="detail-section-title">Technologies Used</h2>
            <p className="detail-section-subtitle">
              Specific technologies, frameworks, and tools actively employed in this project.
            </p>
          </div>

          <div className="detail-tech-grid">
            {project.technologies.map((tech, tIdx) => (
              <div key={tIdx} className="detail-tech-card">
                <div className="tech-card-top">
                  <div className="tech-card-logo-slot">
                    <TechLogo name={tech.name} size={32} />
                  </div>
                  <span className="tech-name-badge">{tech.name}</span>
                </div>
                <p className="tech-role-desc">{tech.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 04: Application Screenshots Gallery */}
      <section className="section-wrapper detail-gallery-section">
        <div className="detail-container">
          <div className="detail-section-intro">
            <span className="detail-section-eyebrow">Section 04</span>
            <h2 className="detail-section-title">Application Screenshots</h2>
            <p className="detail-section-subtitle">
              Genuine high-resolution interface captures from different pages and features in the working application.
            </p>
          </div>

          <div className="detail-gallery-grid">
            {project.screenshots.map((shot, sIdx) => (
              <figure key={sIdx} className="detail-gallery-figure">
                <div
                  className="browser-frame-container detail-gallery-frame"
                  onClick={() => setSelectedImage(shot.src)}
                  title="Click to view in full resolution"
                >
                  <div className="browser-frame-header">
                    <div className="browser-dots" aria-hidden="true">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                    </div>
                    <span className="browser-url-pill">{project.domain}</span>
                  </div>
                  <div className="browser-viewport-canvas detail-gallery-canvas">
                    <img
                      src={shot.src}
                      alt={shot.caption}
                      className="project-screenshot-img"
                      loading="lazy"
                    />
                  </div>
                </div>
                <figcaption className="detail-gallery-caption">
                  <span className="gallery-caption-index">Screen 0{sIdx + 1}:</span> {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Section 05: Development & Learning */}
      <section className="section-wrapper detail-learnings-section section-alt">
        <div className="detail-container">
          <div className="detail-section-intro">
            <span className="detail-section-eyebrow">Section 05</span>
            <h2 className="detail-section-title">Development & Learning</h2>
            <p className="detail-section-subtitle">
              Technical decisions, architecture challenges, and skills strengthened during the development process.
            </p>
          </div>

          <div className="detail-learnings-stack">
            {project.learnings.map((learning, lIdx) => (
              <div key={lIdx} className="detail-learning-item">
                <span className="learning-icon" aria-hidden="true">✓</span>
                <p className="learning-text">{learning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 06: Project Navigation */}
      <nav className="detail-project-nav section-wrapper" aria-label="Explore other projects">
        <div className="detail-container">
          <div className="detail-section-intro">
            <span className="detail-section-eyebrow">Section 06</span>
            <h2 className="detail-section-title">Project Navigation</h2>
            <p className="detail-section-subtitle">
              Explore other software case studies or return to the main projects overview.
            </p>
          </div>

          <div className="detail-project-nav-grid">
            {/* Previous Project Card */}
            <a
              href={`/projects/${prevProject.id}`}
              className="project-nav-card nav-prev"
              title={`View ${prevProject.name}`}
            >
              <div className="nav-card-indicator">
                <span className="nav-arrow" aria-hidden="true">←</span>
                <span>Previous Project</span>
              </div>
              <h3 className="nav-card-title">{prevProject.name}</h3>
              <p className="nav-card-tag">{prevProject.tag}</p>
            </a>

            {/* Next Project Card */}
            <a
              href={`/projects/${nextProject.id}`}
              className="project-nav-card nav-next"
              title={`View ${nextProject.name}`}
            >
              <div className="nav-card-indicator">
                <span>Next Project</span>
                <span className="nav-arrow" aria-hidden="true">→</span>
              </div>
              <h3 className="nav-card-title">{nextProject.name}</h3>
              <p className="nav-card-tag">{nextProject.tag}</p>
            </a>
          </div>

          <div className="detail-center-back-row">
            <a href="/#work" className="btn-secondary-stitch">
              <span>Back to All Selected Projects</span>
              <span className="action-arrow">↑</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Dedicated Project Detail Page Footer */}
      <footer className="detail-page-footer">
        <div className="detail-container">
          <div className="detail-footer-inner">
            <span className="detail-footer-copyright">
              © {new Date().getFullYear()} Yajash Khamar • Portfolio Case Study
            </span>
            <div className="detail-footer-actions">
              <a href="/#work" className="detail-footer-link">
                All Projects
              </a>
              <span className="footer-sep-dot">•</span>
              <a href="#main-content" className="detail-footer-link" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal for Screenshots */}
      {selectedImage && (
        <div
          className="screenshot-lightbox-overlay"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot lightbox preview"
        >
          <div
            className="lightbox-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setSelectedImage(null)}
              aria-label="Close screenshot preview"
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Expanded project screenshot preview"
              className="lightbox-img"
            />
          </div>
        </div>
      )}
    </article>
  );
};
