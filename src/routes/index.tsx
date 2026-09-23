import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { images, signatureDishes, desserts } from "@/lib/dishes";
import { directionsHref, eventMailto, eventTypes, reserveMailto, site } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Victory Garden Café — Greek & Mediterranean Dining in Astoria, NY" },
      {
        name: "description",
        content:
          "An evening in the garden: Greek and Mediterranean dining, desserts and cocktails in an indoor/outdoor garden on Steinway Street, Astoria, New York.",
      },
      { property: "og:title", content: "Victory Garden Café — An Evening in the Garden" },
      {
        property: "og:description",
        content:
          "Greek & Mediterranean dining in the heart of Astoria. Garden seating, private events and desserts from Victory Sweet Shop.",
      },
      { property: "og:type", content: "restaurant.restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: site.name,
          servesCuisine: ["Greek", "Mediterranean"],
          telephone: site.phones[0],
          email: site.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address.street,
            addressLocality: site.address.locality,
            addressRegion: site.address.region,
            postalCode: site.address.postalCode,
            addressCountry: "US",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Experience />
      <Signatures />
      <Garden />
      <Events />
      <HappyHour />
      <Desserts />
      <WhyGuestsReturn />
      <Location />
    </>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      <img
        src={images.heroGarden}
        alt="Candlelit garden terrace with string lights and tables set for dinner"
        width={1920}
        height={1200}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night/92 via-night/40 to-night/55" />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-24 sm:px-8 sm:pb-20">
        <p className="eyebrow flex items-center gap-2 text-gold">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> {site.city}
        </p>
        <h1 className="font-display mt-5 max-w-5xl text-[clamp(3rem,10vw,8rem)] leading-[0.92] text-ivory">
          An Evening
          <br />
          in the <span className="italic text-gold">Garden</span>
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-ivory/85">
          Greek & Mediterranean dining in the heart of Astoria — under the trees, the
          string lights and an open sky.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={reserveMailto}
            className="eyebrow rounded-full bg-ivory px-8 py-4 text-center text-charcoal transition-colors hover:bg-gold"
          >
            Reserve a Table
          </a>
          <Link
            to="/menu"
            className="eyebrow rounded-full border border-ivory/45 px-8 py-4 text-center text-ivory transition-colors hover:bg-ivory/10"
          >
            Explore the Menu
          </Link>
        </div>
      </div>

      <div className="pointer-events-none absolute right-5 bottom-24 hidden flex-col items-center gap-3 sm:right-8 sm:bottom-10 lg:flex">
        <span className="eyebrow rotate-180 text-ivory/60 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="h-16 w-px animate-pulse bg-ivory/40" />
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="rule-gold" />
      <p className="eyebrow text-olive">{children}</p>
    </div>
  );
}

function Experience() {
  return (
    <section className="grain bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
          <Reveal>
            <SectionLabel>The Experience</SectionLabel>
            <h2 className="font-display mt-6 text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.02]">
              A Mediterranean table,
              <br className="hidden sm:block" /> a few blocks from home.
            </h2>
            <div className="mt-7 max-w-lg space-y-5 text-[1.05rem] leading-relaxed text-muted-foreground">
              <p>
                Victory Garden Café is built around one idea: hospitality that slows the
                evening down. Plates arrive for the middle of the table, glasses stay full,
                and nobody rushes you out.
              </p>
              <p>
                Dinner for two, a long table of friends, a birthday that runs late — the
                garden makes room for all of it. You step off Steinway Street and the city
                quietly disappears.
              </p>
            </div>
            <Link
              to="/experience"
              className="eyebrow group mt-9 inline-flex items-center gap-3 text-foreground"
            >
              Discover the garden
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-5 gap-4">
            <img
              src={images.gardenDay}
              alt="Glass-roofed garden dining room filled with greenery"
              width={1536}
              height={1024}
              loading="lazy"
              className="col-span-3 aspect-[4/5] w-full object-cover"
            />
            <div className="col-span-2 flex flex-col gap-4 pt-12">
              <img
                src={images.mezze}
                alt="Mezze spread with pita, dips, feta and olives"
                width={1280}
                height={1024}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
              <img
                src={images.gardenNight}
                alt="Candlelit table for two in the garden at night"
                width={1280}
                height={1600}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Signatures() {
  return (
    <section className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>Signature Dishes</SectionLabel>
            <h2 className="font-display mt-6 max-w-xl text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.02]">
              Charcoal, lemon, olive oil.
            </h2>
          </div>
          <Link
            to="/menu"
            className="eyebrow group inline-flex shrink-0 items-center gap-3 border-b border-foreground/25 pb-2"
          >
            View Full Menu
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {signatureDishes.map((dish, i) => (
            <Reveal key={dish.name} delay={(i % 3) * 90} as="article" className="group">
              <div className="overflow-hidden bg-cream">
                <img
                  src={dish.image}
                  alt={dish.alt}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                />
              </div>
              <h3 className="font-display mt-5 text-2xl">{dish.name}</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {dish.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Garden() {
  return (
    <section className="relative overflow-hidden bg-night py-28 text-ivory sm:py-36">
      <img
        src={images.gardenNight}
        alt=""
        aria-hidden="true"
        width={1280}
        height={1600}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-night via-night/80 to-night/30" />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="max-w-xl">
          <div className="flex items-center gap-4">
            <span className="rule-gold" />
            <p className="eyebrow text-gold">The Garden</p>
          </div>
          <h2 className="font-display mt-6 text-[clamp(2.4rem,5.5vw,4.75rem)] leading-[1]">
            Your Table,
            <br />
            Your <span className="italic text-gold">Evening.</span>
          </h2>
          <p className="mt-6 text-[1.05rem] leading-relaxed text-ivory/80">
            Our European-style garden moves with the season — open to the sky on warm
            nights, glass-covered and green when the weather turns. Intimate corners for
            two, long tables for twenty, and a room that can be taken entirely for your own.
          </p>
          <Link
            to="/experience"
            className="eyebrow mt-9 inline-block rounded-full border border-ivory/45 px-8 py-4 transition-colors hover:bg-ivory hover:text-charcoal"
          >
            Explore the Garden
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Events() {
  return (
    <section className="grain bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <img
              src={images.eventsBanquet}
              alt="Long celebration table set with candles and olive branches under string lights"
              width={1536}
              height={1024}
              loading="lazy"
              className="aspect-[5/4] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={100} className="order-1 lg:order-2">
            <SectionLabel>Private Events</SectionLabel>
            <h2 className="font-display mt-6 text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.02]">
              Celebrations belong
              <br className="hidden sm:block" /> in a garden.
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
              We host private celebrations with menus built around your guests — from
              mezze and grilled platters to trays of pastry from our own sweet shop.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {eventTypes.map((t) => (
                <li key={t} className="flex items-start gap-2 text-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-terracotta" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={eventMailto}
                className="eyebrow rounded-full bg-olive-deep px-8 py-4 text-center text-ivory transition-colors hover:bg-olive"
              >
                Plan Your Event
              </a>
              <Link
                to="/events"
                className="eyebrow rounded-full border border-foreground/25 px-8 py-4 text-center transition-colors hover:bg-secondary"
              >
                View Event Packages
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HappyHour() {
  return (
    <section className="relative overflow-hidden bg-night text-ivory">
      <div className="mx-auto grid max-w-[1400px] items-stretch lg:grid-cols-2">
        <img
          src={images.happyHour}
          alt="Mediterranean cocktails and grilled octopus mezze on a dark bar top"
          width={1536}
          height={1024}
          loading="lazy"
          className="h-full min-h-[46vh] w-full object-cover"
        />
        <Reveal className="flex flex-col justify-center px-5 py-20 sm:px-12 lg:px-16">
          <div className="flex items-center gap-4">
            <span className="rule-gold" />
            <p className="eyebrow text-gold">Thursday Happy Hour</p>
          </div>
          <h2 className="font-display mt-6 text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.02]">
            The week softens
            <br className="hidden sm:block" /> on Thursday.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-ivory/75">
            Cocktails, wine and small plates in the garden as the light goes down — our
            weekly reason to leave work early. Ask the bar for this week's pours and
            mezze.
          </p>
          <Link
            to="/menu"
            className="eyebrow mt-9 inline-block w-fit rounded-full border border-ivory/45 px-8 py-4 transition-colors hover:bg-ivory hover:text-charcoal"
          >
            See Happy Hour Menu
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Desserts() {
  return (
    <section className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <SectionLabel>Desserts</SectionLabel>
          <h2 className="font-display mt-6 text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.02]">
            Save Room for
            <br className="hidden sm:block" />{" "}
            <span className="italic text-terracotta">Something Sweet.</span>
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            The café shares its kitchen with Victory Sweet Shop, so dessert is never an
            afterthought — phyllo pulled and baked in-house, custards set that morning,
            trays of pastry you can also take home.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {desserts.map((d, i) => (
            <Reveal key={d.name} delay={i * 90} as="article" className="group">
              <div className="overflow-hidden bg-cream">
                <img
                  src={d.image}
                  alt={d.alt}
                  loading="lazy"
                  className="aspect-[5/4] w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.05]"
                />
              </div>
              <h3 className="font-display mt-5 text-2xl">{d.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {d.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <Link
            to="/menu"
            hash="sweets"
            className="eyebrow group inline-flex items-center gap-3 border-b border-foreground/25 pb-2"
          >
            Explore Desserts
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

const reasons = [
  {
    title: "A garden, not a patio",
    body: "Indoor and outdoor garden seating in Astoria — greenery, candlelight and open sky when the weather allows.",
  },
  {
    title: "Greek cooking, done properly",
    body: "Charcoal grill, slow-baked classics like moussaka and pastitsio, and mezze made for sharing.",
  },
  {
    title: "A pastry shop next door",
    body: "Desserts come from Victory Sweet Shop — baklava, kataifi, galaktoboureko and cakes made in-house.",
  },
  {
    title: "Built for celebrations",
    body: "Weddings, showers, baptisms, Sweet 16s and corporate dinners, planned around your guest count.",
  },
];

function WhyGuestsReturn() {
  return (
    <section className="grain bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <SectionLabel>Why Guests Come Back</SectionLabel>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 2) * 90} className="bg-background p-8 sm:p-12">
              <p className="font-display text-xl text-terracotta">0{i + 1}</p>
              <h3 className="font-display mt-4 text-2xl sm:text-3xl">{r.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                {r.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-20">
          <Reveal>
            <SectionLabel>Find Us</SectionLabel>
            <h2 className="font-display mt-6 text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.02]">
              On Steinway Street.
            </h2>
            <address className="mt-7 space-y-5 text-[1.05rem] not-italic">
              <p className="leading-relaxed">
                {site.address.street}
                <br />
                {site.address.locality}, {site.address.region} {site.address.postalCode}
              </p>
              <p className="space-y-1">
                {site.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:+1${p.replace(/\D/g, "")}`}
                    className="block text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {p}
                  </a>
                ))}
                <a
                  href={`mailto:${site.email}`}
                  className="block text-muted-foreground transition-colors hover:text-foreground"
                >
                  {site.email}
                </a>
              </p>
            </address>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={directionsHref}
                target="_blank"
                rel="noreferrer"
                className="eyebrow rounded-full bg-olive-deep px-8 py-4 text-center text-ivory transition-colors hover:bg-olive"
              >
                Get Directions
              </a>
              <a
                href={`tel:+1${site.phones[0].replace(/\D/g, "")}`}
                className="eyebrow rounded-full border border-foreground/25 px-8 py-4 text-center transition-colors hover:bg-background"
              >
                Call
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <iframe
              title="Map showing Victory Garden Café on Steinway Street, Astoria"
              src={`https://www.google.com/maps?q=${site.mapsQuery}&output=embed`}
              loading="lazy"
              className="aspect-[4/3] w-full border border-border grayscale-[35%]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
