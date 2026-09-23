import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-USYKIEZf.mjs";
import { a as signatureDishes, r as images, t as desserts } from "./dishes-v-FyE3qH.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as eventMailto, o as reserveMailto, r as eventTypes, s as site, t as directionsHref } from "./site-C_GsGddF.mjs";
import { c as ArrowRight, i as MapPin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dxnvq8eV.js
var import_jsx_runtime = require_jsx_runtime();
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signatures, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Garden, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Events, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HappyHour, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Desserts, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyGuestsReturn, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Location, {})
	] });
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex min-h-[100svh] items-end overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: images.heroGarden,
				alt: "Candlelit garden terrace with string lights and tables set for dinner",
				width: 1920,
				height: 1200,
				fetchPriority: "high",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-night/92 via-night/40 to-night/55" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-[1400px] px-5 pb-24 sm:px-8 sm:pb-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow flex items-center gap-2 text-gold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								className: "h-3.5 w-3.5",
								"aria-hidden": "true"
							}),
							" ",
							site.city
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display mt-5 max-w-5xl text-[clamp(3rem,10vw,8rem)] leading-[0.92] text-ivory",
						children: [
							"An Evening",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"in the ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-gold",
								children: "Garden"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-lg text-lg leading-relaxed text-ivory/85",
						children: "Greek & Mediterranean dining in the heart of Astoria — under the trees, the string lights and an open sky."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-9 flex flex-col gap-3 sm:flex-row sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: reserveMailto,
							className: "eyebrow rounded-full bg-ivory px-8 py-4 text-center text-charcoal transition-colors hover:bg-gold",
							children: "Reserve a Table"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/menu",
							className: "eyebrow rounded-full border border-ivory/45 px-8 py-4 text-center text-ivory transition-colors hover:bg-ivory/10",
							children: "Explore the Menu"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute right-5 bottom-24 hidden flex-col items-center gap-3 sm:right-8 sm:bottom-10 lg:flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow rotate-180 text-ivory/60 [writing-mode:vertical-rl]",
					children: "Scroll"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-16 w-px animate-pulse bg-ivory/40" })]
			})
		]
	});
}
function SectionLabel({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow text-olive",
			children
		})]
	});
}
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "grain bg-background py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1400px] px-5 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "The Experience" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display mt-6 text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.02]",
						children: [
							"A Mediterranean table,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
							" a few blocks from home."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 max-w-lg space-y-5 text-[1.05rem] leading-relaxed text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Victory Garden Café is built around one idea: hospitality that slows the evening down. Plates arrive for the middle of the table, glasses stay full, and nobody rushes you out." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Dinner for two, a long table of friends, a birthday that runs late — the garden makes room for all of it. You step off Steinway Street and the city quietly disappears." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/experience",
						className: "eyebrow group mt-9 inline-flex items-center gap-3 text-foreground",
						children: ["Discover the garden", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 120,
					className: "grid grid-cols-5 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: images.gardenDay,
						alt: "Glass-roofed garden dining room filled with greenery",
						width: 1536,
						height: 1024,
						loading: "lazy",
						className: "col-span-3 aspect-[4/5] w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-2 flex flex-col gap-4 pt-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: images.mezze,
							alt: "Mezze spread with pita, dips, feta and olives",
							width: 1280,
							height: 1024,
							loading: "lazy",
							className: "aspect-square w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: images.gardenNight,
							alt: "Candlelit table for two in the garden at night",
							width: 1280,
							height: 1600,
							loading: "lazy",
							className: "aspect-[3/4] w-full object-cover"
						})]
					})]
				})]
			})
		})
	});
}
function Signatures() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-secondary py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Signature Dishes" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-6 max-w-xl text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.02]",
					children: "Charcoal, lemon, olive oil."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/menu",
					className: "eyebrow group inline-flex shrink-0 items-center gap-3 border-b border-foreground/25 pb-2",
					children: ["View Full Menu", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3",
				children: signatureDishes.map((dish, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i % 3 * 90,
					as: "article",
					className: "group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden bg-cream",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: dish.image,
								alt: dish.alt,
								width: 1024,
								height: 1280,
								loading: "lazy",
								className: "aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display mt-5 text-2xl",
							children: dish.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground",
							children: dish.description
						})
					]
				}, dish.name))
			})]
		})
	});
}
function Garden() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-night py-28 text-ivory sm:py-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: images.gardenNight,
				alt: "",
				"aria-hidden": "true",
				width: 1280,
				height: 1600,
				loading: "lazy",
				className: "absolute inset-0 h-full w-full object-cover opacity-45"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-night via-night/80 to-night/30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mx-auto max-w-[1400px] px-5 sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-gold",
								children: "The Garden"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display mt-6 text-[clamp(2.4rem,5.5vw,4.75rem)] leading-[1]",
							children: [
								"Your Table,",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Your ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-gold",
									children: "Evening."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-[1.05rem] leading-relaxed text-ivory/80",
							children: "Our European-style garden moves with the season — open to the sky on warm nights, glass-covered and green when the weather turns. Intimate corners for two, long tables for twenty, and a room that can be taken entirely for your own."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/experience",
							className: "eyebrow mt-9 inline-block rounded-full border border-ivory/45 px-8 py-4 transition-colors hover:bg-ivory hover:text-charcoal",
							children: "Explore the Garden"
						})
					]
				})
			})
		]
	});
}
function Events() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "grain bg-background py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1400px] px-5 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "order-2 lg:order-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: images.eventsBanquet,
						alt: "Long celebration table set with candles and olive branches under string lights",
						width: 1536,
						height: 1024,
						loading: "lazy",
						className: "aspect-[5/4] w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 100,
					className: "order-1 lg:order-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Private Events" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display mt-6 text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.02]",
							children: [
								"Celebrations belong",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
								" in a garden."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-lg leading-relaxed text-muted-foreground",
							children: "We host private celebrations with menus built around your guests — from mezze and grilled platters to trays of pastry from our own sweet shop."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 grid grid-cols-2 gap-x-6 gap-y-3 text-sm",
							children: eventTypes.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2 text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-terracotta" }), t]
							}, t))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: eventMailto,
								className: "eyebrow rounded-full bg-olive-deep px-8 py-4 text-center text-ivory transition-colors hover:bg-olive",
								children: "Plan Your Event"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/events",
								className: "eyebrow rounded-full border border-foreground/25 px-8 py-4 text-center transition-colors hover:bg-secondary",
								children: "View Event Packages"
							})]
						})
					]
				})]
			})
		})
	});
}
function HappyHour() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden bg-night text-ivory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1400px] items-stretch lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: images.happyHour,
				alt: "Mediterranean cocktails and grilled octopus mezze on a dark bar top",
				width: 1536,
				height: 1024,
				loading: "lazy",
				className: "h-full min-h-[46vh] w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "flex flex-col justify-center px-5 py-20 sm:px-12 lg:px-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-gold",
							children: "Thursday Happy Hour"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display mt-6 text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.02]",
						children: [
							"The week softens",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
							" on Thursday."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md leading-relaxed text-ivory/75",
						children: "Cocktails, wine and small plates in the garden as the light goes down — our weekly reason to leave work early. Ask the bar for this week's pours and mezze."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/menu",
						className: "eyebrow mt-9 inline-block w-fit rounded-full border border-ivory/45 px-8 py-4 transition-colors hover:bg-ivory hover:text-charcoal",
						children: "See Happy Hour Menu"
					})
				]
			})]
		})
	});
}
function Desserts() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-secondary py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Desserts" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display mt-6 text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.02]",
							children: [
								"Save Room for",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-terracotta",
									children: "Something Sweet."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 leading-relaxed text-muted-foreground",
							children: "The café shares its kitchen with Victory Sweet Shop, so dessert is never an afterthought — phyllo pulled and baked in-house, custards set that morning, trays of pastry you can also take home."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-3",
					children: desserts.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 90,
						as: "article",
						className: "group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden bg-cream",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: d.image,
									alt: d.alt,
									loading: "lazy",
									className: "aspect-[5/4] w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.05]"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display mt-5 text-2xl",
								children: d.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: d.description
							})
						]
					}, d.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/menu",
						hash: "sweets",
						className: "eyebrow group inline-flex items-center gap-3 border-b border-foreground/25 pb-2",
						children: ["Explore Desserts", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
					})
				})
			]
		})
	});
}
var reasons = [
	{
		title: "A garden, not a patio",
		body: "Indoor and outdoor garden seating in Astoria — greenery, candlelight and open sky when the weather allows."
	},
	{
		title: "Greek cooking, done properly",
		body: "Charcoal grill, slow-baked classics like moussaka and pastitsio, and mezze made for sharing."
	},
	{
		title: "A pastry shop next door",
		body: "Desserts come from Victory Sweet Shop — baklava, kataifi, galaktoboureko and cakes made in-house."
	},
	{
		title: "Built for celebrations",
		body: "Weddings, showers, baptisms, Sweet 16s and corporate dinners, planned around your guest count."
	}
];
function WhyGuestsReturn() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "grain bg-background py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1400px] px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Why Guests Come Back" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2",
				children: reasons.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i % 2 * 90,
					className: "bg-background p-8 sm:p-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-xl text-terracotta",
							children: ["0", i + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display mt-4 text-2xl sm:text-3xl",
							children: r.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-md text-sm leading-relaxed text-muted-foreground",
							children: r.body
						})
					]
				}, r.title))
			})]
		})
	});
}
function Location() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-secondary py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1400px] px-5 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Find Us" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-6 text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.02]",
						children: "On Steinway Street."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
						className: "mt-7 space-y-5 text-[1.05rem] not-italic",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "leading-relaxed",
							children: [
								site.address.street,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								site.address.locality,
								", ",
								site.address.region,
								" ",
								site.address.postalCode
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "space-y-1",
							children: [site.phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:+1${p.replace(/\D/g, "")}`,
								className: "block text-muted-foreground transition-colors hover:text-foreground",
								children: p
							}, p)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${site.email}`,
								className: "block text-muted-foreground transition-colors hover:text-foreground",
								children: site.email
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-9 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: directionsHref,
							target: "_blank",
							rel: "noreferrer",
							className: "eyebrow rounded-full bg-olive-deep px-8 py-4 text-center text-ivory transition-colors hover:bg-olive",
							children: "Get Directions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:+1${site.phones[0].replace(/\D/g, "")}`,
							className: "eyebrow rounded-full border border-foreground/25 px-8 py-4 text-center transition-colors hover:bg-background",
							children: "Call"
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Map showing Victory Garden Café on Steinway Street, Astoria",
						src: `https://www.google.com/maps?q=${site.mapsQuery}&output=embed`,
						loading: "lazy",
						className: "aspect-[4/3] w-full border border-border grayscale-[35%]"
					})
				})]
			})
		})
	});
}
//#endregion
export { HomePage as component };
