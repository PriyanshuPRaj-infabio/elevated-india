"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useGsapAnimations from '@/hooks/useGsapAnimations';

export default function JournalPage() {
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  useGsapAnimations();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    setSubscribed(true);
    setSubmitting(false);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  const articles = [
    {
      id: 'article-palace-stays',
      title: 'India\'s Most Exceptional Palace Stays — The Insider\'s Edit',
      tag: 'Heritage · Accommodation',
      excerpt: 'Beyond the famous names, there are private estates and royal residences that receive guests by invitation only. We know them well.',
      img: '/images/rajasthan_palace_exterior_1776272664878.png',
      alt: 'Rajasthan palace',
    },
    {
      id: 'article-varanasi-spirit',
      title: 'Varanasi: How to Encounter the Sacred City With Depth and Sensitivity',
      tag: 'Spirituality · Culture',
      excerpt: 'A city that changes everyone who visits — but only if you approach it on its own profound terms. Our guide to encountering Varanasi properly.',
      img: '/images/varanasi_ghats_1776272579374.png',
      alt: 'Varanasi ghats',
    },
    {
      id: 'article-safari-guide',
      title: 'The Insider\'s Guide to India\'s Private Safari Reserves',
      tag: 'Wildlife · Safari',
      excerpt: 'Which reserves to choose, when to go, and how to experience India\'s magnificent wildlife without the crowds or the compromises.',
      img: '/images/tiger_safari_1776272603448.png',
      alt: 'Tiger safari',
    },
    {
      id: 'article-seasonal-guide',
      title: 'When to Travel India: A Seasonal Guide for Discerning Travellers',
      tag: 'Planning · Seasonal',
      excerpt: 'India\'s seasons are not simply weather. They are moods, colours, and entire atmospheres. Understanding them is essential to designing the right journey.',
      img: '/images/kerala_backwaters_1776272518771.png',
      alt: 'Kerala backwaters',
    },
    {
      id: 'article-himalayas',
      title: 'Ladakh Beyond the Photographs: What the Mountains Actually Teach',
      tag: 'Adventure · Spiritual',
      excerpt: 'The most photographed Himalayan landscape in India — and the most misunderstood. A genuine guide to encountering its depth in solitude.',
      img: '/images/himalayan_monastery_1776272544257.png',
      alt: 'Himalayan monastery',
    },
    {
      id: 'article-craft-design',
      title: 'India\'s Living Craft Traditions: A Guide for the Serious Collector',
      tag: 'Craft · Heritage · Design',
      excerpt: 'From Varanasi silk to Jaipur block-print, from Kutchi embroidery to Nilgiri bronze — where to find India\'s finest artisan works, and how to acquire them responsibly.',
      img: '/images/journal_cover_craft_1776272701541.png',
      alt: 'Silk weaving craft',
    },
  ];

  const archivedArticles = [
    {
      tag: 'Gastronomy',
      title: 'The Private Kitchens of Rajasthan: Royal Recipes and the Cooks Who Guard Them',
    },
    {
      tag: 'Wellness',
      title: 'Why Kerala\'s Ayurveda Retreats Are Incomparable — and How to Find the Right One',
    },
    {
      tag: 'Architecture',
      title: 'Stepwells of India: The Forgotten Architecture of Extraordinary Beauty',
    },
  ];

  return (
    <main className="page-journal">
      {/* Featured Article Hero */}
      <header className="page-hero">
        <img
          src="/images/journal_hero_1776334864022.png"
          alt="Silk weaving artisan in Varanasi"
          className="page-hero-image"
          fetchPriority="high"
        />
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content container">
          <span className="page-hero-label">Featured · Heritage &amp; Craft</span>
          <h1 className="page-hero-title">The Weavers of Varanasi: A Living Tradition in Silk</h1>
          <p className="page-hero-sub">
            On the narrow lanes of the holy city, a craft unchanged for three thousand years continues — and Elevated India will take you inside it.
          </p>
          <div style={{ marginTop: 'var(--space-6)' }}>
            <Link href="/contact" className="btn btn-outline-ivory gsap-fade-up" id="featured-article-btn">
              Discuss a Cultural Journey
            </Link>
          </div>
        </div>
      </header>

      {/* Journal Intro */}
      <section className="section-sm section-champagne" style={{ borderBottom: '1px solid var(--stone-dark)' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <p className="t-section-label gsap-fade-up">The Elevated India Journal</p>
          <span className="gold-line"></span>
          <p className="t-body-md gsap-fade-up" style={{ maxWidth: '580px', margin: '0 auto', color: 'var(--charcoal)', transitionDelay: '150ms' }}>
            An editorial guide to India's most extraordinary places, traditions, and experiences — written with the same care and depth that defines every journey we design.
          </p>
        </div>
      </section>

      {/* Journal Grid */}
      <section className="section" id="journal-articles" aria-label="Journal articles">
        <div className="container">
          <div className="grid-3">
            {articles.map((art, i) => (
              <Link key={art.id} href="/contact" className="journal-card gsap-fade-up" id={art.id} style={{ transitionDelay: `${(i % 3) * 150}ms` }}>
                <motion.div
                  className="journal-card-inner"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                >
                  <div className="journal-card-image-wrap">
                    <img
                      src={art.img}
                      alt={art.alt}
                      className="journal-card-image"
                      loading="lazy"
                    />
                  </div>
                  <span className="journal-card-tag">{art.tag}</span>
                  <h2 className="journal-card-title">{art.title}</h2>
                  <p className="journal-card-excerpt">{art.excerpt}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* More Articles Teaser */}
      <section className="section section-stone" id="journal-more">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <span className="t-section-label gsap-fade-up">From Our Editorial Archive</span>
          <span className="gold-line"></span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)', marginBottom: 'var(--space-10)' }}>
            {archivedArticles.map((archive, i) => (
              <div
                key={archive.title}
                className="gsap-fade-up"
                style={{
                  textAlign: 'left',
                  padding: 'var(--space-5) 0',
                  borderBottom: '1px solid var(--stone-dark)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 'var(--space-8)',
                  transitionDelay: `${i * 150}ms`,
                }}
              >
                <div>
                  <span className="t-section-label">{archive.tag}</span>
                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'var(--text-xl)',
                      color: 'var(--charcoal)',
                      marginTop: 'var(--space-2)',
                    }}
                  >
                    {archive.title}
                  </p>
                </div>
                <Link href="/contact" className="text-link" style={{ whiteSpace: 'nowrap' }}>
                  Read
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section" id="journal-newsletter">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <span className="t-section-label gsap-fade-up">The Elevated India Brief</span>
          <span className="gold-line"></span>
          <h2 className="t-headline gsap-fade-up" style={{ transitionDelay: '150ms' }}>
            Rare Insight, Delivered Privately
          </h2>
          <p className="t-body gsap-fade-up" style={{ maxWidth: '520px', margin: 'var(--space-5) auto var(--space-8)', transitionDelay: '300ms' }}>
            Occasional dispatches on India's finest experiences, seasonal recommendations, and editorial perspectives from our curatorial team. Never promotional. Always worth reading.
          </p>
          <form
            id="newsletter-form"
            onSubmit={handleSubscribe}
            style={{
              display: 'flex',
              gap: 'var(--space-3)',
              maxWidth: '440px',
              margin: '0 auto',
            }}
            className="gsap-fade-up"
            style={{ transitionDelay: '450ms' }}
          >
            <input
              type="email"
              id="newsletter-email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="form-input"
              style={{ flex: 1 }}
              aria-label="Email address for newsletter"
            />
            <button
              type="submit"
              className="btn btn-dark"
              style={{
                whiteSpace: 'nowrap',
                backgroundColor: subscribed ? 'var(--forest)' : '',
                borderColor: subscribed ? 'var(--forest)' : '',
              }}
              id="newsletter-submit-btn"
              disabled={subscribed || submitting}
            >
              {subscribed ? 'Subscribed ✓' : 'Subscribe'}
            </button>
          </form>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--text-xs)',
              color: 'var(--charcoal-light)',
              marginTop: 'var(--space-4)',
            }}
            className="gsap-fade-up"
            style={{ transitionDelay: '600ms' }}
          >
            No frequency commitments. Unsubscribe at any time. Your details remain private.
          </p>
        </div>
      </section>
    </main>
  );
}
