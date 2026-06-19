import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/shop.tsx
var $$splitComponentImporter = () => import("./shop-B9J25-Uz.js");
var Route = createFileRoute("/shop")({
	validateSearch: (s) => ({
		q: typeof s.q === "string" ? s.q : void 0,
		category: typeof s.category === "string" ? s.category : void 0
	}),
	head: () => ({ meta: [{ title: "Shop all — Nova" }, {
		name: "description",
		content: "Browse the full Nova collection. Filter by category, price, and rating."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
