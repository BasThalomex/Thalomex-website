/* ═══════════════════════════════════════════════════════════
   THALOMEX — English content
   Edit this file to update all website text.
   ═══════════════════════════════════════════════════════════ */

var content = {

  /* ── Navigation ─────────────────────────────────────────── */
  nav: {
    work:    'Work',
    about:   'About',
    contact: 'Contact',
    fab:     'Get in touch →',
  },

  /* ── Hero ───────────────────────────────────────────────── */
  hero: {
    label: 'Engineering Consultant',
    sub:   'From technical question to concrete concept —<br>fast, sharp, and without overhead.',
    cta:   'Get in touch →',
  },

  /* ── Services ───────────────────────────────────────────── */
  services: {
    label:   'Services',
    heading: 'From question to working hardware',
    items: [
      {
        title: 'Feasibility & Concept',
        text:  'Back-of-the-envelope before anything goes into CAD. I check whether the approach is sound, find the real question behind the ask, and sketch a concept direction — fast.',
      },
      {
        title: 'Mechanical Design',
        text:  'From validated concept to a full 3D model and production-ready drawings. NX Unigraphics, STEP export, supplier specs — packaged so a machine shop can start straight away.',
      },
      {
        title: 'PoC & Prototype',
        text:  'A working prototype you can actually test. I design, specify, order, and assemble — or machine the parts myself when that\'s the fastest path to a result.',
      },
    ],
  },

  /* ── Work carousel ──────────────────────────────────────── */
  work: {
    label:   'Work &amp; experience',
    heading: 'Projects, publications &amp; background',

    /*
     * Each card needs:
     *   type       : 'image' | 'text-header'
     *   image      : path to image file           (only for type:'image')
     *   imageAlt   : alt text                     (only for type:'image')
     *   headerText : text shown in dark header    (only for type:'text-header', use <br> for line breaks)
     *   badge      : small label overlaid on image / header
     *   org        : organisation + year string
     *   title      : card heading
     *   text       : paragraph text
     *   tags       : array of tag strings
     *   link       : URL string or null
     *   linkText   : link label or null
     */
    cards: [
      {
        type:     'image',
        image:    'img/cover-aspe.jpg',
        imageAlt: 'ASPE conference paper cover',
        badge:    'Conference · Nov 2025',
        org:      'TU/e &amp; ASML · ASPE 2025',
        phd:      true,
        title:    'Low-Order Shape Control Through a Deformable Wafer Table — ASPE',
        text:     'Oral presentation at the ASPE Annual Meeting 2025. Extended abstract on the application of low-order shape control in a prototype wafer table for higher-order correction in wafer scanners, using a stacked LiNbO₃ piezoelectric deformable wafer table.',
        tags:     ['LiNbO3', 'Wafer Table', 'ASML', 'Zernike polynomials'],
        link:     null,
        linkText: null,
      },
      {
        type:     'image',
        image:    'img/cover-dspe.jpg',
        imageAlt: 'DSPE conference paper cover',
        badge:    'Conference · Sept 2025',
        org:      'TU/e &amp; ASML · DSPE 2025',
        phd:      true,
        title:    'Prototype Development of a Deformable Wafer Table — DSPE',
        text:     'Oral presentation and live demonstration at the DSPE Conference 2025. Extended abstract on a prototype six-DoF deformable wafer table using stacked LiNbO₃ piezoelectric layers achieving independent control over in- and out-of-plane actuation. Awarded: DSPE Best Demonstration 2025',
        tags:     ['Precision mechatronics', 'Piezo', 'ASML', 'Best Demo Award'],
        link:     'https://research.tue.nl/en/prizes/best-demonstration-award/',
        linkText: 'View award →',
      },
      {
        type:     'image',
        image:    'img/cover-adjuster.jpg',
        imageAlt: 'Fine-adjustable capacitive sensor holder',
        badge:    'Design · June 2025',
        org:      'TU/e &amp; ASML · 2024–present',
        phd:      true,
        title:    'Fine-Adjustable Capacitive Sensor Holder',
        text:     'Designed a precision-adjustable mount for capacitive displacement sensors, enabling fine positioning for accurate surface shape measurements on the deformable substrate table.',
        tags:     ['Precision mechanics', 'Sensor integration', 'CAD / NX'],
        link:     null,
        linkText: null,
      },
      {
        type:     'image',
        image:    'img/cover-prototype.jpg',
        imageAlt: 'Mk.IV prototype deformable substrate table',
        badge:    'Prototype · March 2025',
        org:      'TU/e &amp; ASML · 2024–present',
        phd:      true,
        title:    'Mk.4 Prototype Deformable Substrate Table',
        text:     'Mechanical design and realisation of the fourth-generation prototype substrate table for a deformable wafer stage, featuring stacked piezoelectric actuators for independent in-plane and out-of-plane shape control.',
        tags:     ['Precision mechanics', 'Piezo', 'Prototype', 'ASML'],
        link:     null,
        linkText: null,
      },
      {
        type:     'image',
        image:    'img/cover-graduation-web.jpg',
        imageAlt: 'MSc thesis cover – Keck II deployment mechanism',
        badge:    'MSc Thesis · 9.5/10',
        org:      'TNO · May 2023–Mar 2024',
        title:    'Deployment Mechanism for the Keck II Telescope\'s Adaptive Secondary Mirror',
        text:     'Architectural design of a deployment mechanism for the potential adaptive secondary mirror of the Keck II telescope, including structural analysis of CFRP for the backing structure. Grade: 9.5.',
        tags:     ['Space mechanisms', 'CFRP', 'Structural analysis'],
        links: [
          { url: 'https://research.tue.nl/en/studentTheses/architectural-design-of-a-deployment-mechanism-for-the-keck-ii-te/', text: 'View thesis →' },
          { url: 'MICRONIEK_URL', text: 'Microniek article →' },
        ],
      },
      {
        type:     'image',
        image:    'img/cover-internship-web.jpg',
        imageAlt: 'Fiber Tensile Tester internship report cover',
        badge:    'Internship · 9.5/10',
        org:      'TU/e – EPC Lab · Jan–Apr 2023',
        title:    'Design &amp; Realisation of an Improved Fiber Tensile Tester',
        text:     'Designed and fully realised an improved fibre tensile tester — including machining all parts myself. Covered the complete cycle from concept through manufacturing to a working measurement setup at TU/e\'s Mechanics of Materials lab. Grade: 9.5/10.',
        tags:     ['Machine design', 'Manufacturing', 'Realisation', 'Mechanics of Materials'],
        link:     null,
        linkText: null,
      },
    ],
  },

  /* ── About ──────────────────────────────────────────────── */
  about: {
    label:   'About',
    heading: 'Engineer with a focus on precision',
    bio: [
      'Mechanical engineer with a background in precision mechatronics and hands-on design experience at Prodrive Technologies, TNO, and TU/e. MSc from Eindhoven University of Technology, currently PhD candidate in the Precision Engineering group at TU/e.',
      'Available through Thalomex for companies that need experienced engineering without the overhead.',
    ],
    stats: [
      { nr: 'PhD-Candidate',  label: 'Eindhoven University of Technology' },
      { nr: '6+',   label: 'Years of Industry experience'    },
    ],
    tags: [
      'Mechanical concept development',
      'Mechatronics',
      'CAD / STEP',
      'MATLAB',
      'PoC design',
      'Feasibility analysis',
    ],
    photoAlt:    'Bas Huisman',
    captionName: 'Bas Huisman',
  },

  /* ── Contact ────────────────────────────────────────────── */
  contact: {
    label:   'Contact',
    heading: 'Have a technical challenge?',
    intro: [
      'Whether you have a concrete project or just want to think something through — send a message. I typically respond within one business day.',
      'I work with tech companies, startups and R&amp;D teams that need an experienced engineer quickly.',
    ],
    rows: [
      { label: 'Email',    value: 'bas@thalomex.nl',              link: 'mailto:bas@thalomex.nl'                   },
      { label: 'LinkedIn', value: 'linkedin.com/in/bas-huisman',  link: 'https://linkedin.com/in/bas-huisman'      },
      { label: 'CoC',      value: '98206303',                     link: null                                       },
    ],
  },

  /* ── Footer ─────────────────────────────────────────────── */
  footer: {
    copy: '&copy; 2026 Thalomex – Bas Huisman',
  },

};
