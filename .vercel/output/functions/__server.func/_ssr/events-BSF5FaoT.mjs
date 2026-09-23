import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-D5tNlZTn.mjs";
import { t as Reveal } from "./Reveal-USYKIEZf.mjs";
import { r as images } from "./dishes-v-FyE3qH.mjs";
import { c as telHref, n as eventMailto, r as eventTypes, s as site } from "./site-C_GsGddF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-BSF5FaoT.js
var import_jsx_runtime = require_jsx_runtime();
var packageHighlights = [
	{
		title: "Seated dinners",
		body: "Multi-course Greek and Mediterranean menus served family-style or plated for your table."
	},
	{
		title: "Cocktail receptions",
		body: "Passed mezze, grilled small plates and a bar set up in the garden."
	},
	{
		title: "Dessert & pastry",
		body: "Trays of baklava, kataifi and mousse cakes, or a custom cake from Victory Sweet Shop."
	},
	{
		title: "The room, yours",
		body: "Garden and indoor seating can be arranged around your guest count and celebration."
	}
];
function EventsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Private Events",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Celebrations belong",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				" in a ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "italic text-gold",
					children: "garden."
				})
			] }),
			intro: "Weddings, showers, baptisms, Sweet 16s and corporate evenings — planned with you, cooked in our kitchen, finished with our own pastry.",
			image: images.eventsBanquet,
			alt: "Long celebration table set with candles and olive branches under string lights"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "grain bg-background py-24 sm:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1400px] px-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-olive",
							children: "What we host"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-6 text-[clamp(2.2rem,4.5vw,3.75rem)] leading-[1.02]",
						children: "Every kind of good news."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3",
					children: eventTypes.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 3 * 70,
						as: "li",
						className: "bg-background px-8 py-10 font-display text-2xl sm:text-3xl",
						children: t
					}, t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary py-24 sm:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.05]",
						children: "Package highlights"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 space-y-10",
						children: packageHighlights.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-l border-terracotta/60 pl-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl",
								children: p.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 max-w-md text-sm leading-relaxed text-muted-foreground",
								children: p.body
							})]
						}, p.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-10 max-w-md text-sm leading-relaxed text-muted-foreground",
						children: "Menus, pricing and capacity are arranged per event — tell us your date and guest count and we'll put together options."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 120,
					className: "flex flex-col gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: images.gardenNight,
						alt: "Candlelit table setting in the garden",
						loading: "lazy",
						className: "aspect-[4/5] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-night p-8 text-ivory sm:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-3xl",
								children: "Plan Your Event"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-ivory/75",
								children: "Send us the date and the occasion, or call and ask for events."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-7 flex flex-col gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: eventMailto,
									className: "eyebrow rounded-full bg-ivory px-8 py-4 text-center text-charcoal transition-colors hover:bg-gold",
									children: "Send an Inquiry"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: telHref(site.phones[1]),
									className: "eyebrow rounded-full border border-ivory/40 px-8 py-4 text-center transition-colors hover:bg-ivory/10",
									children: ["Call ", site.phones[1]]
								})]
							})
						]
					})]
				})]
			})
		})
	] });
}
//#endregion
export { EventsPage as component };
