/* v0.2.5 – Services template (language-agnostic) ───────────────── */

var sectionServices = `
<section id="services" class="section">
  <div class="wrap">
    <h2 class="fade-in">${content.services.heading}</h2>

    <div class="services-grid">
      ${content.services.items.map(function(s) {
        return '<div class="service-block fade-in">'
          + '<img class="service-img" src="' + s.img + '" alt="' + s.title + '" loading="lazy" />'
          + '<div class="service-block-text">'
          + '<h3>' + s.title + '</h3>'
          + '<p>' + s.text + '</p>'
          + '</div>'
          + '</div>';
      }).join('')}
    </div>
  </div>
</section>

`;
