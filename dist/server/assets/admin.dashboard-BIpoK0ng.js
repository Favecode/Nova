import { r as useStore } from "./store-DTmEggsq.js";
import { t as AdminShell } from "./admin-shell-BKoNOmr7.js";
import { i as REVENUE_SERIES, r as MOCK_ORDERS } from "./mock-admin-DfqkTXVa.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight, DollarSign, Package, ShoppingCart, Users } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
//#region src/routes/admin.dashboard.tsx?tsr-split=component
function Stat({ icon: Icon, label, value, delta, accent }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-2xl border border-border bg-card p-5 shadow-soft",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-xs uppercase tracking-wider text-muted-foreground",
					children: label
				}), /* @__PURE__ */ jsx("span", {
					className: `grid h-9 w-9 place-items-center rounded-lg ${accent}`,
					children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" })
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-3 font-display text-3xl font-bold",
				children: value
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-1 flex items-center gap-1 text-xs text-success",
				children: [
					/* @__PURE__ */ jsx(ArrowUpRight, { className: "h-3 w-3" }),
					" ",
					delta
				]
			})
		]
	});
}
function Dashboard() {
	const { products } = useStore();
	return /* @__PURE__ */ jsxs(AdminShell, {
		title: "Dashboard",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
			children: [
				/* @__PURE__ */ jsx(Stat, {
					icon: DollarSign,
					label: "Revenue",
					value: `$${MOCK_ORDERS.reduce((s, o) => s + o.total, 0).toLocaleString(void 0, { maximumFractionDigits: 0 })}`,
					delta: "+12.4% MoM",
					accent: "bg-success/15 text-success"
				}),
				/* @__PURE__ */ jsx(Stat, {
					icon: ShoppingCart,
					label: "Orders",
					value: `${MOCK_ORDERS.length}`,
					delta: "+8 this week",
					accent: "bg-primary-glow/15 text-primary-glow"
				}),
				/* @__PURE__ */ jsx(Stat, {
					icon: Package,
					label: "Products",
					value: `${products.length}`,
					delta: "+2 new",
					accent: "bg-accent text-accent-foreground"
				}),
				/* @__PURE__ */ jsx(Stat, {
					icon: Users,
					label: "Customers",
					value: "1,284",
					delta: "+47 this month",
					accent: "bg-secondary text-secondary-foreground"
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-6 grid gap-6 xl:grid-cols-[2fr_1fr]",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "rounded-2xl border border-border bg-card p-6 shadow-soft",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "font-display text-lg font-semibold",
						children: "Revenue"
					}), /* @__PURE__ */ jsx("span", {
						className: "text-xs text-muted-foreground",
						children: "Last 6 months"
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-4 h-72",
					children: /* @__PURE__ */ jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxs(AreaChart, {
						data: REVENUE_SERIES,
						children: [
							/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
								id: "rev",
								x1: "0",
								y1: "0",
								x2: "0",
								y2: "1",
								children: [/* @__PURE__ */ jsx("stop", {
									offset: "0%",
									stopColor: "var(--color-chart-1)",
									stopOpacity: .4
								}), /* @__PURE__ */ jsx("stop", {
									offset: "100%",
									stopColor: "var(--color-chart-1)",
									stopOpacity: 0
								})]
							}) }),
							/* @__PURE__ */ jsx(XAxis, {
								dataKey: "m",
								stroke: "var(--color-muted-foreground)",
								fontSize: 12,
								tickLine: false,
								axisLine: false
							}),
							/* @__PURE__ */ jsx(YAxis, {
								stroke: "var(--color-muted-foreground)",
								fontSize: 12,
								tickLine: false,
								axisLine: false
							}),
							/* @__PURE__ */ jsx(Tooltip, { contentStyle: {
								background: "var(--color-card)",
								border: "1px solid var(--color-border)",
								borderRadius: 12
							} }),
							/* @__PURE__ */ jsx(Area, {
								type: "monotone",
								dataKey: "revenue",
								stroke: "var(--color-chart-1)",
								strokeWidth: 2.5,
								fill: "url(#rev)"
							})
						]
					}) })
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "rounded-2xl border border-border bg-card p-6 shadow-soft",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "font-display text-lg font-semibold",
						children: "Recent orders"
					}), /* @__PURE__ */ jsx(Link, {
						to: "/admin/orders",
						className: "text-xs text-primary-glow",
						children: "View all"
					})]
				}), /* @__PURE__ */ jsx("ul", {
					className: "mt-4 divide-y divide-border",
					children: MOCK_ORDERS.slice(0, 5).map((o) => /* @__PURE__ */ jsxs("li", {
						className: "flex items-center justify-between py-3",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ jsx("div", {
								className: "truncate text-sm font-medium",
								children: o.customer
							}), /* @__PURE__ */ jsx("div", {
								className: "text-xs text-muted-foreground",
								children: o.id
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "text-right",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "font-display text-sm font-bold",
								children: ["$", o.total.toFixed(2)]
							}), /* @__PURE__ */ jsx("div", {
								className: "text-[10px] uppercase tracking-wider text-muted-foreground",
								children: o.status
							})]
						})]
					}, o.id))
				})]
			})]
		})]
	});
}
//#endregion
export { Dashboard as component };
