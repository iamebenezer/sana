/*! © JSOcean Cursor Trail Effects Bundle v1.0.1 */ ! function(t) {
    var r = {};

    function e(a) {
        if (r[a]) return r[a].exports;
        var n = r[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return t[a].call(n.exports, n, n.exports, e), n.l = !0, n.exports
    }
    e.m = t, e.c = r, e.d = function(t, r, a) {
        e.o(t, r) || Object.defineProperty(t, r, {
            enumerable: !0,
            get: a
        })
    }, e.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, e.t = function(t, r) {
        if (1 & r && (t = e(t)), 8 & r) return t;
        if (4 & r && "object" == typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (e.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: t
            }), 2 & r && "string" != typeof t)
            for (var n in t) e.d(a, n, function(r) {
                return t[r]
            }.bind(null, n));
        return a
    }, e.n = function(t) {
        var r = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(r, "a", r), r
    }, e.o = function(t, r) {
        return Object.prototype.hasOwnProperty.call(t, r)
    }, e.p = "", e(e.s = 4)
}([function(t, r, e) {
    t.exports = e(3)
}, function(t, r) {
    function e(t, r, e, a, n, f, o) {
        try {
            var c = t[f](o),
                s = c.value
        } catch (t) {
            return void e(t)
        }
        c.done ? r(s) : Promise.resolve(s).then(a, n)
    }
    t.exports = function(t) {
        return function() {
            var r = this,
                a = arguments;
            return new Promise((function(n, f) {
                var o = t.apply(r, a);

                function c(t) {
                    e(o, n, f, c, s, "next", t)
                }

                function s(t) {
                    e(o, n, f, c, s, "throw", t)
                }
                c(void 0)
            }))
        }
    }, t.exports.default = t.exports, t.exports.__esModule = !0
}, function(t, r) {
    t.exports = function(t, r, e) {
        return r in t ? Object.defineProperty(t, r, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[r] = e, t
    }, t.exports.default = t.exports, t.exports.__esModule = !0
}, function(t, r, e) {
    var a = function(t) {
        "use strict";
        var r = Object.prototype,
            e = r.hasOwnProperty,
            a = "function" == typeof Symbol ? Symbol : {},
            n = a.iterator || "@@iterator",
            f = a.asyncIterator || "@@asyncIterator",
            o = a.toStringTag || "@@toStringTag";

        function c(t, r, e) {
            return Object.defineProperty(t, r, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), t[r]
        }
        try {
            c({}, "")
        } catch (t) {
            c = function(t, r, e) {
                return t[r] = e
            }
        }

        function s(t, r, e, a) {
            var n = r && r.prototype instanceof d ? r : d,
                f = Object.create(n.prototype),
                o = new y(a || []);
            return f._invoke = function(t, r, e) {
                var a = "suspendedStart";
                return function(n, f) {
                    if ("executing" === a) throw new Error("Generator is already running");
                    if ("completed" === a) {
                        if ("throw" === n) throw f;
                        return Z()
                    }
                    for (e.method = n, e.arg = f;;) {
                        var o = e.delegate;
                        if (o) {
                            var c = b(o, e);
                            if (c) {
                                if (c === l) continue;
                                return c
                            }
                        }
                        if ("next" === e.method) e.sent = e._sent = e.arg;
                        else if ("throw" === e.method) {
                            if ("suspendedStart" === a) throw a = "completed", e.arg;
                            e.dispatchException(e.arg)
                        } else "return" === e.method && e.abrupt("return", e.arg);
                        a = "executing";
                        var s = i(t, r, e);
                        if ("normal" === s.type) {
                            if (a = e.done ? "completed" : "suspendedYield", s.arg === l) continue;
                            return {
                                value: s.arg,
                                done: e.done
                            }
                        }
                        "throw" === s.type && (a = "completed", e.method = "throw", e.arg = s.arg)
                    }
                }
            }(t, e, o), f
        }

        function i(t, r, e) {
            try {
                return {
                    type: "normal",
                    arg: t.call(r, e)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }
        t.wrap = s;
        var l = {};

        function d() {}

        function h() {}

        function w() {}
        var L = {};
        L[n] = function() {
            return this
        };
        var g = Object.getPrototypeOf,
            C = g && g(g(M([])));
        C && C !== r && e.call(C, n) && (L = C);
        var u = w.prototype = d.prototype = Object.create(L);

        function p(t) {
            ["next", "throw", "return"].forEach((function(r) {
                c(t, r, (function(t) {
                    return this._invoke(r, t)
                }))
            }))
        }

        function v(t, r) {
            var a;
            this._invoke = function(n, f) {
                function o() {
                    return new r((function(a, o) {
                        ! function a(n, f, o, c) {
                            var s = i(t[n], t, f);
                            if ("throw" !== s.type) {
                                var l = s.arg,
                                    d = l.value;
                                return d && "object" == typeof d && e.call(d, "__await") ? r.resolve(d.__await).then((function(t) {
                                    a("next", t, o, c)
                                }), (function(t) {
                                    a("throw", t, o, c)
                                })) : r.resolve(d).then((function(t) {
                                    l.value = t, o(l)
                                }), (function(t) {
                                    return a("throw", t, o, c)
                                }))
                            }
                            c(s.arg)
                        }(n, f, a, o)
                    }))
                }
                return a = a ? a.then(o, o) : o()
            }
        }

        function b(t, r) {
            var e = t.iterator[r.method];
            if (void 0 === e) {
                if (r.delegate = null, "throw" === r.method) {
                    if (t.iterator.return && (r.method = "return", r.arg = void 0, b(t, r), "throw" === r.method)) return l;
                    r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return l
            }
            var a = i(e, t.iterator, r.arg);
            if ("throw" === a.type) return r.method = "throw", r.arg = a.arg, r.delegate = null, l;
            var n = a.arg;
            return n ? n.done ? (r[t.resultName] = n.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = void 0), r.delegate = null, l) : n : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, l)
        }

        function m(t) {
            var r = {
                tryLoc: t[0]
            };
            1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r)
        }

        function x(t) {
            var r = t.completion || {};
            r.type = "normal", delete r.arg, t.completion = r
        }

        function y(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }], t.forEach(m, this), this.reset(!0)
        }

        function M(t) {
            if (t) {
                var r = t[n];
                if (r) return r.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var a = -1,
                        f = function r() {
                            for (; ++a < t.length;)
                                if (e.call(t, a)) return r.value = t[a], r.done = !1, r;
                            return r.value = void 0, r.done = !0, r
                        };
                    return f.next = f
                }
            }
            return {
                next: Z
            }
        }

        function Z() {
            return {
                value: void 0,
                done: !0
            }
        }
        return h.prototype = u.constructor = w, w.constructor = h, h.displayName = c(w, o, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
            var r = "function" == typeof t && t.constructor;
            return !!r && (r === h || "GeneratorFunction" === (r.displayName || r.name))
        }, t.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, w) : (t.__proto__ = w, c(t, o, "GeneratorFunction")), t.prototype = Object.create(u), t
        }, t.awrap = function(t) {
            return {
                __await: t
            }
        }, p(v.prototype), v.prototype[f] = function() {
            return this
        }, t.AsyncIterator = v, t.async = function(r, e, a, n, f) {
            void 0 === f && (f = Promise);
            var o = new v(s(r, e, a, n), f);
            return t.isGeneratorFunction(e) ? o : o.next().then((function(t) {
                return t.done ? t.value : o.next()
            }))
        }, p(u), c(u, o, "Generator"), u[n] = function() {
            return this
        }, u.toString = function() {
            return "[object Generator]"
        }, t.keys = function(t) {
            var r = [];
            for (var e in t) r.push(e);
            return r.reverse(),
                function e() {
                    for (; r.length;) {
                        var a = r.pop();
                        if (a in t) return e.value = a, e.done = !1, e
                    }
                    return e.done = !0, e
                }
        }, t.values = M, y.prototype = {
            constructor: y,
            reset: function(t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t)
                    for (var r in this) "t" === r.charAt(0) && e.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = void 0)
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done) throw t;
                var r = this;

                function a(e, a) {
                    return o.type = "throw", o.arg = t, r.next = e, a && (r.method = "next", r.arg = void 0), !!a
                }
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var f = this.tryEntries[n],
                        o = f.completion;
                    if ("root" === f.tryLoc) return a("end");
                    if (f.tryLoc <= this.prev) {
                        var c = e.call(f, "catchLoc"),
                            s = e.call(f, "finallyLoc");
                        if (c && s) {
                            if (this.prev < f.catchLoc) return a(f.catchLoc, !0);
                            if (this.prev < f.finallyLoc) return a(f.finallyLoc)
                        } else if (c) {
                            if (this.prev < f.catchLoc) return a(f.catchLoc, !0)
                        } else {
                            if (!s) throw new Error("try statement without catch or finally");
                            if (this.prev < f.finallyLoc) return a(f.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(t, r) {
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                    var n = this.tryEntries[a];
                    if (n.tryLoc <= this.prev && e.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                        var f = n;
                        break
                    }
                }
                f && ("break" === t || "continue" === t) && f.tryLoc <= r && r <= f.finallyLoc && (f = null);
                var o = f ? f.completion : {};
                return o.type = t, o.arg = r, f ? (this.method = "next", this.next = f.finallyLoc, l) : this.complete(o)
            },
            complete: function(t, r) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), l
            },
            finish: function(t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var e = this.tryEntries[r];
                    if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), x(e), l
                }
            },
            catch: function(t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var e = this.tryEntries[r];
                    if (e.tryLoc === t) {
                        var a = e.completion;
                        if ("throw" === a.type) {
                            var n = a.arg;
                            x(e)
                        }
                        return n
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, r, e) {
                return this.delegate = {
                    iterator: M(t),
                    resultName: r,
                    nextLoc: e
                }, "next" === this.method && (this.arg = void 0), l
            }
        }, t
    }(t.exports);
    try {
        regeneratorRuntime = a
    } catch (t) {
        Function("r", "regeneratorRuntime = r")(a)
    }
}, function(t, r, e) {
    "use strict";
    e.r(r);
    var a = e(1),
        n = e.n(a),
        f = e(2),
        o = e.n(f),
        c = e(0),
        s = e.n(c),
        i = function() {
            var t = document.querySelector(".".concat("jso-cursor-trail-wrapper"));
            return t || ((t = document.createElement("div")).classList.add("jso-cursor-trail-wrapper"), t.style.position = "fixed", t.style.left = "0px", t.style.top = "0px", t.style.width = "100vw", t.style.height = "100vh", t.style.overflow = "hidden", t.style.pointerEvents = "none", t.style.zIndex = "9999", document.body.appendChild(t), t)
        },
        l = function(t, r) {
            if (!t || !r) return null;
            var e = document.createElement("div");
            return e.classList.add("jso-cursor-trail-shape"), e.style.position = "absolute", e.style.left = "0px", e.style.top = "0px", e.style.pointerEvents = "none", e.style.display = "none", e.innerHTML = r, t.appendChild(e), e.jso = e.jso || {}, e.jso.cursorTrail = e.jso.cursorTrail || {}, e
        },
        d = function(t, r) {
            t && t.debug && console.log("Cursor Trail Effects Bundle error: ".concat(r))
        },
        h = {
            circle: function(t, r) {
                return '\n            <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(t, '" viewBox="0 0 142 142">\n              <circle cx="71" cy="71" r="71" fill="').concat(r, '"/>\n            </svg>\n        ')
            },
            initial: function(t, r) {
                return '\n            <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(t, '" viewBox="0 0 336 336">\n              <polygon fill="').concat(r, '" points="168 252 49.2 286.8 84 168 49.2 49.2 168 84 286.8 49.2 252 168 286.8 286.8" transform="rotate(45 168 168)"/>\n            </svg>\n        ')
            },
            star30: function(t, r) {
                return '\n            <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(t, '" viewBox="0 0 336 336">\n              <path fill="').concat(r, '" d="M168 218.4C128.4 218.4 88.8 241.2 49.2 286.8 94.8 247.2 117.6 207.6 117.6 168 117.6 128.4 94.8 88.8 49.2 49.2 88.8 94.8 128.4 117.6 168 117.6 207.6 117.6 247.2 94.8 286.8 49.2 241.2 88.8 218.4 128.4 218.4 168 218.4 207.6 241.2 247.2 286.8 286.8 247.2 241.2 207.6 218.4 168 218.4Z" transform="rotate(45 168 168)"/>\n            </svg>\n        ')
            },
            star35: function(t, r) {
                return '\n            <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(t, '" viewBox="0 0 336 336">\n              <path fill="').concat(r, '" d="M168 226.8C128.4 226.8 88.8 246.8 49.2 286.8 89.2 247.2 109.2 207.6 109.2 168 109.2 128.4 89.2 88.8 49.2 49.2 88.8 89.2 128.4 109.2 168 109.2 207.6 109.2 247.2 89.2 286.8 49.2 246.8 88.8 226.8 128.4 226.8 168 226.8 207.6 246.8 247.2 286.8 286.8 247.2 246.8 207.6 226.8 168 226.8Z" transform="rotate(45 168 168)"/>\n            </svg>\n        ')
            },
            star40: function(t, r) {
                return '\n            <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(t, '" viewBox="0 0 336 336">\n              <path fill="').concat(r, '" d="M168 235.2C128.4 235.2 88.8 252.4 49.2 286.8 83.6 247.2 100.8 207.6 100.8 168 100.8 128.4 83.6 88.8 49.2 49.2 88.8 83.6 128.4 100.8 168 100.8 207.6 100.8 247.2 83.6 286.8 49.2 252.4 88.8 235.2 128.4 235.2 168 235.2 207.6 252.4 247.2 286.8 286.8 247.2 252.4 207.6 235.2 168 235.2Z" transform="rotate(45 168 168)"/>\n            </svg>\n        ')
            },
            star45: function(t, r) {
                return '\n            <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(t, '" viewBox="0 0 336 336">\n              <path fill="').concat(r, '" d="M168 243.6C128.4 243.6 88.8 258 49.2 286.8 78 247.2 92.4 207.6 92.4 168 92.4 128.4 78 88.8 49.2 49.2 88.8 78 128.4 92.4 168 92.4 207.6 92.4 247.2 78 286.8 49.2 258 88.8 243.6 128.4 243.6 168 243.6 207.6 258 247.2 286.8 286.8 247.2 258 207.6 243.6 168 243.6Z" transform="rotate(45 168 168)"/>\n            </svg>\n        ')
            },
            star55: function(t, r) {
                return '\n            <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(t, '" viewBox="0 0 336 336">\n              <path fill="').concat(r, '" d="M168 260.4C128.4 260.4 88.8 269.2 49.2 286.8 66.8 247.2 75.6 207.6 75.6 168 75.6 128.4 66.8 88.8 49.2 49.2 88.8 66.8 128.4 75.6 168 75.6 207.6 75.6 247.2 66.8 286.8 49.2 269.2 88.8 260.4 128.4 260.4 168 260.4 207.6 269.2 247.2 286.8 286.8 247.2 269.2 207.6 260.4 168 260.4Z" transform="rotate(45 168 168)"/>\n            </svg>\n        ')
            },
            star60: function(t, r) {
                return '\n            <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(t, '" viewBox="0 0 239 240">\n              <path fill="').concat(r, '" d="M119.5 191.7C91.3 191.7 63.2 196 35 204.5 43.5 176.3 47.8 148.2 47.8 120 47.8 91.8 43.5 63.7 35 35.5 63.2 44 91.3 48.3 119.5 48.3 147.7 48.3 175.8 44 204 35.5 195.5 63.7 191.2 91.8 191.2 120 191.2 148.2 195.5 176.3 204 204.5 175.8 196 147.7 191.7 119.5 191.7Z" transform="rotate(45 119.501 120)"/>\n            </svg>\n        ')
            },
            star80: function(t, r) {
                return '\n            <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(t, '" viewBox="0 0 268 268">\n              <path fill="').concat(r, '" d="M134.3 241C102.7 241 71.2 236.9 39.7 228.6 31.4 197.1 27.3 165.5 27.3 134 27.3 102.5 31.4 70.9 39.7 39.4 71.2 31.1 102.7 27 134.3 27 165.8 27 197.3 31.1 228.8 39.4 237.1 70.9 241.3 102.5 241.3 134 241.3 165.5 237.1 197.1 228.8 228.6 197.3 236.9 165.8 241 134.3 241Z" transform="rotate(45 134.25 134)"/>\n            </svg>\n        ')
            }
        },
        w = {
            rainLines: function(t, r, e) {
                return '\n           <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 123 260">\n            <path fill="').concat(e, '" d="M122.6 0.4C75.4 113.7 43.4 187.4 26.5 221.3 1.1 272.2-10.2 274.3 15.1 216 32.1 177.2 67.9 105.3 122.6 0.4Z"/>\n           </svg>')
            },
            drop: function(t, r, e) {
                return '\n           <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 81 121"><path d="M40.7 0C72.7 51.9 85.7 85.8 79.5 101.9 70.4 125.9 12.1 128.8 1.8 101.9 -5.1 84 7.9 50 40.7 0Z" fill="').concat(e, '" /></svg>')
            }
        },
        L = {
            feather: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 71 109">\n          <path fill="').concat(e, '" d="M63-0.8C64.4 0.1 65.6 2 66.5 4.9L62 11.2 67 10.9 67.6 20.9 58.8 26.4 67 28.9 63 38.1 55 42.1 63 42.1 57.3 54.5 46.3 58.2 52.7 61.7 42.3 67.9 32.5 69.6 38.3 71.9 25.1 78.2 23.9 77.8C28.6 70.4 33.2 62.6 37.9 54.5 50 33.5 57.1 18.9 59.2 10.8L59.2 10.8 59.4 10.4 59.3 10.7C59.3 10.6 59.3 10.4 59.4 10.3L59.4 10.3 21.1 76.7 23.9 77.8C16.4 89.7 9 100.6 1.7 110.4L21.1 76.7 20.5 76.5 22.2 61.6 25.1 65 25.1 56.4 28.5 47.8 32.5 51.3 30.2 43.8 36.6 27.2 42.3 34.7 40 22.1 46.3 10.6 49.8 17.5 49.8 4.9C53 1.9 55.4 0 57.3-0.8 60-2 60.9-2.1 63-0.8Z" transform="rotate(-177 34.633 54.335)"/>\n        </svg>')
            }
        },
        g = {
            leave1: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 93 121">\n          <path fill="').concat(e, '" d="M88 0C74 14 74 29.3 88 46 109 71 55.6 106 39 106 38.8 106 38.6 106 38.4 106 45.5 99.8 50.1 91.8 52.2 81.9 53.8 74.1 54.4 67.6 53.7 62.2 53 55.5 48.8 49.8 43 46.9L42.9 46.9 43 46.9C50.6 51.3 52.5 62.7 48.6 81.2 46.4 91.2 42 99.3 35.2 105.5 36.3 105.8 37.3 105.9 38.4 106 29.8 113.5 17.6 118.4 1.7 120.6L1.7 120.6 0.4 120.3C0.3 120.3 0.2 120.2 0.2 120.1 0.2 120 0.2 119.8 0.4 119.8 15.4 117.9 27 113.1 35.2 105.5 20.1 101.6 6.4 74.7 11 46 14.3 25.3 40 10 88 0ZM38.4 45.2C38.3 45.2 38.3 45.2 38.3 45.2 38.3 45.3 38.3 45.3 38.4 45.3 39.9 45.6 41.3 46.1 42.6 46.7L42.9 46.9 42.7 46.7C41.5 46.1 40.2 45.6 38.7 45.3Z"/>\n        </svg>\n        ')
            },
            leave2: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 102 153">\n          <path fill="').concat(e, '" d="M32.8 5.4C35.4-10.9 34.5 15.4 37.9 17 40.1 18 43.4 16.7 47.6 13.1 46.5 21 46.9 26 48.9 28 50.2 29.5 53.1 28.2 57.6 24.3 53.6 32.2 52.8 37.6 55 40.6 56.9 43.1 61.4 41.7 68.7 36.4 67.5 46.5 65.7 52.7 63.3 54.9 61.6 56.4 65.6 57 75.5 56.8 69.9 64.7 66.4 70.7 65 74.8 64 77.8 69.1 79 80.4 78.5L80.4 78.5 66.9 96.7 79.2 99.7C64.9 116.7 53.8 126.3 46 128.4 58.9 139.4 77.4 146.8 101.5 150.7 101.6 150.7 101.7 150.8 101.8 150.9 102 151.2 101.9 151.5 101.7 151.7L101.7 151.7 100.7 152.4 99.7 152.3C74.3 149 54.8 141.3 41.5 129 30.5 128.9 20 121.2 12.4 108.8 6.1 98.7 1.7 85.3 0.4 70.4 -2.6 36.3 30.2 21.6 32.8 5.4ZM24.1 44.9L23.1 45.6C16.4 76.6 19.7 101.2 32.8 119.3 35.3 122.8 38.2 126 41.5 129 42.2 129 42.9 128.9 43.6 128.9 44.4 128.8 45.2 128.7 46 128.4 42 125.1 38.5 121.4 35.6 117.3 23.1 100.1 19.5 76.1 24.9 45.4 25 45.1 24.8 44.8 24.5 44.8 24.4 44.8 24.2 44.8 24.1 44.9Z"/>\n        </svg>\n        ')
            },
            leave3: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 99 137">\n          <path fill="').concat(e, '" d="M97.2 0L98.1 0.5C98.3 0.6 98.4 0.9 98.3 1.2 98.2 1.3 98.1 1.3 98 1.4 83.4 7 73.6 11.6 68.6 15.2 75.1 18.7 78.7 23.1 79.3 28.4 80 34.2 76.8 40 69.8 45.7 63.2 42.7 59 38.9 57.3 34.5 56.5 35.1 55.7 35.7 54.9 36.1 53.2 37 51.4 37.6 49.5 37.8 48.8 38.9 48.2 40.1 47.6 41.2 56.2 45.4 60.8 50.7 61.6 57 62.3 63.7 58.7 70.3 50.7 76.8 43.4 73.4 38.7 69.3 36.7 64.4 36.2 64.8 35.7 65.2 35.2 65.5 34.9 65.7 34.6 65.9 34.2 66 33.4 67.7 32.6 69.3 31.8 70.9 40.5 75.1 45.2 80.5 46 86.9 46.8 93.6 43.2 100.1 35.1 106.6 30.1 104.3 26.3 101.6 23.8 98.6 22.9 99.6 21.8 100.4 20.7 101.2 28.1 108.1 31.2 114.9 29.9 121.5 28.6 128.1 23.1 133.2 13.5 137 6.1 130 3 123.2 4.3 116.6 5.4 111.1 9.3 106.6 16.2 103.1 12.4 104.2 7.8 104.3 2.4 103.4 -0.6 93.6 0.1 86.1 4.5 81.1 8.8 76.1 15.8 74.3 25.4 75.7 26.2 74.8 27 74 27.8 73.2 28.7 71.3 29.6 69.4 30.5 67.4 25.6 68.6 19.7 67.5 12.9 64.1 12.9 53.8 15.8 46.9 21.5 43.3 26.9 39.8 33.9 40.1 42.6 44.1 42.9 43.8 43.2 43.5 43.4 43.3 44.4 41.5 45.3 39.7 46.3 37.9 42.3 37.7 37.7 36.1 32.7 33.2 33.5 22.9 36.8 16.2 42.7 13 48.5 9.9 55.6 10.7 64.1 15.5 64.5 15.1 64.9 14.8 65.4 14.5 65.6 14.3 65.8 14.1 66.1 13.9L66.1 13.9 66.2 13.8C71.2 10.2 81.3 5.7 96.5 0.2L97.2 0ZM16 109C13.8 109 12 110.8 12 113 12 115.2 13.8 117 16 117 18.2 117 20 115.2 20 113 20 110.8 18.2 109 16 109ZM16 82C13.8 82 12 83.8 12 86 12 88.2 13.8 90 16 90 18.2 90 20 88.2 20 86 20 83.8 18.2 82 16 82ZM32 78C29.8 78 28 79.8 28 82 28 84.2 29.8 86 32 86 34.2 86 36 84.2 36 82 36 79.8 34.2 78 32 78ZM48 51C45.8 51 44 52.8 44 55 44 57.2 45.8 59 48 59 50.2 59 52 57.2 52 55 52 52.8 50.2 51 48 51ZM32 46C29.8 46 28 47.8 28 50 28 52.2 29.8 54 32 54 34.2 54 36 52.2 36 50 36 47.8 34.2 46 32 46ZM70 29C67.8 29 66 30.8 66 33 66 35.2 67.8 37 70 37 72.2 37 74 35.2 74 33 74 30.8 72.2 29 70 29ZM52 17C49.8 17 48 18.8 48 21 48 23.2 49.8 25 52 25 54.2 25 56 23.2 56 21 56 18.8 54.2 17 52 17Z"/>\n        </svg>\n        ')
            },
            leave4: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 76 140">\n          <path fill="').concat(e, '" d="M57.1 0.7C58.9 10.3 59 19.3 57.3 27.9 55.7 36.4 52.5 44 47.6 50.8 51.9 48.5 56.1 47.3 60 47 64 46.8 69.1 47.4 75.4 49 66.3 67.2 59.5 79 54.9 84.5 39.3 103.4 25.2 107.7 16.3 105 16 103.7 15.8 102.4 15.7 101 14.3 88 20 74.1 32.8 59.3 32.9 59.2 32.9 59 32.7 58.9 32.7 58.8 32.6 58.8 32.5 58.8L31.7 58.9C18.1 73.4 12.1 87.5 13.5 101.2 13.6 102.2 13.8 103.1 13.9 104 14.2 104.2 14.5 104.3 14.9 104.5 15.3 104.7 15.8 104.9 16.3 105 18.9 116.6 27.2 128 41.2 139.1 41.2 139.1 41.3 139.2 41.3 139.3 41.3 139.5 41.2 139.6 41 139.7L41 139.7 40.2 139.7 39.6 139.3C24.8 128.3 16.2 116.5 13.9 104 5.4 99.7-0.9 85.7 0.6 61.5 1 55.1 3.4 43.8 7.8 27.6 12.7 28.5 17 30.3 20.8 33.1 24.6 35.9 26.9 39 27.7 42.3 29.8 33.3 33 25.7 37.5 19.4 42.8 11.8 49.4 5.6 57.1 0.7Z"/>\n        </svg>\n        ')
            },
            leave5: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 121 159">\n          <path fill="').concat(e, '" d="M58.7 0C66.1 10.4 71.9 19.5 76.1 27.3 82.6 24.3 90.4 21.3 99.3 18.2 99.7 32.9 99.3 44.9 98.1 54.3 104.8 55.1 112.5 56.4 120.9 58.3 114.8 69.3 109.1 78.3 103.9 85.3 109.1 87.1 114.8 89.2 121 91.7 99.2 118.3 83.7 130.9 74.4 129.4 70.6 128.8 67.1 125.9 64.2 121.7 64.7 116.2 64.9 110.7 65 105.4 67.7 99.4 71.1 94.3 75.1 90.1 79.5 85.6 84.5 82.3 90.1 80.2 90.2 80.1 90.3 80 90.4 79.9 90.8 79.6 90.8 79 90.4 78.6 89.7 78 88.7 77.8 87.9 78.1 82.1 80.4 77.2 83.7 73 88 70 91.1 67.3 94.8 64.9 99.2 64.8 93.1 64.3 86.9 63.5 80.5L63.5 80.5 63.6 79.9C65 74.4 67.1 69.5 69.9 65.3 72.8 61 76.4 57.6 80.6 55 80.7 55 80.8 54.9 80.8 54.8 81.1 54.5 81 54 80.6 53.8 80 53.4 79.2 53.3 78.6 53.7 74.3 56.4 70.7 59.8 68 64 65.8 67.1 64.1 70.8 62.7 75.1 61.4 66.8 59.6 58.3 57.2 49.5 54.1 37.9 54.8 30.4 59.3 27 59.5 26.9 59.6 26.8 59.6 26.6 59.8 26.2 59.6 25.7 59.1 25.5 58.7 25.3 58.2 25.6 58 26L58 26 58 26.1C56.9 28.6 50.2 29.4 55 49.3 57.2 58.6 58.9 67.4 60.1 75.9 59.2 73.7 58.1 71.8 56.9 70 54.1 65.8 50.5 62.4 46.2 59.7 45.6 59.3 44.8 59.4 44.2 59.8 43.9 60 43.8 60.5 44 60.8 44.1 60.9 44.1 61 44.2 61 48.4 63.6 52 67 54.9 71.3 57.8 75.7 60 80.8 61.4 86.6 61.4 86.7 61.4 86.7 61.4 86.7 61.9 92 62.2 97 62.2 101.9 59.7 97.2 56.9 93.3 53.8 90 49.6 85.7 44.6 82.4 38.9 80.1 38 79.8 37 80 36.4 80.6 36 81 36 81.6 36.4 81.9 36.4 82 36.6 82.1 36.7 82.2 42.3 84.3 47.3 87.6 51.6 92.1 55.9 96.5 59.4 101.9 62.2 108.2 62.1 111.3 62 114.5 61.8 117.7 62.5 119.1 63.3 120.5 64.2 121.7 63.2 133.5 61.2 145.6 58.3 158 58.2 158.6 57.6 159 57 159 56.6 159 56.2 158.6 56.2 158.2 56.2 158.1 56.2 158 56.2 158 59.1 143.9 61 130.4 61.8 117.7 61.8 117.7 61.7 117.6 61.7 117.6 58.8 124.9 54.2 130.7 49 131.8 39.8 133.7 23.6 122 0.5 96.6 6.3 93.8 11.8 91.5 16.8 89.4 11.7 82.5 6.1 73.6 0 62.8 8 61.1 15.1 59.8 21.6 58.9 19.9 50.2 18.6 39.3 17.9 26.2 25.5 28 32.2 29.9 38.2 31.9 42.4 23.1 49.2 12.5 58.7 0Z"/>\n        </svg>\n        ')
            },
            leave6: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 167 129">\n          <path fill="').concat(e, '" d="M37.7 4.5C56.8-3.4 77.3 1.8 89 8 92.5 9.9 95.8 12.5 98.5 15.9 78.7 17.3 62.9 21 51 27 27.9 38.8 16.8 60.2 17.6 91.3L17.6 91.3 18.3 92.7C18.4 92.8 18.5 92.9 18.6 92.9 18.8 92.9 19 92.7 19 92.5 19.6 62.4 30.9 41.7 52.8 30.6 64.5 24.6 80.5 20.9 100.9 19.4 100.2 18.2 99.4 17 98.5 15.9 116.9 14.6 138.8 15.4 164 18.1L165.6 18.3 166.3 19.7C166.5 20.1 166.4 20.6 166 20.8 165.8 20.8 165.7 20.9 165.5 20.9 140.6 18.6 119 18.1 100.9 19.4 104.4 25.3 106.1 32.9 105 42 103.1 56.8 93.4 77.8 72 75 66.8 74.3 59.2 91.8 59.2 98.8 59.2 99.7 58.4 98.3 57.1 95.8L56.9 95.3C56.1 93.7 55.2 91.8 54.2 89.8L53.8 89.1C51.2 83.7 48.2 78.2 47 79 40.1 83.4 32.4 100 23.9 128.7 1.1 86.5-4.2 53.9 8 31 9 29.2 6.3 25.8 0 21 11.5 19.1 18.1 17.3 19.7 15.8 21.1 14.5 20.6 10.6 18 4 28.5 5.4 35.1 5.5 37.7 4.5Z"/>\n        </svg>\n        ')
            }
        },
        C = {
            flower1: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 150 151">\n          <path fill="').concat(e, '" d="M74.6 76C94 112.2 101.8 135.9 98.1 147.1 96.2 152.8 88.2 151.7 74.1 143.7 60.8 152.1 53.1 153.3 51.1 147.1 46.9 134.6 54.8 110.9 74.6 76ZM74.7 75.8C105.9 94.2 125.3 108.5 132.8 118.8 136.5 123.8 133.2 125.5 122.9 123.9 124 134.1 122.2 137.5 117.5 134.1 108.4 127.3 94.1 107.9 74.7 75.8ZM122.9 27.2C133.2 25.6 136.5 27.2 132.8 32.3 125.3 42.5 106.1 56.7 75.1 75L74.9 75.3 75 75.4C74.9 75.5 74.8 75.5 74.7 75.6L75.2 74.9C55.7 106.9 41.4 126.4 32.3 133.1 27.6 136.6 25.8 133.2 26.9 122.9 16.6 124.5 13.3 122.9 17 117.8 23.7 108.7 39.8 96.3 65.4 80.7 35.7 96.6 15.2 102.7 3.9 98.9-2.3 96.9-1.1 89.2 7.3 75.9-0.7 61.8-1.8 53.8 3.9 51.9 14.6 48.4 36.6 55.3 70.1 72.8 41.2 55.6 23.2 42.1 16 32.3 12.3 27.2 15.6 25.6 25.9 27.2 24.8 16.9 26.6 13.5 31.3 17 40.4 23.7 54.7 43.2 74.2 75.2L73.9 74.8 74.6 75.2C74.6 75.2 74.7 75.1 74.7 75.1L74.7 75.2C94.1 43.2 108.4 23.7 117.5 17 122.2 13.5 124 16.9 122.9 27.2ZM146.1 51.9C151.8 53.8 150.7 61.8 142.7 75.9 151.1 89.2 152.3 96.9 146.1 98.9 133.6 103.1 109.9 95.2 75 75.4 111.2 56 134.9 48.2 146.1 51.9ZM51.1 3.9C53.1-2.3 60.8-1.1 74.1 7.3 88.2-0.7 96.2-1.8 98.1 3.9 101.8 15.1 94 38.8 74.6 75 54.8 40.1 46.9 16.4 51.1 3.9Z"/>\n        </svg>\n        ')
            },
            flower2: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 161 162"><path d="M81.5 0L89.1 19.3 101.2 2.4 106.5 42.5 145.2 30.7 134.9 48.7 155.6 47.6 127.6 76.8 161 99.6 140.4 102.8 154.2 118.3 113.9 114.6 116.9 154.9 101.6 140.8 98 161.3 75.9 127.5 46.1 154.9 47.7 134.2 29.4 144.2 42 105.7 2 99.6 19.2 87.9 0 79.9 37.9 65.8 17.8 30.7 37.7 36.8 32 16.8 66.6 37.6 81.5 0ZM80.5 52C64.8 52 52 64.8 52 80.5 52 96.2 64.8 109 80.5 109 96.2 109 109 96.2 109 80.5 109 64.8 96.2 52 80.5 52ZM80.5 59C92.4 59 102 68.6 102 80.5 102 92.4 92.4 102 80.5 102 68.6 102 59 92.4 59 80.5 59 68.6 68.6 59 80.5 59ZM81 69C74.9 69 70 73.9 70 80 70 86.1 74.9 91 81 91 87.1 91 92 86.1 92 80 92 73.9 87.1 69 81 69Z" fill="').concat(e, '" /></svg>\n        ')
            },
            flower3: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 166 166"><path d="M88.3 32.7C101.9 12.5 110.9 3.2 115.3 5.1 117.7 6 118.7 10.3 118.4 17.7 124.5 13.4 128.7 12 130.8 13.5 134.7 16.2 131.9 28.8 122.3 51.2 146.2 46.5 159.1 46.3 160.9 50.7 161.9 53.1 159.7 56.8 154.2 61.9 161.6 63.2 165.5 65.1 166 67.6 166.8 72.3 155.9 79.2 133.3 88.3 153.5 101.9 162.8 110.9 160.9 115.3 160 117.7 155.7 118.7 148.3 118.4 152.6 124.5 154 128.7 152.5 130.8 149.8 134.7 137.2 131.9 114.8 122.3 119.5 146.2 119.7 159.1 115.3 160.9 112.9 161.9 109.3 159.8 104.4 154.6L104.1 154.2C102.8 161.6 100.9 165.5 98.4 166 93.7 166.8 86.8 155.9 77.7 133.3 64.1 153.5 55.1 162.8 50.7 160.9 48.3 160 47.3 155.7 47.6 148.3 41.5 152.6 37.3 154 35.2 152.5 31.3 149.8 34.1 137.2 43.7 114.8 19.8 119.5 6.9 119.7 5.1 115.3 4.1 112.9 6.3 109.2 11.8 104.1 4.4 102.8 0.5 100.9 0 98.4-0.8 93.7 10.1 86.8 32.7 77.7 12.5 64.1 3.2 55.1 5.1 50.7 6 48.3 10.3 47.3 17.7 47.6 13.4 41.5 12 37.3 13.5 35.2 16.2 31.3 28.8 34.1 51.2 43.7 46.5 19.8 46.3 6.9 50.7 5.1 53.1 4.1 56.7 6.2 61.6 11.4L61.9 11.8C63.2 4.4 65.1 0.5 67.6 0 72.3-0.8 79.2 10.1 88.3 32.7ZM85.3 63.1C81.9 54.7 79.3 50.7 77.5 51 76.5 51.2 75.7 52.7 75.2 55.6 73 53.1 71.4 52 70.4 52.5 68.6 53.2 68.7 58.3 70.6 67.9 62.1 64.3 57.3 63.3 56.3 64.8 55.7 65.6 56.2 67 57.6 69.2 54.6 69 52.9 69.4 52.5 70.4 51.7 72.2 55.5 75.8 63.9 81.4 55 85 50.7 87.7 51 89.5 51.2 90.4 52.5 91.1 54.8 91.6 52.9 93.5 52.1 94.8 52.5 95.7 53.2 97.5 58.5 97.4 68.4 95.4L68.4 95.4 68.2 95.7C64.4 104.7 63.2 109.7 64.8 110.7 65.6 111.3 67 110.8 69.1 109.4 69.1 111.9 69.5 113.3 70.4 113.7 72.1 114.4 75.7 110.7 81.2 102.5 84.8 111.8 87.6 116.3 89.5 116 90.5 115.8 91.3 114.3 91.7 111.5 93.5 113.3 94.9 114 95.7 113.7 97.5 113 97.4 108 95.6 98.7 104.6 102.6 109.6 103.8 110.7 102.2 111.3 101.3 110.7 99.6 108.8 97 111.6 97.1 113.3 96.7 113.7 95.7 114.4 94 110.9 90.6 103.3 85.5 112.1 82 116.3 79.3 116 77.5 115.8 76.4 114 75.6 110.6 75.1 113.1 73 114.1 71.4 113.7 70.4 113 68.7 108.1 68.7 99.1 70.4 102.7 62 103.7 57.3 102.2 56.3 101.3 55.7 99.6 56.3 96.9 58.3 97.2 54.8 96.8 52.9 95.7 52.5 94 51.8 90.6 55.2 85.5 62.7L85.5 62.7Z" fill="').concat(e, '" /></svg>\n        ')
            },
            flower4: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 161 161"><path d="M102.1 0C105.5 1 105.3 15.8 101.3 44.4 124.2 26.7 136.9 19.1 139.4 21.6 141.9 24.1 134.3 36.8 116.6 59.7 145.2 55.7 160 55.5 161 58.9 161.5 61 157.1 64.4 147.7 69.2L146.7 69.7C140.5 72.8 132.3 76.4 122.1 80.5 132.3 84.6 140.5 88.2 146.7 91.3L147.7 91.8C157.1 96.6 161.5 100 161 102.1 160 105.5 145.2 105.3 116.6 101.3 134.3 124.2 141.9 136.9 139.4 139.4 136.9 141.9 124.2 134.3 101.3 116.6 105.3 145.2 105.5 160 102.1 161 100 161.5 96.6 157.1 91.8 147.7L91.3 146.7C88.2 140.5 84.6 132.3 80.5 122.1 76.4 132.3 72.8 140.5 69.7 146.7L69.2 147.7C64.4 157.1 61 161.5 58.9 161 55.5 160 55.7 145.2 59.7 116.6 36.8 134.3 24.1 141.9 21.6 139.4 19.1 136.9 26.7 124.2 44.4 101.3 15.8 105.3 1 105.5 0 102.1-0.5 100 3.9 96.6 13.3 91.8L14.3 91.3C20.5 88.2 28.7 84.6 38.9 80.5 28.7 76.4 20.5 72.8 14.3 69.7L13.3 69.2C3.9 64.4-0.5 61 0 58.9 1 55.5 15.8 55.7 44.4 59.7 26.7 36.8 19.1 24.1 21.6 21.6 24.1 19.1 36.8 26.7 59.7 44.4 55.7 15.8 55.5 1 58.9 0 61-0.5 64.4 3.9 69.2 13.3L69.7 14.3C72.8 20.5 76.4 28.7 80.5 38.9 84.6 28.7 88.2 20.5 91.3 14.3L91.8 13.3C96.6 3.9 100-0.5 102.1 0ZM81.5 59C70.7 59 62 67.7 62 78.5 62 89.3 70.7 98 81.5 98 92.3 98 101 89.3 101 78.5 101 67.7 92.3 59 81.5 59Z" fill="').concat(e, '" /></svg>\n        ')
            },
            flower5: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 163 161"><path d="M111.7 121.4C116.2 123.7 119.9 127.6 121.8 132.8 125.7 143.4 120.2 155.2 109.5 159.1 98.9 162.9 87.1 157.4 83.3 146.8 81.5 142 81.7 136.9 83.4 132.4 87 138.9 94.8 142 102 139.4 109.4 136.7 113.4 128.9 111.7 121.4ZM50.4 122C48.9 129.3 52.9 136.7 60.1 139.4 67.6 142.1 75.9 138.6 79.2 131.5 81.3 136.2 81.6 141.6 79.7 146.8 75.9 157.4 64.1 162.9 53.5 159.1 42.8 155.2 37.3 143.4 41.2 132.8 42.9 128.1 46.2 124.4 50.2 122.1L50.4 122ZM145 95C154.8 100.7 158.2 113.2 152.5 123 146.9 132.8 134.3 136.2 124.5 130.5 119.9 127.8 116.7 123.7 115.2 119 122.2 121.7 130.2 119 134.1 112.4 137.9 105.7 136.2 97.4 130.4 92.7 135.2 91.7 140.4 92.3 145 95ZM31.9 92.6L31.8 92.7C25.9 97.4 24.2 105.7 28.1 112.4 32.1 119.4 40.8 122 47.9 118.6 46.5 123.4 43.2 127.8 38.5 130.5 28.7 136.2 16.1 132.8 10.5 123 4.8 113.2 8.2 100.7 18 95 22.4 92.5 27.3 91.7 31.9 92.6ZM81 48C99.8 48 115 63.2 115 82 115 100.8 99.8 116 81 116 62.2 116 47 100.8 47 82 47 63.2 62.2 48 81 48ZM81 61C69.4 61 60 70.4 60 82 60 93.6 69.4 103 81 103 92.6 103 102 93.6 102 82 102 70.4 92.6 61 81 61ZM162.3 67.8C164.2 78.9 156.8 89.5 145.6 91.5 140.2 92.5 134.9 91.2 130.7 88.4 138 86.2 142.7 78.8 141.3 71 140 63.5 133.5 58.3 126.2 58.3 129.2 54.7 133.5 52 138.5 51.1 149.7 49.2 160.3 56.6 162.3 67.8ZM24.5 51.1C29.5 52 33.8 54.7 36.8 58.4 29.2 57.9 22.2 63.2 20.8 71 19.4 79 24.4 86.6 32 88.5 27.9 91.3 22.7 92.4 17.4 91.5 6.2 89.5-1.2 78.9 0.7 67.8 2.7 56.6 13.3 49.2 24.5 51.1ZM134.2 19.2C142.9 26.5 144 39.4 136.7 48.1 133.2 52.3 128.2 54.8 123.1 55.3 127.6 48.8 126.6 39.8 120.4 34.7 114.6 29.7 106.1 30 100.5 34.8 100.5 30.2 102.1 25.5 105.3 21.7 112.6 13 125.5 11.9 134.2 19.2ZM57.7 21.7C61.1 25.8 62.6 30.7 62.5 35.6 56.9 30 47.9 29.5 41.7 34.7 35.6 39.8 34.5 48.7 39 55.2 34.2 54.5 29.6 52.1 26.3 48.1 19 39.4 20.1 26.5 28.8 19.2 37.5 11.9 50.4 13 57.7 21.7ZM81.5 0C92.8 0 102 9.2 102 20.5 102 25.7 100.1 30.4 96.9 34 96.2 26.1 89.6 20 81.5 20 73.4 20 66.8 26.1 66.1 34 62.9 30.4 61 25.7 61 20.5 61 9.2 70.2 0 81.5 0Z" fill="').concat(e, '" /></svg>\n        ')
            },
            flower6: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 161 162"><path d="M94 1.5C86.9 1 80.5 2.5 76.5 6.6 67.5 16.1 69.1 40.8 81.5 80.7L81.5 80.7 81.5 80.7 81.6 81.1C74.9 39.8 76.7 15.1 87 7.1 97.1-0.9 117.4 6.3 129.8 17.1 123.7 13.4 117.4 11.7 112 13.4 99.6 17.5 89.5 39.8 81.7 80.5L81.8 80.5 81.8 80.5 81.5 81.3C96.3 42.2 110.2 21.7 123.1 19.9 135.9 18 149.9 34.4 155.2 49.9 151.8 43.7 147.2 39.1 141.6 37.9 129.1 35.2 109.6 49.1 83.2 79.4 114 54.6 135.3 44.6 147.1 49.3 159.1 54.1 163 75.2 159.9 91.3 160.1 84.3 158.4 78 154.1 74.1 144.6 65.6 120.8 67.8 82.6 80.9 122.8 74.5 146.9 76.4 154.8 86.5 162.8 96.7 155.7 117 144.9 129.3 148.6 123.3 150.3 117 148.5 111.6 144.4 99.2 122.1 89.1 81.5 81.3L81.5 81.3 81.5 81.3 81.5 81.3C81.5 81.3 81.4 81.3 81.4 81.3L81.3 81.4 82 81.6C120.8 94.9 141.4 107.9 143.7 120.7 145.9 133.4 130.1 147.9 114.8 153.8 120.8 150.2 125.3 145.4 126.3 139.8 128.5 127 113.5 107.6 81.2 81.5L81.2 81.6 81.2 81.6 81.3 81.6C81.4 81.8 81.6 81.9 81.8 82.1L81.6 82C108.5 112.9 119.8 134.4 115.4 146.6 111 158.7 90 163.4 73.8 160.8 80.9 160.7 87.1 158.8 90.8 154.5 99 144.6 95.9 120.9 81.5 83.2 89 122.2 87.8 145.8 78.1 153.9 68.2 162.2 47.7 155.8 35 145.5 41.1 148.9 47.5 150.4 52.9 148.5 65 144 74.2 121.8 80.6 81.6 80.5 81.6 80.5 81.6 80.5 81.6L80.5 81.6 80.2 82.4C64.2 120.2 49.8 139.8 36.9 141.2 24.1 142.6 10.7 125.8 5.9 110 9 116.4 13.5 121.2 19 122.5 31.7 125.7 52.1 112 80.4 81.6 80.3 81.5 80.3 81.5 80.3 81.5L80.7 81.2C48.2 107.7 26 118.5 13.8 113.6 1.9 108.8-2.1 87.7 1.1 71.6 0.9 78.6 2.6 84.9 6.8 88.8 16.5 97.4 40.9 95 80 81.4 80 81.4 80 81.4 80 81.4L80.9 81.3C39.6 88 14.9 86.2 6.8 75.9 -1.1 65.8 6 45.5 16.8 33.1 13.1 39.1 11.4 45.5 13.2 50.9 17.2 63.1 38.9 73 78.3 80.8 41.5 66.4 22.1 53 20.4 40.4 18.5 27.7 34.9 13.7 50.4 8.4 44.2 11.7 39.6 16.4 38.4 22 35.7 34.6 49.8 54.3 80.6 81.1L80.7 81C80.7 81 80.7 80.9 80.7 80.9L80.7 81C80.7 80.7 80.8 80.4 80.8 80.1L81.5 81C56.1 47.5 46.1 24.8 51.4 12.8 56.6 1 78-2.3 94 1.5ZM81 80.3L80.9 79.7C80.9 80.2 81 80.6 81.1 81L80.3 81.7C80.7 81.4 81 81.1 81.4 80.8L81 80.3Z" fill="').concat(e, '" /></svg>\n        ')
            },
            flower7: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 115 124"><path d="M57 0.9C58 2.4 59 4 59.9 5.5 64.4 11.2 68.2 16.4 71.1 21 77.8 18.5 86.1 16.1 95.9 13.8 94.7 23.9 93.2 32.4 91.6 39.4 98.3 42.3 106.1 46.5 114.9 52 92.2 69.8 77.1 77.4 69.5 74.9 66.1 73.7 63.5 70.4 61.7 66.1 63.2 73.7 64 81.4 64 89 64 100.1 62.4 111.2 59.1 122.3 58.8 123.3 57.9 124 56.8 124 56.1 124 55.4 123.4 55.4 122.6 55.4 122.5 55.5 122.4 55.5 122.3 58.8 110.7 60.4 99.5 60.4 88.4 60.4 77.7 58.9 67.1 55.8 56.6L55.8 56.6 55.8 56.6C55.2 65 51.8 73.1 46.3 75.2 38.8 78 23.4 71 0.1 54 8.2 48.6 15.3 44.3 21.6 41.2 19.8 34.3 18.2 25.8 17 15.8 26.9 18.1 35.2 20.4 42 22.8 45 17.6 48.9 11.7 53.8 5.1 54.5 3.8 55.3 2.4 56.2 0.9L56.6 1.4C56.7 1.3 56.9 1.1 57 0.9ZM21.1 20.4C24.3 43.2 28.8 57.2 36 60.4 38 61.3 40.4 61.1 42.8 60.3 45.4 59.4 48.1 57.8 50.5 55.8 45.6 54.7 41.6 52.5 39.9 49.1 37.7 44.9 38.8 37.4 43.1 26.7L43.1 26.7C37.2 24.6 29.8 22.5 21.1 20.4ZM91.7 18.4C83.3 20.5 76.2 22.6 70.4 24.9 75.5 36.1 77.1 43.9 75 48.5 73.4 51.8 69.5 54.2 64.8 55.5 66.9 56.9 69.2 58.1 71.4 58.8 74 59.6 76.5 59.9 78.4 58.9 84.7 55.8 88.7 41.7 91.7 18.4ZM56.2 33.2C54.9 34.5 54 35.9 53.6 37.3 52.9 39.5 53.3 41.8 54.4 44.1 55.1 45.6 56 47.1 57.1 48.6 58 47.3 58.7 46.1 59.2 44.8 60.3 42.4 60.8 40 60.1 37.9 59.5 36.3 58.3 34.8 56.4 33.4L56.2 33.2Z" fill="').concat(e, '" /></svg>\n</svg>\n        ')
            },
            starfish: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 162 155"><path d="M80.6 127.7C55.8 127.7 41.2 161.3 31 153.8 20.8 146.4 48.1 122.1 40.5 98.5 32.8 74.9-3.4 71 0.4 59.3 4.2 47.7 35.8 65.9 55.8 51.3 75.9 36.7 68.2 0.9 80.6 0.9 93 0.9 85.3 36.7 105.4 51.3 125.4 65.9 156.9 47.4 160.8 59.3 164.7 71.3 128.4 74.9 120.7 98.5 113 122.1 140 146.7 130.2 153.8 120.3 161 105.4 127.7 80.6 127.7Z" fill="').concat(e, '" /></svg>\n        ')
            },
            halfRoundFlower6: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 192 169">\n          <path fill="').concat(e, '" d="M96 132.7C70.9 160.2 54.9 171.9 48 167.9 41.1 163.9 43.2 144.2 54.4 108.7 18.1 100.7 0 92.7 0 84.7 0 76.7 18.1 68.7 54.4 60.7 43.2 25.2 41.1 5.4 48 1.4 54.9-2.6 70.9 9.2 96 36.6 121.1 9.2 137.1-2.6 144 1.4 150.9 5.4 148.8 25.2 137.6 60.7 173.9 68.7 192 76.7 192 84.7 192 92.7 173.9 100.7 137.6 108.7 148.8 144.2 150.9 163.9 144 167.9 137.1 171.9 121.1 160.2 96 132.7Z"/>\n        </svg>\n        ')
            }
        },
        u = {
            spiral1: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 51 46"><polyline points="22.7 25.3 25.8 25.3 26 25.8 26.2 26.3 26.2 26.8 26.2 27.4 26.1 27.9 25.9 28.5 25.5 29.1 25.1 29.6 24.6 30.1 24 30.6 23.3 30.9 22.6 31.2 21.7 31.3 20.9 31.4 20 31.3 19.1 31.1 18.2 30.7 17.4 30.2 16.6 29.6 15.8 28.8 15.2 28 14.7 27 14.3 25.9 14.1 24.8 14 23.6 14.1 22.4 14.3 21.2 14.8 20 15.4 18.8 16.2 17.7 17.1 16.7 18.2 15.8 19.5 15.1 20.8 14.5 22.3 14.1 23.8 13.9 25.4 14 27 14.2 28.6 14.7 30.1 15.3 31.5 16.2 32.9 17.3 34 18.6 35.1 20.1 35.9 21.7 36.5 23.4 36.9 25.2 37 27.1 36.9 29 36.5 31 35.8 32.8 34.8 34.6 33.6 36.3 32.2 37.9 30.6 39.2 28.7 40.3 26.7 41.2 24.6 41.8 22.3 42.1 20.1 42.2 17.8 41.9 15.5 41.3 13.3 40.4 11.2 39.2 9.3 37.7 7.5 35.9 6 34 4.8 31.7 3.9 29.4 3.3 26.9 3 24.3 3.1 21.6 3.5 19 4.4 16.4 5.5 13.9 7 11.6 8.9 9.5 11 7.6 13.4 6 16 4.7 18.8 3.7 21.7 3.2 24.7 3 27.7 3.2 30.7 3.9 33.7 4.9 36.4 6.3 39 8.1 41.4 10.3 43.4 12.8 45.1 15.5 46.5 18.5 47.4 21.7 47.9 24.9 48 28.3 47.6 31.7 46.8 35 45.4 38.2 43.7 41.2 41.6 44" fill="none" stroke-width="5" stroke="').concat(e, '" /></svg>\n        ')
            },
            spiral2: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 55 74"><polyline points="35 47.5 39.7 47.5 39.8 48 39.8 48.6 39.7 49.1 39.6 49.7 39.4 50.3 39.2 50.9 38.9 51.4 38.5 51.9 38 52.4 37.5 52.8 36.9 53.2 36.3 53.5 35.6 53.8 34.9 53.9 34.2 54 33.4 54 32.6 54 31.8 53.8 31 53.5 30.3 53.1 29.5 52.7 28.9 52.1 28.2 51.5 27.6 50.7 27.1 49.9 26.7 49 26.4 48.1 26.2 47.1 26.1 46.1 26.1 45 26.2 43.9 26.5 42.8 26.9 41.7 27.4 40.7 28.1 39.7 28.8 38.7 29.7 37.8 30.7 37 31.9 36.4 33.1 35.8 34.4 35.4 35.8 35.1 37.2 35 38.7 35 40.2 35.3 41.6 35.7 43.1 36.2 44.5 37 45.9 37.9 47.2 39 48.3 40.3 49.4 41.8 50.3 43.3 51 45.1 51.5 46.9 51.9 48.8 52 50.8 51.9 52.8 51.6 54.9 51 57 50.2 59 49.1 61 47.8 62.8 46.2 64.6 44.4 66.2 42.4 67.6 40.2 68.8 37.9 69.8 35.4 70.5 32.7 70.9 30 71 27.2 70.8 24.4 70.3 21.6 69.4 18.8 68.2 16.2 66.6 13.7 64.8 11.3 62.5 9.2 60 7.3 57.2 5.7 54.1 4.5 50.8 3.6 47.3 3.1 43.6 3 39.8 3.3 35.9 4.1 32 5.4 28.1 7.1 24.3 9.3 20.7 12 17.2 15.1 14 18.6 11.1 22.5 8.5 26.7 6.4 31.3 4.8 36.2 3.6 41.2 3 46.4 3 51.7 3.6" fill="none" stroke-width="5" stroke="').concat(e, '" /></svg>\n        ')
            },
            spiral3: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 66 65"><polyline points="63 1 62.9 2 62.7 2.9 62.4 3.9 62.1 4.8 61.7 5.8 61.2 6.7 60.7 7.6 60 8.5 59.4 9.4 58.6 10.3 57.8 11.1 57 11.9 56.1 12.7 55.1 13.5 54.1 14.2 53 14.9 51.9 15.6 50.7 16.3 49.5 16.9 48.3 17.5 47 18.1 45.7 18.7 44.4 19.2 43 19.6 41.6 20.1 40.2 20.5 38.8 20.8 37.4 21.2 36 21.5 34.5 21.8 33.1 22 31.7 22.2 30.2 22.3 28.8 22.5 27.4 22.6 26 22.6 24.6 22.7 23.3 22.7 21.9 22.6 20.6 22.6 19.3 22.5 18.1 22.3 16.9 22.2 15.7 22 14.5 21.8 13.5 21.5 12.4 21.3 11.4 21 10.4 20.7 9.5 20.4 8.7 20 7.9 19.7 7.2 19.3 6.5 18.9 5.9 18.5 5.3 18 4.8 17.6 4.3 17.2 4 16.7 3.6 16.2 3.4 15.8 3.2 15.3 3.1 14.8 3 14.4 3 13.9 3.1 13.4 3.2 13 3.4 12.5 3.6 12.1 3.9 11.6 4.3 11.2 4.7 10.8 5.2 10.4 5.7 10 6.3 9.6 6.9 9.2 7.6 8.9 8.3 8.6 9.1 8.3 9.9 8 10.8 7.7 11.7 7.5 12.6 7.2 13.6 7.1 14.6 6.9 15.7 6.7 16.7 6.6 17.8 6.5 18.9 6.5 20 6.4 21.2 6.4 22.3 6.5 23.5 6.5 24.7 6.6 25.9 6.7 27.1 6.8 28.2 7 29.4 7.2 30.6 7.4 31.8 7.7 32.9 8 34.1 8.3 35.2 8.6 36.3 9 37.4 9.3 38.4 9.7 39.5 10.2 40.5 10.6 41.5 11.1 42.4 11.6 43.3 12.2 44.2 12.7 45 13.3 45.8 13.9 46.6 14.5 47.3 15.1 48 15.7 48.6 16.4 49.2 17 49.7 17.7 50.2 18.4 50.6 19.1 51 19.8 51.4 20.5 51.7 21.2 51.9 21.9 52.1 22.6 52.2 23.3 52.3 24.1 52.3 24.8 52.3 25.5 52.2 26.2 52.1 26.9 51.9 27.6 51.7 28.3 51.4 29 51.1 29.7 50.8 30.4 50.4 31 49.9 31.7 49.4 32.3 48.9 33 48.4 33.6 47.7 34.2 47.1 34.7 46.4 35.3 45.7 35.8 45 36.4 44.2 36.9 43.5 37.3 42.6 37.8 41.8 38.3 41 38.7 40.1 39.1 39.2 39.5 38.3 39.8 37.4 40.1 36.5 40.4 35.6 40.7 34.6 41 33.7 41.2 32.8 41.5 31.8 41.7 30.9 41.8 30 42 29.1 42.1 28.2 42.2 27.3 42.3 26.4 42.4 25.6 42.4 24.7 42.4 23.9 42.5 23.1 42.4 22.4 42.4 21.6 42.4 20.9 42.3 20.2 42.2 19.5 42.1 18.9 42 18.3 41.9 17.7 41.8 17.2 41.6 16.7 41.5 16.3 41.3 15.8 41.1 15.5 40.9 15.1 40.7 14.8 40.5 14.5 40.3 14.3 40.1 14.1 39.9 13.9 39.7 13.8 39.5 13.8 39.3 13.7 39 13.7 38.8 13.8 38.6 13.8 38.4 14 38.2 14.1 38 14.3 37.8 14.5 37.6 14.8 37.5 15.1 37.3 15.4 37.1 15.8 37 16.1 36.8 16.6 36.7 17 36.6 17.5 36.5 18 36.4 18.5 36.3 19 36.3 19.6 36.2 20.2 36.2 20.8 36.2 21.4 36.2 22 36.2 22.6 36.2 23.3 36.3 23.9 36.3 24.6 36.4 25.3 36.5 26 36.6 26.6 36.8 27.3 36.9 28 37.1 28.7 37.3 29.3 37.5 30 37.7 30.7 37.9 31.3 38.2 32 38.4 32.6 38.7 33.2 39 33.8 39.3 34.4 39.6 35 39.9 35.5 40.3 36.1 40.7 36.6 41 37.1 41.4 37.5 41.8 38 42.2 38.4 42.6 38.8 43 39.2 43.5 39.5 43.9 39.9 44.3 40.2 44.8 40.4 45.2 40.7 45.7 40.9 46.2 41.1 46.6 41.2 47.1 41.4 47.5 41.5 48 41.5 48.5 41.6 49 41.6 49.4 41.6 49.9 41.6 50.4 41.5 50.8 41.4 51.3 41.3 51.7 41.2 52.2 41 52.6 40.9 53.1 40.7 53.5 40.4 53.9 40.2 54.3 39.9 54.7 39.6 55.1 39.3 55.5 39 55.9 38.7 56.3 38.3 56.6 38 57 37.6 57.3 37.2 57.7 36.8 58 36.4 58.3 36 58.6 35.6 58.9 35.2 59.2 34.7 59.4 34.3 59.7 33.9 59.9 33.4 60.1 33 60.4 32.6 60.6 32.1 60.8 31.7 61 31.3 61.1 30.9 61.3 30.5 61.5 30.1 61.6 29.7 61.8 29.3 61.9 28.9 62" fill="none" stroke-width="5" stroke="').concat(e, '"/></svg>\n        ')
            },
            spiral4: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 110 80"><g transform="translate(0 3)" fill="none"><polyline points="55.8 28.9 60.4 28.9 61.2 29.8 61.8 30.9 62.1 32.2 62.2 33.6 62 35.1 61.4 36.7 60.5 38.2 59.3 39.6 57.7 40.9 55.8 41.8 53.6 42.5 51.3 42.8 48.8 42.6 46.2 42.1 43.7 41 41.3 39.4 39.1 37.4 37.2 35 35.6 32.1 34.6 28.9 34 25.5 34 21.9 34.7 18.2 35.9 14.5 37.8 11 40.4 7.8 43.5 4.9 47.2 2.5 51.3 0.6 55.8 -0.5 60.5 -1 65.4 -0.7 70.3 0.5 75.1 2.4 79.6 5.2 83.7 8.7 87.3 12.9 90.2 17.8 92.4 23.2 93.6 28.9 94 35 93.4 41.1 91.7 47.2 89.1 53.1 85.5 58.6 81 63.5 75.6 67.8 69.5 71.2 62.9 73.6 55.8 75" transform="scale(1 -1)rotate(79 108.885 0)" fill="none" stroke-width="5" stroke="').concat(e, '" /><polygon points="20.5 52.8 8.5 59.1 10.8 45.7 1 36.2 14.5 34.2 20.5 22 26.5 34.2 40 36.2 30.2 45.7 32.6 59.1" /></g></svg>\n        ')
            },
            spiral5: function(t, r, e) {
                return '\n       <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 28 55"><polyline points="13 3 17 3 17 4.1 16.8 5.2 16.3 6.3 15.5 7.4 14.5 8.5 13.3 9.6 12 10.6 10.8 11.6 9.5 12.6 8.5 13.5 7.6 14.4 7.1 15.3 7 16.2 7.2 17.1 7.8 18 8.8 18.9 10.1 19.8 11.7 20.7 13.4 21.7 15.2 22.8 16.9 23.8 18.5 25 19.7 26.1 20.6 27.3 21 28.5 20.9 29.7 20.3 30.9 19.2 32.1 17.6 33.3 15.7 34.4 13.6 35.4 11.3 36.5 9 37.4 7 38.3 5.2 39.2 3.9 40.1 3.2 40.9 3 41.6 3.5 42.4 4.6 43.2 6.3 44.1 8.4 44.9 11 45.9 13.7 46.9 16.5 47.9 19.1 49 21.4 50.2 23.2 51.4 24.5 52.7 25 54" stroke="').concat(e, '" stroke-width="5" fill="none" /></svg>\n        ')
            }
        },
        p = {
            flake1: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 179 179"><path d="M90 0C94.4 0 98 3.6 98 8L98 69 141.1 25.9C144.2 22.7 149.3 22.7 152.4 25.9L153.1 26.6C156.3 29.7 156.3 34.8 153.1 37.9L110 81 171 81C175.4 81 179 84.6 179 89L179 90C179 94.4 175.4 98 171 98L110 98 153.1 141.1C156.3 144.2 156.3 149.3 153.1 152.4L152.4 153.1C149.3 156.3 144.2 156.3 141.1 153.1L98 110 98 171C98 175.4 94.4 179 90 179L89 179C84.6 179 81 175.4 81 171L81 110 37.9 153.1C34.8 156.3 29.7 156.3 26.6 153.1L25.9 152.4C22.7 149.3 22.7 144.2 25.9 141.1L69 98 8 98C3.6 98 0 94.4 0 90L0 89C0 84.6 3.6 81 8 81L69 81 25.9 37.9C22.7 34.8 22.7 29.7 25.9 26.6L26.6 25.9C29.7 22.7 34.8 22.7 37.9 25.9L81 69 81 8C81 3.6 84.6 0 89 0L90 0Z" fill="').concat(e, '" /></svg>')
            },
            flake2: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 179 179"><path d="M90 0C94.4 0 98 3.6 98 8L98 25.1 114.9 7.6C118 4.4 123.1 4.3 126.2 7.4L127 8.1C130.1 11.1 130.2 16.2 127.2 19.4L100.1 47.4C99.4 48.1 98.7 48.6 98 49L98 81 130 81C130.4 80.3 130.9 79.6 131.6 78.9L159.6 51.8C162.8 48.8 167.9 48.9 170.9 52L171.6 52.8C174.7 55.9 174.6 61 171.4 64.1L153.9 81 171 81C175.4 81 179 84.6 179 89L179 90C179 94.4 175.4 98 171 98L153.9 98 171.4 114.9C174.6 118 174.7 123.1 171.6 126.2L170.9 127C167.9 130.1 162.8 130.2 159.6 127.2L131.6 100.1C130.9 99.4 130.4 98.7 130 98L98 98 98 126C98.6 126.4 99.2 126.8 99.8 127.3L100.1 127.6 127.2 155.6C130.2 158.7 130.1 163.7 127.2 166.7L127 166.9 126.2 167.6C123.1 170.6 118.2 170.6 115.1 167.6L114.9 167.4 98 149.9 98 171C98 175.4 94.4 179 90 179L89 179C84.6 179 81 175.4 81 171L81 149.9 64.1 167.4C61.1 170.5 56.1 170.7 53 167.8L52.8 167.6 52 166.9C48.9 163.9 48.8 159 51.7 155.8L51.8 155.6 78.9 127.6C79.6 126.9 80.3 126.4 81 126L81 98 53 98C52.6 98.6 52.2 99.2 51.7 99.8L51.4 100.1 23.4 127.2C20.3 130.2 15.3 130.1 12.3 127.2L12.1 127 11.4 126.2C8.4 123.1 8.4 118.2 11.4 115.1L11.6 114.9 29.1 98 8 98C3.6 98 0 94.4 0 90L0 89C0 84.6 3.6 81 8 81L29.1 81 11.6 64.1C8.5 61.1 8.3 56.1 11.2 53L11.4 52.8 12.1 52C15.1 48.9 20 48.8 23.2 51.7L23.4 51.8 51.4 78.9C52.1 79.6 52.6 80.3 53 81L81 81 81 49C80.3 48.6 79.6 48.1 78.9 47.4L51.8 19.4C48.8 16.2 48.9 11.1 52 8.1L52.8 7.4C55.9 4.3 61 4.4 64.1 7.6L81 25.1 81 8C81 3.6 84.6 0 89 0L90 0Z" fill="').concat(e, '" /></svg>\n ')
            },
            flake3: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 179 179"><path d="M90 0C94.4 0 98 3.6 98 8L98 25.1 114.9 7.6C117.4 5 121.1 4.5 124.1 5.9 127.3 7 129.5 10.1 129.5 13.6L129 38 141.1 25.9C144.2 22.7 149.3 22.7 152.4 25.9L153.1 26.6C156.3 29.7 156.3 34.8 153.1 37.9L141 50 165.4 49.5C168.9 49.5 172 51.7 173.1 54.9 174.5 57.9 174 61.6 171.4 64.1L153.9 81 171 81C175.4 81 179 84.6 179 89L179 90C179 94.4 175.4 98 171 98L153.9 98 167.8 111.4C168.1 111.7 168.5 112 168.8 112.4L171.4 114.9C174.6 118 174.7 123.1 171.6 126.2L170.9 127C167.9 130.1 162.8 130.2 159.6 127.2L159 126.6 138.2 126.2 153.1 141.1C156.3 144.2 156.3 149.3 153.1 152.4L152.4 153.1C149.3 156.3 144.2 156.3 141.1 153.1L126.2 138.2 126.5 154.9 127.2 155.6C130.2 158.7 130.1 163.7 127.2 166.7L127 166.9 126.2 167.6C125.2 168.6 124 169.3 122.7 169.6 121.6 170.3 120.4 170.6 119 170.7L118.8 170.7 117.8 170.7C113.4 170.8 109.8 167.4 109.6 163.1L109.6 162.9 109.6 161.9 98 149.9 98 171C98 175.4 94.4 179 90 179L89 179C84.6 179 81 175.4 81 171L81 149.9 69.4 161.9 69.4 162.9C69.3 167.2 65.8 170.7 61.5 170.7L61.2 170.7 60.2 170.7C58.8 170.7 57.5 170.3 56.3 169.6 55.1 169.3 53.9 168.7 53 167.8L52.8 167.6 52 166.9C48.9 163.9 48.8 159 51.7 155.8L51.8 155.6 52.5 154.9 52.8 138.2 37.9 153.1C34.8 156.3 29.7 156.3 26.6 153.1L25.9 152.4C22.7 149.3 22.7 144.2 25.9 141.1L40.8 126.2 24.1 126.5 23.4 127.2C20.3 130.2 15.3 130.1 12.3 127.2L12.1 127 11.4 126.2C10.4 125.2 9.7 124 9.4 122.7 8.7 121.6 8.4 120.4 8.3 119L8.3 118.8 8.3 117.8C8.2 113.4 11.6 109.8 15.9 109.6L16.1 109.6 17.1 109.6 29.1 98 8 98C3.6 98 0 94.4 0 90L0 89C0 84.6 3.6 81 8 81L29.1 81 14.1 66.6 13.3 66.5C8.9 66.5 5.3 62.8 5.4 58.4L5.4 57.4C5.5 53 9.2 49.5 13.6 49.5L17.3 49.6C17.7 49.6 18.2 49.6 18.6 49.6L38 50 25.9 37.9C22.7 34.8 22.7 29.7 25.9 26.6L26.6 25.9C29.7 22.7 34.8 22.7 37.9 25.9L50 38 49.5 13.6C49.5 10.1 51.7 7 54.9 5.9 57.9 4.5 61.6 5 64.1 7.6L81 25.1 81 8C81 3.6 84.6 0 89 0L90 0ZM81 110L69.7 121.3C69.9 122 70 122.8 70.1 123.5L70.1 123.9 69.8 137 78.9 127.6C79.6 126.9 80.3 126.4 81 126L81 110ZM98 110L98 126C98.6 126.4 99.2 126.8 99.8 127.3L100.1 127.6 109.2 137 108.9 123.9C108.9 123 109.1 122.1 109.3 121.3L98 110ZM130 98L110 98 121.3 109.3C122 109.1 122.8 109 123.5 108.9L123.9 108.9 141.1 109.2 131.6 100.1C130.9 99.4 130.4 98.7 130 98ZM69 98L53 98C52.6 98.6 52.2 99.2 51.7 99.8L51.4 100.1 42 109.2 55.1 108.9C56 108.9 56.9 109.1 57.7 109.3L69 98ZM54.8 66.9C54 67.1 53.2 67.2 52.3 67.2L39.1 67 51.4 78.9C52.1 79.6 52.6 80.3 53 81L69 81 54.8 66.9ZM124.2 66.9L110 81 130 81C130.4 80.3 130.9 79.6 131.6 78.9L144 66.9 126.7 67.2C125.8 67.2 125 67.1 124.2 66.9ZM112.1 35L100.1 47.4C99.4 48.1 98.7 48.6 98 49L98 69 112.1 54.8C111.9 54 111.8 53.2 111.8 52.3L112.1 35ZM66.9 35L67.2 52.3C67.2 53.2 67.1 54 66.9 54.8L81 69 81 49C80.3 48.6 79.6 48.1 78.9 47.4L66.9 35Z" fill="').concat(e, '" /></svg>\n ')
            },
            flake4: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 180 179"><path d="M90 0C92.8 0 95 2.2 95 5L95 77.4 146.2 26.2C148.2 24.3 151.3 24.3 153.3 26.2 155.2 28.2 155.2 31.3 153.3 33.3L102.1 84.5 174.5 84.5C177.3 84.5 179.5 86.7 179.5 89.5 179.5 92.3 177.3 94.5 174.5 94.5L102.1 94.5 153.3 145.7C155.2 147.7 155.2 150.8 153.3 152.8 151.3 154.7 148.2 154.7 146.2 152.8L95 101.6 95 174C95 176.8 92.8 179 90 179 87.2 179 85 176.8 85 174L85 101.6 33.8 152.8C31.8 154.7 28.7 154.7 26.7 152.8 24.8 150.8 24.8 147.7 26.7 145.7L77.9 94.5 5.5 94.5C2.7 94.5 0.5 92.3 0.5 89.5 0.5 86.7 2.7 84.5 5.5 84.5L77.9 84.5 26.7 33.3C24.8 31.3 24.8 28.2 26.7 26.2 28.7 24.3 31.8 24.3 33.8 26.2L85 77.4 85 5C85 2.2 87.2 0 90 0Z" fill="').concat(e, '" /></svg>\n ')
            },
            flake5: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 179 179"><path d="M89 0C91.8 0 94 2.2 94 5L94 33.8 119 7.8C121 5.9 124.1 5.8 126.1 7.7 128.1 9.6 128.1 12.8 126.2 14.8L95 47.2C94.7 47.5 94.3 47.7 94 47.9L94 73.8 119 47.8C121 45.9 124.1 45.8 126.1 47.7 128.1 49.6 128.1 52.8 126.2 54.8L100.9 81 131.1 81C131.3 80.7 131.5 80.3 131.8 80L164.2 48.8C166.2 46.9 169.4 46.9 171.3 48.9 173.2 50.9 173.1 54 171.2 56L145.2 81 174 81C176.8 81 179 83.2 179 86 179 88.8 176.8 91 174 91L145.2 91 171.2 116C173.1 118 173.2 121.1 171.3 123.1 169.4 125.1 166.2 125.1 164.2 123.2L131.8 92C131.5 91.7 131.3 91.3 131.1 91L102.8 91 126.2 115.2C128.1 117.1 128.1 120.2 126.3 122.1L126.1 122.3C124.2 124.1 121.1 124.1 119.2 122.3L119 122.2 94 96.2 94 127.1C94.3 127.2 94.5 127.4 94.8 127.7L95 127.8 126.2 160.2C128.1 162.2 128.1 165.4 126.1 167.3 124.2 169.1 121.1 169.1 119.2 167.3L119 167.2 94 141.2 94 174C94 176.8 91.8 179 89 179 86.2 179 84 176.8 84 174L84 141.2 59 167.2C57.1 169.1 54.1 169.2 52.1 167.4L51.9 167.3C50 165.4 49.9 162.4 51.6 160.4L51.8 160.2 83 127.8C83.3 127.5 83.7 127.3 84 127.1L84 96.2 59 122.2C57.1 124.1 54.1 124.2 52.1 122.4L51.9 122.3C50 120.4 49.9 117.4 51.6 115.4L51.8 115.2 75.2 91 51.9 91C51.8 91.3 51.6 91.5 51.4 91.7L51.2 92 18.8 123.2C16.8 125.1 13.6 125.1 11.7 123.1 9.9 121.2 9.9 118.1 11.7 116.2L11.8 116 37.8 91 5 91C2.2 91 0 88.8 0 86 0 83.2 2.2 81 5 81L37.8 81 11.8 56C9.9 54.1 9.8 51.1 11.6 49.1L11.7 48.9C13.6 47 16.6 46.9 18.6 48.6L18.8 48.8 51.2 80C51.5 80.3 51.7 80.7 51.9 81L77.1 81 51.8 54.8C49.9 52.8 49.9 49.6 51.9 47.7 53.9 45.8 57 45.9 59 47.8L84 73.8 84 47.9C83.7 47.7 83.3 47.5 83 47.2L51.8 14.8C49.9 12.8 49.9 9.6 51.9 7.7 53.9 5.8 57 5.9 59 7.8L84 33.8 84 5C84 2.2 86.2 0 89 0Z" fill="').concat(e, '" /></svg>\n ')
            },
            flake6: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 181 179"><path d="M88 0C90.8 0 93 2.2 93 5L93 33.8 116.9 9C117.7 7.2 119.5 5.9 121.6 6 124 6 125.9 7.6 126.4 9.8 126.7 10.7 126.7 11.6 126.5 12.4L125.9 47.1 146.2 26.7C148.2 24.8 151.4 24.8 153.3 26.7 155.3 28.7 155.3 31.9 153.3 33.8L133 54.1 168.4 53.5C170.1 53.1 172 53.6 173.3 54.9 175.2 56.9 175.1 60 173.2 62L147.2 87 176 87C178.8 87 181 89.2 181 92 181 94.8 178.8 97 176 97L147.2 97 171 120C172.5 120.5 173.6 121.7 174 123.2 175.1 125 174.9 127.5 173.3 129.1 171.5 130.9 168.6 131.1 166.7 129.6L131.1 129 148.3 146.2C150.3 148.1 150.3 151.3 148.3 153.3 146.4 155.2 143.2 155.2 141.2 153.3L126.1 138.1 126.7 172.1C126.7 172.5 126.7 172.9 126.6 173.2 126.5 174.3 126 175.4 125.1 176.3 123.2 178.1 120.1 178.1 118.2 176.3L118 176.2 93 150.2 93 174C93 176.8 90.8 179 88 179 85.2 179 83 176.8 83 174L83 150.2 59 175.1C58.3 177 56.4 178.3 54.3 178.3 51.6 178.2 49.4 176.1 49.3 173.4L49.3 173.2 50 137.1 33.8 153.3C31.9 155.3 28.7 155.3 26.7 153.3 24.8 151.4 24.8 148.2 26.7 146.2L42.9 130.1 6.9 130.7C6.5 130.7 6.1 130.7 5.8 130.6 4.7 130.5 3.6 130 2.7 129.1 0.9 127.2 0.9 124.1 2.7 122.2L2.8 122 28.8 97 7 97C4.2 97 2 94.8 2 92 2 89.2 4.2 87 7 87L28.8 87 4 63.1C2.2 62.3 0.9 60.5 1 58.4 1 56 2.6 54.1 4.8 53.6 5.7 53.3 6.6 53.3 7.4 53.5L42.1 54.1 21.7 33.8C19.8 31.8 19.8 28.6 21.7 26.7 23.7 24.7 26.9 24.7 28.8 26.7L49.1 47 48.5 11C48.5 8.2 50.7 6 53.4 5.9 54.4 5.9 55.3 6.2 56.1 6.6 56.8 6.9 57.4 7.3 58 7.8L83 33.8 83 5C83 2.2 85.2 0 88 0ZM93 105L93 136.1C93.3 136.2 93.5 136.4 93.7 136.6L94 136.8 116.5 160.2 115.9 128 93 105ZM83 104.1L60 127.1C60.1 127.4 60.1 127.8 60.1 128.1L60.1 128.4 59.6 160.1 82 136.8C82.3 136.5 82.7 136.3 83 136.1L83 104.1ZM76 97L42.9 97C42.8 97.3 42.6 97.5 42.4 97.7L42.2 98 18.8 120.5 51.7 119.9C52.1 119.9 52.5 120 52.9 120L76 97ZM133.1 97L99.1 97 121.7 119.6C122.4 119.2 123.2 118.9 124.1 118.9L124.4 118.9 156.1 119.4 133.8 98C133.5 97.7 133.3 97.3 133.1 97ZM19 63.7L42.2 86C42.5 86.3 42.7 86.7 42.9 87L75 87 52.1 64.1C51.7 64.2 51.3 64.3 50.9 64.3L19 63.7ZM156.9 63.7L124.2 64.3C123.8 64.3 123.3 64.3 122.9 64.2L100.1 87 133.1 87C133.3 86.7 133.5 86.3 133.8 86L156.9 63.7ZM58.7 23L59.3 55.8C59.3 56.2 59.3 56.7 59.2 57.1L83 80.9 83 47.9C82.7 47.7 82.3 47.5 82 47.2L58.7 23ZM116.3 24L94 47.2C93.7 47.5 93.3 47.7 93 47.9L93 80 115.9 57.1C115.8 56.7 115.7 56.3 115.7 55.9L116.3 24Z" fill="').concat(e, '" /></svg>\n ')
            },
            flake7: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 203 203"><path d="M101.5 0L120 18.5 106.6 31.9 106.6 66.6C113 67.5 118.7 70.1 123.4 74.1L147.6 49.9 147.6 29.7 173.8 29.7 173.8 55.9 154.6 55.9 129.6 80.9C132.9 85.7 134.9 91.3 135.3 97.4L170.1 97.4 184.5 83 203 101.5 184.5 120 171.1 106.6 134.7 106.6C133.5 112 131.1 117 127.6 121.1L153.6 147.1 173.8 147.1 173.8 173.3 147.6 173.3 147.6 154.1 120.8 127.3C116.6 130.1 111.8 132 106.6 132.7L106.6 171.1 120 184.5 101.5 203 83 184.5 97.4 170.1 97.4 132.7C92.2 132 87.4 130.1 83.2 127.3L56.4 154.1 56.4 173.3 30.2 173.3 30.2 147.1 50.4 147.1 76.4 121.1C72.9 117 70.5 112 69.3 106.6L31.9 106.6 18.5 120 0 101.5 18.5 83 32.9 97.4 68.7 97.4C69.1 91.3 71.1 85.7 74.4 80.9L49.4 55.9 30.2 55.9 30.2 29.7 56.4 29.7 56.4 49.9 80.6 74C85.3 70.1 91 67.5 97.4 66.6L97.4 32.9 83 18.5 101.5 0ZM102 77.4C89.7 77.4 79.7 87.4 79.7 99.7 79.7 112 89.7 121.9 102 121.9 114.3 121.9 124.3 112 124.3 99.7 124.3 87.4 114.3 77.4 102 77.4Z" fill="').concat(e, '" /></svg>\n ')
            },
            flake8: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 203 203"><path d="M101.5 0L120 18.5 106.6 31.9 106.6 52.2C116.9 53.2 126.3 57.3 133.8 63.7L147.6 49.9 147.6 29.7 173.8 29.7 173.8 55.9 154.6 55.9 140.2 70.3C146.3 77.8 150.1 87.2 150.9 97.4L170.1 97.4 184.5 83 203 101.5 184.5 120 171.1 106.6 150.7 106.6C149.5 116.5 145.5 125.6 139.3 132.8L153.6 147.1 173.8 147.1 173.8 173.3 147.6 173.3 147.6 154.1 132.7 139.2C125.4 145.1 116.4 148.9 106.6 149.8L106.6 171.1 120 184.5 101.5 203 83 184.5 97.4 170.1 97.4 149.8C87.6 148.9 78.6 145.1 71.3 139.2L56.4 154.1 56.4 173.3 30.2 173.3 30.2 147.1 50.4 147.1 64.7 132.8C58.5 125.6 54.5 116.5 53.3 106.6L31.9 106.6 18.5 120 0 101.5 18.5 83 32.9 97.4 53.1 97.4C53.9 87.2 57.7 77.8 63.8 70.3L49.4 55.9 30.2 55.9 30.2 29.7 56.4 29.7 56.4 49.9 70.2 63.7C77.7 57.3 87.1 53.2 97.4 52.2L97.4 32.9 83 18.5 101.5 0ZM120.8 127.3C116.6 130.1 111.8 132 106.6 132.7L106.6 139.8C113.8 139.1 120.4 136.5 126 132.6L120.8 127.3ZM83.2 127.3L78.4 132.2C83.8 136.1 90.3 138.8 97.4 139.7L97.4 132.7C92.2 132 87.4 130.1 83.2 127.3ZM142.4 106.6L134.7 106.6C133.5 112 131.1 117 127.6 121.1L132.9 126.4C137.8 120.9 141.2 114.1 142.4 106.6ZM69.3 106.6L62.6 106.6C63.8 113.9 67 120.5 71.6 125.8L76.4 121.1C72.9 117 70.5 112 69.3 106.6ZM102 77.4C89.7 77.4 79.7 87.4 79.7 99.7 79.7 112 89.7 121.9 102 121.9 114.3 121.9 124.3 112 124.3 99.7 124.3 87.4 114.3 77.4 102 77.4ZM134.8 75.8L129.6 80.9C132.9 85.7 134.9 91.3 135.3 97.4L142.9 97.4C142.4 89.3 139.4 81.9 134.8 75.8ZM62.1 97.4L68.7 97.4C69.1 91.3 71.1 85.7 74.4 80.9L69.8 76.4C65.4 82.3 62.6 89.5 62.1 97.4ZM106.6 60.2L106.6 66.6C113 67.5 118.7 70.1 123.4 74.1L128.3 69.2C122.3 64.3 114.8 61 106.6 60.2ZM76.2 69.6L80.6 74C85.3 70.1 91 67.5 97.4 66.6L97.4 60.3C89.3 61.3 82 64.7 76.2 69.6Z" fill="').concat(e, '" /></svg>\n ')
            },
            flake9: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 220 215"><path d="M110 0C114.4 0 118 3.6 118 8L118 78.3 124 66C125.9 62.1 130.7 60.4 134.7 62.3 134.7 62.3 134.7 62.3 134.7 62.4L134.7 62.4C138.7 64.3 140.3 69.1 138.4 73.1L133.1 84 186.4 40.8C189.9 38 194.9 38.5 197.7 41.9 197.7 41.9 197.7 41.9 197.7 42L197.7 42C200.5 45.4 199.9 50.4 196.5 53.2L142.6 96.9 155 94.1C159.3 93.1 163.6 95.7 164.6 100 164.6 100 164.6 100 164.6 100L164.6 100.1C165.6 104.4 163 108.7 158.7 109.7L145.6 112.7 213.8 128.4C218.1 129.4 220.8 133.7 219.8 138L219.8 138.1C218.8 142.4 214.5 145.1 210.2 144.1 210.2 144.1 210.2 144.1 210.2 144.1L141.4 128.2 152.3 137C155.7 139.8 156.2 144.8 153.5 148.2L153.5 148.3C150.7 151.7 145.6 152.2 142.2 149.5 142.2 149.5 142.2 149.5 142.2 149.5L133 142 163 203.5C164.9 207.4 163.2 212.2 159.3 214.2L159.2 214.2C155.3 216.1 150.5 214.5 148.6 210.5 148.6 210.5 148.6 210.5 148.6 210.5L118 147.8 118 160.9C118 165.3 114.4 168.9 110 168.9L110 168.9C105.6 168.9 102 165.3 102 160.9L102 147.8 71.4 210.5C69.5 214.5 64.7 216.1 60.8 214.2 60.8 214.2 60.8 214.2 60.8 214.2L60.7 214.2C56.8 212.2 55.1 207.4 57 203.5L87 142 77.8 149.5C74.4 152.2 69.3 151.7 66.5 148.3 66.5 148.3 66.5 148.3 66.5 148.3L66.5 148.2C63.8 144.8 64.3 139.8 67.7 137L78.6 128.2 9.8 144.1C5.5 145.1 1.2 142.4 0.2 138.1 0.2 138.1 0.2 138.1 0.2 138.1L0.2 138C-0.8 133.7 1.9 129.4 6.2 128.4L74.4 112.7 61.3 109.7C57 108.7 54.4 104.4 55.4 100.1L55.4 100C56.4 95.7 60.6 93.1 65 94 65 94 65 94 65 94.1L77.4 96.9 23.5 53.2C20.1 50.4 19.5 45.4 22.3 42L22.3 42C25.1 38.5 30.1 38 33.6 40.8 33.6 40.8 33.6 40.8 33.6 40.8L86.9 84 81.6 73.1C79.7 69.1 81.3 64.3 85.3 62.4L85.3 62.4C89.3 60.4 94.1 62.1 96 66 96 66 96 66 96 66L102 78.3 102 8C102 3.6 105.6 0 110 0L110 0ZM122 90.2L110 97.8 98 90.2 98.5 104.4 86 111 98.5 117.6 98 131.8 110 124.2 122 131.8 121.5 117.6 134 111 121.5 104.4 122 90.2Z" fill="').concat(e, '" /></svg>\n ')
            },
            flake10: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 180 179"><path d="M34.6 95L34.4 95.1 14.2 109.8C11.9 111.4 8.8 110.9 7.2 108.7 5.6 106.5 6 103.5 8.1 101.8L8.3 101.7 18.2 94.5 5.5 94.5C2.7 94.5 0.5 92.3 0.5 89.5 0.5 86.7 2.7 84.5 5.5 84.5L18.5 84.5 8.3 77.1 8.1 77C6 75.3 5.6 72.3 7.2 70.1 8.8 67.9 11.8 67.4 14 68.9L14.2 69 34.4 83.7 34.6 83.9C34.8 84.1 35.1 84.3 35.3 84.5L77.9 84.5 47 53.6C46.8 53.6 46.6 53.6 46.4 53.6L46.1 53.5 21.4 49.6C18.7 49.2 16.9 46.6 17.3 43.9 17.7 41.3 20.1 39.4 22.8 39.7L23 39.8 35.1 41.7 26.7 33.3C24.8 31.3 24.8 28.2 26.7 26.2 28.7 24.3 31.8 24.3 33.8 26.2L42.4 34.8 40.4 22.4 40.4 22.1C40.1 19.5 41.9 17.1 44.6 16.6 47.2 16.2 49.7 18 50.2 20.6L50.3 20.8 54.2 45.5 54.2 45.7C54.3 46 54.3 46.4 54.2 46.7L85 77.4 85 33.3C84.9 33.2 84.8 33.1 84.7 33L84.6 32.8 69.9 12.6C68.3 10.4 68.8 7.3 71 5.6 73.2 4.1 76.2 4.5 77.9 6.5L78 6.7 85 16.4 85 5C85 2.2 87.2 0 90 0 92.8 0 95 2.2 95 5L95 17.2 102.6 6.7C104.2 4.5 107.4 4 109.6 5.6 111.8 7.3 112.3 10.4 110.7 12.6L96 32.8C95.7 33.2 95.4 33.6 95 33.9L95 77.4 127.3 45.2 127.3 45.1 130.7 20.4C131.1 17.7 133.7 15.8 136.4 16.1 139.1 16.5 140.9 18.9 140.7 21.6L140.6 21.8 139 33.4 146.2 26.2C148.2 24.3 151.3 24.3 153.3 26.2 155.2 28.2 155.2 31.3 153.3 33.3L145.4 41.2 158.3 38.9C161.1 38.4 163.7 40.2 164.1 42.9 164.6 45.6 162.8 48.2 160.1 48.7L135.5 53.1C134.8 53.2 134.2 53.2 133.5 53L102.1 84.5 146.4 84.5C146.6 84.3 146.9 84.1 147.1 83.9L147.3 83.7 167.5 69C169.8 67.4 172.9 67.9 174.5 70.1 176.1 72.3 175.7 75.3 173.6 77L173.4 77.1 163.2 84.5 174.5 84.5C177.3 84.5 179.5 86.7 179.5 89.5 179.5 92.3 177.3 94.5 174.5 94.5L163.5 94.5 173.4 101.7C175.6 103.3 176.1 106.5 174.5 108.7 172.9 110.9 169.8 111.4 167.5 109.8L147.3 95.1C147 94.9 146.8 94.7 146.6 94.5L102.1 94.5 132.1 124.5C132.5 124.5 132.9 124.5 133.3 124.5L133.5 124.6 158.2 128.9C160.9 129.4 162.7 132 162.2 134.7 161.7 137.4 159.3 139.1 156.6 138.8L156.4 138.8 144.2 136.6 153.3 145.7C155.2 147.7 155.2 150.8 153.3 152.8 151.3 154.7 148.2 154.7 146.2 152.8L137 143.6 138.7 155.9 138.8 156.1C139 158.7 137.1 161.1 134.5 161.5 131.8 161.9 129.3 160.1 128.9 157.5L128.8 157.2 125.3 132.5 125.3 132.3C125.3 132.1 125.3 132 125.3 131.9L95 101.6 95 146.7C95.3 146.9 95.6 147.2 95.9 147.5L96 147.7 110.7 168C112.3 170.2 111.8 173.3 109.6 174.9 107.4 176.5 104.4 176.1 102.7 174L102.6 173.8 95 163.4 95 174C95 176.8 92.8 179 90 179 87.2 179 85 176.8 85 174L85 164.2 78 173.8 77.9 174C76.2 176.1 73.2 176.5 71 174.9 68.8 173.4 68.3 170.4 69.8 168.2L69.9 168 84.6 147.7 84.7 147.5C84.8 147.4 84.9 147.3 85 147.3L85 101.6 55.1 131.5C55.1 131.7 55.1 132 55 132.2L55 132.4 51.5 157.2C51.2 159.9 48.6 161.8 45.9 161.4 43.2 161 41.3 158.6 41.6 156L41.6 155.8 43.4 143.2 33.8 152.8C31.8 154.7 28.7 154.7 26.7 152.8 24.8 150.8 24.8 147.7 26.7 145.7L35.8 136.6 23.9 138.7 23.7 138.7C21.1 139.1 18.6 137.3 18.1 134.6 17.7 132 19.4 129.4 22 128.9L22.2 128.8 46.8 124.5 47 124.5C47.4 124.4 47.7 124.4 48 124.4L77.9 94.5 35.1 94.5C34.9 94.7 34.8 94.8 34.6 95Z" fill="').concat(e, '" /></svg>\n ')
            },
            flake11: function(t, r, e) {
                return '\n       <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 204 204"><path d="M102 0C105.1 0 107.7 2.6 107.7 5.7L107.7 19.9 116.4 7.9C118.3 5.4 121.8 4.8 124.4 6.6 126.9 8.5 127.5 12 125.6 14.6L125.6 14.6 108.9 37.6C108.5 38.1 108.1 38.5 107.7 38.8L107.7 67.3 121.4 52.1 120.1 75.8 144.6 51.4 148.5 23.4C148.5 23.4 148.5 23.4 148.5 23.4 148.9 20.3 151.8 18.1 154.9 18.6 157.9 19 160.1 21.8 159.8 24.8L159.8 25 157.9 38 166.1 29.9C168.3 27.6 171.9 27.6 174.1 29.9 176.4 32.1 176.4 35.7 174.1 37.9L164.9 47.1 179.9 44.5C183 44 186 46 186.5 49.1 187.1 52.2 185 55.2 181.9 55.7 181.9 55.7 181.9 55.7 181.9 55.7L153.9 60.6C153.1 60.8 152.3 60.7 151.5 60.6L129.3 82.7 150.9 81.6 134.6 96.3 166.5 96.3C166.7 96.1 166.9 95.9 167.2 95.7L167.4 95.5 190.4 78.8 190.4 78.8C192.9 76.9 196.5 77.5 198.3 80 200.1 82.5 199.7 85.9 197.3 87.8L197.1 88 185.6 96.3 198.3 96.3C201.4 96.3 204 98.9 204 102 204 105.1 201.4 107.7 198.3 107.7L185.6 107.7 197.1 116C199.6 117.9 200.2 121.4 198.3 124 196.5 126.5 192.9 127.1 190.4 125.3L190.4 125.2 167.4 108.5C167 108.3 166.7 108 166.5 107.7L133.5 107.7 150.9 123.4 130.4 122.3 150 142C150.5 141.9 151 141.9 151.4 142L151.7 142 179.7 147C179.7 147 179.7 147 179.7 147 182.8 147.5 184.9 150.5 184.3 153.6 183.8 156.6 181 158.6 178 158.2L177.7 158.2 163.8 155.7 174.1 166.1C176.4 168.3 176.4 171.9 174.1 174.1 171.9 176.4 168.3 176.4 166.1 174.1L155.6 163.7 157.6 177.7 157.6 177.9C157.9 180.9 155.8 183.7 152.7 184.1 149.6 184.5 146.7 182.4 146.3 179.3L146.3 179.3 146.3 179.3 142.3 151.1 142.3 150.8C142.3 150.7 142.3 150.5 142.3 150.3L120.1 128.2 121.4 152.9 107.7 137.7 107.7 167.2C108.1 167.5 108.4 167.8 108.7 168.2L108.9 168.4 125.6 191.4C127.5 194 126.9 197.5 124.4 199.4 121.9 201.2 118.4 200.7 116.6 198.3L116.4 198.1 107.7 186.1 107.7 198.3C107.7 201.4 105.1 204 102 204 98.9 204 96.3 201.4 96.3 198.3L96.3 187.2 88.4 198.1 88.2 198.3C86.3 200.7 82.9 201.2 80.4 199.4 77.9 197.6 77.3 194.2 79 191.6L79.1 191.4 79.1 191.4 95.9 168.4 96 168.2C96.1 168.1 96.2 168 96.3 167.9L96.3 134.4 79.6 152.9 80.7 131.3 62.2 149.9C62.2 150.1 62.2 150.4 62.2 150.7L62.2 151 58.2 179.2C58.2 179.2 58.2 179.2 58.2 179.2 57.8 182.3 54.9 184.4 51.8 184 48.7 183.6 46.6 180.8 46.9 177.8L46.9 177.6 48.9 163.1 37.9 174.1C35.7 176.4 32.1 176.4 29.9 174.1 27.6 171.9 27.6 168.3 29.9 166.1L40.2 155.7 26.8 158.1 26.5 158.1C23.5 158.5 20.7 156.5 20.2 153.5 19.6 150.4 21.7 147.4 24.8 146.9L24.8 146.9 24.8 146.9 52.8 141.9 53.1 141.9C53.4 141.9 53.7 141.8 54.1 141.9L73.8 122.1 50.1 123.4 67.5 107.7 39.5 107.7C39.3 107.9 39.1 108.1 38.8 108.3L38.6 108.5 15.6 125.2C13.1 127.1 9.5 126.5 7.7 124 5.9 121.5 6.4 118.1 8.7 116.2L8.9 116 20.4 107.7 5.7 107.7C2.6 107.7 0 105.1 0 102 0 98.9 2.6 96.3 5.7 96.3L20.4 96.3 8.9 88 8.7 87.8C6.4 85.9 5.9 82.5 7.7 80 9.5 77.5 12.9 76.9 15.4 78.6L15.6 78.8 15.6 78.8 38.6 95.5 38.8 95.7C39.1 95.9 39.3 96.1 39.5 96.3L66.4 96.3 50.1 81.6 74.8 82.9 53.2 61.3C52.9 61.3 52.6 61.3 52.3 61.2L52 61.2 23.9 56.8C23.9 56.8 23.9 56.8 23.9 56.8 20.8 56.3 18.7 53.3 19.2 50.2 19.7 47.2 22.5 45.1 25.5 45.5L25.7 45.5 39.6 47.7 29.9 37.9C27.6 35.7 27.6 32.1 29.9 29.9 32.1 27.6 35.7 27.6 37.9 29.9L47.7 39.7 45.5 25.7 45.5 25.5C45.1 22.4 47.2 19.6 50.3 19.2 53.4 18.7 56.3 20.8 56.8 23.9L56.8 23.9 56.8 23.9 61.2 52 61.3 52.3C61.3 52.6 61.3 52.9 61.3 53.2L80.7 72.6 79.6 52.1 96.3 70.6 96.3 38.1C96.2 38 96.1 37.9 96 37.8L95.9 37.6 79.1 14.6 79.1 14.6C77.3 12 77.9 8.5 80.4 6.6 82.9 4.8 86.3 5.3 88.2 7.7L88.4 7.9 96.3 18.8 96.3 5.7C96.3 2.6 98.9 0 102 0Z" fill="').concat(e, '" /></svg>\n ')
            },
            flake12: function(t, r, e) {
                return '\n       <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 204 204"><path d="M102 0C105.1 0 107.7 2.6 107.7 5.7L107.7 19.9 116.4 7.9C118.3 5.4 121.8 4.8 124.4 6.6 126.9 8.5 127.5 12 125.6 14.6L125.6 14.6 108.9 37.6C108.5 38.1 108.1 38.5 107.7 38.8L107.7 67.3 121.4 52.1 120.1 75.8 144.6 51.4 148.5 23.4C148.5 23.4 148.5 23.4 148.5 23.4 148.9 20.3 151.8 18.1 154.9 18.6 157.9 19 160.1 21.8 159.8 24.8L159.8 25 157.9 38 166.1 29.9C168.3 27.6 171.9 27.6 174.1 29.9 176.4 32.1 176.4 35.7 174.1 37.9L164.9 47.1 179.9 44.5C183 44 186 46 186.5 49.1 187.1 52.2 185 55.2 181.9 55.7 181.9 55.7 181.9 55.7 181.9 55.7L153.9 60.6C153.1 60.8 152.3 60.7 151.5 60.6L129.3 82.7 150.9 81.6 134.6 96.3 166.5 96.3C166.7 96.1 166.9 95.9 167.2 95.7L167.4 95.5 190.4 78.8 190.4 78.8C192.9 76.9 196.5 77.5 198.3 80 200.1 82.5 199.7 85.9 197.3 87.8L197.1 88 185.6 96.3 198.3 96.3C201.4 96.3 204 98.9 204 102 204 105.1 201.4 107.7 198.3 107.7L185.6 107.7 197.1 116C199.6 117.9 200.2 121.4 198.3 124 196.5 126.5 192.9 127.1 190.4 125.3L190.4 125.2 167.4 108.5C167 108.3 166.7 108 166.5 107.7L133.5 107.7 150.9 123.4 130.4 122.3 150 142C150.5 141.9 151 141.9 151.4 142L151.7 142 179.7 147C179.7 147 179.7 147 179.7 147 182.8 147.5 184.9 150.5 184.3 153.6 183.8 156.6 181 158.6 178 158.2L177.7 158.2 163.8 155.7 174.1 166.1C176.4 168.3 176.4 171.9 174.1 174.1 171.9 176.4 168.3 176.4 166.1 174.1L155.6 163.7 157.6 177.7 157.6 177.9C157.9 180.9 155.8 183.7 152.7 184.1 149.6 184.5 146.7 182.4 146.3 179.3L146.3 179.3 146.3 179.3 142.3 151.1 142.3 150.8C142.3 150.7 142.3 150.5 142.3 150.3L120.1 128.2 121.4 152.9 107.7 137.7 107.7 167.2C108.1 167.5 108.4 167.8 108.7 168.2L108.9 168.4 125.6 191.4C127.5 194 126.9 197.5 124.4 199.4 121.9 201.2 118.4 200.7 116.6 198.3L116.4 198.1 107.7 186.1 107.7 198.3C107.7 201.4 105.1 204 102 204 98.9 204 96.3 201.4 96.3 198.3L96.3 187.2 88.4 198.1 88.2 198.3C86.3 200.7 82.9 201.2 80.4 199.4 77.9 197.6 77.3 194.2 79 191.6L79.1 191.4 79.1 191.4 95.9 168.4 96 168.2C96.1 168.1 96.2 168 96.3 167.9L96.3 134.4 79.6 152.9 80.7 131.3 62.2 149.9C62.2 150.1 62.2 150.4 62.2 150.7L62.2 151 58.2 179.2C58.2 179.2 58.2 179.2 58.2 179.2 57.8 182.3 54.9 184.4 51.8 184 48.7 183.6 46.6 180.8 46.9 177.8L46.9 177.6 48.9 163.1 37.9 174.1C35.7 176.4 32.1 176.4 29.9 174.1 27.6 171.9 27.6 168.3 29.9 166.1L40.2 155.7 26.8 158.1 26.5 158.1C23.5 158.5 20.7 156.5 20.2 153.5 19.6 150.4 21.7 147.4 24.8 146.9L24.8 146.9 24.8 146.9 52.8 141.9 53.1 141.9C53.4 141.9 53.7 141.8 54.1 141.9L73.8 122.1 50.1 123.4 67.5 107.7 39.5 107.7C39.3 107.9 39.1 108.1 38.8 108.3L38.6 108.5 15.6 125.2C13.1 127.1 9.5 126.5 7.7 124 5.9 121.5 6.4 118.1 8.7 116.2L8.9 116 20.4 107.7 5.7 107.7C2.6 107.7 0 105.1 0 102 0 98.9 2.6 96.3 5.7 96.3L20.4 96.3 8.9 88 8.7 87.8C6.4 85.9 5.9 82.5 7.7 80 9.5 77.5 12.9 76.9 15.4 78.6L15.6 78.8 15.6 78.8 38.6 95.5 38.8 95.7C39.1 95.9 39.3 96.1 39.5 96.3L66.4 96.3 50.1 81.6 74.8 82.9 53.2 61.3C52.9 61.3 52.6 61.3 52.3 61.2L52 61.2 23.9 56.8C23.9 56.8 23.9 56.8 23.9 56.8 20.8 56.3 18.7 53.3 19.2 50.2 19.7 47.2 22.5 45.1 25.5 45.5L25.7 45.5 39.6 47.7 29.9 37.9C27.6 35.7 27.6 32.1 29.9 29.9 32.1 27.6 35.7 27.6 37.9 29.9L47.7 39.7 45.5 25.7 45.5 25.5C45.1 22.4 47.2 19.6 50.3 19.2 53.4 18.7 56.3 20.8 56.8 23.9L56.8 23.9 56.8 23.9 61.2 52 61.3 52.3C61.3 52.6 61.3 52.9 61.3 53.2L80.7 72.6 79.6 52.1 96.3 70.6 96.3 38.1C96.2 38 96.1 37.9 96 37.8L95.9 37.6 79.1 14.6 79.1 14.6C77.3 12 77.9 8.5 80.4 6.6 82.9 4.8 86.3 5.3 88.2 7.7L88.4 7.9 96.3 18.8 96.3 5.7C96.3 2.6 98.9 0 102 0ZM115.1 69.7L101.5 84.8 87.9 69.7 88.9 89.9 68.7 88.9 83.8 102.5 68.7 116.1 88.9 115.1 87.9 135.3 101.5 120.3 115.1 135.3 114.1 115.1 134.3 116.1 119.3 102.5 134.3 88.9 114.1 89.9 115.1 69.7Z" fill="').concat(e, '" /></svg>\n ')
            },
            flake13: function(t, r, e) {
                return '\n       <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 189 189"><path d="M94.5 0C97.4 0 99.8 2.4 99.8 5.3L99.8 18.2 107.8 7.1C109.5 4.8 112.8 4.2 115.2 5.9 117.5 7.7 118.1 11 116.3 13.3L100.8 34.7C100.5 35.1 100.2 35.5 99.8 35.8L99.8 45.7 125.3 56.3 133.8 47.7 133.8 47.7 137.5 21.5C137.9 18.6 140.6 16.6 143.5 17 146.3 17.4 148.3 20 148 22.8L148 23 146.2 35.3 153.9 27.7C155.9 25.6 159.3 25.6 161.3 27.7 163.4 29.7 163.4 33.1 161.3 35.1L153 43.5 166.7 41C169.5 40.5 172.3 42.5 172.8 45.3 173.3 48.2 171.4 50.9 168.5 51.4L142.5 56C141.8 56.1 141.1 56.1 140.5 56L132.5 63.9 143 89.2 154.1 89.2C154.3 89 154.5 88.7 154.8 88.5L155 88.4 176.4 72.9C178.7 71.2 182 71.7 183.7 74 185.4 76.3 184.9 79.5 182.8 81.3L182.6 81.4 171.8 89.2 183.7 89.2C186.6 89.2 189 91.6 189 94.5 189 97.4 186.6 99.8 183.7 99.8L172.1 99.8 182.6 107.4C184.9 109.1 185.4 112.4 183.7 114.8 182 117.1 178.7 117.6 176.4 115.9L155 100.4C154.7 100.2 154.5 100 154.3 99.8L143 99.8 132.5 125.1 139 131.5C139.4 131.4 139.8 131.4 140.2 131.5L140.5 131.5 166.5 136.1C169.3 136.6 171.3 139.4 170.8 142.2 170.3 145 167.6 146.9 164.9 146.5L164.6 146.5 151.7 144.2 161.3 153.9C163.4 155.9 163.4 159.3 161.3 161.3 159.3 163.4 155.9 163.4 153.9 161.3L144.1 151.6 145.9 164.6 146 164.8C146.3 167.6 144.3 170.1 141.5 170.5 138.6 170.9 136 169 135.5 166.2L135.5 166 131.8 139.9 131.8 139.7C131.8 139.5 131.8 139.4 131.8 139.2L125.3 132.7 99.8 143.3 99.8 154.9C100.1 155.2 100.4 155.5 100.7 155.8L100.8 156 116.3 177.3C118.1 179.7 117.5 183 115.2 184.7 112.9 186.4 109.7 185.9 108 183.7L107.8 183.6 99.8 172.5 99.8 183.7C99.8 186.6 97.4 189 94.5 189 91.6 189 89.2 186.6 89.2 183.7L89.2 173.4 81.8 183.6 81.7 183.7C79.9 185.9 76.7 186.4 74.5 184.7 72.2 183.1 71.6 179.9 73.1 177.5L73.3 177.3 88.8 156 89 155.8C89 155.7 89.1 155.6 89.2 155.5L89.2 143.7 63.4 133.1 57.6 138.9C57.6 139.1 57.6 139.3 57.6 139.6L57.6 139.8 53.9 165.9C53.5 168.8 50.8 170.8 47.9 170.4 45.1 170 43.1 167.5 43.4 164.7L43.4 164.5 45.3 151.2 35.1 161.3C33.1 163.4 29.7 163.4 27.7 161.3 25.6 159.3 25.6 155.9 27.7 153.9L37.3 144.2 24.7 146.4 24.5 146.5C21.7 146.8 19.1 144.9 18.6 142.1 18.1 139.3 19.9 136.7 22.7 136.1L22.9 136 48.9 131.4 49.1 131.4C49.5 131.4 49.8 131.4 50.2 131.4L55.7 125.8 44.9 99.8 36.5 99.8C36.4 100 36.2 100.1 36 100.3L35.8 100.4 14.4 115.9C12.1 117.6 8.8 117.1 7.1 114.8 5.4 112.5 5.8 109.3 8 107.5L8.2 107.4 18.7 99.8 5.3 99.8C2.4 99.8 0 97.4 0 94.5 0 91.6 2.4 89.2 5.3 89.2L19 89.2 8.2 81.4 8 81.3C5.8 79.5 5.4 76.3 7.1 74 8.7 71.7 11.9 71.2 14.2 72.7L14.4 72.9 35.8 88.4 36 88.5C36.3 88.7 36.5 89 36.7 89.2L44.9 89.2 55.7 63.2 49.1 56.6C48.9 56.6 48.7 56.6 48.4 56.6L48.2 56.5 22.1 52.4C19.2 52 17.3 49.2 17.7 46.4 18.2 43.6 20.8 41.6 23.6 41.9L23.8 42 36.5 44 27.7 35.1C25.6 33.1 25.6 29.7 27.7 27.7 29.7 25.6 33.1 25.6 35.1 27.7L44.2 36.8 42.1 23.6 42.1 23.4C41.8 20.6 43.7 18 46.5 17.6 49.3 17.1 52 19 52.5 21.7L52.6 22 56.7 48 56.7 48.3C56.8 48.6 56.8 48.9 56.7 49.3L63.4 55.9 89.2 45.3 89.2 35.2C89.1 35.1 89 35 89 34.9L88.8 34.7 73.3 13.3C71.6 11 72.1 7.7 74.5 5.9 76.7 4.3 79.9 4.7 81.7 6.9L81.8 7.1 89.2 17.3 89.2 5.3C89.2 2.4 91.6 0 94.5 0ZM94.5 53.8L66.1 65.6 54.4 94 66.1 122.3 94.5 134.1 122.9 122.3 134.6 94 122.9 65.6 94.5 53.8ZM94.5 63.4L116.2 72.3 125.1 94 116.2 115.6 94.5 124.6 72.8 115.6 63.9 94 72.8 72.3 94.5 63.4ZM94 73L79.2 79.2 73 94 79.2 108.8 94 115 108.8 108.8 115 94 108.8 79.2 94 73Z" fill="').concat(e, '" /></svg>\n ')
            }
        },
        v = {
            xmasBall: function(t, r, e) {
                return '\n            <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 111 151"><path d="M54.5 0C60.9 0 66 6.7 66 15 66 18.5 64.4 21.9 61.2 25L67 25C71.4 25 75 28.6 75 33L75 43.5C96 51.4 111 71.7 111 95.5 111 126.2 86.2 151 55.5 151 24.8 151 0 126.2 0 95.5 0 71.7 15 51.4 36 43.5L36 33C36 28.6 39.6 25 44 25L47.8 25C44.6 21.9 43 18.5 43 15 43 6.7 48.1 0 54.5 0ZM78.4 66.6C84.9 81.2 86 93.7 81.8 104.1 78.5 112.4 68.8 120.9 53 129.6 70.4 136.6 90.2 128.2 97.2 110.8 104.3 93.4 95.8 73.6 78.4 66.6ZM61 30L50 30C45.7 30 42.1 33.4 42 37.8L42 38 42 41.7C46.3 40.6 50.8 40 55.5 40 60.2 40 64.7 40.6 69 41.7L69 38C69 33.6 65.4 30 61 30ZM54.5 3C49.8 3 46 8.1 46 14.5 46 18.3 48.3 21.8 52.9 25L56.1 25C60.7 21.8 63 18.3 63 14.5 63 8.1 59.2 3 54.5 3Z" fill="').concat(e, '"/></svg>\n             ')
            },
            xmasTree: function(t, r, e) {
                return '\n            <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 116 206"><path d="M58 22L99.7 92 81.3 92 110.6 141 86.5 141 116 191 68 191 68 198C68 202.4 64.4 206 60 206L57 206C52.6 206 49 202.4 49 198L49 191 0 191 29.5 141 4.5 141 33.7 92 16.3 92 58 22ZM85.2 165.6C81.7 165.6 78.8 168.4 78.8 171.9 78.8 175.4 81.7 178.3 85.2 178.3 88.7 178.3 91.5 175.4 91.5 171.9 91.5 168.4 88.7 165.6 85.2 165.6ZM29.9 165.6C26.4 165.6 23.6 168.4 23.6 171.9 23.6 175.4 26.4 178.3 29.9 178.3 33.4 178.3 36.3 175.4 36.3 171.9 36.3 168.4 33.4 165.6 29.9 165.6ZM62.5 136.5C59 136.5 56.2 139.3 56.2 142.8 56.2 146.4 59 149.2 62.5 149.2 66 149.2 68.9 146.4 68.9 142.8 68.9 139.3 66 136.5 62.5 136.5ZM36.3 111C32.7 111 29.9 113.9 29.9 117.4 29.9 120.9 32.7 123.8 36.3 123.8 39.8 123.8 42.6 120.9 42.6 117.4 42.6 113.9 39.8 111 36.3 111ZM78.8 98.3C75.3 98.3 72.5 101.2 72.5 104.7 72.5 108.2 75.3 111 78.8 111 82.3 111 85.2 108.2 85.2 104.7 85.2 101.2 82.3 98.3 78.8 98.3ZM56.2 67.4C52.7 67.4 49.8 70.3 49.8 73.8 49.8 77.3 52.7 80.2 56.2 80.2 59.7 80.2 62.5 77.3 62.5 73.8 62.5 70.3 59.7 67.4 56.2 67.4ZM58 0L61.8 7.7 70.4 9 64.2 15 65.6 23.5 58 19.5 50.4 23.5 51.8 15 45.6 9 54.2 7.7 58 0Z" fill="').concat(e, '"/></svg>\n             ')
            },
            candyCane: function(t, r, e) {
                return '\n            <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 116 125"><path d="M63.9-6C78.9-6 91 6.1 91 21.1L91 39.5C91 44.3 87.1 48.1 82.4 48.1 77.6 48.1 73.8 44.3 73.8 39.5L73.8 26.3C73.8 19.2 68 13.4 60.9 13.4 53.8 13.4 48.1 19.1 48.1 26.2 48.1 26.2 48.1 26.2 48.1 26.3L49.2 136.4C49.2 141.1 45.5 145 40.8 145 40.7 145 40.7 145 40.7 145 35.9 145 32 141.2 32 136.4L31 24.1C30.9 7.6 44.1-5.9 60.6-6L60.7-6 60.7-6 63.9-6ZM39.6 123L32.6 130 39.6 137 46.6 130 39.6 123ZM39.6 96.3L32.6 103.3 39.6 110.3 46.6 103.3 39.6 96.3ZM39.6 69.5L32.6 76.5 39.6 83.6 46.6 76.5 39.6 69.5ZM39.6 42.8L32.6 49.8 39.6 56.8 46.6 49.8 39.6 42.8ZM39.6 16L32.6 23.1 39.6 30.1 46.6 23.1 39.6 16Z" fill="').concat(e, '" transform="rotate(31 61.004 69.502)"/></svg>')
            },
            bell: function(t, r, e) {
                return '\n            <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 88 111"><path d="M60 96C60 104.3 53.3 111 45 111 36.7 111 30 104.3 30 96L30 96ZM51 21C65 21 76.4 32.4 76.4 46.5L76.4 60.3C76.4 66.8 81.3 72.1 87.7 72.7L88 72.7 88 92 0 92 0 72.7C7.7 72.7 13.9 66.5 13.9 58.8L13.9 46.9C13.9 32.6 25.5 21 39.7 21L51 21ZM45 0C50.5 0 55 4.5 55 10 55 15.5 50.5 20 45 20 39.5 20 35 15.5 35 10 35 4.5 39.5 0 45 0Z" fill="').concat(e, '"/></svg>')
            },
            flags: function(t, r, e) {
                return '\n            <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 152 53"><path d="M92 17L75.5 53 59 17 92 17ZM132.3 12.8L120.5 50.7 100 16.7 132.3 12.8ZM16.8 12L49.1 16 28.6 50 16.8 12ZM152 2.8C152 2.9 152 3.1 152 3.3 152 5.1 150.7 6.8 148.8 7.1 124.5 11.7 100.3 14 76 14 51.7 14 27.5 11.7 3.2 7.1 1.3 6.8 0 5.1 0 3.3 0 1.8 1.2 0.6 2.7 0.6 2.8 0.6 3 0.6 3.2 0.6 27.5 5.2 51.7 7.5 76 7.5 100.3 7.5 124.5 5.2 148.8 0.6 150.3 0.3 151.7 1.3 152 2.8Z" fill="').concat(e, '"/></svg>')
            }
        },
        b = {
            rhomb1: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 48 47">\n          <rect width="33" height="33" x="7.343" y="7" fill="').concat(e, '" transform="rotate(45 23.843 23.5)"/>\n        </svg>')
            },
            rhomb2: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 50 50"><path d="M24.6 0.8L49.1 25.3 24.6 49.8 0.1 25.3 24.6 0.8ZM24.6 10.7L9.8 25.5 24.6 40.4 39.5 25.5 24.6 10.7Z" fill="').concat(e, '"/></svg>')
            },
            disc: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 46 46"><path d="M23 0C35.7 0 46 10.3 46 23 46 35.7 35.7 46 23 46 10.3 46 0 35.7 0 23 0 10.3 10.3 0 23 0ZM23 7C14.2 7 7 14.2 7 23 7 31.8 14.2 39 23 39 31.8 39 39 31.8 39 23 39 14.2 31.8 7 23 7Z" fill="').concat(e, '"/></svg>')
            },
            star1: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 37 34"><polygon points="18.5 27.8 7.6 33.5 9.7 21.4 0.9 12.8 13.1 11 18.5 0 23.9 11 36.1 12.8 27.3 21.4 29.4 33.5" fill="').concat(e, '"/></svg>')
            },
            star2: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 64 60"><path d="M32 0L41.7 19.7 63.4 22.8 47.7 38.1 51.4 59.7 32 49.5 12.6 59.7 16.3 38.1 0.6 22.8 22.3 19.7 32 0ZM32 16L27 26.1 15.8 27.7 23.9 35.6 22 46.8 32 41.5 42 46.8 40.1 35.6 48.2 27.7 37 26.1 32 16Z" fill="').concat(e, '"/></svg>')
            },
            rect1: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 42 49">\n          <rect width="18" height="47" x="12" y="1" fill="').concat(e, '" transform="rotate(34 21 24.5)"/>\n        </svg>')
            },
            rect2: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 48 43">\n          <rect width="18" height="47" x="15" y="-2" fill="').concat(e, '" transform="rotate(-52 24 21.5)"/>\n        </svg>')
            }
        },
        m = {
            balloon: function(t, r, e, a) {
                return '\n       <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 43 91"><g fill="none"><polyline points="20.9 60 23.3 60 23.3 60.7 23.1 61.4 22.8 62 22.4 62.7 21.8 63.4 21.1 64 20.3 64.6 19.6 65.2 18.9 65.8 18.2 66.4 17.7 66.9 17.4 67.5 17.3 68 17.5 68.6 17.9 69.1 18.4 69.6 19.2 70.2 20.1 70.8 21.2 71.4 22.2 72 23.2 72.7 24.1 73.4 24.9 74.1 25.4 74.8 25.6 75.5 25.6 76.2 25.2 77 24.6 77.7 23.6 78.4 22.5 79.1 21.2 79.7 19.9 80.3 18.6 80.9 17.4 81.5" stroke-width="3" stroke="').concat(e, '"/><path d="M26 51.4L29.2 56.4C30.1 57.8 29.7 59.6 28.3 60.5 27.8 60.8 27.2 61 26.6 61L17.6 61C15.9 61 14.6 59.7 14.6 58 14.6 57.5 14.7 57.1 14.9 56.6L17.6 51.4 26 51.4ZM21.5 0C33.4 0 43 11.2 43 25.1 43 39 33.4 50.2 21.5 50.2 9.6 50.2 0 39 0 25.1 0 11.2 9.6 0 21.5 0ZM31.9 8.2C33.7 16.1 33.3 23.2 30.8 29.4 28.8 34.4 24 39.9 16.4 45.9 23.6 48.7 32.8 42.6 37.1 32.2 41.3 21.8 39 11 31.9 8.2Z" fill="').concat(a, '"/></g></svg>\n        ')
            },
            cake: function(t, r, e) {
                return '\n      <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 69 78"><path d="M28.5-6C32.6-6 36-2.6 36 1.5 36 4.3 34.5 6.7 32.2 8L40.1 8C43.4 8 46.1 10.7 46.1 14 46.1 14.3 46.1 14.6 46.1 14.8L45.6 18 46 18C49.3 18 52 20.7 52 24 52 24.3 51.9 24.6 51.9 24.9L51.4 28C54.4 28.4 56.7 30.9 56.7 34 56.7 34.4 56.7 34.8 56.6 35.2L49.3 72.4C49.1 73.3 48.3 74 47.4 74L9.6 74C8.7 74 7.9 73.3 7.7 72.4L-0.4 35.3C-1.1 32 0.9 28.8 4.2 28.1 4.6 28 5 28 5.4 28L5.8 28 5.3 25C4.7 21.8 6.8 18.7 10.1 18.1 10.5 18 10.8 18 11.2 18L11.5 18 11.1 14.9C10.6 11.6 12.8 8.6 16.1 8.1 16.4 8 16.7 8 17 8L24.8 8C22.5 6.7 21 4.3 21 1.5 21-2.6 24.4-6 28.5-6ZM42 51L15 51C12.2 51 10 53.2 10 56 10 58.8 12.2 61 15 61L15 61 42 61C44.8 61 47 58.8 47 56 47 53.2 44.8 51 42 51L42 51ZM42 34L15 34C12.2 34 10 36.2 10 39 10 41.8 12.2 44 15 44L15 44 42 44C44.8 44 47 41.8 47 39 47 36.2 44.8 34 42 34L42 34Z" fill="').concat(e, '" transform="rotate(-38 28.078 34)"/></svg>\n        ')
            },
            flag: function(t, r, e, a) {
                return '\n      <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 82 87"><g transform="rotate(-37 42.46 13.102)" fill="none"><rect width="4" height="73" x="6" rx="2" fill="').concat(e, '"/><path d="M5 5L46 5 46 5 24.7 19.8 46 35 5 35C2.2 35 0 32.8 0 30L0 10C0 7.2 2.2 5 5 5Z" fill="').concat(a, '"/></g></svg>\n        ')
            },
            iceCream: function(t, r, e) {
                return '\n      <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 42 87"><path d="M33 48L21.5 87 10 48 33 48ZM40 35L32 45 8.3 44.8 1 35 40 35ZM19.7 0C24.7 0 28.8 3.8 29.4 8.6 36.2 8.8 41.6 14.3 41.6 21.1 41.6 28 36 33.6 29.1 33.6 24.7 33.6 20.8 31.3 18.6 27.8 16.9 31 13.6 33.2 9.8 33.2 4.4 33.2 0 28.8 0 23.3 0 17.9 4.4 13.5 9.8 13.5 10.1 13.5 10.3 13.5 10.6 13.5 10.1 12.4 9.8 11.1 9.8 9.8 9.8 4.4 14.2 0 19.7 0ZM9.5 19.8C7.5 19.8 5.9 21.4 5.9 23.4 5.9 25.4 7.5 27 9.5 27 11.5 27 13.1 25.4 13.1 23.4 13.1 21.4 11.5 19.8 9.5 19.8ZM29.4 17.2C26.9 17.2 24.8 19.3 24.8 21.8 24.8 24.3 26.9 26.4 29.4 26.4 32 26.4 34 24.3 34 21.8 34 19.3 32 17.2 29.4 17.2ZM19 6.5C17 6.5 15.4 8.1 15.4 10.1 15.4 12.1 17 13.7 19 13.7 21 13.7 22.6 12.1 22.6 10.1 22.6 8.1 21 6.5 19 6.5Z" fill="').concat(e, '"/></svg>\n        ')
            },
            wineGlass: function(t, r, e, a) {
                return '\n      <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 75 87"><g transform="rotate(23 14.549 72.037)" fill="none"><line x1="25" x2="25" y1="42.2" y2="70.8" stroke-width="4" stroke="').concat(e, '"/><line x1="15.2" x2="33.8" y1="71" y2="71" stroke-width="3" stroke="').concat(e, '" /><path d="M42.3 21.5L24.7 45 7.2 21.5 42.3 21.5ZM49 10L41.6 19.1 6.8 18.9 0 10 49 10Z" fill="').concat(a, '"/></g></svg>\n        ')
            }
        },
        x = {
            heart: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 138 126"><path d="M69.9 11.7C85.5-3.5 110.5-3.3 126 12.2 141.5 27.7 141.6 52.7 126.5 68.3L126.5 68.3 126 68.8 69.5 125.3 69.2 125 68.9 125.3 12.3 68.8 11.9 68.3C-3.3 52.7-3.1 27.7 12.4 12.2 27.9-3.3 52.9-3.5 68.5 11.7L69 12.1 69.2 12.3 69.4 12.1Z" fill="').concat(e, '"/></svg>')
            },
            heartBalloon: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 85 126"><path d="M42.2 94C42.3 94 42.3 94 42.4 94 42.7 94.1 42.9 94.4 42.8 94.8 41.3 99.7 40.6 104.7 40.6 109.7 40.6 114.8 41.3 120 42.8 125.2 42.8 125.3 42.8 125.3 42.8 125.4 42.8 125.7 42.5 126 42.2 126 41.7 126 41.3 125.7 41.2 125.2 39.7 120.2 39 115.1 39 110 39 104.9 39.7 99.8 41.2 94.8 41.3 94.3 41.7 94 42.2 94ZM42 80L49 92 35 92 42 80ZM77.7 8.1C87.2 17.5 87.3 32.8 78.2 42.5L77.9 42.8 77.7 43.1 42.6 78.1 42.5 78.1 42.4 78.1 7.3 43.1 7.1 42.8C-2.3 33.1-2.3 17.6 7.3 8.1 16.8-1.5 32.3-1.5 42 7.9L42.3 8.2 42.5 8.4 42.7 8.2 43 7.9C52.7-1.5 68.2-1.5 77.7 8.1ZM43.6 19.8L43.3 20.1 43 20.3 42.9 20.5 42.7 20.3 42.5 20.1C36.5 14.4 27.1 14.4 21.3 20.2 15.6 26 15.5 35.2 20.9 41.1L21.2 41.4 21.4 41.6 42.9 63.1 42.9 63 42.9 63.1 64.4 41.6 64.6 41.4 64.8 41.1C70.3 35.2 70.2 26 64.4 20.2 58.7 14.5 49.5 14.4 43.6 19.8ZM53.7 29.3C56.5 32 56.6 36.4 54.1 39.2L53.9 39.4 53.8 39.6 43.4 49.9 43.3 49.8 43.3 49.9 32.9 39.6 32.8 39.4C30.1 36.6 30.2 32.1 33 29.3 35.8 26.4 40.3 26.4 43.2 29L43.3 29.2 43.3 29.2 43.4 29.2 43.5 29C46.4 26.4 50.9 26.4 53.7 29.3Z" fill="').concat(e, '"/></svg>')
            },
            heartCake: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 70 69"><path d="M64 55L64 69 8 69 8 55 64 55ZM64.9 37C67.7 37 70 39.3 70 42.1 70 42.6 69.9 43.1 69.8 43.6 69.9 44.2 70 44.8 70 45.5 70 50.2 66.2 54 61.5 54 58.7 54 56.1 52.6 54.6 50.5 53.1 52.6 50.5 54 47.7 54 44.9 54 42.5 52.7 40.9 50.6 39.4 52.7 36.9 54 34.1 54 31.5 54 29.1 52.8 27.6 50.9 26 52.8 23.7 54 21 54 18.6 54 16.3 52.9 14.8 51.2 13.2 52.9 11 54 8.5 54 3.8 54 0 50.2 0 45.5 0 44.8 0.1 44.2 0.2 43.6 0.1 43.1 0 42.6 0 42.1 0 39.3 2.3 37 5.1 37L64.9 37ZM58.9 19C61.7 19 64 21.3 64 24.1 64 24.6 63.9 25.1 63.8 25.6 63.9 26.2 64 26.8 64 27.5 64 32.2 60.2 36 55.5 36 52.8 36 50.3 34.7 48.8 32.6 47.2 34.7 44.7 36 42 36 39.4 36 37 34.8 35.5 32.9 33.9 34.8 31.6 36 29 36 26.5 36 24.3 34.9 22.7 33.2 21.2 34.9 18.9 36 16.5 36 11.8 36 8 32.2 8 27.5 8 26.8 8.1 26.2 8.2 25.6 8.1 25.1 8 24.6 8 24.1 8 21.3 10.3 19 13.1 19L58.9 19ZM44.4 1.5C46.2 3.3 46 6.4 44.1 8.6L43.9 8.8 43.7 9 43 9.8 43.6 10.4 36.8 17.2 36.1 16.6 35.5 17.2 28.6 10.4 29.3 9.8 28.6 9 28.4 8.8C26.3 6.6 26 3.3 27.9 1.5 29.7-0.4 32.9-0.1 35.2 2L35.4 2.2 36.1 2.9 36.9 2.2 37.1 2C39.4-0.1 42.6-0.4 44.4 1.5Z" fill="').concat(e, '"/></svg>')
            },
            loveKey: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 85 121"><path d="M76.9 7.3C86.2 16.6 86.5 31.6 77.6 41.1L77.3 41.4 77 41.6 46 72.7 46 92 56 92 56 99 46 99 46 103 56 103 56 110 46 110 46 114 56 114 56 121 38 121 38 119 37 119 37 70.7 8 41.6 7.7 41.4C-1.5 31.9-1.3 16.7 8.1 7.3 17.5-2.1 32.7-2.3 42.2 6.9L42.5 7.2 42.5 7.2 42.5 7.2 42.8 6.9C52.3-2.3 67.5-2.1 76.9 7.3ZM42.5 24C36.1 24 31 29.1 31 35.5 31 41.9 36.1 47 42.5 47 48.9 47 54 41.9 54 35.5 54 29.1 48.9 24 42.5 24Z" fill="').concat(e, '"/></svg>')
            },
            crown: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 90 90"><path d="M0 76L0 0 0 0 28.4 33.2 45 0 61.6 33.2 90 0 90 76C90 83.7 83.7 90 76 90L14 90C6.3 90 0 83.7 0 76Z" fill="').concat(e, '"/></svg>')
            },
            ring: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 77 92"><path d="M46.4 1.5C48.2 3.3 48 6.4 46.1 8.6L45.9 8.8 45.7 9 45 9.8 45.6 10.4 40 16C60.6 16.8 77 33.5 77 54 77 75 59.8 92 38.5 92 17.2 92 0 75 0 54 0 33.7 16 17.2 36.3 16.1L30.6 10.4 31.3 9.8 30.6 9 30.4 8.8C28.3 6.6 28 3.3 29.9 1.5 31.7-0.4 34.9-0.1 37.2 2L37.4 2.2 38.1 2.9 38.9 2.2 39.1 2C41.4-0.1 44.6-0.4 46.4 1.5ZM38.5 24.7C22.1 24.7 8.8 37.8 8.8 54 8.8 70.2 22.1 83.3 38.5 83.3 54.9 83.3 68.2 70.2 68.2 54 68.2 37.8 54.9 24.7 38.5 24.7Z" fill="').concat(e, '"/></svg>')
            },
            diamond: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 68 61"><path d="M57.2 0L68 21.7 36.2 61 0 21.7 12.8 0.1 57.2 0ZM43.6 17.7C41.5 15.6 37.8 15.8 35.2 18.2L35.2 18.2 35 18.4 33.5 19.9 32 18.4 31.8 18.2C29.2 15.8 25.5 15.6 23.4 17.7 21.2 19.8 21.5 23.6 23.9 26.2L23.9 26.2 24.1 26.4 33.4 35.7 33.5 35.7 33.6 35.7 42.9 26.4 43.1 26.2 43.3 26C45.5 23.4 45.7 19.8 43.6 17.7Z" fill="').concat(e, '"/></svg>')
            },
            flower: function(t, r, e) {
                return '\n        <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 47 125"><path d="M24.4 74C25.2 74 26 74.5 26.2 75.3 28.7 83.4 30 91.4 30 99.5 30 107.6 28.7 115.6 26.2 123.7 26 124.5 25.2 125 24.4 125 23.8 125 23.4 124.5 23.4 124 23.4 123.9 23.4 123.8 23.4 123.7 25.9 115.3 27.2 107.1 27.2 99.1 27.2 91.1 25.9 83.2 23.4 75.3 23.3 74.8 23.6 74.2 24.1 74 24.2 74 24.3 74 24.4 74ZM24 61C27.3 61 30 63.7 30 67 30 70.3 27.3 73 24 73 20.7 73 18 70.3 18 67 18 63.7 20.7 61 24 61ZM28.3 0C29.3 0 24.6 3.6 25.4 7.4 26.1 11.3 27.2 11.1 28.3 15.1 29.5 19.1 28.4 21.2 29.5 21.6 30.5 22 30.6 18.8 32.3 16.8 34 14.8 34.4 13.6 37.1 12.7 39.8 11.8 45.5 13.4 46.8 15.1 48.1 16.8 41.9 13.7 40.7 16.8 39.4 19.9 39.4 22.6 39 26.9 38.5 31.2 40.1 38.8 39 43.9 37.9 49 38.2 49.4 35.8 53 33.4 56.6 32.9 57 29.5 58.1 26 59.1 24.1 59.5 19.4 58.1 14.6 56.6 9.5 50.2 8 46.3 7.1 44.9 6.7 42.6 6.7 39.6L6.7 39.6 6.7 38.9C6.7 35 6.8 34.6 8 26.9 9.3 18.7 7.9 21.1 5.2 15.1 2.5 9.1-0.8 10.3 0.2 9.4 1.1 8.4 3.6 9.3 6.7 10.6 9.8 11.8 11 11.9 14.3 15.1 17.7 18.3 17.9 24.2 19.4 24.2 20.8 24.2 18.8 18.8 19.4 15.1 20 11.4 20.4 11.2 21.8 7.4 23.2 3.7 27.4 0 28.3 0Z" fill="').concat(e, '"/></svg>')
            }
        },
        y = {
            star1: function(t, r, e) {
                return '\n            <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 91 86"><polygon points="45.5 71.3 17.6 85.9 22.9 54.8 0.3 32.8 31.5 28.3 45.5 0 59.5 28.3 90.7 32.8 68.1 54.8 73.4 85.9" fill="').concat(e, '"/></svg>\n        ')
            },
            star2: function(t, r, e) {
                return '\n            <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 92 93"><polygon points="47.5 71.3 26.9 90.3 28.9 62.3 1.2 58.1 24.3 42.2 10.4 17.9 37.2 26.1 47.5 0 57.8 26.1 84.6 17.9 70.7 42.2 93.8 58.1 66.1 62.3 68.1 90.3" transform="rotate(8 47.5 47.5)" fill="').concat(e, '"/></svg>\n        ')
            },
            star3: function(t, r, e) {
                return '\n            <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 201 201"><path d="M100.5 0.5L105.4 90.1 127.6 72.4 109.2 95.6 200.5 100.5 110 105.4 127.6 127.6 105.4 110 100.5 200.5 95.6 109.2 72.4 127.6 90.1 105.4 0.5 100.5 90.8 95.6 72.4 72.4 95.6 90.8 100.5 0.5Z" fill="').concat(e, '"/></svg>\n        ')
            },
            star4: function(t, r, e) {
                return '\n            <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 201 201"><polygon points="100.5 107.8 29.8 171.2 93.2 100.5 29.8 29.8 100.5 93.2 171.2 29.8 107.8 100.5 171.2 171.2" transform="rotate(45 100.505 100.505)" fill="').concat(e, '"/></svg>\n        ')
            },
            star5: function(t, r, e) {
                return '\n            <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 101 101"><polygon points="50.5 65.9 0.5 100.5 35.1 50.5 0.5 0.5 50.5 35.1 100.5 0.5 65.9 50.5 100.5 100.5" fill="').concat(e, '"/></svg>\n        ')
            },
            star6: function(t, r, e) {
                return '\n            <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 207 208"><path d="M122.7 0.4L127 80.2 206.8 84.5 127 88.8 126.2 103.5 200.5 107.5 125.7 111.6 122.7 168.7 119.6 111.9 105.6 112.6 100.5 207.5 95.4 112.6 0.5 107.5 95.4 102.4 96.2 87.6 38.5 84.5 96.5 81.4 100.5 7.5 104.5 80.9 118.3 80.2 122.7 0.4ZM104.9 88.1L105.6 102.4 119.1 103.1 118.3 88.8 104.9 88.1Z" fill="').concat(e, '"/></svg>\n        ')
            },
            star7: function(t, r, e) {
                return '\n            <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 95 83"><polygon points="47.5 65.3 23.8 82.6 26.9 53.4 0 41.5 26.9 29.6 23.8 0.4 47.5 17.8 71.3 0.4 68.1 29.6 95 41.5 68.1 53.4 71.3 82.6" fill="').concat(e, '"/></svg>\n        ')
            },
            circleBlur: function(t, r, e) {
                return '\n         <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 120 120"><defs><filter id="a" width="255.6%" height="255.6%" x="-77.8%" y="-77.8%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="14"/></filter></defs><circle cx="60" cy="60" r="27" fill="').concat(e, '" filter="url(#a)"/></svg>\n        ')
            },
            star1Blur: function(t, r, e) {
                return '\n         <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 113 110"><defs><filter id="a" width="133%" height="128.3%" x="-16.5%" y="-18.9%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="6"/></filter></defs><path fill="').concat(e, '" fill-rule="evenodd" filter="url(#a)" d="M56.5 82.25L28.58 96.928l5.332-31.089-22.587-22.017 31.215-4.536L56.5 11l13.96 28.286 31.215 4.536-22.587 22.017 5.332 31.089z"/></svg>\n        ')
            },
            star4Blur: function(t, r, e) {
                return '\n         <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 211 211"><defs><filter id="a" width="121.2%" height="121.2%" x="-10.6%" y="-10.6%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceGraphic" stdDeviation="5"/></filter></defs><path fill="').concat(e, '" filter="url(#a)" transform="rotate(45 105.505 105.505)" d="M105.505 112.771l-70.711 63.444 63.445-70.71-63.445-70.711 70.711 63.445 70.71-63.445-63.444 70.711 63.444 70.71z"/></svg>\n        ')
            },
            moon: function(t, r, e) {
                return '\n         <svg xmlns="http://www.w3.org/2000/svg" width="'.concat(t, '" height="').concat(r, '" viewBox="0 0 158 200"><g fill="').concat(e, '"><path d="M81.414 5.788a87.588 87.588 0 0113.97-4.074c-35.942 21.191-52.388 65.835-36.94 106.08 15.45 40.246 57.544 62.418 98.432 54.117a87.569 87.569 0 01-13.106 6.32c-44.857 17.219-95.18-5.186-112.4-50.044-17.218-44.857 5.187-95.18 50.044-112.4z"/><path d="M106.45 61.888c-4.714-4.714-11.476-7.381-20.285-8 8.81-.62 15.57-3.286 20.285-8 4.714-4.714 7.38-11.476 8-20.285.619 8.81 3.286 15.57 8 20.285 4.714 4.714 11.475 7.38 20.284 8-8.809.619-15.57 3.286-20.284 8-4.714 4.714-7.381 11.475-8 20.284-.62-8.809-3.286-15.57-8-20.284zM125.914 118.352c-3.536-3.535-8.607-5.535-15.214-6 6.607-.464 11.678-2.464 15.214-6 3.535-3.535 5.535-8.606 6-15.213.464 6.607 2.464 11.678 6 15.213 3.535 3.536 8.606 5.536 15.213 6-6.607.465-11.678 2.465-15.213 6-3.536 3.536-5.536 8.607-6 15.214-.465-6.607-2.465-11.678-6-15.214zM86.914 105.352c-3.536-3.535-8.607-5.535-15.214-6 6.607-.464 11.678-2.464 15.214-6 3.535-3.535 5.535-8.606 6-15.213.464 6.607 2.464 11.678 6 15.213 3.535 3.536 8.606 5.536 15.213 6-6.607.465-11.678 2.465-15.213 6-3.536 3.536-5.536 8.607-6 15.214-.465-6.607-2.465-11.678-6-15.214z"/></g></svg>\n        ')
            }
        },
        M = {
            goldSparkles: [h.star80(15, "#f8ffc4"), h.star40(35, "#ffed8a"), h.star45(20, "#ffcf5f"), h.initial(10, "#bfb177"), h.star55(15, "#ffe940"), h.circle(10, "#dbbc74"), h.star30(10, "#e3d881"), h.star35(25, "#e6d65e"), h.star60(12, "#e6cb05")],
            silverSparkles: [h.star80(15, "#dbdbdb"), h.star40(35, "#fff"), h.star45(20, "#e7eff9"), h.initial(10, "#a0a0a0"), h.star55(15, "#e8e8e8"), h.circle(10, "#d7e1ec"), h.star30(10, "#f6f2f2"), h.star35(25, "#D4D4D4"), h.star60(12, "#a0a0a0")],
            colorSparkles: [h.star40(35, "#ff0000"), h.star35(25, "#00b0bf"), h.star45(15, "#0b74e5"), h.star80(12, "#f4f6f6"), h.star55(15, "#87b115"), h.initial(10, "#16d6bc"), h.star60(18, "#9de3d5"), h.circle(10, "#9b03ec"), h.star30(10, "#ECF87F")],
            blueSparkles: [h.star40(35, "#00eaff"), h.star40(35, "#0066ff"), h.star35(25, "#00b0bf"), h.initial(10, "#bcf1f3"), h.star60(18, "#1314ac"), h.star45(15, "#0077b6"), h.star80(12, "#edf0f1"), h.star55(15, "#48b8e4"), h.circle(10, "#61bdcb"), h.star30(16, "#ECF87F")],
            glitter: [h.star80(4, "#f8ffc4"), h.star40(8, "#ffed8a"), h.star40(8, "#fff"), h.star45(7, "#ffcf5f"), h.initial(6, "#bfb177"), h.initial(6, "#f6f2f2"), h.star55(7, "#ffe940"), h.circle(3, "#dbbc74"), h.star30(8, "#f8ffc4"), h.star35(8, "#fff"), h.star35(8, "#e6d65e"), h.star60(6, "#e6cb05"), h.star35(8, "#dbdbdb")],
            colorGlitter: [h.star40(8, "#ff0000"), h.star35(8, "#00b0bf"), h.star45(7, "#0b74e5"), h.star40(8, "#fff"), h.star45(7, "#12366c"), h.star55(8, "#8053ce"), h.star60(7, "#fb00ff"), h.star30(9, "#fff500"), h.star40(8, "#ffb15d"), h.star45(7, "#09cd57")],
            goldStars: [y.star1(15, 1290 / 91, "#f8ffc4"), y.star2(17, 1581 / 92, "#ffed8a"), y.star3(15, 15, "#ffcf5f"), y.star4(20, 20, "#fff"), y.star5(10, 10, "#f8ffc4"), y.star6(15, 3120 / 207, "#e6cb05"), y.star7(15, 1245 / 95, "#ffe940")],
            silverStars: [y.star1(15, 1290 / 91, "#f8f8f8"), y.star2(17, 1581 / 92, "#a5a5a5"), y.star3(15, 15, "#fff"), y.star4(20, 20, "#dbdbdb"), y.star5(10, 10, "#f8ffc4"), y.star6(15, 3120 / 207, "#959595"), y.star7(15, 1245 / 95, "#fff")],
            colorStars: [y.star1(15, 1290 / 91, "#ff0000"), y.star1(15, 1290 / 91, "#fff535"), y.star2(16, 1488 / 92, "#00d557"), y.star2(17, 1581 / 92, "#00b0bf"), y.star3(15, 15, "#fff"), y.star4(20, 20, "#fff180"), y.star5(10, 10, "#ffab00"), y.star6(15, 3120 / 207, "#31a9e5"), y.star7(12, 996 / 95, "#cb69ec")],
            blueStars: [y.star1(15, 1290 / 91, "#00eaff"), y.star1(15, 1290 / 91, "#1ab3c1"), y.star1(15, 1290 / 91, "#826ef1"), y.star2(16, 1488 / 92, "#0066ff"), y.star2(17, 1581 / 92, "#0b30b8"), y.star3(15, 15, "#fff"), y.star3(18, 18, "#fff"), y.star4(20, 20, "#cbcbcb"), y.star5(10, 10, "#9ee9fc"), y.star6(15, 3120 / 207, "#31a9e5"), y.star7(12, 996 / 95, "#7c52cd")],
            blueStars2: [y.circleBlur(15, 15, "#7bbfd4"), y.circleBlur(15, 15, "#cfecf6"), y.star4Blur(35, 35, "#fff"), y.star4(30, 30, "#eee"), y.moon(25, 5e3 / 158, "#3163a0"), h.star45(15, "#0077b6"), h.star55(15, "#48b8e4"), y.star3(18, 18, "#fff"), y.star4(20, 20, "#cbcbcb"), y.star1(15, 1290 / 91, "#00eaff"), y.star1Blur(20, 2200 / 113, "#f3fbfd"), y.star1Blur(20, 2200 / 113, "#2d50d7")],
            goldStars2: [u.spiral1(20, 920 / 51, "#ffee96"), y.star1(15, 1290 / 91, "#1ab3c1"), h.circle(8, "#fff2a8"), y.star3(18, 18, "#fff"), u.spiral3(20, 1300 / 66, "#f1b349"), y.circleBlur(15, 15, "#7bbfd4"), y.star1(15, 1290 / 91, "#f8ffc4"), y.star2(17, 1581 / 92, "#ffed8a"), y.star3(15, 15, "#ffcf5f"), h.star40(30, "#ffed8a"), h.star45(20, "#ffcf5f"), h.star55(15, "#ffe940"), y.moon(20, 4e3 / 158, "#fffb84")],
            goldRain: [w.rainLines(15, 3900 / 123, "#f8ffc4"), w.rainLines(25, 6500 / 123, "#ffed8a"), w.rainLines(20, 5200 / 123, "#ffcf5f"), w.rainLines(15, 3900 / 123, "#ffe940"), w.rainLines(10, 2600 / 123, "#bfb177")],
            silverRain: [w.rainLines(15, 3900 / 123, "#dbdbdb"), w.rainLines(25, 6500 / 123, "#fff"), w.rainLines(20, 5200 / 123, "#e7eff9"), w.rainLines(15, 3900 / 123, "#a0a0a0"), w.rainLines(10, 2600 / 123, "#e8e8e8")],
            colorRain: [w.rainLines(15, 3900 / 123, "#ff0000"), w.rainLines(25, 6500 / 123, "#12afde"), w.rainLines(20, 5200 / 123, "#1ecbb1"), w.rainLines(15, 3900 / 123, "#c0f10e"), w.rainLines(12, 3120 / 123, "#bc05c2")],
            blueRain: [w.rainLines(15, 3900 / 123, "#fff"), w.rainLines(10, 2600 / 123, "#adadad"), w.rainLines(20, 5200 / 123, "#c8ace8"), w.rainLines(12, 3120 / 123, "#16d6bc"), w.rainLines(25, 6500 / 123, "#1683d6")],
            goldDrops: [w.drop(10, 1210 / 81, "#f8ffc4"), w.drop(8, 968 / 81, "#ffed8a"), w.drop(9, 1089 / 81, "#ffcf5f"), w.drop(7, 847 / 81, "#ffe940"), w.drop(8, 968 / 81, "#bfb177")],
            silverDrops: [w.drop(10, 1210 / 81, "#dbdbdb"), w.drop(8, 968 / 81, "#fff"), w.drop(9, 1089 / 81, "#e7eff9"), w.drop(7, 847 / 81, "#a0a0a0"), w.drop(8, 968 / 81, "#e8e8e8")],
            blueDrops: [w.drop(10, 1210 / 81, "#1683d6"), w.drop(8, 968 / 81, "#6ab8f3"), w.drop(9, 1089 / 81, "#0e5a93"), w.drop(7, 847 / 81, "#4118a0"), w.drop(8, 968 / 81, "#a0ccec")],
            colorDrops: [w.drop(10, 1210 / 81, "#ff0000"), w.drop(8, 968 / 81, "#12afde"), w.drop(9, 1089 / 81, "#1ecbb1"), w.drop(9, 1089 / 81, "#bc05c2"), w.drop(8, 968 / 81, "#ffed8a")],
            goldFeather: [L.feather(30, 3270 / 71, "#ffe940"), L.feather(25, 2725 / 71, "#f8ffc4"), L.feather(35, 3815 / 71, "#ffcf5f"), L.feather(35, 3815 / 71, "#f5ea97"), L.feather(20, 2180 / 71, "#afa167")],
            leaves: [g.leave1(20, 2420 / 93, "#ffe940"), g.leave2(25, 37.5, "#f8ffc4"), g.leave3(18, 2466 / 99, "#5fff94"), g.leave4(20, 2800 / 76, "#37bdad"), C.halfRoundFlower6(17, 2873 / 192, "#ff0000"), g.leave5(25, 3975 / 121, "#afa167"), g.leave6(20, 2580 / 167, "#f8a11f")],
            flowers: [C.flower1(20, 3020 / 150, "#ffe940"), C.flower2(25, 4025 / 162, "#ff7c40"), C.flower3(25, 25, "#9fdb2f"), C.flower4(20, 20, "#ff0000"), C.flower5(25, 4025 / 163, "#f2ff79"), C.flower6(20, 3240 / 161, "#8718b6"), C.flower7(25, 3100 / 115, "#ff0000"), C.starfish(20, 3100 / 162, "#1ebcce")],
            spiral: [u.spiral1(20, 920 / 51, "#ffee96"), u.spiral2(20, 1480 / 55, "#2b86cb"), u.spiral3(25, 1625 / 66, "#f1b349"), u.spiral4(40, 3200 / 110, "#fdffcf"), h.circle(10, "#35b1de")],
            flakes1: [p.flake1(20, 20, "#fff"), p.flake2(20, 20, "#fff"), p.flake3(20, 20, "#eaeaea"), p.flake4(20, 20, "#eaeaea"), p.flake5(20, 20, "#fff"), p.flake6(25, 20, "#fff"), h.circle(5, "#dbdbdb"), h.circle(5, "#dbdbdb"), h.star40(15, "#fff")],
            flakes2: [p.flake7(20, 20, "#fff"), p.flake8(20, 20, "#e0e0e0"), p.flake9(20, 4300 / 220, "#55c5ff"), p.flake10(17, 3043 / 180, "#ec68ca"), p.flake11(20, 20, "#fff"), p.flake12(25, 25, "#fff"), u.spiral1(18, 828 / 51, "#a76cff"), h.circle(7, "#fff"), h.circle(4, "#efefef")],
            colorXmas: [v.xmasBall(18, 2718 / 111, "#ff4120"), v.xmasTree(22, 4532 / 116, "#32e750"), v.candyCane(25, 3125 / 116, "#ffbf1d"), v.bell(20, 2220 / 88, "#fff874"), v.flags(35, 1855 / 152, "#74eaff"), y.moon(25, 5e3 / 158, "#b25ffd"), p.flake7(20, 20, "#20a7ef"), h.circle(4, "#efefef"), u.spiral1(16, 736 / 51, "#ffee96")],
            blueXmas: [v.xmasBall(15, 2265 / 111, "#36d0ff"), p.flake13(25, 25, "#fff"), v.xmasBall(15, 2265 / 111, "#36ffd0"), h.circle(5, "#dbdbdb"), h.star35(25, "#3250b1"), y.star1(15, 1290 / 91, "#826ef1"), y.star3(20, 20, "#fff")],
            goldXmas: [v.xmasBall(17, 2567 / 111, "#fded78"), v.xmasBall(15, 2265 / 111, "#fdbd78"), p.flake1(18, 18, "#e3c449"), v.candyCane(25, 3125 / 116, "#a77e18"), h.circle(7, "#f6efda"), p.flake2(15, 15, "#f8ffc4"), u.spiral1(16, 736 / 51, "#ffee96"), p.flake4(20, 20, "#fff"), p.flake5(20, 20, "#fff"), y.star6(15, 3120 / 207, "#fff"), v.bell(15, 1665 / 88, "#bba44d")],
            snow1: [h.circle(7, "#fff"), p.flake7(10, 10, "#20a7ef"), y.star3(15, 15, "#fff"), y.star4(10, 10, "#dbdbdb"), h.circle(8, "#fff"), y.star5(10, 10, "#3049a0"), y.star7(10, 830 / 95, "#fff"), y.star1(15, 1290 / 91, "#00eaff"), p.flake7(10, 10, "#fff"), h.circle(7, "#fff"), y.star7(12, 996 / 95, "#7c52cd"), y.star7(10, 830 / 95, "#fff"), h.circle(7, "#fff")],
            snow2: [y.circleBlur(15, 15, "#55b1db"), y.circleBlur(10, 10, "#fff"), y.circleBlur(15, 15, "#3049a0"), y.circleBlur(7, 7, "#55b1db"), y.circleBlur(7, 7, "#fff"), y.circleBlur(15, 15, "#6955db"), y.circleBlur(15, 15, "#fff"), y.star4Blur(25, 25, "#fff"), y.star4(25, 25, "#eee"), y.circleBlur(15, 15, "#fff"), y.circleBlur(15, 15, "#17eaea")],
            snow3: [h.star45(10, "#fdf7c8"), y.circleBlur(15, 15, "#d9c65d"), h.star55(15, "#dec297"), y.circleBlur(15, 15, "#fff"), h.circle(7, "#fff"), y.circleBlur(10, 10, "#ffee6f"), p.flake2(15, 15, "#ffbe6f"), p.flake2(20, 20, "#fff"), y.circleBlur(15, 15, "#ffd84b")],
            confetti1: [h.circle(10, "#ff0000"), b.rhomb1(15, 15, "#ff00ff"), b.rhomb2(20, 20, "#eeff00"), h.circle(10, "#005eff"), b.disc(15, 15, "#a600ff"), b.star1(20, 20, "#60ff34"), b.star2(20, 20, "#ff901e"), u.spiral2(20, 1480 / 55, "#ff6d41"), u.spiral4(40, 3200 / 110, "#2b86cb"), u.spiral5(15, 825 / 28, "#ffee96"), b.rect1(17, 833 / 42, "#ffc13b"), b.rect2(20, 860 / 48, "#3bff3e")],
            confetti2: [h.circle(10, "#fdf7c8"), b.rhomb1(15, 15, "#ffdc5c"), b.disc(15, 15, "#a600ff"), b.star1(20, 20, "#fffc34"), b.star2(20, 20, "#efd490"), b.rect1(17, 833 / 42, "#c49836"), b.rect2(20, 860 / 48, "#fde4a5"), u.spiral2(20, 1480 / 55, "#c49836"), u.spiral4(30, 2400 / 110, "#c46836"), u.spiral5(15, 825 / 28, "#f39914")],
            party: [m.balloon(16, 1456 / 43, "#fad094", "#fc0d0d"), b.star1(22, 22, "#34e1ff"), b.star1(22, 22, "#ffe434"), m.balloon(18, 1638 / 43, "#fad094", "#0dfcb8"), m.balloon(18, 1638 / 43, "#fad094", "#0d65fc"), m.iceCream(20, 1740 / 42, "#ffcf8b"), m.flag(40, 3480 / 82, "#fc30b5", "#34ff78"), m.cake(25, 1950 / 69, "#b1610e"), m.wineGlass(40, 46.4, "#2b86cb", "#8eccff"), v.flags(45, 2385 / 152, "#ffe174"), u.spiral5(15, 825 / 28, "#ffee96"), h.circle(10, "#ff5353"), h.circle(10, "#ffa353")],
            eParty: ["😀", "😊", "🎁", "😝", "😜", "🎊", "🙂", "😍", "🎈", "🤩", "🎂", "🤪", "🙃", "🎉", "🍾"],
            idealLove: [x.heart(20, 2520 / 138, "#ff0000"), x.heart(15, 1890 / 138, "#ffa2da"), x.heart(20, 2520 / 138, "#fff"), x.heartBalloon(35, 4410 / 85, "#e01c92"), x.heartCake(25, 1725 / 70, "#fddd9e"), x.heart(20, 2520 / 138, "#f328de"), u.spiral3(25, 1625 / 66, "#f17e49"), u.spiral4(30, 2400 / 110, "#fdffcf", "#fde248"), x.ring(20, 1840 / 77, "#fff6f6")],
            love: [x.heart(20, 2520 / 138, "#ff0000"), x.heart(22, 2772 / 138, "#ff0000"), x.loveKey(20, 2420 / 85, "#ffa2da"), x.heart(15, 1890 / 138, "#fff"), x.heart(18, 2268 / 138, "#fff"), x.crown(15, 15, "#ffeda4"), x.diamond(22, 1342 / 68, "#b224b6"), u.spiral5(15, 825 / 28, "#ffee96"), u.spiral2(18, 1332 / 55, "#dc163e"), x.flower(15, 1875 / 47, "#ff0000")],
            goldLove: [x.heart(20, 2520 / 138, "#f8ffc4"), x.heart(20, 2520 / 138, "#ffed8a"), x.heart(20, 2520 / 138, "#ffcf5f"), x.heart(20, 2520 / 138, "#bfb177"), h.star80(4, "#f8ffc4"), h.star40(8, "#ffed8a"), h.star40(8, "#fff"), h.star45(7, "#ffcf5f"), u.spiral1(20, 920 / 51, "#ffee96"), u.spiral2(20, 1480 / 55, "#bfb177")],
            springLove: [x.heart(20, 2520 / 138, "#ff0000"), x.heart(20, 2520 / 138, "#ff0000"), x.heart(15, 1890 / 138, "#ffa2da"), x.heart(15, 1890 / 138, "#ffa2da"), x.heart(20, 2520 / 138, "#fff"), x.heart(20, 2520 / 138, "#fff"), C.flower1(20, 3020 / 150, "#ff0000"), h.star80(4, "#fff"), h.star40(8, "#facbfd"), h.star40(8, "#ffbeda"), C.flower2(25, 4025 / 162, "#ffa2da"), C.flower3(20, 20, "#9f2fdb"), C.flower5(20, 3220 / 163, "#b179ff"), C.flower4(20, 20, "#ff7ad9")]
        },
        Z = {
            goldSparkles: [h.star80(15, "#f6ff83"), h.star40(35, "#ffe77d"), h.star45(20, "#ffd052"), h.initial(10, "#bbad6d"), h.star55(15, "#ffe92f"), h.circle(10, "#dbbc74"), h.star30(10, "#f3e375"), h.star35(25, "#e8d852"), h.star60(12, "#efd300")],
            silverSparkles: [h.star80(15, "#bfbfbf"), h.star40(35, "#e8e8e8"), h.star45(20, "#c3d6e7"), h.initial(10, "#a0a0a0"), h.star55(15, "#cecece"), h.circle(10, "#a2b4c6"), h.star30(10, "#d7d3d3"), h.star35(25, "#c4c4c4"), h.star60(12, "#878686")],
            colorSparkles: [h.star40(35, "#ff0000"), h.star35(25, "#00d6e7"), h.star45(15, "#0b74e5"), h.star80(12, "#fcfc7e"), h.star55(15, "#0cbaa6"), h.initial(10, "#44fde1"), h.star60(18, "#4481ef"), h.circle(10, "#9b03ec"), h.star30(10, "#ECF87F")],
            blueSparkles: [h.star40(35, "#00daee"), h.star40(35, "#004bcb"), h.star35(25, "#009ba7"), h.initial(10, "#99fcff"), h.star60(18, "#0f10ba"), h.star45(15, "#0077b6"), h.star80(12, "#fdea79"), h.star55(15, "#5fd0ff"), h.circle(10, "#61e4ef"), h.star30(26, "#fdea79")],
            glitter: [h.star80(6, "#ffdd00"), h.star40(8, "#ffba08"), h.star40(8, "#dbdbdb"), h.star45(7, "#ffea5f"), h.initial(6, "#d0b500"), h.initial(6, "#e3d4c4"), h.star55(7, "#ffe940"), h.circle(3, "#ffbe4b"), h.star45(8, "#ffea5f"), h.star40(8, "#dbdbdb")],
            colorGlitter: [h.star40(8, "#ff0000"), h.star35(8, "#00b0bf"), h.star45(7, "#0b74e5"), h.star40(8, "#fff"), h.star45(7, "#12366c"), h.star55(8, "#8053ce"), h.star60(7, "#fb00ff"), h.star30(9, "#fff500"), h.star40(8, "#ffb15d"), h.star45(7, "#09cd57")],
            goldStars: [y.star1(17, 1462 / 91, "#ffd500"), y.star1(14, 1204 / 91, "#ffa200"), y.star1(16, 1376 / 91, "#ffe087"), y.star2(14, 1302 / 92, "#e3bd01"), y.star3(17, 17, "#cbcbcb"), y.star4(20, 20, "#c79d5b"), y.star5(12, 12, "#ffa200"), y.star6(15, 3120 / 207, "#b8a40f"), y.star7(15, 1245 / 95, "#ffd500")],
            silverStars: [y.star1(15, 1290 / 91, "#d7d7d7"), y.star2(17, 1581 / 92, "#babcc6"), y.star3(15, 15, "#eeeeee"), y.star4(20, 20, "#b6b6b6"), y.star4(20, 20, "#dcdcdc"), y.star5(10, 10, "#acbbbb"), y.star5(10, 10, "#677171"), y.star6(15, 3120 / 207, "#959595"), y.star7(15, 1245 / 95, "#444444")],
            colorStars: [y.star1(15, 1290 / 91, "#ff0000"), y.star1(15, 1290 / 91, "#ffc635"), y.star2(16, 1488 / 92, "#00d557"), y.star2(17, 1581 / 92, "#0066bf"), y.star3(15, 15, "#cb24c9"), y.star4(20, 20, "#b3681c"), y.star5(10, 10, "#ffab00"), y.star6(15, 3120 / 207, "#31a9e5"), y.star7(12, 996 / 95, "#cb69ec")],
            blueStars: [y.star1(15, 1290 / 91, "#00eaff"), y.star1(15, 1290 / 91, "#1ab3c1"), y.star1(15, 1290 / 91, "#826ef1"), y.star2(16, 1488 / 92, "#0066ff"), y.star2(15, 1395 / 92, "#0b30b8"), y.star3(15, 15, "#3ca4d5"), y.star3(18, 18, "#813fc2"), y.star4(20, 20, "#87b1e5"), y.star5(10, 10, "#9ee9fc"), y.star6(15, 3120 / 207, "#31a9e5"), y.star7(12, 996 / 95, "#7c52cd")],
            blueStars2: [y.circleBlur(15, 15, "#7bbfd4"), y.circleBlur(15, 15, "#cfecf6"), y.star4Blur(35, 35, "#c4c4c4"), y.star4(30, 30, "#8d8d8d"), y.moon(25, 5e3 / 158, "#3163a0"), h.star45(15, "#0077b6"), h.star55(15, "#48b8e4"), y.star3(18, 18, "#808080"), y.star4(20, 20, "#cbcbcb"), y.star1(15, 1290 / 91, "#00eaff"), y.star1Blur(20, 2200 / 113, "#72c9e0"), y.star1Blur(20, 2200 / 113, "#2d50d7")],
            goldStars2: [u.spiral1(20, 920 / 51, "#ffd500"), y.star1(15, 1290 / 91, "#1ab3c1"), h.circle(8, "#bb801a"), y.star3(18, 18, "#e7cb4b"), u.spiral3(20, 1300 / 66, "#fad200"), y.circleBlur(15, 15, "#fff30e"), y.star1(15, 1290 / 91, "#e0aa00"), y.star2(17, 1581 / 92, "#ffd500"), y.star3(15, 15, "#bb801a"), h.star40(27, "#ffd70e"), y.moon(20, 4e3 / 158, "#ffb700")],
            goldRain: [w.rainLines(15, 3900 / 123, "#ffd500"), w.rainLines(25, 6500 / 123, "#ffa200"), w.rainLines(20, 5200 / 123, "#ffe087"), w.rainLines(15, 3900 / 123, "#e3bd01"), w.rainLines(10, 2600 / 123, "#cbcbcb")],
            silverRain: [w.rainLines(15, 3900 / 123, "#d7d7d7"), w.rainLines(25, 6500 / 123, "#babcc6"), w.rainLines(20, 5200 / 123, "#eee"), w.rainLines(15, 3900 / 123, "#b6b6b6"), w.rainLines(10, 2600 / 123, "#444")],
            colorRain: [w.rainLines(15, 3900 / 123, "#ff0000"), w.rainLines(25, 6500 / 123, "#12afde"), w.rainLines(20, 5200 / 123, "#1ecbb1"), w.rainLines(15, 3900 / 123, "#c0f10e"), w.rainLines(12, 3120 / 123, "#bc05c2")],
            blueRain: [w.rainLines(15, 3900 / 123, "#fff"), w.rainLines(10, 2600 / 123, "#adadad"), w.rainLines(20, 5200 / 123, "#c8ace8"), w.rainLines(12, 3120 / 123, "#16d6bc"), w.rainLines(25, 6500 / 123, "#1683d6")],
            goldDrops: [w.drop(10, 1210 / 81, "#ffd500"), w.drop(8, 968 / 81, "#b8a40f"), w.drop(9, 1089 / 81, "#ffa200"), w.drop(7, 847 / 81, "#c79d5b"), w.drop(8, 968 / 81, "#cbcbcb")],
            silverDrops: [w.drop(10, 1210 / 81, "#dcdcdc"), w.drop(8, 968 / 81, "#acbbbb"), w.drop(9, 1089 / 81, "#959595"), w.drop(7, 847 / 81, "#d7d7d7"), w.drop(8, 968 / 81, "#babcc6")],
            blueDrops: [w.drop(10, 1210 / 81, "#1683d6"), w.drop(8, 968 / 81, "#6ab8f3"), w.drop(9, 1089 / 81, "#0e5a93"), w.drop(7, 847 / 81, "#4118a0"), w.drop(8, 968 / 81, "#a0ccec")],
            colorDrops: [w.drop(10, 1210 / 81, "#ff0000"), w.drop(8, 968 / 81, "#12afde"), w.drop(9, 1089 / 81, "#1ecbb1"), w.drop(9, 1089 / 81, "#bc05c2"), w.drop(8, 968 / 81, "#fab60c")],
            goldFeather: [L.feather(30, 3270 / 71, "#ead52a"), L.feather(25, 2725 / 71, "#d1fd19"), L.feather(35, 3815 / 71, "#ffc027"), L.feather(35, 3815 / 71, "#f6e350"), L.feather(20, 2180 / 71, "#afa056")],
            leaves: [g.leave1(20, 2420 / 93, "#f5de2a"), g.leave2(25, 37.5, "#edff79"), g.leave3(18, 2466 / 99, "#30d964"), g.leave4(20, 2800 / 76, "#0a9a89"), C.halfRoundFlower6(17, 2873 / 192, "#ff6600"), g.leave5(25, 3975 / 121, "#938651"), g.leave6(20, 2580 / 167, "#ff9c04")],
            flowers: [C.flower1(20, 3020 / 150, "#eed820"), C.flower2(25, 4025 / 162, "#f85d19"), C.flower3(25, 25, "#8bc412"), C.flower4(20, 20, "#ff0000"), C.flower5(25, 4025 / 163, "#eccb06"), C.flower6(20, 3240 / 161, "#a202e8"), C.flower7(25, 3100 / 115, "#ff0000"), C.starfish(20, 3100 / 162, "#07afbf")],
            spiral: [u.spiral1(20, 920 / 51, "#fadc29"), u.spiral2(20, 1480 / 55, "#1493ea"), u.spiral3(25, 1625 / 66, "#f1b349"), u.spiral4(40, 3200 / 110, "#ffe433"), h.circle(10, "#0da7b6")],
            flakes1: [p.flake1(20, 20, "#67fff9"), p.flake2(20, 20, "#38b4ef"), p.flake3(20, 20, "#e8e8e8"), p.flake4(20, 20, "#6f70ff"), p.flake5(20, 20, "#717171"), p.flake6(25, 20, "#ac92ee"), h.circle(5, "#eaeaea"), h.circle(5, "#2b95ce"), h.star40(15, "#aae6f1")],
            flakes2: [p.flake7(20, 20, "#dbdbdb"), p.flake8(20, 20, "#b6b6b6"), p.flake9(20, 4300 / 220, "#55a7ff"), p.flake10(17, 3043 / 180, "#ff2ecb"), p.flake11(20, 20, "#8faeb8"), p.flake12(25, 25, "#cd88ff"), u.spiral1(18, 828 / 51, "#6b38b6"), h.circle(7, "#e0c6e0"), h.circle(4, "#7d7d7d")],
            colorXmas: [v.xmasBall(18, 2718 / 111, "#ff5300"), v.xmasTree(22, 4532 / 116, "#07aa1e"), v.candyCane(25, 3125 / 116, "#cd9c13"), v.bell(20, 2220 / 88, "#fdf665"), v.flags(35, 1855 / 152, "#11b7f5"), y.moon(25, 5e3 / 158, "#a81fff"), p.flake7(20, 20, "#00cebe"), h.circle(4, "#e3e3e3"), u.spiral1(16, 736 / 51, "#ff9b1e")],
            blueXmas: [v.xmasBall(15, 2265 / 111, "#36d0ff"), p.flake13(25, 25, "#bbbbbb"), v.xmasBall(15, 2265 / 111, "#36ffd0"), h.circle(5, "#dbdbdb"), h.star35(25, "#3250b1"), y.star1(15, 1290 / 91, "#826ef1"), y.star3(20, 20, "#bfdcff")],
            goldXmas: [v.xmasBall(17, 2567 / 111, "#fda778"), v.xmasBall(15, 2265 / 111, "#fdbd78"), p.flake1(18, 18, "#e3c449"), v.candyCane(25, 3125 / 116, "#a77e18"), h.circle(7, "#dbb025"), p.flake2(15, 15, "#f6c107"), u.spiral1(16, 736 / 51, "#f1d337"), p.flake4(20, 20, "#ff8e16"), p.flake5(20, 20, "#ff8e16"), y.star6(15, 3120 / 207, "#ff8e16"), v.bell(15, 1665 / 88, "#eaba1b")],
            snow1: [h.circle(7, "#8d8d8d"), p.flake7(10, 10, "#20a7ef"), y.star3(15, 15, "#3d76f1"), y.star4(10, 10, "#dbdbdb"), h.circle(8, "#85afd0"), y.star5(10, 10, "#3049a0"), y.star7(10, 830 / 95, "#c1c1c1"), y.star1(15, 1290 / 91, "#00eaff"), p.flake7(10, 10, "#84b5e7"), h.circle(7, "#d0e2e0"), y.star7(12, 996 / 95, "#7c52cd"), y.star7(10, 830 / 95, "#d4cae5"), h.circle(7, "#d0e8e1")],
            snow2: [y.circleBlur(15, 15, "#55b1db"), y.circleBlur(10, 10, "#7c52cd"), y.circleBlur(15, 15, "#3049a0"), y.circleBlur(7, 7, "#55b1db"), y.circleBlur(7, 7, "#d0e2e0"), y.circleBlur(15, 15, "#6955db"), y.circleBlur(15, 15, "#85afd0"), y.star4Blur(25, 25, "#20a7ef"), y.star4(25, 25, "#eee"), y.circleBlur(15, 15, "#85afd0"), y.circleBlur(15, 15, "#17eaea")],
            snow3: [h.star45(10, "#fdf7c8"), y.circleBlur(15, 15, "#d9c65d"), h.star55(15, "#dec297"), y.circleBlur(15, 15, "#e3d140"), h.circle(7, "#bdae36"), y.circleBlur(10, 10, "#ffee6f"), p.flake2(15, 15, "#ffbe6f"), p.flake2(20, 20, "#e3a240"), y.circleBlur(15, 15, "#ffd84b")],
            confetti1: [h.circle(10, "#ff7070"), b.rhomb1(15, 15, "#ff1aff"), b.rhomb2(20, 20, "#fff200"), h.circle(10, "#1569ff"), b.disc(15, 15, "#ad18ff"), b.star1(20, 20, "#16d2ac"), b.star2(20, 20, "#ffad1e"), u.spiral2(20, 1480 / 55, "#fa663a"), u.spiral4(40, 3200 / 110, "#3e9ce5"), u.spiral5(15, 825 / 28, "#ffed7f"), b.rect1(17, 833 / 42, "#ffbf2d"), b.rect2(20, 860 / 48, "#1ef321")],
            confetti2: [h.circle(10, "#e7d43a"), b.rhomb1(15, 15, "#d9c65d"), b.disc(15, 15, "#a600ff"), b.star1(20, 20, "#dec297"), b.star2(20, 20, "#e3d140"), b.rect1(17, 833 / 42, "#bdae36"), b.rect2(20, 860 / 48, "#ffee6f"), u.spiral2(20, 1480 / 55, "#ffbe6f"), u.spiral4(30, 2400 / 110, "#c46836"), u.spiral5(15, 825 / 28, "#f39914")],
            party: [m.balloon(16, 1456 / 43, "#fad094", "#ff4d1c"), b.star1(22, 22, "#00a4fd"), b.star1(22, 22, "#ffe46b"), m.balloon(18, 1638 / 43, "#fad094", "#09e2a5"), m.balloon(18, 1638 / 43, "#fad094", "#2a4bf1"), m.iceCream(20, 1740 / 42, "#ffdd10"), m.flag(40, 3480 / 82, "#fc30b5", "#34ff78"), m.cake(25, 1950 / 69, "#ff9b0d"), m.wineGlass(40, 46.4, "#2b86cb", "#8eccff"), v.flags(45, 2385 / 152, "#f5e002"), u.spiral5(15, 825 / 28, "#ffee96"), h.circle(10, "#ff539e"), h.circle(10, "#ffba53")],
            eParty: ["😀", "😊", "🎁", "😝", "😜", "🎊", "🙂", "😍", "🎈", "🤩", "🎂", "🤪", "🙃", "🎉", "🍾"],
            idealLove: [x.heart(20, 2520 / 138, "#ff0000"), x.heart(15, 1890 / 138, "#ffa2da"), x.heart(20, 2520 / 138, "#e5c6ec"), x.heartBalloon(35, 4410 / 85, "#e01c92"), x.heartCake(25, 1725 / 70, "#fddd9e"), x.heart(20, 2520 / 138, "#f328de"), u.spiral3(25, 1625 / 66, "#f17e49"), u.spiral4(30, 2400 / 110, "#fdffcf", "#fde248"), x.ring(20, 1840 / 77, "#f5c0c0")],
            love: [x.heart(20, 2520 / 138, "#ff0000"), x.heart(22, 2772 / 138, "#ff0000"), x.loveKey(20, 2420 / 85, "#ffa2da"), x.heart(15, 1890 / 138, "#f3c3ee"), x.heart(18, 2268 / 138, "#d2d2d2"), x.crown(15, 15, "#ffe77d"), x.diamond(22, 1342 / 68, "#b224b6"), u.spiral5(15, 825 / 28, "#bbad6d"), u.spiral2(18, 1332 / 55, "#dc163e"), x.flower(15, 1875 / 47, "#ff0000")],
            goldLove: [x.heart(20, 2520 / 138, "#ffe77d"), x.heart(20, 2520 / 138, "#ffed8a"), x.heart(20, 2520 / 138, "#ffcf5f"), x.heart(20, 2520 / 138, "#bfb177"), h.star80(4, "#efd300"), h.star40(8, "#ffed8a"), h.star40(8, "#f6ff83"), h.star45(7, "#ffcf5f"), u.spiral1(20, 920 / 51, "#ffee96"), u.spiral2(20, 1480 / 55, "#bfb177")],
            springLove: [x.heart(20, 2520 / 138, "#ff0000"), x.heart(20, 2520 / 138, "#ff0000"), x.heart(15, 1890 / 138, "#ffa2da"), x.heart(15, 1890 / 138, "#ffa2da"), x.heart(20, 2520 / 138, "#8b1c89"), x.heart(20, 2520 / 138, "#ff0000"), C.flower1(20, 3020 / 150, "#ff0000"), h.star80(4, "#ffb8b8"), h.star40(8, "#facbfd"), h.star40(8, "#ffbeda"), C.flower2(25, 4025 / 162, "#ffa2da"), C.flower3(20, 20, "#9f2fdb"), C.flower5(20, 3220 / 163, "#b179ff"), C.flower4(20, 20, "#ff7ad9")]
        },
        B = {
            flash: [{
                transform: "scale(0)",
                opacity: 1
            }, {
                transform: "scale(1.5)",
                opacity: .5
            }, {
                opacity: 1
            }, {
                transform: "scale(0)",
                opacity: 0
            }],
            rotation90: [{
                transform: "scale(1) rotate(0deg)",
                opacity: 1
            }, {
                transform: "scale(1.5) rotate(45deg)",
                opacity: .5
            }, {
                transform: "scale(1) rotate(90deg)",
                opacity: 0
            }],
            rotation90n: [{
                transform: "scale(1) rotate(0deg)",
                opacity: 1
            }, {
                transform: "scale(1.5) rotate(-45deg)",
                opacity: .5
            }, {
                transform: "scale(1) rotate(-90deg)",
                opacity: 0
            }],
            rotation360: [{
                transform: "scale(1) rotate(0deg)",
                opacity: 1
            }, {
                transform: "scale(1.5) rotate(180deg)",
                opacity: .5
            }, {
                transform: "scale(1) rotate(360deg)",
                opacity: 0
            }],
            rotation360n: [{
                transform: "scale(1) rotate(0deg)",
                opacity: 1
            }, {
                transform: "scale(1.5) rotate(-180deg)",
                opacity: .5
            }, {
                transform: "scale(1) rotate(-360deg)",
                opacity: 0
            }],
            shakeX: [{
                transform: "transform: translateZ(0)",
                opacity: 1
            }, {
                transform: "translate3d(-0.3rem, 0, 0)",
                offset: "0.1"
            }, {
                transform: "translate3d(0.3rem, 0, 0)",
                offset: "0.3"
            }, {
                transform: "translate3d(-0.3rem, 0, 0)",
                offset: "0.5"
            }, {
                transform: "translate3d(0.3rem, 0, 0)",
                offset: "0.7"
            }, {
                transform: "translate3d(-0.3rem, 0, 0)",
                offset: "0.9"
            }, {
                transform: "translate3d(0.3rem, 0, 0)",
                offset: "1",
                opacity: 0
            }],
            shakeY: [{
                transform: "transform: translateZ(0)",
                opacity: 1
            }, {
                transform: "translate3d(0, -0.3rem, 0)",
                offset: "0.1"
            }, {
                transform: "translate3d(0, 0.3rem, 0)",
                offset: "0.3"
            }, {
                transform: "translate3d(0, -0.3rem, 0)",
                offset: "0.5"
            }, {
                transform: "translate3d(0, 0.3rem, 0)",
                offset: "0.7"
            }, {
                transform: "translate3d(0, -0.3rem, 0)",
                offset: "0.9"
            }, {
                transform: "translate3d(0, 0.3rem, 0)",
                offset: "1",
                opacity: 0
            }],
            shake: [{
                opacity: 1
            }, {
                transform: "translate3d(-0.3rem, -0.3rem, 0)",
                offset: "0.1"
            }, {
                transform: "translate3d(0.3rem, 0.3rem, 0)",
                offset: "0.3"
            }, {
                transform: "translate3d(-0.3rem, -0.3rem, 0)",
                offset: "0.5"
            }, {
                transform: "translate3d(0.3rem, 0.3rem, 0)",
                offset: "0.7"
            }, {
                transform: "translate3d(-0.3rem, -0.3rem, 0)",
                offset: "0.9"
            }, {
                transform: "translate3d(0.3rem, 0.3rem, 0)",
                offset: "1",
                opacity: 0
            }],
            swing: [{
                opacity: 0,
                transform: "rotate(0deg)"
            }, {
                transform: "rotate(15deg)",
                offset: .2
            }, {
                transform: "rotate(-10deg)",
                offset: .4
            }, {
                opacity: 1,
                offset: .5
            }, {
                transform: "rotate(5deg)",
                offset: .6
            }, {
                transform: "rotate(-5deg)",
                offset: .8
            }, {
                opacity: 0,
                transform: "rotate(0deg)",
                offset: 1
            }],
            down: [{
                transform: "translateY(50%)",
                opacity: 1
            }, {
                transform: "translateY(250%)",
                opacity: 0
            }],
            downScale: [{
                transform: "scale(0) translateY(50%)",
                opacity: 1
            }, {
                transform: "scale(2) translateY(350%)",
                opacity: 0
            }],
            downRotate1: [{
                transform: "translateY(50%) rotate(-25deg)",
                opacity: 1
            }, {
                transform: "translateY(250%)",
                opacity: 0
            }],
            downRotate2: [{
                transform: "rotateY(0deg)",
                opacity: 1
            }, {
                transform: "translateY(350%) rotateY(180deg)",
                opacity: 0
            }],
            leftDownScale: [{
                transform: "scale(0) translateX(0) translateY(50%)",
                opacity: 1
            }, {
                transform: "scale(2) translateX(-200%) translateY(250%)",
                opacity: 0
            }],
            rightDownScale: [{
                transform: "scale(0) translateX(0) translateY(50%) rotateY(180deg)",
                opacity: 1
            }, {
                transform: "scale(2) translateX(200%) translateY(250%) rotateY(180deg)",
                opacity: 0
            }],
            leftDown: [{
                transform: "translateX(0) translateY(50%)",
                opacity: 1
            }, {
                transform: "translateX(-200%) translateY(250%)",
                opacity: 0
            }],
            rightDown: [{
                transform: "translateX(0) translateY(50%) rotateY(180deg)",
                opacity: 1
            }, {
                transform: "translateX(200%) translateY(250%) rotateY(180deg)",
                opacity: 0
            }],
            up: [{
                transform: "translateY(-150%) rotateY(180deg) rotateZ(-25deg)",
                opacity: 1
            }, {
                transform: "translateY(-350%) rotateY(180deg)",
                opacity: 0
            }],
            wind: [{
                transform: "translateX(0) translateY(100%) rotateY(180deg)",
                opacity: 1
            }, {
                transform: "translateX(-200%) translateY(300%) rotateX(-180deg)",
                opacity: 0
            }],
            storm: [{
                transform: "translateX(0) translateY(100%) rotateY(180deg)",
                opacity: 1
            }, {
                transform: "translateX(-200%) translateY(200%) rotateX(-180deg)"
            }, {
                transform: "translateX(200%) translateY(300%) rotateX(-360deg)",
                opacity: 0
            }],
            gale: [{
                transform: "translateX(0) translateY(100%) rotateY(180deg)",
                opacity: 1
            }, {
                transform: "translateX(-200%) translateY(200%) rotateX(-180deg)"
            }, {
                transform: "translateX(200%) translateY(300%) rotateX(180deg)",
                opacity: .5
            }, {
                transform: "translateX(-200%) translateY(400%) rotateX(-180deg)",
                opacity: 0
            }],
            gust: [{
                transform: "translateX(0) translateY(50%) scale(1) rotate(0deg)",
                opacity: 1
            }, {
                transform: "translateX(100%) translateY(300%) scale(1.5) rotate(-180deg)",
                opacity: .5
            }, {
                transform: "translateX(200%) translateY(400%) scale(1) rotate(-360deg)",
                opacity: 0
            }]
        };

    function k(t, r) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(t);
            r && (a = a.filter((function(r) {
                return Object.getOwnPropertyDescriptor(t, r).enumerable
            }))), e.push.apply(e, a)
        }
        return e
    }

    function j(t) {
        for (var r = 1; r < arguments.length; r++) {
            var e = null != arguments[r] ? arguments[r] : {};
            r % 2 ? k(Object(e), !0).forEach((function(r) {
                o()(t, r, e[r])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : k(Object(e)).forEach((function(r) {
                Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
            }))
        }
        return t
    }
    var Y = null,
        S = [],
        O = [],
        E = 0,
        X = 0,
        T = {
            step: 5,
            shapesCount: 25,
            debug: !1,
            pattern: "goldSparkles",
            animationType: "flash",
            paused: !1,
            touch: !0,
            duration: 1e3,
            easing: "ease-in-out",
            theme: "dark"
        },
        P = function(t) {
            if (T.pattern = t, Array.isArray(t)) O = t;
            else {
                var r = "dark" === T.theme ? M : Z;
                O = r[t] || r.goldSparkles
            }
            S = [];
            for (var e = 0; e < T.shapesCount; e++) {
                var a = (f = 0, o = O.length - 1, Math.floor(Math.random() * (o - f + 1) + f)),
                    n = l(Y, O[a]);
                n && S.push(n)
            }
            var f, o
        },
        _ = function(t, r) {
            if (!T.paused) {
                if (X >= T.step) {
                    if (E >= 0 && E < S.length) {
                        var e = S[E],
                            a = e.getBoundingClientRect(),
                            n = a.width,
                            f = a.height;
                        e.style.left = "".concat(t - n / 2, "px"), e.style.top = "".concat(r - f / 2, "px"), e.style.display = "block",
                            function(t, r) {
                                var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3,
                                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "ease-in-out";
                                new Promise((function(n, f) {
                                    if (t) {
                                        t.jso && t.jso.cursorTrail && t.jso.cursorTrail.animation && t.jso.cursorTrail.animation.pause();
                                        var o = {
                                                duration: e,
                                                iterations: 1,
                                                fill: "forwards",
                                                easing: a
                                            },
                                            c = t.animate(r, o);
                                        t.jso.cursorTrail.animation = c, c.onfinish = function(r) {
                                            t.style.display = "none", n(c, r)
                                        }
                                    } else n()
                                }))
                            }(e, B[T.animationType], T.duration, T.easing)
                    }
                    E = 0 === E ? S.length - 1 : E - 1
                }
                X = X < T.step ? X + 1 : 0
            }
        },
        D = function() {
            var t = n()(s.a.mark((function t(r) {
                return s.a.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            "animate" in document.createElement("div") ? (T = j(j({}, T), r), Y = i(), P(T.pattern), document.addEventListener("touchmove", function() {
                                var t = n()(s.a.mark((function t(r) {
                                    var e;
                                    return s.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                T.touch && (e = r.changedTouches) && e.length > 0 && _(e[0].clientX, e[0].clientY);
                                            case 1:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(r) {
                                    return t.apply(this, arguments)
                                }
                            }()), document.addEventListener("mousemove", function() {
                                var t = n()(s.a.mark((function t(r) {
                                    return s.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                _(r.clientX, r.clientY);
                                            case 1:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(r) {
                                    return t.apply(this, arguments)
                                }
                            }())) : d(r, "Web Animation API is not supported.");
                        case 1:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })));
            return function(r) {
                return t.apply(this, arguments)
            }
        }(),
        G = !1;
    window.cursorTrail = function(t) {
        G || (G = !0, D(t))
    }, window.cursorTrail.setPattern = function(t) {
        P(t)
    }, window.cursorTrail.setEffect = function(t) {
        ! function(t) {
            T.animationType = t || "flash"
        }(t)
    }, window.cursorTrail.setTheme = function(t) {
        ! function(t) {
            "dark" !== t.trim() && "light" !== t.trim() || (T.theme = t.trim(), P(T.pattern))
        }(t)
    }, window.cursorTrail.stop = function() {
        T.paused = !0
    }, window.cursorTrail.start = function() {
        T.paused = !1
    }, window.cursorTrail.getInfo = function() {
        return (t = j({}, T)).darkPatternTypes = M, t.lightPatternTypes = Z, t.animationTypes = B, t;
        var t
    }, window.cursorTrail.shapes = {
        sparkles: h,
        rain: w,
        feather: L,
        leaves: g,
        flowers: C,
        spiral: u,
        flakes: p,
        xmas: v,
        confetti: b,
        party: m,
        love: x,
        stars: y
    }
}]);