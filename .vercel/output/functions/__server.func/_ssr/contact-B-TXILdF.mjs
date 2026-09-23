import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-USYKIEZf.mjs";
import { c as telHref, i as mapEmbedSrc, n as eventMailto, o as reserveMailto, s as site, t as directionsHref } from "./site-C_GsGddF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-B-TXILdF.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "grain bg-background pt-36 pb-24 sm:pt-44 sm:pb-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-olive",
					children: "Visit & Reserve"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "font-display mt-6 max-w-3xl text-[clamp(2.6rem,6vw,5rem)] leading-[1]",
				children: ["Come find the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "italic text-terracotta",
					children: "garden."
				})]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "space-y-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "eyebrow text-muted-foreground",
								children: "Address"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
								className: "font-display mt-4 text-3xl leading-tight not-italic",
								children: [
									site.address.street,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									site.address.locality,
									", ",
									site.address.region,
									" ",
									site.address.postalCode
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: directionsHref,
								target: "_blank",
								rel: "noreferrer",
								className: "eyebrow mt-6 inline-block rounded-full bg-olive-deep px-8 py-4 text-ivory transition-colors hover:bg-olive",
								children: "Get Directions"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "eyebrow text-muted-foreground",
								children: "Reservations"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-md leading-relaxed",
								children: "Tables are booked by phone or email — call us and we'll find you a spot in the garden."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap",
								children: [site.phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: telHref(p),
									className: "eyebrow rounded-full border border-foreground/25 px-7 py-4 text-center transition-colors hover:bg-secondary",
									children: ["Call ", p]
								}, p)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: reserveMailto,
									className: "eyebrow rounded-full border border-foreground/25 px-7 py-4 text-center transition-colors hover:bg-secondary",
									children: "Email a Request"
								})]
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "eyebrow text-muted-foreground",
								children: "Private events"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-md leading-relaxed",
								children: "Weddings, showers, baptisms, Sweet 16s and corporate dinners."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: eventMailto,
								className: "eyebrow mt-6 inline-block rounded-full border border-foreground/25 px-7 py-4 transition-colors hover:bg-secondary",
								children: "Plan Your Event"
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "eyebrow text-muted-foreground",
								children: "Hours"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-md leading-relaxed text-muted-foreground",
								children: "Hours change with the season, and the garden stays open later on warm evenings. Please call ahead for today's hours and happy hour times — happy hour runs on Thursdays."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${site.email}`,
								className: "mt-4 inline-block text-sm text-olive underline-offset-4 hover:underline",
								children: site.email
							})
						] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Map showing Victory Garden Café at 21-69 Steinway Street, Astoria",
						src: mapEmbedSrc,
						loading: "lazy",
						className: "aspect-square w-full border border-border grayscale-[35%] lg:sticky lg:top-28"
					})
				})]
			})]
		})
	});
}
//#endregion
export { ContactPage as component };
