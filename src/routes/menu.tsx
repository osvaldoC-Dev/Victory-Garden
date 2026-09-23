import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { images, menuSections, signatureDishes } from "@/lib/dishes";
import { reserveMailto } from "@/lib/site";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Victory Garden Café, Astoria" },
      {
        name: "description",
        content:
          "Mezze, charcoal-grilled meats and seafood, slow-baked Greek classics and house-made pastry at Victory Garden Café in Astoria, NY.",
      },
      { property: "og:title", content: "Menu — Victory Garden Café" },
      {
        property: "og:description",
        content:
          "Mezze, grilled lamb chops, moussaka, branzino and desserts from Victory Sweet Shop.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="The Menu"
        title={
          <>
            Mezze, fire
            <br /> and <span className="italic text-gold">phyllo.</span>
          </>
        }
        intro="Greek and Mediterranean cooking meant for the middle of the table. Menu items rotate with the season — ask your server what came in today."
        image={images.mezze}
        alt="Overhead mezze spread with pita, dips, feta and olives"
      />

      <section className="grain bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          {menuSections.map((section) => (
            <Reveal
              key={section.title}
              as="section"
              id={section.title.toLowerCase()}
              className="border-b border-border py-14 first:pt-0 last:border-0"
            >
              <div className="grid gap-8 md:grid-cols-[240px_1fr] md:gap-14">
                <div>
                  <h2 className="font-display text-3xl sm:text-4xl">{section.title}</h2>
                  <p className="eyebrow mt-3 text-olive">{section.note}</p>
                </div>
                <ul className="space-y-7">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <h3 className="font-display text-xl">{item.name}</h3>
                      <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          <Reveal className="pt-14">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Prices and availability change with the season — please call us for today's
              menu, happy hour pours and any dietary questions.
            </p>
            <a
              href={reserveMailto}
              className="eyebrow mt-8 inline-block rounded-full bg-olive-deep px-8 py-4 text-ivory transition-colors hover:bg-olive"
            >
              Reserve a Table
            </a>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)]">
              What people order twice.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {signatureDishes.map((dish, i) => (
              <Reveal key={dish.name} delay={(i % 3) * 80} as="article" className="group">
                <div className="overflow-hidden bg-cream">
                  <img
                    src={dish.image}
                    alt={dish.alt}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.05]"
                  />
                </div>
                <h3 className="font-display mt-5 text-2xl">{dish.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {dish.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
