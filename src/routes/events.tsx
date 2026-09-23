import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { images } from "@/lib/dishes";
import { eventMailto, eventTypes, site, telHref } from "@/lib/site";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Private Events — Victory Garden Café, Astoria" },
      {
        name: "description",
        content:
          "Weddings, bridal and baby showers, Sweet 16s, baptisms and corporate dinners in a garden venue on Steinway Street, Astoria, NY.",
      },
      { property: "og:title", content: "Plan Your Event — Victory Garden Café" },
      {
        property: "og:description",
        content:
          "Private celebrations in an indoor/outdoor garden, with menus and pastry from Victory Sweet Shop.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

const packageHighlights = [
  {
    title: "Seated dinners",
    body: "Multi-course Greek and Mediterranean menus served family-style or plated for your table.",
  },
  {
    title: "Cocktail receptions",
    body: "Passed mezze, grilled small plates and a bar set up in the garden.",
  },
  {
    title: "Dessert & pastry",
    body: "Trays of baklava, kataifi and mousse cakes, or a custom cake from Victory Sweet Shop.",
  },
  {
    title: "The room, yours",
    body: "Garden and indoor seating can be arranged around your guest count and celebration.",
  },
];

function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Private Events"
        title={
          <>
            Celebrations belong
            <br /> in a <span className="italic text-gold">garden.</span>
          </>
        }
        intro="Weddings, showers, baptisms, Sweet 16s and corporate evenings — planned with you, cooked in our kitchen, finished with our own pastry."
        image={images.eventsBanquet}
        alt="Long celebration table set with candles and olive branches under string lights"
      />

      <section className="grain bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <div className="flex items-center gap-4">
              <span className="rule-gold" />
              <p className="eyebrow text-olive">What we host</p>
            </div>
            <h2 className="font-display mt-6 text-[clamp(2.2rem,4.5vw,3.75rem)] leading-[1.02]">
              Every kind of good news.
            </h2>
          </Reveal>

          <ul className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {eventTypes.map((t, i) => (
              <Reveal
                key={t}
                delay={(i % 3) * 70}
                as="li"
                className="bg-background px-8 py-10 font-display text-2xl sm:text-3xl"
              >
                {t}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-secondary py-24 sm:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.05]">
              Package highlights
            </h2>
            <div className="mt-10 space-y-10">
              {packageHighlights.map((p) => (
                <div key={p.title} className="border-l border-terracotta/60 pl-6">
                  <h3 className="font-display text-2xl">{p.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-10 max-w-md text-sm leading-relaxed text-muted-foreground">
              Menus, pricing and capacity are arranged per event — tell us your date and
              guest count and we'll put together options.
            </p>
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-6">
            <img
              src={images.gardenNight}
              alt="Candlelit table setting in the garden"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="bg-night p-8 text-ivory sm:p-10">
              <h3 className="font-display text-3xl">Plan Your Event</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/75">
                Send us the date and the occasion, or call and ask for events.
              </p>
              <div className="mt-7 flex flex-col gap-3">
                <a
                  href={eventMailto}
                  className="eyebrow rounded-full bg-ivory px-8 py-4 text-center text-charcoal transition-colors hover:bg-gold"
                >
                  Send an Inquiry
                </a>
                <a
                  href={telHref(site.phones[1])}
                  className="eyebrow rounded-full border border-ivory/40 px-8 py-4 text-center transition-colors hover:bg-ivory/10"
                >
                  Call {site.phones[1]}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
