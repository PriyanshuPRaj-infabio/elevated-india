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
      title: JOURNEYS["golden-triangle-classic"].title,
      durationText: "9 DAYS",
      badges: [{ text: "PRIVATE READY-TO-BOOK", type: "white" }, { text: "HERITAGE", type: "new" }],
      itineraryList: "Delhi - Agra - Jaipur - Delhi",
      img: JOURNEYS["golden-triangle-classic"].heroImage,
      alt: JOURNEYS["golden-triangle-classic"].title,
      href: "/journeys/golden-triangle-classic",
    },
    {
      title: JOURNEYS["cultural-wildlife"].title,
      durationText: "12 DAYS",
      badges: [{ text: "WILDLIFE & CULTURE", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Delhi - Agra - Ranthambore - Jaipur - Delhi",
      img: JOURNEYS["cultural-wildlife"].heroImage,
      alt: JOURNEYS["cultural-wildlife"].title,
      href: "/journeys/cultural-wildlife",
    },
    {
      title: JOURNEYS["spiritual-culture"].title,
      durationText: "11 DAYS",
      badges: [{ text: "SPIRITUAL EXPEDITION", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Delhi - Varanasi - Jaipur - Agra - Delhi",
      img: JOURNEYS["spiritual-culture"].heroImage,
      alt: JOURNEYS["spiritual-culture"].title,
      href: "/journeys/spiritual-culture",
    },
    {
      title: JOURNEYS["palace-spiritual"].title,
      durationText: "13 DAYS",
      badges: [{ text: "TEMPLE & PALACE", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Delhi - Khajuraho - Varanasi - Jaipur - Agra - Delhi",
      img: JOURNEYS["palace-spiritual"].heroImage,
      alt: JOURNEYS["palace-spiritual"].title,
      href: "/journeys/palace-spiritual",
    },
    {
      title: JOURNEYS["palace-culture"].title,
      durationText: "13 DAYS",
      badges: [{ text: "ROYAL ESTATES", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Delhi - Agra - Jaipur - Shahpura Bagh - Udaipur - Delhi",
      img: JOURNEYS["palace-culture"].heroImage,
      alt: JOURNEYS["palace-culture"].title,
      href: "/journeys/palace-culture",
    },
    {
      title: JOURNEYS["palace-culture-19"].title,
      durationText: "19 DAYS",
      badges: [{ text: "GRAND DESERT PASSAGE", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Delhi - Jaisalmer - Jodhpur - Mihirgarh - Udaipur - Shahpura Bagh - Jaipur - Agra - Delhi",
      img: JOURNEYS["palace-culture-19"].heroImage,
      alt: JOURNEYS["palace-culture-19"].title,
      href: "/journeys/palace-culture-19",
    },
    {
      title: JOURNEYS["palace-culture-16"].title,
      durationText: "16 DAYS",
      badges: [{ text: "PALACE & WILDERNESS", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Delhi - Udaipur - Jawai - Mihirgarh - Jodhpur - Jaipur - Agra - Delhi",
      img: JOURNEYS["palace-culture-16"].heroImage,
      alt: JOURNEYS["palace-culture-16"].title,
      href: "/journeys/palace-culture-16",
    },
    {
      title: JOURNEYS["palace-culture-12"].title,
      durationText: "12 DAYS",
      badges: [{ text: "CLASSIC RAJASTHAN", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Delhi - Agra - Jaipur - Pushkar - Udaipur",
      img: JOURNEYS["palace-culture-12"].heroImage,
      alt: JOURNEYS["palace-culture-12"].title,
      href: "/journeys/palace-culture-12",
    },
    {
      title: JOURNEYS["palace-culture-18"].title,
      durationText: "18 DAYS",
      badges: [{ text: "ROYAL RAJASTHANI CIRCUIT", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Delhi - Agra - Jaipur - Pushkar - Udaipur - Jawai - Jodhpur - Jaisalmer - Delhi",
      img: JOURNEYS["palace-culture-18"].heroImage,
      alt: JOURNEYS["palace-culture-18"].title,
      href: "/journeys/palace-culture-18",
    },
    {
      title: JOURNEYS["palace-wildlife-13"].title,
      durationText: "13 DAYS",
      badges: [{ text: "PALACES & WILDLIFE", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Delhi - Agra - Amanbagh - Ranthambore - Jaipur - Delhi",
      img: JOURNEYS["palace-wildlife-13"].heroImage,
      alt: JOURNEYS["palace-wildlife-13"].title,
      href: "/journeys/palace-wildlife-13",
    },
    {
      title: JOURNEYS["culture-beach-14"].title,
      durationText: "14 DAYS",
      badges: [{ text: "COASTAL HERITAGE", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Delhi - Agra - Jaipur - Mumbai - Goa",
      img: JOURNEYS["culture-beach-14"].heroImage,
      alt: JOURNEYS["culture-beach-14"].title,
      href: "/journeys/culture-beach-14",
    },
    {
      title: JOURNEYS["palace-spiritual-beach-15"].title,
      durationText: "15 DAYS",
      badges: [{ text: "TEMPLE & SHORES", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Delhi - Amritsar - Jaipur - Udaipur - Goa",
      img: JOURNEYS["palace-spiritual-beach-15"].heroImage,
      alt: JOURNEYS["palace-spiritual-beach-15"].title,
      href: "/journeys/palace-spiritual-beach-15",
    },
    {
      title: JOURNEYS["north-south-culture-16"].title,
      durationText: "16 DAYS",
      badges: [{ text: "NORTH & SOUTH", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Delhi - Agra - Jaipur - Cochin - Munnar - Kumarakom",
      img: JOURNEYS["north-south-culture-16"].heroImage,
      alt: JOURNEYS["north-south-culture-16"].title,
      href: "/journeys/north-south-culture-16",
    },
    {
      title: JOURNEYS["palace-tour-17"].title,
      durationText: "17 DAYS",
      badges: [{ text: "PALACE EXPEDITION", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Delhi - Agra - Jaipur - Nimaj - Jodhpur - Mihirgarh - Jawai - Udaipur",
      img: JOURNEYS["palace-tour-17"].heroImage,
      alt: JOURNEYS["palace-tour-17"].title,
      href: "/journeys/palace-tour-17",
    },
    {
      title: JOURNEYS["palace-tour-13"].title,
      durationText: "13 DAYS",
      badges: [{ text: "HERITAGE PATH", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Delhi - Agra - Jaipur - Deogarh - Udaipur",
      img: JOURNEYS["palace-tour-13"].heroImage,
      alt: JOURNEYS["palace-tour-13"].title,
      href: "/journeys/palace-tour-13",
    },
    {
      title: JOURNEYS["palace-culture-goa-16"].title,
      durationText: "16 DAYS",
      badges: [{ text: "PALACES & GOA", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Delhi - Agra - Jaipur - Nimaj - Jodhpur - Goa",
      img: JOURNEYS["palace-culture-goa-16"].heroImage,
      alt: JOURNEYS["palace-culture-goa-16"].title,
      href: "/journeys/palace-culture-goa-16",
    },
    {
      title: JOURNEYS["palace-culture-beach-18"].title,
      durationText: "18 DAYS",
      badges: [{ text: "ROYAL & SOUTHERN", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Delhi - Agra - Jaipur - Udaipur - Mumbai - Kovalam",
      img: JOURNEYS["palace-culture-beach-18"].heroImage,
      alt: JOURNEYS["palace-culture-beach-18"].title,
      href: "/journeys/palace-culture-beach-18",
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
    {
      title: JOURNEYS["enfield-tour-16"].title,
      durationText: "16 DAYS",
      badges: [{ text: "MOTORCYCLE EXPEDITION", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Jaipur - Nimaj - Jodhpur - Mihirgarh - Jawai - Udaipur - Shahpura Bagh - Jaipur",
      img: JOURNEYS["enfield-tour-16"].heroImage,
      alt: JOURNEYS["enfield-tour-16"].title,
      href: "/journeys/enfield-tour-16",
    },
    {
      title: JOURNEYS["enfield-tour-20"].title,
      durationText: "20 DAYS",
      badges: [{ text: "DESERT ENFIELD TOUR", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Jaipur - Mandawa - Bikaner - Sujan Serai - Jaisalmer - Manvar - Jodhpur - Jawai - Udaipur - Shahpura Bagh - Jaipur",
      img: JOURNEYS["enfield-tour-20"].heroImage,
      alt: JOURNEYS["enfield-tour-20"].title,
      href: "/journeys/enfield-tour-20",
    },
    {
      title: JOURNEYS["lgbtq-tour-16"].title,
      durationText: "16 DAYS",
      badges: [{ text: "INCLUSIVE HERITAGE", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Delhi - Agra - Amanbagh - Jaipur - Deogarh - Udaipur - Ahmedabad - Vadodara - Rajpipla - Vadodara",
      img: JOURNEYS["lgbtq-tour-16"].heroImage,
      alt: JOURNEYS["lgbtq-tour-16"].title,
      href: "/journeys/lgbtq-tour-16",
    },
    {
      title: JOURNEYS["wildlife-expedition-15"].title,
      durationText: "15 DAYS",
      badges: [{ text: "WILDLIFE & HERITAGE", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Delhi - Jaipur - Ranthambore - Agra - Delhi - Bandhavgarh - Delhi",
      img: JOURNEYS["wildlife-expedition-15"].heroImage,
      alt: JOURNEYS["wildlife-expedition-15"].title,
      href: "/journeys/wildlife-expedition-15",
    },
    {
      title: JOURNEYS["wildlife-safari-12"].title,
      durationText: "12 DAYS",
      badges: [{ text: "TIGER SAFARI", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Delhi - Bandhavgarh - Kanha - Pench - Nagpur",
      img: JOURNEYS["wildlife-safari-12"].heroImage,
      alt: JOURNEYS["wildlife-safari-12"].title,
      href: "/journeys/wildlife-safari-12",
    },
    {
      title: JOURNEYS["south-india-luxury-16"].title,
      durationText: "16 DAYS",
      badges: [{ text: "SOUTHERN SANCTUARY", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Bangalore - Mysore - Ooty - Cochin - Munnar - Kumarakom - Marari Beach - Cochin",
      img: JOURNEYS["south-india-luxury-16"].heroImage,
      alt: JOURNEYS["south-india-luxury-16"].title,
      href: "/journeys/south-india-luxury-16",
    },
    {
      title: JOURNEYS["mumbai-rajasthan-19"].title,
      durationText: "19 DAYS",
      badges: [{ text: "ROYAL RESIDENCY", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Mumbai - Udaipur - Jodhpur - Nimaj - Jaipur - Amanbagh - Agra - Delhi",
      img: JOURNEYS["mumbai-rajasthan-19"].heroImage,
      alt: JOURNEYS["mumbai-rajasthan-19"].title,
      href: "/journeys/mumbai-rajasthan-19",
    },
    {
      title: JOURNEYS["deccan-malabar-heritage-15"].title,
      durationText: "15 DAYS",
      badges: [{ text: "DECCAN & MALABAR", type: "white" }, { text: "NEW", type: "new" }],
      itineraryList: "Mumbai - Aurangabad - Ajanta & Ellora Caves - Hyderabad - Cochin - Alleppey - Marari Beach - Cochin",
      img: JOURNEYS["deccan-malabar-heritage-15"].heroImage,
      alt: JOURNEYS["deccan-malabar-heritage-15"].title,
      href: "/journeys/deccan-malabar-heritage-15",
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
