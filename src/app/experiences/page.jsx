"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useGsapAnimations from '@/hooks/useGsapAnimations';

export default function ExperiencesPage() {
  useGsapAnimations();

  const experiences = [
    {
      id: 'royal-heritage',
      num: '01',
      title: 'Royal Residences & Palace Life',
      body: 'To sleep in a palace is different from sleeping in a luxury hotel. It is to inhabit a living chapter of Indian history. We secure private stays in working royal estates, exclusive palace suites, and heritage havelis whose doors do not open to the public — only to guests of Elevated India.',
      extra: 'Curated cultural access, private meetings with descendants of royal families, and evenings that feel drawn from another century.',
      img: '/images/palace_interior_1776272621551.png',
      alt: 'Palace interior arches',
      cta: 'Design a Royal Journey',
      dark: false,
    },
    {
      id: 'wellness-experience',
      num: '02',
      title: 'Wellness & Restoration',
      body: 'India is the original source of healing knowledge. From authentic Ayurvedic panchakarma in Kerala\'s private retreats to meditation in Himalayan monasteries and yoga in ashrams that predate the contemporary wellness industry — we design restorative journeys of profound depth.',
      extra: 'Not a spa break. A genuine return.',
      img: '/images/ayurveda_wellness_1776272638098.png',
      alt: 'Ayurveda wellness room',
      cta: 'Design a Wellness Journey',
      dark: true,
    },
    {
      id: 'wildlife-experience',
      num: '03',
      title: 'Wilderness & Private Safaris',
      body: 'India\'s wild reserves are among the most extraordinary on earth. The Bengal tiger. The Asiatic lion. The one-horned rhinoceros. We secure private vehicles, expert naturalists, and exclusive jungle lodge accommodations — giving you the space to encounter wildlife with patience and without crowds.',
      extra: 'Kanha. Bandhavgarh. Kaziranga. Ranthambore. Panna. Each one a world unto itself.',
      img: '/images/tiger_safari_1776272603448.png',
      alt: 'Tiger in forest',
      cta: 'Design a Wildlife Journey',
      path: '/experiences/safari',
      dark: false,
    },
    {
      id: 'spiritual-experience',
      num: '04',
      title: 'Spiritual & Sacred Journeys',
      body: 'Varanasi at dawn. Rishikesh at dusk. The silence of a Himalayan hermitage. India holds more living spiritual traditions than any other land — and we approach them with sensitivity, scholarship, and genuine reverence.',
      extra: 'We do not design spiritual tourism. We design genuine spiritual encounter.',
      img: '/images/varanasi_ghats_1776272579374.png',
      alt: 'Varanasi ghats',
      cta: 'Design a Sacred Journey',
      dark: true,
    },
    {
      id: 'gastronomy-experience',
      num: '05',
      title: 'Gastronomy & Private Dining',
      body: 'Indian cuisine is among the most complex on earth — a mosaic of regional traditions, ancient techniques, and seasonal intelligence. We design intimate culinary journeys: private dinners with palace chefs, market forays with local cooks, royal family recipes shared for the first time.',
      extra: 'Every meal is a story. Every table, a memory.',
      img: '/images/palace_dining_1776272561908.png',
      alt: 'Private palace dining',
      cta: 'Design a Culinary Journey',
      dark: false,
    },
    {
      id: 'culture-experience',
      num: '06',
      title: 'Art, Craft & Cultural Immersion',
      body: 'India\'s artistic traditions are living, breathing, and deeply local. We take you to the weavers of Varanasi, the miniature painters of Jaipur, the block-printers of Bagru — not as a spectator, but as a guest. Private studio visits, master-class sessions, and acquisition of significant artisan works.',
      extra: 'Art is best encountered in its place of creation.',
      img: '/images/journal_cover_craft_1776272701541.png',
      alt: 'Artisan weaving silk',
      cta: 'Design a Cultural Journey',
      dark: true,
    },
  ];

  return (
    <main className="page-experiences">
      {/* Page Hero */}
      <header className="page-hero">
        <img
          src="/images/experiences_hero_1776334780617.png"
          alt="Private candlelit dinner in ancient fort"
          className="page-hero-image"
          fetchPriority="high"
        />
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content container">
          <span className="page-hero-label">Categories of Aspiration</span>
          <h1 className="page-hero-title">The Shape of Experience</h1>
          <p className="page-hero-sub">Not destinations. Not itineraries. The feeling you came for.</p>
        </div>
      </header>

      {/* Intro */}
      <section className="section-sm section-champagne" style={{ borderBottom: '1px solid var(--stone-dark)' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <p className="t-section-label gsap-fade-up">What Moves You</p>
          <span className="gold-line"></span>
          <p className="t-body-md gsap-fade-up" style={{ maxWidth: '620px', margin: '0 auto', color: 'var(--charcoal)', transitionDelay: '150ms' }}>
            Every journey at Elevated India begins with a question — not where do you want to go, but what do you want to feel, understand, or become? These are the categories through which we design.
          </p>
        </div>
      </section>

      {/* Experience Sections */}
      {experiences.map((exp, index) => {
        const textContent = (
          <div className={`experience-text-col ${exp.dark ? 'dark' : ''}`}>
            <span className="t-section-label gsap-fade-up">{exp.num}</span>
            <span className="gold-line gold-line-left gsap-fade-up" style={{ transitionDelay: '150ms' }}></span>
            <h2
              className="t-headline gsap-fade-up"
              style={{
                color: exp.dark ? 'var(--ivory)' : 'inherit',
                marginBottom: 'var(--space-5)',
                transitionDelay: '300ms',
              }}
            >
              {exp.title}
            </h2>
            <p
              className="gsap-fade-up"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-base)',
                fontWeight: 300,
                color: exp.dark ? 'rgba(247,243,238,0.7)' : 'var(--charcoal-light)',
                lineHeight: 1.75,
                marginBottom: 'var(--space-6)',
                transitionDelay: '450ms',
              }}
            >
              {exp.body}
            </p>
            <p
              className="gsap-fade-up"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-base)',
                fontWeight: 300,
                color: exp.dark ? 'rgba(247,243,238,0.7)' : 'var(--charcoal-light)',
                lineHeight: 1.75,
                marginBottom: 'var(--space-8)',
                transitionDelay: '600ms',
              }}
            >
              {exp.extra}
            </p>
            <Link
              href={exp.path || "/contact"}
              className="text-link gsap-fade-up"
              style={{
                color: exp.dark ? 'var(--gold-light)' : 'var(--gold)',
                transitionDelay: '750ms',
              }}
            >
              {exp.cta}
            </Link>
          </div>
        );

        const imageContent = (
          <div className="experience-image-col">
            <motion.img
              src={exp.img}
              alt={exp.alt}
              className="experience-section-image"
              loading="lazy"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        );

        return (
          <div key={exp.id} className="experience-section" id={exp.id}>
            {/* Even items put text first in original CSS? Actually original CSS alternated layouts or used grid order.
                Let's maintain the HTML structure directly so the layout engine works exactly as written in original CSS.
                HTML 1: image first, text second.
                HTML 2: text first, image second.
                Let's replicate this alternation: */}
            {index % 2 === 0 ? (
              <>
                {imageContent}
                {textContent}
              </>
            ) : (
              <>
                {textContent}
                {imageContent}
              </>
            )}
          </div>
        );
      })}

      {/* Celebrations CTA */}
      <section className="section section-stone" id="celebrations-cta">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <span className="t-section-label gsap-fade-up">Celebrations &amp; Milestones</span>
          <span className="gold-line"></span>
          <h2 className="t-headline gsap-fade-up" style={{ transitionDelay: '150ms' }}>
            India as the Greatest Setting
          </h2>
          <p className="t-body gsap-fade-up" style={{ maxWidth: '600px', margin: 'var(--space-5) auto var(--space-10)', transitionDelay: '300ms' }}>
            A wedding in a private palace courtyard. An anniversary dinner in a desert camp under the stars. A multigenerational celebration in a heritage estate. India offers settings for life's most important moments that exist nowhere else on earth. We make them happen flawlessly.
          </p>
          <Link href="/contact" className="btn btn-dark btn-arrow gsap-fade-up" id="celebrations-inquiry-btn" style={{ transitionDelay: '450ms' }}>
            Enquire About Your Celebration
          </Link>
        </div>
      </section>
    </main>
  );
}
