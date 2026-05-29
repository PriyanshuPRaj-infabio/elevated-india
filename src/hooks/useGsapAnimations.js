import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function useGsapAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const fadeUps = gsap.utils.toArray('.gsap-fade-up');
    fadeUps.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 93%',
            toggleActions: 'play none none none',
            once: true,
          }
        }
      );
    });

    const fadeInElements = gsap.utils.toArray('.gsap-fade-in');
    fadeInElements.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.9,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 93%',
            toggleActions: 'play none none none',
            once: true,
          }
        }
      );
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
}
