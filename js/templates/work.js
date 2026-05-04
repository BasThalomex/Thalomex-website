/* ── Work template (language-agnostic) ─────────────────────── */

/* Renders one work card from a content.work.cards[] entry */
function _renderCard(c) {
  var imgHtml = c.type === 'image'
    ? '<div class="work-card-img">'
        + '<img src="' + c.image + '" alt="' + c.imageAlt + '" loading="lazy" />'
        + '<span class="work-card-badge">' + c.badge + '</span>'
      + '</div>'
    : '<div class="work-card-img work-card-img--text">'
        + '<div class="card-org-name">' + c.headerText + '</div>'
      + '</div>';

  var tagsHtml = c.tags.map(function(t) {
    return '<span class="tag">' + t + '</span>';
  }).join('');

  var linksHtml = '';
  if (c.links && c.links.length) {
    linksHtml = c.links.map(function(l) {
      return '<a class="work-link" href="' + l.url + '" target="_blank" rel="noopener">' + l.text + '</a>';
    }).join('');
  } else if (c.link) {
    linksHtml = '<a class="work-link" href="' + c.link + '" target="_blank" rel="noopener">' + c.linkText + '</a>';
  }

  var phdPill = c.phd
    ? '<span class="phd-pill">PhD Research</span>'
    : '';

  return '<div class="work-card' + (c.phd ? ' work-card--phd' : '') + '">'
    + imgHtml
    + '<div class="work-card-body">'
      + '<div class="work-card-meta">'
        + '<div class="work-card-org">' + c.org + '</div>'
        + phdPill
      + '</div>'
      + '<div class="work-card-scroll">'
        + '<h3>' + c.title + '</h3>'
        + '<p>' + c.text + '</p>'
        + (linksHtml ? '<div class="work-card-links">' + linksHtml + '</div>' : '')
      + '</div>'
      + '<div class="work-card-tags">' + tagsHtml + '</div>'
    + '</div>'
  + '</div>';
}

var sectionWork = `
<section id="work" class="section">
  <div class="wrap">
    <h2 class="fade-in">${content.work.heading}</h2>

    <div class="carousel-outer fade-in">
      <div class="carousel-track" id="work-track">
        ${content.work.cards.map(_renderCard).join('')}
      </div>

      <div class="carousel-nav">
        <button class="carousel-btn" id="work-prev" aria-label="Previous">←</button>
        <button class="carousel-btn" id="work-next" aria-label="Next">→</button>
      </div>
    </div>
  </div>
</section>

`;
