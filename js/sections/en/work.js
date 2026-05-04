/* ── Work – projects, publications & experience (EN) ───────── */
var sectionWork = `
<section id="work" class="section">
  <div class="wrap">
    <p class="section-label fade-in">Work &amp; experience</p>
    <h2 class="fade-in">Projects, publications &amp; background</h2>

    <div class="carousel-outer fade-in">
      <div class="carousel-track" id="work-track">

        <!-- 1. Hisport – client project -->
        <div class="work-card">
          <div class="work-card-img">
            <img src="img/project-hisport.jpg" alt="Hisport precision assembly device" loading="lazy" />
            <span class="work-card-badge">Project</span>
          </div>
          <div class="work-card-body">
            <div class="work-card-org">Vention Technologies · 2025–2026</div>
            <h3>Hisport – Precision Assembly Device</h3>
            <p>Full mechanical design of a precision assembly device in stainless steel with green-anodised aluminium components. Focused on repeatability, tolerance control, and clinical-grade production.</p>
            <div class="work-card-footer">
              <div class="work-card-tags">
                <span class="tag">CAD / NX</span>
                <span class="tag">Precision mechanics</span>
                <span class="tag">Prototype</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 2. PhD paper – Deformable Wafer Table -->
        <div class="work-card">
          <div class="work-card-img">
            <img src="img/cover-paper.jpg" alt="Deformable Wafer Table extended abstract" loading="lazy" />
            <span class="work-card-badge">Publication</span>
          </div>
          <div class="work-card-body">
            <div class="work-card-org">TU/e &amp; ASML · 2024–present</div>
            <h3>Prototype Development of a Deformable Wafer Table</h3>
            <p>Extended abstract on a six-DoF deformable wafer table using stacked LiNbO₃ piezoelectric layers for independent in-plane and out-of-plane shape control in photolithography scanners.</p>
            <div class="work-card-footer">
              <div class="work-card-tags">
                <span class="tag">Precision mechatronics</span>
                <span class="tag">Piezo</span>
                <span class="tag">ASML</span>
              </div>
              <a class="work-link" href="https://research.tue.nl/en/persons/bas-huisman/" target="_blank" rel="noopener">TU/e profile →</a>
            </div>
          </div>
        </div>

        <!-- 3. MSc thesis – Keck II telescope -->
        <div class="work-card">
          <div class="work-card-img">
            <img src="img/cover-graduation.jpg" alt="MSc graduation thesis cover – Keck II deployment mechanism" loading="lazy" />
            <span class="work-card-badge">MSc Thesis · 9.5/10</span>
          </div>
          <div class="work-card-body">
            <div class="work-card-org">TNO · March 2024</div>
            <h3>Deployment Mechanism for the Keck II Telescope's Adaptive Secondary Mirror</h3>
            <p>Architectural design of a deployment mechanism for the potential adaptive secondary mirror of the Keck II telescope, including structural analysis of CFRP for its backing structure. Grade: 9.5.</p>
            <div class="work-card-footer">
              <div class="work-card-tags">
                <span class="tag">Space mechanisms</span>
                <span class="tag">CFRP</span>
                <span class="tag">Structural analysis</span>
              </div>
              <a class="work-link" href="https://research.tue.nl/en/studentTheses/architectural-design-of-a-deployment-mechanism-for-the-keck-ii-te/" target="_blank" rel="noopener">View thesis →</a>
            </div>
          </div>
        </div>

        <!-- 4. Internship – Fiber Tensile Tester -->
        <div class="work-card">
          <div class="work-card-img">
            <img src="img/cover-internship.jpg" alt="Fiber Tensile Tester internship report cover" loading="lazy" />
            <span class="work-card-badge">Internship Report</span>
          </div>
          <div class="work-card-body">
            <div class="work-card-org">TU/e – EPC Lab · Feb–May 2023</div>
            <h3>Design and Realisation of an Improved Fiber Tensile Tester</h3>
            <p>Full design and realisation cycle of an improved fibre tensile testing machine at the TU/e Mechanics of Materials lab, addressing mechanical and measurement challenges of the existing setup.</p>
            <div class="work-card-footer">
              <div class="work-card-tags">
                <span class="tag">Machine design</span>
                <span class="tag">Realisation</span>
                <span class="tag">Mechanics of Materials</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 5. Prodrive – industry experience -->
        <div class="work-card">
          <div class="work-card-img work-card-img--text">
            <div class="card-org-name">Prodrive<br>Technologies</div>
          </div>
          <div class="work-card-body">
            <div class="work-card-org">Industry · 2020–2024 · 4 years</div>
            <h3>Mechanical Design Engineer</h3>
            <p>Part-time alongside BSc and MSc. Worked on precision mechatronic systems in NX Unigraphics, building hands-on expertise in design for manufacturability in a high-tech production environment.</p>
            <div class="work-card-footer">
              <div class="work-card-tags">
                <span class="tag">NX Unigraphics</span>
                <span class="tag">DFM</span>
                <span class="tag">Mechatronics</span>
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
            <p>Awarded the Best Demonstration Award at Eindhoven University of Technology for outstanding work in demonstrating research results to an audience of peers and industry partners.</p>
            <div class="work-card-footer">
              <div class="work-card-tags">
                <span class="tag">Research</span>
                <span class="tag">TU/e</span>
              </div>
              <a class="work-link" href="https://research.tue.nl/en/prizes/best-demonstration-award/" target="_blank" rel="noopener">View award →</a>
            </div>
          </div>
        </div>

      </div><!-- /.carousel-track -->

      <div class="carousel-nav">
        <button class="carousel-btn" id="work-prev" aria-label="Previous">←</button>
        <button class="carousel-btn" id="work-next" aria-label="Next">→</button>
      </div>
    </div><!-- /.carousel-outer -->

  </div>
</section>

<hr class="divider" />
`;
