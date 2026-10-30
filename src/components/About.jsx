import React from 'react';

export const About = () => {
  return (
    <section id="about" className="section-wrapper about-section-bg">
      <div className="container">

        {/* Section Eyebrow + Heading */}
        <div className="about-section-header">
          <div className="section-header-eyebrow">
            <span>02</span>
            <span className="eyebrow-sep">/</span>
            <span>About</span>
          </div>
          <h2 className="about-primary-title">About Me</h2>
        </div>

        {/* Two-column editorial layout */}
        <div className="about-two-col-editorial">

          {/* Left column: Personal narrative */}
          <div className="about-narrative-col">
            <p className="about-para-lead">
              I'm <span className="about-accent-name">Yajash Khamar</span>, a Computer Engineering student at Lok Jagruti University, Ahmedabad, with a strong interest in software development and emerging technologies.
            </p>

            <div className="about-divider-line" aria-hidden="true"></div>

            <p className="about-para-body">
              I enjoy building practical web applications, exploring how frontend and backend systems work together, and turning ideas into useful digital experiences. Through projects, I have been developing my skills in Python, JavaScript, React, Node.js, and modern web technologies.
            </p>

            <p className="about-para-body">
              I'm also interested in <span className="about-accent-phrase">Artificial Intelligence and Machine Learning</span>, and I enjoy exploring how these technologies can be used to solve real-world problems.
            </p>

            <p className="about-para-body">
              I believe in <span className="about-accent-phrase">learning by building</span>, improving through practice, and continuously expanding my technical knowledge. I'm currently focused on strengthening my development skills and gaining practical industry experience.
            </p>
          </div>

          {/* Right column: Focus areas card */}
          <div className="about-sidebar-col">
            <div className="about-focus-card">
              <div className="about-focus-card-header">
                <span className="focus-dot"></span>
                <span className="focus-label">Currently Focused On</span>
              </div>
              <ul className="about-focus-list">
                <li className="about-focus-item">
                  <span className="about-focus-icon">→</span>
                  <span>Full-Stack Web Development</span>
                </li>
                <li className="about-focus-item">
                  <span className="about-focus-icon">→</span>
                  <span>React & Node.js Ecosystem</span>
                </li>
                <li className="about-focus-item">
                  <span className="about-focus-icon">→</span>
                  <span>AI & Machine Learning Exploration</span>
                </li>
                <li className="about-focus-item">
                  <span className="about-focus-icon">→</span>
                  <span>Building Practical Projects</span>
                </li>
              </ul>

              <div className="about-meta-row">
                <div className="about-meta-item">
                  <span className="about-meta-label">Studying</span>
                  <span className="about-meta-value">Computer Engineering</span>
                </div>
                <div className="about-meta-item">
                  <span className="about-meta-label">University</span>
                  <span className="about-meta-value">Lok Jagruti University</span>
                </div>
                <div className="about-meta-item">
                  <span className="about-meta-label">Location</span>
                  <span className="about-meta-value">Ahmedabad, India</span>
                </div>
                <div className="about-meta-item">
                  <span className="about-meta-label">Graduation</span>
                  <span className="about-meta-value">Expected 2028</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
