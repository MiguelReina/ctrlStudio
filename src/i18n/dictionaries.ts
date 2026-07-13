export type Locale = "es" | "en";

export const locales: Locale[] = ["es", "en"];

export const dictionaries = {
  es: {
    nav: {
      services: "Servicios",
      projects: "Proyectos",
      about: "Nosotros",
      contact: "Contacto",
    },
    hero: {
      tagline: "Tu Visión Digital, Nuestro Código en Movimiento",
      subtitle:
        "Transformamos ideas en soluciones digitales que generan resultados reales",
      cta: "Comienza Tu Proyecto",
    },
    services: {
      titlePrefix: "Nuestros",
      titleHighlight: "Servicios",
      items: [
        {
          icon: "🌐",
          title: "Desarrollo Web",
          description:
            "Diseñamos y desarrollamos sitios web modernos, responsivos y de alto rendimiento adaptados completamente a las necesidades de tu negocio.",
        },
        {
          icon: "📱",
          title: "Aplicaciones Móviles",
          description:
            "Creamos aplicaciones nativas y multiplataforma que conectan con tus usuarios, ofreciendo experiencias intuitivas y funcionales.",
        },
        {
          icon: "⚙️",
          title: "Soluciones a Medida",
          description:
            "Cada proyecto es único. Desarrollamos exactamente lo que tu negocio necesita, sin restricciones ni limitaciones predefinidas.",
        },
      ],
    },
    about: {
      title: "¿Por qué elegir CTRL Studio?",
      description:
        "Somos un equipo apasionado de desarrolladores y diseñadores comprometidos con transformar tus ideas en soluciones digitales impactantes. Con experiencia en tecnologías modernas y metodologías ágiles, garantizamos proyectos de calidad superior.",
      features: [
        "Desarrollo profesional con las últimas tecnologías",
        "Equipo creativo y orientado a resultados",
        "Soporte y mantenimiento continuo",
        "Presupuestos competitivos y transparentes",
        "Comunicación clara durante todo el proyecto",
      ],
      visualTagline: "Controlando tu éxito digital",
    },
    projects: {
      titlePrefix: "Proyectos",
      titleHighlight: "Creados",
      visitSite: "Visitar sitio",
      previous: "Proyecto anterior",
      next: "Siguiente proyecto",
      listLabel: "Lista de proyectos",
      items: [
        {
          id: "revloh",
          name: "Revloh",
          description:
            "Sitio web para Healthy Pet, marca ecuatoriana de productos naturales para el cuidado y bienestar de mascotas.",
        },
      ],
    },
    contact: {
      title: "¿Listo para iniciar?",
      description:
        "Nos encantaría escuchar sobre tu proyecto y cómo podemos ayudarte a alcanzar tus objetivos digitales.",
      phoneLabel: "Teléfono",
      emailLabel: "Email",
    },
    form: {
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre completo",
      emailLabel: "Email",
      emailPlaceholder: "tu@email.com",
      messageLabel: "Mensaje",
      messagePlaceholder: "Cuéntanos sobre tu proyecto...",
      submit: "Enviar Mensaje",
      submitting: "Enviando...",
      confirmation: "¡Gracias por tu mensaje! Te contactaremos pronto.",
      error:
        "No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos directamente por email.",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      tagline: "Transformando ideas en código | Desarrollo Web y Móvil",
    },
    language: {
      switchTo: "Cambiar a inglés",
    },
    theme: {
      toDark: "Activar modo oscuro",
      toLight: "Activar modo claro",
    },
  },
  en: {
    nav: {
      services: "Services",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    hero: {
      tagline: "Your Digital Vision, Our Code in Motion",
      subtitle: "We turn ideas into digital solutions that deliver real results",
      cta: "Start Your Project",
    },
    services: {
      titlePrefix: "Our",
      titleHighlight: "Services",
      items: [
        {
          icon: "🌐",
          title: "Web Development",
          description:
            "We design and build modern, responsive, high-performance websites fully tailored to your business needs.",
        },
        {
          icon: "📱",
          title: "Mobile Apps",
          description:
            "We create native and cross-platform applications that connect with your users, delivering intuitive and functional experiences.",
        },
        {
          icon: "⚙️",
          title: "Custom Solutions",
          description:
            "Every project is unique. We build exactly what your business needs, with no predefined restrictions or limitations.",
        },
      ],
    },
    about: {
      title: "Why choose CTRL Studio?",
      description:
        "We are a passionate team of developers and designers committed to turning your ideas into impactful digital solutions. With experience in modern technologies and agile methodologies, we guarantee top-quality projects.",
      features: [
        "Professional development with the latest technologies",
        "Creative, results-driven team",
        "Ongoing support and maintenance",
        "Competitive, transparent budgets",
        "Clear communication throughout the project",
      ],
      visualTagline: "Taking control of your digital success",
    },
    projects: {
      titlePrefix: "Projects",
      titleHighlight: "We Built",
      visitSite: "Visit website",
      previous: "Previous project",
      next: "Next project",
      listLabel: "Project list",
      items: [
        {
          id: "revloh",
          name: "Revloh",
          description:
            "Website for Healthy Pet, an Ecuadorian brand of natural products for pet care and wellness.",
        },
      ],
    },
    contact: {
      title: "Ready to get started?",
      description:
        "We would love to hear about your project and how we can help you reach your digital goals.",
      phoneLabel: "Phone",
      emailLabel: "Email",
    },
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your full name",
      emailLabel: "Email",
      emailPlaceholder: "you@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell us about your project...",
      submit: "Send Message",
      submitting: "Sending...",
      confirmation: "Thanks for your message! We will get back to you soon.",
      error:
        "We could not send your message. Please try again or email us directly.",
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Turning ideas into code | Web & Mobile Development",
    },
    language: {
      switchTo: "Cambiar a español",
    },
    theme: {
      toDark: "Enable dark mode",
      toLight: "Enable light mode",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];
