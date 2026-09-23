import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { images } from "@/lib/dishes";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Victory Garden Café, Astoria" },
      {
        name: "description",
        content:
          "Victory Garden Café is a Greek and Mediterranean restaurant, garden and event venue on Steinway Street in Astoria, sharing its kitchen with Victory Sweet Shop.",
      },
      { property: "og:title", content: "About — Victory Garden Café" },
      {
        property: "og:description",
        content:
          "A Greek and Mediterranean garden café and pastry shop in Astoria, New York.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            A café, a garden,
            <br /> a <span className="italic text-gold">pastry shop.</span>
          </>
        }
        image={images.dessertCase}
        alt="Greek pastry display case filled with baklava, kataifi and mousse cakes"
      />

      <section className="grain bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-[900px] px-5 sm:px-8">
          <Reveal>
            <p className="font-display text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.25]">
              Victory Garden Café sits on Steinway Street in Astoria — a Greek and
              Mediterranean kitchen wrapped around an indoor/outdoor garden.
            </p>
            <div className="mt-10 space-y-6 leading-relaxed text-muted-foreground">
              <p>
                The café is part of Victory Sweet Shop, so the same hands that pull phyllo
                for baklava in the morning send moussaka and lamb chops out of the kitchen
                at night. Dessert here is not an afterthought — it's the family trade.
              </p>
              <p>
                The garden is where it all happens: dinners for two, birthdays that run
                long, Thursday happy hour, and private celebrations from baptisms to
                weddings. It's a room designed to make an ordinary Tuesday feel like it was
                worth dressing for.
              </p>
              <p>
                Everything is cooked to order, plates are made for sharing, and the coffee
                and pastry stay on the table as long as you'd like.
              </p>
            </div>
            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/menu"
                className="eyebrow rounded-full bg-olive-deep px-8 py-4 text-center text-ivory transition-colors hover:bg-olive"
              >
                Explore the Menu
              </Link>
              <Link
                to="/contact"
                className="eyebrow rounded-full border border-foreground/25 px-8 py-4 text-center transition-colors hover:bg-secondary"
              >
                Visit Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
