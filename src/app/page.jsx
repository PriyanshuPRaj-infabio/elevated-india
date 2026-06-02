"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import LottieScroll from '@/components/LottieScroll';
import useGsapAnimations from '@/hooks/useGsapAnimations';
import HeroVideoSlider from '@/components/HeroVideoSlider';
import { JOURNEYS } from '@/data/journeysData';

// Counter component for animated statistics
function StatCounter({ target, suffix = '', duration = 1600 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const elapsed = timestamp - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            setCount(Math.round(eased * target));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function HomePage() {
  const router = useRouter();
  useGsapAnimations();

  return (
    <main className="page-home">
      {/* Hero Section */}
      <section className="hero" id="hero" aria-label="Hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <HeroVideoSlider />

        <div className="hero-scroll-hint" aria-hidden="true" style={{ zIndex: 3 }}>
          <span>Scroll</span>
          <div style={{ marginTop: '8px' }}>
            <LottieScroll />
          </div>
        </div>
      </section>

      {/* Brand Promise */}
      <section className="section-sm section-champagne" id="brand-promise" aria-label="Brand promise">
        <div className="container">
          <div className="promise-grid">
            <div className="promise-item gsap-fade-up">
              <svg
                className="promise-icon"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle cx="16" cy="16" r="14" stroke="#B8964A" strokeWidth="1" />
                <path d="M10 16c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6z" stroke="#B8964A" strokeWidth="1" />
                <path d="M16 2v4M16 26v4M2 16h4M26 16h4" stroke="#B8964A" strokeWidth="1" strokeLinecap="round" />
              </svg>
              <h3 className="promise-title">Deep Local Intelligence</h3>
              <p className="promise-body">
                Decades of intimate knowledge across India's regions, cultures,
                and communities — insights that no algorithm can replicate.
              </p>
            </div>

            <div className="promise-divider" aria-hidden="true"></div>

            <div className="promise-item gsap-fade-up" style={{ transitionDelay: '150ms' }}>
              <svg
                className="promise-icon"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M4 8h24M4 16h24M4 24h16" stroke="#B8964A" strokeWidth="1" strokeLinecap="round" />
              </svg>
              <h3 className="promise-title">Curated, Not Crowded</h3>
              <p className="promise-body">
                Every element of your journey is hand-selected. We offer fewer
                choices, better choices — tailored precisely to your intent and
                sensibility.
              </p>
            </div>

            <div className="promise-divider" aria-hidden="true"></div>

            <div className="promise-item gsap-fade-up" style={{ transitionDelay: '300ms' }}>
              <svg
                className="promise-icon"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect x="4" y="10" width="24" height="16" rx="1" stroke="#B8964A" strokeWidth="1" />
                <path d="M10 10V7a6 6 0 0 1 12 0v3" stroke="#B8964A" strokeWidth="1" strokeLinecap="round" />
                <circle cx="16" cy="18" r="2" fill="#B8964A" />
              </svg>
              <h3 className="promise-title">Complete Discretion</h3>
              <p className="promise-body">
                Your privacy is our first principle. Elevated India operates with
                the discretion and professionalism of a private household, not a
                public business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Statement */}
      <div className="brand-quote" id="editorial-statement">
        <blockquote className="gsap-fade-up">
          <p className="brand-quote-text">
            "India is not a destination to be efficiently toured. It is an
            experience to be gradually, intimately, and personally understood."
          </p>
          <footer className="brand-quote-author" style={{ marginTop: '16px' }}>
            — The Elevated India Philosophy
          </footer>
        </blockquote>
      </div>

      {/* Experience Pillars */}
      <section className="section" id="experience-pillars" aria-label="Experience pillars">
        <div className="container">
          <header className="section-header gsap-fade-up">
            <span className="t-section-label">What We Curate</span>
            <h2 className="t-headline">The Shape of Your Journey</h2>
            <span className="gold-line"></span>
            <p className="t-body">
              We begin not with destinations, but with desire. What draws you —
              stillness or ceremony, wilderness or opulence, spirit or
              celebration?
            </p>
          </header>
        </div>

        <div className="pillars-grid" role="list">
          {[
            {
              title: 'Royal Residences & Palace Life',
              sub: 'Heritage · Maharaja estates · Haveli stays',
              img: '/images/palace.jpg',
              alt: 'Ornate palace corridor',
            },
            {
              title: 'Wilderness & Private Safaris',
              sub: 'Wildlife · Jungle camps · Tiger reserves',
              img: '/images/wildlife.jpg',
              alt: 'Bengal tiger in forest',
              href: '/experiences/safari',
            },
            {
              title: 'Spiritual & Transformational',
              sub: 'Varanasi · Ashrams · Sacred rivers',
              img: '/images/dashashwamedh-ghat-evening-ganga-aarti.jpg',
              alt: 'Varanasi ghats at dawn',
            },
            {
              title: 'Art, Design & Culture',
              sub: 'Craft · Architecture · Living traditions',
              img: '/images/art&culture.jpg',
              alt: 'Artisan weaving silk in Varanasi',
            },
            {
              title: 'Celebrations & Private Events',
              sub: 'Weddings · Milestones · Bespoke occasions',
              img: '/images/celebrations.jpg',
              alt: 'Private palace courtyard dinner',
            },
            {
              title: 'Family & Multi-Generational',
              sub: 'Luxury · Discovery · Shared memory',
              img: '/images/family.webp',
              alt: 'Rajasthan palace gardens',
            },
          ].map((pillar) => {
            const Card = (
              <article
                key={pillar.title}
                className="pillar-card gsap-fade-in"
                role="listitem"
              >
                <img
                  src={pillar.img}
                  alt={pillar.alt}
                  className="pillar-card-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pillar-card-overlay"></div>
                <div className="pillar-card-content">
                  <h3 className="pillar-card-title">{pillar.title}</h3>
                  <p className="pillar-card-sub">{pillar.sub}</p>
                </div>
              </article>
            );

            if (pillar.href) {
              return (
                <Link href={pillar.href} key={pillar.title} style={{ display: 'contents' }}>
                  {Card}
                </Link>
              );
            }

            return Card;
          })}
        </div>
      </section>

      {/* Signature Journeys */}
      <section className="section section-stone" id="signature-journeys" aria-label="Signature journeys">
        <div className="container">
          <header className="section-header gsap-fade-up">
            <span className="t-section-label">Our Signatures</span>
            <h2 className="t-headline">Journeys of Rare Distinction</h2>
            <span className="gold-line"></span>
            <p className="t-body">
              A curated selection of flagship itineraries. Each one a living
              journey — not a package, but a carefully composed narrative.
            </p>
          </header>
        </div>

        <div className="container">
          <div className="journeys-grid" role="list">
            {[
              {
                title: 'The Wild Heart of India (Tiger Safari)',
                label: 'Central India Reserves · 8–10 Days',
                excerpt: "Private safari vehicles, exclusive jungle lodges, and expert naturalists in Kanha and Bandhavgarh — India's last great wild places, accessed with rare privilege.",
                meta: 'Wildlife · Luxury Lodges · Map Integration',
                img: '/images/25-bandhavgarhnationalpark1.jpg',
                alt: 'Tiger in jungle',
                href: '/experiences/safari',
              },
              {
                title: 'Palace on Wheels / Train',
                label: 'Rajasthan & Nepal · 16 Days',
                excerpt: "A legendary heritage rail odyssey through royal Rajasthan, extended into Nepal's wild sanctuaries.",
                meta: 'Heritage Train · Private Safaris · Taj Wilderness',
                img: JOURNEYS['palace-on-wheels'].heroImage,
                alt: 'Vintage luxury train through Rajasthan',
                href: '/journeys/palace-on-wheels',
              },
              {
                title: 'Maharaja Express / Train',
                label: 'Northern & Central India · 15 Days',
                excerpt: "A majestic rail passage across Northern & Central India's royal capitals in peerless luxury.",
                meta: 'Presidential Suites · Water Oasis · Ganges Aarti',
                img: JOURNEYS['maharaja-express'].heroImage,
                alt: 'Maharajas Express Train',
                href: '/journeys/maharaja-express',
              },
              {
                title: 'Golden Triangle with Kathmandu',
                label: 'North India & Nepal · 12 Days',
                excerpt: "A majestic journey across Northern India's imperial capitals & Nepal's sacred valleys.",
                meta: 'Imperial Cities · Heritage Dargah · Himalayan Valleys',
                img: JOURNEYS['golden-triangle-kathmandu'].heroImage,
                alt: 'Golden Triangle with Kathmandu',
                href: '/journeys/golden-triangle-kathmandu',
              },
            ].map((journey) => (
              <Link href={journey.href} key={journey.title} style={{ display: 'contents' }}>
                <article
                  className="journey-card gsap-fade-in"
                  role="listitem"
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={journey.img}
                    alt={journey.alt}
                    className="journey-card-image"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="journey-card-overlay"></div>
                  <div className="journey-card-content">
                    <span className="journey-card-label">{journey.label}</span>
                    <h3 className="journey-card-title">{journey.title}</h3>
                    <p className="journey-card-excerpt">{journey.excerpt}</p>
                    <span className="journey-card-meta">{journey.meta}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="flex-center" style={{ marginTop: 'var(--space-12)' }}>
            <Link href="/journeys" className="btn btn-outline-gold btn-arrow gsap-fade-up" id="all-journeys-btn">
              View All Journeys
            </Link>
          </div>
        </div>
      </section>

      {/* Why Elevated India */}
      <section className="section" id="why-elevated-india" aria-label="Why travel with Elevated India">
        <div className="container">
          <header className="section-header gsap-fade-up">
            <span className="t-section-label">The Difference</span>
            <h2 className="t-headline">Why Elevated India</h2>
            <span className="gold-line"></span>
          </header>

          <div
            className="grid-3"
            style={{
              gap: '1px',
              background: 'var(--stone-dark)',
              border: '1px solid var(--stone-dark)',
            }}
          >
            {[
              {
                num: '01',
                title: 'Privileged Network & Access',
                body: 'Relationships with palace families, private estates, reserve wardens, and cultural custodians built over decades — granting access no booking engine can offer.',
              },
              {
                num: '02',
                title: 'End-to-End Execution',
                body: 'From private airport arrivals to seamless transitions between stays — every detail is managed with the same care that defines your journey\'s vision.',
              },
              {
                num: '03',
                title: 'Cultural Intelligence',
                body: 'India\'s depth cannot be summarised. Our team translates its complexity — history, spirituality, cuisine, craft — with sensitivity and genuine expertise.',
              },
              {
                num: '04',
                title: 'High-Touch Concierge',
                body: 'A dedicated journey curator accompanies every itinerary. Available at every hour, proactive rather than reactive — anticipating rather than responding.',
              },
              {
                num: '05',
                title: 'Tailored to Intent',
                body: 'Your journey begins not with a catalogue, but a conversation. We design around your intent, your rhythm, and your idea of what India should feel like.',
              },
              {
                num: '06',
                title: 'Absolute Discretion',
                body: 'Your privacy is non-negotiable. We do not publish client details, itinerary specifics, or photographs without explicit consent. Always.',
              },
            ].map((diff) => (
              <div
                key={diff.num}
                className="diff-item gsap-fade-up"
              >
                <span className="diff-number">{diff.num}</span>
                <h3 className="diff-title">{diff.title}</h3>
                <p className="diff-body">{diff.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div
        className="section-champagne"
        style={{
          padding: 'var(--space-12) 0',
          borderTop: '1px solid var(--stone-dark)',
          borderBottom: '1px solid var(--stone-dark)',
        }}
      >
        <div className="container">
          <div className="grid-4" style={{ textAlign: 'center', gap: 0 }}>
            <div className="gsap-fade-up">
              <span className="t-headline" style={{ color: 'var(--gold)' }}>
                <StatCounter target={200} suffix="+" />
              </span>
              <p className="t-section-label" style={{ marginTop: 'var(--space-2)' }}>
                Private Journeys
              </p>
            </div>
            <div className="gsap-fade-up" style={{ transitionDelay: '150ms' }}>
              <span className="t-headline" style={{ color: 'var(--gold)' }}>
                <StatCounter target={38} />
              </span>
              <p className="t-section-label" style={{ marginTop: 'var(--space-2)' }}>
                Indian Regions
              </p>
            </div>
            <div className="gsap-fade-up" style={{ transitionDelay: '300ms' }}>
              <span className="t-headline" style={{ color: 'var(--gold)' }}>
                <StatCounter target={15} />
              </span>
              <p className="t-section-label" style={{ marginTop: 'var(--space-2)' }}>
                Years of Access
              </p>
            </div>
            <div className="gsap-fade-up" style={{ transitionDelay: '450ms' }}>
              <span className="t-section-label" style={{ fontSize: 'var(--text-xl)', color: 'var(--gold)', display: 'block' }}>
                100%
              </span>
              <p className="t-section-label" style={{ marginTop: 'var(--space-2)' }}>
                Bespoke · Never Packaged
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <section className="section" id="testimonials" aria-label="Client testimonials">
        <div className="container">
          <header className="section-header gsap-fade-up">
            <span className="t-section-label">Private Guest Voices</span>
            <h2 className="t-headline">Journeys That Remain</h2>
            <span className="gold-line"></span>
          </header>

          <div className="grid-3" style={{ alignItems: 'start' }}>
            <div className="testimonial-card gsap-fade-up">
              <span className="testimonial-mark" aria-hidden="true">&ldquo;</span>
              <blockquote className="testimonial-quote">
                Elevated India did not show us India. They revealed it —
                privately, thoughtfully, in a way that felt completely our own. It
                was the finest travel experience of our lives.
              </blockquote>
              <p className="testimonial-author">C. & R. Whitmore</p>
              <p className="testimonial-origin">London, United Kingdom</p>
            </div>

            <div className="testimonial-card gsap-fade-up" style={{ transitionDelay: '150ms' }}>
              <span className="testimonial-mark" aria-hidden="true">&ldquo;</span>
              <blockquote className="testimonial-quote">
                The access was extraordinary — private dinners with palace
                families, a dawn boat on the Ganges with no one else in sight.
                This is not something you can find elsewhere.
              </blockquote>
              <p className="testimonial-author">A. Lindqvist</p>
              <p className="testimonial-origin">Stockholm, Sweden</p>
            </div>

            <div className="testimonial-card gsap-fade-up" style={{ transitionDelay: '300ms' }}>
              <span className="testimonial-mark" aria-hidden="true">&ldquo;</span>
              <blockquote className="testimonial-quote">
                What impressed me most was how little I had to think. Every detail
                was handled before I even thought to ask. That kind of invisible
                service is rare — and priceless.
              </blockquote>
              <p className="testimonial-author">M. Al Farsi</p>
              <p className="testimonial-origin">Dubai, UAE</p>
            </div>
          </div>

          {/* Press/Partners */}
          <div style={{ marginTop: 'var(--space-16)', textAlign: 'center' }}>
            <p className="t-section-label gsap-fade-up" style={{ marginBottom: 'var(--space-8)' }}>
              As Recognised By
            </p>
            <div className="partner-logos gsap-fade-up" style={{ transitionDelay: '150ms' }}>
              <span className="partner-logo-text">Condé Nast Traveler</span>
              <span className="partner-logo-text">Travel + Leisure</span>
              <span className="partner-logo-text">The Financial Times</span>
              <span className="partner-logo-text">Tatler</span>
              <span className="partner-logo-text">Harper's Bazaar</span>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="cta-section" id="consultation-cta" aria-label="Begin your journey">
        <div className="cta-bg">
          <img
            src="/images/final_cta_bg.png"
            alt="Luxury train journey in India"
            className="cta-bg-image"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="cta-overlay" style={{ zIndex: 1 }}></div>
        <div className="cta-content" style={{ zIndex: 2 }}>
          <span className="cta-label gsap-fade-up">Your Journey Awaits</span>
          <h2 className="cta-title gsap-fade-up" style={{ transitionDelay: '150ms' }}>
            Every Journey Begins With a Conversation
          </h2>
          <p className="cta-body gsap-fade-up" style={{ transitionDelay: '300ms' }}>
            There are no catalogues here, no pre-set packages. Simply tell us your
            vision for India — and we will design something that is entirely,
            truly yours.
          </p>
          <div className="cta-buttons gsap-fade-up" style={{ transitionDelay: '450ms' }}>
            <Link href="/contact" className="btn btn-gold btn-arrow" id="cta-design-btn">
              Design My Journey
            </Link>
            <Link href="/contact" className="btn btn-outline-ivory" id="cta-curator-btn">
              Speak With a Curator
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
