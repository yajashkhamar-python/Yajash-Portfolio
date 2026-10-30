import React from 'react';
import { educationList } from '../data/portfolioData';

export const Experience = () => {
  const [bachelors, class12, class10] = educationList;

  return (
    <section id="education" className="section-wrapper section-alt stitch-education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-stitch">
          <div>
            <div className="section-header-eyebrow">
              <span>04</span>
              <span className="eyebrow-sep">/</span>
              <span>Education</span>
            </div>
            <h2 className="section-header-title">
              Education
            </h2>
          </div>
          <p className="section-header-desc">
            Complete academic journey from secondary and higher secondary schooling to undergraduate Computer Engineering at Lok Jagruti University.
          </p>
        </div>

        {/* Academic Journey Timeline Container */}
        <div className="education-journey-timeline">
          {/* 1. PRIMARY ENTRY: Bachelor of Engineering (Most Prominent) */}
          <div className="education-timeline-entry is-primary">
            <div className="timeline-marker-col" aria-hidden="true">
              <span className="timeline-node-circle is-active"></span>
              <span className="timeline-connector-stem"></span>
            </div>

            <div className="education-card-wrapper">
              <div className="education-premium-card">
                {/* Left Column: Degree & University Details */}
                <div className="education-main-info">
                  <div className="university-badge-row">
                    <span className="university-dot"></span>
                    <span className="university-name">{bachelors.institution}</span>
                    <span className="university-loc">· {bachelors.location}</span>
                  </div>

                  <h3 className="degree-title">
                    {bachelors.level} in {bachelors.field}
                  </h3>

                  <p className="education-description-text">
                    {bachelors.description}
                  </p>

                  <div className="education-timeline-pill-row">
                    <div className="education-timeline-pill">
                      <span className="timeline-icon" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                          <line x1="16" y1="2" x2="16" y2="6"></line>
                          <line x1="8" y1="2" x2="8" y2="6"></line>
                          <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                      </span>
                      <span className="timeline-text">{bachelors.duration}</span>
                    </div>

                    <div className="education-semester-pill">
                      <span className="sem-indicator-dot"></span>
                      <span>Current Semester: {bachelors.currentSemester}</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Semester SPI Performance Scorecards */}
                <div className="education-performance-cards">
                  <span className="scorecards-group-label">Academic Performance</span>
                  <div className="scorecards-flex-wrap">
                    {bachelors.performance.map((item, idx) => (
                      <div key={idx} className="academic-score-pill">
                        <div className="score-pill-header">
                          <span className="score-semester-name">{item.label}</span>
                          <span className="score-accent-dot"></span>
                        </div>
                        <div className="score-figure-row">
                          <span className="score-big-num">{item.score}</span>
                          <span className="score-scale-denom">{item.scale}</span>
                        </div>
                        <span className="score-label-footnote">{item.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECONDARY TIERS: Class 12 & Class 10 (Compact, Clean Two-Card Grid) */}
          <div className="secondary-education-section">
            {/* 2. SECOND ENTRY: Class 12 — Higher Secondary */}
            <div className="education-timeline-entry is-secondary">
              <div className="timeline-marker-col" aria-hidden="true">
                <span className="timeline-node-circle"></span>
                <span className="timeline-connector-stem"></span>
              </div>

              <div className="education-card-wrapper">
                <div className="education-compact-card">
                  <div className="compact-card-body">
                    <div className="compact-badge-row">
                      <span className="compact-level-chip">Class 12</span>
                      <span className="compact-year-tag">Passing Year: {class12.passingYear}</span>
                    </div>

                    <h4 className="compact-school-name">{class12.institution}</h4>
                    <p className="compact-board-text">{class12.board}</p>
                  </div>

                  <div className="compact-score-display">
                    <span className="compact-score-label">Overall Performance</span>
                    <div className="compact-score-val-row">
                      <span className="compact-score-num">{class12.performance[0].score}</span>
                      <span className="compact-score-unit">{class12.performance[0].scale}</span>
                    </div>
                    <span className="compact-score-note">{class12.performance[0].type}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. THIRD ENTRY: Class 10 — Secondary */}
            <div className="education-timeline-entry is-secondary">
              <div className="timeline-marker-col" aria-hidden="true">
                <span className="timeline-node-circle"></span>
              </div>

              <div className="education-card-wrapper">
                <div className="education-compact-card">
                  <div className="compact-card-body">
                    <div className="compact-badge-row">
                      <span className="compact-level-chip">Class 10</span>
                      <span className="compact-year-tag">Passing Year: {class10.passingYear}</span>
                    </div>

                    <h4 className="compact-school-name">{class10.institution}</h4>
                    <p className="compact-board-text">{class10.board}</p>
                  </div>

                  <div className="compact-score-display">
                    <span className="compact-score-label">Academic Result</span>
                    <div className="compact-score-val-row">
                      <span className="compact-score-num">{class10.performance[0].score}</span>
                      <span className="compact-score-unit">{class10.performance[0].scale}</span>
                    </div>
                    <span className="compact-score-note">{class10.performance[0].type}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
