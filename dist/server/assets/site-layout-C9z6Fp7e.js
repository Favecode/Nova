import { n as useCartTotals, r as useStore } from "./store-DTmEggsq.js";
import { useState } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Heart, Menu, Moon, Search, ShoppingBag, Sun, User, X } from "lucide-react";
//#region src/components/site-chrome.tsx
var NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/shop",
		label: "Shop"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Header() {
	const { wishlist, theme, toggleTheme } = useStore();
	const { count } = useCartTotals();
	const [open, setOpen] = useState(false);
	const [q, setQ] = useState("");
	const navigate = useNavigate();
	const path = useRouterState({ select: (s) => s.location.pathname });
	const submit = (e) => {
		e.preventDefault();
		navigate({
			to: "/shop",
			search: { q }
		});
		setOpen(false);
	};
	return /* @__PURE__ */ jsxs("header", {
		className: "sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsx("button", {
					className: "lg:hidden",
					onClick: () => setOpen((o) => !o),
					"aria-label": "Menu",
					children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx("span", {
						className: "grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary text-primary-foreground shadow-elegant",
						children: /* @__PURE__ */ jsx("span", {
							className: "font-display text-lg font-bold",
							children: "N"
						})
					}), /* @__PURE__ */ jsx("span", {
						className: "font-display text-xl font-bold tracking-tight",
						children: "Nova"
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "ml-6 hidden items-center gap-6 lg:flex",
					children: NAV.map((n) => /* @__PURE__ */ jsx(Link, {
						to: n.to,
						className: `text-sm font-medium transition-colors ${path === n.to ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`,
						children: n.label
					}, n.to))
				}),
				/* @__PURE__ */ jsx("form", {
					onSubmit: submit,
					className: "ml-auto hidden flex-1 max-w-md md:flex",
					children: /* @__PURE__ */ jsxs("div", {
						className: "relative w-full",
						children: [/* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx("input", {
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: "Search products…",
							className: "h-10 w-full rounded-full border border-border bg-secondary/60 pl-10 pr-4 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
						})]
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "ml-auto flex items-center gap-1 md:ml-2",
					children: [
						/* @__PURE__ */ jsx("button", {
							onClick: toggleTheme,
							"aria-label": "Theme",
							className: "grid h-10 w-10 place-items-center rounded-full hover:bg-secondary",
							children: theme === "dark" ? /* @__PURE__ */ jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Moon, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: "/wishlist",
							className: "relative grid h-10 w-10 place-items-center rounded-full hover:bg-secondary",
							children: [/* @__PURE__ */ jsx(Heart, { className: "h-4 w-4" }), wishlist.length > 0 && /* @__PURE__ */ jsx("span", {
								className: "absolute -top-0.5 -right-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground",
								children: wishlist.length
							})]
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/admin",
							className: "hidden h-10 w-10 place-items-center rounded-full hover:bg-secondary md:grid",
							"aria-label": "Admin",
							children: /* @__PURE__ */ jsx(User, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: "/cart",
							className: "relative grid h-10 w-10 place-items-center rounded-full hover:bg-secondary",
							children: [/* @__PURE__ */ jsx(ShoppingBag, { className: "h-4 w-4" }), count > 0 && /* @__PURE__ */ jsx("span", {
								className: "absolute -top-0.5 -right-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-gradient-primary px-1 text-[10px] font-semibold text-primary-foreground",
								children: count
							})]
						})
					]
				})
			]
		}), open && /* @__PURE__ */ jsx("div", {
			className: "border-t border-border bg-background lg:hidden",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-4 py-3",
				children: [/* @__PURE__ */ jsx("form", {
					onSubmit: submit,
					className: "mb-3",
					children: /* @__PURE__ */ jsxs("div", {
						className: "relative",
						children: [/* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx("input", {
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: "Search products…",
							className: "h-10 w-full rounded-full border border-border bg-secondary/60 pl-10 pr-4 text-sm"
						})]
					})
				}), /* @__PURE__ */ jsxs("nav", {
					className: "flex flex-col",
					children: [NAV.map((n) => /* @__PURE__ */ jsx(Link, {
						to: n.to,
						onClick: () => setOpen(false),
						className: "border-b border-border/60 py-3 text-sm font-medium",
						children: n.label
					}, n.to)), /* @__PURE__ */ jsx(Link, {
						to: "/admin",
						onClick: () => setOpen(false),
						className: "py-3 text-sm font-medium",
						children: "Admin"
					})]
				})]
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "mt-24 border-t border-border bg-secondary/40",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ jsx("span", {
					className: "grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary text-primary-foreground",
					children: /* @__PURE__ */ jsx("span", {
						className: "font-display font-bold",
						children: "N"
					})
				}), /* @__PURE__ */ jsx("span", {
					className: "font-display text-xl font-bold",
					children: "Nova"
				})]
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-3 max-w-xs text-sm text-muted-foreground",
				children: "Modern essentials, beautifully made. Curated goods that earn a place in your everyday."
			})] }), [
				{
					title: "Shop",
					links: [
						["All products", "/shop"],
						["Wishlist", "/wishlist"],
						["Cart", "/cart"]
					]
				},
				{
					title: "Company",
					links: [
						["About", "/about"],
						["Contact", "/contact"],
						["Admin", "/admin"]
					]
				},
				{
					title: "Help",
					links: [
						["Shipping", "/contact"],
						["Returns", "/contact"],
						["FAQ", "/contact"]
					]
				}
			].map((c) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
				className: "font-display text-sm font-semibold",
				children: c.title
			}), /* @__PURE__ */ jsx("ul", {
				className: "mt-3 space-y-2 text-sm text-muted-foreground",
				children: c.links.map(([l, h]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
					to: h,
					className: "hover:text-foreground",
					children: l
				}) }, l))
			})] }, c.title))]
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-border/60 py-5 text-center text-xs text-muted-foreground",
			children: "© 2026 Nova. Crafted with care."
		})]
	});
}
//#endregion
//#region src/components/site-layout.tsx
function SiteLayout({ children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-screen flex-col bg-background",
		children: [
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsx("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { SiteLayout as t };
