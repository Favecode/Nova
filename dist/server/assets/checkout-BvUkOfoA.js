import { n as useCartTotals, r as useStore } from "./store-DTmEggsq.js";
import { t as SiteLayout } from "./site-layout-C9z6Fp7e.js";
import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { CheckCircle2, Lock } from "lucide-react";
//#region src/routes/checkout.tsx?tsr-split=component
function Field({ label, ...rest }) {
	return /* @__PURE__ */ jsxs("label", {
		className: "block text-sm",
		children: [/* @__PURE__ */ jsx("span", {
			className: "mb-1.5 block font-medium",
			children: label
		}), /* @__PURE__ */ jsx("input", {
			required: true,
			...rest,
			className: "h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
		})]
	});
}
function Checkout() {
	const { items, subtotal, shipping, tax, total } = useCartTotals();
	const { clearCart } = useStore();
	const navigate = useNavigate();
	const [done, setDone] = useState(false);
	if (items.length === 0 && !done) return /* @__PURE__ */ jsx(SiteLayout, { children: /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-md px-4 py-24 text-center",
		children: [/* @__PURE__ */ jsx("h1", {
			className: "font-display text-3xl font-bold",
			children: "Nothing to checkout"
		}), /* @__PURE__ */ jsx(Link, {
			to: "/shop",
			className: "mt-4 inline-block rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground",
			children: "Browse shop"
		})]
	}) });
	const submit = (e) => {
		e.preventDefault();
		setDone(true);
		clearCart();
		toast.success("Order placed!");
		setTimeout(() => navigate({ to: "/" }), 3500);
	};
	if (done) return /* @__PURE__ */ jsx(SiteLayout, { children: /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-md px-4 py-24 text-center",
		children: [
			/* @__PURE__ */ jsx(CheckCircle2, { className: "mx-auto h-14 w-14 text-success" }),
			/* @__PURE__ */ jsx("h1", {
				className: "mt-4 font-display text-3xl font-bold",
				children: "Thank you!"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Your order has been placed. A confirmation will arrive shortly."
			}),
			/* @__PURE__ */ jsx(Link, {
				to: "/",
				className: "mt-6 inline-block rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground",
				children: "Back home"
			})
		]
	}) });
	return /* @__PURE__ */ jsx(SiteLayout, { children: /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ jsx("h1", {
			className: "font-display text-4xl font-bold",
			children: "Checkout"
		}), /* @__PURE__ */ jsxs("form", {
			onSubmit: submit,
			className: "mt-8 grid gap-10 lg:grid-cols-[1fr_400px]",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "space-y-8",
				children: [
					/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
						className: "mb-4 font-display text-lg font-semibold",
						children: "Contact"
					}), /* @__PURE__ */ jsxs("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ jsx(Field, {
							label: "Email",
							type: "email",
							placeholder: "you@example.com"
						}), /* @__PURE__ */ jsx(Field, {
							label: "Phone",
							type: "tel",
							placeholder: "+1 555 000 0000"
						})]
					})] }),
					/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
						className: "mb-4 font-display text-lg font-semibold",
						children: "Shipping address"
					}), /* @__PURE__ */ jsxs("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ jsx(Field, { label: "First name" }),
							/* @__PURE__ */ jsx(Field, { label: "Last name" }),
							/* @__PURE__ */ jsx("div", {
								className: "sm:col-span-2",
								children: /* @__PURE__ */ jsx(Field, { label: "Address" })
							}),
							/* @__PURE__ */ jsx(Field, { label: "City" }),
							/* @__PURE__ */ jsx(Field, { label: "Postal code" }),
							/* @__PURE__ */ jsx(Field, {
								label: "Country",
								defaultValue: "United States"
							}),
							/* @__PURE__ */ jsx(Field, { label: "State / Region" })
						]
					})] }),
					/* @__PURE__ */ jsxs("section", { children: [
						/* @__PURE__ */ jsx("h2", {
							className: "mb-4 font-display text-lg font-semibold",
							children: "Payment"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "sm:col-span-2",
									children: /* @__PURE__ */ jsx(Field, {
										label: "Card number",
										inputMode: "numeric",
										placeholder: "•••• •••• •••• ••••"
									})
								}),
								/* @__PURE__ */ jsx(Field, {
									label: "Expiry",
									placeholder: "MM / YY"
								}),
								/* @__PURE__ */ jsx(Field, {
									label: "CVC",
									inputMode: "numeric",
									placeholder: "•••"
								})
							]
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "mt-3 flex items-center gap-1.5 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ jsx(Lock, { className: "h-3.5 w-3.5" }), " Demo only — no real payments processed."]
						})
					] })
				]
			}), /* @__PURE__ */ jsxs("aside", {
				className: "h-fit rounded-2xl border border-border bg-card p-6 shadow-soft",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "font-display text-lg font-bold",
						children: "Order summary"
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "mt-4 space-y-3",
						children: items.map((it) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "relative h-14 w-14 overflow-hidden rounded-lg bg-muted",
									children: [/* @__PURE__ */ jsx("img", {
										src: it.image,
										alt: "",
										className: "h-full w-full object-cover"
									}), /* @__PURE__ */ jsx("span", {
										className: "absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-foreground text-[10px] text-background",
										children: it.qty
									})]
								}),
								/* @__PURE__ */ jsx("span", {
									className: "line-clamp-1 flex-1 text-sm",
									children: it.name
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "text-sm font-medium",
									children: ["$", (it.price * it.qty).toFixed(2)]
								})
							]
						}, it.id))
					}),
					/* @__PURE__ */ jsxs("dl", {
						className: "mt-5 space-y-2 border-t border-border pt-4 text-sm",
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
								className: "flex justify-between border-t border-border pt-2 font-display text-base font-bold",
								children: [/* @__PURE__ */ jsx("dt", { children: "Total" }), /* @__PURE__ */ jsxs("dd", { children: ["$", total.toFixed(2)] })]
							})
						]
					}),
					/* @__PURE__ */ jsx("button", {
						type: "submit",
						className: "mt-6 w-full rounded-full bg-gradient-primary py-3 text-sm font-semibold text-primary-foreground shadow-elegant",
						children: "Place order"
					})
				]
			})]
		})]
	}) });
}
//#endregion
export { Checkout as component };
