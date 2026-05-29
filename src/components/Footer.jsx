import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" id="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <div>
            <p className="footer-brand-name">Elevated India</p>
            <span className="footer-brand-tag">Private Travel House</span>
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
        <div className="footer-bottom flex justify-between items-end w-full">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Elevated India. All rights reserved.
          </p>

          <div className="flex flex-col items-end gap-4">
            {/* POWERED BY */}
            <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 transition-colors hover:bg-white/10 shrink-0">
              <a
                href="https://fabulousmedia.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center opacity-90 hover:opacity-100 transition-opacity"
                aria-label="FabulousMedia"
              >
                <img
                  src="/fabulous-logo.png"
                  alt="FabulousMedia"
                  style={{ height: '14px', width: 'auto', display: 'block' }}
                />
              </a>
              <span style={{ width: '1px', height: '14px', backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
              <a
                href="https://gocommercially.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center opacity-90 hover:opacity-100 transition-opacity"
                aria-label="GoCommercially"
              >
                <img
                  src="/go_tm logo white.png"
                  alt="GoCommercially"
                  style={{ height: '14px', width: 'auto', display: 'block' }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
