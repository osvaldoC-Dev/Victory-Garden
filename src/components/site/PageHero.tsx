import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  image: string;
  alt: string;
};

export function PageHero({ eyebrow, title, intro, image, alt }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[58vh] items-end overflow-hidden pt-28 sm:min-h-[66vh]">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/45 to-night/35" />
      <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-14 sm:px-8 sm:pb-20">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="font-display mt-4 max-w-4xl text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.98] text-ivory">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
