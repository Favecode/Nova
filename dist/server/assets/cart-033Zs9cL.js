import { n as useCartTotals, r as useStore } from "./store-DTmEggsq.js";
import { t as SiteLayout } from "./site-layout-C9z6Fp7e.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
//#region src/routes/cart.tsx?tsr-split=component
function CartPage() {
	const { setQty, removeFromCart } = useStore();
	const { items, subtotal, shipping, tax, total } = useCartTotals();
	if (items.length === 0) return /* @__PURE__ */ jsx(SiteLayout, { children: /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-md px-4 py-24 text-center",
		children: [
			/* @__PURE__ */ jsx(ShoppingBag, { className: "mx-auto h-12 w-12 text-muted-foreground" }),
			/* @__PURE__ */ jsx("h1", {
				className: "mt-4 font-display text-3xl font-bold",
				children: "Your cart is empty"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Add a few essentials and they'll show up here."
			}),
			/* @__PURE__ */ jsx(Link, {
				to: "/shop",
				className: "mt-6 inline-block rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant",
				children: "Start shopping"
			})
		]
	}) });
	return /* @__PURE__ */ jsx(SiteLayout, { children: /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ jsx("h1", {
			className: "font-display text-4xl font-bold",
			children: "Your cart"
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-8 grid gap-10 lg:grid-cols-[1fr_360px]",
			children: [/* @__PURE__ */ jsx("ul", {
				className: "space-y-4",
				children: items.map((it) => /* @__PURE__ */ jsxs("li", {
					className: "grid grid-cols-[80px_1fr_auto] items-center gap-4 rounded-2xl border border-border bg-card p-4 sm:grid-cols-[100px_1fr_auto_auto]",
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/product/$id",
							params: { id: it.id },
							className: "aspect-square w-full overflow-hidden rounded-xl bg-muted",
							children: /* @__PURE__ */ jsx("img", {
								src: it.image,
								alt: it.name,
								className: "h-full w-full object-cover"
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ jsx(Link, {
									to: "/product/$id",
									params: { id: it.id },
									className: "line-clamp-2 font-medium hover:text-primary-glow",
									children: it.name
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: it.category
								}),
								/* @__PURE__ */ jsxs("p", {
									className: "mt-1 font-display font-bold sm:hidden",
									children: ["$", (it.price * it.qty).toFixed(2)]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "col-span-2 flex items-center justify-between sm:col-span-1 sm:justify-start",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center rounded-full border border-border",
								children: [
									/* @__PURE__ */ jsx("button", {
										onClick: () => setQty(it.id, it.qty - 1),
										className: "grid h-9 w-9 place-items-center",
										children: /* @__PURE__ */ jsx(Minus, { className: "h-3.5 w-3.5" })
									}),
									/* @__PURE__ */ jsx("span", {
										className: "w-8 text-center text-sm",
										children: it.qty
									}),
									/* @__PURE__ */ jsx("button", {
										onClick: () => setQty(it.id, it.qty + 1),
										className: "grid h-9 w-9 place-items-center",
										children: /* @__PURE__ */ jsx(Plus, { className: "h-3.5 w-3.5" })
									})
								]
							}), /* @__PURE__ */ jsx("button", {
								onClick: () => removeFromCart(it.id),
								className: "ml-3 grid h-9 w-9 place-items-center rounded-full hover:bg-destructive/10 hover:text-destructive",
								children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "hidden text-right font-display text-lg font-bold sm:block",
							children: ["$", (it.price * it.qty).toFixed(2)]
						})
					]
				}, it.id))
			}), /* @__PURE__ */ jsxs("aside", {
				className: "h-fit rounded-2xl border border-border bg-card p-6 shadow-soft",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "font-display text-xl font-bold",
						children: "Summary"
					}),
					/* @__PURE__ */ jsxs("dl", {
						className: "mt-5 space-y-2.5 text-sm",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ jsx("dt", {
									className: "text-muted-foreground",
									children: "Subtotal"
								}), /* @__PURE__ */ jsxs("dd", { children: ["$", subtotal.toFixed(2)] })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ jsx("dt", {
									className: "text-muted-foreground",
									children: "Shipping"
								}), /* @__PURE__ */ jsx("dd", { children: shipping === 0 ? "Free" : `$${shipping.toFixed(2)}` })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ jsx("dt", {
									className: "text-muted-foreground",
									children: "Tax"
								}), /* @__PURE__ */ jsxs("dd", { children: ["$", tax.toFixed(2)] })]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-3 flex justify-between border-t border-border pt-3 font-display text-lg font-bold",
								children: [/* @__PURE__ */ jsx("dt", { children: "Total" }), /* @__PURE__ */ jsxs("dd", { children: ["$", total.toFixed(2)] })]
							})
						]
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/checkout",
						className: "mt-6 block w-full rounded-full bg-gradient-primary py-3 text-center text-sm font-semibold text-primary-foreground shadow-elegant",
						children: "Checkout"
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/shop",
						className: "mt-2 block text-center text-xs text-muted-foreground hover:text-foreground",
						children: "Continue shopping"
					})
				]
			})]
		})]
	}) });
}
//#endregion
export { CartPage as component };
