import { CalendarHeart, MapPin, Phone } from "lucide-react";
import { directionsHref, reserveMailto, site, telHref } from "@/lib/site";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/70 bg-background/95 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-3">
        <a
          href={reserveMailto}
          className="flex min-h-14 flex-col items-center justify-center gap-1 bg-olive-deep text-ivory"
        >
          <CalendarHeart className="h-4 w-4" aria-hidden="true" />
          <span className="eyebrow">Reserve</span>
        </a>
        <a
          href={telHref(site.phones[0])}
          className="flex min-h-14 flex-col items-center justify-center gap-1 text-foreground"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          <span className="eyebrow">Call</span>
        </a>
        <a
          href={directionsHref}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-14 flex-col items-center justify-center gap-1 text-foreground"
        >
          <MapPin className="h-4 w-4" aria-hidden="true" />
          <span className="eyebrow">Directions</span>
        </a>
      </div>
    </div>
  );
}
