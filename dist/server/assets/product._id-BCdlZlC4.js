import { r as useStore } from "./store-DTmEggsq.js";
import { t as Route } from "./product._id-CjMskX5v.js";
import { t as SiteLayout } from "./site-layout-C9z6Fp7e.js";
import { n as Stars, t as ProductCard } from "./product-card-KHLmY8Fd.js";
import { useState } from "react";
import { Link, notFound } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { Heart, Minus, Plus, ShieldCheck, Truck, Undo2 } from "lucide-react";
//#region src/routes/product.$id.tsx?tsr-split=component
function ProductPage() {
	const { id } = Route.useParams();
	const { products, addToCart, toggleWishlist, wishlist } = useStore();
	const product = products.find((p) => p.id === id);
	const [qty, setQty] = useState(1);
	const [active, setActive] = useState(0);
	if (!product) throw notFound();
	const wished = wishlist.includes(product.id);
	const gallery = product.images?.length ? product.images : [
		product.image,
		product.image,
		product.image
	];
	const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
	return /* @__PURE__ */ jsx(SiteLayout, { children: /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ jsxs("nav", {
				className: "mb-6 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "hover:text-foreground",
						children: "Home"
					}),
					" / ",
					/* @__PURE__ */ jsx(Link, {
						to: "/shop",
						className: "hover:text-foreground",
						children: "Shop"
					}),
					" / ",
					/* @__PURE__ */ jsx("span", {
						className: "text-foreground",
						children: product.name
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "aspect-square overflow-hidden rounded-3xl bg-muted",
					children: /* @__PURE__ */ jsx("img", {
						src: gallery[active],
						alt: product.name,
						className: "h-full w-full object-cover"
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-3 grid grid-cols-4 gap-3",
					children: gallery.map((g, i) => /* @__PURE__ */ jsx("button", {
						onClick: () => setActive(i),
						className: `aspect-square overflow-hidden rounded-xl border-2 transition ${active === i ? "border-primary" : "border-transparent"}`,
						children: /* @__PURE__ */ jsx("img", {
							src: g,
							alt: "",
							className: "h-full w-full object-cover"
						})
					}, i))
				})] }), /* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-xs font-medium uppercase tracking-wider text-primary-glow",
						children: product.category
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-2 font-display text-3xl font-bold sm:text-4xl",
						children: product.name
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-3 flex items-center gap-3",
						children: [/* @__PURE__ */ jsx(Stars, {
							value: product.rating,
							size: 16
						}), /* @__PURE__ */ jsxs("span", {
							className: "text-sm text-muted-foreground",
							children: [
								product.rating,
								" (",
								product.reviews,
								" reviews)"
							]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-5 flex items-end gap-3",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "font-display text-4xl font-bold",
							children: ["$", product.price]
						}), product.oldPrice && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("span", {
							className: "text-lg text-muted-foreground line-through",
							children: ["$", product.oldPrice]
						}), /* @__PURE__ */ jsxs("span", {
							className: "rounded-full bg-success/15 px-2 py-0.5 text-xs font-semibold text-success",
							children: ["Save $", product.oldPrice - product.price]
						})] })]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-5 text-base text-muted-foreground",
						children: product.description
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-7 flex items-center gap-3",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center rounded-full border border-border",
								children: [
									/* @__PURE__ */ jsx("button", {
										onClick: () => setQty((q) => Math.max(1, q - 1)),
										className: "grid h-11 w-11 place-items-center",
										children: /* @__PURE__ */ jsx(Minus, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ jsx("span", {
										className: "w-10 text-center font-medium",
										children: qty
									}),
									/* @__PURE__ */ jsx("button", {
										onClick: () => setQty((q) => q + 1),
										className: "grid h-11 w-11 place-items-center",
										children: /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" })
									})
								]
							}),
							/* @__PURE__ */ jsxs("button", {
								onClick: () => {
									addToCart(product.id, qty);
									toast.success(`${product.name} added to cart`);
								},
								className: "flex-1 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:scale-[1.01]",
								children: ["Add to cart — $", (product.price * qty).toFixed(2)]
							}),
							/* @__PURE__ */ jsx("button", {
								onClick: () => {
									toggleWishlist(product.id);
									toast.success(wished ? "Removed from wishlist" : "Saved to wishlist");
								},
								className: "grid h-12 w-12 place-items-center rounded-full border border-border",
								children: /* @__PURE__ */ jsx(Heart, { className: `h-5 w-5 ${wished ? "fill-primary text-primary" : ""}` })
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-7 grid grid-cols-3 gap-3 border-t border-border pt-6 text-xs",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col items-center gap-1.5 text-center text-muted-foreground",
								children: [/* @__PURE__ */ jsx(Truck, { className: "h-5 w-5" }), "Free over $75"]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col items-center gap-1.5 text-center text-muted-foreground",
								children: [/* @__PURE__ */ jsx(Undo2, { className: "h-5 w-5" }), "30-day returns"]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col items-center gap-1.5 text-center text-muted-foreground",
								children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "h-5 w-5" }), "2-yr warranty"]
							})
						]
					})
				] })]
			}),
			related.length > 0 && /* @__PURE__ */ jsxs("section", {
				className: "mt-20",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "font-display text-2xl font-bold",
					children: "You might also like"
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-6 grid grid-cols-2 gap-4 md:grid-cols-4",
					children: related.map((p) => /* @__PURE__ */ jsx(ProductCard, { product: p }, p.id))
				})]
			})
		]
	}) });
}
//#endregion
export { ProductPage as component };
