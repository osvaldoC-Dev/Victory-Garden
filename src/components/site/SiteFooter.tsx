import { Link } from "@tanstack/react-router";
import { directionsHref, reserveMailto, site, telHref } from "@/lib/site";

const footerLinks = [
  { label: "Menu", to: "/menu" },
  { label: "Experience", to: "/experience" },
  { label: "Events", to: "/events" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-night text-ivory">
      <div className="mx-auto max-w-[1400px] px-5 pt-20 pb-28 sm:px-8 lg:pb-20">
        <div className="border-b border-ivory/15 pb-16 text-center">
          <p className="eyebrow text-gold">Make tonight special</p>
          <h2 className="font-display mx-auto mt-5 max-w-3xl text-4xl leading-[1.05] text-ivory sm:text-6xl">
            A table in the garden is waiting.
          </h2>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={reserveMailto}
              className="eyebrow rounded-full bg-ivory px-8 py-4 text-charcoal transition-colors hover:bg-gold"
            >
              Reserve a Table
            </a>
            <a
              href={telHref(site.phones[0])}
              className="eyebrow rounded-full border border-ivory/40 px-8 py-4 text-ivory transition-colors hover:bg-ivory/10"
            >
              Call {site.phones[0]}
            </a>
          </div>
        </div>

        <div className="grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl">Victory Garden Café</p>
            <p className="mt-3 text-sm text-ivory/70">
              {site.tagline}
              <br />
              {site.city}
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow text-ivory/50">Explore</p>
            <ul className="mt-5 space-y-3 text-sm">
              {footerLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-ivory/80 transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="text-sm not-italic">
            <p className="eyebrow text-ivory/50">Visit</p>
            <p className="mt-5 text-ivory/80">
              {site.address.street}
              <br />
              {site.address.locality}, {site.address.region} {site.address.postalCode}
            </p>
            <p className="mt-4 space-y-1">
              {site.phones.map((p) => (
                <a
                  key={p}
                  href={telHref(p)}
                  className="block text-ivory/80 transition-colors hover:text-gold"
                >
                  {p}
                </a>
              ))}
              <a
                href={`mailto:${site.email}`}
                className="block text-ivory/80 transition-colors hover:text-gold"
              >
                {site.email}
              </a>
              <a
                href={directionsHref}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-gold underline-offset-4 hover:underline"
              >
                Get directions
              </a>
            </p>
          </address>
        </div>

        <p className="border-t border-ivory/15 pt-8 text-xs text-ivory/45">
          © {new Date().getFullYear()} Victory Garden Café · Astoria, New York
        </p>
      </div>
    </footer>
  );
}
