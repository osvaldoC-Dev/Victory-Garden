import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { images } from "@/lib/dishes";
import { reserveMailto } from "@/lib/site";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "The Garden — Victory Garden Café, Astoria" },
      {
        name: "description",
        content:
          "An indoor/outdoor European-style garden in Astoria: intimate dinners, long tables with friends, and celebrations under the string lights.",
      },
      { property: "og:title", content: "Your Table, Your Evening — Victory Garden Café" },
      {
        property: "og:description",
        content:
          "Step off Steinway Street into a Mediterranean garden — greenery, candlelight and open sky.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});

const moments = [
  {
    title: "Dinner for two",
    body: "A quiet corner table, a bottle of Greek red and a plate of octopus off the grill.",
  },
  {
    title: "The long table",
    body: "Mezze passed around, plates crowding the middle, the evening stretching out.",
  },
  {
    title: "Something to celebrate",
    body: "Birthdays, engagements and anniversaries finished with pastry from our own sweet shop.",
  },
];

function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="The Experience"
        title={
          <>
            Your Table,
            <br /> Your <span className="italic text-gold">Evening.</span>
          </>
        }
        intro="A European-style garden in the middle of Astoria — open to the sky on warm nights, green and glass-covered when the weather turns."
        image={images.gardenNight}
        alt="Candlelit table for two in a leafy garden at night"
      />

      <section className="grain bg-background py-24 sm:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.02]">
              Escape the city
              <br className="hidden sm:block" /> without leaving Astoria.
            </h2>
            <div className="mt-7 max-w-lg space-y-5 leading-relaxed text-muted-foreground">
              <p>
                The garden is the reason people come and the reason they stay. Trees
                overhead, candles on every table, and a soundtrack quiet enough to talk
                across the table.
              </p>
              <p>
                Greek hospitality does the rest — plates arrive when they're ready, the
                table fills, and nobody hurries you toward the door.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={images.gardenDay}
              alt="Glass-roofed garden dining room filled with plants and set tables"
              loading="lazy"
              className="aspect-[3/2] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-px border border-border bg-border px-0 sm:grid-cols-3">
          {moments.map((m, i) => (
            <Reveal key={m.title} delay={i * 90} className="bg-secondary p-8 sm:p-12">
              <p className="eyebrow text-terracotta">0{i + 1}</p>
              <h3 className="font-display mt-4 text-2xl sm:text-3xl">{m.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-night py-28 text-ivory sm:py-36">
        <img
          src={images.heroGarden}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-night/55" />
        <Reveal className="relative mx-auto max-w-[900px] px-5 text-center sm:px-8">
          <h2 className="font-display text-[clamp(2.2rem,5vw,4.25rem)] leading-[1.02]">
            Come for dinner. Stay for the garden.
          </h2>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={reserveMailto}
              className="eyebrow rounded-full bg-ivory px-8 py-4 text-charcoal transition-colors hover:bg-gold"
            >
              Reserve a Table
            </a>
            <Link
              to="/gallery"
              className="eyebrow rounded-full border border-ivory/45 px-8 py-4 transition-colors hover:bg-ivory/10"
            >
              See the Gallery
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
