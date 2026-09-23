import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-D5tNlZTn.mjs";
import { t as Reveal } from "./Reveal-USYKIEZf.mjs";
import { r as images } from "./dishes-v-FyE3qH.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as reserveMailto } from "./site-C_GsGddF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/experience-CRK7Rc25.js
var import_jsx_runtime = require_jsx_runtime();
var moments = [
	{
		title: "Dinner for two",
		body: "A quiet corner table, a bottle of Greek red and a plate of octopus off the grill."
	},
	{
		title: "The long table",
		body: "Mezze passed around, plates crowding the middle, the evening stretching out."
	},
	{
		title: "Something to celebrate",
		body: "Birthdays, engagements and anniversaries finished with pastry from our own sweet shop."
	}
];
function ExperiencePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "The Experience",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Your Table,",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				" Your ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "italic text-gold",
					children: "Evening."
				})
			] }),
			intro: "A European-style garden in the middle of Astoria — open to the sky on warm nights, green and glass-covered when the weather turns.",
			image: images.gardenNight,
			alt: "Candlelit table for two in a leafy garden at night"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "grain bg-background py-24 sm:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.02]",
					children: [
						"Escape the city",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
						" without leaving Astoria."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7 max-w-lg space-y-5 leading-relaxed text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The garden is the reason people come and the reason they stay. Trees overhead, candles on every table, and a soundtrack quiet enough to talk across the table." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Greek hospitality does the rest — plates arrive when they're ready, the table fills, and nobody hurries you toward the door." })]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: images.gardenDay,
						alt: "Glass-roofed garden dining room filled with plants and set tables",
						loading: "lazy",
						className: "aspect-[3/2] w-full object-cover"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary py-20 sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-[1400px] gap-px border border-border bg-border px-0 sm:grid-cols-3",
				children: moments.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * 90,
					className: "bg-secondary p-8 sm:p-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow text-terracotta",
							children: ["0", i + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display mt-4 text-2xl sm:text-3xl",
							children: m.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: m.body
						})
					]
				}, m.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-night py-28 text-ivory sm:py-36",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: images.heroGarden,
					alt: "",
					"aria-hidden": "true",
					loading: "lazy",
					className: "absolute inset-0 h-full w-full object-cover opacity-40"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-night/55" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "relative mx-auto max-w-[900px] px-5 text-center sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-[clamp(2.2rem,5vw,4.25rem)] leading-[1.02]",
						children: "Come for dinner. Stay for the garden."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: reserveMailto,
							className: "eyebrow rounded-full bg-ivory px-8 py-4 text-charcoal transition-colors hover:bg-gold",
							children: "Reserve a Table"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/gallery",
							className: "eyebrow rounded-full border border-ivory/45 px-8 py-4 transition-colors hover:bg-ivory/10",
							children: "See the Gallery"
						})]
					})]
				})
			]
		})
	] });
}
//#endregion
export { ExperiencePage as component };
