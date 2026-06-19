import { t as SiteLayout } from "./site-layout-C9z6Fp7e.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";
//#region src/routes/contact.tsx?tsr-split=component
function Contact() {
	const [sent, setSent] = useState(false);
	const submit = (e) => {
		e.preventDefault();
		setSent(true);
		toast.success("Message sent — we'll be in touch.");
	};
	return /* @__PURE__ */ jsx(SiteLayout, { children: /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "text-center",
			children: [/* @__PURE__ */ jsx("h1", {
				className: "font-display text-4xl font-bold sm:text-5xl",
				children: "Say hello"
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-3 text-muted-foreground",
				children: "We read every message and reply within one business day."
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-12 grid gap-10 md:grid-cols-[1fr_2fr]",
			children: [/* @__PURE__ */ jsx("ul", {
				className: "space-y-6",
				children: [
					{
						icon: Mail,
						t: "Email",
						v: "hello@nova.shop"
					},
					{
						icon: Phone,
						t: "Phone",
						v: "+1 (555) 010-2032"
					},
					{
						icon: MapPin,
						t: "Studio",
						v: "144 Mercer St, NYC"
					}
				].map(({ icon: Icon, t, v }) => /* @__PURE__ */ jsxs("li", {
					className: "flex items-start gap-4",
					children: [/* @__PURE__ */ jsx("span", {
						className: "grid h-11 w-11 place-items-center rounded-full bg-secondary",
						children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" })
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "text-xs uppercase tracking-wider text-muted-foreground",
						children: t
					}), /* @__PURE__ */ jsx("div", {
						className: "font-medium",
						children: v
					})] })]
				}, t))
			}), /* @__PURE__ */ jsx("form", {
				onSubmit: submit,
				className: "rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8",
				children: sent ? /* @__PURE__ */ jsx("div", {
					className: "grid h-full place-items-center text-center",
					children: /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
						className: "font-display text-2xl font-bold",
						children: "Message received"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "Thanks for writing — we'll reply soon."
					})] })
				}) : /* @__PURE__ */ jsxs("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ jsxs("label", {
							className: "text-sm sm:col-span-1",
							children: [/* @__PURE__ */ jsx("span", {
								className: "mb-1.5 block font-medium",
								children: "Name"
							}), /* @__PURE__ */ jsx("input", {
								required: true,
								className: "h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm"
							})]
						}),
						/* @__PURE__ */ jsxs("label", {
							className: "text-sm sm:col-span-1",
							children: [/* @__PURE__ */ jsx("span", {
								className: "mb-1.5 block font-medium",
								children: "Email"
							}), /* @__PURE__ */ jsx("input", {
								required: true,
								type: "email",
								className: "h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm"
							})]
						}),
						/* @__PURE__ */ jsxs("label", {
							className: "text-sm sm:col-span-2",
							children: [/* @__PURE__ */ jsx("span", {
								className: "mb-1.5 block font-medium",
								children: "Subject"
							}), /* @__PURE__ */ jsx("input", {
								required: true,
								className: "h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm"
							})]
						}),
						/* @__PURE__ */ jsxs("label", {
							className: "text-sm sm:col-span-2",
							children: [/* @__PURE__ */ jsx("span", {
								className: "mb-1.5 block font-medium",
								children: "Message"
							}), /* @__PURE__ */ jsx("textarea", {
								required: true,
								rows: 5,
								className: "w-full rounded-xl border border-border bg-background p-3.5 text-sm"
							})]
						}),
						/* @__PURE__ */ jsx("button", {
							type: "submit",
							className: "mt-2 w-fit rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant sm:col-span-2",
							children: "Send message"
						})
					]
				})
			})]
		})]
	}) });
}
//#endregion
export { Contact as component };
