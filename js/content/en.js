/* ═══════════════════════════════════════════════════════════
   THALOMEX — English content  |  v0.2.5
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
    sub:   'From technical question to working hardware',
    cta:   'Get in touch →',
  },

  /* ── Services ───────────────────────────────────────────── */
  services: {
    label:   'Services',
    heading: 'From technical question to working hardware',
    items: [
      {
        img:   'img/feasibility.jpg',
        title: 'Feasibility & Concept',
        text:  'Does the physics allow it? Is the architecture sound? Is there a simpler way? I sketch, calculate back-of-the-envelope and get to a grounded concept before anything goes into CAD.',
      },
      {
        img:   'img/detailed_design.jpg',
        title: 'Detailed Design',
        text:  'Once the concept holds up, I work it out fully: 3D model, production drawings, tolerances, supplier documentation. Ready to manufacture.',
      },
      {
        img:   'img/poc_proto.jpg',
        title: 'PoC, Prototype, Hardware',
        text:  'The part that actually tells you whether it works. I design for buildability, machine parts where needed, and assemble into a testable prototype.',
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
        title:    'Low-Order Shape Control Through a Deformable Wafer Table (ASPE)',
        text:     'Oral presentation at the ASPE Annual Meeting 2025. Extended abstract on applying low-order shape control in a prototype wafer table for higher-order correction in wafer scanners.',
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
        title:    'Prototype Development of a Deformable Wafer Table (DSPE)',
        text:     'Oral presentation and live demonstration at the DSPE Conference 2025. Extended abstract on a prototype six-DoF deformable wafer table using stacked LiNbO₃ piezoelectric layers with independent control over in- and out-of-plane actuation. Awarded: DSPE Best Demonstration 2025.',
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
        tags:     ['Precision mechanics', 'Sensor integration', 'CAD'],
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
        text:     'Designed and fully realised an improved fibre tensile tester, including machining all parts myself. Covered the complete cycle from concept through manufacturing to a working measurement setup at TU/e\'s Mechanics of Materials lab. Grade: 9.5/10.',
        tags:     ['Machine design', 'Manufacturing', 'Realisation', 'Mechanics of Materials'],
        link:     null,
        linkText: null,
      },
    ],
  },

  /* ── About ──────────────────────────────────────────────── */
  about: {
    label:   'About',
    heading: 'Bas Huisman',
    bio: [
      'Mechanical engineer with a focus on precision mechatronics and hands-on manufacturing. BSc and MSc (Cum Laude) from Eindhoven University of Technology, currently PhD candidate in the Precision Engineering group at TU/e.',
      'Thalomex is the vehicle through which I take on external engineering work alongside my PhD. I work with tech companies, startups and R&amp;D teams that need mechatronic design or DFM expertise.',
    ],
    stats: [
      { nr: 'PhD',  label: 'Eindhoven University of Technology' },
      { nr: '6+',   label: 'Years of industry experience'       },
    ],
    tags: [
      'Mechanical concept development',
      'Mechatronics',
      'CAD / STEP',
      
      'PoC design',
      'Feasibility analysis',
    ],
    photoAlt:    'Bas Huisman',
    captionName: 'Bas Huisman',

    competences: {
      heading: 'Competences',
      groups: [
        {
          title: 'Design',
          items: [
            'Statically determined design; reasoning in degrees of freedom',
            'Precision mechanisms using elastic elements (leafsprings, flexures)',
            'Piezoelectric actuator systems',
            'Dynamic performance optimisation: low mass, high stiffness structures',
            'Dimensional metrology integration',
            'CAD modelling and production documentation',
          ],
        },
        {
          title: 'Analysis',
          items: [
            'Structural mechanics: stress, strain and fatigue',
            'Finite element analysis: static, dynamic, thermal and multi-physics',
            'Modal analysis and dynamic behaviour modelling',
            'Position accuracy and thermo-mechanical stability estimation',
            'System-level modelling and simulation',
          ],
        },
        {
          title: 'Process',
          items: [
            'Full design cycle: concept → detailed design → prototype → test',
            'Systems engineering: reducing complex problems to their essence',
            'Hands-on manufacturing: machining, assembly and test setup',
            'Manufacturing documentation for direct handover to suppliers',
            'Concise technical reporting and to-the-point presentations',
          ],
        },
      ],
    },
  },

  /* ── Contact ────────────────────────────────────────────── */
  contact: {
    label:   'Contact',
    heading: 'Have a technical challenge?',
    intro: [
      'Whether you have a concrete project or just want to think something through, feel free to get in touch. I typically respond within one business day.',
      'I work with tech companies, startups and R&amp;D teams that need mechatronic design or DFM expertise.',
    ],
    rows: [
      { label: 'Email',    value: 'bas.huisman@thalomex.nl',              link: 'mailto:bas.huisman@thalomex.nl'                   },
      { label: 'LinkedIn', value: 'linkedin.com/in/bas-huisman',  link: 'https://linkedin.com/in/bas-huisman'      },
      { label: 'CoC',      value: '98206303',                     link: null                                       },
    ],
  },

  /* ── Footer ─────────────────────────────────────────────── */
  footer: {
    copy: '&copy; 2026 Thalomex – Bas Huisman',
  },

};
