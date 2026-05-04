/* ── About template (language-agnostic) ─────────────────────── */
var sectionAbout = `
<section id="about" class="section">
  <div class="wrap">

    <h2 class="fade-in">${content.about.heading}</h2>

    <div class="about-grid">

      <div class="about-photo-col fade-in">
        <div class="photo-frame">
          <img src="photo_bas.jpg" alt="${content.about.photoAlt}" />
        </div>

      </div>

      <div class="about-content fade-in">
        <div class="about-stats-row">
          ${content.about.stats.map(function(s) {
            return '<div class="stat-cell">'
              + '<div class="stat-nr">'    + s.nr    + '</div>'
              + '<div class="stat-label">' + s.label + '</div>'
            + '</div>';
          }).join('')}
        </div>
        ${content.about.bio.map(function(p) { return '<p>' + p + '</p>'; }).join('')}
      </div>

    </div>

    <div class="competences fade-in">
      <h3 class="competences-heading">${content.about.competences.heading}</h3>
      <div class="competences-grid">
        ${content.about.competences.groups.map(function(g) {
          return '<div class="competence-group">'
            + '<div class="competence-title">' + g.title + '</div>'
            + '<ul>'
            + g.items.map(function(item) { return '<li>' + item + '</li>'; }).join('')
            + '</ul>'
          + '</div>';
        }).join('')}
      </div>
    </div>

  </div>
</section>

`;
