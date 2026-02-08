import type { LandingContent } from "@/types/landing";

interface JsonLdProps {
  content: LandingContent;
}

export function JsonLd({ content }: JsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "911 Medical Marketing",
    "description": content.hero.descriptionLead + " " + content.hero.descriptionHighlight,
    "url": "https://vsl2-page.vercel.app",
    "telephone": "+5200000000", // Placeholder - Debería venir del content
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MX"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
