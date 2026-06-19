import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { Lock } from "lucide-react";
//#region src/routes/admin.index.tsx?tsr-split=component
function AdminLogin() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("admin@nova.shop");
	const [pw, setPw] = useState("admin123");
	const submit = (e) => {
		e.preventDefault();
		localStorage.setItem("nv:admin", "1");
		toast.success("Signed in");
		navigate({ to: "/admin/dashboard" });
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "grid min-h-screen lg:grid-cols-2",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative hidden bg-sidebar text-sidebar-foreground lg:block",
			children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-primary opacity-30" }), /* @__PURE__ */ jsxs("div", {
				className: "relative flex h-full flex-col justify-between p-12",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsx("span", {
							className: "grid h-9 w-9 place-items-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground",
							children: /* @__PURE__ */ jsx("span", {
								className: "font-display font-bold",
								children: "N"
							})
						}), /* @__PURE__ */ jsx("span", {
							className: "font-display text-xl font-bold",
							children: "Nova Admin"
						})]
					}),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
						className: "font-display text-4xl font-bold leading-tight",
						children: "Run your storefront with calm, considered tools."
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-3 max-w-sm text-sidebar-foreground/70",
						children: "Manage products, orders, customers and analytics from one quiet dashboard."
					})] }),
					/* @__PURE__ */ jsx("p", {
						className: "text-xs text-sidebar-foreground/60",
						children: "© 2026 Nova"
					})
				]
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "flex items-center justify-center p-6",
			children: /* @__PURE__ */ jsxs("form", {
				onSubmit: submit,
				className: "w-full max-w-sm",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "mb-8 flex items-center gap-2 lg:hidden",
						children: [/* @__PURE__ */ jsx("span", {
							className: "grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary text-primary-foreground",
							children: /* @__PURE__ */ jsx("span", {
								className: "font-display font-bold",
								children: "N"
							})
						}), /* @__PURE__ */ jsx("span", {
							className: "font-display text-xl font-bold",
							children: "Nova Admin"
						})]
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "font-display text-3xl font-bold",
						children: "Welcome back"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Sign in to your admin dashboard."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 space-y-4",
						children: [
							/* @__PURE__ */ jsxs("label", {
								className: "block text-sm",
								children: [/* @__PURE__ */ jsx("span", {
									className: "mb-1.5 block font-medium",
									children: "Email"
								}), /* @__PURE__ */ jsx("input", {
									value: email,
									onChange: (e) => setEmail(e.target.value),
									type: "email",
									required: true,
									className: "h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm"
								})]
							}),
							/* @__PURE__ */ jsxs("label", {
								className: "block text-sm",
								children: [/* @__PURE__ */ jsx("span", {
									className: "mb-1.5 block font-medium",
									children: "Password"
								}), /* @__PURE__ */ jsx("input", {
									value: pw,
									onChange: (e) => setPw(e.target.value),
									type: "password",
									required: true,
									className: "h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm"
								})]
							}),
							/* @__PURE__ */ jsx("button", {
								type: "submit",
								className: "mt-2 w-full rounded-full bg-gradient-primary py-3 text-sm font-semibold text-primary-foreground shadow-elegant",
								children: "Sign in"
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "flex items-center justify-center gap-1.5 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ jsx(Lock, { className: "h-3 w-3" }), " Demo only — no real authentication."]
							})
						]
					})
				]
			})
		})]
	});
}
//#endregion
export { AdminLogin as component };
