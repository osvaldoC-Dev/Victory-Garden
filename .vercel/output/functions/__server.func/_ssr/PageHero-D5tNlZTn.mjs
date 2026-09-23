import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-D5tNlZTn.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, intro, image, alt }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex min-h-[58vh] items-end overflow-hidden pt-28 sm:min-h-[66vh]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt,
				className: "absolute inset-0 h-full w-full object-cover",
				fetchPriority: "high"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-night/90 via-night/45 to-night/35" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-[1400px] px-5 pb-14 sm:px-8 sm:pb-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display mt-4 max-w-4xl text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.98] text-ivory",
						children: title
					}),
					intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg",
						children: intro
					})
				]
			})
		]
	});
}
//#endregion
export { PageHero as t };
