import { createFileRoute } from "@tanstack/react-router";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { Reveal } from "@/components/site/Reveal";
import { galleryImages } from "@/lib/dishes";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Victory Garden Café, Astoria" },
      {
        name: "description",
        content:
          "Photographs of the garden, the food, the desserts and celebrations at Victory Garden Café in Astoria, New York.",
      },
      { property: "og:title", content: "Gallery — Victory Garden Café" },
      {
        property: "og:description",
        content: "The garden, the grill, the pastry case and evenings in Astoria.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <section className="grain bg-background pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="mx-auto max-w-[1500px] px-3 sm:px-6">
        <Reveal className="px-2 pb-12 sm:px-2">
          <div className="flex items-center gap-4">
            <span className="rule-gold" />
            <p className="eyebrow text-olive">Gallery</p>
          </div>
          <h1 className="font-display mt-6 max-w-3xl text-[clamp(2.6rem,6vw,5rem)] leading-[1]">
            Evenings in the <span className="italic text-terracotta">garden.</span>
          </h1>
        </Reveal>
        <GalleryGrid items={galleryImages} />
      </div>
    </section>
  );
}
