/* ==========================================================================
   LEXKARA & CO — Production JavaScript
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- Dark Mode Toggle ---------- */
  const THEME_KEY = 'lexkara-theme';

  function getPreferredTheme() {
    // Check in-memory preference first (storage APIs unavailable in sandbox)
    if (window.__lexkaraTheme) return window.__lexkaraTheme;
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'light';
  }

  function setTheme(theme) {
    window.__lexkaraTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    updateToggleIcon(theme);
  }

  function updateToggleIcon(theme) {
    const toggles = document.querySelectorAll('.theme-toggle');
    toggles.forEach(toggle => {
      const moonIcon = toggle.querySelector('.icon-moon');
      const sunIcon = toggle.querySelector('.icon-sun');
      if (moonIcon && sunIcon) {
        if (theme === 'dark') {
          moonIcon.style.display = 'none';
          sunIcon.style.display = 'block';
        } else {
          moonIcon.style.display = 'block';
          sunIcon.style.display = 'none';
        }
      }
    });
  }

  function initTheme() {
    const theme = getPreferredTheme();
    setTheme(theme);

    document.querySelectorAll('.theme-toggle').forEach(toggle => {
      toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        setTheme(next);
      });
    });
  }

  /* ---------- Sticky Nav Border ---------- */
  function initNavScroll() {
    const nav = document.querySelector('.nav');
    if (!nav) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          nav.classList.add('nav--scrolled');
        } else {
          nav.classList.remove('nav--scrolled');
        }
      },
      { threshold: 0, rootMargin: '-1px 0px 0px 0px' }
    );

    // Create sentinel element at top of page
    const sentinel = document.createElement('div');
    sentinel.style.position = 'absolute';
    sentinel.style.top = '0';
    sentinel.style.height = '1px';
    sentinel.style.width = '100%';
    sentinel.style.pointerEvents = 'none';
    document.body.prepend(sentinel);
    observer.observe(sentinel);
  }

  /* ---------- Mobile Menu ---------- */
  function initMobileMenu() {
    const hamburger = document.querySelector('.nav__hamburger');
    const mobileMenu = document.querySelector('.nav__mobile-menu');
    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.contains('active');
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- Scroll Reveal (Intersection Observer) ---------- */
  function initReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      reveals.forEach(el => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach(el => observer.observe(el));
  }

  /* ---------- Smooth Scroll for Anchor Links ---------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ---------- Contact Form Handler (mailto fallback) ---------- */
  function initContactForm() {
    const form = document.querySelector('#contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const formData = new FormData(form);
      const firstName = formData.get('firstName') || '';
      const lastName = formData.get('lastName') || '';
      const email = formData.get('email') || '';
      const phone = formData.get('phone') || '';
      const matterType = formData.get('matterType') || '';
      const message = formData.get('message') || '';

      const subject = encodeURIComponent(`Enquiry from ${firstName} ${lastName} — ${matterType}`);
      const body = encodeURIComponent(
        `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMatter Type: ${matterType}\n\n${message}`
      );

      window.open(`mailto:enquiries@lexkara.co?subject=${subject}&body=${body}`, '_blank');
    });
  }

  /* ---------- Active Nav Link ---------- */
  function initActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav__link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('nav__link--active');
      }
    });
  }

  /* ---------- Initialize ---------- */
  function init() {
    initTheme();
    initNavScroll();
    initMobileMenu();
    initReveal();
    initSmoothScroll();
    initContactForm();
    initActiveNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
