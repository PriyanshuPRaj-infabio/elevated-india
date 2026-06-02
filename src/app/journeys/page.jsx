"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import useGsapAnimations from "@/hooks/useGsapAnimations";
import { JOURNEYS } from "@/data/journeysData";
import HeroVideoSlider from "@/components/HeroVideoSlider";
import LottieScroll from "@/components/LottieScroll";

export default function JourneysPage() {
  const router = useRouter();
  useGsapAnimations();

  const allJourneys = [
    {
      title: JOURNEYS["palace-on-wheels"].title,
      durationText: "16 DAYS",
      badges: [{ text: "PRIVATE READY-TO-BOOK", type: "white" }, { text: "OFFER", type: "offer" }],
      itineraryList: "Delhi - Jaipur - Sawai Madhopur - Chittorgarh - Udaipur - Jaisalmer - Jodhpur - Bharatpur - Agra - Delhi",
      img: JOURNEYS["palace-on-wheels"].heroImage,
      alt: JOURNEYS["palace-on-wheels"].title,
      href: "/journeys/palace-on-wheels",
    },
    {
      title: JOURNEYS["maharaja-express"].title,
      durationText: "15 DAYS",
      badges: [{ text: "SMALL GROUP JOURNEYS", type: "white" }, { text: "OFFER", type: "offer" }],
      itineraryList: "Delhi - Jodhpur - Nimaj Oasis - Jaipur - Agra - Khajuraho - Varanasi",
      img: JOURNEYS["maharaja-express"].heroImage,
      alt: JOURNEYS["maharaja-express"].title,
      href: "/journeys/maharaja-express",
    },
    {
      title: JOURNEYS["golden-triangle-kathmandu"].title,
      durationText: "12 DAYS",
      badges: [{ text: "PRIVATE READY-TO-BOOK", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Delhi - Agra - Jaipur - Delhi - Kathmandu Valley",
      img: JOURNEYS["golden-triangle-kathmandu"].heroImage,
      alt: JOURNEYS["golden-triangle-kathmandu"].title,
      href: "/journeys/golden-triangle-kathmandu",
    },
    {
      title: JOURNEYS["lgbtq-tour"].title,
      durationText: "16 DAYS",
      badges: [{ text: "INCLUSIVE LUXURY", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Delhi - Agra - Aman Bagh - Jaipur - Deogarh - Udaipur - Ahmedabad - Vadodara - Rajpipla - Vadodara - Ahmedabad",
      img: JOURNEYS["lgbtq-tour"].heroImage,
      alt: JOURNEYS["lgbtq-tour"].title,
      href: "/journeys/lgbtq-tour",
    },
    {
      title: JOURNEYS["culinary-tour-13"].title,
      durationText: "13 DAYS",
      badges: [{ text: "CULINARY EXPEDITION", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Delhi - Agra - Lucknow - Varanasi - Jaipur - Kolkata",
      img: JOURNEYS["culinary-tour-13"].heroImage,
      alt: JOURNEYS["culinary-tour-13"].title,
      href: "/journeys/culinary-tour-13",
    },
    {
      title: JOURNEYS["culinary-tour-16"].title,
      durationText: "16 DAYS",
      badges: [{ text: "CULINARY ODYSSEY", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Delhi - Agra - Jaipur - Mumbai - Hyderabad - Cochin",
      img: JOURNEYS["culinary-tour-16"].heroImage,
      alt: JOURNEYS["culinary-tour-16"].title,
      href: "/journeys/culinary-tour-16",
    },
    {
      title: JOURNEYS["kerala-culture-11"].title,
      durationText: "11 DAYS",
      badges: [{ text: "CULTURE & HERITAGE", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Mumbai - Cochin - Alleppey - Kumarakom - Munnar - Cochin",
      img: JOURNEYS["kerala-culture-11"].heroImage,
      alt: JOURNEYS["kerala-culture-11"].title,
      href: "/journeys/kerala-culture-11",
    },
    {
      title: JOURNEYS["kerala-culture-beach-13"].title,
      durationText: "13 DAYS",
      badges: [{ text: "CULTURE & BEACH", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Mumbai - Cochin - Munnar - Alleppey - Marari - Cochin",
      img: JOURNEYS["kerala-culture-beach-13"].heroImage,
      alt: JOURNEYS["kerala-culture-beach-13"].title,
      href: "/journeys/kerala-culture-beach-13",
    },
    {
      title: JOURNEYS["goa-kerala-culture-10"].title,
      durationText: "10 DAYS",
      badges: [{ text: "GOA & KERALA", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Mumbai - Goa - Cochin - Kumarakom - Cochin",
      img: JOURNEYS["goa-kerala-culture-10"].heroImage,
      alt: JOURNEYS["goa-kerala-culture-10"].title,
      href: "/journeys/goa-kerala-culture-10",
    },
    {
      title: "The Wild Heart of India (Tiger Safari)",
      durationText: "8-10 DAYS",
      badges: [{ text: "WILDLIFE EXPEDITION", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Delhi - Kanha National Park - Bandhavgarh National Park - Delhi",
      img: "/images/25-bandhavgarhnationalpark1.jpg",
      alt: "Tiger in jungle",
      href: "/experiences/safari",
    },
    {
      title: JOURNEYS["temple-tour"].title,
      durationText: "12 DAYS",
      badges: [{ text: "PRIVATE READY-TO-BOOK", type: "white" }],
      itineraryList: "Chennai - Mahabalipuram - Pondicherry - Tanjore - Madurai - Periyar - Kumarakom - Cochin",
      img: JOURNEYS["temple-tour"].heroImage,
      alt: JOURNEYS["temple-tour"].title,
      href: "/journeys/temple-tour",
    },
    {
      title: JOURNEYS["metro-cities-culture"].title,
      durationText: "12 DAYS",
      badges: [{ text: "SMALL GROUP JOURNEYS", type: "white" }],
      itineraryList: "Kolkata - Varanasi - Delhi - Jaipur - Mumbai",
      img: JOURNEYS["metro-cities-culture"].heroImage,
      alt: JOURNEYS["metro-cities-culture"].title,
      href: "/journeys/metro-cities-culture",
    },
  ];

  return (
    <main className="page-journeys">
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

      {/* Intro */}
      <section className="section-sm section-champagne" style={{ borderBottom: "1px solid var(--stone-dark)" }}>
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <p className="t-section-label gsap-fade-up">How We Think About Journeys</p>
          <span className="gold-line"></span>
          <p className="t-subheadline gsap-fade-up" style={{ color: "var(--charcoal)", maxWidth: "640px", margin: "0 auto", transitionDelay: "150ms" }}>
            These are not fixed itineraries. They are compositions — starting points from which your journey will be individually shaped around your travel dates, preferences, and pace.
          </p>
        </div>
      </section>

      {/* Journeys Catalog Grid */}
      <section className="section" id="journeys-catalog" aria-label="Journeys catalog" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="journeys-grid-catalog gsap-fade-in">
            {allJourneys.map((journey) => (
              <motion.article
                key={journey.title}
                className="luxury-journey-card"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={() => router.push(journey.href)}
              >
                {/* Image Section */}
                <div className="luxury-card-image-wrapper">
                  <img
                    src={journey.img}
                    alt={journey.alt}
                    className="luxury-card-image"
                    loading="lazy"
                  />
                  <div className="luxury-card-badges">
                    {journey.badges.map((badge, idx) => (
                      <span key={idx} className={`luxury-badge luxury-badge-${badge.type}`}>
                        {badge.text}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Body Content */}
                <div className="luxury-card-body">
                  <h3 className="luxury-card-title">{journey.title}</h3>

                  <div className="luxury-card-duration">
                    {journey.durationText}
                  </div>

                  <div className="luxury-card-itinerary">
                    <span className="luxury-itinerary-heading">ITINERARY</span>
                    <p className="luxury-itinerary-list">{journey.itineraryList}</p>
                  </div>
                </div>

                {/* Footer Section */}
                <div className="luxury-card-footer">
                  <button className="luxury-card-btn">
                    View Journey
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Note */}
      <section className="section section-champagne" id="bespoke-note">
        <div className="container-narrow" style={{ textAlign: "center" }}>
          <span className="t-section-label gsap-fade-up">Not Seeing Your Vision?</span>
          <span className="gold-line"></span>
          <h2 className="t-headline gsap-fade-up" style={{ transitionDelay: "150ms" }}>
            Every Journey Can Be Created From Scratch
          </h2>
          <p className="t-body gsap-fade-up" style={{ maxWidth: "580px", margin: "var(--space-4) auto var(--space-10)", transitionDelay: "300ms" }}>
            These journeys are starting points — frameworks, not formulas. Tell us what India means to you and we will design something that has never existed before.
          </p>
          <Link href="/contact" className="btn btn-dark btn-arrow gsap-fade-up" id="bespoke-inquiry-btn" style={{ transitionDelay: "450ms" }}>
            Design My Journey
          </Link>
        </div>
      </section>
    </main>
  );
}
