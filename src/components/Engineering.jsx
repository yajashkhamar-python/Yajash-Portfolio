import React from 'react';
import { engineeringApproach } from '../data/portfolioData';

export const Engineering = () => {
  return (
    <section id="approach" className="section-wrapper stitch-engineering-section">
      <div className="container">
        {/* Editorial 2-Column Split: Header on Left, 3 Principles on Right */}
        <div className="engineering-editorial-grid">
          {/* Left Column: Prominent Headline & Thoughtful Statement */}
          <div className="engineering-header-col">
            <div className="section-header-eyebrow">
              <span>02</span>
              <span className="eyebrow-sep">/</span>
              <span>Engineering Philosophy</span>
            </div>

            <h2 className="engineering-headline-title">
              {engineeringApproach.heading}
            </h2>

            <p className="engineering-narrative-lead">
              {engineeringApproach.description}
            </p>

            <div className="engineering-subtle-accent-bar" aria-hidden="true"></div>
          </div>

          {/* Right Column: 3 Clearly Separated Visual Principle Cards */}
          <div className="engineering-principles-col">
            {engineeringApproach.principles.map((principle) => (
              <div key={principle.number} className="principle-editorial-item">
                <div className="principle-num-badge">
                  <span>{principle.number}</span>
                </div>
                <div className="principle-body">
                  <h3 className="principle-title">{principle.title}</h3>
                  <p className="principle-desc">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
