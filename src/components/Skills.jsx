import React from 'react';
import { technicalSkills } from '../data/portfolioData';
import { TechLogo } from './TechLogo';

export const Skills = () => {
  return (
    <section id="skills" className="section-wrapper stitch-skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-stitch">
          <div>
            <div className="section-header-eyebrow">
              <span>03</span>
              <span className="eyebrow-sep">/</span>
              <span>Skills</span>
            </div>
            <h2 className="section-header-title">
              Technical Skills
            </h2>
          </div>
          <p className="section-header-desc">
            Core programming languages, frontend architecture, backend services, databases, and development tooling I work with daily.
          </p>
        </div>

        {/* 5 Full-Width Horizontal Category Rows */}
        <div className="skills-horizontal-rows-stack">
          {technicalSkills.map((domain) => (
            <div key={domain.category} className="skill-horizontal-row">
              {/* Left Column: Category title, index, & description */}
              <div className="skill-row-left">
                <div className="skill-row-index-badge">
                  <span className="skill-row-num">{domain.number}</span>
                  <span className="skill-row-dot" aria-hidden="true">•</span>
                  <span className="skill-row-cat-pill">{domain.category}</span>
                </div>
                <h3 className="skill-row-title">{domain.category}</h3>
                <p className="skill-row-desc">{domain.description}</p>
              </div>

              {/* Right Column: Horizontal collection of technologies with official brand logos */}
              <div className="skill-row-right">
                <div className="skill-tech-cards-flex">
                  {domain.skills.map((skill) => (
                    <div key={skill} className="skill-horizontal-tech-card">
                      <div className="tech-logo-wrapper">
                        <TechLogo name={skill} size={38} className="tech-brand-logo" />
                      </div>
                      <span className="tech-brand-name">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

