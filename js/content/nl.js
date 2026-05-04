/* ═══════════════════════════════════════════════════════════
   THALOMEX — Nederlandse content  |  v0.2.5
   Bewerk dit bestand om alle websiteteksten aan te passen.
   ═══════════════════════════════════════════════════════════ */

var content = {

  /* ── Navigatie ───────────────────────────────────────────── */
  nav: {
    work:    'Werk',
    about:   'Over mij',
    contact: 'Contact',
    fab:     'Neem contact op →',
  },

  /* ── Hero ───────────────────────────────────────────────── */
  hero: {
    label: 'Engineering Consultant',
    sub:   'Van technische vraag tot werkend prototype',
    cta:   'Neem contact op →',
  },

  /* ── Diensten ───────────────────────────────────────────── */
  services: {
    label:   'Diensten',
    heading: 'Van technische vraag tot werkend prototype',
    items: [
      {
        img:   'img/feasibility.jpg',
        title: 'Haalbaarheid & Concept',
        text:  'Staat de fysica het toe? Klopt de aanpak? Kan het simpeler? Ik reken de haalbaarheid snel na en kom tot een concreet concept voordat er iets de CAD in gaat.',
      },
      {
        img:   'img/detailed_design.jpg',
        title: 'Mechanisch Ontwerp',
        text:  'Als het concept staat, werk ik het volledig uit. 3D-model, productietekeningen, toleranties en leveranciersdocumentatie. Direct klaar voor productie.',
      },
      {
        img:   'img/poc_proto.jpg',
        title: 'PoC & Prototype',
        text:  'Het deel dat écht vertelt of het werkt. Ik ontwerp op maakbaarheid, verspaan onderdelen waar nodig en zet alles samen tot een prototype dat je kunt testen.',
      },
    ],
  },

  /* ── Werk carousel ──────────────────────────────────────── */
  work: {
    label:   'Werk &amp; ervaring',
    heading: 'Projecten, publicaties &amp; achtergrond',

    /*
     * Elk kaartje heeft nodig:
     *   type       : 'image' | 'text-header'
     *   image      : pad naar afbeelding              (alleen voor type:'image')
     *   imageAlt   : alt-tekst                        (alleen voor type:'image')
     *   headerText : tekst in donkere header          (alleen voor type:'text-header', gebruik <br> voor regeleinden)
     *   badge      : klein label over afbeelding/header
     *   org        : organisatie + jaarstring
     *   title      : koptekst kaartje
     *   text       : alineatekst
     *   tags       : array van tags
     *   link       : URL of null
     *   linkText   : linktekst of null
     */
    cards: [
      {
        type:     'image',
        image:    'img/cover-aspe.jpg',
        imageAlt: 'Omslag ASPE-conferentiepaper',
        badge:    'Conferentie · nov. 2025',
        org:      'TU/e &amp; ASML · ASPE 2025',
        phd:      true,
        title:    'Low-Order Shape Control via een Deformeerbare Wafertafel (ASPE)',
        text:     'Mondelinge presentatie op de ASPE Annual Meeting 2025. Extended abstract over low-order shape control in een prototype wafertafel voor hogere-orde correctie in wafer scanners.',
        tags:     ['LiNbO3', 'Wafertafel', 'ASML', 'Zernike-polynomen'],
        link:     null,
        linkText: null,
      },
      {
        type:     'image',
        image:    'img/cover-dspe.jpg',
        imageAlt: 'Omslag DSPE-conferentiepaper',
        badge:    'Conferentie · sept. 2025',
        org:      'TU/e &amp; ASML · DSPE 2025',
        phd:      true,
        title:    'Prototypeontwikkeling van een Deformeerbare Wafertafel (DSPE)',
        text:     'Presentatie en live demonstratie op de DSPE Conference 2025. Extended abstract over een prototype 6-VG deformeerbare wafertafel met gestapelde LiNbO₃-piëzo-lagen voor onafhankelijke in-vlak- en uit-vlak-actuatie. Onderscheiding: DSPE Best Demonstration 2025.',
        tags:     ['Precisie mechatronica', 'Piëzo', 'ASML', 'Best Demo Award'],
        link:     'https://research.tue.nl/en/prizes/best-demonstration-award/',
        linkText: 'Bekijk onderscheiding →',
      },
      {
        type:     'image',
        image:    'img/cover-adjuster.jpg',
        imageAlt: 'Fijn-instelbare capacitieve sensorhouder',
        badge:    'Ontwerp · juni 2025',
        org:      'TU/e &amp; ASML · 2024–heden',
        phd:      true,
        title:    'Fijn-Instelbare Capacitieve Sensorhouder',
        text:     'Precisie-instelbare bevestiging voor capacitieve verplaatsingssensoren, voor nauwkeurige positionering bij oppervlaktevormmetingen op de deformeerbare substraattafel.',
        tags:     ['Precisie mechanica', 'Sensorintegratie', 'CAD'],
        link:     null,
        linkText: null,
      },
      {
        type:     'image',
        image:    'img/cover-prototype.jpg',
        imageAlt: 'Mk.IV prototype deformeerbare substraattafel',
        badge:    'Prototype · maart 2025',
        org:      'TU/e &amp; ASML · 2024–heden',
        phd:      true,
        title:    'Mk.4 Prototype Deformeerbare Substraattafel',
        text:     'Mechanisch ontwerp en realisatie van het vierde-generatie prototype voor een deformeerbaar waferplatform, met gestapelde piëzo-actuatoren voor onafhankelijke in-vlak- en uit-vlak-vormbesturing.',
        tags:     ['Precisie mechanica', 'Piëzo', 'Prototype', 'ASML'],
        link:     null,
        linkText: null,
      },
      {
        type:     'image',
        image:    'img/cover-graduation-web.jpg',
        imageAlt: 'Omslag MSc-scriptie, Keck II-uitrijmechanisme',
        badge:    'MSc-scriptie · 9,5/10',
        org:      'TNO · mei 2023–mrt. 2024',
        title:    'Uitrijmechanisme voor de Adaptieve Secundaire Spiegel van de Keck II Telescoop',
        text:     'Architectuurontwerp van een uitrijmechanisme voor de mogelijke adaptieve secundaire spiegel van de Keck II-telescoop, inclusief constructieve analyse van koolstofvezel (CFRP) voor de steunstructuur. Cijfer: 9,5.',
        tags:     ['Ruimtemechanismen', 'CFRP', 'Constructieve analyse'],
        links: [
          { url: 'https://research.tue.nl/en/studentTheses/architectural-design-of-a-deployment-mechanism-for-the-keck-ii-te/', text: 'Bekijk scriptie →' },
          { url: 'MICRONIEK_URL', text: 'Microniek artikel →' },
        ],
      },
      {
        type:     'image',
        image:    'img/cover-internship-web.jpg',
        imageAlt: 'Omslag stageverslag vezel-trekproefmachine',
        badge:    'Stage · 9,5/10',
        org:      'TU/e – EPC Lab · jan.–apr. 2023',
        title:    'Ontwerp &amp; Realisatie van een Verbeterde Vezel-Trekproefmachine',
        text:     'Zelf ontworpen en volledig gebouwd: een verbeterde trekproefmachine voor vezels, inclusief het verspanen van alle onderdelen. Van concept via productie tot een werkende meetopstelling in het Mechanics of Materials-lab van de TU/e. Cijfer: 9,5/10.',
        tags:     ['Machineontwerp', 'Verspanen', 'Realisatie', 'Mechanics of Materials'],
        link:     null,
        linkText: null,
      },
    ],
  },

  /* ── Over mij ───────────────────────────────────────────── */
  about: {
    label:   'Over mij',
    heading: 'Bas Huisman',
    bio: [
      'Werktuigbouwkundig ingenieur met een focus op precisie mechatronica en praktijkgerichte fabricage. BSc en MSc (Cum Laude) aan de TU Eindhoven, momenteel promovendus in de groep Precision Engineering.',
      'Via Thalomex neem ik naast mijn promotieonderzoek externe opdrachten aan. Ik werk met techbedrijven, startups en R&amp;D-teams die mechatronisch ontwerp of DFM-kennis nodig hebben.',
    ],
    stats: [
      { nr: 'PhD',  label: 'Technische Universiteit Eindhoven' },
      { nr: '6+',   label: 'Jaar ervaring in de industrie'     },
    ],
    tags: [
      'Mechanische conceptontwikkeling',
      'Mechatronica',
      'CAD / STEP',
      
      'PoC-ontwerp',
      'Haalbaarheidsanalyse',
    ],
    photoAlt:    'Bas Huisman',
    captionName: 'Bas Huisman',

    competences: {
      heading: 'Competenties',
      groups: [
        {
          title: 'Ontwerp',
          items: [
            'Statisch bepaald ontwerp; redeneren in vrijheidsgraden',
            'Precisiemechanismen met elastische elementen (bladveren, flexures)',
            'Piëzo-elektrische actuatorsystemen',
            'Dynamische prestatie-optimalisatie: lage massa, hoge stijfheid',
            'Integratie van dimensionale metrologie',
            'CAD-modelleren en productiedocumentatie',
          ],
        },
        {
          title: 'Analyse',
          items: [
            'Constructiemechanica: spanning, rek en vermoeiing',
            'Eindige-elementenmethode: statisch, dynamisch, thermisch en multi-fysisch',
            'Modaalanalyse en dynamisch gedragsmodellering',
            'Positienauwkeurigheid en thermo-mechanische stabiliteitsschatting',
            'Systeemmodellering en simulatie',
          ],
        },
        {
          title: 'Werkwijze',
          items: [
            'Volledige ontwerpcyclus: concept → detailontwerp → prototype → test',
            'Systems engineering: complexe problemen terugbrengen tot de kern',
            'Hands-on fabricage: verspanen, assemblage en testopstelling',
            'Productiedocumentatie voor directe overdracht aan leveranciers',
            'Bondige technische rapportage en to-the-point presentaties',
          ],
        },
      ],
    },
  },

  /* ── Contact ────────────────────────────────────────────── */
  contact: {
    label:   'Contact',
    heading: 'Een technische uitdaging?',
    intro: [
      'Of je nu een concreet project hebt of gewoon iets wilt doordenken, stuur gerust een berichtje. Ik reageer doorgaans binnen één werkdag.',
      'Ik werk met techbedrijven, startups en R&amp;D-teams die mechatronisch ontwerp of DFM-kennis nodig hebben.',
    ],
    rows: [
      { label: 'E-mail',   value: 'bas@thalomex.nl',              link: 'mailto:bas@thalomex.nl'                   },
      { label: 'LinkedIn', value: 'linkedin.com/in/bas-huisman',  link: 'https://linkedin.com/in/bas-huisman'      },
      { label: 'KvK',      value: '98206303',                     link: null                                       },
    ],
  },

  /* ── Footer ─────────────────────────────────────────────── */
  footer: {
    copy: '&copy; 2026 Thalomex – Bas Huisman',
  },

};
