/* ── Contact (EN) ──────────────────────────────────────────── */
var sectionContact = `
<section id="contact" class="section">

  <!-- Precision reticle — decorative background -->
  <svg class="contact-reticle" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="150" r="140" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
    <circle cx="150" cy="150" r="108" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
    <circle cx="150" cy="150" r="76"  stroke="rgba(255,255,255,0.09)" stroke-width="1"/>
    <circle cx="150" cy="150" r="44"  stroke="rgba(255,255,255,0.11)" stroke-width="1.5"/>
    <circle cx="150" cy="150" r="15"  stroke="rgba(255,255,255,0.15)" stroke-width="1.5"/>
    <circle cx="150" cy="150" r="3"   fill="rgba(255,255,255,0.2)"/>
    <line x1="10"  y1="150" x2="135" y2="150" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
    <line x1="165" y1="150" x2="290" y2="150" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
    <line x1="150" y1="10"  x2="150" y2="135" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
    <line x1="150" y1="165" x2="150" y2="290" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
    <line x1="290.0" y1="150.0" x2="280.0" y2="150.0" stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/>
    <line x1="271.2" y1="220.0" x2="262.6" y2="215.0" stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/>
    <line x1="220.0" y1="271.2" x2="215.0" y2="262.6" stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/>
    <line x1="150.0" y1="290.0" x2="150.0" y2="280.0" stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/>
    <line x1="80.0"  y1="271.2" x2="85.0"  y2="262.6" stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/>
    <line x1="28.8"  y1="220.0" x2="37.4"  y2="215.0" stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/>
    <line x1="10.0"  y1="150.0" x2="20.0"  y2="150.0" stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/>
    <line x1="28.8"  y1="80.0"  x2="37.4"  y2="85.0"  stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/>
    <line x1="80.0"  y1="28.8"  x2="85.0"  y2="37.4"  stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/>
    <line x1="150.0" y1="10.0"  x2="150.0" y2="20.0"  stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/>
    <line x1="220.0" y1="28.8"  x2="215.0" y2="37.4"  stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/>
    <line x1="271.2" y1="80.0"  x2="262.6" y2="85.0"  stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/>
    <line x1="287.9" y1="174.2" x2="283.5" y2="172.0" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <line x1="281.0" y1="197.5" x2="277.1" y2="194.5" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <line x1="247.5" y1="244.5" x2="244.1" y2="240.7" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <line x1="222.9" y1="261.3" x2="220.4" y2="256.9" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <line x1="174.2" y1="287.9" x2="172.0" y2="283.5" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <line x1="125.8" y1="287.9" x2="128.0" y2="283.5" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <line x1="77.1"  y1="261.3" x2="79.6"  y2="256.9" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <line x1="52.5"  y1="244.5" x2="55.9"  y2="240.7" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <line x1="19.0"  y1="197.5" x2="22.9"  y2="194.5" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <line x1="12.1"  y1="174.2" x2="16.5"  y2="172.0" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <line x1="12.1"  y1="125.8" x2="16.5"  y2="128.0" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <line x1="19.0"  y1="102.5" x2="22.9"  y2="105.5" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <line x1="52.5"  y1="55.5"  x2="55.9"  y2="59.3"  stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <line x1="77.1"  y1="38.7"  x2="79.6"  y2="43.1"  stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <line x1="125.8" y1="12.1"  x2="128.0" y2="16.5"  stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <line x1="174.2" y1="12.1"  x2="172.0" y2="16.5"  stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <line x1="222.9" y1="38.7"  x2="220.4" y2="43.1"  stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <line x1="247.5" y1="55.5"  x2="244.1" y2="59.3"  stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <line x1="281.0" y1="102.5" x2="277.1" y2="105.5" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <line x1="287.9" y1="125.8" x2="283.5" y2="128.0" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
  </svg>

  <div class="wrap">
    <p class="section-label fade-in">Contact</p>
    <h2 class="fade-in">Have a technical challenge?</h2>
    <div class="contact-grid">
      <div class="contact-intro fade-in">
        <p>Whether you have a concrete project or just want to think something through — send a message. I typically respond within one business day.</p>
        <p>I work with tech companies, startups and R&amp;D teams that need an experienced engineer quickly.</p>
      </div>
      <div class="contact-details fade-in">
        <div class="contact-row">
          <span class="lbl">Email</span>
          <a href="mailto:bas@thalomex.nl">bas@thalomex.nl</a>
        </div>
        <div class="contact-row">
          <span class="lbl">LinkedIn</span>
          <a href="https://linkedin.com/in/bas-huisman" target="_blank" rel="noopener">linkedin.com/in/bas-huisman</a>
        </div>
        <div class="contact-row">
          <span class="lbl">CoC</span>
          <span>98206303</span>
        </div>
      </div>
    </div>
  </div>
</section>
`;
