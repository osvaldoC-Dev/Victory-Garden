import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type GalleryItem = { src: string; alt: string; span?: string };

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: number) =>
      setIndex((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  return (
    <>
      <div className="grid auto-rows-[46vw] grid-cols-2 gap-2 sm:auto-rows-[22vw] sm:gap-3 lg:auto-rows-[15vw] lg:grid-cols-4">
        {items.map((item, i) => (
          <button
            key={item.src + i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Open image: ${item.alt}`}
            className={cn(
              "group relative overflow-hidden bg-cream focus-visible:z-10",
              item.span,
            )}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
            />
            <span className="absolute inset-0 bg-night/0 transition-colors duration-500 group-hover:bg-night/20" />
          </button>
        ))}
      </div>

      {index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-night/95 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close image viewer"
            className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full border border-ivory/30 text-ivory hover:bg-ivory/10"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-3 grid h-11 w-11 place-items-center rounded-full border border-ivory/30 text-ivory hover:bg-ivory/10 sm:left-8"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-full">
            <img
              src={items[index]?.src}
              alt={items[index]?.alt ?? ""}
              className="max-h-[78vh] w-auto max-w-[92vw] object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-ivory/70">
              {items[index]?.alt}
            </figcaption>
          </figure>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-3 grid h-11 w-11 place-items-center rounded-full border border-ivory/30 text-ivory hover:bg-ivory/10 sm:right-8"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </>
  );
}
