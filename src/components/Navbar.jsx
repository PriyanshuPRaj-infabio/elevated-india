"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState('destinations');

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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.getElementById('nav-mobile');
      const burger = document.getElementById('nav-burger');
      if (isMobileMenuOpen && menu && !menu.contains(event.target) && burger && !burger.contains(event.target)) {
        closeMobileMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    const nextState = !isMobileMenuOpen;
    setIsMobileMenuOpen(nextState);
    if (nextState) {
      if (typeof window !== 'undefined' && window.innerWidth <= 768) {
        setActiveSubmenu(null);
      } else {
        setActiveSubmenu('destinations');
      }
    } else {
      setActiveSubmenu(null);
    }
    document.body.style.overflow = nextState ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
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

  const submenus = {
    journeys: {
      title: "Our Journeys",
      links: [
        { name: "All Journeys", path: "/journeys" },
        { name: "Golden Triangle with Kathmandu (12 Days)", path: "/journeys/golden-triangle-kathmandu" },
        { name: "Palace on Wheels Rail Odyssey (16 Days)", path: "/journeys/palace-on-wheels" },
        { name: "Maharajas' Express Central Passage (15 Days)", path: "/journeys/maharaja-express" },
        { name: "Temple Tour & Holy Cities (15 Days)", path: "/journeys/temple-tour" },
        { name: "Pride of India LGBTQ+ Voyage (15 Days)", path: "/journeys/lgbtq-tour" },
        { name: "Kerala Culture & Beach (13 Days)", path: "/journeys/kerala-culture-beach-13" }
      ],
      featured: {
        title: "The Ultimate Rail Odyssey",
        desc: "Traverse India in absolute opulence aboard the Maharaja Express, checking into private palace suites.",
        image: "/images/pow.jpeg"
      }
    },
    experiences: {
      title: "Bespoke Experiences",
      links: [
        { name: "All Experiences", path: "/experiences" },
        { name: "Private Taj Mahal Sunrise View", path: "/experiences" },
        { name: "Greater One-Horned Rhino Safari", path: "/experiences" },
        { name: "Sacred Ganges Evening Aarti", path: "/experiences" },
        { name: "Backwaters Private Houseboat Cruise", path: "/experiences" },
        { name: "Jaipur Block Printing Artisans", path: "/experiences" }
      ],
      featured: {
        title: "Dawn at the Taj Mahal",
        desc: "Witness the changing hues of sunset and sunrise on pristine white Makrana marble from a private viewing terrace.",
        image: "/images/taj-mahal.webp"
      }
    },
    destinations: {
      title: "Destinations",
      links: [
        { name: "All Destinations", path: "/destinations" },
        { name: "The Imperial Capital (Delhi)", path: "/destinations" },
        { name: "Royal Rajasthan (Jaipur & Udaipur)", path: "/destinations" },
        { name: "Sacred Valleys of Nepal (Kathmandu)", path: "/destinations" },
        { name: "Lush Backwaters (Kerala)", path: "/destinations" },
        { name: "Wildlife Reserves (Chitwan)", path: "/destinations" }
      ],
      featured: {
        title: "Royal Rajasthan Heritage",
        desc: "Explore the ancient fortresses, mirror palaces, and royal miniature painting guilds of Jaipur and Udaipur.",
        image: "/images/Rambagh-Palace-jaipur.jpg"
      }
    },
    concierge: {
      title: "Bespoke Concierge",
      links: [
        { name: "All Concierge Services", path: "/concierge" },
        { name: "Custom Itinerary Planning", path: "/concierge" },
        { name: "VIP Tarmac Airport Meet & Greet", path: "/concierge" },
        { name: "Private Jet & Helicopter Charters", path: "/concierge" },
        { name: "Chauffeur-Driven Luxury Fleets", path: "/concierge" },
        { name: "Contact Curator Team", path: "/contact" }
      ],
      featured: {
        title: "Elite Ground Assistance",
        desc: "Our curators handle every detail, from tarmac VIP escort to private helicopter transfers.",
        image: "/images/the-imperial-newdelhi.webp"
      }
    },
    about: {
      title: "About Us",
      links: [
        { name: "About Elevated India", path: "/about" },
        { name: "Our Philosophy", path: "/about" },
        { name: "Our Heritage Timeline", path: "/about" },
        { name: "Sustainability & Conservation", path: "/about" }
      ],
      featured: {
        title: "Quiet Luxury Travel",
        desc: "Elevated India crafts bespoke luxury passages focusing on heritage preservation, local guilds, and wildlife sanctuaries.",
        image: "/images/wildlife.jpg"
      }
    },
    journal: {
      title: "The Journal",
      links: [
        { name: "All Articles", path: "/journal" },
        { name: "Travel Insights & Curation", path: "/journal" },
        { name: "Local Culinary Perspectives", path: "/journal" }
      ],
      featured: {
        title: "Perspectives in Travel",
        desc: "Read editorial essays on regional design guilds, spiritual paths, and rare wildlife stories written by leading curators.",
        image: "/images/pokhara.jpg"
      }
    }
  };

  const getNavLinkClass = (path) => {
    return pathname === path ? 'nav-link active' : 'nav-link';
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
              src="/Elevated India Logo (1).png"
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
              {/* Left Panel: Primary Links */}
              <div className="nav-drawer-primary">
                <div className="nav-drawer-primary-links">
                  {allLinks.map((link) => {
                    const key = link.name.toLowerCase();
                    const hasSubmenu = submenus[key] !== undefined;
                    const isActive = activeSubmenu === key;
                    return (
                      <div 
                        key={link.name}
                        className={`nav-drawer-primary-item ${isActive ? 'active' : ''}`}
                        onMouseEnter={() => { if (hasSubmenu) setActiveSubmenu(key); }}
                        onClick={() => {
                          if (hasSubmenu) {
                            setActiveSubmenu(key);
                          } else {
                            closeMobileMenu();
                          }
                        }}
                      >
                        <Link 
                          href={link.path} 
                          className="nav-drawer-primary-link" 
                          onClick={(e) => {
                            if (hasSubmenu && typeof window !== 'undefined' && window.innerWidth <= 768) {
                              e.preventDefault();
                            } else {
                              closeMobileMenu();
                            }
                          }}
                        >
                          {link.name}
                        </Link>
                        {hasSubmenu && (
                          <span className="nav-drawer-chevron">
                            <svg viewBox="0 0 24 24" width="16" height="16">
                              <path fill="currentColor" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                            </svg>
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

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
                        <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18">
                          <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
                          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                          <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                        </svg>
                      </a>
                      <a href="#" className="nav-dropdown-social-link" aria-label="LinkedIn">
                        <svg viewBox="0 0 24 24" aria-hidden="true" width="18" height="18">
                          <path fill="none" stroke="currentColor" strokeWidth="2" d="M5.5 9.5v9M10 18.5v-9M10 13.5c0-2.25 1.5-4 3.75-4 2.5 0 4.25 1.65 4.25 4.75v4.25" />
                          <circle cx="5.5" cy="5.5" r="1.5" fill="currentColor" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Panel: Submenu Content */}
              <div className={`nav-drawer-secondary ${activeSubmenu ? 'active' : ''}`}>
                {/* Mobile Back Button */}
                <button 
                  className="nav-drawer-back-btn"
                  onClick={() => setActiveSubmenu(null)}
                  aria-label="Back to main menu"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                  </svg>
                  <span>Back to Menu</span>
                </button>

                {submenus[activeSubmenu] && (
                  <div className="nav-drawer-submenu">
                    <h3 className="nav-drawer-submenu-title">
                      {submenus[activeSubmenu].title}
                    </h3>
                    
                    <ul className="nav-drawer-submenu-links" role="list">
                      {submenus[activeSubmenu].links.map((subLink) => (
                        <li key={subLink.name}>
                          <Link 
                            href={subLink.path} 
                            className="nav-drawer-submenu-link"
                            onClick={closeMobileMenu}
                          >
                            {subLink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {submenus[activeSubmenu].featured && (
                      <div className="nav-drawer-featured">
                        <div className="nav-drawer-featured-image-wrapper">
                          <img 
                            src={submenus[activeSubmenu].featured.image} 
                            alt={submenus[activeSubmenu].featured.title} 
                            className="nav-drawer-featured-image"
                          />
                        </div>
                        <div className="nav-drawer-featured-content">
                          <h4 className="nav-drawer-featured-title">
                            {submenus[activeSubmenu].featured.title}
                          </h4>
                          <p className="nav-drawer-featured-desc">
                            {submenus[activeSubmenu].featured.desc}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
