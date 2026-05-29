"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useGsapAnimations from '@/hooks/useGsapAnimations';

export default function AboutPage() {
  useGsapAnimations();

  const values = [
    {
      num: 'I',
      title: 'Authenticity Above Convenience',
      body: 'We never take the easier path if the authentic one is available. The right temple, the right guide, the right time of day — these matter enormously and we never compromise on them.',
    },
    {
      num: 'II',
      title: 'Restraint as Sophistication',
      body: 'Our journeys are never overfilled. We protect space — space to wander, to absorb, to see a painting twice, to sit in silence beside a river. Restraint is how we add depth.',
    },
    {
      num: 'III',
      title: 'Privacy as a First Principle',
      body: 'Your identity, your travel details, your photographs, and your journey narrative belong entirely to you. We do not share, publish, or use any guest information without explicit consent. Ever.',
    },
    {
      num: 'IV',
      title: 'Responsibility to India',
      body: 'We support the communities, craftspeople, ecosystems, and heritage institutions that make India extraordinary. A portion of every journey contributes to their preservation.',
    },
  ];

  return (
    <main className="page-about">
      {/* Hero */}
      <header className="page-hero">
        <img
          src="/images/about_hero_1776334848582.png"
          alt="Himalayas at luxury twilight"
          className="page-hero-image"
          fetchPriority="high"
        />
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content container">
          <span className="page-hero-label">The Story Behind the Brand</span>
          <h1 className="page-hero-title">We Exist Because India Deserves Better Interpreters</h1>
        </div>
      </header>

      {/* Philosophy */}
      <section className="section" id="philosophy">
        <div className="container">
          <div className="about-philosophy">
            <div className="gsap-fade-up">
              <span className="t-section-label">Our Philosophy</span>
              <span className="gold-line gold-line-left"></span>
              <h2 className="t-headline" style={{ marginBottom: 'var(--space-6)' }}>
                India Is Not a Product.
                <br />
                It Is a Civilisation.
              </h2>
              <p className="t-body" style={{ marginBottom: 'var(--space-5)' }}>
                India is the oldest continuous civilisation on earth. It contains within it more diversity — of landscape, language, faith, cuisine, and craft — than most continents. To reduce it to a "destination" is to misunderstand it entirely.
              </p>
              <p className="t-body" style={{ marginBottom: 'var(--space-5)' }}>
                Elevated India was founded on a single conviction: that the international traveller who cares most — who seeks authenticity, depth, and meaning — deserves to encounter India at its truest and most extraordinary.
              </p>
              <p className="t-body" style={{ marginBottom: 'var(--space-8)' }}>
                Not India as it is sold. India as it actually is.
              </p>
              <Link href="/contact" className="text-link">
                Begin Your Journey
              </Link>
            </div>
            <div className="about-philosophy-image gsap-fade-up" style={{ transitionDelay: '150ms' }}>
              <img src="/images/palace_interior_1776272621551.png" alt="Palace interior corridor" />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Conviction */}
      <div className="brand-quote" id="founder-conviction">
        <blockquote className="gsap-fade-up">
          <p className="brand-quote-text">
            "I have watched India be simplified, genericised, and mass-marketed for decades. That is not the India I know. I built Elevated India for the traveller who is ready to encounter the real one."
          </p>
          <footer className="brand-quote-author" style={{ marginTop: '16px' }}>
            Founder, Elevated India
          </footer>
        </blockquote>
      </div>

      {/* Values */}
      <section className="section" id="values" aria-label="Our values">
        <div className="container">
          <header className="section-header gsap-fade-up">
            <span className="t-section-label">What We Stand For</span>
            <h2 className="t-headline">Four Operating Principles</h2>
            <span className="gold-line"></span>
            <p className="t-body">
              These are not aspirational statements. They are commitments we hold ourselves accountable to on every journey we design.
            </p>
          </header>

          <div className="values-grid">
            {values.map((val, index) => (
              <motion.div
                key={val.title}
                className="value-item gsap-fade-up"
                style={{ transitionDelay: `${index * 150}ms` }}
                whileHover={{ scale: 1.01, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="value-number">{val.num}</div>
                <h3 className="value-title">{val.title}</h3>
                <p className="value-body">{val.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Qualified */}
      <section className="section section-champagne" id="why-qualified">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'start' }}>
            <div className="gsap-fade-up">
              <span className="t-section-label">Why We Are Qualified</span>
              <span className="gold-line gold-line-left"></span>
              <h2 className="t-headline" style={{ marginBottom: 'var(--space-6)' }}>
                A Network Built Over Decades
              </h2>
              <p className="t-body" style={{ marginBottom: 'var(--space-5)' }}>
                Our curatorial team has spent decades building relationships with the people who actually make extraordinary things possible in India — palace families, wildlife conservationists, temple custodians, Michelin-recognised chefs, master craftspeople, and cultural historians.
              </p>
              <p className="t-body" style={{ marginBottom: 'var(--space-5)' }}>
                These relationships are not transactional. They are earned through respect, consistency, and a genuine love of India's culture. They are the reason our guests access experiences that cannot be booked, found, or purchased anywhere else.
              </p>
              <p className="t-body">
                This is not a claim we make lightly. It is a standard we have maintained for fifteen years.
              </p>
            </div>
            <div className="gsap-fade-up" style={{ transitionDelay: '150ms' }}>
              <div style={{ background: 'var(--charcoal)', padding: 'var(--space-10)', marginBottom: 'var(--space-2)' }}>
                <span className="t-section-label" style={{ color: 'var(--gold)' }}>
                  200+ Private Journeys
                </span>
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'var(--text-xl)',
                    color: 'var(--ivory)',
                    marginTop: 'var(--space-3)',
                    lineHeight: 1.4,
                  }}
                >
                  Every one unique. None repeated. None pre-packaged.
                </p>
              </div>
              <div style={{ background: 'var(--stone)', padding: 'var(--space-10)' }}>
                <span className="t-section-label">Our Commitment</span>
                <p className="t-body" style={{ marginTop: 'var(--space-3)' }}>
                  If a journey we design does not meet the standard we promised, we will make it right — without qualification or negotiation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" id="about-cta" style={{ textAlign: 'center' }}>
        <div className="container-narrow">
          <span className="t-section-label gsap-fade-up">The Conversation Begins</span>
          <span className="gold-line"></span>
          <h2 className="t-headline gsap-fade-up" style={{ transitionDelay: '150ms' }}>
            Ready to Meet India on Its Own Terms?
          </h2>
          <p className="t-body gsap-fade-up" style={{ maxWidth: '560px', margin: 'var(--space-5) auto var(--space-10)', transitionDelay: '300ms' }}>
            We welcome enquiries from discerning travellers who understand that the finest things are not bought quickly. Let us begin with a conversation.
          </p>
          <div
            style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}
            className="gsap-fade-up"
            style={{ transitionDelay: '450ms' }}
          >
            <Link href="/contact" className="btn btn-gold btn-arrow" id="about-cta-btn">
              Request a Private Consultation
            </Link>
            <Link href="/journeys" className="btn btn-outline-gold" id="about-journeys-btn">
              Explore Our Journeys
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
