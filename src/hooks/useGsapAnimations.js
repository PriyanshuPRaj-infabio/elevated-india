import { useEffect } from 'react';

export default function useGsapAnimations() {
  useEffect(() => {
    const animatedElements = Array.from(
      document.querySelectorAll('.gsap-fade-up, .gsap-fade-in')
    );

    if (!animatedElements.length) return undefined;

    if (!('IntersectionObserver' in window)) {
      animatedElements.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: '0px 0px -7% 0px',
        threshold: 0.01,
      }
    );

    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
