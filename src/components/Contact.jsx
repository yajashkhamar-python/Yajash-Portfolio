import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Contact = () => {
  const currentYear = new Date().getFullYear();

  const isDetailPage = typeof window !== 'undefined' && window.location.pathname.startsWith('/projects/');
  const rootPrefix = isDetailPage ? '/' : '';

  return (
    <footer id="contact" className="stitch-contact-footer">
      <div className="contact-main-wrapper section-alt">
        <div className="container">
          <div className="contact-clean-showcase">
            {/* Header info */}
            <div className="contact-header-stitch">
              <div className="section-header-eyebrow">
                <span>05</span>
                <span className="eyebrow-sep">/</span>
                <span>Contact</span>
              </div>
              <h2 className="contact-clean-title">
                Have a project or opportunity in mind? Let's connect.
              </h2>
              <p className="contact-clean-desc">
                I'm open to internships, full-time opportunities and exciting projects. Feel free to reach out!
              </p>
            </div>

            {/* Direct Channels Cards Grid (Full width) */}
            <div className="contact-cards-grid">
              {/* Email Card */}
              <a
                href={`mailto:${personalInfo.contacts.email}`}
                className="contact-card-box"
                title={`Send direct email to ${personalInfo.contacts.email}`}
              >
                <div className="contact-card-icon-wrap email-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#004AC6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact-card-info">
                  <span className="contact-card-label">Email</span>
                  <span className="contact-card-val">{personalInfo.contacts.email}</span>
                  <span className="contact-card-action">Send an email ↗</span>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={personalInfo.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-box"
                title="Open LinkedIn Profile"
              >
                <div className="contact-card-icon-wrap linkedin-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#0A66C2" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8m1.4 9.74v-8.37H5.06v8.37h2.8z"/>
                  </svg>
                </div>
                <div className="contact-card-info">
                  <span className="contact-card-label">LinkedIn</span>
                  <span className="contact-card-val">linkedin.com/in/yajashkhamar</span>
                  <span className="contact-card-action">Connect on LinkedIn ↗</span>
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href={personalInfo.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-box"
                title="Open GitHub Profile"
              >
                <div className="contact-card-icon-wrap github-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#181717" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </div>
                <div className="contact-card-info">
                  <span className="contact-card-label">GitHub</span>
                  <span className="contact-card-val contact-url-val">https://github.com/yajashkhamar-python</span>
                  <span className="contact-card-action">View Profile ↗</span>
                </div>
              </a>

              {/* Location Card */}
              <div className="contact-card-box item-neutral">
                <div className="contact-card-icon-wrap location-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#004AC6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-card-info">
                  <span className="contact-card-label">Location</span>
                  <span className="contact-card-val">Ahmedabad, Gujarat, India</span>
                  <span className="contact-card-sub">Open to remote & onsite roles</span>
                </div>
              </div>
            </div>

            {/* Resume Call-To-Action (Wide balanced card) */}
            <div className="contact-cta-bar">
              <div className="cta-bar-text">
                <h3 className="cta-bar-title">Looking for my complete resume?</h3>
                <p className="cta-bar-desc">Explore my education, technical skills and projects.</p>
              </div>
              <a
                href={personalInfo.contacts.resumeUrl}
                download={personalInfo.contacts.resumeFileName}
                className="btn-primary-stitch"
                title="Download Yajash Khamar's Resume (PDF)"
              >
                <span>Download Resume</span>
                <span className="btn-arrow-icon" aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 9. Minimal Professional Footer */}
      <div className="sub-footer-base">
        <div className="container">
          <div className="sub-footer-grid">
            {/* Left side: Name + Tagline */}
            <div className="footer-col-main">
              <div className="footer-brand-line">
                <span className="footer-dot"></span>
                <span className="footer-name">Yajash Khamar</span>
              </div>
              <p className="footer-bio-summary">
                Computer Engineering student passionate about building practical web applications and exploring AI/ML. Always learning, building and improving.
              </p>
            </div>

            {/* Middle side: Navigation links */}
            <div className="footer-col-nav">
              <span className="footer-group-heading">Navigation</span>
              <a href={`${rootPrefix}#work`} className="footer-nav-link">Work</a>
              <a href={`${rootPrefix}#about`} className="footer-nav-link">About</a>
              <a href={`${rootPrefix}#skills`} className="footer-nav-link">Skills</a>
              <a href={`${rootPrefix}#education`} className="footer-nav-link">Education</a>
              <a href={`${rootPrefix}#contact`} className="footer-nav-link">Contact</a>
            </div>

            {/* Right side: Verified Social links */}
            <div className="footer-col-nav">
              <span className="footer-group-heading">Connect</span>
              <a href={personalInfo.contacts.github} target="_blank" rel="noopener noreferrer" className="footer-nav-link">GitHub ↗</a>
              <a href={personalInfo.contacts.linkedin} target="_blank" rel="noopener noreferrer" className="footer-nav-link">LinkedIn ↗</a>
              <a href={`mailto:${personalInfo.contacts.email}`} className="footer-nav-link">Email Direct ↗</a>
            </div>
          </div>

          {/* Bottom row: Current Year Copyright, Back to top */}
          <div className="footer-bottom-row">
            <span className="footer-copyright-text">
              © {currentYear} Yajash Khamar. All rights reserved.
            </span>
            <div className="footer-bottom-actions">
              <a
                href={personalInfo.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-bottom-link"
              >
                GitHub
              </a>
              <span className="footer-sep-dot">•</span>
              <a
                href={personalInfo.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-bottom-link"
              >
                LinkedIn
              </a>
              <span className="footer-sep-dot">•</span>
              <a href={`${rootPrefix}#hero`} className="footer-bottom-link back-to-top">
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
