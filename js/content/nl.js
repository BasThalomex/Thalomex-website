/* ═══════════════════════════════════════════════════════════
   THALOMEX — Nederlandse content
   Bewerk dit bestand om alle websitetekst bij te werken.
   ═══════════════════════════════════════════════════════════ */

var content = {

  /* ── Navigatie ──────────────────────────────────────────── */
  nav: {
    work:    'Werk',
    about:   'Over mij',
    contact: 'Contact',
    fab:     'Neem contact op →',
  },

  /* ── Hero ───────────────────────────────────────────────── */
  hero: {
    label: 'Engineering Consultant',
    sub:   'Van technische vraag tot concreet concept —<br>snel, scherp en zonder overhead.',
    cta:   'Neem contact op →',
  },

  /* ── Diensten ───────────────────────────────────────────── */
  services: {
    label:   'Diensten',
    heading: 'Van vraag naar werkend prototype',
    items: [
      {
        title: 'Haalbaarheid & Concept',
        text:  'Back-of-the-envelope voordat er iets in CAD gaat. Ik check of de aanpak klopt, achterhaal de vraag achter de vraag en schets snel een conceptrichting.',
      },
      {
        title: 'Mechanisch Ontwerp',
        text:  'Van uitgewerkt concept naar volledig 3D-model en productietekeningen. NX Unigraphics, STEP-export, leveranciersspecificaties — kant-en-klaar voor een machinebedrijf.',
      },
      {
        title: 'PoC & Prototype',
        text:  'Een werkend prototype dat je kunt testen. Ik ontwerp, specificeer, bestel en assembleer — of verspaan de onderdelen zelf als dat de snelste weg naar een resultaat is.',
      },
    ],
  },

  /* ── Werk-carousel ──────────────────────────────────────── */
  work: {
    label:   'Werk &amp; ervaring',
    heading: 'Projecten, publicaties &amp; achtergrond',

    cards: [
      {
        type:     'image',
        image:    'img/cover-aspe.jpg',
        imageAlt: 'ASPE conferentiepaper omslag',
        badge:    'Conferentie · nov 2025',
        org:      'TU/e &amp; ASML · ASPE 2025',
        phd:      true,
        title:    'Low-Order Shape Control via een Deformeerbare Wafertafel — ASPE',
        text:     'Mondelinge presentatie op de ASPE Annual Meeting 2025. Paper over laag-orde vormregeling in fotolithografiescanner-waferstages via een meerlagige piëzoelektrische deformeerbare wafertafel met onafhankelijke in-plane en out-of-plane actuatie.',
        tags:     ['Precisie-mechatronica', 'Piezo', 'ASML'],
        link:     null,
        linkText: null,
      },
      {
        type:     'image',
        image:    'img/cover-dspe.jpg',
        imageAlt: 'DSPE conferentiepaper omslag',
        badge:    'Conferentie · sept 2025',
        org:      'TU/e &amp; ASML · DSPE 2025',
        phd:      true,
        title:    'Prototypeontwikkeling van een Deformeerbare Wafertafel — DSPE',
        text:     'Mondelinge presentatie en live demonstratie op de DSPE-conferentie 2025. Extended abstract over een zes-DoF deformeerbare wafertafel met gestapelde LiNbO₃-piëzolagen. Bekroond met de Best Demonstration Award &#127942;.',
        tags:     ['Precisie-mechatronica', 'Piezo', 'ASML', 'Best Demo Award'],
        link:     'https://research.tue.nl/en/prizes/best-demonstration-award/',
        linkText: 'Prijs bekijken →',
      },
      {
        type:     'image',
        image:    'img/cover-adjuster.jpg',
        imageAlt: 'Fijn-instelbare capacitieve sensorhouder',
        badge:    'Ontwerp · juni 2025',
        org:      'TU/e &amp; ASML · 2024–heden',
        phd:      true,
        title:    'Fijn-instelbare Capacitieve Sensorhouder',
        text:     'Ontwerp van een precisie-instelbare houder voor capacitieve verplaatsingssensoren, voor nauwkeurige oppervlaktevormmetingen op de deformeerbare substraattafel.',
        tags:     ['Precisie-mechanica', 'Sensorintegratie', 'CAD / NX'],
        link:     null,
        linkText: null,
      },
      {
        type:     'image',
        image:    'img/cover-prototype.jpg',
        imageAlt: 'Mk.4 prototype deformeerbare substraattafel',
        badge:    'Prototype · maart 2025',
        org:      'TU/e &amp; ASML · 2024–heden',
        phd:      true,
        title:    'Mk.4 Prototype Deformeerbare Substraattafel',
        text:     'Mechanisch ontwerp en realisatie van de vierde-generatie prototypetafel voor een deformeerbaar waferstage, met gestapelde piëzoelektrische actuatoren voor onafhankelijke in-plane en out-of-plane vormregeling.',
        tags:     ['Precisie-mechanica', 'Piezo', 'Prototype', 'ASML'],
        link:     null,
        linkText: null,
      },
      {
        type:     'image',
        image:    'img/cover-graduation-web.jpg',
        imageAlt: 'MSc scriptie omslag – Keck II ontplooiingsmechanisme',
        badge:    'MSc Scriptie · 9,5/10',
        org:      'TNO · mei 2023–mrt 2024',
        title:    'Ontplooiingsmechanisme voor de Secundaire Spiegel van de Keck II-telescoop',
        text:     'Architecturaal ontwerp van een ontplooiingsmechanisme voor de adaptieve secundaire spiegel van de Keck II-telescoop, inclusief structurele analyse van CFRP voor de draagstructuur. Cijfer: 9,5.',
        tags:     ['Ruimtemechanismen', 'CFRP', 'Structuuranalyse'],
        links: [
          { url: 'https://research.tue.nl/en/studentTheses/architectural-design-of-a-deployment-mechanism-for-the-keck-ii-te/', text: 'Scriptie bekijken →' },
          { url: 'MICRONIEK_URL', text: 'Microniek artikel →' },
        ],
      },
      {
        type:     'image',
        image:    'img/cover-internship-web.jpg',
        imageAlt: 'Fiber Tensile Tester stageverslag omslag',
        badge:    'Stage · 9,5/10',
        org:      'TU/e – EPC Lab · Jan–apr 2023',
        title:    'Ontwerp &amp; realisatie van een verbeterde Fiber Tensile Tester',
        text:     'Ontworpen en volledig gerealiseerd — inclusief het zelf verspanen van alle onderdelen. Het project omvatte de volledige cyclus van concept via productie tot een werkende meetopstelling in het TU/e-lab voor Mechanics of Materials. Cijfer: 9,5/10.',
        tags:     ['Machineontwerp', 'Verspaning', 'Realisatie', 'Mechanics of Materials'],
        link:     null,
        linkText: null,
      },
    ],
  },

  /* ── Over mij ───────────────────────────────────────────── */
  about: {
    label:   'Over mij',
    heading: 'Ingenieur met een focus op precisie',
    bio: [
      'Werktuigbouwkundig ingenieur met een achtergrond in precisie-mechatronica en hands-on ontwerpervaring bij Prodrive Technologies, TNO en TU/e. MSc van de Technische Universiteit Eindhoven, momenteel promovendus bij de vakgroep Precision Engineering.',
      'Beschikbaar via Thalomex voor bedrijven die snel een ervaren ingenieur nodig hebben — zonder de overhead van een groot bureau.',
    ],
    stats: [
      { nr: 'PhD-kandidaat', label: 'Technische Universiteit Eindhoven' },
      { nr: '6+',            label: 'Jaar technische werkervaring'      },
    ],
    tags: [
      'Mechanische conceptontwikkeling',
      'Mechatronica',
      'CAD / STEP',
      'MATLAB',
      'PoC-ontwerp',
      'Haalbaarheidsstudie',
    ],
    photoAlt:    'Bas Huisman',
    captionName: 'Bas Huisman',
  },

  /* ── Contact ────────────────────────────────────────────── */
  contact: {
    label:   'Contact',
    heading: 'Heb je een technische uitdaging?',
    intro: [
      'Of je nu een concreet project hebt of gewoon iets wilt doordenken — stuur een bericht. Ik reageer doorgaans binnen één werkdag.',
      'Ik werk voor techbedrijven, startups en R&amp;D-teams die snel een ervaren ingenieur nodig hebben.',
    ],
    rows: [
      { label: 'E-mail',   value: 'bas@thalomex.nl',             link: 'mailto:bas@thalomex.nl'              },
      { label: 'LinkedIn', value: 'linkedin.com/in/bas-huisman', link: 'https://linkedin.com/in/bas-huisman' },
      { label: 'KVK',      value: '98206303',                    link: null                                  },
    ],
  },

  /* ── Footer ─────────────────────────────────────────────── */
  footer: {
    copy: '&copy; 2026 Thalomex – Bas Huisman',
  },

};
