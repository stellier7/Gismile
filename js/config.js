/**
 * =============================================================================
 * CLIENT CONFIG — SINGLE SOURCE OF TRUTH
 * =============================================================================
 * Gi Smile HN — Colonia Kennedy, Tegucigalpa, Honduras
 *
 * Edit THIS FILE ONLY when customizing practice content.
 * Empty strings / empty arrays hide the related UI automatically.
 *
 * IMAGE ASSETS — drop files under /assets/images/ (see comments below).
 * =============================================================================
 */

const config = {
  // ---------------------------------------------------------------------------
  // SITE DEFAULTS
  // ---------------------------------------------------------------------------
  defaultLanguage: "es",

  // OPTIONAL — overrides auto-generated meta description (used in <meta> + SEO)
  metadata: {
    es: "Gi Smile HN, clínica dental en Colonia Kennedy, Tegucigalpa — limpiezas, ortodoncia, cirugía, implantes y más. Agenda tu cita hoy mismo.",
    en: "Gi Smile HN — preventive and specialized dental clinic in Colonia Kennedy, Tegucigalpa. Cleanings, orthodontics, surgery, implants, and more. Book your appointment today.",
  },

  // ---------------------------------------------------------------------------
  // PRACTICE INFO
  // ---------------------------------------------------------------------------
  practice: {
    name: "Gi Smile HN",

    tagline: {
      en: "Preventive and specialized dental clinic to transform your smile.",
      es: "Clínica dental preventiva y especializada en transformar tu sonrisa",
    },

    phone: "+504 8960-0959",
    phoneTel: "50489600959",

    address: {
      street: "Colonia Kennedy, 2da entrada, calle frente al portón de Ciudad Mujer",
      city: "Tegucigalpa",
      state: "Honduras",
      zip: "",
      // OPTIONAL — override embed/directions query; defaults to full address
      mapsQuery:
        "Colonia Kennedy, 2da entrada, calle frente al portón de Ciudad Mujer, Tegucigalpa, Honduras",
      // OPTIONAL — exact Google Maps link for "Get Directions"
      mapsLink: "https://maps.app.goo.gl/ksY18r2v4zbuxBF79",
    },

    hours: {
      mon: "7:30 AM – 5:00 PM",
      tue: "7:30 AM – 5:00 PM",
      wed: "7:30 AM – 5:00 PM",
      thu: "7:30 AM – 5:00 PM",
      fri: "7:30 AM – 5:00 PM",
      sat: "8:30 AM – 4:00 PM",
      sun: "8:00 AM – 12:00 PM",
    },

    email: "gismile.dentalstudio@gmail.com",

    // OPTIONAL — leave blank to hide trust-bar stats (entire bar hidden when all empty)
    yearsInPractice: "",
    patientRating: "",
  },

  // ---------------------------------------------------------------------------
  // BRANDING
  // ---------------------------------------------------------------------------
  branding: {
    primaryColor: "#C9A227",
    accentColor: "#1A1A1A",
    primaryDark: "",
    softBg: "",
    logoUrl: "assets/images/logo.jpeg",
    heroImageUrl: "assets/images/hero.jpeg",
  },

  // ---------------------------------------------------------------------------
  // UI COPY (labels, nav, section headers, buttons) — per language
  // ---------------------------------------------------------------------------
  ui: {
    en: {
      nav: {
        home: "Home",
        services: "Services",
        dentists: "Our Team",
        gallery: "Gallery",
        testimonials: "Reviews",
        financing: "Financing",
        location: "Location",
        book: "Book Appointment",
        openMenu: "Open menu",
        closeMenu: "Close menu",
      },
      hero: {
        badge: "New Patients Welcome",
        cta: "Book Appointment",
      },
      trust: {
        years: "Years in practice",
        rating: "Patient rating",
        licensed: "Licensed & certified",
      },
      sections: {
        services: "Our Services",
        servicesLead: "Comprehensive care to transform your smile.",
        dentists: "Meet Our Team",
        dentistsLead: "Experienced specialists dedicated to your oral health.",
        gallery: "Smile Gallery",
        galleryLead: "Real results from patients like you.",
        testimonials: "What Patients Say",
        testimonialsLead: "Trusted by families in our community.",
        financing: "Financing",
        financingLead: "Flexible payment options to fit your budget.",
        location: "Visit Us",
        locationLead: "Colonia Kennedy, Tegucigalpa — we look forward to seeing you.",
      },
      services: {
        expand: "Learn more",
        collapse: "Show less",
      },
      location: {
        hours: "Hours",
        call: "Call Us",
        directions: "Get Directions",
        mapInteract: "Tap to interact with the map",
        closed: "Closed",
        days: {
          mon: "Monday",
          tue: "Tuesday",
          wed: "Wednesday",
          thu: "Thursday",
          fri: "Friday",
          sat: "Saturday",
          sun: "Sunday",
        },
      },
      stickyBar: {
        cta: "Book Appointment",
      },
      footer: {
        contact: "Contact",
        hours: "Hours",
        follow: "Follow Us",
        rights: "All rights reserved.",
        developedBy: "Developed by",
      },
      langToggle: {
        label: "Language",
        en: "EN",
        es: "ES",
      },
      gallery: {
        viewImage: "View image",
        close: "Close preview",
        previous: "Previous image",
        next: "Next image",
        preview: "Image preview",
      },
    },
    es: {
      nav: {
        home: "Inicio",
        services: "Servicios",
        dentists: "Nuestro Equipo",
        gallery: "Galería",
        testimonials: "Opiniones",
        financing: "Financiamiento",
        location: "Ubicación",
        book: "Agendar Cita",
        openMenu: "Abrir menú",
        closeMenu: "Cerrar menú",
      },
      hero: {
        badge: "Nuevos Pacientes Bienvenidos",
        cta: "Agendar Cita",
      },
      trust: {
        years: "Años de experiencia",
        rating: "Calificación de pacientes",
        licensed: "Licenciados y certificados",
      },
      sections: {
        services: "Nuestros Servicios",
        servicesLead: "Cuidado integral para transformar tu sonrisa.",
        dentists: "Conoce a Nuestro Equipo",
        dentistsLead: "Especialistas con experiencia dedicadas a tu salud bucal.",
        gallery: "Galería de Sonrisas",
        galleryLead: "Resultados reales de pacientes como tú.",
        testimonials: "Lo Que Dicen Nuestros Pacientes",
        testimonialsLead: "La confianza de familias de nuestra comunidad.",
        financing: "Financiamiento",
        financingLead: "Opciones de pago flexibles que se adaptan a tu presupuesto.",
        location: "Visítanos",
        locationLead: "Colonia Kennedy, Tegucigalpa — te esperamos con gusto.",
      },
      services: {
        expand: "Ver más",
        collapse: "Ver menos",
      },
      location: {
        hours: "Horario",
        call: "Llámanos",
        directions: "Cómo Llegar",
        mapInteract: "Toca para interactuar con el mapa",
        closed: "Cerrado",
        days: {
          mon: "Lunes",
          tue: "Martes",
          wed: "Miércoles",
          thu: "Jueves",
          fri: "Viernes",
          sat: "Sábado",
          sun: "Domingo",
        },
      },
      stickyBar: {
        cta: "Agendar Cita",
      },
      footer: {
        contact: "Contacto",
        hours: "Horario",
        follow: "Síguenos",
        rights: "Todos los derechos reservados.",
        developedBy: "Desarrollado por",
      },
      langToggle: {
        label: "Idioma",
        en: "EN",
        es: "ES",
      },
      gallery: {
        viewImage: "Ver imagen",
        close: "Cerrar vista previa",
        previous: "Imagen anterior",
        next: "Imagen siguiente",
        preview: "Vista previa de imagen",
      },
    },
  },

  // ---------------------------------------------------------------------------
  // DENTISTS
  // ---------------------------------------------------------------------------
  dentists: [
    {
      name: "Dra. Gisselle Romero",
      title: {
        en: "Lead Dentist · DDS",
        es: "Dentista Principal · Cirujana Dentista",
      },
      bio: {
        en: "Dr. Romero leads Gi Smile HN with a preventive, patient-first approach. She specializes in general dentistry and cosmetic treatments — from cleanings and restorations to smile makeovers — always explaining each step clearly so you feel informed and at ease.",
        es: "La Dra. Romero lidera Gi Smile HN con un enfoque preventivo y centrado en el paciente. Se especializa en odontología general y tratamientos cosméticos — desde limpiezas y restauraciones hasta transformaciones de sonrisa — siempre explicando cada paso con claridad para que te sientas informado y tranquilo.",
      },
      photoUrl: "assets/images/gisselle-romero.jpeg",
    },
    {
      name: "Dra. Judith Arguijo",
      title: {
        en: "Associate Dentist · DDS",
        es: "Dentista Asociada · Cirujana Dentista",
      },
      bio: {
        en: "Dr. Arguijo brings gentle, meticulous care to every visit. Her focus includes aligner therapy, implants, and restorative dentistry — combining precision with a warm bedside manner that puts even nervous patients at ease.",
        es: "La Dra. Arguijo aporta un cuidado gentil y meticuloso en cada visita. Su enfoque incluye terapia con alineadores, implantes y odontología restaurativa — combinando precisión con un trato cálido que tranquiliza incluso a los pacientes más nerviosos.",
      },
      photoUrl: "assets/images/judith-arguijo.jpeg",
    },
  ],

  // ---------------------------------------------------------------------------
  // SERVICES
  // ---------------------------------------------------------------------------
  services: [
    {
      name: { en: "General Dentistry", es: "Odontología General" },
      description: {
        en: "Preventive exams, cleanings, fillings, and everyday care to keep your whole family's smiles healthy.",
        es: "Exámenes preventivos, limpiezas, resinas y cuidado diario para mantener sonrisas sanas en toda la familia.",
      },
      icon: "general",
    },
    {
      name: { en: "Cosmetic Dentistry", es: "Odontología Cosmética" },
      description: {
        en: "Whitening, veneers, and aesthetic treatments designed for a natural, confident smile.",
        es: "Blanqueamiento, carillas y tratamientos estéticos diseñados para una sonrisa natural y segura.",
      },
      icon: "cosmetic",
    },
    {
      name: { en: "Clear Aligners", es: "Alineadores" },
      description: {
        en: "Discreet aligners that straighten teeth with personalized plans and regular check-ins.",
        es: "Alineadores discretos que enderezan los dientes con planes personalizados y seguimientos regulares.",
      },
      icon: "aligners",
    },
    {
      name: { en: "Dental Implants", es: "Implantes Dentales" },
      description: {
        en: "Restore missing teeth with durable, natural-looking implants planned for comfort and long-term function.",
        es: "Recupera dientes perdidos con implantes duraderos y de aspecto natural, pensados para comodidad y función.",
      },
      icon: "implants",
    },
  ],

  // ---------------------------------------------------------------------------
  // TESTIMONIALS
  // ---------------------------------------------------------------------------
  testimonials: [
    {
      quote: {
        en: "From the first appointment I felt welcomed. Dr. Romero explained everything about my cleaning and gave me tips I actually use at home. The clinic is spotless and very professional.",
        es: "Desde la primera cita me sentí bien recibida. La Dra. Romero me explicó todo sobre mi limpieza y me dio consejos que de verdad uso en casa. La clínica está impecable y muy profesional.",
      },
      author: "María Elena S.",
      rating: 5,
    },
    {
      quote: {
        en: "I started aligners with Dr. Arguijo and the process has been smooth from day one. Clear updates at every visit and a team that always answers my questions on WhatsApp.",
        es: "Empecé alineadores con la Dra. Arguijo y el proceso ha sido fluido desde el primer día. Actualizaciones claras en cada visita y un equipo que siempre responde mis preguntas por WhatsApp.",
      },
      author: "Carlos M.",
      rating: 5,
    },
    {
      quote: {
        en: "I came in for a cosmetic consultation and left with a plan that fit my budget. Gi Smile transformed my smile without pressure — I recommend them to everyone in Kennedy.",
        es: "Vine por una consulta cosmética y salí con un plan que se ajustó a mi presupuesto. Gi Smile transformó mi sonrisa sin presión — los recomiendo a todos en Kennedy.",
      },
      author: "Ana Lucía R.",
      rating: 5,
    },
  ],

  // ---------------------------------------------------------------------------
  // FINANCING IMAGES
  // ---------------------------------------------------------------------------
  financingImages: [
    {
      src: "assets/images/financing/Bac.png",
      alt: {
        en: "BAC Credomatic financing",
        es: "Financiamiento BAC Credomatic",
      },
    },
    {
      src: "assets/images/financing/Ficohsa.png",
      alt: {
        en: "Ficohsa financing",
        es: "Financiamiento Ficohsa",
      },
    },
  ],

  gallery: [
    "assets/images/gallery/IMG_0421.jpeg",
    "assets/images/gallery/IMG_0423.jpeg",
    "assets/images/gallery/IMG_0425.jpeg",
    "assets/images/gallery/IMG_0426.jpeg",
    "assets/images/gallery/IMG_0427.jpeg",
    "assets/images/gallery/IMG_0428.jpeg",
    "assets/images/gallery/IMG_0429.jpeg",
  ],

  // ---------------------------------------------------------------------------
  // SOCIAL LINKS — leave blank to hide that icon
  // ---------------------------------------------------------------------------
  socials: {
    instagram: "https://www.instagram.com/gismilehn",
    facebook: "https://www.facebook.com/profile.php?id=61568309054456",
  },
};

// Expose globally for app.js (no bundler / no modules required)
window.SITE_CONFIG = config;
