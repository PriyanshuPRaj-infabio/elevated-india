"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import JourneyMap from "@/components/JourneyMap";
import { JOURNEYS, LOCATIONS } from "@/data/journeysData";
import "@/styles/safari.css";

export default function JourneyDetailPage() {
  const params = useParams();
  const id = params?.id;
  const journey = JOURNEYS[id];

  if (!journey) {
    notFound();
  }

  const [activeDay, setActiveDay] = useState(0);
  const [accordionOpen, setAccordionOpen] = useState({});
  const [galleryIndexes, setGalleryIndexes] = useState({});
  const [stickyVisible, setStickyVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("itinerary-expedition");

  const cardsRef = useRef([]);
  const containerRef = useRef(null);
  const timelineProgressRef = useRef(null);
  const canvasRef = useRef(null);

  // Initialize gallery indexes & accordion state for the days
  useEffect(() => {
    const initialGalleries = {};
    const initialAccordions = {};
    journey.itinerary.forEach((_, idx) => {
      initialGalleries[idx] = 0;
      initialAccordions[idx] = false;
    });
    setGalleryIndexes(initialGalleries);
    setAccordionOpen(initialAccordions);
  }, [journey]);

  // Scroll listener for sticky sub-nav, active anchor highlight, and hiding main header nav
  useEffect(() => {
    const handleScroll = () => {
      const itineraryEl = document.getElementById("itinerary-expedition");
      if (itineraryEl) {
        const rect = itineraryEl.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 72;
        setStickyVisible(isVisible);
      }

      // Hide main navbar and shift sticky sub-nav when reaching itinerary section
      const statsEl = document.getElementById("journey-stats");
      if (statsEl) {
        const statsRect = statsEl.getBoundingClientRect();
        if (statsRect.bottom <= 80) {
          document.body.classList.add("main-nav-hidden");
        } else {
          document.body.classList.remove("main-nav-hidden");
        }
      }

      const sections = ["itinerary-expedition", "luxury-lodges"];
      const scrollPos = window.scrollY + 220; // Scroll position offset for anchors

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove("main-nav-hidden");
    };
  }, []);

  // Initialize GSAP ScrollTriggers
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      ScrollTrigger.create({
        trigger: card,
        start: "top 45%",
        end: "bottom 45%",
        onToggle: (self) => {
          if (self.isActive) {
            setActiveDay(index);
          }
        }
      });

      // Entry animations for cards
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true
          }
        }
      );
    });

    // Vertical Timeline Line Fill Animation
    if (timelineProgressRef.current) {
      ScrollTrigger.create({
        trigger: ".safari-content-panel",
        start: "top 30%",
        end: "bottom 70%",
        scrub: true,
        onUpdate: (self) => {
          if (timelineProgressRef.current) {
            timelineProgressRef.current.style.height = `${self.progress * 100}%`;
          }
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [journey]);

  // Ambient gold dust particles canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = 45;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.3 - 0.15;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = "rgba(184, 150, 74, " + this.opacity + ")";
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > width) this.x = Math.random() * width;
        if (this.y < 0 || this.y > height) this.y = Math.random() * height;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#B8964A";
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.shadowBlur = 0;
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleAccordion = (index) => {
    setAccordionOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const nextImage = (dayIdx, imagesLength) => {
    setGalleryIndexes((prev) => ({
      ...prev,
      [dayIdx]: (prev[dayIdx] + 1) % imagesLength
    }));
  };

  const prevImage = (dayIdx, imagesLength) => {
    setGalleryIndexes((prev) => ({
      ...prev,
      [dayIdx]: (prev[dayIdx] - 1 + imagesLength) % imagesLength
    }));
  };

  return (
    <main className="safari-atmosphere min-h-screen" ref={containerRef}>
      {/* Background atmosphere canvas */}
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}
      />
      <div className="safari-noise-overlay" />
      <div className="safari-shadow-overlay" />

      {/* Hero Header */}
      <header className="page-hero">
        <img
          src={journey.heroImage}
          alt={journey.title}
          className="page-hero-image"
        />
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content container">
          <span className="page-hero-label">Bespoke Journey</span>
          <h1 className="page-hero-title">{journey.title}</h1>
          <p className="page-hero-sub">{journey.subtitle}</p>
        </div>
      </header>

      {/* Journey Overview Stats */}
      <section id="journey-stats" className="section" style={{ padding: "var(--space-12) 0", borderBottom: "1px solid rgba(184, 150, 74, 0.15)" }}>
        <div className="container">
          <div className="safari-stats-grid">
            <div className="safari-stat-card">
              <span className="safari-stat-label">Duration</span>
              <p className="safari-stat-value">{journey.duration}</p>
            </div>
            <div className="safari-stat-card">
              <span className="safari-stat-label">Regions Visited</span>
              <p className="safari-stat-value">{journey.regionsVisited}</p>
            </div>
            <div className="safari-stat-card">
              <span className="safari-stat-label">Accommodations</span>
              <p className="safari-stat-value">{journey.accommodations}</p>
            </div>
            <div className="safari-stat-card">
              <span className="safari-stat-label">Transfer</span>
              <p className="safari-stat-value">{journey.transfer}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Sub-Navigation */}
      <nav className="safari-sub-nav">
        <div className="safari-sub-nav-container">
          <a
            href="#itinerary-expedition"
            className={`safari-sub-nav-link ${activeSection === "itinerary-expedition" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("itinerary-expedition")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Itinerary
          </a>
          <a
            href="#luxury-lodges"
            className={`safari-sub-nav-link ${activeSection === "luxury-lodges" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("luxury-lodges")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Accommodations
          </a>
        </div>
      </nav>

      {/* Horizontal Itinerary Timeline */}
      <div className="safari-horizontal-timeline-wrapper">
        <div
          className="safari-horizontal-timeline"
          style={{ minWidth: `${Math.max(1100, journey.itinerary.length * 120)}px` }}
        >
          <div className="safari-horizontal-timeline-line"></div>
          <div
            className="safari-horizontal-timeline-progress"
            style={{ width: `${(activeDay / (journey.itinerary.length - 1)) * 100}%` }}
          ></div>

          {journey.itinerary.map((item, index) => {
            const isActive = activeDay >= index;
            const isCurrent = activeDay === index;
            return (
              <a
                key={item.day}
                href={`#day-${index}`}
                className={`safari-timeline-node ${isCurrent ? "current" : ""} ${isActive ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  const targetCard = cardsRef.current[index];
                  if (targetCard) {
                    const yOffset = -180;
                    const y = targetCard.getBoundingClientRect().top + window.scrollY + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
              >
                <div className="timeline-node-location">{item.location}</div>
                <div className="timeline-node-dot"></div>
                <div className="timeline-node-day">DAY {item.day}</div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Core Split-Pane Itinerary */}
      <section className="section" id="itinerary-expedition" aria-label="Day-by-Day Journey Itinerary">
        <div className="safari-container">
          {/* Left Column: Sticky Map Panel */}
          <div className="safari-map-panel">
            <JourneyMap
              activeDay={activeDay}
              destinations={journey.itinerary}
              locations={LOCATIONS}
              markerKeys={journey.markerKeys}
              routeCoords={journey.routeCoords}
            />
          </div>

          {/* Right Column: Cards Panel */}
          <div className="safari-content-panel">
            {/* Timeline Axis Line */}
            <div className="safari-timeline-axis" />
            <div className="safari-timeline-progress" ref={timelineProgressRef} />

            {/* Iterating Day Cards */}
            {journey.itinerary.map((item, index) => {
              const isCardInactive = index !== activeDay;
              const currentImageIdx = galleryIndexes[index] || 0;
              const currentImage = item.images[currentImageIdx] || item.images[0];
              const isAccOpen = accordionOpen[index];

              return (
                <article
                  key={item.day}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className={`safari-day-card ${isCardInactive ? "inactive" : ""}`}
                >
                  {/* Timeline Node Connector Dot */}
                  <div className="safari-day-dot" />

                  {/* Day Header */}
                  <header>
                    <div className="safari-location-tag">📍 {item.location}</div>
                    <h2 className="safari-day-title">Day {item.day} | {item.meta}</h2>
                  </header>

                  {/* Split Layout Body */}
                  <div className="safari-day-body-wrapper">
                    {/* Left text column */}
                    <div className="safari-day-text-col">
                      <p className="safari-day-narrative">{item.narrative}</p>

                      {/* Inline mini-map for mobile viewport */}
                      <div className="safari-mini-map">
                        <JourneyMap
                          activeDay={index}
                          destinations={journey.itinerary}
                          locations={LOCATIONS}
                          markerKeys={journey.markerKeys}
                          routeCoords={journey.routeCoords}
                          isMini={true}
                        />
                      </div>

                      <div className="safari-details-grid">
                        <div className="safari-detail-item">
                          <span className="safari-detail-label">Lodging</span>
                          <span className="safari-detail-value">{item.details.accommodation}</span>
                        </div>
                        <div className="safari-detail-item">
                          <span className="safari-detail-label">Meals Included</span>
                          <span className="safari-detail-value">{item.details.dining}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right image column */}
                    <div className="safari-day-image-col">
                      <div className="safari-gallery">
                        {currentImage && (
                          <>
                            <img
                              src={currentImage.url}
                              alt={currentImage.caption || item.title}
                              className="safari-gallery-img"
                            />
                            {currentImage.caption && (
                              <div className="safari-gallery-caption">
                                {currentImage.caption}
                              </div>
                            )}
                          </>
                        )}
                        {/* Gallery arrows */}
                        {item.images.length > 1 && (
                          <div className="safari-gallery-nav">
                            <button
                              onClick={() => prevImage(index, item.images.length)}
                              className="safari-gallery-btn"
                              aria-label="Previous image"
                            >
                              ‹
                            </button>
                            <button
                              onClick={() => nextImage(index, item.images.length)}
                              className="safari-gallery-btn"
                              aria-label="Next image"
                            >
                              ›
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expandable Accordion for curator notes & highlights */}
                  <div style={{ marginTop: "var(--space-6)", borderTop: "1px dashed rgba(184, 150, 74, 0.15)", paddingTop: "var(--space-4)" }}>
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="safari-accordion-trigger"
                      aria-expanded={isAccOpen}
                    >
                      <span>Curator Journal &amp; Notes</span>
                      <span>{isAccOpen ? "−" : "+"}</span>
                    </button>
                    <div className={`safari-accordion-content ${isAccOpen ? "open" : ""}`}>
                      {/* Expert Advisory Note */}
                      <div className="safari-expert-note">
                        <h4 className="safari-expert-header">Travel Curator Advisory</h4>
                        <p className="safari-expert-body">"{item.expertNote}"</p>
                      </div>

                      {/* Daily Highlights Checklists */}
                      {item.highlights && item.highlights.length > 0 && (
                        <div style={{ marginTop: "var(--space-4)" }}>
                          <span className="safari-checklist-label">Daily Highlights</span>
                          <div className="safari-wildlife-container">
                            {item.highlights.map((highlight) => (
                              <span key={highlight} className="safari-wildlife-tag">
                                ✨ {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accommodations Showcase Grid */}
      {journey.accommodationsList && journey.accommodationsList.length > 0 && (
        <section className="section section-stone" id="luxury-lodges">
          <div className="container">
            <header className="section-header">
              <span className="t-section-label">Sanctuaries of Rest</span>
              <h2 className="t-headline">Elite Accommodations</h2>
              <span className="gold-line" />
              <p className="t-body">
                We select working palaces, boutique sanctuaries, and historic lodges built around architectural integration, heritage preservation, and absolute luxury.
              </p>
            </header>

            <div className="grid-3 gap-8">
              {journey.accommodationsList.map((lodge, index) => (
                <article key={index} className="safari-lodge-card">
                  <img
                    src={lodge.image}
                    alt={lodge.title}
                    className="safari-lodge-img"
                  />
                  <div className="safari-lodge-content">
                    <h3 className="safari-lodge-title">{lodge.title}</h3>
                    <p className="safari-lodge-desc">{lodge.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="cta-section" id="journey-cta">
        <div className="cta-bg">
          <img
            src={journey.ctaBgImage}
            alt="Private luxury transport background"
            className="cta-bg-image"
            loading="lazy"
          />
        </div>
        <div className="cta-overlay" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.9), rgba(10,10,10,0.4))" }}></div>
        <div className="cta-content container">
          <span className="cta-label">Begin Your Journey</span>
          <h2 className="cta-title">Craft Your Private Passage</h2>
          <p className="cta-body">
            Every itinerary is individually tailored around your preferred pace, travel dates, and chosen level of accommodation exclusivity. Connect with a specialist to begin your journey.
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn btn-gold btn-arrow" id="cta-plan-journey">
              Plan My Journey
            </Link>
            <Link href="/contact" className="btn btn-outline-ivory" id="cta-speak-curator">
              Speak With A Travel Curator
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Booking Footer Panel */}
      <div className={`safari-sticky-bar ${stickyVisible ? "visible" : ""}`}>
        <div className="safari-sticky-info">
          <span className="safari-sticky-duration">
            📅 {journey.duration} Private Journey
          </span>
          <span className="safari-sticky-price">
            {journey.regionsVisited}
          </span>
        </div>
        <div>
          <Link href="/contact" className="btn btn-gold" style={{ padding: "10px 24px", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Speak to a Specialist ➔
          </Link>
        </div>
      </div>
    </main>
  );
}
