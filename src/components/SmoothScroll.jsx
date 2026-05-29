"use client";

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis — autoRaf MUST be false when using GSAP ticker as the single animation loop
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      autoRaf: false, // GSAP ticker is the single source of truth
    });

    // Synchronize Lenis scrolling with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Single unified animation loop via GSAP ticker
    const onTick = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(onTick);

    // Disable lag smoothing in GSAP to avoid late animation calls
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(onTick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
