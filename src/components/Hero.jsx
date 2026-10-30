import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Hero = () => {
  return (
    <>
      <section id="hero" className="stitch-hero-section">
        <div className="container hero-layout-grid">
          {/* Left Column: Introduction, Name, Subtitle, Narrative, Action Buttons, Social Links */}
          <div className="hero-narrative-column animate-fade-in-up">
            <span className="hero-greeting-text">Hi, I'm</span>
            
            <h1 className="hero-main-title">
              {personalInfo.fullName}
            </h1>

            <p className="hero-subtitle-role">
              Computer Engineering Student
            </p>

            {/* Concise, impactful introduction */}
            <p className="hero-lead-text">
              I'm a Computer Engineering student passionate about building practical web applications and exploring AI/ML. I enjoy turning ideas into useful digital products while continuously strengthening my technical knowledge and development skills.
            </p>

            {/* Internship Availability Indicator */}
            <div className="hero-availability-badge" aria-label="Internship availability">
              <span className="availability-dot" aria-hidden="true"></span>
              <div className="availability-content">
                <span className="availability-heading">Open to Internship Opportunities</span>
                <span className="availability-subtext">Interested in gaining practical industry experience and applying my technical knowledge.</span>
              </div>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="hero-button-row">
              <a href="#work" className="btn-primary-stitch">
                <span>Explore My Work</span>
                <span className="btn-arrow-icon" aria-hidden="true">↓</span>
              </a>
              <a
                href={personalInfo.contacts.resumeUrl}
                download={personalInfo.contacts.resumeFileName}
                className="btn-secondary-stitch btn-resume-download"
                title="Download Yajash Khamar's Resume (PDF)"
              >
                <span>Download Resume</span>
                <span className="btn-arrow-icon" aria-hidden="true">↓</span>
              </a>
            </div>

            {/* Verified Social & Contact Links */}
            <div className="hero-social-links-row" aria-label="Social and professional links">
              <a
                href={personalInfo.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                title="GitHub Profile"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span>GitHub</span>
                <span className="external-arrow">↗</span>
              </a>

              <a
                href={personalInfo.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                title="LinkedIn Profile"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span>LinkedIn</span>
                <span className="external-arrow">↗</span>
              </a>

              <a
                href={`mailto:${personalInfo.contacts.email}`}
                className="hero-social-link"
                title="Direct Email"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>Email</span>
                <span className="external-arrow">↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Professional Portrait Card */}
          <div className="hero-portrait-column animate-fade-in-up delay-200">
            <div className="clean-portrait-card">
              <div className="portrait-image-wrapper">
                <img
                  src={personalInfo.portrait.src}
                  alt={personalInfo.portrait.alt}
                  className="clean-portrait-img"
                  loading="eager"
                  onError={(e) => {
                    if (e.currentTarget.src !== personalInfo.portrait.fallbackSrc) {
                      e.currentTarget.src = personalInfo.portrait.fallbackSrc;
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Quick Introduction Strip (Compact 4-column responsive banner) */}
      <section className="quick-intro-strip-section" aria-label="Quick Highlights">
        <div className="container">
          <div className="quick-intro-strip">
            {/* Item 1 */}
            <div className="intro-strip-item">
              <div className="strip-item-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <div className="strip-item-text">
                <span className="strip-title">Computer Engineering</span>
                <span className="strip-subtitle">B.E. Student</span>
              </div>
            </div>

            <div className="strip-divider" aria-hidden="true"></div>

            {/* Item 2 */}
            <div className="intro-strip-item">
              <div className="strip-item-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div className="strip-item-text">
                <span className="strip-title">Software Development</span>
                <span className="strip-subtitle">Web Applications</span>
              </div>
            </div>

            <div className="strip-divider" aria-hidden="true"></div>

            {/* Item 3 */}
            <div className="intro-strip-item">
              <div className="strip-item-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2a8 8 0 0 0-8 8c0 3.37 2.07 6.25 5 7.42V20a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2.58c2.93-1.17 5-4.05 5-7.42a8 8 0 0 0-8-8z"></path>
                  <line x1="9.5" y1="9" x2="9.51" y2="9"></line>
                  <line x1="14.5" y1="9" x2="14.51" y2="9"></line>
                </svg>
              </div>
              <div className="strip-item-text">
                <span className="strip-title">AI & Machine Learning</span>
                <span className="strip-subtitle">Area of Interest</span>
              </div>
            </div>

            <div className="strip-divider" aria-hidden="true"></div>

            {/* Item 4 */}
            <div className="intro-strip-item">
              <div className="strip-item-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="strip-item-text">
                <span className="strip-title">Ahmedabad, India</span>
                <span className="strip-subtitle">Location</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
