import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-D5tNlZTn.mjs";
import { t as Reveal } from "./Reveal-USYKIEZf.mjs";
import { r as images } from "./dishes-v-FyE3qH.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BMvmA8hF.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "About",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"A café, a garden,",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
			" a ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "italic text-gold",
				children: "pastry shop."
			})
		] }),
		image: images.dessertCase,
		alt: "Greek pastry display case filled with baklava, kataifi and mousse cakes"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "grain bg-background py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[900px] px-5 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.25]",
					children: "Victory Garden Café sits on Steinway Street in Astoria — a Greek and Mediterranean kitchen wrapped around an indoor/outdoor garden."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 space-y-6 leading-relaxed text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The café is part of Victory Sweet Shop, so the same hands that pull phyllo for baklava in the morning send moussaka and lamb chops out of the kitchen at night. Dessert here is not an afterthought — it's the family trade." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The garden is where it all happens: dinners for two, birthdays that run long, Thursday happy hour, and private celebrations from baptisms to weddings. It's a room designed to make an ordinary Tuesday feel like it was worth dressing for." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Everything is cooked to order, plates are made for sharing, and the coffee and pastry stay on the table as long as you'd like." })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/menu",
						className: "eyebrow rounded-full bg-olive-deep px-8 py-4 text-center text-ivory transition-colors hover:bg-olive",
						children: "Explore the Menu"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "eyebrow rounded-full border border-foreground/25 px-8 py-4 text-center transition-colors hover:bg-secondary",
						children: "Visit Us"
					})]
				})
			] })
		})
	})] });
}
//#endregion
export { AboutPage as component };
