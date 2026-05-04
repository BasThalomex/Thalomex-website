/* ── Work – projecten, publicaties & ervaring (NL) ─────────── */
var sectionWork = `
<section id="work" class="section">
  <div class="wrap">
    <p class="section-label fade-in">Werk &amp; ervaring</p>
    <h2 class="fade-in">Projecten, publicaties &amp; achtergrond</h2>

    <div class="carousel-outer fade-in">
      <div class="carousel-track" id="work-track">

        <!-- 1. Hisport – klantproject -->
        <div class="work-card">
          <div class="work-card-img">
            <img src="img/project-hisport.jpg" alt="Hisport precisie-assemblageapparaat" loading="lazy" />
            <span class="work-card-badge">Project</span>
          </div>
          <div class="work-card-body">
            <div class="work-card-org">Vention Technologies · 2025–2026</div>
            <h3>Hisport – Precisie-assemblageapparaat</h3>
            <p>Volledig mechanisch ontwerp van een precisie-assemblageapparaat in roestvrij staal met groen geanodiseerde aluminiumonderdelen. Gericht op herhaalbaarheid, tolerantiebeheersing en klinische productie.</p>
            <div class="work-card-footer">
              <div class="work-card-tags">
                <span class="tag">CAD / NX</span>
                <span class="tag">Precisie-mechanica</span>
                <span class="tag">Prototype</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 2. PhD paper – Deformeerbare Wafertafel -->
        <div class="work-card">
          <div class="work-card-img">
            <img src="img/cover-paper.jpg" alt="Deformeerbare Wafertafel extended abstract" loading="lazy" />
            <span class="work-card-badge">Publicatie</span>
          </div>
          <div class="work-card-body">
            <div class="work-card-org">TU/e &amp; ASML · 2024–heden</div>
            <h3>Prototypeontwikkeling van een Deformeerbare Wafertafel</h3>
            <p>Extended abstract over een zes-DoF deformeerbare wafertafel met gestapelde LiNbO₃-piëzoëlektrische lagen voor onafhankelijke in-plane en out-of-plane vormregeling in fotolithografiescanners.</p>
            <div class="work-card-footer">
              <div class="work-card-tags">
                <span class="tag">Precisie-mechatronica</span>
                <span class="tag">Piezo</span>
                <span class="tag">ASML</span>
              </div>
              <a class="work-link" href="https://research.tue.nl/en/persons/bas-huisman/" target="_blank" rel="noopener">TU/e-profiel →</a>
            </div>
          </div>
        </div>

        <!-- 3. MSc scriptie – Keck II telescoop -->
        <div class="work-card">
          <div class="work-card-img">
            <img src="img/cover-graduation.jpg" alt="MSc scriptie omslag – Keck II ontplooiingsmechanisme" loading="lazy" />
            <span class="work-card-badge">MSc Scriptie · 9,5/10</span>
          </div>
          <div class="work-card-body">
            <div class="work-card-org">TNO · Maart 2024</div>
            <h3>Ontplooiingsmechanisme voor de Secundaire Spiegel van de Keck II-telescoop</h3>
            <p>Architecturaal ontwerp van een ontplooiingsmechanisme voor de adaptieve secundaire spiegel van de Keck II-telescoop, inclusief structurele analyse van CFRP voor de draagstructuur. Cijfer: 9,5.</p>
            <div class="work-card-footer">
              <div class="work-card-tags">
                <span class="tag">Ruimtemechanismen</span>
                <span class="tag">CFRP</span>
                <span class="tag">Structuuranalyse</span>
              </div>
              <a class="work-link" href="https://research.tue.nl/en/studentTheses/architectural-design-of-a-deployment-mechanism-for-the-keck-ii-te/" target="_blank" rel="noopener">Scriptie bekijken →</a>
            </div>
          </div>
        </div>

        <!-- 4. Stage – Fiber Tensile Tester -->
        <div class="work-card">
          <div class="work-card-img">
            <img src="img/cover-internship.jpg" alt="Fiber Tensile Tester stageverslag omslag" loading="lazy" />
            <span class="work-card-badge">Stageverslag</span>
          </div>
          <div class="work-card-body">
            <div class="work-card-org">TU/e – EPC Lab · Feb–mei 2023</div>
            <h3>Ontwerp en realisatie van een verbeterde Fiber Tensile Tester</h3>
            <p>Volledige ontwerp- en realisatiecyclus van een verbeterde vezelstrekproeflader in het TU/e-lab voor Mechanics of Materials, gericht op verbetering van nauwkeurigheid en meetrepeatability.</p>
            <div class="work-card-footer">
              <div class="work-card-tags">
                <span class="tag">Machineontwerp</span>
                <span class="tag">Realisatie</span>
                <span class="tag">Mechanics of Materials</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 5. Prodrive – werkervaringskaart -->
        <div class="work-card">
          <div class="work-card-img work-card-img--text">
            <div class="card-org-name">Prodrive<br>Technologies</div>
          </div>
          <div class="work-card-body">
            <div class="work-card-org">Industrie · 2020–2024 · 4 jaar</div>
            <h3>Mechanical Design Engineer</h3>
            <p>Parttime naast BSc en MSc. Werkte aan precisie-mechatronische systemen in NX Unigraphics en bouwde hands-on expertise op in design for manufacturability in een hightech productieomgeving.</p>
            <div class="work-card-footer">
              <div class="work-card-tags">
                <span class="tag">NX Unigraphics</span>
                <span class="tag">DFM</span>
                <span class="tag">Mechatronica</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 6. Best Demo Award -->
        <div class="work-card">
          <div class="work-card-img work-card-img--text">
            <div class="card-org-name">Best<br>Demonstration<br>Award &#127942;</div>
          </div>
          <div class="work-card-body">
            <div class="work-card-org">TU/e · September 2025</div>
            <h3>Best Demonstration Award</h3>
            <p>Ontvangen van de Best Demonstration Award aan de TU/e voor uitstekend werk in het demonstreren van onderzoeksresultaten aan vakgenoten en industriepartners.</p>
            <div class="work-card-footer">
              <div class="work-card-tags">
                <span class="tag">Onderzoek</span>
                <span class="tag">TU/e</span>
              </div>
              <a class="work-link" href="https://research.tue.nl/en/prizes/best-demonstration-award/" target="_blank" rel="noopener">Prijs bekijken →</a>
            </div>
          </div>
        </div>

      </div><!-- /.carousel-track -->

      <div class="carousel-nav">
        <button class="carousel-btn" id="work-prev" aria-label="Vorige">←</button>
        <button class="carousel-btn" id="work-next" aria-label="Volgende">→</button>
      </div>
    </div><!-- /.carousel-outer -->

  </div>
</section>

<hr class="divider" />
`;
