import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'work', 'about', 'skills', 'education', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  // Determine if currently viewing a project detail page
  const isDetailPage = typeof window !== 'undefined' && window.location.pathname.startsWith('/projects/');
  const rootPrefix = isDetailPage ? '/' : '';

  return (
    <header className={`stitch-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Left Side: Subtle blue dot, YK Monogram, Full Name */}
        <div className="header-brand-group">
          <a href={`${rootPrefix}#hero`} className="brand-anchor" aria-label={`${personalInfo.fullName} Home`}>
            <span className="brand-dot-pulse"></span>
            <span className="brand-monogram">{personalInfo.initials}</span>
            <span className="brand-full-name">{personalInfo.fullName}</span>
          </a>
        </div>

        {/* Right Side: Desktop Nav Items + Let's Talk Button */}
        <div className="header-nav-group">
          <nav className="desktop-navigation" aria-label="Main Navigation">
            <a
              href={`${rootPrefix}#work`}
              className={`nav-link ${activeSection === 'work' ? 'is-active' : ''}`}
            >
              Work
            </a>
            <a
              href={`${rootPrefix}#about`}
              className={`nav-link ${activeSection === 'about' ? 'is-active' : ''}`}
            >
              About
            </a>
            <a
              href={`${rootPrefix}#skills`}
              className={`nav-link ${activeSection === 'skills' ? 'is-active' : ''}`}
            >
              Skills
            </a>
            <a
              href={`${rootPrefix}#education`}
              className={`nav-link ${activeSection === 'education' ? 'is-active' : ''}`}
            >
              Education
            </a>
            <a
              href={`${rootPrefix}#contact`}
              className={`nav-link ${activeSection === 'contact' ? 'is-active' : ''}`}
            >
              Contact
            </a>
          </nav>

          <div className="header-action-cluster">
            <a
              href={`${rootPrefix}#contact`}
              className="btn-talk-header"
              title="Let's Talk"
            >
              <span>Let’s Talk</span>
              <span className="nav-arrow">↗</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              className="mobile-menu-trigger"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-panel"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Dropdown Menu */}
      <div
        id="mobile-nav-panel"
        className={`mobile-menu-drawer ${mobileMenuOpen ? 'is-visible' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="container mobile-menu-inner">
          <nav className="mobile-nav-stack">
            <a href={`${rootPrefix}#work`} className="mobile-link" onClick={closeMenu}>
              <span className="mobile-link-num">01</span>
              <span>Work</span>
            </a>
            <a href={`${rootPrefix}#about`} className="mobile-link" onClick={closeMenu}>
              <span className="mobile-link-num">02</span>
              <span>About</span>
            </a>
            <a href={`${rootPrefix}#skills`} className="mobile-link" onClick={closeMenu}>
              <span className="mobile-link-num">03</span>
              <span>Skills</span>
            </a>
            <a href={`${rootPrefix}#education`} className="mobile-link" onClick={closeMenu}>
              <span className="mobile-link-num">04</span>
              <span>Education</span>
            </a>
            <a href={`${rootPrefix}#contact`} className="mobile-link" onClick={closeMenu}>
              <span className="mobile-link-num">05</span>
              <span>Contact</span>
            </a>
          </nav>

          <div className="mobile-menu-footer">
            <span className="mobile-footer-text">Yajash Khamar • Ahmedabad, IN</span>
          </div>
        </div>
      </div>
    </header>
  );
};
