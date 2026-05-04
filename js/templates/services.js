/* ── Services template (language-agnostic) ───────────────── */

var sectionServices = `
<section id="services" class="section">
  <div class="wrap">
    <h2 class="fade-in">${content.services.heading}</h2>

    <div class="services-grid">
      ${content.services.items.map(function(s, i) {
        var nr = (i + 1 < 10 ? '0' : '') + (i + 1);
        return '<div class="service-block fade-in">'
          + '<div class="service-number">' + nr + '</div>'
          + '<h3>' + s.title + '</h3>'
          + '<p>' + s.text + '</p>'
          + '</div>';
      }).join('')}
    </div>
  </div>
</section>

`;
