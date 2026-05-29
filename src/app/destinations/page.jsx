"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useGsapAnimations from '@/hooks/useGsapAnimations';

export default function DestinationsPage() {
  useGsapAnimations();

  const destinations = [
    {
      name: 'Rajasthan',
      desc: 'Palaces · Desert · Heritage · Culture',
      img: '/images/rajasthan_palace_exterior_1776272664878.png',
      alt: 'Rajasthan palace',
      span: false,
    },
    {
      name: 'Kerala',
      desc: 'Backwaters · Wellness · Spice Country',
      img: '/images/kerala_backwaters_1776272518771.png',
      alt: 'Kerala backwaters',
      span: false,
    },
    {
      name: 'The Himalayas',
      desc: 'Ladakh · Spiti · Mountain Retreats',
      img: '/images/himalayan_monastery_1776272544257.png',
      alt: 'Himalayan monastery',
      span: false,
    },
    {
      name: 'Central India',
      desc: 'Kanha · Bandhavgarh · Wildlife',
      img: '/images/tiger_safari_1776272603448.png',
      alt: 'Tiger reserves',
      span: false,
    },
    {
      name: 'Varanasi',
      desc: 'Sacred Ganges · Ritual · Ancient City',
      img: '/images/varanasi_ghats_1776272579374.png',
      alt: 'Varanasi ghats',
      span: false,
    },
    {
      name: 'Goa',
      desc: 'Heritage · Coast · Colonial Architecture',
      img: '/images/goa_heritage_1776272683299.png',
      alt: 'Goa heritage mansion',
      span: false,
    },
    {
      name: 'The Thar Desert',
      desc: 'Dunes · Stars · Private Camps · Silence',
      img: '/images/desert_camp_night_1776272499120.png',
      alt: 'Thar Desert camp',
      span: true, // spans 2 columns
    },
  ];

  return (
    <main className="page-destinations">
      {/* Page Hero */}
      <header className="page-hero">
        <img
          src="/images/destinations_hero_1776334796479.png"
          alt="Private houseboat in Kerala misty backwaters"
          className="page-hero-image"
          fetchPriority="high"
        />
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content container">
          <span className="page-hero-label">Regions of India</span>
          <h1 className="page-hero-title">The Landscape of the Journey</h1>
          <p className="page-hero-sub">Destination is context. Experience is everything.</p>
        </div>
      </header>

      {/* Intro */}
      <section className="section-sm section-champagne" style={{ borderBottom: '1px solid var(--stone-dark)' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <p className="t-section-label gsap-fade-up">A Note on Destinations</p>
          <span className="gold-line"></span>
          <p className="t-body-md gsap-fade-up" style={{ maxWidth: '640px', margin: '0 auto', color: 'var(--charcoal)', transitionDelay: '150ms' }}>
            We do not sell destinations. We translate them. Each region of India has its own texture, its own intelligence, its own way of revealing itself. Below are the landscapes we know deeply — and through which we design your journey.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="section" id="destinations-grid" aria-label="Destinations">
        <div className="container">
          <div className="destinations-grid gsap-fade-in">
            {destinations.map((dest, i) => (
              <Link
                key={dest.name}
                href="/contact"
                className="dest-card"
                aria-label={`Explore ${dest.name}`}
                style={dest.span ? { gridColumn: 'span 2' } : {}}
              >
                <motion.div
                  className="dest-card-inner"
                  style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={dest.img}
                    alt={dest.alt}
                    className="dest-card-image"
                    style={dest.span ? { aspectRatio: '16 / 7', maxHeight: '440px' } : {}}
                    loading="lazy"
                  />
                  <div className="dest-card-overlay"></div>
                  <div className="dest-card-content">
                    <h2 className="dest-card-name">{dest.name}</h2>
                    <p className="dest-card-desc">{dest.desc}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Note */}
      <section className="section section-champagne" id="beyond-destinations">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <span className="t-section-label gsap-fade-up">And Beyond</span>
          <span className="gold-line"></span>
          <h2 className="t-headline gsap-fade-up" style={{ transitionDelay: '150ms' }}>
            India Contains Multitudes
          </h2>
          <p className="t-body gsap-fade-up" style={{ maxWidth: '600px', margin: 'var(--space-5) auto var(--space-10)', transitionDelay: '300ms' }}>
            Odisha's ancient temples. Meghalaya's living root bridges. The textile traditions of Gujarat. The French-Indian heritage of Pondicherry. We know India in its entirety — and we design into its less-revealed corners with the same care as its most celebrated ones. Tell us where curiosity leads and we will find the way.
          </p>
          <Link href="/contact" className="btn btn-dark btn-arrow gsap-fade-up" id="beyond-inquiry-btn" style={{ transitionDelay: '450ms' }}>
            Ask About Any Destination
          </Link>
        </div>
      </section>
    </main>
  );
}
