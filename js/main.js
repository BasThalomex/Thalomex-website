/* ═══════════════════════════════════════════════════════════
   Thalomex – main.js
   Assembles sections, sets up nav, FAB, hamburger,
   carousel, and scroll-snap.
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

  /* Clone all cards once — enables seamless looping */
  const origCards = Array.from(track.children);
  origCards.forEach(c => track.appendChild(c.cloneNode(true)));

  const TOTAL       = origCards.length;   // original card count
  const GAP         = 24;                 // 1.5rem in px
  let   cardW       = 0;
  let   current     = 0;                  // logical index (0-based)
  let   isAnimating = false;

  function measure() {
    const card = track.querySelector('.work-card');
    if (!card) return;
    cardW = card.offsetWidth + GAP;
  }

  function scrollTo(idx, animate) {
    track.style.scrollBehavior = animate ? 'smooth' : 'auto';
    track.scrollLeft = idx * cardW;
  }

  function goNext() {
    if (isAnimating) return;
    isAnimating = true;
    current += 1;
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
    current -= 1;

    /* If we'd go negative, jump to the cloned end first */
    if (current < 0) {
      current += TOTAL;
      scrollTo(current + 1, false);
      requestAnimationFrame(() => scrollTo(current, true));
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

/* ── 8. Full-page section snap scroll (desktop >=721 px only) ──
   On mobile, sections are height:auto so native scroll is used.
   ── */
(function initFullpageScroll() {
  const DESKTOP_MIN = 721; // matches CSS breakpoint + 1

  const SECTIONS = ['#hero', '#services', '#work', '#about', '#contact']
    .map(id => document.querySelector(id)).filter(Boolean);

  let animating = false;
  const LOCK_MS = 750;

  /* Find which section's top is closest to the viewport top */
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
    window.scrollTo({ top: SECTIONS[idx].offsetTop, behavior: 'smooth' });
    setTimeout(() => { animating = false; }, LOCK_MS);
  }

  /* Wheel — desktop only; let horizontal scroll pass (carousel) */
  window.addEventListener('wheel', function (e) {
    if (window.innerWidth < DESKTOP_MIN) return;
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    e.preventDefault();
    if (!animating) goTo(nearest() + (e.deltaY > 0 ? 1 : -1));
  }, { passive: false });

})();
