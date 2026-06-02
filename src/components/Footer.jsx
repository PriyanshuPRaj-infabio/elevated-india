import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" id="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'inline-block', marginBottom: '24px' }}>
              <img
                src="/logo-dark.png"
                alt="Elevated India"
                style={{ height: '54px', width: 'auto', display: 'block' }}
              />
            </Link>
            <p className="footer-brand-desc">
              A curator of India's rarest luxury experiences for discerning
              global travellers. Every journey is bespoke, discreet, and deeply
              meaningful.
            </p>
            <div className="footer-social" aria-label="Social media links">
              <a href="#" className="footer-social-link" aria-label="Instagram">
                Ig
              </a>
              <a href="#" className="footer-social-link" aria-label="LinkedIn">
                in
              </a>
            </div>
          </div>

          {/* Journeys */}
          <div>
            <p className="footer-col-title">Journeys</p>
            <ul className="footer-col-links">
              <li>
                <Link href="/journeys" className="footer-col-link">
                  All Journeys
                </Link>
              </li>
              <li>
                <Link href="/journeys" className="footer-col-link">
                  Maharaja Circuit
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <p className="footer-col-title">Explore</p>
            <ul className="footer-col-links">
              <li>
                <Link href="/experiences" className="footer-col-link">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="footer-col-link">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/concierge" className="footer-col-link">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="footer-col-title">Contact</p>
            <ul className="footer-col-links">
              <li>
                <Link href="/contact" className="footer-col-link">
                  Begin Your Journey
                </Link>
              </li>
              <li>
                <a href="mailto:hello@elevatedindia.com" className="footer-col-link">
                  hello@elevatedindia.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Elevated India. All rights reserved.
          </p>

          {/* POWERED BY */}
          <div className="site-credits">
            <a
              href="https://fabulousmedia.in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="FabulousMedia"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <img
                src="/fabulous-logo.png"
                alt="FabulousMedia"
                className="site-credits-logo"
              />
            </a>
            <span className="site-credits-sep" />
            <a
              href="https://gocommercially.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GoCommercially"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <img
                src="/go_tm logo white.png"
                alt="GoCommercially"
                className="site-credits-logo"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
