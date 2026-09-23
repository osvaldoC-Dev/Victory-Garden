export const site = {
  name: "Victory Garden Café",
  tagline: "Greek & Mediterranean Dining",
  city: "Astoria, New York",
  address: {
    street: "21-69 Steinway Street",
    locality: "Astoria",
    region: "NY",
    postalCode: "11105",
  },
  phones: ["(718) 274-2087", "(917) 373-7055"],
  email: "info@victorysweetshop.com",
  mapsQuery: "21-69+Steinway+Street,+Astoria,+NY+11105",
} as const;

export const telHref = (phone: string) => `tel:+1${phone.replace(/\D/g, "")}`;

export const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${site.mapsQuery}`;

export const mapEmbedSrc = `https://www.google.com/maps?q=${site.mapsQuery}&output=embed`;

export const reserveMailto = `mailto:${site.email}?subject=${encodeURIComponent(
  "Reservation request — Victory Garden Café",
)}&body=${encodeURIComponent(
  "Name:\nDate:\nTime:\nNumber of guests:\nSeating preference (garden / indoor):\nPhone:\nNotes:",
)}`;

export const eventMailto = `mailto:${site.email}?subject=${encodeURIComponent(
  "Private event inquiry — Victory Garden Café",
)}&body=${encodeURIComponent(
  "Name:\nType of celebration:\nPreferred date:\nApproximate guest count:\nPhone:\nWhat you have in mind:",
)}`;

export const navLinks = [
  { label: "Menu", to: "/menu" },
  { label: "Experience", to: "/experience" },
  { label: "Events", to: "/events" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export const eventTypes = [
  "Weddings",
  "Bridal showers",
  "Baby showers",
  "Sweet 16 celebrations",
  "Baptisms",
  "Corporate events",
  "Private celebrations",
] as const;
