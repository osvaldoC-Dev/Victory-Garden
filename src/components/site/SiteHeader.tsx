import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, reserveMailto, site } from "@/lib/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,padding] duration-500",
        scrolled || open
          ? "border-b border-border/70 bg-background/92 py-3 backdrop-blur-md"
          : "border-b border-transparent py-5",
      )}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:grid-cols-[1fr_auto_1fr]">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className={cn(
            "font-display min-w-0 truncate text-lg tracking-tight transition-colors sm:text-xl lg:justify-self-start",
            scrolled || open ? "text-foreground" : "text-ivory drop-shadow-sm",
          )}
        >
          Victory Garden <span className="italic">Café</span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 lg:flex lg:justify-self-center"
        >
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "eyebrow relative py-1 transition-colors",
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-ivory/80 hover:text-ivory",
              )}
              activeProps={{ className: scrolled ? "text-foreground" : "text-ivory" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3 lg:justify-self-end">
          <a
            href={reserveMailto}
            className={cn(
              "eyebrow hidden rounded-full border px-6 py-3 transition-colors sm:inline-block",
              scrolled || open
                ? "border-olive-deep bg-olive-deep text-ivory hover:bg-olive"
                : "border-ivory/60 text-ivory hover:bg-ivory hover:text-charcoal",
            )}
          >
            Reserve
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-colors lg:hidden",
              scrolled || open
                ? "border-border text-foreground"
                : "border-ivory/50 text-ivory",
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden">
          <nav
            aria-label="Mobile"
            className="mx-auto flex max-w-[1400px] flex-col gap-1 px-5 pt-6 pb-8 sm:px-8"
          >
            {navLinks.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${i * 40}ms` }}
                className="font-display animate-in fade-in slide-in-from-bottom-2 border-b border-border/60 py-4 text-3xl text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={reserveMailto}
              onClick={() => setOpen(false)}
              className="eyebrow mt-6 rounded-full bg-olive-deep px-6 py-4 text-center text-ivory"
            >
              Reserve a Table
            </a>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              {site.address.street} · {site.city}
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}
