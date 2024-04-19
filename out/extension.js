"use strict";
var p = Object.create;
var c = Object.defineProperty;
var u = Object.getOwnPropertyDescriptor;
var f = Object.getOwnPropertyNames;
var l = Object.getPrototypeOf,
	m = Object.prototype.hasOwnProperty;
var v = (o, s) => {
		for (var e in s) c(o, e, { get: s[e], enumerable: !0 });
	},
	i = (o, s, e, n) => {
		if ((s && typeof s == "object") || typeof s == "function")
			for (let t of f(s))
				!m.call(o, t) &&
					t !== e &&
					c(o, t, {
						get: () => s[t],
						enumerable: !(n = u(s, t)) || n.enumerable,
					});
		return o;
	};
var a = (o, s, e) => (
		(e = o != null ? p(l(o)) : {}),
		i(
			s || !o || !o.__esModule
				? c(e, "default", { value: o, enumerable: !0 })
				: e,
			o
		)
	),
	x = (o) => i(c({}, "__esModule", { value: !0 }), o);
var b = {};
v(b, { activate: () => h, deactivate: () => C });
module.exports = x(b);
var d = a(require("vscode")),
	r = a(require("child_process"));
function g(o) {
	let e = r.spawn(
		"zellij",
		["action", "new-tab", "-l", "default", "-c", o.fsPath],
		{ stdio: "ignore" }
	);
	e.stdout?.on("data", (n) => console.log(n.toString())),
		e.stderr?.on("error", (n) => console.log(n));
}
function h(o) {
	o.subscriptions.push(
		d.commands.registerCommand("vscode-extensions.openfolderinzellij", (s) =>
			g(s)
		)
	);
}
function C() {}
0 && (module.exports = { activate, deactivate });
