import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo variant="default" size="medium" />
            <p className="footer-tagline">
              GITAM Aerospace Research Initiative
            </p>
            <p className="footer-description">
              Building the future of aerospace innovation through student-driven research and engineering excellence.
            </p>
            
            {/* Social Media Links */}
            <div className="footer-social">
              <a href="mailto:gari.team@gmail.com" className="social-link" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
              <a href="https://instagram.com/gari.team" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links-section">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/mission">Mission</Link></li>
                <li><Link to="/achievements">Achievements</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Projects</h4>
              <ul>
                <li><Link to="/cansat">CanSat Mission</Link></li>
                <li><Link to="/team">Our Team</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/sponsors">Sponsors</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Newsletter</h4>
              <p className="newsletter-text">Stay updated with our latest projects</p>
              <div className="newsletter-form">
                <input type="email" placeholder="Your email" className="newsletter-input" />
                <button className="newsletter-button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 GARI. All rights reserved.
          </p>
          <p className="footer-location">
            GITAM University, Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
