import type { LandingContent } from "@/types/landing";

const surgeonImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDdDYm7XxrH9IYL4vm-HX9Vs9FOauvES6RRZyObLn1j26EUQXTGzgJjcmr6umoLCMJShcWMl6l-beYT28CfUv586TGQ71GNldakC9f0iCZwfIT_-vwyCYL0-GJgwR8rDqipZnzLWtWvgllwlxNp_AYEopkPxzAH99bCFAXW5-Zbnt0emOA4vys3-1UCwaHUQSWLklreWod2-VTjLIXqpzzapaQPDPy2tkCKKPTABKaSSmADMQKYznCgz3fd1uclYSRpOdAuuKkU";

const doctorImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDAJpQrWJh_B6q4-2vEcFYgxXRS6p0WbrMETdMJTYdpqDmEjZ2KHkHZqjCvvZ7-3raZvfvNZ_bJ_YJ2zg2QhYe6nYzSoYdKZjjln9Q7h_7OTZq0T64QqWRPRz4nzH2PdY6ZGj1DOm2_QDm0F33kasyG7to3Rn3TJ7S36HmQEqJfDREFrDmBmTe4Y3Kn2WcODHm_OjMCwrgpG4ZZiUsryc8iVH-rE41X61WI-U2stYYD28QICJOYnNu54siajbSi8FZXGuVtvkls";

export const landingContent: LandingContent = {
  navigation: {
    brand: {
      primary: "911",
      secondary: "MM",
      subtitle: "Surgeon Elite",
    },
    homeHref: "#",
    strategyLabel: "Estrategia",
    strategyHref: "#strategy",
  },
  hero: {
    badge: "Exclusivo: Cirujanos Bariatras",
    titlePrefix: "¡Solo para",
    titleHighlight: "Cirujanos Bariatras!",
    descriptionLead: "Sistema de adquisicion de pacientes premium. Generamos de",
    descriptionHighlight: "5 a 10 cirugias extras al mes",
    descriptionTail: "mediante posicionamiento de autoridad.",
    video: {
      thumbnailUrl: surgeonImage,
      watchLabel: "Ver Video Completo",
      stepLabel: "Paso 1",
      stepAction: "Ver analisis de mercado completo",
      duration: "04:26",
    },
    ctaStep: "Paso 2: Si viste el video",
    ctaLabel: "Agendar Sesion Estrategica",
    availability: "Disponibilidad limitada para Octubre",
  },
  strategy: [
    {
      id: "patients",
      kicker: "Sistema 01",
      title: "Flujo de Pacientes",
      description:
        "Sistema predecible para atraer candidatos calificados para cirugia bariatrica, eliminando la dependencia de referidos inestables.",
      icon: "patients",
    },
    {
      id: "roi",
      kicker: "Sistema 02",
      title: "ROI Medible",
      description:
        "Panel de control en tiempo real. Visualiza el costo por paciente, tasa de cierre y retorno de inversion exacto.",
      icon: "roi",
    },
    {
      id: "automation",
      kicker: "Sistema 03",
      title: "Automatizacion",
      description:
        "Sin bailar en TikTok. Implementamos embudos automatizados que educan y filtran al paciente antes de que llegue a consulta.",
      icon: "automation",
    },
  ],
  evidence: {
    badge: "Evidencia Clinica",
    titlePrefix: "Resultados que",
    titleHighlight: "Trascienden",
    quote: "La metodologia de 911 Medical Marketing transformo mi practica privada. Logramos atraer",
    highlightedQuote: "+250 pacientes interesados",
    quoteSuffix:
      "en un solo mes. Supero mis expectativas financieras y operativas.",
    doctorName: "Dr. Jonathan Gil",
    doctorRole: "Cirujano Bariatra",
    doctorResult: "+250 Pacientes Potenciales / Mes",
    imageUrl: doctorImage,
    avatarUrl: doctorImage,
  },
  footer: {
    companyName: "911 Medical Marketing",
    summary:
      "Especialistas en marketing de alto rendimiento para el sector salud. Enfocados exclusivamente en cirugia bariatrica.",
    legalLinks: [
      { label: "Politica de Privacidad", href: "#" },
      { label: "Terminos y Condiciones", href: "#" },
      { label: "Descargo de Responsabilidad", href: "#" },
    ],
    disclaimerTitle: "Aviso Importante",
    disclaimerText:
      "Este sitio no forma parte de Facebook ni de la empresa Meta Platforms, Inc. Ademas, este sitio no esta avalado por Facebook de ninguna manera. Facebook es una marca registrada de Meta Platforms, Inc. Los resultados pueden variar y no estan garantizados.",
    copyright: "(c) 2024 911 Medical Marketing. Todos los derechos reservados.",
    signature: "Designed for Excellence",
  },
};
