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

  const navLinks = [
    { name: 'Journeys', path: '/journeys' },
    { name: 'Experiences', path: '/experiences' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Concierge', path: '/concierge' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' }
  ];

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
          <Link href="/" className="nav-logo" aria-label="Elevated India Home">
            <span className="nav-logo-name">Elevated India</span>
            <span className="nav-logo-tagline">Private Travel House</span>
          </Link>

          <ul className="nav-links" role="list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.path} className={getNavLinkClass(link.path)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/contact" className="nav-cta" id="nav-cta-btn">
            Begin Your Journey
          </Link>

          <button
            className={`nav-burger ${isMobileMenuOpen ? 'open' : ''}`}
            id="nav-burger"
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="nav-mobile"
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`nav-mobile ${isMobileMenuOpen ? 'open' : ''}`}
        id="nav-mobile"
        role="dialog"
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className={getMobileNavLinkClass(link.path)}
            onClick={closeMobileMenu}
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="/contact"
          className="nav-mobile-cta"
          onClick={closeMobileMenu}
        >
          Begin Your Journey
        </Link>
      </div>
    </>
  );
}
