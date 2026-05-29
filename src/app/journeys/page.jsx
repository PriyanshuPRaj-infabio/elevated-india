"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import useGsapAnimations from '@/hooks/useGsapAnimations';

export default function JourneysPage() {
  const router = useRouter();
  useGsapAnimations();

  const featuredJourneys = [
    {
      title: 'The Maharaja Circuit Reimagined',
      label: 'Rajasthan · 12–15 Days · Private',
      excerpt: 'Palace estates in Jodhpur, Jaisalmer and Bundi. Private collections, family archives, exclusive dining within royal courtyards after hours. This is Rajasthan accessed by invitation, not ticket.',
      img: '/images/rajasthan_palace_exterior_1776272664878.png',
      alt: 'Rajasthan palace',
    },
    {
      title: 'Palaces, Sand & Silence',
      label: 'Thar Desert · 7–10 Days · Romantic',
      excerpt: 'From amber-lit sandstone cities to a private camp beneath the Milky Way. A journey that moves from cultural saturation to profound desert stillness with perfect natural rhythm.',
      img: '/images/desert_camp_night_1776272499120.png',
      alt: 'Desert camp at night',
    },
  ];

  const standardJourneys = [
    {
      title: 'Sacred India: Ritual & Reflection',
      label: 'Varanasi · Rishikesh · 8–12 Days',
      excerpt: 'Dawn on the Ganges, meetings with scholars, silence in ancient courtyards. India\'s most profound landscape, privately navigated.',
      img: '/images/varanasi_ghats_1776272579374.png',
      alt: 'Varanasi ghats at dawn',
    },
    {
      title: 'The Grand Indian Honeymoon',
      label: 'Kerala · 10–14 Days · Romance',
      excerpt: 'Your own private houseboat on the backwaters. Spice plantation estates. Ayurvedic rituals by candlelight. Entirely composed for two.',
      img: '/images/kerala_backwaters_1776272518771.png',
      alt: 'Kerala houseboat',
    },
    {
      title: 'The Wild Heart of India',
      label: 'Central India · 7–10 Days · Wildlife',
      excerpt: 'Private safari vehicles, exclusive jungle lodges, and expert naturalists in Kanha and Bandhavgarh — India\'s last great wild places, accessed with rare privilege.',
      img: '/images/tiger_safari_1776272603448.png',
      alt: 'Tiger in jungle',
      href: '/experiences/safari',
    },
    {
      title: 'India\'s Highest Horizons',
      label: 'Himalayas · 10–14 Days · Spiritual',
      excerpt: 'Ladakh\'s ancient monasteries, Spiti\'s remote valleys, private mountain retreats. A journey to the edge of the world — and within.',
      img: '/images/himalayan_monastery_1776272544257.png',
      alt: 'Himalayan monastery',
    },
    {
      title: 'India for Families: Depth & Delight',
      label: 'Pan-India · 21 Days · Families',
      excerpt: 'Curated for multi-generational families — balancing wonder and comfort, discovery and rest, grand heritage and living culture at every stage.',
      img: '/images/palace_interior_1776272621551.png',
      alt: 'Palace interior',
    },
  ];

  return (
    <main className="page-journeys">
      {/* Page Hero */}
      <header className="page-hero" id="page-hero">
        <img
          src="/images/journeys_hero_1776334755097.png"
          alt="Vintage luxury train through Rajasthan"
          className="page-hero-image"
          fetchPriority="high"
        />
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content container">
          <span className="page-hero-label">Flagship Itineraries</span>
          <h1 className="page-hero-title">Journeys of Rare Distinction</h1>
          <p className="page-hero-sub">Narrative-led. Never packaged. Always entirely your own.</p>
        </div>
      </header>

      {/* Intro */}
      <section className="section-sm section-champagne" style={{ borderBottom: '1px solid var(--stone-dark)' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <p className="t-section-label gsap-fade-up">How We Think About Journeys</p>
          <span className="gold-line"></span>
          <p className="t-subheadline gsap-fade-up" style={{ color: 'var(--charcoal)', maxWidth: '640px', margin: '0 auto', transitionDelay: '150ms' }}>
            These are not fixed itineraries. They are compositions — starting points from which your journey will be individually shaped around your travel dates, preferences, and pace.
          </p>
        </div>
      </section>

      {/* Featured Journeys */}
      <section className="section" id="featured-journeys" aria-label="Featured journeys">
        <div className="container">
          <div className="journeys-featured gsap-fade-in" style={{ marginBottom: 'var(--space-2)' }}>
            {featuredJourneys.map((journey) => (
              <motion.article
                key={journey.title}
                className="journey-card"
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <img
                  src={journey.img}
                  alt={journey.alt}
                  className="journey-card-image"
                  style={{ aspectRatio: '16 / 10' }}
                  loading="lazy"
                />
                <div className="journey-card-overlay"></div>
                <div className="journey-card-content">
                  <span className="journey-card-label">{journey.label}</span>
                  <h2 className="journey-card-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                    {journey.title}
                  </h2>
                  <p className="journey-card-excerpt">{journey.excerpt}</p>
                  <Link href="/contact" className="text-link" style={{ color: 'var(--gold-light)' }}>
                    Request This Journey
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="journeys-list gsap-fade-in" style={{ transitionDelay: '300ms' }}>
            {standardJourneys.map((journey) => (
              <motion.article
                key={journey.title}
                className="journey-card"
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                onClick={(e) => {
                  if (e.target.closest('a')) return;
                  if (journey.href) {
                    router.push(journey.href);
                  }
                }}
                style={{ cursor: journey.href ? 'pointer' : 'default' }}
              >
                <img
                  src={journey.img}
                  alt={journey.alt}
                  className="journey-card-image"
                  loading="lazy"
                />
                <div className="journey-card-overlay"></div>
                <div className="journey-card-content">
                  <span className="journey-card-label">{journey.label}</span>
                  <h3 className="journey-card-title">{journey.title}</h3>
                  <p className="journey-card-excerpt">{journey.excerpt}</p>
                  <div style={{ display: 'flex', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
                    {journey.href && (
                      <Link href={journey.href} className="text-link" style={{ color: 'var(--gold-light)' }}>
                        Explore Expedition
                      </Link>
                    )}
                    <Link href="/contact" className="text-link" style={{ color: 'var(--gold-light)' }}>
                      Request This Journey
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Note */}
      <section className="section section-champagne" id="bespoke-note">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <span className="t-section-label gsap-fade-up">Not Seeing Your Vision?</span>
          <span className="gold-line"></span>
          <h2 className="t-headline gsap-fade-up" style={{ transitionDelay: '150ms' }}>
            Every Journey Can Be Created From Scratch
          </h2>
          <p className="t-body gsap-fade-up" style={{ maxWidth: '580px', margin: 'var(--space-4) auto var(--space-10)', transitionDelay: '300ms' }}>
            These journeys are starting points — frameworks, not formulas. Tell us what India means to you and we will design something that has never existed before.
          </p>
          <Link href="/contact" className="btn btn-dark btn-arrow gsap-fade-up" id="bespoke-inquiry-btn" style={{ transitionDelay: '450ms' }}>
            Design My Journey
          </Link>
        </div>
      </section>
    </main>
  );
}
