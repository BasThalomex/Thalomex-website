/* ═══════════════════════════════════════════════════════════
   Thalomex – main.js
   Assembles sections, sets up nav, FAB, hamburger,
   carousel, and fade-ins.
   ═══════════════════════════════════════════════════════════ */

/* ── 1. Inject sections into <main> ── */
document.getElementById('main').innerHTML =
  sectionHero +
  sectionServices +
  sectionWork +
  sectionAbout +
  sectionContact;

/* ── 2. Elements ── */
const nav       = document.getElementById('nav');
const fab       = document.getElementById('contact-fab');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

/* ── 3. Nav scroll state ── */
function updateNav() {
  const hero  = document.getElementById('hero');
  const heroH = hero ? hero.offsetHeight : window.innerHeight;
  nav.classList.toggle('scrolled', window.scrollY > heroH * 0.55);
}

window.addEventListener('scroll', updateNav, { passive: true });
window.addEventListener('resize', updateNav);
updateNav();

/* ── 4. Floating contact button ── */
function updateFab() {
  const hero  = document.getElementById('hero');
  const heroH = hero ? hero.offsetHeight : window.innerHeight;
  fab.classList.toggle('visible', window.scrollY > heroH * 0.6);
}

window.addEventListener('scroll', updateFab, { passive: true });
updateFab();

/* ── 5. Hamburger toggle ── */
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    hamburger.textContent = isOpen ? '✕' : '☰';
  });

  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
      hamburger.textContent = '☰';
    }
  });
}

/* ── 6. Work carousel ── */
(function initCarousel() {
  const track = document.getElementById('work-track');
  if (!track) return;

  const prev = document.getElementById('work-prev');
  const next = document.getElementById('work-next');

  /* Clone all cards and append — enables seamless looping */
  const origCards = Array.from(track.children);
  origCards.forEach(c => track.appendChild(c.cloneNode(true)));

  const TOTAL       = origCards.length;    // original card count
  const GAP         = 24;                  // 1.5rem in px
  let   cardW       = 0;
  let   current     = 0;                   // logical index (0-based)
  let   isAnimating = false;

  function measure() {
    const card = track.querySelector('.work-card');
    if (!card) return;
    cardW = card.offsetWidth + GAP;
  }

  /* How many cards are visible at once — 1 on mobile, 2 on desktop */
  function getStep() {
    if (!cardW) return 1;
    return Math.max(1, Math.round(track.offsetWidth / cardW));
  }

  function scrollTo(idx, animate) {
    track.style.scrollBehavior = animate ? 'smooth' : 'auto';
    track.scrollLeft = idx * cardW;
  }

  function goNext() {
    if (isAnimating) return;
    isAnimating = true;
    const step = getStep();
    current += step;
    scrollTo(current, true);

    /* If we've scrolled into the cloned set, silently reset */
    setTimeout(() => {
      if (current >= TOTAL) {
        current -= TOTAL;
        scrollTo(current, false);
      }
      isAnimating = false;
    }, 420);
  }

  function goPrev() {
    if (isAnimating) return;
    isAnimating = true;
    const step = getStep();
    current -= step;

    /* If we'd go negative, jump to the cloned end first */
    if (current < 0) {
      current += TOTAL;
      scrollTo(current + step, false);
      requestAnimationFrame(() => {
        scrollTo(current, true);
      });
    } else {
      scrollTo(current, true);
    }

    setTimeout(() => { isAnimating = false; }, 420);
  }

  window.addEventListener('resize', () => { measure(); scrollTo(current, false); });
  measure();
  scrollTo(0, false);

  if (next) next.addEventListener('click', goNext);
  if (prev) prev.addEventListener('click', goPrev);
})();

/* ── 7. Scroll-triggered fade-ins ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

/* ── 8. Full-page section snap scroll ── */
(function initFullpageScroll() {
  const SECTIONS = ['#hero', '#services', '#work', '#about', '#contact']
    .map(id => document.querySelector(id)).filter(Boolean);

  let animating = false;
  const LOCK_MS = 750; // lock duration matches smooth-scroll animation

  /* Find which section's top is currently closest to viewport top */
  function nearest() {
    let best = 0, min = Infinity;
    SECTIONS.forEach((s, i) => {
      const d = Math.abs(s.getBoundingClientRect().top);
      if (d < min) { min = d; best = i; }
    });
    return best;
  }

  function goTo(idx) {
    if (idx < 0 || idx >= SECTIONS.length || animating) return;
    animating = true;
    /* Use the same scrollTo as clicking a nav link */
    window.scrollTo({ top: SECTIONS[idx].offsetTop, behavior: 'smooth' });
    setTimeout(() => { animating = false; }, LOCK_MS);
  }

  /* ── Wheel (desktop) ── */
  window.addEventListener('wheel', function(e) {
    /* Let horizontal scroll pass through (carousel) */
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    e.preventDefault();
    if (!animating) goTo(nearest() + (e.deltaY > 0 ? 1 : -1));
  }, { passive: false });

  /* ── Touch (mobile) ── */
  let t0x = 0, t0y = 0;
  window.addEventListener('touchstart', e => {
    t0x = e.touches[0].clientX;
    t0y = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchend', function(e) {
    if (animating) return;
    const dx = Math.abs(e.changedTouches[0].clientX - t0x);
    const dy = e.changedTouches[0].clientY - t0y;
    /* Ignore horizontal swipes (carousel) or small gestures */
    if (dx > Math.abs(dy) || Math.abs(dy) < 55) return;
    goTo(nearest() + (dy < 0 ? 1 : -1));
  }, { passive: true });
})();
