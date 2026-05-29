"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const slides = [
  {
    id: "rajasthan",
    video: "/videos/rajasthan.mp4",
    poster: "/images/rajasthan_palace_exterior_1776272664878.png",
    eyebrow: "A Private Travel House",
    title: "Elevated\nIndia.",
    subtitle: "Bespoke journeys crafted with rare access, cultural depth, and uncompromising discretion.",
  },
  {
    id: "tiger",
    video: "/videos/tiger.mp4",
    poster: "/images/tiger_safari_1776272603448.png",
    eyebrow: "Wilderness Expeditions",
    title: "Untamed\nElegance.",
    subtitle: "Track apex predators in their natural habitat with our elite naturalists.",
  },
  {
    id: "peacock",
    video: "/videos/peacock.mp4",
    poster: "/images/hero_palace_lake_1776272480532.png",
    eyebrow: "Exotic Avifauna",
    title: "Vibrant\nEcosystems.",
    subtitle: "Discover the pulsating heartbeat of India's most colorful sanctuaries.",
  },
  {
    id: "tiger1",
    video: "/videos/tiger-1.mp4",
    poster: "/images/tiger_safari_1776272603448.png",
    eyebrow: "Conservation First",
    title: "Respect\nThe Wild.",
    subtitle: "Experience safaris designed to protect and honor the majestic Bengal Tiger.",
  },
];

export default function HeroVideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [firstVideoReady, setFirstVideoReady] = useState(false);
  const videoRefs = useRef([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    const handleChange = (e) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    if (isReducedMotion) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [isReducedMotion]);

  // Play/pause videos based on active index
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === currentIndex) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [currentIndex]);

  const handleFirstCanPlay = useCallback(() => {
    setFirstVideoReady(true);
  }, []);

  return (
    <div className="hero-video-container">
      {/* Background Videos — all mounted, visibility toggled via CSS opacity */}
      <div className="hero-media-wrapper">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          // First video: eager load. Others: load only after first is ready.
          const shouldLoad = index === 0 || firstVideoReady;

          return (
            <div
              key={slide.id}
              className="hero-media-layer"
              style={{
                opacity: isActive ? 1 : 0,
                transition: "opacity 1.2s ease-in-out",
                zIndex: isActive ? 1 : 0,
              }}
            >
              {isReducedMotion ? (
                <div
                  className="hero-static-poster"
                  style={{ backgroundImage: `url(${slide.poster})` }}
                />
              ) : (
                <div className="hero-video-zoom-wrapper">
                  {shouldLoad && (
                    <video
                      ref={(el) => { videoRefs.current[index] = el; }}
                      src={slide.video}
                      poster={slide.poster}
                      muted
                      loop
                      playsInline
                      preload={index === 0 ? "auto" : "metadata"}
                      onCanPlay={index === 0 ? handleFirstCanPlay : undefined}
                      className="hero-video is-loaded"
                      style={{ opacity: 1 }}
                    />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Atmospheric Overlays */}
      <div className="hero-overlay-dark-gradient" />
      <div className="hero-overlay-gold-vignette" />

      {/* Hero Content */}
      <div className="hero-content" style={{ zIndex: 10 }}>
        <div
          key={`text-${currentIndex}`}
          className="hero-text-animator hero-text-fade-in"
        >
          <p className="hero-eyebrow">{slides[currentIndex].eyebrow}</p>
          <h1 className="hero-title" style={{ whiteSpace: "pre-line" }}>
            {slides[currentIndex].title}
          </h1>
          <p className="hero-subtitle">
            {slides[currentIndex].subtitle}
          </p>
        </div>

        <div className="hero-actions">
          <Link href="/contact" className="btn btn-gold btn-arrow" id="hero-cta-btn">
            Begin Your Journey
          </Link>
          <Link href="/journeys" className="btn btn-outline-ivory" id="hero-journeys-btn">
            Explore Journeys
          </Link>
        </div>
      </div>
    </div>
  );
}
