export type Locale = "es" | "en";

export const locales: Locale[] = ["es", "en"];

export const dictionaries = {
  es: {
    nav: {
      services: "Servicios",
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
      confirmation: "¡Gracias por tu mensaje! Te contactaremos pronto.",
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
      confirmation: "Thanks for your message! We will get back to you soon.",
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
