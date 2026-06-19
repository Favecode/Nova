import { t as SiteLayout } from "./site-layout-C9z6Fp7e.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/product.$id.tsx?tsr-split=notFoundComponent
var SplitNotFoundComponent = () => /* @__PURE__ */ jsx(SiteLayout, { children: /* @__PURE__ */ jsxs("div", {
	className: "mx-auto max-w-md py-24 text-center",
	children: [/* @__PURE__ */ jsx("h1", {
		className: "font-display text-3xl font-bold",
		children: "Product not found"
	}), /* @__PURE__ */ jsx(Link, {
		to: "/shop",
		className: "mt-4 inline-block text-primary-glow underline",
		children: "Back to shop"
	})]
}) });
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
