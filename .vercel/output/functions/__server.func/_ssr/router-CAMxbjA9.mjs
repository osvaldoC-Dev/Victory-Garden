import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as navLinks, c as telHref, o as reserveMailto, s as site, t as directionsHref } from "./site-C_GsGddF.mjs";
import { i as MapPin, n as Phone, r as Menu, s as CalendarHeart, t as X } from "../_libs/lucide-react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CAMxbjA9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CSiK7C2O.css";
function SiteHeader() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,padding] duration-500", scrolled || open ? "border-b border-border/70 bg-background/92 py-3 backdrop-blur-md" : "border-b border-transparent py-5"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:grid-cols-[1fr_auto_1fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					onClick: () => setOpen(false),
					className: cn("font-display min-w-0 truncate text-lg tracking-tight transition-colors sm:text-xl lg:justify-self-start", scrolled || open ? "text-foreground" : "text-ivory drop-shadow-sm"),
					children: ["Victory Garden ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic",
						children: "Café"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Primary",
					className: "hidden items-center gap-8 lg:flex lg:justify-self-center",
					children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: cn("eyebrow relative py-1 transition-colors", scrolled ? "text-muted-foreground hover:text-foreground" : "text-ivory/80 hover:text-ivory"),
						activeProps: { className: scrolled ? "text-foreground" : "text-ivory" },
						children: l.label
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-end gap-3 lg:justify-self-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: reserveMailto,
						className: cn("eyebrow hidden rounded-full border px-6 py-3 transition-colors sm:inline-block", scrolled || open ? "border-olive-deep bg-olive-deep text-ivory hover:bg-olive" : "border-ivory/60 text-ivory hover:bg-ivory hover:text-charcoal"),
						children: "Reserve"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						onClick: () => setOpen((v) => !v),
						className: cn("grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-colors lg:hidden", scrolled || open ? "border-border text-foreground" : "border-ivory/50 text-ivory"),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Mobile",
				className: "mx-auto flex max-w-[1400px] flex-col gap-1 px-5 pt-6 pb-8 sm:px-8",
				children: [
					navLinks.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						onClick: () => setOpen(false),
						style: { animationDelay: `${i * 40}ms` },
						className: "font-display animate-in fade-in slide-in-from-bottom-2 border-b border-border/60 py-4 text-3xl text-foreground",
						children: l.label
					}, l.to)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: reserveMailto,
						onClick: () => setOpen(false),
						className: "eyebrow mt-6 rounded-full bg-olive-deep px-6 py-4 text-center text-ivory",
						children: "Reserve a Table"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-center text-sm text-muted-foreground",
						children: [
							site.address.street,
							" · ",
							site.city
						]
					})
				]
			})
		})]
	});
}
var footerLinks = [
	{
		label: "Menu",
		to: "/menu"
	},
	{
		label: "Experience",
		to: "/experience"
	},
	{
		label: "Events",
		to: "/events"
	},
	{
		label: "Gallery",
		to: "/gallery"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-night text-ivory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 pt-20 pb-28 sm:px-8 lg:pb-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-ivory/15 pb-16 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-gold",
							children: "Make tonight special"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display mx-auto mt-5 max-w-3xl text-4xl leading-[1.05] text-ivory sm:text-6xl",
							children: "A table in the garden is waiting."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: reserveMailto,
								className: "eyebrow rounded-full bg-ivory px-8 py-4 text-charcoal transition-colors hover:bg-gold",
								children: "Reserve a Table"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: telHref(site.phones[0]),
								className: "eyebrow rounded-full border border-ivory/40 px-8 py-4 text-ivory transition-colors hover:bg-ivory/10",
								children: ["Call ", site.phones[0]]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl",
							children: "Victory Garden Café"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm text-ivory/70",
							children: [
								site.tagline,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								site.city
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							"aria-label": "Footer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-ivory/50",
								children: "Explore"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-3 text-sm",
								children: footerLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: l.to,
									className: "text-ivory/80 transition-colors hover:text-gold",
									children: l.label
								}) }, l.to))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
							className: "text-sm not-italic",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow text-ivory/50",
									children: "Visit"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-5 text-ivory/80",
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 space-y-1",
									children: [
										site.phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: telHref(p),
											className: "block text-ivory/80 transition-colors hover:text-gold",
											children: p
										}, p)),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: `mailto:${site.email}`,
											className: "block text-ivory/80 transition-colors hover:text-gold",
											children: site.email
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: directionsHref,
											target: "_blank",
											rel: "noreferrer",
											className: "mt-3 inline-block text-gold underline-offset-4 hover:underline",
											children: "Get directions"
										})
									]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "border-t border-ivory/15 pt-8 text-xs text-ivory/45",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Victory Garden Café · Astoria, New York"
					]
				})
			]
		})
	});
}
function MobileActionBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-40 border-t border-border/70 bg-background/95 backdrop-blur-md lg:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: reserveMailto,
					className: "flex min-h-14 flex-col items-center justify-center gap-1 bg-olive-deep text-ivory",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarHeart, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Reserve"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: telHref(site.phones[0]),
					className: "flex min-h-14 flex-col items-center justify-center gap-1 text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Call"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: directionsHref,
					target: "_blank",
					rel: "noreferrer",
					className: "flex min-h-14 flex-col items-center justify-center gap-1 text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Directions"
					})]
				})
			]
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Victory Garden Café — Greek & Mediterranean Dining in Astoria, NY" },
			{
				name: "description",
				content: "Greek & Mediterranean dining, desserts and cocktails in an indoor/outdoor garden on Steinway Street, Astoria, New York."
			},
			{
				property: "og:site_name",
				content: "Victory Garden Café"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#1e1c17"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Karla:wght@300;400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "pb-14 lg:pb-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileActionBar, {})
		]
	});
}
var $$splitComponentImporter$6 = () => import("./routes-Dxnvq8eV.mjs");
var Route$6 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Victory Garden Café — Greek & Mediterranean Dining in Astoria, NY" },
			{
				name: "description",
				content: "An evening in the garden: Greek and Mediterranean dining, desserts and cocktails in an indoor/outdoor garden on Steinway Street, Astoria, New York."
			},
			{
				property: "og:title",
				content: "Victory Garden Café — An Evening in the Garden"
			},
			{
				property: "og:description",
				content: "Greek & Mediterranean dining in the heart of Astoria. Garden seating, private events and desserts from Victory Sweet Shop."
			},
			{
				property: "og:type",
				content: "restaurant.restaurant"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Restaurant",
				name: site.name,
				servesCuisine: ["Greek", "Mediterranean"],
				telephone: site.phones[0],
				email: site.email,
				address: {
					"@type": "PostalAddress",
					streetAddress: site.address.street,
					addressLocality: site.address.locality,
					addressRegion: site.address.region,
					postalCode: site.address.postalCode,
					addressCountry: "US"
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./about-BMvmA8hF.mjs");
var Route$5 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About — Victory Garden Café, Astoria" },
			{
				name: "description",
				content: "Victory Garden Café is a Greek and Mediterranean restaurant, garden and event venue on Steinway Street in Astoria, sharing its kitchen with Victory Sweet Shop."
			},
			{
				property: "og:title",
				content: "About — Victory Garden Café"
			},
			{
				property: "og:description",
				content: "A Greek and Mediterranean garden café and pastry shop in Astoria, New York."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./contact-B-TXILdF.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Visit & Reserve — Victory Garden Café, Astoria NY" },
			{
				name: "description",
				content: "Victory Garden Café, 21-69 Steinway Street, Astoria, NY 11105. Call (718) 274-2087 or (917) 373-7055 to reserve a table or plan an event."
			},
			{
				property: "og:title",
				content: "Visit & Reserve — Victory Garden Café"
			},
			{
				property: "og:description",
				content: "Find us on Steinway Street in Astoria. Reserve a table or plan an event."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./events-BSF5FaoT.mjs");
var Route$3 = createFileRoute("/events")({
	head: () => ({
		meta: [
			{ title: "Private Events — Victory Garden Café, Astoria" },
			{
				name: "description",
				content: "Weddings, bridal and baby showers, Sweet 16s, baptisms and corporate dinners in a garden venue on Steinway Street, Astoria, NY."
			},
			{
				property: "og:title",
				content: "Plan Your Event — Victory Garden Café"
			},
			{
				property: "og:description",
				content: "Private celebrations in an indoor/outdoor garden, with menus and pastry from Victory Sweet Shop."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/events"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./experience-CRK7Rc25.mjs");
var Route$2 = createFileRoute("/experience")({
	head: () => ({
		meta: [
			{ title: "The Garden — Victory Garden Café, Astoria" },
			{
				name: "description",
				content: "An indoor/outdoor European-style garden in Astoria: intimate dinners, long tables with friends, and celebrations under the string lights."
			},
			{
				property: "og:title",
				content: "Your Table, Your Evening — Victory Garden Café"
			},
			{
				property: "og:description",
				content: "Step off Steinway Street into a Mediterranean garden — greenery, candlelight and open sky."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/experience"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./gallery-5sOeebBo.mjs");
var Route$1 = createFileRoute("/gallery")({
	head: () => ({
		meta: [
			{ title: "Gallery — Victory Garden Café, Astoria" },
			{
				name: "description",
				content: "Photographs of the garden, the food, the desserts and celebrations at Victory Garden Café in Astoria, New York."
			},
			{
				property: "og:title",
				content: "Gallery — Victory Garden Café"
			},
			{
				property: "og:description",
				content: "The garden, the grill, the pastry case and evenings in Astoria."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/gallery"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./menu-Cbu9qdaP.mjs");
var Route = createFileRoute("/menu")({
	head: () => ({
		meta: [
			{ title: "Menu — Victory Garden Café, Astoria" },
			{
				name: "description",
				content: "Mezze, charcoal-grilled meats and seafood, slow-baked Greek classics and house-made pastry at Victory Garden Café in Astoria, NY."
			},
			{
				property: "og:title",
				content: "Menu — Victory Garden Café"
			},
			{
				property: "og:description",
				content: "Mezze, grilled lamb chops, moussaka, branzino and desserts from Victory Sweet Shop."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/menu"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AboutRoute: Route$5.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$7
	}),
	ContactRoute: Route$4.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$7
	}),
	EventsRoute: Route$3.update({
		id: "/events",
		path: "/events",
		getParentRoute: () => Route$7
	}),
	ExperienceRoute: Route$2.update({
		id: "/experience",
		path: "/experience",
		getParentRoute: () => Route$7
	}),
	GalleryRoute: Route$1.update({
		id: "/gallery",
		path: "/gallery",
		getParentRoute: () => Route$7
	}),
	MenuRoute: Route.update({
		id: "/menu",
		path: "/menu",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
