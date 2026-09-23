import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import {
  directionsHref,
  eventMailto,
  mapEmbedSrc,
  reserveMailto,
  site,
  telHref,
} from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit & Reserve — Victory Garden Café, Astoria NY" },
      {
        name: "description",
        content:
          "Victory Garden Café, 21-69 Steinway Street, Astoria, NY 11105. Call (718) 274-2087 or (917) 373-7055 to reserve a table or plan an event.",
      },
      { property: "og:title", content: "Visit & Reserve — Victory Garden Café" },
      {
        property: "og:description",
        content: "Find us on Steinway Street in Astoria. Reserve a table or plan an event.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="grain bg-background pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="rule-gold" />
            <p className="eyebrow text-olive">Visit & Reserve</p>
          </div>
          <h1 className="font-display mt-6 max-w-3xl text-[clamp(2.6rem,6vw,5rem)] leading-[1]">
            Come find the <span className="italic text-terracotta">garden.</span>
          </h1>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal className="space-y-12">
            <div>
              <h2 className="eyebrow text-muted-foreground">Address</h2>
              <address className="font-display mt-4 text-3xl leading-tight not-italic">
                {site.address.street}
                <br />
                {site.address.locality}, {site.address.region} {site.address.postalCode}
              </address>
              <a
                href={directionsHref}
                target="_blank"
                rel="noreferrer"
                className="eyebrow mt-6 inline-block rounded-full bg-olive-deep px-8 py-4 text-ivory transition-colors hover:bg-olive"
              >
                Get Directions
              </a>
            </div>

            <div>
              <h2 className="eyebrow text-muted-foreground">Reservations</h2>
              <p className="mt-4 max-w-md leading-relaxed">
                Tables are booked by phone or email — call us and we'll find you a spot in
                the garden.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {site.phones.map((p) => (
                  <a
                    key={p}
                    href={telHref(p)}
                    className="eyebrow rounded-full border border-foreground/25 px-7 py-4 text-center transition-colors hover:bg-secondary"
                  >
                    Call {p}
                  </a>
                ))}
                <a
                  href={reserveMailto}
                  className="eyebrow rounded-full border border-foreground/25 px-7 py-4 text-center transition-colors hover:bg-secondary"
                >
                  Email a Request
                </a>
              </div>
            </div>

            <div>
              <h2 className="eyebrow text-muted-foreground">Private events</h2>
              <p className="mt-4 max-w-md leading-relaxed">
                Weddings, showers, baptisms, Sweet 16s and corporate dinners.
              </p>
              <a
                href={eventMailto}
                className="eyebrow mt-6 inline-block rounded-full border border-foreground/25 px-7 py-4 transition-colors hover:bg-secondary"
              >
                Plan Your Event
              </a>
            </div>

            <div>
              <h2 className="eyebrow text-muted-foreground">Hours</h2>
              <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                Hours change with the season, and the garden stays open later on warm
                evenings. Please call ahead for today's hours and happy hour times —
                happy hour runs on Thursdays.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-4 inline-block text-sm text-olive underline-offset-4 hover:underline"
              >
                {site.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <iframe
              title="Map showing Victory Garden Café at 21-69 Steinway Street, Astoria"
              src={mapEmbedSrc}
              loading="lazy"
              className="aspect-square w-full border border-border grayscale-[35%] lg:sticky lg:top-28"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
