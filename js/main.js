/* ═══════════════════════════════════════════════════════════
   Thalomex – main.js  |  v0.2.5
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

/* ── 8. Full-page section snap scroll ─────────────────────────
   Desktop (>=721px): wheel-driven hard snap.
   Mobile  (<721px):  touch-driven snap with 30% threshold.
     – Tall sections (overflow): first swipe reaches the far edge;
       a second swipe past the threshold crosses to the next section.
     – Weak swipe (<30% vh): springs back to the current boundary.
   ── */
(function initSnapScroll() {
  const DESKTOP_MIN  = 721;
  const THRESHOLD    = 0.30;   // fraction of vh required to cross a boundary
  const LOCK_MS      = 650;

  const SECTIONS = ['#hero', '#services', '#work', '#about', '#contact']
    .map(id => document.querySelector(id)).filter(Boolean);

  let animating = false;

  /* Which section index is currently snapped (top closest to viewport top) */
  function nearest() {
    let best = 0, min = Infinity;
    SECTIONS.forEach(function(s, i) {
      var d = Math.abs(s.getBoundingClientRect().top);
      if (d < min) { min = d; best = i; }
    });
    return best;
  }

  /* Smooth-scroll to an absolute page position */
  function snapTo(scrollTop) {
    animating = true;
    window.scrollTo({ top: Math.max(0, scrollTop), behavior: 'smooth' });
    setTimeout(function() { animating = false; }, LOCK_MS);
  }

  /* Helpers for a section's page-coordinate bounds */
  function secTop(s)    { return s.offsetTop; }
  function secBottom(s) { return s.offsetTop + s.offsetHeight; }
  function secOverflow(s) {
    return Math.max(0, s.offsetHeight - window.innerHeight);
  }

  /* ── Desktop: wheel ── */
  window.addEventListener('wheel', function(e) {
    if (window.innerWidth < DESKTOP_MIN) return;
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    e.preventDefault();
    if (animating) return;
    var idx = nearest();
    snapTo(SECTIONS[idx + (e.deltaY > 0 ? 1 : -1)]
      ? SECTIONS[idx + (e.deltaY > 0 ? 1 : -1)].offsetTop
      : SECTIONS[idx].offsetTop);
  }, { passive: false });

  /* ── Mobile: touch ── */
  var touchStartY   = 0;
  var touchStartScroll = 0;

  document.addEventListener('touchstart', function(e) {
    if (window.innerWidth >= DESKTOP_MIN) return;
    touchStartY      = e.touches[0].clientY;
    touchStartScroll = window.scrollY;
  }, { passive: true });

  document.addEventListener('touchend', function(e) {
    if (window.innerWidth >= DESKTOP_MIN || animating) return;

    var endY      = e.changedTouches[0].clientY;
    var swipe     = touchStartY - endY;          // +up / −down
    var vh        = window.innerHeight;
    var threshold = vh * THRESHOLD;

    var idx     = nearest();
    var sec     = SECTIONS[idx];
    var ovfl    = secOverflow(sec);
    var intoSec = window.scrollY - secTop(sec);  // how far scrolled into this section

    /* Is the user at the top or bottom edge of this section? */
    var atTop    = intoSec <= 4;
    var atBottom = ovfl <= 4 || (ovfl - intoSec) <= 4;

    if (Math.abs(swipe) < threshold) {
      /* ── Weak swipe: bounce back to nearest edge ── */
      if (ovfl > 4) {
        /* Snap to whichever edge we're closest to */
        snapTo(intoSec < ovfl / 2
          ? secTop(sec)
          : secTop(sec) + ovfl);
      } else {
        snapTo(secTop(sec));
      }
      return;
    }

    if (swipe > 0) {
      /* ── Swipe UP (forward) ── */
      if (!atBottom) {
        /* Still content below — scroll to bottom of this section first */
        snapTo(secTop(sec) + ovfl);
      } else {
        /* At bottom edge: advance to next section */
        var next = SECTIONS[idx + 1];
        snapTo(next ? secTop(next) : secTop(sec) + ovfl);
      }
    } else {
      /* ── Swipe DOWN (back) ── */
      if (!atTop) {
        /* Still content above — scroll back to top of this section */
        snapTo(secTop(sec));
      } else {
        /* At top edge: go to previous section (land at its bottom if it overflows) */
        var prev = SECTIONS[idx - 1];
        if (prev) {
          var prevOvfl = secOverflow(prev);
          snapTo(secTop(prev) + prevOvfl);
        } else {
          snapTo(secTop(sec));
        }
      }
    }
  }, { passive: true });

})();
