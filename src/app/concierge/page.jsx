"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useGsapAnimations from '@/hooks/useGsapAnimations';

export default function ConciergePage() {
  useGsapAnimations();

  const steps = [
    {
      num: '01',
      title: 'The Initial Dialogue',
      body: 'We begin with a private consultation, either by phone or video. This is not about filling out forms, but a thoughtful conversation to understand your tastes, what moves you, and what you wish to avoid. We listen first.',
    },
    {
      num: '02',
      title: 'Curation & Design',
      body: 'Our specialists design a completely bespoke itinerary. We unlock access to private estates, secure the best guides in the region, and orchestrate seamless logistics. You will review a detailed, refined proposal.',
    },
    {
      num: '03',
      title: 'Refinement',
      body: 'We iterate based on your feedback. Nothing is finalised until you are completely satisfied with the pace, the experiences, and the accommodations. Perfection is the only standard.',
    },
    {
      num: '04',
      title: 'The Journey',
      body: 'From the moment you arrive in India, our on-ground concierge team monitors your journey 24/7 invisibly. We anticipate needs, adjust reservations in real-time, and ensure absolute fluidity.',
    },
  ];

  return (
    <main className="page-concierge">
      {/* Page Hero */}
      <header className="page-hero">
        <img
          src="/images/concierge_hero_1776334813649.png"
          alt="Luxury concierge service"
          className="page-hero-image"
          fetchPriority="high"
        />
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content container">
          <span className="page-hero-label">How It Works</span>
          <h1 className="page-hero-title">The Private Concierge</h1>
        </div>
      </header>

      {/* Introduction */}
      <section className="section">
        <div className="container-narrow text-center">
          <div className="gsap-fade-up">
            <span className="t-section-label">Our Service Approach</span>
            <span className="gold-line"></span>
            <h2 className="t-headline" style={{ marginBottom: 'var(--space-6)' }}>
              Flawless Execution from Concept to Conclusion
            </h2>
            <p className="t-body">
              We operate not merely as a travel agency, but as your private travel concierge. Every journey we design is entirely bespoke, meticulously crafted around your distinct preferences, pace, and passions. Our process ensures zero friction and absolute privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section section-champagne" id="how-it-works">
        <div className="container">
          <div className="values-grid">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="value-item gsap-fade-up"
                style={{ transitionDelay: `${i * 150}ms` }}
                whileHover={{ scale: 1.01, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="value-number">{step.num}</div>
                <h3 className="value-title">{step.title}</h3>
                <p className="value-body">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Elevated Difference */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div className="gsap-fade-up">
              <motion.img
                src="/images/palace_dining_1776272561908.png"
                alt="Private palace dining experience"
                style={{ width: '100%', borderRadius: '4px' }}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <div className="gsap-fade-up" style={{ transitionDelay: '300ms' }}>
              <span className="t-section-label">The Difference</span>
              <h2 className="t-headline" style={{ marginBottom: 'var(--space-6)' }}>
                Unrivaled Access
              </h2>
              <p className="t-body" style={{ marginBottom: 'var(--space-5)' }}>
                The true luxury of Elevated India lies in what cannot be booked online. Through our deeply cultivated relationships across the subcontinent, we offer access that is ordinarily closed to the public.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: 'var(--space-6)' }}>
                <li style={{ marginBottom: 'var(--space-3)', paddingLeft: 'var(--space-4)', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>•</span> Private dinners hosted by royal families
                </li>
                <li style={{ marginBottom: 'var(--space-3)', paddingLeft: 'var(--space-4)', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>•</span> After-hours access to historical monuments
                </li>
                <li style={{ marginBottom: 'var(--space-3)', paddingLeft: 'var(--space-4)', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>•</span> Consultations with esteemed art historians and curators
                </li>
                <li style={{ marginBottom: 'var(--space-3)', paddingLeft: 'var(--space-4)', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>•</span> Charter flights and private aviation logistics
                </li>
              </ul>
              <Link href="/experiences" className="text-link">
                Explore Experiences
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-champagne" id="concierge-cta" style={{ textAlign: 'center' }}>
        <div className="container-narrow">
          <span className="t-section-label gsap-fade-up">Your Private Journey Awaits</span>
          <span className="gold-line"></span>
          <h2 className="t-headline gsap-fade-up" style={{ transitionDelay: '150ms' }}>
            Entrust Us with Your Indian Odyssey
          </h2>
          <p className="t-body gsap-fade-up" style={{ maxWidth: '560px', margin: 'var(--space-5) auto var(--space-10)', transitionDelay: '300ms' }}>
            Connect with our concierge team to begin designing a journey that is entirely your own.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }} className="gsap-fade-up" style={{ transitionDelay: '450ms' }}>
            <Link href="/contact" className="btn btn-gold btn-arrow">
              Request a Private Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
