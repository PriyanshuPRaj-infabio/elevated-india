/* ========================================================
   ELEVATED INDIA — MAIN JS
   main.js — Navigation, Scroll Animations, UI
   ======================================================== */

(function () {
  'use strict';

  // ── Nav Scroll Behavior ──────────────────────────────
  const nav = document.getElementById('main-nav');
  const navBurger = document.getElementById('nav-burger');
  const navMobile = document.getElementById('nav-mobile');
  const isHeroPage = document.querySelector('.hero, .page-hero') !== null;

  function updateNav() {
    if (!nav) return;
    const scrolled = window.scrollY > 60;
    if (scrolled) {
      nav.classList.add('scrolled');
      nav.classList.remove('transparent');
    } else {
      if (isHeroPage) {
        nav.classList.remove('scrolled');
        nav.classList.add('transparent');
      }
    }
  }

  if (nav) {
    if (isHeroPage) nav.classList.add('transparent');
    else nav.classList.add('scrolled');
    window.addEventListener('scroll', updateNav, { passive: true });
  }

  // ── Hamburger Menu ───────────────────────────────────
  if (navBurger && navMobile) {
    navBurger.addEventListener('click', () => {
      const isOpen = navMobile.classList.toggle('open');
      navBurger.classList.toggle('open', isOpen);
      navBurger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    navMobile.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMobile.classList.remove('open');
        navBurger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !navMobile.contains(e.target)) {
        navMobile.classList.remove('open');
        navBurger.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // ── Active Nav Link ──────────────────────────────────
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .nav-mobile-link').forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ── IntersectionObserver Fade Animations ─────────────
  const fadeTargets = document.querySelectorAll('.fade-up, .fade-in');

  if (fadeTargets.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    fadeTargets.forEach(el => observer.observe(el));
  }

  // ── Smooth Scroll for Anchor Links ──────────────────
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 88;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ── Hero Slider ──────────────────────────────────────
  const heroSlides = document.querySelectorAll('.hero-slide');
  if (heroSlides.length > 1) {
    let currentSlide = 0;
    setInterval(() => {
      heroSlides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % heroSlides.length;
      heroSlides[currentSlide].classList.add('active');
    }, 5000);
  }

  // ── Number Counter Animation ─────────────────────────
  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1600;
    const start = performance.now();
    const suffix = el.dataset.suffix || '';

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  const counters = document.querySelectorAll('[data-counter]');
  if (counters.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => counterObserver.observe(el));
  }

  // ── Lazy Load Images ─────────────────────────────────
  if ('loading' in HTMLImageElement.prototype) {
    document.querySelectorAll('img[data-src]').forEach(img => {
      img.src = img.dataset.src;
    });
  } else {
    const imgObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          imgObserver.unobserve(img);
        }
      });
    });
    document.querySelectorAll('img[data-src]').forEach(img => imgObserver.observe(img));
  }

  // ── Card Tilt Micro-interaction ──────────────────────
  function addTiltEffect(selector) {
    document.querySelectorAll(selector).forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) scale(1.01)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = 'transform 0.5s ease';
      });
      card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.1s ease';
      });
    });
  }

  addTiltEffect('.diff-item');
  addTiltEffect('.step-card');

})();
