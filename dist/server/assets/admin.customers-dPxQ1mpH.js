import { t as AdminShell } from "./admin-shell-BKoNOmr7.js";
import { n as MOCK_CUSTOMERS } from "./mock-admin-DfqkTXVa.js";
import { useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Search } from "lucide-react";
//#region src/routes/admin.customers.tsx?tsr-split=component
function AdminCustomers() {
	const [q, setQ] = useState("");
	const filtered = useMemo(() => MOCK_CUSTOMERS.filter((c) => `${c.name} ${c.email} ${c.id}`.toLowerCase().includes(q.toLowerCase())), [q]);
	return /* @__PURE__ */ jsxs(AdminShell, {
		title: "Customers",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative max-w-md",
			children: [/* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx("input", {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "Search customers…",
				className: "h-10 w-full rounded-full border border-border bg-card pl-9 pr-4 text-sm"
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
								children: "Customer"
							}),
							/* @__PURE__ */ jsx("th", {
								className: "px-4 py-3 font-medium",
								children: "Email"
							}),
							/* @__PURE__ */ jsx("th", {
								className: "px-4 py-3 font-medium",
								children: "Orders"
							}),
							/* @__PURE__ */ jsx("th", {
								className: "px-4 py-3 font-medium",
								children: "Spent"
							}),
							/* @__PURE__ */ jsx("th", {
								className: "px-4 py-3 font-medium",
								children: "Joined"
							})
						]
					}) }), /* @__PURE__ */ jsx("tbody", { children: filtered.map((c) => /* @__PURE__ */ jsxs("tr", {
						className: "border-b border-border last:border-0 hover:bg-secondary/30",
						children: [
							/* @__PURE__ */ jsx("td", {
								className: "px-4 py-3",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ jsx("span", {
										className: "grid h-9 w-9 place-items-center rounded-full bg-gradient-primary text-xs font-bold text-primary-foreground",
										children: c.name.split(" ").map((n) => n[0]).join("")
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
										className: "font-medium",
										children: c.name
									}), /* @__PURE__ */ jsx("div", {
										className: "text-xs text-muted-foreground",
										children: c.id
									})] })]
								})
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-4 py-3 text-muted-foreground",
								children: c.email
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-4 py-3",
								children: c.orders
							}),
							/* @__PURE__ */ jsxs("td", {
								className: "px-4 py-3 font-display font-bold",
								children: ["$", c.spent.toFixed(2)]
							}),
							/* @__PURE__ */ jsx("td", {
								className: "px-4 py-3 text-muted-foreground",
								children: c.joined
							})
						]
					}, c.id)) })]
				})
			})
		})]
	});
}
//#endregion
export { AdminCustomers as component };
