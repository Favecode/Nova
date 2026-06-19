import { t as AdminShell } from "./admin-shell-BKoNOmr7.js";
import { i as REVENUE_SERIES, t as CATEGORY_SERIES } from "./mock-admin-DfqkTXVa.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
//#region src/routes/admin.analytics.tsx?tsr-split=component
var COLORS = [
	"var(--color-chart-1)",
	"var(--color-chart-2)",
	"var(--color-chart-3)",
	"var(--color-chart-4)",
	"var(--color-chart-5)",
	"var(--color-primary)"
];
function Analytics() {
	return /* @__PURE__ */ jsx(AdminShell, {
		title: "Analytics",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid gap-6 xl:grid-cols-2",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-card p-6 shadow-soft",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "font-display text-lg font-semibold",
						children: "Orders & Revenue"
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-4 h-72",
						children: /* @__PURE__ */ jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxs(LineChart, {
							data: REVENUE_SERIES,
							children: [
								/* @__PURE__ */ jsx(CartesianGrid, {
									stroke: "var(--color-border)",
									strokeDasharray: "3 3",
									vertical: false
								}),
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
								/* @__PURE__ */ jsx(Legend, {}),
								/* @__PURE__ */ jsx(Line, {
									type: "monotone",
									dataKey: "revenue",
									stroke: "var(--color-chart-1)",
									strokeWidth: 2.5,
									dot: { r: 4 }
								}),
								/* @__PURE__ */ jsx(Line, {
									type: "monotone",
									dataKey: "orders",
									stroke: "var(--color-chart-2)",
									strokeWidth: 2.5,
									dot: { r: 4 }
								})
							]
						}) })
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-card p-6 shadow-soft",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "font-display text-lg font-semibold",
						children: "Sales by category"
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-4 h-72",
						children: /* @__PURE__ */ jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxs(PieChart, { children: [
							/* @__PURE__ */ jsx(Pie, {
								data: CATEGORY_SERIES,
								dataKey: "value",
								nameKey: "name",
								innerRadius: 60,
								outerRadius: 100,
								paddingAngle: 3,
								children: CATEGORY_SERIES.map((_, i) => /* @__PURE__ */ jsx(Cell, { fill: COLORS[i % COLORS.length] }, i))
							}),
							/* @__PURE__ */ jsx(Tooltip, { contentStyle: {
								background: "var(--color-card)",
								border: "1px solid var(--color-border)",
								borderRadius: 12
							} }),
							/* @__PURE__ */ jsx(Legend, {})
						] }) })
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-card p-6 shadow-soft xl:col-span-2",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "font-display text-lg font-semibold",
						children: "Monthly revenue"
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-4 h-72",
						children: /* @__PURE__ */ jsx(ResponsiveContainer, { children: /* @__PURE__ */ jsxs(BarChart, {
							data: REVENUE_SERIES,
							children: [
								/* @__PURE__ */ jsx(CartesianGrid, {
									stroke: "var(--color-border)",
									strokeDasharray: "3 3",
									vertical: false
								}),
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
								/* @__PURE__ */ jsx(Bar, {
									dataKey: "revenue",
									fill: "var(--color-chart-1)",
									radius: [
										8,
										8,
										0,
										0
									]
								})
							]
						}) })
					})]
				})
			]
		})
	});
}
//#endregion
export { Analytics as component };
