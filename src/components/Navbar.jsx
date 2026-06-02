"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isHeroPage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 60;
      setIsScrolled(scrolled);
    };

    if (isHeroPage && !isScrolled) {
      // Init transparent on hero page
      setIsScrolled(window.scrollY > 60);
    } else if (!isHeroPage) {
      setIsScrolled(true);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHeroPage, isScrolled]);

  // Adjust scroll state whenever path changes
  useEffect(() => {
    if (isHeroPage) {
      setIsScrolled(window.scrollY > 60);
    } else {
      setIsScrolled(true);
    }
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, [pathname, isHeroPage]);

  const toggleMobileMenu = () => {
    const nextState = !isMobileMenuOpen;
    setIsMobileMenuOpen(nextState);
    document.body.style.overflow = nextState ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  const leftLinks = [
    { name: 'Journeys', path: '/journeys' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Destinations', path: '/destinations' }
  ];

  const rightLinks = [
    { name: 'Concierge', path: '/concierge' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' }
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  const getNavLinkClass = (path) => {
    return pathname === path ? 'nav-link active' : 'nav-link';
  };

  const getMobileNavLinkClass = (path) => {
    return pathname === path ? 'nav-mobile-link active' : 'nav-mobile-link';
  };

  return (
    <>
      <nav
        className={`nav ${isScrolled ? 'scrolled' : 'transparent'}`}
        id="main-nav"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="nav-inner">
          {/* Left Links */}
          <ul className="nav-links left-links" role="list">
            {leftLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.path} className={getNavLinkClass(link.path)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Centered Logo */}
          <Link href="/" className="nav-logo" aria-label="Elevated India Home" style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="/logo-light.png"
              alt="Elevated India" 
              style={{ width: 'auto', display: 'block' }}
              className="nav-logo-img"
            />
          </Link>

          {/* Right Links & Menu Button Container */}
          <div className="nav-right-container">
            <ul className="nav-links right-links" role="list">
              {rightLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className={getNavLinkClass(link.path)}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              className={`nav-burger ${isMobileMenuOpen ? 'open' : ''}`}
              id="nav-burger"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="nav-mobile"
              onClick={toggleMobileMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            {/* Dropdown Menu / Drawer */}
            <div
              className={`nav-mobile ${isMobileMenuOpen ? 'open' : ''}`}
              id="nav-mobile"
              role="dialog"
              aria-label="Navigation menu"
            >
              {allLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={getMobileNavLinkClass(link.path)}
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </Link>
              ))}

              {/* Dropdown Extra Content */}
              <div className="nav-dropdown-extra">
                <div className="nav-dropdown-divider" />
                <Link
                  href="/contact"
                  className="nav-dropdown-cta"
                  onClick={closeMobileMenu}
                >
                  Begin Your Journey
                </Link>
                <div className="nav-dropdown-contact">
                  <a href="mailto:hello@elevatedindia.com" className="nav-dropdown-email">
                    hello@elevatedindia.com
                  </a>
                  <div className="nav-dropdown-socials">
                    <a href="#" className="nav-dropdown-social-link" aria-label="Instagram">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="1" className="social-icon-dot" />
                      </svg>
                    </a>
                    <a href="#" className="nav-dropdown-social-link" aria-label="LinkedIn">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M5.5 9.5v9" />
                        <path d="M5.5 5.75v.05" />
                        <path d="M10 18.5v-9" />
                        <path d="M10 13.5c0-2.25 1.5-4 3.75-4 2.5 0 4.25 1.65 4.25 4.75v4.25" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
