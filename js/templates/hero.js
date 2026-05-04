/* ── Hero template (language-agnostic) ─────────────────────── */
var sectionHero = `
<section id="hero">
  <div class="hero-text">
    <div class="hero-logo">
      <img src="logo_white.png" alt="Thalomex" />
    </div>
    <p class="hero-label">${content.hero.label}</p>
    <p class="hero-sub">${content.hero.sub}</p>
    <a class="hero-cta" href="#contact">${content.hero.cta}</a>
    <div class="scroll-hint">↓</div>
  </div>
</section>
`;
