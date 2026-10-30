import React from 'react';
import { selectedProjects } from '../data/portfolioData';

export const Projects = () => {
  return (
    <section id="work" className="section-wrapper section-alt stitch-projects-section">
      <div className="container projects-container">
        {/* Section Header */}
        <div className="section-header-stitch projects-section-header">
          <div className="projects-header-left">
            <div className="section-header-eyebrow">
              <span>01</span>
              <span className="eyebrow-sep">/</span>
              <span>Work</span>
            </div>
            <h2 className="section-header-title">
              Selected Projects
            </h2>
          </div>
          <p className="section-header-desc projects-header-desc">
            Some of the applications and digital experiences I've built while exploring software development and modern technologies.
          </p>
        </div>

        {/* Spacious Two-Column Project Grid */}
        <div className="projects-two-col-grid">
          {selectedProjects.map((project, index) => {
            const hasLiveUrl = Boolean(project.liveUrl);
            const hasSourceUrl = Boolean(project.sourceUrl);

            return (
              <article
                key={project.id}
                id={project.id}
                className="project-grid-card"
              >
                {/* 1. Large Project Screenshot at Top (16:9 Aspect Ratio) */}
                <div className="project-card-media-wrapper">
                  <div className="browser-frame-container card-browser-frame">
                    <div className="browser-frame-header">
                      <div className="browser-dots" aria-hidden="true">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                      </div>
                      <span className="browser-url-pill">{project.domain}</span>
                    </div>

                    <a
                      href={hasLiveUrl ? project.liveUrl : `/projects/${project.id}`}
                      target={hasLiveUrl ? "_blank" : "_self"}
                      rel={hasLiveUrl ? "noopener noreferrer" : undefined}
                      className="browser-viewport-link"
                      title={`Open ${project.name}`}
                    >
                      <div className="browser-viewport-canvas card-viewport-canvas">
                        <img
                          src={project.screenshot}
                          alt={`${project.name} interface screenshot`}
                          className="project-screenshot-img"
                          loading={index < 2 ? "eager" : "lazy"}
                        />
                      </div>
                    </a>
                  </div>
                </div>

                {/* Card Body */}
                <div className="project-card-body">
                  {/* 2. Project Number and Project Name */}
                  <div className="project-card-header">
                    <div className="project-meta-pill">
                      <span className="project-index-num">{project.number}</span>
                      <span className="meta-sep">•</span>
                      <span className="project-tag-label">{project.tag}</span>
                    </div>

                    <h3 className="project-card-title">
                      <a href={`/projects/${project.id}`} className="project-title-link">
                        {project.name}
                      </a>
                    </h3>
                  </div>

                  {/* 3. Short, Readable Project Description */}
                  <p className="project-card-description">
                    {project.description}
                  </p>

                  {/* 4. Technology Stack Labels */}
                  <div className="project-card-technologies" aria-label="Technologies used">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* 5. Action Buttons (Pinned to bottom of card) */}
                  <div className="project-card-actions">
                    {/* Primary Action: Live Demo */}
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

                    {/* Secondary Action: View Details */}
                    <a
                      href={`/projects/${project.id}`}
                      className={hasLiveUrl ? "btn-secondary-stitch" : "btn-primary-stitch"}
                      title={`Read detailed case study for ${project.name}`}
                    >
                      <span>View Details</span>
                      <span className="action-arrow">→</span>
                    </a>

                    {/* Conditional Action: View Code (only if verified public repo exists) */}
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
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
