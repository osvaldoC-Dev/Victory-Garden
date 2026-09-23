import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-D5tNlZTn.mjs";
import { t as Reveal } from "./Reveal-USYKIEZf.mjs";
import { a as signatureDishes, i as menuSections, r as images } from "./dishes-v-FyE3qH.mjs";
import { o as reserveMailto } from "./site-C_GsGddF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/menu-Cbu9qdaP.js
var import_jsx_runtime = require_jsx_runtime();
function MenuPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "The Menu",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Mezze, fire",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				" and ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "italic text-gold",
					children: "phyllo."
				})
			] }),
			intro: "Greek and Mediterranean cooking meant for the middle of the table. Menu items rotate with the season — ask your server what came in today.",
			image: images.mezze,
			alt: "Overhead mezze spread with pita, dips, feta and olives"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "grain bg-background py-20 sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1100px] px-5 sm:px-8",
				children: [menuSections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					as: "section",
					id: section.title.toLowerCase(),
					className: "border-b border-border py-14 first:pt-0 last:border-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 md:grid-cols-[240px_1fr] md:gap-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl sm:text-4xl",
							children: section.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mt-3 text-olive",
							children: section.note
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-7",
							children: section.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl",
								children: item.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground",
								children: item.description
							})] }, item.name))
						})]
					})
				}, section.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "pt-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted-foreground",
						children: "Prices and availability change with the season — please call us for today's menu, happy hour pours and any dietary questions."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: reserveMailto,
						className: "eyebrow mt-8 inline-block rounded-full bg-olive-deep px-8 py-4 text-ivory transition-colors hover:bg-olive",
						children: "Reserve a Table"
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary py-20 sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[1400px] px-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-[clamp(2rem,4vw,3.25rem)]",
					children: "What people order twice."
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3",
					children: signatureDishes.map((dish, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i % 3 * 80,
						as: "article",
						className: "group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden bg-cream",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: dish.image,
									alt: dish.alt,
									loading: "lazy",
									className: "aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.05]"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display mt-5 text-2xl",
								children: dish.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: dish.description
							})
						]
					}, dish.name))
				})]
			})
		})
	] });
}
//#endregion
export { MenuPage as component };
