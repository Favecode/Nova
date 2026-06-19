import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/product.$id.tsx
var $$splitNotFoundComponentImporter = () => import("./product._id-BBhDb_Nj.js");
var $$splitComponentImporter = () => import("./product._id-BCdlZlC4.js");
var Route = createFileRoute("/product/$id")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
