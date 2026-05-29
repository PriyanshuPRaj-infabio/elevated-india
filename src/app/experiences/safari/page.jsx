"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SafariMap from "@/components/SafariMap";
import "@/styles/safari.css";

// Itinerary Dataset
const itineraryData = [
  {
    day: 1,
    location: "Pench National Park",
    meta: "Arrival & Deep Transfer",
    title: "Into The Heart Of Pench",
    narrative: "Your expedition commences at Nagpur Airport where you are welcomed by a private transfer manager. A scenic 2.5-hour drive delivers you to the borders of Pench National Park — the deciduous forest that inspired Kipling's Jungle Book. Transition into the quiet cadence of the forest as you check into your private luxury camp.",
    details: {
      accommodation: "Jamtara Wilderness Camp (Luxury Tent Suite)",
      experiences: "Private welcome orientation, atmospheric twilight safari briefing",
      dining: "Bespoke fireside dining under dry canopy trees",
      transport: "Private air-conditioned SUV transfer"
    },
    images: [
      { url: "/images/pench-nation-park.jpg", caption: "Bespoke SUV transfer into Pench boundary" },
      { url: "/images/pench-national-park-1.webp"}
    ],
    expertNote: "Pench is a beautiful open forest dominated by teak trees. The open landscape offers excellent visibility, making it the perfect introduction to tracking wild game.",
    wildlife: ["Spotted Deer", "Nilgai", "Indian Jackal", "Langur"]
  },
  {
    day: 2,
    location: "Pench Tiger Reserve",
    meta: "Tiger Tracking",
    title: "The Sunrise Patrol",
    narrative: "An early awakening to the sounds of the jungle. Embark on a custom 4x4 open safari vehicle with your dedicated naturalist. Track the forest's apex predator using alarm calls of monkeys and deer. Observe the sunrise filtering through the mist of the Pench river basin as you stop for an elegant picnic breakfast in the heart of the reserve.",
    details: {
      accommodation: "Jamtara Wilderness Camp",
      experiences: "Dawn game drive, customized pugmark tracking session",
      dining: "Jungle breakfast, colonial-style lunch, and high tea in the wild",
      transport: "Open private 4x4 safari vehicle"
    },
    images: [
      { url: "/images/tiger_safari_1776272603448.png", caption: "A Bengal Tiger patrols the early morning teak forest" },
      { url: "/images/pench-river.webp", caption: "Sunset viewing at the Pench river boundary" }
    ],
    expertNote: "Tiger tracking is an exercise in listening. The jungle warns itself when a predator moves. Listen for the sharp, barking alarm calls of the Langur monkey or the sambar deer.",
    wildlife: ["Bengal Tiger", "Leopard", "Dhole (Wild Dog)", "Indian Pitta"]
  },
  {
    day: 3,
    location: "Kanha Tiger Reserve",
    meta: "Jungle Curation",
    title: "Walking Safaris & Conservation",
    narrative: "Immerse your senses in the forest on a guided walking safari. Accompanied by local forest guards, walk where vehicles cannot enter. Read tracks in the dust, smell the wild herbs, and learn about the local communities protecting this ecosystem. In the afternoon, transfer to Kanha National Park and settle into a boutique lodge constructed from local timber.",
    details: {
      accommodation: "Kanha Earth Lodge (Jungle Bungalow)",
      experiences: "Guided walking safari, private interaction with anti-poaching patrol",
      dining: "Farm-to-table organic lunch, regional tribal dinner",
      transport: "Private inter-reserve SUV transfer"
    },
    images: [
      { url: "/images/kanha-tiger-reserve.jpg", caption: "Rustic wood paneling interior at Kanha Earth Lodge" },
      { url: "/images/kanha-national-park-1.jpg", caption: "Lush green sal forest pathways of Kanha National Park" }
    ],
    expertNote: "Kanha is renowned for its lush sal tree meadows and tall grasslands. It was here that conservationists saved the hardground Barasingha deer from extinction.",
    wildlife: ["Hardground Barasingha", "Sloth Bear", "Gaur (Indian Bison)", "Wild Boar"]
  },
  {
    day: 4,
    location: "Bandhavgarh National Park",
    meta: "Expedition Highlight",
    title: "The Starry Wilderness Camp",
    narrative: "Drive deep into Bandhavgarh National Park, entering an ancient landscape of rocky cliffs and historic fort ruins. Set up camp in a private safari clearing. As night falls, indulge in a custom dinner prepared by a personal chef. Sleep under an ocean of stars in a luxury canvas fly camp, surrounded by the ambient calls of night birds and owls.",
    details: {
      accommodation: "Private Luxury Canvas Fly Camp",
      experiences: "Wilderness astronomy session, fireside storyteller circle",
      dining: "Multi-course open-air charcoal grill dinner",
      transport: "Private safari vehicle"
    },
    images: [
      { url: "/images/25-bandhavgarhnationalpark1.jpg"},
      { url: "/images/private-dining-bg.jpg", caption: "Private dining table prepared in a wilderness clearing" }
    ],
    expertNote: "Bandhavgarh has the highest density of Royal Bengal Tigers in India. Spend the twilight hours observing waterholes from our custom tree towers.",
    wildlife: ["Bengal Tiger", "Indian Gaur", "Sambar Deer", "Jungle Cat"]
  },
  {
    day: 5,
    location: "Nagpur / Departure",
    meta: "Farewell & Return",
    title: "Departure Over The Canopy",
    narrative: "Awake to a peaceful forest breakfast. Bid farewell to the naturalists and staff. Board a private helicopter charter directly from the park boundaries, sweeping over the lush green forest canopy back to Nagpur Airport, connecting smoothly with your international outbound journey.",
    details: {
      accommodation: "Transit Lounge Access",
      experiences: "Canopy aerial view flight, journey photo album presentation",
      dining: "Champagne farewell breakfast in the lodge gardens",
      transport: "Private helicopter charter (Nagpur Airport return)"
    },
    images: [
      { url: "/images/NAG.jpeg"},
      { url: "/images/goa_heritage_1776272683299.png", caption: "Nagpur executive VIP lounge transit suite" }
    ],
    expertNote: "Flying over the Satpura hill range offers a spectacular understanding of how these tiger reserves are linked by crucial green wildlife corridors.",
    wildlife: ["Peacock", "Crested Serpent Eagle", "Flying Squirrel", "Langur"]
  }
];

export default function SafariPage() {
  const [activeDay, setActiveDay] = useState(0);
  const [accordionOpen, setAccordionOpen] = useState({ 0: false, 1: false, 2: false, 3: false, 4: false });
  const [galleryIndexes, setGalleryIndexes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 });
  const [stickyVisible, setStickyVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("itinerary-expedition");

  const cardsRef = useRef([]);
  const containerRef = useRef(null);
  const timelineProgressRef = useRef(null);
  const canvasRef = useRef(null);

  // Scroll listener for sticky bottom bar, active sub-navigation anchors, and hiding main navbar
  useEffect(() => {
    const handleScroll = () => {
      const itineraryEl = document.getElementById("itinerary-expedition");
      if (itineraryEl) {
        const rect = itineraryEl.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 72;
        setStickyVisible(isVisible);
      }

      // Hide main navbar and shift sticky sub-nav when reaching itinerary section
      const statsEl = document.getElementById("safari-stats");
      if (statsEl) {
        const statsRect = statsEl.getBoundingClientRect();
        if (statsRect.bottom <= 80) {
          document.body.classList.add("main-nav-hidden");
        } else {
          document.body.classList.remove("main-nav-hidden");
        }
      }

      const sections = ["itinerary-expedition", "luxury-lodges", "fauna-encounters", "expedition-guides"];
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
    // Trigger once initially
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove("main-nav-hidden");
    };
  }, []);

  // Initialize GSAP ScrollTriggers
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Setup active day trigger checkpoints
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
      gsap.fromTo(card,
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
  }, []);

  // Ambient Jungle Dust Particle Canvas Animation
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
        this.color = "rgba(184, 150, 74, " + this.opacity + ")"; // Gold dust
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Reset particles if they move out of bounds
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

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.shadowBlur = 0; // reset
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
      {/* Background Atmosphere Layers */}
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}
      />
      <div className="safari-noise-overlay" />
      <div className="safari-shadow-overlay" />

      {/* Hero Header */}
<header className="page-hero">
  <video
    src="/videos/tiger.mp4" 
    poster="/images/tiger_safari_1776272603448.png"
    className="page-hero-image"
    autoPlay
    loop
    muted
    playsInline
  />
  <div className="page-hero-overlay"></div>
  <div className="page-hero-content container">
    <span className="page-hero-label">
      Bespoke Expedition
    </span>
    <h1 className="page-hero-title">
      Wilderness &amp; Private Safaris
    </h1>
    <p className="page-hero-sub">
      A narrative passage through Central India's legendary national parks.
    </p>
  </div>
</header>


      {/* Journey Overview Stats */}
      <section id="safari-stats" className="section" style={{ padding: "var(--space-12) 0", borderBottom: "1px solid rgba(184, 150, 74, 0.15)" }}>
        <div className="container">
          <div className="safari-stats-grid">
            <div className="safari-stat-card">
              <span className="safari-stat-label">Duration</span>
              <p className="safari-stat-value">5 Days / 4 Nights</p>
            </div>
            <div className="safari-stat-card">
              <span className="safari-stat-label">Parks Visited</span>
              <p className="safari-stat-value">Pench, Kanha, Bandhavgarh</p>
            </div>
            <div className="safari-stat-card">
              <span className="safari-stat-label">Accommodations</span>
              <p className="safari-stat-value">Aman-Style Luxury Camps</p>
            </div>
            <div className="safari-stat-card">
              <span className="safari-stat-label">Transfer</span>
              <p className="safari-stat-value">Private Heli &amp; SUV</p>
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
            Sanctuaries
          </a>
          <a
            href="#fauna-encounters"
            className={`safari-sub-nav-link ${activeSection === "fauna-encounters" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("fauna-encounters")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Wildlife
          </a>
        </div>
      </nav>

      {/* Horizontal Itinerary Timeline (A&K Style) */}
      <div className="safari-horizontal-timeline-wrapper">
        <div className="safari-horizontal-timeline">
          <div className="safari-horizontal-timeline-line"></div>
          <div 
            className="safari-horizontal-timeline-progress" 
            style={{ width: `${(activeDay / (itineraryData.length - 1)) * 100}%` }}
          ></div>
          
          {itineraryData.map((item, index) => {
            const isActive = activeDay >= index;
            const isCurrent = activeDay === index;
            const locName = item.location.split(',')[0].replace("National Park", "NP").replace("Tiger Reserve", "TR");
            return (
              <a 
                key={item.day} 
                href={`#day-${index}`}
                className={`safari-timeline-node ${isCurrent ? 'current' : ''} ${isActive ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  const targetCard = cardsRef.current[index];
                  if (targetCard) {
                     const yOffset = -180; 
                     const y = targetCard.getBoundingClientRect().top + window.scrollY + yOffset;
                     window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
              >
                <div className="timeline-node-location">{locName}</div>
                <div className="timeline-node-dot"></div>
                <div className="timeline-node-day">DAY {item.day}</div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Core Split-Pane Itinerary */}
      <section className="section" id="itinerary-expedition" aria-label="Day-by-Day Expedition Itinerary">
        <div className="safari-container">
          
          {/* Left Column: Sticky Map Panel */}
          <div className="safari-map-panel">
            <SafariMap activeDay={activeDay} />
          </div>

          {/* Right Column: Cards Panel */}
          <div className="safari-content-panel">
            {/* Timeline Bars */}
            <div className="safari-timeline-axis" />
            <div className="safari-timeline-progress" ref={timelineProgressRef} />

            {/* Iterating Day Cards */}
            {itineraryData.map((item, index) => {
              const isCardInactive = index !== activeDay;
              const currentImageIdx = galleryIndexes[index];
              const currentImage = item.images[currentImageIdx];
              const isAccOpen = accordionOpen[index];

              return (
                <article
                  key={item.day}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className={`safari-day-card ${isCardInactive ? "inactive" : ""}`}
                >
                  {/* Timeline Node Connector */}
                  <div className="safari-day-dot" />

                  {/* Day Number & Location Header */}
                  <header>
                    <div className="safari-location-tag">📍 {item.location}</div>
                    <h2 className="safari-day-title">Day {item.day} | {item.meta}</h2>
                  </header>

                  {/* Asymmetric Dual Column Day Layout */}
                  <div className="safari-day-body-wrapper">
                    {/* Left Column: Narrative & Detailed Specs */}
                    <div className="safari-day-text-col">
                      <p className="safari-day-narrative">{item.narrative}</p>

                      {/* Inline Mini Map for Mobile Only */}
                      <div className="safari-mini-map">
                        <SafariMap activeDay={index} isMini={true} />
                      </div>

                      <div className="safari-details-grid">
                        <div className="safari-detail-item">
                          <span className="safari-detail-label">Lodging</span>
                          <a href="#luxury-lodges" className="safari-detail-value-link">
                            🏡 {item.details.accommodation} ➔
                          </a>
                        </div>
                        <div className="safari-detail-item">
                          <span className="safari-detail-label">Meals Included</span>
                          <span className="safari-detail-value-meals">
                            🍳 {index === 0 ? "Dinner" : "Breakfast, Lunch, Dinner"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Custom Image Gallery Slider */}
                    <div className="safari-day-image-col">
                      <div className="safari-gallery">
                        <img
                          src={currentImage.url}
                          alt={currentImage.caption}
                          className="safari-gallery-img"
                        />
                        <div className="safari-gallery-caption">
                          {currentImage.caption}
                        </div>
                        {/* Navigation buttons */}
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

                  {/* Expandable Accordion for Naturalist Notes */}
                  <div style={{ marginTop: "var(--space-6)", borderTop: "1px dashed rgba(184, 150, 74, 0.15)", paddingTop: "var(--space-4)" }}>
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="safari-accordion-trigger"
                      aria-expanded={isAccOpen}
                    >
                      <span>Expedition Log &amp; Guide Notes</span>
                      <span>{isAccOpen ? "−" : "+"}</span>
                    </button>
                    <div className={`safari-accordion-content ${isAccOpen ? "open" : ""}`}>
                      {/* Expert Guide Note */}
                      <div className="safari-expert-note">
                        <h4 className="safari-expert-header">Naturalist Advisory</h4>
                        <p className="safari-expert-body">"{item.expertNote}"</p>
                      </div>
                      
                      {/* Species Spotter Checklist */}
                      <div style={{ marginTop: "var(--space-4)" }}>
                        <span className="safari-checklist-label">Species Active Checklist</span>
                        <div className="safari-wildlife-container">
                          {item.wildlife.map((animal) => (
                            <span key={animal} className="safari-wildlife-tag">
                              🐾 {animal}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Camps & Lodges Showcase Grid */}
      <section className="section section-stone" id="luxury-lodges">
        <div className="container">
          <header className="section-header">
            <span className="t-section-label">Sanctuaries of Rest</span>
            <h2 className="t-headline">Elite Safari Enclaves</h2>
            <span className="gold-line" />
            <p className="t-body">
              We select working reserve lodges designed around architectural integration, low-impact footprint, and absolute luxury.
            </p>
          </header>

          <div className="grid-3 gap-8">
            <article className="safari-lodge-card">
              <img
                src="/images/Jamtara Wilderness Camp.jpg"
                alt="Jamtara Wilderness Camp"
                className="safari-lodge-img"
              />
              <div className="safari-lodge-content">
                <h3 className="safari-lodge-title">Jamtara Wilderness Camp</h3>
                <p className="safari-lodge-desc">
                  An intimate ten-tent outpost located near the quiet village of Jamtara. Experience colonial elegance combined with direct rustic park access.
                </p>
              </div>
            </article>

            <article className="safari-lodge-card">
              <img
                src="/images/Kanha Earth Lodge.jpg"
                alt="Kanha Earth Lodge"
                className="safari-lodge-img"
              />
              <div className="safari-lodge-content">
                <h3 className="safari-lodge-title">Kanha Earth Lodge</h3>
                <p className="safari-lodge-desc">
                  Spread over 16 acres of private forest boundary. Constructed entirely from local stone, waste wood, and terracotta tiles.
                </p>
              </div>
            </article>

            <article className="safari-lodge-card">
              <img
                src="/images/desert_camp_night_1776272499120.png"
                alt="Luxury Canvas Fly Camp"
                className="safari-lodge-img"
              />
              <div className="safari-lodge-content">
                <h3 className="safari-lodge-title">Bespoke Fly Camp</h3>
                <p className="safari-lodge-desc">
                  Mobile, transient, luxury canvas suites pitched under forest clearances. Designed specifically for stargazing and listening to the calls of predators.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Wildlife Encounters Grid */}
      <section className="section" id="fauna-encounters">
        <div className="container">
          <header className="section-header">
            <span className="t-section-label">Fauna of the Forest</span>
            <h2 className="t-headline">Legendary Encounters</h2>
            <span className="gold-line" />
          </header>

          <div className="grid-4 gap-4">
            <div className="safari-animal-card">
              <img
                src="/images/tiger_safari_1776272603448.png"
                alt="Bengal Tiger"
                className="safari-animal-img"
              />
              <div className="safari-animal-overlay" />
              <div className="safari-animal-info">
                <h3 className="safari-animal-title">Bengal Tiger</h3>
                <span className="safari-animal-subtitle">Panthera Tigris</span>
              </div>
            </div>

            <div className="safari-animal-card">
              <img
                src="/images/Indian Leopard.jpg"
                alt="Indian Leopard"
                className="safari-animal-img"
              />
              <div className="safari-animal-overlay" />
              <div className="safari-animal-info">
                <h3 className="safari-animal-title">Indian Leopard</h3>
                <span className="safari-animal-subtitle">Panthera Pardus Fusca</span>
              </div>
            </div>

            <div className="safari-animal-card">
              <img
                src="/images/Sloth-bear.webp"
                alt="Sloth Bear"
                className="safari-animal-img"
              />
              <div className="safari-animal-overlay" />
              <div className="safari-animal-info">
                <h3 className="safari-animal-title">Sloth Bear</h3>
                <span className="safari-animal-subtitle">Melursus Ursinus</span>
              </div>
            </div>

            <div className="safari-animal-card">
              <img
                src="/images/Indian Gaur.jpg"
                alt="Indian Gaur"
                className="safari-animal-img"
              />
              <div className="safari-animal-overlay" />
              <div className="safari-animal-info">
                <h3 className="safari-animal-title">Indian Gaur</h3>
                <span className="safari-animal-subtitle">Bos Gaurus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="cta-section" id="safari-cta">
        <div className="cta-bg">
          <img
            src="/images/final_cta_bg.png"
            alt="Private luxury rail transport"
            className="cta-bg-image"
            loading="lazy"
          />
        </div>
        <div className="cta-overlay" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.9), rgba(10,10,10,0.4))" }}></div>
        <div className="cta-content container">
          <span className="cta-label">Begin Your Expedition</span>
          <h2 className="cta-title">
            Craft Your Private Safari Journey
          </h2>
          <p className="cta-body">
            Every expedition is individually designed around your travel dates, preferred pace, and chosen level of wilderness exclusivity. Connect with a specialist to begin your journey.
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="btn btn-gold btn-arrow" id="cta-plan-safari">
              Plan My Safari
            </Link>
            <Link href="/contact" className="btn btn-outline-ivory" id="cta-speak-curator">
              Speak With A Safari Specialist
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Booking Footer Panel */}
      <div className={`safari-sticky-bar ${stickyVisible ? "visible" : ""}`}>
        <div className="safari-sticky-info">
          <span className="safari-sticky-duration">
            📅 5 Days / 4 Nights Private Journey
          </span>
          <span className="safari-sticky-price">
            Nagpur · Pench · Kanha · Bandhavgarh
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
