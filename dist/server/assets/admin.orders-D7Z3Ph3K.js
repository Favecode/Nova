import { t as AdminShell } from "./admin-shell-BKoNOmr7.js";
import { r as MOCK_ORDERS } from "./mock-admin-DfqkTXVa.js";
import { useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Search } from "lucide-react";
//#region src/routes/admin.orders.tsx?tsr-split=component
var STATUS = [
	"All",
	"Processing",
	"Shipped",
	"Delivered",
	"Cancelled"
];
var tone = {
	Delivered: "bg-success/15 text-success",
	Shipped: "bg-primary-glow/15 text-primary-glow",
	Processing: "bg-warning/20 text-warning-foreground",
	Cancelled: "bg-destructive/15 text-destructive"
};
function AdminOrders() {
	const [q, setQ] = useState("");
	const [status, setStatus] = useState("All");
	const filtered = useMemo(() => MOCK_ORDERS.filter((o) => {
		if (status !== "All" && o.status !== status) return false;
		if (q && !`${o.id} ${o.customer} ${o.email}`.toLowerCase().includes(q.toLowerCase())) return false;
		return true;
	}), [q, status]);
	return /* @__PURE__ */ jsxs(AdminShell, {
		title: "Orders",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex flex-wrap items-center gap-3",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "relative flex-1 min-w-[200px]",
				children: [/* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Search orders…",
					className: "h-10 w-full rounded-full border border-border bg-card pl-9 pr-4 text-sm"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "flex gap-1.5",
				children: STATUS.map((s) => /* @__PURE__ */ jsx("button", {
					onClick: () => setStatus(s),
					className: `rounded-full px-3.5 py-1.5 text-xs font-medium transition ${status === s ? "bg-foreground text-background" : "bg-card border border-border"}`,
					children: s
				}, s))
			})]
		}), /* @__PURE__ */ jsx("div", {
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
								children: "Order"
							}),
							/* @__PURE__ */ jsx("th", {
								className: "px-4 py-3 font-medium",
								children: "Customer"
							}),
							/* @__PURE__ */ jsx("th", {
								className: "px-4 py-3 font-medium",
								children: "Date"
							}),
							/* @__PURE__ */ jsx("th", {
								className: "px-4 py-3 font-medium",
								children: "Items"
							}),
							/* @__PURE__ */ jsx("th", {
								className: "px-4 py-3 font-medium",
								children: "Total"
							}),
							/* @__PURE__ */ jsx("th", {
								className: "px-4 py-3 font-medium",
								children: "Status"
							})
						]
					}) }), /* @__PURE__ */ jsxs("tbody", { children: [filtered.map((o) => /* @__PURE__ */ jsxs("tr", {
						className: "border-b border-border last:border-0 hover:bg-secondary/30",
						children: [
							/* @__PURE__ */ jsx("td", {
								className: "px-4 py-3 font-medium",
								children: o.id
							}),
							/* @__PURE__ */ jsxs("td", {
								className: "px-4 py-3",
								children: [/* @__PURE__ */ jsx("div", { children: o.customer }), /* @__PURE__ */ jsx("div", {
									className: "text-xs text-muted-foreground",
									children: o.email
								})]
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-4 py-3 text-muted-foreground",
								children: o.date
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-4 py-3",
								children: o.items
							}),
							/* @__PURE__ */ jsxs("td", {
								className: "px-4 py-3 font-display font-bold",
								children: ["$", o.total.toFixed(2)]
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsx("span", {
									className: `rounded-full px-2.5 py-1 text-xs font-medium ${tone[o.status]}`,
									children: o.status
								})
							})
						]
					}, o.id)), filtered.length === 0 && /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", {
						colSpan: 6,
						className: "px-4 py-12 text-center text-sm text-muted-foreground",
						children: "No orders found."
					}) })] })]
				})
			})
		})]
	});
}
//#endregion
export { AdminOrders as component };
