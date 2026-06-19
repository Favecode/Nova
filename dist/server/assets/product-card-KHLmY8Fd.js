import { r as useStore } from "./store-DTmEggsq.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { Heart, Star } from "lucide-react";
//#region src/components/product-card.tsx
function Stars({ value, size = 14 }) {
	return /* @__PURE__ */ jsx("div", {
		className: "flex items-center gap-0.5",
		children: [
			1,
			2,
			3,
			4,
			5
		].map((i) => /* @__PURE__ */ jsx(Star, {
			style: {
				width: size,
				height: size
			},
			className: i <= Math.round(value) ? "fill-warning text-warning" : "text-muted-foreground/40"
		}, i))
	});
}
function ProductCard({ product }) {
	const { addToCart, toggleWishlist, wishlist } = useStore();
	const wished = wishlist.includes(product.id);
	return /* @__PURE__ */ jsxs("div", {
		className: "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover",
		children: [
			/* @__PURE__ */ jsxs(Link, {
				to: "/product/$id",
				params: { id: product.id },
				className: "relative block aspect-square overflow-hidden bg-muted",
				children: [/* @__PURE__ */ jsx("img", {
					src: product.image,
					alt: product.name,
					loading: "lazy",
					className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
				}), product.badge && /* @__PURE__ */ jsx("span", {
					className: "absolute left-3 top-3 rounded-full bg-gradient-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground shadow-elegant",
					children: product.badge
				})]
			}),
			/* @__PURE__ */ jsx("button", {
				onClick: () => {
					toggleWishlist(product.id);
					toast.success(wished ? "Removed from wishlist" : "Added to wishlist");
				},
				"aria-label": "Wishlist",
				className: "absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/90 backdrop-blur transition hover:scale-110",
				children: /* @__PURE__ */ jsx(Heart, { className: `h-4 w-4 ${wished ? "fill-primary text-primary" : ""}` })
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-1 flex-col gap-2 p-4",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-[11px] uppercase tracking-wider text-muted-foreground",
						children: product.category
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/product/$id",
						params: { id: product.id },
						className: "line-clamp-2 min-h-10 font-medium hover:text-primary-glow",
						children: product.name
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ jsx(Stars, { value: product.rating }), /* @__PURE__ */ jsxs("span", { children: [
							"(",
							product.reviews,
							")"
						] })]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-auto flex items-end justify-between pt-2",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("span", {
							className: "font-display text-lg font-bold",
							children: ["$", product.price]
						}), product.oldPrice && /* @__PURE__ */ jsxs("span", {
							className: "ml-1.5 text-xs text-muted-foreground line-through",
							children: ["$", product.oldPrice]
						})] }), /* @__PURE__ */ jsx("button", {
							onClick: () => {
								addToCart(product.id);
								toast.success(`${product.name} added to cart`);
							},
							className: "rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition hover:bg-gradient-primary hover:text-primary-foreground",
							children: "Add"
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { Stars as n, ProductCard as t };
