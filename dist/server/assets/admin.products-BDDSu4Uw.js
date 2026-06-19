import { i as CATEGORIES, r as useStore } from "./store-DTmEggsq.js";
import { t as AdminShell } from "./admin-shell-BKoNOmr7.js";
import { useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { Pencil, Plus, Search, Trash2, X } from "lucide-react";
//#region src/routes/admin.products.tsx?tsr-split=component
var empty = {
	name: "",
	price: 0,
	image: "https://picsum.photos/seed/new/600/600",
	description: "",
	rating: 4.5,
	reviews: 0,
	category: "Electronics",
	stock: 10
};
function AdminProducts() {
	const { products, addProduct, updateProduct, deleteProduct } = useStore();
	const [q, setQ] = useState("");
	const [cat, setCat] = useState("All");
	const [editing, setEditing] = useState(null);
	const [creating, setCreating] = useState(false);
	const [draft, setDraft] = useState(empty);
	const filtered = useMemo(() => products.filter((p) => {
		if (cat !== "All" && p.category !== cat) return false;
		if (q && !p.name.toLowerCase().includes(q.toLowerCase())) return false;
		return true;
	}), [
		products,
		cat,
		q
	]);
	const open = (p) => {
		if (p) {
			setEditing(p);
			setDraft({ ...p });
		} else {
			setEditing(null);
			setDraft(empty);
			setCreating(true);
		}
	};
	const save = (e) => {
		e.preventDefault();
		if (editing) {
			updateProduct(editing.id, draft);
			toast.success("Product updated");
		} else {
			addProduct(draft);
			toast.success("Product added");
		}
		setEditing(null);
		setCreating(false);
	};
	const showModal = editing || creating;
	return /* @__PURE__ */ jsxs(AdminShell, {
		title: "Products",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-wrap items-center gap-3",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "relative flex-1 min-w-[200px]",
						children: [/* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx("input", {
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: "Search products…",
							className: "h-10 w-full rounded-full border border-border bg-card pl-9 pr-4 text-sm"
						})]
					}),
					/* @__PURE__ */ jsxs("select", {
						value: cat,
						onChange: (e) => setCat(e.target.value),
						className: "h-10 rounded-full border border-border bg-card px-4 text-sm",
						children: [/* @__PURE__ */ jsx("option", {
							value: "All",
							children: "All categories"
						}), CATEGORIES.map((c) => /* @__PURE__ */ jsx("option", { children: c }, c))]
					}),
					/* @__PURE__ */ jsxs("button", {
						onClick: () => open(),
						className: "inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-elegant",
						children: [/* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }), " Add product"]
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-soft",
				children: /* @__PURE__ */ jsx("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ jsxs("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
							className: "border-b border-border bg-secondary/50 text-left text-xs uppercase tracking-wider text-muted-foreground",
							children: [
								/* @__PURE__ */ jsx("th", {
									className: "px-4 py-3 font-medium",
									children: "Product"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "px-4 py-3 font-medium",
									children: "Category"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "px-4 py-3 font-medium",
									children: "Price"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "px-4 py-3 font-medium",
									children: "Stock"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "px-4 py-3 font-medium",
									children: "Rating"
								}),
								/* @__PURE__ */ jsx("th", {
									className: "px-4 py-3 text-right font-medium",
									children: "Actions"
								})
							]
						}) }), /* @__PURE__ */ jsxs("tbody", { children: [filtered.map((p) => /* @__PURE__ */ jsxs("tr", {
							className: "border-b border-border last:border-0 hover:bg-secondary/30",
							children: [
								/* @__PURE__ */ jsx("td", {
									className: "px-4 py-3",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ jsx("img", {
											src: p.image,
											alt: "",
											className: "h-10 w-10 rounded-lg object-cover"
										}), /* @__PURE__ */ jsxs("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ jsx("div", {
												className: "line-clamp-1 font-medium",
												children: p.name
											}), /* @__PURE__ */ jsx("div", {
												className: "text-xs text-muted-foreground",
												children: p.id
											})]
										})]
									})
								}),
								/* @__PURE__ */ jsx("td", {
									className: "px-4 py-3 text-muted-foreground",
									children: p.category
								}),
								/* @__PURE__ */ jsxs("td", {
									className: "px-4 py-3 font-medium",
									children: ["$", p.price]
								}),
								/* @__PURE__ */ jsx("td", {
									className: "px-4 py-3",
									children: /* @__PURE__ */ jsx("span", {
										className: `rounded-full px-2 py-0.5 text-xs ${p.stock > 10 ? "bg-success/15 text-success" : p.stock > 0 ? "bg-warning/20 text-warning-foreground" : "bg-destructive/15 text-destructive"}`,
										children: p.stock
									})
								}),
								/* @__PURE__ */ jsx("td", {
									className: "px-4 py-3",
									children: p.rating
								}),
								/* @__PURE__ */ jsx("td", {
									className: "px-4 py-3",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex justify-end gap-1",
										children: [/* @__PURE__ */ jsx("button", {
											onClick: () => open(p),
											className: "grid h-8 w-8 place-items-center rounded-lg hover:bg-secondary",
											children: /* @__PURE__ */ jsx(Pencil, { className: "h-4 w-4" })
										}), /* @__PURE__ */ jsx("button", {
											onClick: () => {
												if (confirm("Delete this product?")) {
													deleteProduct(p.id);
													toast.success("Product deleted");
												}
											},
											className: "grid h-8 w-8 place-items-center rounded-lg text-destructive hover:bg-destructive/10",
											children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
										})]
									})
								})
							]
						}, p.id)), filtered.length === 0 && /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", {
							colSpan: 6,
							className: "px-4 py-12 text-center text-sm text-muted-foreground",
							children: "No products match your filters."
						}) })] })]
					})
				})
			}),
			showModal && /* @__PURE__ */ jsxs("div", {
				className: "fixed inset-0 z-50 grid place-items-center p-4",
				children: [/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 bg-foreground/50",
					onClick: () => {
						setEditing(null);
						setCreating(false);
					}
				}), /* @__PURE__ */ jsxs("form", {
					onSubmit: save,
					className: "relative w-full max-w-2xl rounded-3xl border border-border bg-card p-6 shadow-card-hover sm:p-8",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "font-display text-2xl font-bold",
								children: editing ? "Edit product" : "Add product"
							}), /* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => {
									setEditing(null);
									setCreating(false);
								},
								className: "grid h-9 w-9 place-items-center rounded-full hover:bg-secondary",
								children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-6 grid gap-4 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ jsxs("label", {
									className: "text-sm sm:col-span-2",
									children: [/* @__PURE__ */ jsx("span", {
										className: "mb-1.5 block font-medium",
										children: "Name"
									}), /* @__PURE__ */ jsx("input", {
										required: true,
										value: draft.name,
										onChange: (e) => setDraft({
											...draft,
											name: e.target.value
										}),
										className: "h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm"
									})]
								}),
								/* @__PURE__ */ jsxs("label", {
									className: "text-sm",
									children: [/* @__PURE__ */ jsx("span", {
										className: "mb-1.5 block font-medium",
										children: "Category"
									}), /* @__PURE__ */ jsx("select", {
										value: draft.category,
										onChange: (e) => setDraft({
											...draft,
											category: e.target.value
										}),
										className: "h-11 w-full rounded-xl border border-border bg-background px-3 text-sm",
										children: CATEGORIES.map((c) => /* @__PURE__ */ jsx("option", { children: c }, c))
									})]
								}),
								/* @__PURE__ */ jsxs("label", {
									className: "text-sm",
									children: [/* @__PURE__ */ jsx("span", {
										className: "mb-1.5 block font-medium",
										children: "Image URL"
									}), /* @__PURE__ */ jsx("input", {
										value: draft.image,
										onChange: (e) => setDraft({
											...draft,
											image: e.target.value
										}),
										className: "h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm"
									})]
								}),
								/* @__PURE__ */ jsxs("label", {
									className: "text-sm",
									children: [/* @__PURE__ */ jsx("span", {
										className: "mb-1.5 block font-medium",
										children: "Price ($)"
									}), /* @__PURE__ */ jsx("input", {
										required: true,
										type: "number",
										min: 0,
										step: .01,
										value: draft.price,
										onChange: (e) => setDraft({
											...draft,
											price: +e.target.value
										}),
										className: "h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm"
									})]
								}),
								/* @__PURE__ */ jsxs("label", {
									className: "text-sm",
									children: [/* @__PURE__ */ jsx("span", {
										className: "mb-1.5 block font-medium",
										children: "Stock"
									}), /* @__PURE__ */ jsx("input", {
										required: true,
										type: "number",
										min: 0,
										value: draft.stock,
										onChange: (e) => setDraft({
											...draft,
											stock: +e.target.value
										}),
										className: "h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm"
									})]
								}),
								/* @__PURE__ */ jsxs("label", {
									className: "text-sm",
									children: [/* @__PURE__ */ jsx("span", {
										className: "mb-1.5 block font-medium",
										children: "Rating"
									}), /* @__PURE__ */ jsx("input", {
										type: "number",
										min: 0,
										max: 5,
										step: .1,
										value: draft.rating,
										onChange: (e) => setDraft({
											...draft,
											rating: +e.target.value
										}),
										className: "h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm"
									})]
								}),
								/* @__PURE__ */ jsxs("label", {
									className: "text-sm",
									children: [/* @__PURE__ */ jsx("span", {
										className: "mb-1.5 block font-medium",
										children: "Reviews"
									}), /* @__PURE__ */ jsx("input", {
										type: "number",
										min: 0,
										value: draft.reviews,
										onChange: (e) => setDraft({
											...draft,
											reviews: +e.target.value
										}),
										className: "h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm"
									})]
								}),
								/* @__PURE__ */ jsxs("label", {
									className: "text-sm sm:col-span-2",
									children: [/* @__PURE__ */ jsx("span", {
										className: "mb-1.5 block font-medium",
										children: "Description"
									}), /* @__PURE__ */ jsx("textarea", {
										rows: 3,
										value: draft.description,
										onChange: (e) => setDraft({
											...draft,
											description: e.target.value
										}),
										className: "w-full rounded-xl border border-border bg-background p-3.5 text-sm"
									})]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-6 flex justify-end gap-2",
							children: [/* @__PURE__ */ jsx("button", {
								type: "button",
								onClick: () => {
									setEditing(null);
									setCreating(false);
								},
								className: "rounded-full border border-border px-5 py-2.5 text-sm",
								children: "Cancel"
							}), /* @__PURE__ */ jsx("button", {
								type: "submit",
								className: "rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant",
								children: editing ? "Save changes" : "Add product"
							})]
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { AdminProducts as component };
