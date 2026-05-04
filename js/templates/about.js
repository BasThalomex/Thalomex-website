/* ── About template (language-agnostic) ─────────────────────── */
var sectionAbout = `
<section id="about" class="section">
  <div class="wrap">
    <p class="section-label fade-in">${content.about.label}</p>
    <h2 class="fade-in">${content.about.heading}</h2>
    <div class="about-grid">

      <div class="about-photo-col fade-in">
        <div class="photo-frame">
          <img src="photo_bas.jpg" alt="${content.about.photoAlt}" />
        </div>
        <div class="photo-caption">
          <span class="caption-name">${content.about.captionName}</span>
        </div>
      </div>

      <div class="about-content fade-in">
        ${content.about.bio.map(function(p) { return '<p>' + p + '</p>'; }).join('')}

        <div class="about-stats-row">
          ${content.about.stats.map(function(s) {
            return '<div class="stat-cell">'
              + '<div class="stat-nr">'    + s.nr    + '</div>'
              + '<div class="stat-label">' + s.label + '</div>'
            + '</div>';
          }).join('')}
        </div>

        <div class="tags">
          ${content.about.tags.map(function(t) {
            return '<span class="tag">' + t + '</span>';
          }).join('')}
        </div>
      </div>

    </div>
  </div>
</section>

`;
