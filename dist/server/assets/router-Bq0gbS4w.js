import { t as StoreProvider } from "./store-DTmEggsq.js";
import { t as Route$14 } from "./shop-C_r_YB11.js";
import { t as Route$15 } from "./product._id-CjMskX5v.js";
import { useEffect } from "react";
import { HeadContent, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
//#region src/styles.css?url
var styles_default = "/assets/styles-BdXnaFRp.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "font-display text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-3 text-muted-foreground",
					children: "This page wandered off. Let's get you home."
				}),
				/* @__PURE__ */ jsx("a", {
					href: "/",
					className: "mt-6 inline-flex rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-elegant",
					children: "Back to store"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "font-display text-2xl font-semibold",
					children: "Something broke"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Try again or head home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground",
						children: "Retry"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "rounded-full border border-border px-5 py-2 text-sm",
						children: "Home"
					})]
				})
			]
		})
	});
}
var Route$13 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Nova — Modern essentials, beautifully made" },
			{
				name: "description",
				content: "Nova is a modern e-commerce destination for thoughtfully designed everyday goods."
			},
			{
				property: "og:title",
				content: "Nova — Modern essentials"
			},
			{
				property: "og:description",
				content: "Thoughtfully designed everyday goods."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700;9..144,800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$13.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsxs(StoreProvider, { children: [/* @__PURE__ */ jsx(Outlet, {}), /* @__PURE__ */ jsx(Toaster, {
			position: "top-right",
			richColors: true,
			closeButton: true
		})] })
	});
}
//#endregion
//#region src/routes/wishlist.tsx
var $$splitComponentImporter$12 = () => import("./wishlist-CWvg46PH.js");
var Route$12 = createFileRoute("/wishlist")({
	head: () => ({ meta: [{ title: "Wishlist — Nova" }] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$11 = () => import("./contact-KHMaK6Sc.js");
var Route$11 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact — Nova" }, {
		name: "description",
		content: "Get in touch with the Nova team."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
//#endregion
//#region src/routes/checkout.tsx
var $$splitComponentImporter$10 = () => import("./checkout-BvUkOfoA.js");
var Route$10 = createFileRoute("/checkout")({
	head: () => ({ meta: [{ title: "Checkout — Nova" }] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
//#endregion
//#region src/routes/cart.tsx
var $$splitComponentImporter$9 = () => import("./cart-033Zs9cL.js");
var Route$9 = createFileRoute("/cart")({
	head: () => ({ meta: [{ title: "Your cart — Nova" }] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
//#endregion
//#region src/routes/admin.tsx
var $$splitComponentImporter$8 = () => import("./admin-rRckGftk.js");
var Route$8 = createFileRoute("/admin")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$7 = () => import("./about-DxYHwGIp.js");
var Route$7 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About — Nova" }, {
		name: "description",
		content: "Nova is a small studio building a thoughtful collection of modern essentials."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$6 = () => import("./routes-CC4H9ad7.js");
var Route$6 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Nova — Modern essentials, beautifully made" }, {
		name: "description",
		content: "Shop curated, thoughtfully designed everyday goods on Nova."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
//#endregion
//#region src/routes/admin.index.tsx
var $$splitComponentImporter$5 = () => import("./admin.index-DdtCDj1S.js");
var Route$5 = createFileRoute("/admin/")({
	head: () => ({ meta: [{ title: "Admin — Nova" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/admin.products.tsx
var $$splitComponentImporter$4 = () => import("./admin.products-BDDSu4Uw.js");
var Route$4 = createFileRoute("/admin/products")({
	head: () => ({ meta: [{ title: "Products — Nova Admin" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/admin.orders.tsx
var $$splitComponentImporter$3 = () => import("./admin.orders-D7Z3Ph3K.js");
var Route$3 = createFileRoute("/admin/orders")({
	head: () => ({ meta: [{ title: "Orders — Nova Admin" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/admin.dashboard.tsx
var $$splitComponentImporter$2 = () => import("./admin.dashboard-BIpoK0ng.js");
var Route$2 = createFileRoute("/admin/dashboard")({
	head: () => ({ meta: [{ title: "Dashboard — Nova Admin" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/admin.customers.tsx
var $$splitComponentImporter$1 = () => import("./admin.customers-dPxQ1mpH.js");
var Route$1 = createFileRoute("/admin/customers")({
	head: () => ({ meta: [{ title: "Customers — Nova Admin" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/admin.analytics.tsx
var $$splitComponentImporter = () => import("./admin.analytics-CH6YVCcJ.js");
var Route = createFileRoute("/admin/analytics")({
	head: () => ({ meta: [{ title: "Analytics — Nova Admin" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var WishlistRoute = Route$12.update({
	id: "/wishlist",
	path: "/wishlist",
	getParentRoute: () => Route$13
});
var ShopRoute = Route$14.update({
	id: "/shop",
	path: "/shop",
	getParentRoute: () => Route$13
});
var ContactRoute = Route$11.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$13
});
var CheckoutRoute = Route$10.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$13
});
var CartRoute = Route$9.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$13
});
var AdminRoute = Route$8.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$13
});
var AboutRoute = Route$7.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$13
});
var IndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$13
});
var AdminIndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => AdminRoute
});
var ProductIdRoute = Route$15.update({
	id: "/product/$id",
	path: "/product/$id",
	getParentRoute: () => Route$13
});
var AdminProductsRoute = Route$4.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => AdminRoute
});
var AdminOrdersRoute = Route$3.update({
	id: "/orders",
	path: "/orders",
	getParentRoute: () => AdminRoute
});
var AdminDashboardRoute = Route$2.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => AdminRoute
});
var AdminCustomersRoute = Route$1.update({
	id: "/customers",
	path: "/customers",
	getParentRoute: () => AdminRoute
});
var AdminRouteChildren = {
	AdminAnalyticsRoute: Route.update({
		id: "/analytics",
		path: "/analytics",
		getParentRoute: () => AdminRoute
	}),
	AdminCustomersRoute,
	AdminDashboardRoute,
	AdminOrdersRoute,
	AdminProductsRoute,
	AdminIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AdminRoute: AdminRoute._addFileChildren(AdminRouteChildren),
	CartRoute,
	CheckoutRoute,
	ContactRoute,
	ShopRoute,
	WishlistRoute,
	ProductIdRoute
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
