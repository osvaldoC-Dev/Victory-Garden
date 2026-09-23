import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as Reveal } from "./Reveal-USYKIEZf.mjs";
import { n as galleryImages } from "./dishes-v-FyE3qH.mjs";
import { a as ChevronRight, o as ChevronLeft, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-5sOeebBo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GalleryGrid({ items }) {
	const [index, setIndex] = (0, import_react.useState)(null);
	const close = (0, import_react.useCallback)(() => setIndex(null), []);
	const step = (0, import_react.useCallback)((dir) => setIndex((i) => i === null ? i : (i + dir + items.length) % items.length), [items.length]);
	(0, import_react.useEffect)(() => {
		if (index === null) return;
		const onKey = (e) => {
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
	}, [
		index,
		close,
		step
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid auto-rows-[46vw] grid-cols-2 gap-2 sm:auto-rows-[22vw] sm:gap-3 lg:auto-rows-[15vw] lg:grid-cols-4",
		children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setIndex(i),
			"aria-label": `Open image: ${item.alt}`,
			className: cn("group relative overflow-hidden bg-cream focus-visible:z-10", item.span),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: item.src,
				alt: item.alt,
				loading: "lazy",
				decoding: "async",
				className: "h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 bg-night/0 transition-colors duration-500 group-hover:bg-night/20" })]
		}, item.src + i))
	}), index !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Image viewer",
		className: "fixed inset-0 z-[60] flex items-center justify-center bg-night/95 p-4 backdrop-blur-sm",
		onClick: close,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: close,
				"aria-label": "Close image viewer",
				className: "absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full border border-ivory/30 text-ivory hover:bg-ivory/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Previous image",
				onClick: (e) => {
					e.stopPropagation();
					step(-1);
				},
				className: "absolute left-3 grid h-11 w-11 place-items-center rounded-full border border-ivory/30 text-ivory hover:bg-ivory/10 sm:left-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				onClick: (e) => e.stopPropagation(),
				className: "max-h-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: items[index]?.src,
					alt: items[index]?.alt ?? "",
					className: "max-h-[78vh] w-auto max-w-[92vw] object-contain"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-4 text-center text-sm text-ivory/70",
					children: items[index]?.alt
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": "Next image",
				onClick: (e) => {
					e.stopPropagation();
					step(1);
				},
				className: "absolute right-3 grid h-11 w-11 place-items-center rounded-full border border-ivory/30 text-ivory hover:bg-ivory/10 sm:right-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
			})
		]
	})] });
}
function GalleryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "grain bg-background pt-36 pb-24 sm:pt-44 sm:pb-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1500px] px-3 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "px-2 pb-12 sm:px-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-olive",
						children: "Gallery"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "font-display mt-6 max-w-3xl text-[clamp(2.6rem,6vw,5rem)] leading-[1]",
					children: ["Evenings in the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-terracotta",
						children: "garden."
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryGrid, { items: galleryImages })]
		})
	});
}
//#endregion
export { GalleryPage as component };
