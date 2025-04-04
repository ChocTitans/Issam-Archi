;window.Modernizr = function(a, b, c) {
    function x(a) {
        j.cssText = a
    }
    function y(a, b) {
        return x(prefixes.join(a + ";") + (b || ""))
    }
    function z(a, b) {
        return typeof a === b
    }
    function A(a, b) {
        return !!~("" + a).indexOf(b)
    }
    function B(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!A(e, "-") && j[e] !== c)
                return b == "pfx" ? e : !0
        }
        return !1
    }
    function C(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)
                return d === !1 ? a[e] : z(f, "function") ? f.bind(d || b) : f
        }
        return !1
    }
    function D(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1)
          , e = (a + " " + n.join(d + " ") + d).split(" ");
        return z(b, "string") || z(b, "undefined") ? B(e, b) : (e = (a + " " + o.join(d + " ") + d).split(" "),
        C(e, b, c))
    }
    var d = "2.6.2", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k, l = {}.toString, m = "Webkit Moz O ms", n = m.split(" "), o = m.toLowerCase().split(" "), p = {}, q = {}, r = {}, s = [], t = s.slice, u, v = {}.hasOwnProperty, w;
    !z(v, "undefined") && !z(v.call, "undefined") ? w = function(a, b) {
        return v.call(a, b)
    }
    : w = function(a, b) {
        return b in a && z(a.constructor.prototype[b], "undefined")
    }
    ,
    Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if (typeof c != "function")
            throw new TypeError;
        var d = t.call(arguments, 1)
          , e = function() {
            if (this instanceof e) {
                var a = function() {};
                a.prototype = c.prototype;
                var f = new a
                  , g = c.apply(f, d.concat(t.call(arguments)));
                return Object(g) === g ? g : f
            }
            return c.apply(b, d.concat(t.call(arguments)))
        };
        return e
    }
    ),
    p.csstransitions = function() {
        return D("transition")
    }
    ;
    for (var E in p)
        w(p, E) && (u = E.toLowerCase(),
        e[u] = p[E](),
        s.push((e[u] ? "" : "no-") + u));
    return e.addTest = function(a, b) {
        if (typeof a == "object")
            for (var d in a)
                w(a, d) && e.addTest(d, a[d]);
        else {
            a = a.toLowerCase();
            if (e[a] !== c)
                return e;
            b = typeof b == "function" ? b() : b,
            typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a),
            e[a] = b
        }
        return e
    }
    ,
    x(""),
    i = k = null,
    function(a, b) {
        function k(a, b) {
            var c = a.createElement("p")
              , d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>",
            d.insertBefore(c.lastChild, d.firstChild)
        }
        function l() {
            var a = r.elements;
            return typeof a == "string" ? a.split(" ") : a
        }
        function m(a) {
            var b = i[a[g]];
            return b || (b = {},
            h++,
            a[g] = h,
            i[h] = b),
            b
        }
        function n(a, c, f) {
            c || (c = b);
            if (j)
                return c.createElement(a);
            f || (f = m(c));
            var g;
            return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a),
            g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
        }
        function o(a, c) {
            a || (a = b);
            if (j)
                return a.createDocumentFragment();
            c = c || m(a);
            var d = c.frag.cloneNode()
              , e = 0
              , f = l()
              , g = f.length;
            for (; e < g; e++)
                d.createElement(f[e]);
            return d
        }
        function p(a, b) {
            b.cache || (b.cache = {},
            b.createElem = a.createElement,
            b.createFrag = a.createDocumentFragment,
            b.frag = b.createFrag()),
            a.createElement = function(c) {
                return r.shivMethods ? n(c, a, b) : b.createElem(c)
            }
            ,
            a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
                return b.createElem(a),
                b.frag.createElement(a),
                'c("' + a + '")'
            }) + ");return n}")(r, b.frag)
        }
        function q(a) {
            a || (a = b);
            var c = m(a);
            return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),
            j || p(a, c),
            a
        }
        var c = a.html5 || {}, d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, f, g = "_html5shiv", h = 0, i = {}, j;
        (function() {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>",
                f = "hidden"in a,
                j = a.childNodes.length == 1 || function() {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                }()
            } catch (c) {
                f = !0,
                j = !0
            }
        }
        )();
        var r = {
            elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: c.shivCSS !== !1,
            supportsUnknownElements: j,
            shivMethods: c.shivMethods !== !1,
            type: "default",
            shivDocument: q,
            createElement: n,
            createDocumentFragment: o
        };
        a.html5 = r,
        q(b)
    }(this, b),
    e._version = d,
    e._domPrefixes = o,
    e._cssomPrefixes = n,
    e.testProp = function(a) {
        return B([a])
    }
    ,
    e.testAllProps = D,
    g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + s.join(" ") : ""),
    e
}(this, this.document),
function(a, b, c) {
    function d(a) {
        return "[object Function]" == o.call(a)
    }
    function e(a) {
        return "string" == typeof a
    }
    function f() {}
    function g(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }
    function h() {
        var a = p.shift();
        q = 1,
        a ? a.t ? m(function() {
            ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(),
        h()) : q = 0
    }
    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1,
            !q && h(),
            l.onload = l.onreadystatechange = null,
            b)) {
                "img" != a && m(function() {
                    t.removeChild(l)
                }, 50);
                for (var d in y[c])
                    y[c].hasOwnProperty(d) && y[c][d].onload()
            }
        }
        var j = j || B.errorTimeout
          , l = b.createElement(a)
          , o = 0
          , r = 0
          , u = {
            t: d,
            s: c,
            e: f,
            a: i,
            x: j
        };
        1 === y[c] && (r = 1,
        y[c] = []),
        "object" == a ? l.data = c : (l.src = c,
        l.type = a),
        l.width = l.height = "0",
        l.onerror = l.onload = l.onreadystatechange = function() {
            k.call(this, r)
        }
        ,
        p.splice(e, 0, u),
        "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n),
        m(k, j)) : y[c].push(l))
    }
    function j(a, b, c, d, f) {
        return q = 0,
        b = b || "j",
        e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a),
        1 == p.length && h()),
        this
    }
    function k() {
        var a = B;
        return a.loader = {
            load: j,
            i: 0
        },
        a
    }
    var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance"in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function(a) {
        return "[object Array]" == o.call(a)
    }
    , x = [], y = {}, z = {
        timeout: function(a, b) {
            return b.length && (a.timeout = b[0]),
            a
        }
    }, A, B;
    B = function(a) {
        function b(a) {
            var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {
                url: c,
                origUrl: c,
                prefixes: a
            }, e, f, g;
            for (f = 0; f < d; f++)
                g = a[f].split("="),
                (e = z[g.shift()]) && (c = e(c, g));
            for (f = 0; f < b; f++)
                c = x[f](c);
            return c
        }
        function g(a, e, f, g, h) {
            var i = b(a)
              , j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(),
            i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]),
            i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1,
            f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout),
            (d(e) || d(j)) && f.load(function() {
                k(),
                e && e(i.origUrl, h, g),
                j && j(i.origUrl, h, g),
                y[i.url] = 2
            })))
        }
        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a))
                        c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a),
                            l()
                        }
                        ),
                        g(a, j, b, 0, h);
                    else if (Object(a) === a)
                        for (n in m = function() {
                            var b = 0, c;
                            for (c in a)
                                a.hasOwnProperty(c) && b++;
                            return b
                        }(),
                        a)
                            a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a),
                                l()
                            }
                            : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b),
                                    l()
                                }
                            }(k[n])),
                            g(a[n], j, b, n, h))
                } else
                    !c && l()
            }
            var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n;
            c(h ? a.yep : a.nope, !!i),
            i && c(i)
        }
        var i, j, l = this.yepnope.loader;
        if (e(a))
            g(a, 0, l, 0);
        else if (w(a))
            for (i = 0; i < a.length; i++)
                j = a[i],
                e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
        else
            Object(a) === a && h(a, l)
    }
    ,
    B.addPrefix = function(a, b) {
        z[a] = b
    }
    ,
    B.addFilter = function(a) {
        x.push(a)
    }
    ,
    B.errorTimeout = 1e4,
    null == b.readyState && b.addEventListener && (b.readyState = "loading",
    b.addEventListener("DOMContentLoaded", A = function() {
        b.removeEventListener("DOMContentLoaded", A, 0),
        b.readyState = "complete"
    }
    , 0)),
    a.yepnope = k(),
    a.yepnope.executeStack = h,
    a.yepnope.injectJs = function(a, c, d, e, i, j) {
        var k = b.createElement("script"), l, o, e = e || B.errorTimeout;
        k.src = a;
        for (o in d)
            k.setAttribute(o, d[o]);
        c = j ? h : c || f,
        k.onreadystatechange = k.onload = function() {
            !l && g(k.readyState) && (l = 1,
            c(),
            k.onload = k.onreadystatechange = null)
        }
        ,
        m(function() {
            l || (l = 1,
            c(1))
        }, e),
        i ? k.onload() : n.parentNode.insertBefore(k, n)
    }
    ,
    a.yepnope.injectCss = function(a, c, d, e, g, i) {
        var e = b.createElement("link"), j, c = i ? h : c || f;
        e.href = a,
        e.rel = "stylesheet",
        e.type = "text/css";
        for (j in d)
            e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n),
        m(c, 0))
    }
}(this, document),
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
}
;

jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad: function(e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad: function(e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function(e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart: function(e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function(e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function(e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function(e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function(e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function(e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    },
    easeInOutExpo: function(e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    },
    easeInCirc: function(e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc: function(e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    },
    easeOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    },
    easeInOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k / 2) == 2) {
            return e + l
        }
        if (!j) {
            j = k * (0.3 * 1.5)
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    },
    easeInBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function(e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function(e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function(e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});

/*! lightgallery - v1.2.22 - 2016-07-20
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2016 Sachin N; Licensed Apache 2.0 */
!function(a, b, c, d) {
    "use strict";
    function e(b, d) {
        if (this.el = b,
        this.$el = a(b),
        this.s = a.extend({}, f, d),
        this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length)
            throw "When using dynamic mode, you must also define dynamicEl as an Array.";
        return this.modules = {},
        this.lGalleryOn = !1,
        this.lgBusy = !1,
        this.hideBartimeout = !1,
        this.isTouch = "ontouchstart"in c.documentElement,
        this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1),
        this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = a(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(a(this.s.selector)) : this.$items = this.$el.children(),
        this.$slide = "",
        this.$outer = "",
        this.init(),
        this
    }
    var f = {
        mode: "lg-slide",
        cssEasing: "ease",
        easing: "linear",
        speed: 600,
        height: "100%",
        width: "100%",
        addClass: "",
        startClass: "lg-start-zoom",
        backdropDuration: 150,
        hideBarsDelay: 6e3,
        useLeft: !1,
        closable: !0,
        loop: !0,
        escKey: !0,
        keyPress: !0,
        controls: !0,
        slideEndAnimatoin: !0,
        hideControlOnEnd: !1,
        mousewheel: !0,
        getCaptionFromTitleOrAlt: !0,
        appendSubHtmlTo: ".lg-sub-html",
        subHtmlSelectorRelative: !1,
        preload: 1,
        showAfterLoad: !0,
        selector: "",
        selectWithin: "",
        nextHtml: "",
        prevHtml: "",
        index: !1,
        iframeMaxWidth: "100%",
        download: !0,
        counter: !0,
        appendCounterTo: ".lg-toolbar",
        swipeThreshold: 50,
        enableSwipe: !0,
        enableDrag: !0,
        dynamic: !1,
        dynamicEl: [],
        galleryId: 1
    };
    e.prototype.init = function() {
        var c = this;
        c.s.preload > c.$items.length && (c.s.preload = c.$items.length);
        var d = b.location.hash;
        d.indexOf("lg=" + this.s.galleryId) > 0 && (c.index = parseInt(d.split("&slide=")[1], 10),
        a("body").addClass("lg-from-hash"),
        a("body").hasClass("lg-on") || (setTimeout(function() {
            c.build(c.index)
        }),
        a("body").addClass("lg-on"))),
        c.s.dynamic ? (c.$el.trigger("onBeforeOpen.lg"),
        c.index = c.s.index || 0,
        a("body").hasClass("lg-on") || setTimeout(function() {
            c.build(c.index),
            a("body").addClass("lg-on")
        })) : c.$items.on("click.lgcustom", function(b) {
            try {
                b.preventDefault(),
                b.preventDefault()
            } catch (a) {
                b.returnValue = !1
            }
            c.$el.trigger("onBeforeOpen.lg"),
            c.index = c.s.index || c.$items.index(this),
            a("body").hasClass("lg-on") || (c.build(c.index),
            a("body").addClass("lg-on"))
        })
    }
    ,
    e.prototype.build = function(b) {
        var c = this;
        c.structure(),
        a.each(a.fn.lightGallery.modules, function(b) {
            c.modules[b] = new a.fn.lightGallery.modules[b](c.el)
        }),
        c.slide(b, !1, !1),
        c.s.keyPress && c.keyPress(),
        c.$items.length > 1 && (c.arrow(),
        setTimeout(function() {
            c.enableDrag(),
            c.enableSwipe()
        }, 50),
        c.s.mousewheel && c.mousewheel()),
        c.counter(),
        c.closeGallery(),
        c.$el.trigger("onAfterOpen.lg"),
        c.$outer.on("mousemove.lg click.lg touchstart.lg", function() {
            c.$outer.removeClass("lg-hide-items"),
            clearTimeout(c.hideBartimeout),
            c.hideBartimeout = setTimeout(function() {
                c.$outer.addClass("lg-hide-items")
            }, c.s.hideBarsDelay)
        })
    }
    ,
    e.prototype.structure = function() {
        var c, d = "", e = "", f = 0, g = "", h = this;
        for (a("body").append('<div class="lg-backdrop"></div>'),
        a(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"),
        f = 0; f < this.$items.length; f++)
            d += '<div class="lg-item"></div>';
        if (this.s.controls && this.$items.length > 1 && (e = '<div class="lg-actions"><div class="lg-prev lg-icon">' + this.s.prevHtml + '</div><div class="lg-next lg-icon">' + this.s.nextHtml + "</div></div>"),
        ".lg-sub-html" === this.s.appendSubHtmlTo && (g = '<div class="lg-sub-html"></div>'),
        c = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + d + '</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>' + e + g + "</div></div>",
        a("body").append(c),
        this.$outer = a(".lg-outer"),
        this.$slide = this.$outer.find(".lg-item"),
        this.s.useLeft ? (this.$outer.addClass("lg-use-left"),
        this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"),
        h.setTop(),
        a(b).on("resize.lg orientationchange.lg", function() {
            setTimeout(function() {
                h.setTop()
            }, 100)
        }),
        this.$slide.eq(this.index).addClass("lg-current"),
        this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"),
        this.s.speed = 0),
        this.$outer.addClass(this.s.mode),
        this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"),
        this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"),
        this.doCss()) {
            var i = this.$outer.find(".lg-inner");
            i.css("transition-timing-function", this.s.cssEasing),
            i.css("transition-duration", this.s.speed + "ms")
        }
        a(".lg-backdrop").addClass("in"),
        setTimeout(function() {
            h.$outer.addClass("lg-visible")
        }, this.s.backdropDuration),
        this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),
        this.prevScrollTop = a(b).scrollTop()
    }
    ,
    e.prototype.setTop = function() {
        if ("100%" !== this.s.height) {
            var c = a(b).height()
              , d = (c - parseInt(this.s.height, 10)) / 2
              , e = this.$outer.find(".lg");
            c >= parseInt(this.s.height, 10) ? e.css("top", d + "px") : e.css("top", "0px")
        }
    }
    ,
    e.prototype.doCss = function() {
        var a = function() {
            var a = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"]
              , b = c.documentElement
              , d = 0;
            for (d = 0; d < a.length; d++)
                if (a[d]in b.style)
                    return !0
        };
        return !!a()
    }
    ,
    e.prototype.isVideo = function(a, b) {
        var c;
        if (c = this.s.dynamic ? this.s.dynamicEl[b].html : this.$items.eq(b).attr("data-html"),
        !a && c)
            return {
                html5: !0
            };
        var d = a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i)
          , e = a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i)
          , f = a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i)
          , g = a.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
        return d ? {
            youtube: d
        } : e ? {
            vimeo: e
        } : f ? {
            dailymotion: f
        } : g ? {
            vk: g
        } : void 0
    }
    ,
    e.prototype.counter = function() {
        this.s.counter && a(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>")
    }
    ,
    e.prototype.addHtml = function(b) {
        var c, d, e = null;
        if (this.s.dynamic ? this.s.dynamicEl[b].subHtmlUrl ? c = this.s.dynamicEl[b].subHtmlUrl : e = this.s.dynamicEl[b].subHtml : (d = this.$items.eq(b),
        d.attr("data-sub-html-url") ? c = d.attr("data-sub-html-url") : (e = d.attr("data-sub-html"),
        this.s.getCaptionFromTitleOrAlt && !e && (e = d.attr("title") || d.find("img").first().attr("alt")))),
        !c)
            if ("undefined" != typeof e && null !== e) {
                var f = e.substring(0, 1);
                "." !== f && "#" !== f || (e = this.s.subHtmlSelectorRelative && !this.s.dynamic ? d.find(e).html() : a(e).html())
            } else
                e = "";
        ".lg-sub-html" === this.s.appendSubHtmlTo ? c ? this.$outer.find(this.s.appendSubHtmlTo).load(c) : this.$outer.find(this.s.appendSubHtmlTo).html(e) : c ? this.$slide.eq(b).load(c) : this.$slide.eq(b).append(e),
        "undefined" != typeof e && null !== e && ("" === e ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")),
        this.$el.trigger("onAfterAppendSubHtml.lg", [b])
    }
    ,
    e.prototype.preload = function(a) {
        var b = 1
          , c = 1;
        for (b = 1; b <= this.s.preload && !(b >= this.$items.length - a); b++)
            this.loadContent(a + b, !1, 0);
        for (c = 1; c <= this.s.preload && !(a - c < 0); c++)
            this.loadContent(a - c, !1, 0)
    }
    ,
    e.prototype.loadContent = function(c, d, e) {
        var f, g, h, i, j, k, l = this, m = !1, n = function(c) {
            for (var d = [], e = [], f = 0; f < c.length; f++) {
                var h = c[f].split(" ");
                "" === h[0] && h.splice(0, 1),
                e.push(h[0]),
                d.push(h[1])
            }
            for (var i = a(b).width(), j = 0; j < d.length; j++)
                if (parseInt(d[j], 10) > i) {
                    g = e[j];
                    break
                }
        };
        if (l.s.dynamic) {
            if (l.s.dynamicEl[c].poster && (m = !0,
            h = l.s.dynamicEl[c].poster),
            k = l.s.dynamicEl[c].html,
            g = l.s.dynamicEl[c].src,
            l.s.dynamicEl[c].responsive) {
                var o = l.s.dynamicEl[c].responsive.split(",");
                n(o)
            }
            i = l.s.dynamicEl[c].srcset,
            j = l.s.dynamicEl[c].sizes
        } else {
            if (l.$items.eq(c).attr("data-poster") && (m = !0,
            h = l.$items.eq(c).attr("data-poster")),
            k = l.$items.eq(c).attr("data-html"),
            g = l.$items.eq(c).attr("href") || l.$items.eq(c).attr("data-src"),
            l.$items.eq(c).attr("data-responsive")) {
                var p = l.$items.eq(c).attr("data-responsive").split(",");
                n(p)
            }
            i = l.$items.eq(c).attr("data-srcset"),
            j = l.$items.eq(c).attr("data-sizes")
        }
        var q = !1;
        l.s.dynamic ? l.s.dynamicEl[c].iframe && (q = !0) : "true" === l.$items.eq(c).attr("data-iframe") && (q = !0);
        var r = l.isVideo(g, c);
        if (!l.$slide.eq(c).hasClass("lg-loaded")) {
            if (q)
                l.$slide.eq(c).prepend('<div class="lg-video-cont" style="max-width:' + l.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + g + '"  allowfullscreen="true"></iframe></div></div>');
            else if (m) {
                var s = "";
                s = r && r.youtube ? "lg-has-youtube" : r && r.vimeo ? "lg-has-vimeo" : "lg-has-html5",
                l.$slide.eq(c).prepend('<div class="lg-video-cont ' + s + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + h + '" /></div></div>')
            } else
                r ? (l.$slide.eq(c).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'),
                l.$el.trigger("hasVideo.lg", [c, g, k])) : l.$slide.eq(c).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + g + '" /></div>');
            if (l.$el.trigger("onAferAppendSlide.lg", [c]),
            f = l.$slide.eq(c).find(".lg-object"),
            j && f.attr("sizes", j),
            i) {
                f.attr("srcset", i);
                try {
                    picturefill({
                        elements: [f[0]]
                    })
                } catch (a) {
                    console.error("Make sure you have included Picturefill version 2")
                }
            }
            ".lg-sub-html" !== this.s.appendSubHtmlTo && l.addHtml(c),
            l.$slide.eq(c).addClass("lg-loaded")
        }
        l.$slide.eq(c).find(".lg-object").on("load.lg error.lg", function() {
            var b = 0;
            e && !a("body").hasClass("lg-from-hash") && (b = e),
            setTimeout(function() {
                l.$slide.eq(c).addClass("lg-complete"),
                l.$el.trigger("onSlideItemLoad.lg", [c, e || 0])
            }, b)
        }),
        r && r.html5 && !m && l.$slide.eq(c).addClass("lg-complete"),
        d === !0 && (l.$slide.eq(c).hasClass("lg-complete") ? l.preload(c) : l.$slide.eq(c).find(".lg-object").on("load.lg error.lg", function() {
            l.preload(c)
        }))
    }
    ,
    e.prototype.slide = function(b, c, d) {
        var e = this.$outer.find(".lg-current").index()
          , f = this;
        if (!f.lGalleryOn || e !== b) {
            var g = this.$slide.length
              , h = f.lGalleryOn ? this.s.speed : 0
              , i = !1
              , j = !1;
            if (!f.lgBusy) {
                if (this.s.download) {
                    var k;
                    k = f.s.dynamic ? f.s.dynamicEl[b].downloadUrl !== !1 && (f.s.dynamicEl[b].downloadUrl || f.s.dynamicEl[b].src) : "false" !== f.$items.eq(b).attr("data-download-url") && (f.$items.eq(b).attr("data-download-url") || f.$items.eq(b).attr("href") || f.$items.eq(b).attr("data-src")),
                    k ? (a("#lg-download").attr("href", k),
                    f.$outer.removeClass("lg-hide-download")) : f.$outer.addClass("lg-hide-download")
                }
                if (this.$el.trigger("onBeforeSlide.lg", [e, b, c, d]),
                f.lgBusy = !0,
                clearTimeout(f.hideBartimeout),
                ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function() {
                    f.addHtml(b)
                }, h),
                this.arrowDisable(b),
                c) {
                    var l = b - 1
                      , m = b + 1;
                    0 === b && e === g - 1 ? (m = 0,
                    l = g - 1) : b === g - 1 && 0 === e && (m = 0,
                    l = g - 1),
                    this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"),
                    f.$slide.eq(l).addClass("lg-prev-slide"),
                    f.$slide.eq(m).addClass("lg-next-slide"),
                    f.$slide.eq(b).addClass("lg-current")
                } else
                    f.$outer.addClass("lg-no-trans"),
                    this.$slide.removeClass("lg-prev-slide lg-next-slide"),
                    b < e ? (j = !0,
                    0 !== b || e !== g - 1 || d || (j = !1,
                    i = !0)) : b > e && (i = !0,
                    b !== g - 1 || 0 !== e || d || (j = !0,
                    i = !1)),
                    j ? (this.$slide.eq(b).addClass("lg-prev-slide"),
                    this.$slide.eq(e).addClass("lg-next-slide")) : i && (this.$slide.eq(b).addClass("lg-next-slide"),
                    this.$slide.eq(e).addClass("lg-prev-slide")),
                    setTimeout(function() {
                        f.$slide.removeClass("lg-current"),
                        f.$slide.eq(b).addClass("lg-current"),
                        f.$outer.removeClass("lg-no-trans")
                    }, 50);
                f.lGalleryOn ? (setTimeout(function() {
                    f.loadContent(b, !0, 0)
                }, this.s.speed + 50),
                setTimeout(function() {
                    f.lgBusy = !1,
                    f.$el.trigger("onAfterSlide.lg", [e, b, c, d])
                }, this.s.speed)) : (f.loadContent(b, !0, f.s.backdropDuration),
                f.lgBusy = !1,
                f.$el.trigger("onAfterSlide.lg", [e, b, c, d])),
                f.lGalleryOn = !0,
                this.s.counter && a("#lg-counter-current").text(b + 1)
            }
        }
    }
    ,
    e.prototype.goToNextSlide = function(a) {
        var b = this;
        b.lgBusy || (b.index + 1 < b.$slide.length ? (b.index++,
        b.$el.trigger("onBeforeNextSlide.lg", [b.index]),
        b.slide(b.index, a, !1)) : b.s.loop ? (b.index = 0,
        b.$el.trigger("onBeforeNextSlide.lg", [b.index]),
        b.slide(b.index, a, !1)) : b.s.slideEndAnimatoin && (b.$outer.addClass("lg-right-end"),
        setTimeout(function() {
            b.$outer.removeClass("lg-right-end")
        }, 400)))
    }
    ,
    e.prototype.goToPrevSlide = function(a) {
        var b = this;
        b.lgBusy || (b.index > 0 ? (b.index--,
        b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]),
        b.slide(b.index, a, !1)) : b.s.loop ? (b.index = b.$items.length - 1,
        b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]),
        b.slide(b.index, a, !1)) : b.s.slideEndAnimatoin && (b.$outer.addClass("lg-left-end"),
        setTimeout(function() {
            b.$outer.removeClass("lg-left-end")
        }, 400)))
    }
    ,
    e.prototype.keyPress = function() {
        var c = this;
        this.$items.length > 1 && a(b).on("keyup.lg", function(a) {
            c.$items.length > 1 && (37 === a.keyCode && (a.preventDefault(),
            c.goToPrevSlide()),
            39 === a.keyCode && (a.preventDefault(),
            c.goToNextSlide()))
        }),
        a(b).on("keydown.lg", function(a) {
            c.s.escKey === !0 && 27 === a.keyCode && (a.preventDefault(),
            c.$outer.hasClass("lg-thumb-open") ? c.$outer.removeClass("lg-thumb-open") : c.destroy())
        })
    }
    ,
    e.prototype.arrow = function() {
        var a = this;
        this.$outer.find(".lg-prev").on("click.lg", function() {
            a.goToPrevSlide()
        }),
        this.$outer.find(".lg-next").on("click.lg", function() {
            a.goToNextSlide()
        })
    }
    ,
    e.prototype.arrowDisable = function(a) {
        !this.s.loop && this.s.hideControlOnEnd && (a + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"),
        a > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"))
    }
    ,
    e.prototype.setTranslate = function(a, b, c) {
        this.s.useLeft ? a.css("left", b) : a.css({
            transform: "translate3d(" + b + "px, " + c + "px, 0px)"
        })
    }
    ,
    e.prototype.touchMove = function(b, c) {
        var d = c - b;
        Math.abs(d) > 15 && (this.$outer.addClass("lg-dragging"),
        this.setTranslate(this.$slide.eq(this.index), d, 0),
        this.setTranslate(a(".lg-prev-slide"), -this.$slide.eq(this.index).width() + d, 0),
        this.setTranslate(a(".lg-next-slide"), this.$slide.eq(this.index).width() + d, 0))
    }
    ,
    e.prototype.touchEnd = function(a) {
        var b = this;
        "lg-slide" !== b.s.mode && b.$outer.addClass("lg-slide"),
        this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"),
        setTimeout(function() {
            b.$outer.removeClass("lg-dragging"),
            a < 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToNextSlide(!0) : a > 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToPrevSlide(!0) : Math.abs(a) < 5 && b.$el.trigger("onSlideClick.lg"),
            b.$slide.removeAttr("style")
        }),
        setTimeout(function() {
            b.$outer.hasClass("lg-dragging") || "lg-slide" === b.s.mode || b.$outer.removeClass("lg-slide")
        }, b.s.speed + 100)
    }
    ,
    e.prototype.enableSwipe = function() {
        var a = this
          , b = 0
          , c = 0
          , d = !1;
        a.s.enableSwipe && a.isTouch && a.doCss() && (a.$slide.on("touchstart.lg", function(c) {
            a.$outer.hasClass("lg-zoomed") || a.lgBusy || (c.preventDefault(),
            a.manageSwipeClass(),
            b = c.originalEvent.targetTouches[0].pageX)
        }),
        a.$slide.on("touchmove.lg", function(e) {
            a.$outer.hasClass("lg-zoomed") || (e.preventDefault(),
            c = e.originalEvent.targetTouches[0].pageX,
            a.touchMove(b, c),
            d = !0)
        }),
        a.$slide.on("touchend.lg", function() {
            a.$outer.hasClass("lg-zoomed") || (d ? (d = !1,
            a.touchEnd(c - b)) : a.$el.trigger("onSlideClick.lg"))
        }))
    }
    ,
    e.prototype.enableDrag = function() {
        var c = this
          , d = 0
          , e = 0
          , f = !1
          , g = !1;
        c.s.enableDrag && !c.isTouch && c.doCss() && (c.$slide.on("mousedown.lg", function(b) {
            c.$outer.hasClass("lg-zoomed") || (a(b.target).hasClass("lg-object") || a(b.target).hasClass("lg-video-play")) && (b.preventDefault(),
            c.lgBusy || (c.manageSwipeClass(),
            d = b.pageX,
            f = !0,
            c.$outer.scrollLeft += 1,
            c.$outer.scrollLeft -= 1,
            c.$outer.removeClass("lg-grab").addClass("lg-grabbing"),
            c.$el.trigger("onDragstart.lg")))
        }),
        a(b).on("mousemove.lg", function(a) {
            f && (g = !0,
            e = a.pageX,
            c.touchMove(d, e),
            c.$el.trigger("onDragmove.lg"))
        }),
        a(b).on("mouseup.lg", function(b) {
            g ? (g = !1,
            c.touchEnd(e - d),
            c.$el.trigger("onDragend.lg")) : (a(b.target).hasClass("lg-object") || a(b.target).hasClass("lg-video-play")) && c.$el.trigger("onSlideClick.lg"),
            f && (f = !1,
            c.$outer.removeClass("lg-grabbing").addClass("lg-grab"))
        }))
    }
    ,
    e.prototype.manageSwipeClass = function() {
        var a = this.index + 1
          , b = this.index - 1
          , c = this.$slide.length;
        this.s.loop && (0 === this.index ? b = c - 1 : this.index === c - 1 && (a = 0)),
        this.$slide.removeClass("lg-next-slide lg-prev-slide"),
        b > -1 && this.$slide.eq(b).addClass("lg-prev-slide"),
        this.$slide.eq(a).addClass("lg-next-slide")
    }
    ,
    e.prototype.mousewheel = function() {
        var a = this;
        a.$outer.on("mousewheel.lg", function(b) {
            b.deltaY && (b.deltaY > 0 ? a.goToPrevSlide() : a.goToNextSlide(),
            b.preventDefault())
        })
    }
    ,
    e.prototype.closeGallery = function() {
        var b = this
          , c = !1;
        this.$outer.find(".lg-close").on("click.lg", function() {
            b.destroy()
        }),
        b.s.closable && (b.$outer.on("mousedown.lg", function(b) {
            c = !!(a(b.target).is(".lg-outer") || a(b.target).is(".lg-item ") || a(b.target).is(".lg-img-wrap"))
        }),
        b.$outer.on("mouseup.lg", function(d) {
            (a(d.target).is(".lg-outer") || a(d.target).is(".lg-item ") || a(d.target).is(".lg-img-wrap") && c) && (b.$outer.hasClass("lg-dragging") || b.destroy())
        }))
    }
    ,
    e.prototype.destroy = function(c) {
        var d = this;
        c || d.$el.trigger("onBeforeClose.lg"),
        a(b).scrollTop(d.prevScrollTop),
        c && (d.s.dynamic || this.$items.off("click.lg click.lgcustom"),
        a.removeData(d.el, "lightGallery")),
        this.$el.off(".lg.tm"),
        a.each(a.fn.lightGallery.modules, function(a) {
            d.modules[a] && d.modules[a].destroy()
        }),
        this.lGalleryOn = !1,
        clearTimeout(d.hideBartimeout),
        this.hideBartimeout = !1,
        a(b).off(".lg"),
        a("body").removeClass("lg-on lg-from-hash"),
        d.$outer && d.$outer.removeClass("lg-visible"),
        a(".lg-backdrop").removeClass("in"),
        setTimeout(function() {
            d.$outer && d.$outer.remove(),
            a(".lg-backdrop").remove(),
            c || d.$el.trigger("onCloseAfter.lg")
        }, d.s.backdropDuration + 50)
    }
    ,
    a.fn.lightGallery = function(b) {
        return this.each(function() {
            if (a.data(this, "lightGallery"))
                try {
                    a(this).data("lightGallery").init()
                } catch (a) {
                    console.error("lightGallery has not initiated properly")
                }
            else
                a.data(this, "lightGallery", new e(this,b))
        })
    }
    ,
    a.fn.lightGallery.modules = {}
}(jQuery, window, document);
/*! lg-zoom - v1.0.4 - 2016-12-20
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2016 Sachin N; Licensed GPLv3 */
!function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(this, function(a) {
    !function() {
        "use strict";
        var b = function() {
            var a = !1
              , b = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
            return b && parseInt(b[2], 10) < 54 && (a = !0),
            a
        }
          , c = {
            scale: 1,
            zoom: !0,
            actualSize: !0,
            enableZoomAfter: 300,
            useLeftForZoom: b()
        }
          , d = function(b) {
            return this.core = a(b).data("lightGallery"),
            this.core.s = a.extend({}, c, this.core.s),
            this.core.s.zoom && this.core.doCss() && (this.init(),
            this.zoomabletimeout = !1,
            this.pageX = a(window).width() / 2,
            this.pageY = a(window).height() / 2 + a(window).scrollTop()),
            this
        };
        d.prototype.init = function() {
            var b = this
              , c = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
            b.core.s.actualSize && (c += '<span id="lg-actual-size" class="lg-icon"></span>'),
            b.core.s.useLeftForZoom ? b.core.$outer.addClass("lg-use-left-for-zoom") : b.core.$outer.addClass("lg-use-transition-for-zoom"),
            this.core.$outer.find(".lg-toolbar").append(c),
            b.core.$el.on("onSlideItemLoad.lg.tm.zoom", function(c, d, e) {
                var f = b.core.s.enableZoomAfter + e;
                a("body").hasClass("lg-from-hash") && e ? f = 0 : a("body").removeClass("lg-from-hash"),
                b.zoomabletimeout = setTimeout(function() {
                    b.core.$slide.eq(d).addClass("lg-zoomable")
                }, f + 30)
            });
            var d = 1
              , e = function(c) {
                var e, f, d = b.core.$outer.find(".lg-current .lg-image"), g = (a(window).width() - d.prop("offsetWidth")) / 2, h = (a(window).height() - d.prop("offsetHeight")) / 2 + a(window).scrollTop();
                e = b.pageX - g,
                f = b.pageY - h;
                var i = (c - 1) * e
                  , j = (c - 1) * f;
                d.css("transform", "scale3d(" + c + ", " + c + ", 1)").attr("data-scale", c),
                b.core.s.useLeftForZoom ? d.parent().css({
                    left: -i + "px",
                    top: -j + "px"
                }).attr("data-x", i).attr("data-y", j) : d.parent().css("transform", "translate3d(-" + i + "px, -" + j + "px, 0)").attr("data-x", i).attr("data-y", j)
            }
              , f = function() {
                d > 1 ? b.core.$outer.addClass("lg-zoomed") : b.resetZoom(),
                d < 1 && (d = 1),
                e(d)
            }
              , g = function(c, e, g, h) {
                var j, i = e.prop("offsetWidth");
                j = b.core.s.dynamic ? b.core.s.dynamicEl[g].width || e[0].naturalWidth || i : b.core.$items.eq(g).attr("data-width") || e[0].naturalWidth || i;
                var k;
                b.core.$outer.hasClass("lg-zoomed") ? d = 1 : j > i && (k = j / i,
                d = k || 2),
                h ? (b.pageX = a(window).width() / 2,
                b.pageY = a(window).height() / 2 + a(window).scrollTop()) : (b.pageX = c.pageX || c.originalEvent.targetTouches[0].pageX,
                b.pageY = c.pageY || c.originalEvent.targetTouches[0].pageY),
                f(),
                setTimeout(function() {
                    b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
                }, 10)
            }
              , h = !1;
            b.core.$el.on("onAferAppendSlide.lg.tm.zoom", function(a, c) {
                var d = b.core.$slide.eq(c).find(".lg-image");
                d.on("dblclick", function(a) {
                    g(a, d, c)
                }),
                d.on("touchstart", function(a) {
                    h ? (clearTimeout(h),
                    h = null,
                    g(a, d, c)) : h = setTimeout(function() {
                        h = null
                    }, 300),
                    a.preventDefault()
                })
            }),
            a(window).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom", function() {
                b.pageX = a(window).width() / 2,
                b.pageY = a(window).height() / 2 + a(window).scrollTop(),
                e(d)
            }),
            a("#lg-zoom-out").on("click.lg", function() {
                b.core.$outer.find(".lg-current .lg-image").length && (d -= b.core.s.scale,
                f())
            }),
            a("#lg-zoom-in").on("click.lg", function() {
                b.core.$outer.find(".lg-current .lg-image").length && (d += b.core.s.scale,
                f())
            }),
            a("#lg-actual-size").on("click.lg", function(a) {
                g(a, b.core.$slide.eq(b.core.index).find(".lg-image"), b.core.index, !0)
            }),
            b.core.$el.on("onBeforeSlide.lg.tm", function() {
                d = 1,
                b.resetZoom()
            }),
            b.core.isTouch || b.zoomDrag(),
            b.core.isTouch && b.zoomSwipe()
        }
        ,
        d.prototype.resetZoom = function() {
            this.core.$outer.removeClass("lg-zoomed"),
            this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"),
            this.core.$slide.find(".lg-image").removeAttr("style data-scale"),
            this.pageX = a(window).width() / 2,
            this.pageY = a(window).height() / 2 + a(window).scrollTop()
        }
        ,
        d.prototype.zoomSwipe = function() {
            var a = this
              , b = {}
              , c = {}
              , d = !1
              , e = !1
              , f = !1;
            a.core.$slide.on("touchstart.lg", function(c) {
                if (a.core.$outer.hasClass("lg-zoomed")) {
                    var d = a.core.$slide.eq(a.core.index).find(".lg-object");
                    f = d.prop("offsetHeight") * d.attr("data-scale") > a.core.$outer.find(".lg").height(),
                    e = d.prop("offsetWidth") * d.attr("data-scale") > a.core.$outer.find(".lg").width(),
                    (e || f) && (c.preventDefault(),
                    b = {
                        x: c.originalEvent.targetTouches[0].pageX,
                        y: c.originalEvent.targetTouches[0].pageY
                    })
                }
            }),
            a.core.$slide.on("touchmove.lg", function(g) {
                if (a.core.$outer.hasClass("lg-zoomed")) {
                    var i, j, h = a.core.$slide.eq(a.core.index).find(".lg-img-wrap");
                    g.preventDefault(),
                    d = !0,
                    c = {
                        x: g.originalEvent.targetTouches[0].pageX,
                        y: g.originalEvent.targetTouches[0].pageY
                    },
                    a.core.$outer.addClass("lg-zoom-dragging"),
                    j = f ? -Math.abs(h.attr("data-y")) + (c.y - b.y) : -Math.abs(h.attr("data-y")),
                    i = e ? -Math.abs(h.attr("data-x")) + (c.x - b.x) : -Math.abs(h.attr("data-x")),
                    (Math.abs(c.x - b.x) > 15 || Math.abs(c.y - b.y) > 15) && (a.core.s.useLeftForZoom ? h.css({
                        left: i + "px",
                        top: j + "px"
                    }) : h.css("transform", "translate3d(" + i + "px, " + j + "px, 0)"))
                }
            }),
            a.core.$slide.on("touchend.lg", function() {
                a.core.$outer.hasClass("lg-zoomed") && d && (d = !1,
                a.core.$outer.removeClass("lg-zoom-dragging"),
                a.touchendZoom(b, c, e, f))
            })
        }
        ,
        d.prototype.zoomDrag = function() {
            var b = this
              , c = {}
              , d = {}
              , e = !1
              , f = !1
              , g = !1
              , h = !1;
            b.core.$slide.on("mousedown.lg.zoom", function(d) {
                var f = b.core.$slide.eq(b.core.index).find(".lg-object");
                h = f.prop("offsetHeight") * f.attr("data-scale") > b.core.$outer.find(".lg").height(),
                g = f.prop("offsetWidth") * f.attr("data-scale") > b.core.$outer.find(".lg").width(),
                b.core.$outer.hasClass("lg-zoomed") && a(d.target).hasClass("lg-object") && (g || h) && (d.preventDefault(),
                c = {
                    x: d.pageX,
                    y: d.pageY
                },
                e = !0,
                b.core.$outer.scrollLeft += 1,
                b.core.$outer.scrollLeft -= 1,
                b.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))
            }),
            a(window).on("mousemove.lg.zoom", function(a) {
                if (e) {
                    var j, k, i = b.core.$slide.eq(b.core.index).find(".lg-img-wrap");
                    f = !0,
                    d = {
                        x: a.pageX,
                        y: a.pageY
                    },
                    b.core.$outer.addClass("lg-zoom-dragging"),
                    k = h ? -Math.abs(i.attr("data-y")) + (d.y - c.y) : -Math.abs(i.attr("data-y")),
                    j = g ? -Math.abs(i.attr("data-x")) + (d.x - c.x) : -Math.abs(i.attr("data-x")),
                    b.core.s.useLeftForZoom ? i.css({
                        left: j + "px",
                        top: k + "px"
                    }) : i.css("transform", "translate3d(" + j + "px, " + k + "px, 0)")
                }
            }),
            a(window).on("mouseup.lg.zoom", function(a) {
                e && (e = !1,
                b.core.$outer.removeClass("lg-zoom-dragging"),
                !f || c.x === d.x && c.y === d.y || (d = {
                    x: a.pageX,
                    y: a.pageY
                },
                b.touchendZoom(c, d, g, h)),
                f = !1),
                b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
            })
        }
        ,
        d.prototype.touchendZoom = function(a, b, c, d) {
            var e = this
              , f = e.core.$slide.eq(e.core.index).find(".lg-img-wrap")
              , g = e.core.$slide.eq(e.core.index).find(".lg-object")
              , h = -Math.abs(f.attr("data-x")) + (b.x - a.x)
              , i = -Math.abs(f.attr("data-y")) + (b.y - a.y)
              , j = (e.core.$outer.find(".lg").height() - g.prop("offsetHeight")) / 2
              , k = Math.abs(g.prop("offsetHeight") * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").height() + j)
              , l = (e.core.$outer.find(".lg").width() - g.prop("offsetWidth")) / 2
              , m = Math.abs(g.prop("offsetWidth") * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").width() + l);
            (Math.abs(b.x - a.x) > 15 || Math.abs(b.y - a.y) > 15) && (d && (i <= -k ? i = -k : i >= -j && (i = -j)),
            c && (h <= -m ? h = -m : h >= -l && (h = -l)),
            d ? f.attr("data-y", Math.abs(i)) : i = -Math.abs(f.attr("data-y")),
            c ? f.attr("data-x", Math.abs(h)) : h = -Math.abs(f.attr("data-x")),
            e.core.s.useLeftForZoom ? f.css({
                left: h + "px",
                top: i + "px"
            }) : f.css("transform", "translate3d(" + h + "px, " + i + "px, 0)"))
        }
        ,
        d.prototype.destroy = function() {
            var b = this;
            b.core.$el.off(".lg.zoom"),
            a(window).off(".lg.zoom"),
            b.core.$slide.off(".lg.zoom"),
            b.core.$el.off(".lg.tm.zoom"),
            b.resetZoom(),
            clearTimeout(b.zoomabletimeout),
            b.zoomabletimeout = !1
        }
        ,
        a.fn.lightGallery.modules.zoom = d
    }()
});
/*!  lightGallery video */
!function(e, o, i, l) {
    "use strict";
    var a = {
        videoMaxWidth: "855px",
        youtubePlayerParams: !1,
        vimeoPlayerParams: !1,
        dailymotionPlayerParams: !1,
        videojs: !1
    }
      , s = function(o) {
        return this.core = e(o).data("lightGallery"),
        this.$el = e(o),
        this.core.s = e.extend({}, a, this.core.s),
        this.videoLoaded = !1,
        this.init(),
        this
    };
    s.prototype.init = function() {
        var o = this;
        o.core.$el.on("hasVideo.lg.tm", function(e, i, l, a) {
            if (o.core.$slide.eq(i).find(".lg-video").append(o.loadVideo(l, "lg-object", !0, i, a)),
            a)
                if (o.core.s.videojs)
                    try {
                        videojs(o.core.$slide.eq(i).find(".lg-html5").get(0), {}, function() {
                            o.videoLoaded || this.play()
                        })
                    } catch (s) {
                        console.error("Make sure you have included videojs")
                    }
                else
                    o.core.$slide.eq(i).find(".lg-html5").get(0).play()
        }),
        o.core.$el.on("onAferAppendSlide.lg.tm", function(e, i) {
            o.core.$slide.eq(i).find(".lg-video-cont").css("max-width", o.core.s.videoMaxWidth),
            o.videoLoaded = !0
        });
        var i = function(e) {
            if (e.find(".lg-object").hasClass("lg-has-poster") && e.find(".lg-object").is(":visible"))
                if (e.hasClass("lg-has-video")) {
                    var i = e.find(".lg-youtube").get(0)
                      , l = e.find(".lg-vimeo").get(0)
                      , a = e.find(".lg-dailymotion").get(0)
                      , s = e.find(".lg-html5").get(0);
                    if (i)
                        i.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
                    else if (l)
                        try {
                            $f(l).api("play")
                        } catch (r) {
                            console.error("Make sure you have included froogaloop2 js")
                        }
                    else if (a)
                        a.contentWindow.postMessage("play", "*");
                    else if (s)
                        if (o.core.s.videojs)
                            try {
                                videojs(s).play()
                            } catch (r) {
                                console.error("Make sure you have included videojs")
                            }
                        else
                            s.play();
                    e.addClass("lg-video-palying")
                } else {
                    e.addClass("lg-video-palying lg-has-video");
                    var t, d, c = function(i, l) {
                        if (e.find(".lg-video").append(o.loadVideo(i, "", !1, o.core.index, l)),
                        l)
                            if (o.core.s.videojs)
                                try {
                                    videojs(o.core.$slide.eq(o.core.index).find(".lg-html5").get(0), {}, function() {
                                        this.play()
                                    })
                                } catch (a) {
                                    console.error("Make sure you have included videojs")
                                }
                            else
                                o.core.$slide.eq(o.core.index).find(".lg-html5").get(0).play()
                    };
                    o.core.s.dynamic ? (t = o.core.s.dynamicEl[o.core.index].src,
                    d = o.core.s.dynamicEl[o.core.index].html,
                    c(t, d)) : (t = o.core.$items.eq(o.core.index).attr("href") || o.core.$items.eq(o.core.index).attr("data-src"),
                    d = o.core.$items.eq(o.core.index).attr("data-html"),
                    c(t, d));
                    var n = e.find(".lg-object");
                    e.find(".lg-video").append(n),
                    e.find(".lg-video-object").hasClass("lg-html5") || (e.removeClass("lg-complete"),
                    e.find(".lg-video-object").on("load.lg error.lg", function() {
                        e.addClass("lg-complete")
                    }))
                }
        };
        o.core.doCss() && o.core.$items.length > 1 && (o.core.s.enableSwipe && o.core.isTouch || o.core.s.enableDrag && !o.core.isTouch) ? o.core.$el.on("onSlideClick.lg.tm", function() {
            var e = o.core.$slide.eq(o.core.index);
            i(e)
        }) : o.core.$slide.on("click.lg", function() {
            i(e(this))
        }),
        o.core.$el.on("onBeforeSlide.lg.tm", function(e, i, l) {
            var a = o.core.$slide.eq(i)
              , s = a.find(".lg-youtube").get(0)
              , r = a.find(".lg-vimeo").get(0)
              , t = a.find(".lg-dailymotion").get(0)
              , d = a.find(".lg-html5").get(0);
            if (s)
                s.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
            else if (r)
                try {
                    $f(r).api("pause")
                } catch (c) {
                    console.error("Make sure you have included froogaloop2 js")
                }
            else if (t)
                t.contentWindow.postMessage("pause", "*");
            else if (d)
                if (o.core.s.videojs)
                    try {
                        videojs(d).pause()
                    } catch (c) {
                        console.error("Make sure you have included videojs")
                    }
                else
                    d.pause();
            var n;
            n = o.core.s.dynamic ? o.core.s.dynamicEl[l].src : o.core.$items.eq(l).attr("href") || o.core.$items.eq(l).attr("data-src");
            var m = o.core.isVideo(n, l) || {};
            (m.youtube || m.vimeo || m.dailymotion) && o.core.$outer.addClass("lg-hide-download")
        }),
        o.core.$el.on("onAfterSlide.lg.tm", function(e, i) {
            o.core.$slide.eq(i).removeClass("lg-video-palying")
        })
    }
    ,
    s.prototype.loadVideo = function(o, i, l, a, s) {
        var r = ""
          , t = 1
          , d = ""
          , c = this.core.isVideo(o, a) || {};
        if (l && (t = this.videoLoaded ? 0 : 1),
        c.youtube)
            d = "?wmode=opaque&autoplay=" + t + "&enablejsapi=1",
            this.core.s.youtubePlayerParams && (d = d + "&" + e.param(this.core.s.youtubePlayerParams)),
            r = '<iframe class="lg-video-object lg-youtube ' + i + '" width="560" height="315" src="//www.youtube.com/embed/' + c.youtube[1] + d + '" frameborder="0" allowfullscreen></iframe>';
        else if (c.vimeo)
            d = "?autoplay=" + t + "&api=1",
            this.core.s.vimeoPlayerParams && (d = d + "&" + e.param(this.core.s.vimeoPlayerParams)),
            r = '<iframe class="lg-video-object lg-vimeo ' + i + '" width="560" height="315"  src="http://player.vimeo.com/video/' + c.vimeo[1] + d + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
        else if (c.dailymotion)
            d = "?wmode=opaque&autoplay=" + t + "&api=postMessage",
            this.core.s.dailymotionPlayerParams && (d = d + "&" + e.param(this.core.s.dailymotionPlayerParams)),
            r = '<iframe class="lg-video-object lg-dailymotion ' + i + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + c.dailymotion[1] + d + '" frameborder="0" allowfullscreen></iframe>';
        else if (c.html5) {
            var n = s.substring(0, 1);
            ("." === n || "#" === n) && (s = e(s).html()),
            r = s
        }
        return r
    }
    ,
    s.prototype.destroy = function() {
        this.videoLoaded = !1
    }
    ,
    e.fn.lightGallery.modules.video = s
}(jQuery, window, document);

/*!
 * Isotope PACKAGED v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */
!function(a) {
    function b() {}
    function c(a) {
        function c(b) {
            b.prototype.option || (b.prototype.option = function(b) {
                a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
            }
            )
        }
        function e(b, c) {
            a.fn[b] = function(e) {
                if ("string" == typeof e) {
                    for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                        var j = this[h]
                          , k = a.data(j, b);
                        if (k)
                            if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                var l = k[e].apply(k, g);
                                if (void 0 !== l)
                                    return l
                            } else
                                f("no such method '" + e + "' for " + b + " instance");
                        else
                            f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var d = a.data(this, b);
                    d ? (d.option(e),
                    d._init()) : (d = new c(this,e),
                    a.data(this, b, d))
                })
            }
        }
        if (a) {
            var f = "undefined" == typeof console ? b : function(a) {
                console.error(a)
            }
            ;
            return a.bridget = function(a, b) {
                c(b),
                e(a, b)
            }
            ,
            a.bridget
        }
    }
    var d = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
}(window),
function(a) {
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b,
        c
    }
    var c = document.documentElement
      , d = function() {};
    c.addEventListener ? d = function(a, b, c) {
        a.addEventListener(b, c, !1)
    }
    : c.attachEvent && (d = function(a, c, d) {
        a[c + d] = d.handleEvent ? function() {
            var c = b(a);
            d.handleEvent.call(d, c)
        }
        : function() {
            var c = b(a);
            d.call(a, c)
        }
        ,
        a.attachEvent("on" + c, a[c + d])
    }
    );
    var e = function() {};
    c.removeEventListener ? e = function(a, b, c) {
        a.removeEventListener(b, c, !1)
    }
    : c.detachEvent && (e = function(a, b, c) {
        a.detachEvent("on" + b, a[b + c]);
        try {
            delete a[b + c]
        } catch (d) {
            a[b + c] = void 0
        }
    }
    );
    var f = {
        bind: d,
        unbind: e
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
}(window),
function() {
    "use strict";
    function a() {}
    function b(a, b) {
        for (var c = a.length; c--; )
            if (a[c].listener === b)
                return c;
        return -1
    }
    function c(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }
    var d = a.prototype
      , e = this
      , f = e.EventEmitter;
    d.getListeners = function(a) {
        var b, c, d = this._getEvents();
        if (a instanceof RegExp) {
            b = {};
            for (c in d)
                d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else
            b = d[a] || (d[a] = []);
        return b
    }
    ,
    d.flattenListeners = function(a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1)
            c.push(a[b].listener);
        return c
    }
    ,
    d.getListenersAsObject = function(a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {},
        b[a] = c),
        b || c
    }
    ,
    d.addListener = function(a, c) {
        var d, e = this.getListenersAsObject(a), f = "object" == typeof c;
        for (d in e)
            e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
                listener: c,
                once: !1
            });
        return this
    }
    ,
    d.on = c("addListener"),
    d.addOnceListener = function(a, b) {
        return this.addListener(a, {
            listener: b,
            once: !0
        })
    }
    ,
    d.once = c("addOnceListener"),
    d.defineEvent = function(a) {
        return this.getListeners(a),
        this
    }
    ,
    d.defineEvents = function(a) {
        for (var b = 0; b < a.length; b += 1)
            this.defineEvent(a[b]);
        return this
    }
    ,
    d.removeListener = function(a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f)
            f.hasOwnProperty(e) && (d = b(f[e], c),
            -1 !== d && f[e].splice(d, 1));
        return this
    }
    ,
    d.off = c("removeListener"),
    d.addListeners = function(a, b) {
        return this.manipulateListeners(!1, a, b)
    }
    ,
    d.removeListeners = function(a, b) {
        return this.manipulateListeners(!0, a, b)
    }
    ,
    d.manipulateListeners = function(a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener, g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
            for (d = c.length; d--; )
                f.call(this, b, c[d]);
        else
            for (d in b)
                b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }
    ,
    d.removeEvent = function(a) {
        var b, c = typeof a, d = this._getEvents();
        if ("string" === c)
            delete d[a];
        else if (a instanceof RegExp)
            for (b in d)
                d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else
            delete this._events;
        return this
    }
    ,
    d.removeAllListeners = c("removeEvent"),
    d.emitEvent = function(a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g)
            if (g.hasOwnProperty(e))
                for (d = g[e].length; d--; )
                    c = g[e][d],
                    c.once === !0 && this.removeListener(a, c.listener),
                    f = c.listener.apply(this, b || []),
                    f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }
    ,
    d.trigger = c("emitEvent"),
    d.emit = function(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }
    ,
    d.setOnceReturnValue = function(a) {
        return this._onceReturnValue = a,
        this
    }
    ,
    d._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }
    ,
    d._getEvents = function() {
        return this._events || (this._events = {})
    }
    ,
    a.noConflict = function() {
        return e.EventEmitter = f,
        a
    }
    ,
    "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
}
.call(this),
function(a) {
    function b(a) {
        if (a) {
            if ("string" == typeof d[a])
                return a;
            a = a.charAt(0).toUpperCase() + a.slice(1);
            for (var b, e = 0, f = c.length; f > e; e++)
                if (b = c[e] + a,
                "string" == typeof d[b])
                    return b
        }
    }
    var c = "Webkit Moz ms Ms O".split(" ")
      , d = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
        return b
    }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
}(window),
function(a, b) {
    function c(a) {
        var b = parseFloat(a)
          , c = -1 === a.indexOf("%") && !isNaN(b);
        return c && b
    }
    function d() {}
    function e() {
        for (var a = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, b = 0, c = h.length; c > b; b++) {
            var d = h[b];
            a[d] = 0
        }
        return a
    }
    function f(b) {
        function d() {
            if (!m) {
                m = !0;
                var d = a.getComputedStyle;
                if (j = function() {
                    var a = d ? function(a) {
                        return d(a, null)
                    }
                    : function(a) {
                        return a.currentStyle
                    }
                    ;
                    return function(b) {
                        var c = a(b);
                        return c || g("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),
                        c
                    }
                }(),
                k = b("boxSizing")) {
                    var e = document.createElement("div");
                    e.style.width = "200px",
                    e.style.padding = "1px 2px 3px 4px",
                    e.style.borderStyle = "solid",
                    e.style.borderWidth = "1px 2px 3px 4px",
                    e.style[k] = "border-box";
                    var f = document.body || document.documentElement;
                    f.appendChild(e);
                    var h = j(e);
                    l = 200 === c(h.width),
                    f.removeChild(e)
                }
            }
        }
        function f(a) {
            if (d(),
            "string" == typeof a && (a = document.querySelector(a)),
            a && "object" == typeof a && a.nodeType) {
                var b = j(a);
                if ("none" === b.display)
                    return e();
                var f = {};
                f.width = a.offsetWidth,
                f.height = a.offsetHeight;
                for (var g = f.isBorderBox = !(!k || !b[k] || "border-box" !== b[k]), m = 0, n = h.length; n > m; m++) {
                    var o = h[m]
                      , p = b[o];
                    p = i(a, p);
                    var q = parseFloat(p);
                    f[o] = isNaN(q) ? 0 : q
                }
                var r = f.paddingLeft + f.paddingRight
                  , s = f.paddingTop + f.paddingBottom
                  , t = f.marginLeft + f.marginRight
                  , u = f.marginTop + f.marginBottom
                  , v = f.borderLeftWidth + f.borderRightWidth
                  , w = f.borderTopWidth + f.borderBottomWidth
                  , x = g && l
                  , y = c(b.width);
                y !== !1 && (f.width = y + (x ? 0 : r + v));
                var z = c(b.height);
                return z !== !1 && (f.height = z + (x ? 0 : s + w)),
                f.innerWidth = f.width - (r + v),
                f.innerHeight = f.height - (s + w),
                f.outerWidth = f.width + t,
                f.outerHeight = f.height + u,
                f
            }
        }
        function i(b, c) {
            if (a.getComputedStyle || -1 === c.indexOf("%"))
                return c;
            var d = b.style
              , e = d.left
              , f = b.runtimeStyle
              , g = f && f.left;
            return g && (f.left = b.currentStyle.left),
            d.left = c,
            c = d.pixelLeft,
            d.left = e,
            g && (f.left = g),
            c
        }
        var j, k, l, m = !1;
        return f
    }
    var g = "undefined" == typeof console ? d : function(a) {
        console.error(a)
    }
      , h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], f) : "object" == typeof exports ? module.exports = f(require("desandro-get-style-property")) : a.getSize = f(a.getStyleProperty)
}(window),
function(a) {
    function b(a) {
        "function" == typeof a && (b.isReady ? a() : g.push(a))
    }
    function c(a) {
        var c = "readystatechange" === a.type && "complete" !== f.readyState;
        b.isReady || c || d()
    }
    function d() {
        b.isReady = !0;
        for (var a = 0, c = g.length; c > a; a++) {
            var d = g[a];
            d()
        }
    }
    function e(e) {
        return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c),
        e.bind(f, "readystatechange", c),
        e.bind(a, "load", c)),
        b
    }
    var f = a.document
      , g = [];
    b.isReady = !1,
    "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
}(window),
function(a) {
    "use strict";
    function b(a, b) {
        return a[g](b)
    }
    function c(a) {
        if (!a.parentNode) {
            var b = document.createDocumentFragment();
            b.appendChild(a)
        }
    }
    function d(a, b) {
        c(a);
        for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)
            if (d[e] === a)
                return !0;
        return !1
    }
    function e(a, d) {
        return c(a),
        b(a, d)
    }
    var f, g = function() {
        if (a.matches)
            return "matches";
        if (a.matchesSelector)
            return "matchesSelector";
        for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
            var e = b[c]
              , f = e + "MatchesSelector";
            if (a[f])
                return f
        }
    }();
    if (g) {
        var h = document.createElement("div")
          , i = b(h, "div");
        f = i ? b : e
    } else
        f = d;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
        return f
    }) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f
}(Element.prototype),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(c, d) {
        return b(a, c, d)
    }) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector)
}(window, function(a, b, c) {
    var d = {};
    d.extend = function(a, b) {
        for (var c in b)
            a[c] = b[c];
        return a
    }
    ,
    d.modulo = function(a, b) {
        return (a % b + b) % b
    }
    ;
    var e = Object.prototype.toString;
    d.isArray = function(a) {
        return "[object Array]" == e.call(a)
    }
    ,
    d.makeArray = function(a) {
        var b = [];
        if (d.isArray(a))
            b = a;
        else if (a && "number" == typeof a.length)
            for (var c = 0, e = a.length; e > c; c++)
                b.push(a[c]);
        else
            b.push(a);
        return b
    }
    ,
    d.indexOf = Array.prototype.indexOf ? function(a, b) {
        return a.indexOf(b)
    }
    : function(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            if (a[c] === b)
                return c;
        return -1
    }
    ,
    d.removeFrom = function(a, b) {
        var c = d.indexOf(a, b);
        -1 != c && a.splice(c, 1)
    }
    ,
    d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(a) {
        return a instanceof HTMLElement
    }
    : function(a) {
        return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName
    }
    ,
    d.setText = function() {
        function a(a, c) {
            b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"),
            a[b] = c
        }
        var b;
        return a
    }(),
    d.getParent = function(a, b) {
        for (; a != document.body; )
            if (a = a.parentNode,
            c(a, b))
                return a
    }
    ,
    d.getQueryElement = function(a) {
        return "string" == typeof a ? document.querySelector(a) : a
    }
    ,
    d.handleEvent = function(a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }
    ,
    d.filterFindElements = function(a, b) {
        a = d.makeArray(a);
        for (var e = [], f = 0, g = a.length; g > f; f++) {
            var h = a[f];
            if (d.isElement(h))
                if (b) {
                    c(h, b) && e.push(h);
                    for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++)
                        e.push(i[j])
                } else
                    e.push(h)
        }
        return e
    }
    ,
    d.debounceMethod = function(a, b, c) {
        var d = a.prototype[b]
          , e = b + "Timeout";
        a.prototype[b] = function() {
            var a = this[e];
            a && clearTimeout(a);
            var b = arguments
              , f = this;
            this[e] = setTimeout(function() {
                d.apply(f, b),
                delete f[e]
            }, c || 100)
        }
    }
    ,
    d.toDashed = function(a) {
        return a.replace(/(.)([A-Z])/g, function(a, b, c) {
            return b + "-" + c
        }).toLowerCase()
    }
    ;
    var f = a.console;
    return d.htmlInit = function(c, e) {
        b(function() {
            for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
                var k, l = g[i], m = l.getAttribute(h);
                try {
                    k = m && JSON.parse(m)
                } catch (n) {
                    f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + n);
                    continue
                }
                var o = new c(l,k)
                  , p = a.jQuery;
                p && p.data(l, e, o)
            }
        })
    }
    ,
    d
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(c, d, e, f) {
        return b(a, c, d, e, f)
    }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {},
    a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils))
}(window, function(a, b, c, d, e) {
    "use strict";
    function f(a) {
        for (var b in a)
            return !1;
        return b = null,
        !0
    }
    function g(a, b) {
        a && (this.element = a,
        this.layout = b,
        this.position = {
            x: 0,
            y: 0
        },
        this._create())
    }
    function h(a) {
        return a.replace(/([A-Z])/g, function(a) {
            return "-" + a.toLowerCase()
        })
    }
    var i = a.getComputedStyle
      , j = i ? function(a) {
        return i(a, null)
    }
    : function(a) {
        return a.currentStyle
    }
      , k = d("transition")
      , l = d("transform")
      , m = k && l
      , n = !!d("perspective")
      , o = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "otransitionend",
        transition: "transitionend"
    }[k]
      , p = ["transform", "transition", "transitionDuration", "transitionProperty"]
      , q = function() {
        for (var a = {}, b = 0, c = p.length; c > b; b++) {
            var e = p[b]
              , f = d(e);
            f && f !== e && (a[e] = f)
        }
        return a
    }();
    e.extend(g.prototype, b.prototype),
    g.prototype._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        },
        this.css({
            position: "absolute"
        })
    }
    ,
    g.prototype.handleEvent = function(a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }
    ,
    g.prototype.getSize = function() {
        this.size = c(this.element)
    }
    ,
    g.prototype.css = function(a) {
        var b = this.element.style;
        for (var c in a) {
            var d = q[c] || c;
            b[d] = a[c]
        }
    }
    ,
    g.prototype.getPosition = function() {
        var a = j(this.element)
          , b = this.layout.options
          , c = b.isOriginLeft
          , d = b.isOriginTop
          , e = a[c ? "left" : "right"]
          , f = a[d ? "top" : "bottom"]
          , g = this.layout.size
          , h = -1 != e.indexOf("%") ? parseFloat(e) / 100 * g.width : parseInt(e, 10)
          , i = -1 != f.indexOf("%") ? parseFloat(f) / 100 * g.height : parseInt(f, 10);
        h = isNaN(h) ? 0 : h,
        i = isNaN(i) ? 0 : i,
        h -= c ? g.paddingLeft : g.paddingRight,
        i -= d ? g.paddingTop : g.paddingBottom,
        this.position.x = h,
        this.position.y = i
    }
    ,
    g.prototype.layoutPosition = function() {
        var a = this.layout.size
          , b = this.layout.options
          , c = {}
          , d = b.isOriginLeft ? "paddingLeft" : "paddingRight"
          , e = b.isOriginLeft ? "left" : "right"
          , f = b.isOriginLeft ? "right" : "left"
          , g = this.position.x + a[d];
        c[e] = this.getXValue(g),
        c[f] = "";
        var h = b.isOriginTop ? "paddingTop" : "paddingBottom"
          , i = b.isOriginTop ? "top" : "bottom"
          , j = b.isOriginTop ? "bottom" : "top"
          , k = this.position.y + a[h];
        c[i] = this.getYValue(k),
        c[j] = "",
        this.css(c),
        this.emitEvent("layout", [this])
    }
    ,
    g.prototype.getXValue = function(a) {
        var b = this.layout.options;
        return b.percentPosition && !b.isHorizontal ? a / this.layout.size.width * 100 + "%" : a + "px"
    }
    ,
    g.prototype.getYValue = function(a) {
        var b = this.layout.options;
        return b.percentPosition && b.isHorizontal ? a / this.layout.size.height * 100 + "%" : a + "px"
    }
    ,
    g.prototype._transitionTo = function(a, b) {
        this.getPosition();
        var c = this.position.x
          , d = this.position.y
          , e = parseInt(a, 10)
          , f = parseInt(b, 10)
          , g = e === this.position.x && f === this.position.y;
        if (this.setPosition(a, b),
        g && !this.isTransitioning)
            return void this.layoutPosition();
        var h = a - c
          , i = b - d
          , j = {};
        j.transform = this.getTranslate(h, i),
        this.transition({
            to: j,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }
    ,
    g.prototype.getTranslate = function(a, b) {
        var c = this.layout.options;
        return a = c.isOriginLeft ? a : -a,
        b = c.isOriginTop ? b : -b,
        n ? "translate3d(" + a + "px, " + b + "px, 0)" : "translate(" + a + "px, " + b + "px)"
    }
    ,
    g.prototype.goTo = function(a, b) {
        this.setPosition(a, b),
        this.layoutPosition()
    }
    ,
    g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo,
    g.prototype.setPosition = function(a, b) {
        this.position.x = parseInt(a, 10),
        this.position.y = parseInt(b, 10)
    }
    ,
    g.prototype._nonTransition = function(a) {
        this.css(a.to),
        a.isCleaning && this._removeStyles(a.to);
        for (var b in a.onTransitionEnd)
            a.onTransitionEnd[b].call(this)
    }
    ,
    g.prototype._transition = function(a) {
        if (!parseFloat(this.layout.options.transitionDuration))
            return void this._nonTransition(a);
        var b = this._transn;
        for (var c in a.onTransitionEnd)
            b.onEnd[c] = a.onTransitionEnd[c];
        for (c in a.to)
            b.ingProperties[c] = !0,
            a.isCleaning && (b.clean[c] = !0);
        if (a.from) {
            this.css(a.from);
            var d = this.element.offsetHeight;
            d = null
        }
        this.enableTransition(a.to),
        this.css(a.to),
        this.isTransitioning = !0
    }
    ;
    var r = "opacity," + h(q.transform || "transform");
    g.prototype.enableTransition = function() {
        this.isTransitioning || (this.css({
            transitionProperty: r,
            transitionDuration: this.layout.options.transitionDuration
        }),
        this.element.addEventListener(o, this, !1))
    }
    ,
    g.prototype.transition = g.prototype[k ? "_transition" : "_nonTransition"],
    g.prototype.onwebkitTransitionEnd = function(a) {
        this.ontransitionend(a)
    }
    ,
    g.prototype.onotransitionend = function(a) {
        this.ontransitionend(a)
    }
    ;
    var s = {
        "-webkit-transform": "transform",
        "-moz-transform": "transform",
        "-o-transform": "transform"
    };
    g.prototype.ontransitionend = function(a) {
        if (a.target === this.element) {
            var b = this._transn
              , c = s[a.propertyName] || a.propertyName;
            if (delete b.ingProperties[c],
            f(b.ingProperties) && this.disableTransition(),
            c in b.clean && (this.element.style[a.propertyName] = "",
            delete b.clean[c]),
            c in b.onEnd) {
                var d = b.onEnd[c];
                d.call(this),
                delete b.onEnd[c]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }
    ,
    g.prototype.disableTransition = function() {
        this.removeTransitionStyles(),
        this.element.removeEventListener(o, this, !1),
        this.isTransitioning = !1
    }
    ,
    g.prototype._removeStyles = function(a) {
        var b = {};
        for (var c in a)
            b[c] = "";
        this.css(b)
    }
    ;
    var t = {
        transitionProperty: "",
        transitionDuration: ""
    };
    return g.prototype.removeTransitionStyles = function() {
        this.css(t)
    }
    ,
    g.prototype.removeElem = function() {
        this.element.parentNode.removeChild(this.element),
        this.css({
            display: ""
        }),
        this.emitEvent("remove", [this])
    }
    ,
    g.prototype.remove = function() {
        if (!k || !parseFloat(this.layout.options.transitionDuration))
            return void this.removeElem();
        var a = this;
        this.once("transitionEnd", function() {
            a.removeElem()
        }),
        this.hide()
    }
    ,
    g.prototype.reveal = function() {
        delete this.isHidden,
        this.css({
            display: ""
        });
        var a = this.layout.options
          , b = {}
          , c = this.getHideRevealTransitionEndProperty("visibleStyle");
        b[c] = this.onRevealTransitionEnd,
        this.transition({
            from: a.hiddenStyle,
            to: a.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: b
        })
    }
    ,
    g.prototype.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }
    ,
    g.prototype.getHideRevealTransitionEndProperty = function(a) {
        var b = this.layout.options[a];
        if (b.opacity)
            return "opacity";
        for (var c in b)
            return c
    }
    ,
    g.prototype.hide = function() {
        this.isHidden = !0,
        this.css({
            display: ""
        });
        var a = this.layout.options
          , b = {}
          , c = this.getHideRevealTransitionEndProperty("hiddenStyle");
        b[c] = this.onHideTransitionEnd,
        this.transition({
            from: a.visibleStyle,
            to: a.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: b
        })
    }
    ,
    g.prototype.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }),
        this.emitEvent("hide"))
    }
    ,
    g.prototype.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }
    ,
    g
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(c, d, e, f, g) {
        return b(a, c, d, e, f, g)
    }) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
}(window, function(a, b, c, d, e, f) {
    "use strict";
    function g(a, b) {
        var c = e.getQueryElement(a);
        if (!c)
            return void (h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
        this.element = c,
        i && (this.$element = i(this.element)),
        this.options = e.extend({}, this.constructor.defaults),
        this.option(b);
        var d = ++k;
        this.element.outlayerGUID = d,
        l[d] = this,
        this._create(),
        this.options.isInitLayout && this.layout()
    }
    var h = a.console
      , i = a.jQuery
      , j = function() {}
      , k = 0
      , l = {};
    return g.namespace = "outlayer",
    g.Item = f,
    g.defaults = {
        containerStyle: {
            position: "relative"
        },
        isInitLayout: !0,
        isOriginLeft: !0,
        isOriginTop: !0,
        isResizeBound: !0,
        isResizingContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    },
    e.extend(g.prototype, c.prototype),
    g.prototype.option = function(a) {
        e.extend(this.options, a)
    }
    ,
    g.prototype._create = function() {
        this.reloadItems(),
        this.stamps = [],
        this.stamp(this.options.stamp),
        e.extend(this.element.style, this.options.containerStyle),
        this.options.isResizeBound && this.bindResize()
    }
    ,
    g.prototype.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }
    ,
    g.prototype._itemize = function(a) {
        for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
            var g = b[e]
              , h = new c(g,this);
            d.push(h)
        }
        return d
    }
    ,
    g.prototype._filterFindItemElements = function(a) {
        return e.filterFindElements(a, this.options.itemSelector)
    }
    ,
    g.prototype.getItemElements = function() {
        for (var a = [], b = 0, c = this.items.length; c > b; b++)
            a.push(this.items[b].element);
        return a
    }
    ,
    g.prototype.layout = function() {
        this._resetLayout(),
        this._manageStamps();
        var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, a),
        this._isLayoutInited = !0
    }
    ,
    g.prototype._init = g.prototype.layout,
    g.prototype._resetLayout = function() {
        this.getSize()
    }
    ,
    g.prototype.getSize = function() {
        this.size = d(this.element)
    }
    ,
    g.prototype._getMeasurement = function(a, b) {
        var c, f = this.options[a];
        f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f),
        this[a] = c ? d(c)[b] : f) : this[a] = 0
    }
    ,
    g.prototype.layoutItems = function(a, b) {
        a = this._getItemsForLayout(a),
        this._layoutItems(a, b),
        this._postLayout()
    }
    ,
    g.prototype._getItemsForLayout = function(a) {
        for (var b = [], c = 0, d = a.length; d > c; c++) {
            var e = a[c];
            e.isIgnored || b.push(e)
        }
        return b
    }
    ,
    g.prototype._layoutItems = function(a, b) {
        if (this._emitCompleteOnItems("layout", a),
        a && a.length) {
            for (var c = [], d = 0, e = a.length; e > d; d++) {
                var f = a[d]
                  , g = this._getItemLayoutPosition(f);
                g.item = f,
                g.isInstant = b || f.isLayoutInstant,
                c.push(g)
            }
            this._processLayoutQueue(c)
        }
    }
    ,
    g.prototype._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }
    ,
    g.prototype._processLayoutQueue = function(a) {
        for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b];
            this._positionItem(d.item, d.x, d.y, d.isInstant)
        }
    }
    ,
    g.prototype._positionItem = function(a, b, c, d) {
        d ? a.goTo(b, c) : a.moveTo(b, c)
    }
    ,
    g.prototype._postLayout = function() {
        this.resizeContainer()
    }
    ,
    g.prototype.resizeContainer = function() {
        if (this.options.isResizingContainer) {
            var a = this._getContainerSize();
            a && (this._setContainerMeasure(a.width, !0),
            this._setContainerMeasure(a.height, !1))
        }
    }
    ,
    g.prototype._getContainerSize = j,
    g.prototype._setContainerMeasure = function(a, b) {
        if (void 0 !== a) {
            var c = this.size;
            c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth),
            a = Math.max(a, 0),
            this.element.style[b ? "width" : "height"] = a + "px"
        }
    }
    ,
    g.prototype._emitCompleteOnItems = function(a, b) {
        function c() {
            e.dispatchEvent(a + "Complete", null, [b])
        }
        function d() {
            g++,
            g === f && c()
        }
        var e = this
          , f = b.length;
        if (!b || !f)
            return void c();
        for (var g = 0, h = 0, i = b.length; i > h; h++) {
            var j = b[h];
            j.once(a, d)
        }
    }
    ,
    g.prototype.dispatchEvent = function(a, b, c) {
        var d = b ? [b].concat(c) : c;
        if (this.emitEvent(a, d),
        i)
            if (this.$element = this.$element || i(this.element),
            b) {
                var e = i.Event(b);
                e.type = a,
                this.$element.trigger(e, c)
            } else
                this.$element.trigger(a, c)
    }
    ,
    g.prototype.ignore = function(a) {
        var b = this.getItem(a);
        b && (b.isIgnored = !0)
    }
    ,
    g.prototype.unignore = function(a) {
        var b = this.getItem(a);
        b && delete b.isIgnored
    }
    ,
    g.prototype.stamp = function(a) {
        if (a = this._find(a)) {
            this.stamps = this.stamps.concat(a);
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                this.ignore(d)
            }
        }
    }
    ,
    g.prototype.unstamp = function(a) {
        if (a = this._find(a))
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                e.removeFrom(this.stamps, d),
                this.unignore(d)
            }
    }
    ,
    g.prototype._find = function(a) {
        return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)),
        a = e.makeArray(a)) : void 0
    }
    ,
    g.prototype._manageStamps = function() {
        if (this.stamps && this.stamps.length) {
            this._getBoundingRect();
            for (var a = 0, b = this.stamps.length; b > a; a++) {
                var c = this.stamps[a];
                this._manageStamp(c)
            }
        }
    }
    ,
    g.prototype._getBoundingRect = function() {
        var a = this.element.getBoundingClientRect()
          , b = this.size;
        this._boundingRect = {
            left: a.left + b.paddingLeft + b.borderLeftWidth,
            top: a.top + b.paddingTop + b.borderTopWidth,
            right: a.right - (b.paddingRight + b.borderRightWidth),
            bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
        }
    }
    ,
    g.prototype._manageStamp = j,
    g.prototype._getElementOffset = function(a) {
        var b = a.getBoundingClientRect()
          , c = this._boundingRect
          , e = d(a)
          , f = {
            left: b.left - c.left - e.marginLeft,
            top: b.top - c.top - e.marginTop,
            right: c.right - b.right - e.marginRight,
            bottom: c.bottom - b.bottom - e.marginBottom
        };
        return f
    }
    ,
    g.prototype.handleEvent = function(a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }
    ,
    g.prototype.bindResize = function() {
        this.isResizeBound || (b.bind(a, "resize", this),
        this.isResizeBound = !0)
    }
    ,
    g.prototype.unbindResize = function() {
        this.isResizeBound && b.unbind(a, "resize", this),
        this.isResizeBound = !1
    }
    ,
    g.prototype.onresize = function() {
        function a() {
            b.resize(),
            delete b.resizeTimeout
        }
        this.resizeTimeout && clearTimeout(this.resizeTimeout);
        var b = this;
        this.resizeTimeout = setTimeout(a, 100)
    }
    ,
    g.prototype.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }
    ,
    g.prototype.needsResizeLayout = function() {
        var a = d(this.element)
          , b = this.size && a;
        return b && a.innerWidth !== this.size.innerWidth
    }
    ,
    g.prototype.addItems = function(a) {
        var b = this._itemize(a);
        return b.length && (this.items = this.items.concat(b)),
        b
    }
    ,
    g.prototype.appended = function(a) {
        var b = this.addItems(a);
        b.length && (this.layoutItems(b, !0),
        this.reveal(b))
    }
    ,
    g.prototype.prepended = function(a) {
        var b = this._itemize(a);
        if (b.length) {
            var c = this.items.slice(0);
            this.items = b.concat(c),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(b, !0),
            this.reveal(b),
            this.layoutItems(c)
        }
    }
    ,
    g.prototype.reveal = function(a) {
        this._emitCompleteOnItems("reveal", a);
        for (var b = a && a.length, c = 0; b && b > c; c++) {
            var d = a[c];
            d.reveal()
        }
    }
    ,
    g.prototype.hide = function(a) {
        this._emitCompleteOnItems("hide", a);
        for (var b = a && a.length, c = 0; b && b > c; c++) {
            var d = a[c];
            d.hide()
        }
    }
    ,
    g.prototype.revealItemElements = function(a) {
        var b = this.getItems(a);
        this.reveal(b)
    }
    ,
    g.prototype.hideItemElements = function(a) {
        var b = this.getItems(a);
        this.hide(b)
    }
    ,
    g.prototype.getItem = function(a) {
        for (var b = 0, c = this.items.length; c > b; b++) {
            var d = this.items[b];
            if (d.element === a)
                return d
        }
    }
    ,
    g.prototype.getItems = function(a) {
        a = e.makeArray(a);
        for (var b = [], c = 0, d = a.length; d > c; c++) {
            var f = a[c]
              , g = this.getItem(f);
            g && b.push(g)
        }
        return b
    }
    ,
    g.prototype.remove = function(a) {
        var b = this.getItems(a);
        if (this._emitCompleteOnItems("remove", b),
        b && b.length)
            for (var c = 0, d = b.length; d > c; c++) {
                var f = b[c];
                f.remove(),
                e.removeFrom(this.items, f)
            }
    }
    ,
    g.prototype.destroy = function() {
        var a = this.element.style;
        a.height = "",
        a.position = "",
        a.width = "";
        for (var b = 0, c = this.items.length; c > b; b++) {
            var d = this.items[b];
            d.destroy()
        }
        this.unbindResize();
        var e = this.element.outlayerGUID;
        delete l[e],
        delete this.element.outlayerGUID,
        i && i.removeData(this.element, this.constructor.namespace)
    }
    ,
    g.data = function(a) {
        a = e.getQueryElement(a);
        var b = a && a.outlayerGUID;
        return b && l[b]
    }
    ,
    g.create = function(a, b) {
        function c() {
            g.apply(this, arguments)
        }
        return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype),
        c.prototype.constructor = c,
        c.defaults = e.extend({}, g.defaults),
        e.extend(c.defaults, b),
        c.prototype.settings = {},
        c.namespace = a,
        c.data = g.data,
        c.Item = function() {
            f.apply(this, arguments)
        }
        ,
        c.Item.prototype = new f,
        e.htmlInit(c, a),
        i && i.bridget && i.bridget(a, c),
        c
    }
    ,
    g.Item = f,
    g
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("outlayer")) : (a.Isotope = a.Isotope || {},
    a.Isotope.Item = b(a.Outlayer))
}(window, function(a) {
    "use strict";
    function b() {
        a.Item.apply(this, arguments)
    }
    b.prototype = new a.Item,
    b.prototype._create = function() {
        this.id = this.layout.itemGUID++,
        a.Item.prototype._create.call(this),
        this.sortData = {}
    }
    ,
    b.prototype.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id,
            this.sortData["original-order"] = this.id,
            this.sortData.random = Math.random();
            var a = this.layout.options.getSortData
              , b = this.layout._sorters;
            for (var c in a) {
                var d = b[c];
                this.sortData[c] = d(this.element, this)
            }
        }
    }
    ;
    var c = b.prototype.destroy;
    return b.prototype.destroy = function() {
        c.apply(this, arguments),
        this.css({
            display: ""
        })
    }
    ,
    b
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("get-size"), require("outlayer")) : (a.Isotope = a.Isotope || {},
    a.Isotope.LayoutMode = b(a.getSize, a.Outlayer))
}(window, function(a, b) {
    "use strict";
    function c(a) {
        this.isotope = a,
        a && (this.options = a.options[this.namespace],
        this.element = a.element,
        this.items = a.filteredItems,
        this.size = a.size)
    }
    return function() {
        function a(a) {
            return function() {
                return b.prototype[a].apply(this.isotope, arguments)
            }
        }
        for (var d = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], e = 0, f = d.length; f > e; e++) {
            var g = d[e];
            c.prototype[g] = a(g)
        }
    }(),
    c.prototype.needsVerticalResizeLayout = function() {
        var b = a(this.isotope.element)
          , c = this.isotope.size && b;
        return c && b.innerHeight != this.isotope.size.innerHeight
    }
    ,
    c.prototype._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }
    ,
    c.prototype.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }
    ,
    c.prototype.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }
    ,
    c.prototype.getSegmentSize = function(a, b) {
        var c = a + b
          , d = "outer" + b;
        if (this._getMeasurement(c, d),
        !this[c]) {
            var e = this.getFirstItemSize();
            this[c] = e && e[d] || this.isotope.size["inner" + b]
        }
    }
    ,
    c.prototype.getFirstItemSize = function() {
        var b = this.isotope.filteredItems[0];
        return b && b.element && a(b.element)
    }
    ,
    c.prototype.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }
    ,
    c.prototype.getSize = function() {
        this.isotope.getSize(),
        this.size = this.isotope.size
    }
    ,
    c.modes = {},
    c.create = function(a, b) {
        function d() {
            c.apply(this, arguments)
        }
        return d.prototype = new c,
        b && (d.options = b),
        d.prototype.namespace = a,
        c.modes[a] = d,
        d
    }
    ,
    c
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils)
}(window, function(a, b, c) {
    var d = a.create("masonry");
    return d.prototype._resetLayout = function() {
        this.getSize(),
        this._getMeasurement("columnWidth", "outerWidth"),
        this._getMeasurement("gutter", "outerWidth"),
        this.measureColumns();
        var a = this.cols;
        for (this.colYs = []; a--; )
            this.colYs.push(0);
        this.maxY = 0
    }
    ,
    d.prototype.measureColumns = function() {
        if (this.getContainerWidth(),
        !this.columnWidth) {
            var a = this.items[0]
              , c = a && a.element;
            this.columnWidth = c && b(c).outerWidth || this.containerWidth
        }
        var d = this.columnWidth += this.gutter
          , e = this.containerWidth + this.gutter
          , f = e / d
          , g = d - e % d
          , h = g && 1 > g ? "round" : "floor";
        f = Math[h](f),
        this.cols = Math.max(f, 1)
    }
    ,
    d.prototype.getContainerWidth = function() {
        var a = this.options.isFitWidth ? this.element.parentNode : this.element
          , c = b(a);
        this.containerWidth = c && c.innerWidth
    }
    ,
    d.prototype._getItemLayoutPosition = function(a) {
        a.getSize();
        var b = a.size.outerWidth % this.columnWidth
          , d = b && 1 > b ? "round" : "ceil"
          , e = Math[d](a.size.outerWidth / this.columnWidth);
        e = Math.min(e, this.cols);
        for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = {
            x: this.columnWidth * h,
            y: g
        }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++)
            this.colYs[h + l] = j;
        return i
    }
    ,
    d.prototype._getColGroup = function(a) {
        if (2 > a)
            return this.colYs;
        for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
            var e = this.colYs.slice(d, d + a);
            b[d] = Math.max.apply(Math, e)
        }
        return b
    }
    ,
    d.prototype._manageStamp = function(a) {
        var c = b(a)
          , d = this._getElementOffset(a)
          , e = this.options.isOriginLeft ? d.left : d.right
          , f = e + c.outerWidth
          , g = Math.floor(e / this.columnWidth);
        g = Math.max(0, g);
        var h = Math.floor(f / this.columnWidth);
        h -= f % this.columnWidth ? 0 : 1,
        h = Math.min(this.cols - 1, h);
        for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++)
            this.colYs[j] = Math.max(i, this.colYs[j])
    }
    ,
    d.prototype._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var a = {
            height: this.maxY
        };
        return this.options.isFitWidth && (a.width = this._getContainerFitWidth()),
        a
    }
    ,
    d.prototype._getContainerFitWidth = function() {
        for (var a = 0, b = this.cols; --b && 0 === this.colYs[b]; )
            a++;
        return (this.cols - a) * this.columnWidth - this.gutter
    }
    ,
    d.prototype.needsResizeLayout = function() {
        var a = this.containerWidth;
        return this.getContainerWidth(),
        a !== this.containerWidth
    }
    ,
    d
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode"), require("masonry-layout")) : b(a.Isotope.LayoutMode, a.Masonry)
}(window, function(a, b) {
    "use strict";
    function c(a, b) {
        for (var c in b)
            a[c] = b[c];
        return a
    }
    var d = a.create("masonry")
      , e = d.prototype._getElementOffset
      , f = d.prototype.layout
      , g = d.prototype._getMeasurement;
    c(d.prototype, b.prototype),
    d.prototype._getElementOffset = e,
    d.prototype.layout = f,
    d.prototype._getMeasurement = g;
    var h = d.prototype.measureColumns;
    d.prototype.measureColumns = function() {
        this.items = this.isotope.filteredItems,
        h.call(this)
    }
    ;
    var i = d.prototype._manageStamp;
    return d.prototype._manageStamp = function() {
        this.options.isOriginLeft = this.isotope.options.isOriginLeft,
        this.options.isOriginTop = this.isotope.options.isOriginTop,
        i.apply(this, arguments)
    }
    ,
    d
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
}(window, function(a) {
    "use strict";
    var b = a.create("fitRows");
    return b.prototype._resetLayout = function() {
        this.x = 0,
        this.y = 0,
        this.maxY = 0,
        this._getMeasurement("gutter", "outerWidth")
    }
    ,
    b.prototype._getItemLayoutPosition = function(a) {
        a.getSize();
        var b = a.size.outerWidth + this.gutter
          , c = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && b + this.x > c && (this.x = 0,
        this.y = this.maxY);
        var d = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight),
        this.x += b,
        d
    }
    ,
    b.prototype._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }
    ,
    b
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
}(window, function(a) {
    "use strict";
    var b = a.create("vertical", {
        horizontalAlignment: 0
    });
    return b.prototype._resetLayout = function() {
        this.y = 0
    }
    ,
    b.prototype._getItemLayoutPosition = function(a) {
        a.getSize();
        var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment
          , c = this.y;
        return this.y += a.size.outerHeight,
        {
            x: b,
            y: c
        }
    }
    ,
    b.prototype._getContainerSize = function() {
        return {
            height: this.y
        }
    }
    ,
    b
}),
function(a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(c, d, e, f, g, h) {
        return b(a, c, d, e, f, g, h)
    }) : "object" == typeof exports ? module.exports = b(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode)
}(window, function(a, b, c, d, e, f, g) {
    function h(a, b) {
        return function(c, d) {
            for (var e = 0, f = a.length; f > e; e++) {
                var g = a[e]
                  , h = c.sortData[g]
                  , i = d.sortData[g];
                if (h > i || i > h) {
                    var j = void 0 !== b[g] ? b[g] : b
                      , k = j ? 1 : -1;
                    return (h > i ? 1 : -1) * k
                }
            }
            return 0
        }
    }
    var i = a.jQuery
      , j = String.prototype.trim ? function(a) {
        return a.trim()
    }
    : function(a) {
        return a.replace(/^\s+|\s+$/g, "")
    }
      , k = document.documentElement
      , l = k.textContent ? function(a) {
        return a.textContent
    }
    : function(a) {
        return a.innerText
    }
      , m = b.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0
    });
    m.Item = f,
    m.LayoutMode = g,
    m.prototype._create = function() {
        this.itemGUID = 0,
        this._sorters = {},
        this._getSorters(),
        b.prototype._create.call(this),
        this.modes = {},
        this.filteredItems = this.items,
        this.sortHistory = ["original-order"];
        for (var a in g.modes)
            this._initLayoutMode(a)
    }
    ,
    m.prototype.reloadItems = function() {
        this.itemGUID = 0,
        b.prototype.reloadItems.call(this)
    }
    ,
    m.prototype._itemize = function() {
        for (var a = b.prototype._itemize.apply(this, arguments), c = 0, d = a.length; d > c; c++) {
            var e = a[c];
            e.id = this.itemGUID++
        }
        return this._updateItemsSortData(a),
        a
    }
    ,
    m.prototype._initLayoutMode = function(a) {
        var b = g.modes[a]
          , c = this.options[a] || {};
        this.options[a] = b.options ? e.extend(b.options, c) : c,
        this.modes[a] = new b(this)
    }
    ,
    m.prototype.layout = function() {
        return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
    }
    ,
    m.prototype._layout = function() {
        var a = this._getIsInstant();
        this._resetLayout(),
        this._manageStamps(),
        this.layoutItems(this.filteredItems, a),
        this._isLayoutInited = !0
    }
    ,
    m.prototype.arrange = function(a) {
        function b() {
            d.reveal(c.needReveal),
            d.hide(c.needHide)
        }
        this.option(a),
        this._getIsInstant();
        var c = this._filter(this.items);
        this.filteredItems = c.matches;
        var d = this;
        this._bindArrangeComplete(),
        this._isInstant ? this._noTransition(b) : b(),
        this._sort(),
        this._layout()
    }
    ,
    m.prototype._init = m.prototype.arrange,
    m.prototype._getIsInstant = function() {
        var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        return this._isInstant = a,
        a
    }
    ,
    m.prototype._bindArrangeComplete = function() {
        function a() {
            b && c && d && e.dispatchEvent("arrangeComplete", null, [e.filteredItems])
        }
        var b, c, d, e = this;
        this.once("layoutComplete", function() {
            b = !0,
            a()
        }),
        this.once("hideComplete", function() {
            c = !0,
            a()
        }),
        this.once("revealComplete", function() {
            d = !0,
            a()
        })
    }
    ,
    m.prototype._filter = function(a) {
        var b = this.options.filter;
        b = b || "*";
        for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0, h = a.length; h > g; g++) {
            var i = a[g];
            if (!i.isIgnored) {
                var j = f(i);
                j && c.push(i),
                j && i.isHidden ? d.push(i) : j || i.isHidden || e.push(i)
            }
        }
        return {
            matches: c,
            needReveal: d,
            needHide: e
        }
    }
    ,
    m.prototype._getFilterTest = function(a) {
        return i && this.options.isJQueryFiltering ? function(b) {
            return i(b.element).is(a)
        }
        : "function" == typeof a ? function(b) {
            return a(b.element)
        }
        : function(b) {
            return d(b.element, a)
        }
    }
    ,
    m.prototype.updateSortData = function(a) {
        var b;
        a ? (a = e.makeArray(a),
        b = this.getItems(a)) : b = this.items,
        this._getSorters(),
        this._updateItemsSortData(b)
    }
    ,
    m.prototype._getSorters = function() {
        var a = this.options.getSortData;
        for (var b in a) {
            var c = a[b];
            this._sorters[b] = n(c)
        }
    }
    ,
    m.prototype._updateItemsSortData = function(a) {
        for (var b = a && a.length, c = 0; b && b > c; c++) {
            var d = a[c];
            d.updateSortData()
        }
    }
    ;
    var n = function() {
        function a(a) {
            if ("string" != typeof a)
                return a;
            var c = j(a).split(" ")
              , d = c[0]
              , e = d.match(/^\[(.+)\]$/)
              , f = e && e[1]
              , g = b(f, d)
              , h = m.sortDataParsers[c[1]];
            return a = h ? function(a) {
                return a && h(g(a))
            }
            : function(a) {
                return a && g(a)
            }
        }
        function b(a, b) {
            var c;
            return c = a ? function(b) {
                return b.getAttribute(a)
            }
            : function(a) {
                var c = a.querySelector(b);
                return c && l(c)
            }
        }
        return a
    }();
    m.sortDataParsers = {
        parseInt: function(a) {
            return parseInt(a, 10)
        },
        parseFloat: function(a) {
            return parseFloat(a)
        }
    },
    m.prototype._sort = function() {
        var a = this.options.sortBy;
        if (a) {
            var b = [].concat.apply(a, this.sortHistory)
              , c = h(b, this.options.sortAscending);
            this.filteredItems.sort(c),
            a != this.sortHistory[0] && this.sortHistory.unshift(a)
        }
    }
    ,
    m.prototype._mode = function() {
        var a = this.options.layoutMode
          , b = this.modes[a];
        if (!b)
            throw new Error("No layout mode: " + a);
        return b.options = this.options[a],
        b
    }
    ,
    m.prototype._resetLayout = function() {
        b.prototype._resetLayout.call(this),
        this._mode()._resetLayout()
    }
    ,
    m.prototype._getItemLayoutPosition = function(a) {
        return this._mode()._getItemLayoutPosition(a)
    }
    ,
    m.prototype._manageStamp = function(a) {
        this._mode()._manageStamp(a)
    }
    ,
    m.prototype._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }
    ,
    m.prototype.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }
    ,
    m.prototype.appended = function(a) {
        var b = this.addItems(a);
        if (b.length) {
            var c = this._filterRevealAdded(b);
            this.filteredItems = this.filteredItems.concat(c)
        }
    }
    ,
    m.prototype.prepended = function(a) {
        var b = this._itemize(a);
        if (b.length) {
            this._resetLayout(),
            this._manageStamps();
            var c = this._filterRevealAdded(b);
            this.layoutItems(this.filteredItems),
            this.filteredItems = c.concat(this.filteredItems),
            this.items = b.concat(this.items)
        }
    }
    ,
    m.prototype._filterRevealAdded = function(a) {
        var b = this._filter(a);
        return this.hide(b.needHide),
        this.reveal(b.matches),
        this.layoutItems(b.matches, !0),
        b.matches
    }
    ,
    m.prototype.insert = function(a) {
        var b = this.addItems(a);
        if (b.length) {
            var c, d, e = b.length;
            for (c = 0; e > c; c++)
                d = b[c],
                this.element.appendChild(d.element);
            var f = this._filter(b).matches;
            for (c = 0; e > c; c++)
                b[c].isLayoutInstant = !0;
            for (this.arrange(),
            c = 0; e > c; c++)
                delete b[c].isLayoutInstant;
            this.reveal(f)
        }
    }
    ;
    var o = m.prototype.remove;
    return m.prototype.remove = function(a) {
        a = e.makeArray(a);
        var b = this.getItems(a);
        o.call(this, a);
        var c = b && b.length;
        if (c)
            for (var d = 0; c > d; d++) {
                var f = b[d];
                e.removeFrom(this.filteredItems, f)
            }
    }
    ,
    m.prototype.shuffle = function() {
        for (var a = 0, b = this.items.length; b > a; a++) {
            var c = this.items[a];
            c.sortData.random = Math.random()
        }
        this.options.sortBy = "random",
        this._sort(),
        this._layout()
    }
    ,
    m.prototype._noTransition = function(a) {
        var b = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var c = a.call(this);
        return this.options.transitionDuration = b,
        c
    }
    ,
    m.prototype.getFilteredItemElements = function() {
        for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++)
            a.push(this.filteredItems[b].element);
        return a
    }
    ,
    m
});

(function() {
    function e() {}
    function t(e, t) {
        for (var n = e.length; n--; )
            if (e[n].listener === t)
                return n;
        return -1
    }
    function n(e) {
        return function() {
            return this[e].apply(this, arguments)
        }
    }
    var i = e.prototype
      , r = this
      , o = r.EventEmitter;
    i.getListeners = function(e) {
        var t, n, i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i)
                i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
        } else
            t = i[e] || (i[e] = []);
        return t
    }
    ,
    i.flattenListeners = function(e) {
        var t, n = [];
        for (t = 0; e.length > t; t += 1)
            n.push(e[t].listener);
        return n
    }
    ,
    i.getListenersAsObject = function(e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {},
        t[e] = n),
        t || n
    }
    ,
    i.addListener = function(e, n) {
        var i, r = this.getListenersAsObject(e), o = "object" == typeof n;
        for (i in r)
            r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
                listener: n,
                once: !1
            });
        return this
    }
    ,
    i.on = n("addListener"),
    i.addOnceListener = function(e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    }
    ,
    i.once = n("addOnceListener"),
    i.defineEvent = function(e) {
        return this.getListeners(e),
        this
    }
    ,
    i.defineEvents = function(e) {
        for (var t = 0; e.length > t; t += 1)
            this.defineEvent(e[t]);
        return this
    }
    ,
    i.removeListener = function(e, n) {
        var i, r, o = this.getListenersAsObject(e);
        for (r in o)
            o.hasOwnProperty(r) && (i = t(o[r], n),
            -1 !== i && o[r].splice(i, 1));
        return this
    }
    ,
    i.off = n("removeListener"),
    i.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t)
    }
    ,
    i.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t)
    }
    ,
    i.manipulateListeners = function(e, t, n) {
        var i, r, o = e ? this.removeListener : this.addListener, s = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (i = n.length; i--; )
                o.call(this, t, n[i]);
        else
            for (i in t)
                t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
        return this
    }
    ,
    i.removeEvent = function(e) {
        var t, n = typeof e, i = this._getEvents();
        if ("string" === n)
            delete i[e];
        else if ("object" === n)
            for (t in i)
                i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else
            delete this._events;
        return this
    }
    ,
    i.removeAllListeners = n("removeEvent"),
    i.emitEvent = function(e, t) {
        var n, i, r, o, s = this.getListenersAsObject(e);
        for (r in s)
            if (s.hasOwnProperty(r))
                for (i = s[r].length; i--; )
                    n = s[r][i],
                    n.once === !0 && this.removeListener(e, n.listener),
                    o = n.listener.apply(this, t || []),
                    o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }
    ,
    i.trigger = n("emitEvent"),
    i.emit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }
    ,
    i.setOnceReturnValue = function(e) {
        return this._onceReturnValue = e,
        this
    }
    ,
    i._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }
    ,
    i._getEvents = function() {
        return this._events || (this._events = {})
    }
    ,
    e.noConflict = function() {
        return r.EventEmitter = o,
        e
    }
    ,
    "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}
).call(this),
function(e) {
    function t(t) {
        var n = e.event;
        return n.target = n.target || n.srcElement || t,
        n
    }
    var n = document.documentElement
      , i = function() {};
    n.addEventListener ? i = function(e, t, n) {
        e.addEventListener(t, n, !1)
    }
    : n.attachEvent && (i = function(e, n, i) {
        e[n + i] = i.handleEvent ? function() {
            var n = t(e);
            i.handleEvent.call(i, n)
        }
        : function() {
            var n = t(e);
            i.call(e, n)
        }
        ,
        e.attachEvent("on" + n, e[n + i])
    }
    );
    var r = function() {};
    n.removeEventListener ? r = function(e, t, n) {
        e.removeEventListener(t, n, !1)
    }
    : n.detachEvent && (r = function(e, t, n) {
        e.detachEvent("on" + t, e[t + n]);
        try {
            delete e[t + n]
        } catch (i) {
            e[t + n] = void 0
        }
    }
    );
    var o = {
        bind: i,
        unbind: r
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
}(this),
function(e, t) {
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) {
        return t(e, n, i)
    }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
}(window, function(e, t, n) {
    function i(e, t) {
        for (var n in t)
            e[n] = t[n];
        return e
    }
    function r(e) {
        return "[object Array]" === d.call(e)
    }
    function o(e) {
        var t = [];
        if (r(e))
            t = e;
        else if ("number" == typeof e.length)
            for (var n = 0, i = e.length; i > n; n++)
                t.push(e[n]);
        else
            t.push(e);
        return t
    }
    function s(e, t, n) {
        if (!(this instanceof s))
            return new s(e,t);
        "string" == typeof e && (e = document.querySelectorAll(e)),
        this.elements = o(e),
        this.options = i({}, this.options),
        "function" == typeof t ? n = t : i(this.options, t),
        n && this.on("always", n),
        this.getImages(),
        a && (this.jqDeferred = new a.Deferred);
        var r = this;
        setTimeout(function() {
            r.check()
        })
    }
    function f(e) {
        this.img = e
    }
    function c(e) {
        this.src = e,
        v[e] = this
    }
    var a = e.jQuery
      , u = e.console
      , h = u !== void 0
      , d = Object.prototype.toString;
    s.prototype = new t,
    s.prototype.options = {},
    s.prototype.getImages = function() {
        this.images = [];
        for (var e = 0, t = this.elements.length; t > e; e++) {
            var n = this.elements[e];
            "IMG" === n.nodeName && this.addImage(n);
            var i = n.nodeType;
            if (i && (1 === i || 9 === i || 11 === i))
                for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
                    var f = r[o];
                    this.addImage(f)
                }
        }
    }
    ,
    s.prototype.addImage = function(e) {
        var t = new f(e);
        this.images.push(t)
    }
    ,
    s.prototype.check = function() {
        function e(e, r) {
            return t.options.debug && h && u.log("confirm", e, r),
            t.progress(e),
            n++,
            n === i && t.complete(),
            !0
        }
        var t = this
          , n = 0
          , i = this.images.length;
        if (this.hasAnyBroken = !1,
        !i)
            return this.complete(),
            void 0;
        for (var r = 0; i > r; r++) {
            var o = this.images[r];
            o.on("confirm", e),
            o.check()
        }
    }
    ,
    s.prototype.progress = function(e) {
        this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
        var t = this;
        setTimeout(function() {
            t.emit("progress", t, e),
            t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
        })
    }
    ,
    s.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0;
        var t = this;
        setTimeout(function() {
            if (t.emit(e, t),
            t.emit("always", t),
            t.jqDeferred) {
                var n = t.hasAnyBroken ? "reject" : "resolve";
                t.jqDeferred[n](t)
            }
        })
    }
    ,
    a && (a.fn.imagesLoaded = function(e, t) {
        var n = new s(this,e,t);
        return n.jqDeferred.promise(a(this))
    }
    ),
    f.prototype = new t,
    f.prototype.check = function() {
        var e = v[this.img.src] || new c(this.img.src);
        if (e.isConfirmed)
            return this.confirm(e.isLoaded, "cached was confirmed"),
            void 0;
        if (this.img.complete && void 0 !== this.img.naturalWidth)
            return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
            void 0;
        var t = this;
        e.on("confirm", function(e, n) {
            return t.confirm(e.isLoaded, n),
            !0
        }),
        e.check()
    }
    ,
    f.prototype.confirm = function(e, t) {
        this.isLoaded = e,
        this.emit("confirm", this, t)
    }
    ;
    var v = {};
    return c.prototype = new t,
    c.prototype.check = function() {
        if (!this.isChecked) {
            var e = new Image;
            n.bind(e, "load", this),
            n.bind(e, "error", this),
            e.src = this.src,
            this.isChecked = !0
        }
    }
    ,
    c.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }
    ,
    c.prototype.onload = function(e) {
        this.confirm(!0, "onload"),
        this.unbindProxyEvents(e)
    }
    ,
    c.prototype.onerror = function(e) {
        this.confirm(!1, "onerror"),
        this.unbindProxyEvents(e)
    }
    ,
    c.prototype.confirm = function(e, t) {
        this.isConfirmed = !0,
        this.isLoaded = e,
        this.emit("confirm", this, t)
    }
    ,
    c.prototype.unbindProxyEvents = function(e) {
        n.unbind(e.target, "load", this),
        n.unbind(e.target, "error", this)
    }
    ,
    s
});
/*!
 * Packery layout mode PACKAGED v1.1.3
 * sub-classes Packery
 * http://packery.metafizzy.co
 */

!function(a) {
    function b(a) {
        return new RegExp("(^|\\s+)" + a + "(\\s+|$)")
    }
    function c(a, b) {
        var c = d(a, b) ? f : e;
        c(a, b)
    }
    var d, e, f;
    "classList"in document.documentElement ? (d = function(a, b) {
        return a.classList.contains(b)
    }
    ,
    e = function(a, b) {
        a.classList.add(b)
    }
    ,
    f = function(a, b) {
        a.classList.remove(b)
    }
    ) : (d = function(a, c) {
        return b(c).test(a.className)
    }
    ,
    e = function(a, b) {
        d(a, b) || (a.className = a.className + " " + b)
    }
    ,
    f = function(a, c) {
        a.className = a.className.replace(b(c), " ")
    }
    );
    var g = {
        hasClass: d,
        addClass: e,
        removeClass: f,
        toggleClass: c,
        has: d,
        add: e,
        remove: f,
        toggle: c
    };
    "function" == typeof define && define.amd ? define("classie/classie", g) : "object" == typeof exports ? module.exports = g : a.classie = g
}(window),
function(a, b) {
    "function" == typeof define && define.amd ? define("packery/js/rect", b) : "object" == typeof exports ? module.exports = b() : (a.Packery = a.Packery || {},
    a.Packery.Rect = b())
}(window, function() {
    function a(b) {
        for (var c in a.defaults)
            this[c] = a.defaults[c];
        for (c in b)
            this[c] = b[c]
    }
    var b = window.Packery = function() {}
    ;
    return b.Rect = a,
    a.defaults = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    },
    a.prototype.contains = function(a) {
        var b = a.width || 0
          , c = a.height || 0;
        return this.x <= a.x && this.y <= a.y && this.x + this.width >= a.x + b && this.y + this.height >= a.y + c
    }
    ,
    a.prototype.overlaps = function(a) {
        var b = this.x + this.width
          , c = this.y + this.height
          , d = a.x + a.width
          , e = a.y + a.height;
        return this.x < d && b > a.x && this.y < e && c > a.y
    }
    ,
    a.prototype.getMaximalFreeRects = function(b) {
        if (!this.overlaps(b))
            return !1;
        var c, d = [], e = this.x + this.width, f = this.y + this.height, g = b.x + b.width, h = b.y + b.height;
        return this.y < b.y && (c = new a({
            x: this.x,
            y: this.y,
            width: this.width,
            height: b.y - this.y
        }),
        d.push(c)),
        e > g && (c = new a({
            x: g,
            y: this.y,
            width: e - g,
            height: this.height
        }),
        d.push(c)),
        f > h && (c = new a({
            x: this.x,
            y: h,
            width: this.width,
            height: f - h
        }),
        d.push(c)),
        this.x < b.x && (c = new a({
            x: this.x,
            y: this.y,
            width: b.x - this.x,
            height: this.height
        }),
        d.push(c)),
        d
    }
    ,
    a.prototype.canFit = function(a) {
        return this.width >= a.width && this.height >= a.height
    }
    ,
    a
}),
function(a, b) {
    if ("function" == typeof define && define.amd)
        define("packery/js/packer", ["./rect"], b);
    else if ("object" == typeof exports)
        module.exports = b(require("./rect"));
    else {
        var c = a.Packery = a.Packery || {};
        c.Packer = b(c.Rect)
    }
}(window, function(a) {
    function b(a, b, c) {
        this.width = a || 0,
        this.height = b || 0,
        this.sortDirection = c || "downwardLeftToRight",
        this.reset()
    }
    b.prototype.reset = function() {
        this.spaces = [],
        this.newSpaces = [];
        var b = new a({
            x: 0,
            y: 0,
            width: this.width,
            height: this.height
        });
        this.spaces.push(b),
        this.sorter = c[this.sortDirection] || c.downwardLeftToRight
    }
    ,
    b.prototype.pack = function(a) {
        for (var b = 0, c = this.spaces.length; c > b; b++) {
            var d = this.spaces[b];
            if (d.canFit(a)) {
                this.placeInSpace(a, d);
                break
            }
        }
    }
    ,
    b.prototype.placeInSpace = function(a, b) {
        a.x = b.x,
        a.y = b.y,
        this.placed(a)
    }
    ,
    b.prototype.placed = function(a) {
        for (var b = [], c = 0, d = this.spaces.length; d > c; c++) {
            var e = this.spaces[c]
              , f = e.getMaximalFreeRects(a);
            f ? b.push.apply(b, f) : b.push(e)
        }
        this.spaces = b,
        this.mergeSortSpaces()
    }
    ,
    b.prototype.mergeSortSpaces = function() {
        b.mergeRects(this.spaces),
        this.spaces.sort(this.sorter)
    }
    ,
    b.prototype.addSpace = function(a) {
        this.spaces.push(a),
        this.mergeSortSpaces()
    }
    ,
    b.mergeRects = function(a) {
        for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b];
            if (d) {
                var e = a.slice(0);
                e.splice(b, 1);
                for (var f = 0, g = 0, h = e.length; h > g; g++) {
                    var i = e[g]
                      , j = b > g ? 0 : 1;
                    d.contains(i) && (a.splice(g + j - f, 1),
                    f++)
                }
            }
        }
        return a
    }
    ;
    var c = {
        downwardLeftToRight: function(a, b) {
            return a.y - b.y || a.x - b.x
        },
        rightwardTopToBottom: function(a, b) {
            return a.x - b.x || a.y - b.y
        }
    };
    return b
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("packery/js/item", ["get-style-property/get-style-property", "outlayer/outlayer", "./rect"], b) : "object" == typeof exports ? module.exports = b(require("desandro-get-style-property"), require("outlayer"), require("./rect")) : a.Packery.Item = b(a.getStyleProperty, a.Outlayer, a.Packery.Rect)
}(window, function(a, b, c) {
    var d = a("transform")
      , e = function() {
        b.Item.apply(this, arguments)
    };
    e.prototype = new b.Item;
    var f = e.prototype._create;
    return e.prototype._create = function() {
        f.call(this),
        this.rect = new c,
        this.placeRect = new c
    }
    ,
    e.prototype.dragStart = function() {
        this.getPosition(),
        this.removeTransitionStyles(),
        this.isTransitioning && d && (this.element.style[d] = "none"),
        this.getSize(),
        this.isPlacing = !0,
        this.needsPositioning = !1,
        this.positionPlaceRect(this.position.x, this.position.y),
        this.isTransitioning = !1,
        this.didDrag = !1
    }
    ,
    e.prototype.dragMove = function(a, b) {
        this.didDrag = !0;
        var c = this.layout.size;
        a -= c.paddingLeft,
        b -= c.paddingTop,
        this.positionPlaceRect(a, b)
    }
    ,
    e.prototype.dragStop = function() {
        this.getPosition();
        var a = this.position.x != this.placeRect.x
          , b = this.position.y != this.placeRect.y;
        this.needsPositioning = a || b,
        this.didDrag = !1
    }
    ,
    e.prototype.positionPlaceRect = function(a, b, c) {
        this.placeRect.x = this.getPlaceRectCoord(a, !0),
        this.placeRect.y = this.getPlaceRectCoord(b, !1, c)
    }
    ,
    e.prototype.getPlaceRectCoord = function(a, b, c) {
        var d = b ? "Width" : "Height"
          , e = this.size["outer" + d]
          , f = this.layout[b ? "columnWidth" : "rowHeight"]
          , g = this.layout.size["inner" + d];
        b || (g = Math.max(g, this.layout.maxY),
        this.layout.rowHeight || (g -= this.layout.gutter));
        var h;
        if (f) {
            f += this.layout.gutter,
            g += b ? this.layout.gutter : 0,
            a = Math.round(a / f);
            var i;
            i = this.layout.options.isHorizontal ? b ? "ceil" : "floor" : b ? "floor" : "ceil";
            var j = Math[i](g / f);
            j -= Math.ceil(e / f),
            h = j
        } else
            h = g - e;
        return a = c ? a : Math.min(a, h),
        a *= f || 1,
        Math.max(0, a)
    }
    ,
    e.prototype.copyPlaceRectPosition = function() {
        this.rect.x = this.placeRect.x,
        this.rect.y = this.placeRect.y
    }
    ,
    e.prototype.removeElem = function() {
        this.element.parentNode.removeChild(this.element),
        this.layout.packer.addSpace(this.rect),
        this.emitEvent("remove", [this])
    }
    ,
    e
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("packery/js/packery", ["classie/classie", "get-size/get-size", "outlayer/outlayer", "./rect", "./packer", "./item"], b) : "object" == typeof exports ? module.exports = b(require("desandro-classie"), require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : a.Packery = b(a.classie, a.getSize, a.Outlayer, a.Packery.Rect, a.Packery.Packer, a.Packery.Item)
}(window, function(a, b, c, d, e, f) {
    function g(a, b) {
        return a.position.y - b.position.y || a.position.x - b.position.x
    }
    function h(a, b) {
        return a.position.x - b.position.x || a.position.y - b.position.y
    }
    d.prototype.canFit = function(a) {
        return this.width >= a.width - 1 && this.height >= a.height - 1
    }
    ;
    var i = c.create("packery");
    return i.Item = f,
    i.prototype._create = function() {
        c.prototype._create.call(this),
        this.packer = new e,
        this.stamp(this.options.stamped);
        var a = this;
        this.handleDraggabilly = {
            dragStart: function() {
                a.itemDragStart(this.element)
            },
            dragMove: function() {
                a.itemDragMove(this.element, this.position.x, this.position.y)
            },
            dragEnd: function() {
                a.itemDragEnd(this.element)
            }
        },
        this.handleUIDraggable = {
            start: function(b) {
                a.itemDragStart(b.currentTarget)
            },
            drag: function(b, c) {
                a.itemDragMove(b.currentTarget, c.position.left, c.position.top)
            },
            stop: function(b) {
                a.itemDragEnd(b.currentTarget)
            }
        }
    }
    ,
    i.prototype._resetLayout = function() {
        this.getSize(),
        this._getMeasurements();
        var a = this.packer;
        this.options.isHorizontal ? (a.width = Number.POSITIVE_INFINITY,
        a.height = this.size.innerHeight + this.gutter,
        a.sortDirection = "rightwardTopToBottom") : (a.width = this.size.innerWidth + this.gutter,
        a.height = Number.POSITIVE_INFINITY,
        a.sortDirection = "downwardLeftToRight"),
        a.reset(),
        this.maxY = 0,
        this.maxX = 0
    }
    ,
    i.prototype._getMeasurements = function() {
        this._getMeasurement("columnWidth", "width"),
        this._getMeasurement("rowHeight", "height"),
        this._getMeasurement("gutter", "width")
    }
    ,
    i.prototype._getItemLayoutPosition = function(a) {
        return this._packItem(a),
        a.rect
    }
    ,
    i.prototype._packItem = function(a) {
        this._setRectSize(a.element, a.rect),
        this.packer.pack(a.rect),
        this._setMaxXY(a.rect)
    }
    ,
    i.prototype._setMaxXY = function(a) {
        this.maxX = Math.max(a.x + a.width, this.maxX),
        this.maxY = Math.max(a.y + a.height, this.maxY)
    }
    ,
    i.prototype._setRectSize = function(a, c) {
        var d = b(a)
          , e = d.outerWidth
          , f = d.outerHeight;
        (e || f) && (e = this._applyGridGutter(e, this.columnWidth),
        f = this._applyGridGutter(f, this.rowHeight)),
        c.width = Math.min(e, this.packer.width),
        c.height = Math.min(f, this.packer.height)
    }
    ,
    i.prototype._applyGridGutter = function(a, b) {
        if (!b)
            return a + this.gutter;
        b += this.gutter;
        var c = a % b
          , d = c && 1 > c ? "round" : "ceil";
        return a = Math[d](a / b) * b
    }
    ,
    i.prototype._getContainerSize = function() {
        return this.options.isHorizontal ? {
            width: this.maxX - this.gutter
        } : {
            height: this.maxY - this.gutter
        }
    }
    ,
    i.prototype._manageStamp = function(a) {
        var b, c = this.getItem(a);
        if (c && c.isPlacing)
            b = c.placeRect;
        else {
            var e = this._getElementOffset(a);
            b = new d({
                x: this.options.isOriginLeft ? e.left : e.right,
                y: this.options.isOriginTop ? e.top : e.bottom
            })
        }
        this._setRectSize(a, b),
        this.packer.placed(b),
        this._setMaxXY(b)
    }
    ,
    i.prototype.sortItemsByPosition = function() {
        var a = this.options.isHorizontal ? h : g;
        this.items.sort(a)
    }
    ,
    i.prototype.fit = function(a, b, c) {
        var d = this.getItem(a);
        d && (this._getMeasurements(),
        this.stamp(d.element),
        d.getSize(),
        d.isPlacing = !0,
        b = void 0 === b ? d.rect.x : b,
        c = void 0 === c ? d.rect.y : c,
        d.positionPlaceRect(b, c, !0),
        this._bindFitEvents(d),
        d.moveTo(d.placeRect.x, d.placeRect.y),
        this.layout(),
        this.unstamp(d.element),
        this.sortItemsByPosition(),
        d.isPlacing = !1,
        d.copyPlaceRectPosition())
    }
    ,
    i.prototype._bindFitEvents = function(a) {
        function b() {
            d++,
            2 == d && c.emitEvent("fitComplete", [a])
        }
        var c = this
          , d = 0;
        a.on("layout", function() {
            return b(),
            !0
        }),
        this.on("layoutComplete", function() {
            return b(),
            !0
        })
    }
    ,
    i.prototype.resize = function() {
        var a = b(this.element)
          , c = this.size && a
          , d = this.options.isHorizontal ? "innerHeight" : "innerWidth";
        c && a[d] == this.size[d] || this.layout()
    }
    ,
    i.prototype.itemDragStart = function(a) {
        this.stamp(a);
        var b = this.getItem(a);
        b && b.dragStart()
    }
    ,
    i.prototype.itemDragMove = function(a, b, c) {
        function d() {
            f.layout(),
            delete f.dragTimeout
        }
        var e = this.getItem(a);
        e && e.dragMove(b, c);
        var f = this;
        this.clearDragTimeout(),
        this.dragTimeout = setTimeout(d, 40)
    }
    ,
    i.prototype.clearDragTimeout = function() {
        this.dragTimeout && clearTimeout(this.dragTimeout)
    }
    ,
    i.prototype.itemDragEnd = function(b) {
        var c, d = this.getItem(b);
        if (d && (c = d.didDrag,
        d.dragStop()),
        !d || !c && !d.needsPositioning)
            return void this.unstamp(b);
        a.add(d.element, "is-positioning-post-drag");
        var e = this._getDragEndLayoutComplete(b, d);
        d.needsPositioning ? (d.on("layout", e),
        d.moveTo(d.placeRect.x, d.placeRect.y)) : d && d.copyPlaceRectPosition(),
        this.clearDragTimeout(),
        this.on("layoutComplete", e),
        this.layout()
    }
    ,
    i.prototype._getDragEndLayoutComplete = function(b, c) {
        var d = c && c.needsPositioning
          , e = 0
          , f = d ? 2 : 1
          , g = this;
        return function() {
            return e++,
            e != f ? !0 : (c && (a.remove(c.element, "is-positioning-post-drag"),
            c.isPlacing = !1,
            c.copyPlaceRectPosition()),
            g.unstamp(b),
            g.sortItemsByPosition(),
            d && g.emitEvent("dragItemPositioned", [c]),
            !0)
        }
    }
    ,
    i.prototype.bindDraggabillyEvents = function(a) {
        a.on("dragStart", this.handleDraggabilly.dragStart),
        a.on("dragMove", this.handleDraggabilly.dragMove),
        a.on("dragEnd", this.handleDraggabilly.dragEnd)
    }
    ,
    i.prototype.bindUIDraggableEvents = function(a) {
        a.on("dragstart", this.handleUIDraggable.start).on("drag", this.handleUIDraggable.drag).on("dragstop", this.handleUIDraggable.stop)
    }
    ,
    i.Rect = d,
    i.Packer = e,
    i
}),
function(a, b) {
    "function" == typeof define && define.amd ? define(["isotope/js/layout-mode", "packery/js/packery", "get-size/get-size"], b) : "object" == typeof exports ? module.exports = b(require("isotope-layout/js/layout-mode"), require("packery"), require("get-size")) : b(a.Isotope.LayoutMode, a.Packery, a.getSize)
}(window, function(a, b, c) {
    function d(a, b) {
        for (var c in b)
            a[c] = b[c];
        return a
    }
    var e = a.create("packery")
      , f = e.prototype._getElementOffset
      , g = e.prototype._getMeasurement;
    d(e.prototype, b.prototype),
    e.prototype._getElementOffset = f,
    e.prototype._getMeasurement = g;
    var h = e.prototype._resetLayout;
    e.prototype._resetLayout = function() {
        this.packer = this.packer || new b.Packer,
        h.apply(this, arguments)
    }
    ;
    var i = e.prototype._getItemLayoutPosition;
    e.prototype._getItemLayoutPosition = function(a) {
        return a.rect = a.rect || new b.Rect,
        i.call(this, a)
    }
    ;
    var j = e.prototype._manageStamp;
    return e.prototype._manageStamp = function() {
        this.options.isOriginLeft = this.isotope.options.isOriginLeft,
        this.options.isOriginTop = this.isotope.options.isOriginTop,
        j.apply(this, arguments)
    }
    ,
    e.prototype.needsResizeLayout = function() {
        var a = c(this.element)
          , b = this.size && a
          , d = this.options.isHorizontal ? "innerHeight" : "innerWidth";
        return b && a[d] != this.size[d]
    }
    ,
    e
});
/**
 * jQuery.share - social media sharing plugin
 * ---
 * @author Carol Skelly (http://in1.com)
 * @version 1.0
 * @license MIT license (http://opensource.org/licenses/mit-license.php)
 * ---
 */

!function(t, e) {
    var s = e.document;
    t.fn.share = function(i) {
        var r = {
            init: function(i) {
                this.share.settings = t.extend({}, this.share.defaults, i);
                var r = (this.share.settings,
                this.share.settings.networks)
                  , o = this.share.settings.theme
                  , a = this.share.settings.orientation
                  , u = this.share.settings.affix
                  , h = this.share.settings.margin
                  , l = this.share.settings.title || t(s).attr("title")
                  , c = this.share.settings.urlToShare || t(location).attr("href")
                  , p = "";
                return t.each(t(s).find('meta[name="description"]'), function(e, s) {
                    p = t(s).attr("content")
                }),
                this.each(function() {
                    var s, i = t(this), m = i.attr("id"), d = encodeURIComponent(c), f = l.replace("|", ""), g = p.substring(0, 250);
                    r.forEach(function(e) {
                        s = n.networkDefs[e].url,
                        s = s.replace("|u|", d).replace("|t|", f).replace("|d|", g).replace("|140|", f.substring(0, 130)),
                        t("<a href='" + s + "' title='Share this page on " + e + "' class='pop share-" + o + " share-" + o + "-" + e + "'></a>").appendTo(i)
                    }),
                    t("#" + m + ".share-" + o).css("margin", h),
                    "horizontal" != a ? t("#" + m + " a.share-" + o).css("display", "block") : t("#" + m + " a.share-" + o).css("display", "inline-block"),
                    "undefined" != typeof u && (i.addClass("share-affix"),
                    -1 != u.indexOf("right") ? (i.css("left", "auto"),
                    i.css("right", "0px"),
                    -1 != u.indexOf("center") && i.css("top", "40%")) : -1 != u.indexOf("left center") && i.css("top", "40%"),
                    -1 != u.indexOf("bottom") && (i.css("bottom", "0px"),
                    i.css("top", "auto"),
                    -1 != u.indexOf("center") && i.css("left", "40%"))),
                    t(".pop").click(function() {
                        return e.open(t(this).attr("href"), "t", "toolbar=0,resizable=1,status=0,width=640,height=528"),
                        !1
                    })
                })
            }
        }
          , n = {
            networkDefs: {
                facebook: {
                    url: "http://www.facebook.com/share.php?u=|u|"
                },
                twitter: {
                    url: "https://twitter.com/share?via=in1.com&text=|140|"
                },
                linkedin: {
                    url: "http://www.linkedin.com/shareArticle?mini=true&url=|u|&title=|t|&summary=|d|&source=in1.com"
                },
                in1: {
                    url: "http://www.in1.com/cast?u=|u|",
                    w: "490",
                    h: "529"
                },
                tumblr: {
                    url: "http://www.tumblr.com/share?v=3&u=|u|"
                },
                digg: {
                    url: "http://digg.com/submit?url=|u|&title=|t|"
                },
                googleplus: {
                    url: "https://plusone.google.com/_/+1/confirm?hl=en&url=|u|"
                },
                reddit: {
                    url: "http://reddit.com/submit?url=|u|"
                },
                pinterest: {
                    url: "http://pinterest.com/pin/create/button/?url=|u|&media=&description=|d|"
                },
                posterous: {
                    url: "http://posterous.com/share?linkto=|u|&title=|t|"
                },
                stumbleupon: {
                    url: "http://www.stumbleupon.com/submit?url=|u|&title=|t|"
                },
                email: {
                    url: "mailto:?subject=|t|"
                }
            }
        };
        return r[i] ? r[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error('Method "' + i + '" does not exist in social plugin') : r.init.apply(this, arguments)
    }
    ,
    t.fn.share.defaults = {
        networks: ["in1", "facebook", "twitter", "linkedin"],
        theme: "icon",
        autoShow: !0,
        margin: "3px",
        orientation: "horizontal",
        useIn1: !0
    },
    t.fn.share.settings = {}
}(jQuery, window);
/** video**/
"function" != typeof Object.create && (Object.create = function(e) {
    function t() {}
    return t.prototype = e,
    new t
}
),
function(e, t, o) {
    var a = function(e) {
        var t = o.createElement("script")
          , a = o.getElementsByTagName("head")[0];
        t.src = location.protocol + "//www.youtube.com/iframe_api",
        a.appendChild(t),
        a = null,
        t = null,
        n(e)
    }
      , n = function(o) {
        "undefined" == typeof YT && "undefined" == typeof t.loadingPlayer ? (t.loadingPlayer = !0,
        t.dfd = e.Deferred(),
        t.onYouTubeIframeAPIReady = function() {
            t.onYouTubeIframeAPIReady = null,
            t.dfd.resolve("John"),
            o()
        }
        ) : t.dfd.done(function(e) {
            o()
        })
    };
    YTPlayer = {
        player: null,
        defaults: {
            ratio: 16 / 9,
            videoId: "LSmgKRx5pBo",
            mute: !0,
            repeat: !0,
            width: e(t).width(),
            playButtonClass: "YTPlayer-play",
            pauseButtonClass: "YTPlayer-pause",
            muteButtonClass: "YTPlayer-mute",
            volumeUpClass: "YTPlayer-volume-up",
            volumeDownClass: "YTPlayer-volume-down",
            start: 0,
            pauseOnScroll: !1,
            fitToBackground: !0,
            playerVars: {
                modestbranding: 1,
                autoplay: 1,
                controls: 0,
                showinfo: 0,
                wmode: "transparent",
                branding: 0,
                rel: 0,
                autohide: 0,
                origin: t.location.origin
            },
            events: null
        },
        init: function(o, n) {
            var i = this;
            return i.userOptions = n,
            i.$body = e("body"),
            i.$node = e(o),
            i.$window = e(t),
            i.defaults.events = {
                onReady: function(e) {
                    i.onPlayerReady(e),
                    i.options.pauseOnScroll && i.pauseOnScroll(),
                    "function" == typeof i.options.callback && i.options.callback.call(this)
                },
                onStateChange: function(e) {
                    1 === e.data ? i.$node.addClass("loaded") : 0 === e.data && i.options.repeat && i.player.seekTo(i.options.start)
                }
            },
            i.options = e.extend(!0, {}, i.defaults, i.userOptions),
            i.ID = (new Date).getTime(),
            i.holderID = "YTPlayer-ID-" + i.ID,
            i.options.fitToBackground ? i.createBackgroundVideo() : i.createContainerVideo(),
            i.$window.on("resize.YTplayer" + i.ID, function() {
                i.resize(i)
            }),
            a(i.onYouTubeIframeAPIReady.bind(i)),
            i.resize(i),
            i
        },
        pauseOnScroll: function() {
            var e = this;
            e.$window.on("scroll.YTplayer" + e.ID, function() {
                var t = e.player.getPlayerState();
                1 === t && e.player.pauseVideo()
            }),
            e.$window.scrollStopped(function() {
                var t = e.player.getPlayerState();
                2 === t && e.player.playVideo()
            })
        },
        createContainerVideo: function() {
            var t = this
              , o = e('<div id="ytplayer-container' + t.ID + '" >                                    <div id="' + t.holderID + '" class="ytplayer-player"></div>                                     </div>                                     <div id="ytplayer-shield"></div>');
            t.$node.append(o),
            t.$YTPlayerString = o,
            o = null
        },
        createBackgroundVideo: function() {
            var t = this
              , o = e('<div id="ytplayer-container' + t.ID + '" class="ytplayer-container background">                                    <div id="' + t.holderID + '" class="ytplayer-player"></div>                                    </div>                                    <div id="ytplayer-shield"></div>');
            t.$node.append(o),
            t.$YTPlayerString = o,
            o = null
        },
        resize: function(t) {
            var o = e(".media-container");
            t.options.fitToBackground || (o = t.$node);
            var a, n, i = o.width(), r = o.height(), l = e("#" + t.holderID);
            i / t.options.ratio < r ? (a = Math.ceil(r * t.options.ratio),
            l.width(a).height(r).css({
                left: (i - a) / 2,
                top: 0
            })) : (n = Math.ceil(i / t.options.ratio),
            l.width(i).height(n).css({
                left: 0,
                top: 0
            })),
            l = null,
            o = null
        },
        onYouTubeIframeAPIReady: function() {
            var e = this;
            e.player = new t.YT.Player(e.holderID,{
                width: e.options.width,
                height: Math.ceil(e.options.width / e.options.ratio),
                videoId: e.options.videoId,
                playerVars: e.options.playerVars,
                events: e.options.events
            })
        },
        onPlayerReady: function(e) {
            this.options.mute && e.target.mute(),
            e.target.playVideo()
        },
        getPlayer: function() {
            return this.player
        },
        destroy: function() {
            var o = this;
            o.$node.removeData("yt-init").removeData("ytPlayer").removeClass("loaded"),
            o.$YTPlayerString.remove(),
            e(t).off("resize.YTplayer" + o.ID),
            e(t).off("scroll.YTplayer" + o.ID),
            o.$body = null,
            o.$node = null,
            o.$YTPlayerString = null,
            o.player.destroy(),
            o.player = null
        }
    },
    e.fn.scrollStopped = function(t) {
        var o = e(this)
          , a = this;
        o.scroll(function() {
            o.data("scrollTimeout") && clearTimeout(o.data("scrollTimeout")),
            o.data("scrollTimeout", setTimeout(t, 250, a))
        })
    }
    ,
    e.fn.YTPlayer = function(t) {
        return this.each(function() {
            var o = this;
            e(o).data("yt-init", !0);
            var a = Object.create(YTPlayer);
            a.init(o, t),
            e.data(o, "ytPlayer", a)
        })
    }
}(jQuery, window, document);
/**
 *  Parallax Scrolling Library
 *
 */
(function(e) {
    "function" === typeof define && define.amd ? define(["jquery"], e) : "undefined" !== typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}
)(function(e) {
    function W(a) {
        if (console && console.warn)
            console.warn("Scrollax: " + a);
        else
            throw "Scrollax: " + a;
    }
    function ka(a) {
        var g = !!("pageYOffset"in a);
        return {
            width: g ? window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth : a.offsetWidth,
            height: g ? window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight : a.offsetHeight,
            left: a[g ? "pageXOffset" : "scrollLeft"],
            top: a[g ? "pageYOffset" : "scrollTop"]
        }
    }
    function X(a) {
        return (a = a.data("scrollax")) && eval("({" + a + "})") || {}
    }
    function Y(a) {
        var g, c;
        return !!(a && "object" === typeof a && "object" === typeof a.window && a.window == a && a.setTimeout && a.alert && (g = a.document) && "object" === typeof g && (c = g.defaultView || g.parentWindow) && "object" === typeof c && c == a)
    }
    var v = Array.prototype, C = v.push, Z = v.splice, aa = Object.prototype.hasOwnProperty, la = /[-+]?\d+(\.\d+)?/g, ma = "translateX translateY rotate rotateX rotateY rotateZ skewX skewY scaleX scaleY".split(" "), ba = e(window), ca = e(document.body), da, ea, L, M, N, q = function(a, g, c) {
        function k() {
            O = fa ? ca.find(ga) : P.find(ga);
            x.length = 0;
            r = !!t.horizontal;
            O.each(na);
            d();
            t.performanceTrick && (F = fa ? ca : P);
            u("load");
            return f
        }
        function l() {
            G && (G = clearTimeout(G));
            G = setTimeout(function() {
                f.reload()
            })
        }
        function d() {
            var ha = x.length;
            t.performanceTrick && F && (clearTimeout(ia),
            Q || (F.addClass("scrollax-performance"),
            Q = !0),
            ia = setTimeout(function() {
                F.removeClass("scrollax-performance");
                Q = !1
            }, 100));
            if (ha) {
                H = ka(a);
                for (var c = 0; c < ha; c++)
                    I = x[c],
                    y = L(I.element, a),
                    0 > y[r ? "right" : "bottom"] || y[r ? "left" : "top"] > H[r ? "width" : "height"] || (ja = I.options,
                    R = ja.offset || t.offset || 0,
                    J = y[r ? "right" : "bottom"],
                    z = y[r ? "width" : "height"],
                    A = (z - J + R) / z,
                    0 > A && (J = y[r ? "left" : "top"],
                    z = H[r ? "width" : "height"],
                    A = -1 + (z - J + R) / z),
                    1 < A || -1 > A || b(I, A, r));
                u("scroll", H)
            }
        }
        function b(a, b) {
            S = a.parallaxElements;
            var c = S.length;
            if (c)
                for (var f = 0; f < c; f++) {
                    T = S[f];
                    var g = oa = T.element
                      , d = b;
                    U = T.properties || (r ? {
                        translateX: "100%"
                    } : {
                        translateY: "100%"
                    });
                    D = "";
                    for (B in U) {
                        n = U[B];
                        if ("number" === typeof n)
                            n *= d;
                        else if ("string" === typeof n)
                            for (K = n.match(la),
                            m = 0,
                            E = K.length; m < E; m++)
                                n = n.replace(K[m], parseFloat(K[m] * d));
                        if (-1 !== e.inArray(B, ma))
                            D += B + "(" + n + ")";
                        else {
                            var k = g.style, l = B, h;
                            "opacity" === B ? (h = 0 > d ? 1 + n : 1 - n,
                            h = 0 > h ? 0 : 1 < h ? 1 : h) : h = n;
                            k[l] = h
                        }
                    }
                    D && (g.style[da] = ea + D)
                }
        }
        function pa(a) {
            return "undefined" !== typeof a ? "number" !== typeof a && "string" !== typeof a || "" === a || isNaN(a) ? O.index(a) : 0 <= a && a < x.length ? a : -1 : -1
        }
        function u(a, b) {
            if (h[a]) {
                E = h[a].length;
                for (m = V.length = 0; m < E; m++)
                    C.call(V, h[a][m]);
                for (m = 0; m < E; m++)
                    V[m].call(f, a, b)
            }
        }
        function p(a, b) {
            for (var c = 0, f = h[a].length; c < f; c++)
                if (h[a][c] === b)
                    return c;
            return -1
        }
        var f = this
          , P = a && e(a).eq(0) || ba
          , w = q.instances
          , v = null;
        a = P[0];
        e.each(w, function(b, c) {
            b && b.frame === a && (v = !0)
        });
        if (!a || v)
            v ? W("Scrollax: Scrollax has been initialized for this frame!") : W("Scrollax: Frame is not available!");
        else {
            var t = e.extend({}, q.defaults, g), x = [], O = null, ga = t.parentSelector || "[data-scrollax-parent]", qa = t.elementsSelector || "[data-scrollax]", h = {}, V = [], G, fa = Y(a), m, E, F, ia, Q, H, r, R, y, I, ja, A, J, z, S, T, oa, U, B, n, D, K;
            f.frame = a;
            f.options = t;
            f.parents = x;
            f.initialized = !1;
            f.reload = k;
            var na = function(a, b) {
                var c = e(b)
                  , f = X(e(b))
                  , d = {};
                d.element = b;
                d.options = f;
                d.parallaxElements = [];
                c.find(qa).each(function(a, b) {
                    var c = X(e(b));
                    c.element = b;
                    C.call(d.parallaxElements, c)
                });
                C.call(x, d)
            };
            f.scroll = d;
            f.getIndex = pa;
            f.one = function(a, b) {
                function c() {
                    b.apply(f, arguments);
                    f.off(a, c)
                }
                f.on(a, c);
                return f
            }
            ;
            f.on = function(a, b) {
                if ("object" === typeof a)
                    for (var c in a) {
                        if (aa.call(a, c))
                            f.on(c, a[c])
                    }
                else if ("function" === typeof b) {
                    c = a.split(" ");
                    for (var d = 0, g = c.length; d < g; d++)
                        h[c[d]] = h[c[d]] || [],
                        -1 === p(c[d], b) && C.call(h[c[d]], b)
                } else if ("array" === typeof b)
                    for (c = 0,
                    d = b.length; c < d; c++)
                        f.on(a, b[c]);
                return f
            }
            ;
            f.off = function(a, c) {
                if (c instanceof Array)
                    for (var b = 0, d = c.length; b < d; b++)
                        f.off(a, c[b]);
                else
                    for (var b = a.split(" "), d = 0, g = b.length; d < g; d++)
                        if (h[b[d]] = h[b[d]] || [],
                        "undefined" === typeof c)
                            h[b[d]].length = 0;
                        else {
                            var k = p(b[d], c);
                            -1 !== k && Z.call(h[b[d]], k, 1)
                        }
                return f
            }
            ;
            f.set = function(a, b) {
                e.isPlainObject(a) ? e.extend(t, a) : aa.call(t, a) && (t[a] = b);
                k();
                return f
            }
            ;
            f.destroy = function() {
                N(window, "resize", l);
                N(a, "scroll", d);
                e.each(w, function(b, c) {
                    b && b.frame === a && Z.call(q.instances, c, 1)
                });
                x.length = 0;
                f.initialized = !1;
                u("destroy");
                return f
            }
            ;
            f.init = function() {
                if (!f.initialized)
                    return f.on(c),
                    k(),
                    M(window, "resize", l),
                    M(a, "scroll", d),
                    C.call(q.instances, f),
                    f.initialized = !0,
                    u("initialized"),
                    f
            }
        }
    };
    q.instances = [];
    (function() {
        var a, g, c, k, l, d, b, e;
        L = function(u, p) {
            g = u.ownerDocument || u;
            c = g.documentElement;
            k = Y(p) ? p : g.defaultView || window;
            p = p && p !== g ? p : c;
            l = (k.pageYOffset || c.scrollTop) - c.clientTop;
            d = (k.pageXOffset || c.scrollLeft) - c.clientLeft;
            b = {
                top: 0,
                left: 0
            };
            if (u && u.getBoundingClientRect) {
                var f = {}
                  , q = u.getBoundingClientRect();
                for (a in q)
                    f[a] = q[a];
                b = f;
                b.width = b.right - b.left;
                b.height = b.bottom - b.top
            } else
                return null;
            if (p === k)
                return b;
            b.top += l;
            b.left += d;
            b.right += d;
            b.bottom += l;
            if (p === c)
                return b;
            e = L(p);
            b.left -= e.left;
            b.right -= e.left;
            b.top -= e.top;
            b.bottom -= e.top;
            return b
        }
    }
    )();
    (function() {
        function a() {
            this.returnValue = !1
        }
        function g() {
            this.cancelBubble = !0
        }
        M = window.addEventListener ? function(a, g, e, d) {
            a.addEventListener(g, e, d || !1);
            return e
        }
        : function(c, e, l) {
            var d = e + l;
            c[d] = c[d] || function() {
                var b = window.event;
                b.target = b.srcElement;
                b.preventDefault = a;
                b.stopPropagation = g;
                l.call(c, b)
            }
            ;
            c.attachEvent("on" + e, c[d]);
            return l
        }
        ;
        N = window.removeEventListener ? function(a, g, e, d) {
            a.removeEventListener(g, e, d || !1);
            return e
        }
        : function(a, g, e) {
            var d = g + e;
            a.detachEvent("on" + g, a[d]);
            try {
                delete a[d]
            } catch (b) {
                a[d] = void 0
            }
            return e
        }
    }
    )();
    (function() {
        function a(a) {
            for (var e = 0, d = g.length; e < d; e++) {
                var b = g[e] ? g[e] + a.charAt(0).toUpperCase() + a.slice(1) : a;
                if (null != c.style[b])
                    return b
            }
        }
        var g = ["", "webkit", "moz", "ms", "o"]
          , c = document.createElement("div");
        da = a("transform");
        ea = a("perspective") ? "translateZ(0) " : ""
    }
    )();
    q.defaults = {
        horizontal: !1,
        offset: 0,
        parentSelector: null,
        elementsSelector: null,
        performanceTrick: !1
    };
    window.Scrollax = q;
    e.fn.Scrollax = function(a, g) {
        var c, k;
        if (!e.isPlainObject(a)) {
            if ("string" === typeof a || !1 === a)
                c = !1 === a ? "destroy" : a,
                k = slice.call(arguments, 1);
            a = {}
        }
        return this.each(function(l, d) {
            var b = e.data(d, "scrollax");
            b || c ? b && c && b[c] && b[c].apply(b, k) : e.data(d, "scrollax", (new q(d,a,g)).init())
        })
    }
    ;
    e.Scrollax = function(a, e) {
        ba.Scrollax(a, e)
    }
    ;
    var v = document.head || document.getElementsByTagName("head")[0]
      , w = document.createElement("style");
    w.type = "text/css";
    w.styleSheet ? w.styleSheet.cssText = ".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };" : w.appendChild(document.createTextNode(".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };"));
    v.appendChild(w);
    return q
});
// appear
(function($) {
    $.fn.appear = function(f, o) {
        var s = $.extend({
            one: true
        }, o);
        return this.each(function() {
            var t = $(this);
            t.appeared = false;
            if (!f) {
                t.trigger('appear', s.data);
                return;
            }
            var w = $(window);
            var c = function() {
                if (!t.is(':visible')) {
                    t.appeared = false;
                    return;
                }
                var a = w.scrollLeft();
                var b = w.scrollTop();
                var o = t.offset();
                var x = o.left;
                var y = o.top;
                if (y + t.height() >= b && y <= b + w.height() && x + t.width() >= a && x <= a + w.width()) {
                    if (!t.appeared)
                        t.trigger('appear', s.data);
                } else {
                    t.appeared = false;
                }
            };
            var m = function() {
                t.appeared = true;
                if (s.one) {
                    w.unbind('scroll', c);
                    var i = $.inArray(c, $.fn.appear.checks);
                    if (i >= 0)
                        $.fn.appear.checks.splice(i, 1);
                }
                f.apply(this, arguments);
            };
            if (s.one)
                t.one('appear', s.data, m);
            else
                t.bind('appear', s.data, m);
            w.scroll(c);
            $.fn.appear.checks.push(c);
            (c)();
        });
    }
    ;
    $.extend($.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function() {
            var l = $.fn.appear.checks.length;
            if (l > 0)
                while (l--)
                    ($.fn.appear.checks[l])();
        },
        run: function() {
            if ($.fn.appear.timeout)
                clearTimeout($.fn.appear.timeout);
            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
        }
    });
    $.each(['append', 'prepend', 'after', 'before', 'attr', 'removeAttr', 'addClass', 'removeClass', 'toggleClass', 'remove', 'css', 'show', 'hide'], function(i, n) {
        var u = $.fn[n];
        if (u) {
            $.fn[n] = function() {
                var r = u.apply(this, arguments);
                $.fn.appear.run();
                return r;
            }
        }
    });
}
)(jQuery);

/**
 * Single Page Nav Plugin
 * Copyright (c) 2014 Chris Wojcik <hello@chriswojcik.net>
 * Dual licensed under MIT and GPL.
 * @author Chris Wojcik
 * @version 1.2.0
 */

// Utility
if (typeof Object.create !== 'function') {
    Object.create = function(obj) {
        function F() {}
        F.prototype = obj;
        return new F()
    }
}
(function($, window, document, undefined) {
    "use strict";
    var SinglePageNav = {
        init: function(options, container) {
            this.options = $.extend({}, $.fn.singlePageNav.defaults, options);
            this.container = container;
            this.$container = $(container);
            this.$links = this.$container.find('a');
            if (this.options.filter !== '') {
                this.$links = this.$links.filter(this.options.filter)
            }
            this.$window = $(window);
            this.$htmlbody = $('html, body');
            this.$links.on('click.singlePageNav', $.proxy(this.handleClick, this));
            this.didScroll = false;
            this.checkPosition();
            this.setTimer()
        },
        handleClick: function(e) {
            var self = this
              , link = e.currentTarget
              , $elem = $(link.hash);
            e.preventDefault();
            if ($elem.length) {
                self.clearTimer();
                if (typeof self.options.beforeStart === 'function') {
                    self.options.beforeStart()
                }
                self.setActiveLink(link.hash);
                self.scrollTo($elem, function() {
                    if (self.options.updateHash && history.pushState) {
                        history.pushState(null, null, link.hash)
                    }
                    self.setTimer();
                    if (typeof self.options.onComplete === 'function') {
                        self.options.onComplete()
                    }
                })
            }
        },
        scrollTo: function($elem, callback) {
            var self = this;
            var target = self.getCoords($elem).top;
            var called = false;
            self.$htmlbody.stop().animate({
                scrollTop: target
            }, {
                duration: self.options.speed,
                easing: self.options.easing,
                complete: function() {
                    if (typeof callback === 'function' && !called) {
                        callback()
                    }
                    called = true
                }
            })
        },
        setTimer: function() {
            var self = this;
            self.$window.on('scroll.singlePageNav', function() {
                self.didScroll = true
            });
            self.timer = setInterval(function() {
                if (self.didScroll) {
                    self.didScroll = false;
                    self.checkPosition()
                }
            }, 250)
        },
        clearTimer: function() {
            clearInterval(this.timer);
            this.$window.off('scroll.singlePageNav');
            this.didScroll = false
        },
        checkPosition: function() {
            var scrollPos = this.$window.scrollTop();
            var currentSection = this.getCurrentSection(scrollPos);
            if (currentSection !== null) {
                this.setActiveLink(currentSection)
            }
        },
        getCoords: function($elem) {
            return {
                top: Math.round($elem.offset().top) - this.options.offset
            }
        },
        setActiveLink: function(href) {
            var $activeLink = this.$container.find("a[href$='" + href + "']");
            if (!$activeLink.hasClass(this.options.currentClass)) {
                this.$links.removeClass(this.options.currentClass);
                $activeLink.addClass(this.options.currentClass);
                if ($(".scroll-nav  a").hasClass("act-link"))
                    $(".scroll-nav  a.act-link").each(function() {
                        var a = $(this).data("bgscr")
                          , b = $(this).data("bgtex");
                        var ua = window.navigator.userAgent;
                        var msie = ua.indexOf("MSIE ");
                        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
                            $(".bg-title span").html(b)
                        } else {
                            $(".bg-title span").html(b).shuffleLetters({})
                        }
                        $(".column-image").addClass("scrbg");
                        setTimeout(function() {
                            $(".bg-scroll").css("background-image", "url(" + a + ")");
                            $(".column-image").removeClass("scrbg")
                        }, 700)
                    })
            }
        },
        getCurrentSection: function(scrollPos) {
            var i, hash, coords, section;
            for (i = 0; i < this.$links.length; i++) {
                hash = this.$links[i].hash;
                if ($(hash).length) {
                    coords = this.getCoords($(hash));
                    if (scrollPos >= coords.top - this.options.threshold) {
                        section = hash
                    }
                }
            }
            return section || ((this.$links.length === 0) ? (null) : (this.$links[0].hash))
        }
    };
    $.fn.singlePageNav = function(options) {
        return this.each(function() {
            var singlePageNav = Object.create(SinglePageNav);
            singlePageNav.init(options, this)
        })
    }
    ;
    $.fn.singlePageNav.defaults = {
        offset: 0,
        threshold: 120,
        speed: 400,
        currentClass: 'current',
        easing: 'swing',
        updateHash: false,
        filter: '',
        onComplete: false,
        beforeStart: false
    }
}
)(jQuery, window, document);
// ScrollToFixed
(function(a) {
    a.isScrollToFixed = function(b) {
        return !!a(b).data("ScrollToFixed")
    }
    ;
    a.ScrollToFixed = function(d, i) {
        var l = this;
        l.$el = a(d);
        l.el = d;
        l.$el.data("ScrollToFixed", l);
        var c = false;
        var G = l.$el;
        var H;
        var E;
        var e;
        var y;
        var D = 0;
        var q = 0;
        var j = -1;
        var f = -1;
        var t = null;
        var z;
        var g;
        function u() {
            G.trigger("preUnfixed.ScrollToFixed");
            k();
            G.trigger("unfixed.ScrollToFixed");
            f = -1;
            D = G.offset().top;
            q = G.offset().left;
            if (l.options.offsets) {
                q += (G.offset().left - G.position().left)
            }
            if (j == -1) {
                j = q
            }
            H = G.css("position");
            c = true;
            if (l.options.bottom != -1) {
                G.trigger("preFixed.ScrollToFixed");
                w();
                G.trigger("fixed.ScrollToFixed")
            }
        }
        function n() {
            var I = l.options.limit;
            if (!I) {
                return 0
            }
            if (typeof (I) === "function") {
                return I.apply(G)
            }
            return I
        }
        function p() {
            return H === "fixed"
        }
        function x() {
            return H === "absolute"
        }
        function h() {
            return !(p() || x())
        }
        function w() {
            if (!p()) {
                t.css({
                    display: G.css("display"),
                    width: G.outerWidth(true),
                    height: G.outerHeight(true),
                    "float": G.css("float")
                });
                cssOptions = {
                    "z-index": l.options.zIndex,
                    position: "fixed",
                    top: l.options.bottom == -1 ? s() : "",
                    bottom: l.options.bottom == -1 ? "" : l.options.bottom,
                    "margin-left": "0px"
                };
                if (!l.options.dontSetWidth) {
                    cssOptions.width = G.width()
                }
                G.css(cssOptions);
                G.addClass(l.options.baseClassName);
                if (l.options.className) {
                    G.addClass(l.options.className)
                }
                H = "fixed"
            }
        }
        function b() {
            var J = n();
            var I = q;
            if (l.options.removeOffsets) {
                I = "";
                J = J - D
            }
            cssOptions = {
                position: "absolute",
                top: J,
                left: I,
                "margin-left": "0px",
                bottom: ""
            };
            if (!l.options.dontSetWidth) {
                cssOptions.width = G.width()
            }
            G.css(cssOptions);
            H = "absolute"
        }
        function k() {
            if (!h()) {
                f = -1;
                t.css("display", "none");
                G.css({
                    "z-index": y,
                    width: "",
                    position: E,
                    left: "",
                    top: e,
                    "margin-left": ""
                });
                G.removeClass("scroll-to-fixed-fixed");
                if (l.options.className) {
                    G.removeClass(l.options.className)
                }
                H = null
            }
        }
        function v(I) {
            if (I != f) {
                G.css("left", q - I);
                f = I
            }
        }
        function s() {
            var I = l.options.marginTop;
            if (!I) {
                return 0
            }
            if (typeof (I) === "function") {
                return I.apply(G)
            }
            return I
        }
        function A() {
            if (!a.isScrollToFixed(G)) {
                return
            }
            var K = c;
            if (!c) {
                u()
            } else {
                if (h()) {
                    D = G.offset().top;
                    q = G.offset().left
                }
            }
            var I = a(window).scrollLeft();
            var L = a(window).scrollTop();
            var J = n();
            if (l.options.minWidth && a(window).width() < l.options.minWidth) {
                if (!h() || !K) {
                    o();
                    G.trigger("preUnfixed.ScrollToFixed");
                    k();
                    G.trigger("unfixed.ScrollToFixed")
                }
            } else {
                if (l.options.maxWidth && a(window).width() > l.options.maxWidth) {
                    if (!h() || !K) {
                        o();
                        G.trigger("preUnfixed.ScrollToFixed");
                        k();
                        G.trigger("unfixed.ScrollToFixed")
                    }
                } else {
                    if (l.options.bottom == -1) {
                        if (J > 0 && L >= J - s()) {
                            if (!x() || !K) {
                                o();
                                G.trigger("preAbsolute.ScrollToFixed");
                                b();
                                G.trigger("unfixed.ScrollToFixed")
                            }
                        } else {
                            if (L >= D - s()) {
                                if (!p() || !K) {
                                    o();
                                    G.trigger("preFixed.ScrollToFixed");
                                    w();
                                    f = -1;
                                    G.trigger("fixed.ScrollToFixed")
                                }
                                v(I)
                            } else {
                                if (!h() || !K) {
                                    o();
                                    G.trigger("preUnfixed.ScrollToFixed");
                                    k();
                                    G.trigger("unfixed.ScrollToFixed")
                                }
                            }
                        }
                    } else {
                        if (J > 0) {
                            if (L + a(window).height() - G.outerHeight(true) >= J - (s() || -m())) {
                                if (p()) {
                                    o();
                                    G.trigger("preUnfixed.ScrollToFixed");
                                    if (E === "absolute") {
                                        b()
                                    } else {
                                        k()
                                    }
                                    G.trigger("unfixed.ScrollToFixed")
                                }
                            } else {
                                if (!p()) {
                                    o();
                                    G.trigger("preFixed.ScrollToFixed");
                                    w()
                                }
                                v(I);
                                G.trigger("fixed.ScrollToFixed")
                            }
                        } else {
                            v(I)
                        }
                    }
                }
            }
        }
        function m() {
            if (!l.options.bottom) {
                return 0
            }
            return l.options.bottom
        }
        function o() {
            var I = G.css("position");
            if (I == "absolute") {
                G.trigger("postAbsolute.ScrollToFixed")
            } else {
                if (I == "fixed") {
                    G.trigger("postFixed.ScrollToFixed")
                } else {
                    G.trigger("postUnfixed.ScrollToFixed")
                }
            }
        }
        var C = function(I) {
            if (G.is(":visible")) {
                c = false;
                A()
            }
        };
        var F = function(I) {
            (!!window.requestAnimationFrame) ? requestAnimationFrame(A) : A()
        };
        var B = function() {
            var J = document.body;
            if (document.createElement && J && J.appendChild && J.removeChild) {
                var L = document.createElement("div");
                if (!L.getBoundingClientRect) {
                    return null
                }
                L.innerHTML = "x";
                L.style.cssText = "position:fixed;top:100px;";
                J.appendChild(L);
                var M = J.style.height
                  , N = J.scrollTop;
                J.style.height = "3000px";
                J.scrollTop = 500;
                var I = L.getBoundingClientRect().top;
                J.style.height = M;
                var K = (I === 100);
                J.removeChild(L);
                J.scrollTop = N;
                return K
            }
            return null
        };
        var r = function(I) {
            I = I || window.event;
            if (I.preventDefault) {
                I.preventDefault()
            }
            I.returnValue = false
        };
        l.init = function() {
            l.options = a.extend({}, a.ScrollToFixed.defaultOptions, i);
            y = G.css("z-index");
            l.$el.css("z-index", l.options.zIndex);
            t = a("<div />");
            H = G.css("position");
            E = G.css("position");
            e = G.css("top");
            if (h()) {
                l.$el.after(t)
            }
            a(window).bind("resize.ScrollToFixed", C);
            a(window).bind("scroll.ScrollToFixed", F);
            if ("ontouchmove"in window) {
                a(window).bind("touchmove.ScrollToFixed", A)
            }
            if (l.options.preFixed) {
                G.bind("preFixed.ScrollToFixed", l.options.preFixed)
            }
            if (l.options.postFixed) {
                G.bind("postFixed.ScrollToFixed", l.options.postFixed)
            }
            if (l.options.preUnfixed) {
                G.bind("preUnfixed.ScrollToFixed", l.options.preUnfixed)
            }
            if (l.options.postUnfixed) {
                G.bind("postUnfixed.ScrollToFixed", l.options.postUnfixed)
            }
            if (l.options.preAbsolute) {
                G.bind("preAbsolute.ScrollToFixed", l.options.preAbsolute)
            }
            if (l.options.postAbsolute) {
                G.bind("postAbsolute.ScrollToFixed", l.options.postAbsolute)
            }
            if (l.options.fixed) {
                G.bind("fixed.ScrollToFixed", l.options.fixed)
            }
            if (l.options.unfixed) {
                G.bind("unfixed.ScrollToFixed", l.options.unfixed)
            }
            if (l.options.spacerClass) {
                t.addClass(l.options.spacerClass)
            }
            G.bind("resize.ScrollToFixed", function() {
                t.height(G.height())
            });
            G.bind("scroll.ScrollToFixed", function() {
                G.trigger("preUnfixed.ScrollToFixed");
                k();
                G.trigger("unfixed.ScrollToFixed");
                A()
            });
            G.bind("detach.ScrollToFixed", function(I) {
                r(I);
                G.trigger("preUnfixed.ScrollToFixed");
                k();
                G.trigger("unfixed.ScrollToFixed");
                a(window).unbind("resize.ScrollToFixed", C);
                a(window).unbind("scroll.ScrollToFixed", F);
                G.unbind(".ScrollToFixed");
                t.remove();
                l.$el.removeData("ScrollToFixed")
            });
            C()
        }
        ;
        l.init()
    }
    ;
    a.ScrollToFixed.defaultOptions = {
        marginTop: 0,
        limit: 0,
        bottom: -1,
        zIndex: 1000,
        baseClassName: "scroll-to-fixed-fixed"
    };
    a.fn.scrollToFixed = function(b) {
        return this.each(function() {
            (new a.ScrollToFixed(this,b))
        })
    }
}
)(jQuery);
/**!
 * easyPieChart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.1
 **/
(function(e, t) {
    if (typeof exports === "object") {
        module.exports = t(require("jquery"))
    } else if (typeof define === "function" && define.amd) {
        define("EasyPieChart", ["jquery"], t)
    } else {
        t(e.jQuery)
    }
}
)(this, function(e) {
    var t = function(e, t) {
        var n;
        var r = document.createElement("canvas");
        if (typeof G_vmlCanvasManager !== "undefined") {
            G_vmlCanvasManager.initElement(r)
        }
        var i = r.getContext("2d");
        r.width = r.height = t.size;
        e.appendChild(r);
        var s = 1;
        if (window.devicePixelRatio > 1) {
            s = window.devicePixelRatio;
            r.style.width = r.style.height = [t.size, "px"].join("");
            r.width = r.height = t.size * s;
            i.scale(s, s)
        }
        i.translate(t.size / 2, t.size / 2);
        i.rotate((-1 / 2 + t.rotate / 180) * Math.PI);
        var o = (t.size - t.lineWidth) / 2;
        if (t.scaleColor && t.scaleLength) {
            o -= t.scaleLength + 2
        }
        Date.now = Date.now || function() {
            return +(new Date)
        }
        ;
        var u = function(e, t, n) {
            n = Math.min(Math.max(0, n || 1), 1);
            i.beginPath();
            i.arc(0, 0, o, 0, Math.PI * 2 * n, false);
            i.strokeStyle = e;
            i.lineWidth = t;
            i.stroke()
        };
        var a = function() {
            var e;
            var n;
            var r = 24;
            i.lineWidth = 1;
            i.fillStyle = t.scaleColor;
            i.save();
            for (var r = 24; r > 0; --r) {
                if (r % 6 === 0) {
                    n = t.scaleLength;
                    e = 0
                } else {
                    n = t.scaleLength * .6;
                    e = t.scaleLength - n
                }
                i.fillRect(-t.size / 2 + e, 0, n, 1);
                i.rotate(Math.PI / 12)
            }
            i.restore()
        };
        var f = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
                window.setTimeout(e, 1e3 / 60)
            }
        }();
        var l = function() {
            t.scaleColor && a();
            t.trackColor && u(t.trackColor, t.lineWidth)
        };
        this.clear = function() {
            i.clearRect(t.size / -2, t.size / -2, t.size, t.size)
        }
        ;
        this.draw = function(e) {
            if (!!t.scaleColor || !!t.trackColor) {
                if (i.getImageData && i.putImageData) {
                    if (!n) {
                        l();
                        n = i.getImageData(0, 0, t.size * s, t.size * s)
                    } else {
                        i.putImageData(n, 0, 0)
                    }
                } else {
                    this.clear();
                    l()
                }
            } else {
                this.clear()
            }
            i.lineCap = t.lineCap;
            var r;
            if (typeof t.barColor === "function") {
                r = t.barColor(e)
            } else {
                r = t.barColor
            }
            if (e > 0) {
                u(r, t.lineWidth, e / 100)
            }
        }
        .bind(this);
        this.animate = function(e, n) {
            var r = Date.now();
            t.onStart(e, n);
            var i = function() {
                var s = Math.min(Date.now() - r, t.animate);
                var o = t.easing(this, s, e, n - e, t.animate);
                this.draw(o);
                t.onStep(e, n, o);
                if (s >= t.animate) {
                    t.onStop(e, n)
                } else {
                    f(i)
                }
            }
            .bind(this);
            f(i)
        }
        .bind(this)
    };
    var n = function(e, n) {
        var r = {
            barColor: "#F54A4B",
            trackColor: "#ccc",
            scaleColor: "#ccc",
            scaleLength: 0,
            lineCap: "round",
            lineWidth: 10,
            size: 152,
            rotate: 0,
            animate: 4e3,
            easing: function(e, t, n, r, i) {
                t = t / (i / 2);
                if (t < 1) {
                    return r / 2 * t * t + n
                }
                return -r / 2 * (--t * (t - 2) - 1) + n
            },
            onStart: function(e, t) {
                return
            },
            onStep: function(e, t, n) {
                return
            },
            onStop: function(e, t) {
                return
            }
        };
        if (typeof t !== "undefined") {
            r.renderer = t
        } else if (typeof SVGRenderer !== "undefined") {
            r.renderer = SVGRenderer
        } else {
            throw new Error("Please load either the SVG- or the CanvasRenderer")
        }
        var i = {};
        var s = 0;
        var o = function() {
            this.el = e;
            this.options = i;
            for (var t in r) {
                if (r.hasOwnProperty(t)) {
                    i[t] = n && typeof n[t] !== "undefined" ? n[t] : r[t];
                    if (typeof i[t] === "function") {
                        i[t] = i[t].bind(this)
                    }
                }
            }
            if (typeof i.easing === "string" && typeof jQuery !== "undefined" && jQuery.isFunction(jQuery.easing[i.easing])) {
                i.easing = jQuery.easing[i.easing]
            } else {
                i.easing = r.easing
            }
            this.renderer = new i.renderer(e,i);
            this.renderer.draw(s);
            if (e.dataset && e.dataset.percent) {
                this.update(parseFloat(e.dataset.percent))
            } else if (e.getAttribute && e.getAttribute("data-percent")) {
                this.update(parseFloat(e.getAttribute("data-percent")))
            }
        }
        .bind(this);
        this.update = function(e) {
            e = parseFloat(e);
            if (i.animate) {
                this.renderer.animate(s, e)
            } else {
                this.renderer.draw(e)
            }
            s = e;
            return this
        }
        .bind(this);
        o()
    };
    e.fn.easyPieChart = function(t) {
        return this.each(function() {
            if (!e.data(this, "easyPieChart")) {
                e.data(this, "easyPieChart", new n(this,t))
            }
        })
    }
});
/**
 * Swiper 3.4.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/swiper/
 *
 * Copyright 2017, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: March 10, 2017
 */
!function() {
    "use strict";
    var e, a = function(s, i) {
        function r(e) {
            return Math.floor(e)
        }
        function n() {
            var e = T.params.autoplay
              , a = T.slides.eq(T.activeIndex);
            a.attr("data-swiper-autoplay") && (e = a.attr("data-swiper-autoplay") || T.params.autoplay),
            T.autoplayTimeoutId = setTimeout(function() {
                T.params.loop ? (T.fixLoop(),
                T._slideNext(),
                T.emit("onAutoplay", T)) : T.isEnd ? i.autoplayStopOnLast ? T.stopAutoplay() : (T._slideTo(0),
                T.emit("onAutoplay", T)) : (T._slideNext(),
                T.emit("onAutoplay", T))
            }, e)
        }
        function o(a, t) {
            var s = e(a.target);
            if (!s.is(t))
                if ("string" == typeof t)
                    s = s.parents(t);
                else if (t.nodeType) {
                    var i;
                    return s.parents().each(function(e, a) {
                        a === t && (i = t)
                    }),
                    i ? t : void 0
                }
            if (0 !== s.length)
                return s[0]
        }
        function l(e, a) {
            a = a || {};
            var t = window.MutationObserver || window.WebkitMutationObserver
              , s = new t(function(e) {
                e.forEach(function(e) {
                    T.onResize(!0),
                    T.emit("onObserverUpdate", T, e)
                })
            }
            );
            s.observe(e, {
                attributes: void 0 === a.attributes || a.attributes,
                childList: void 0 === a.childList || a.childList,
                characterData: void 0 === a.characterData || a.characterData
            }),
            T.observers.push(s)
        }
        function p(e) {
            e.originalEvent && (e = e.originalEvent);
            var a = e.keyCode || e.charCode;
            if (!T.params.allowSwipeToNext && (T.isHorizontal() && 39 === a || !T.isHorizontal() && 40 === a))
                return !1;
            if (!T.params.allowSwipeToPrev && (T.isHorizontal() && 37 === a || !T.isHorizontal() && 38 === a))
                return !1;
            if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === a || 39 === a || 38 === a || 40 === a) {
                    var t = !1;
                    if (T.container.parents("." + T.params.slideClass).length > 0 && 0 === T.container.parents("." + T.params.slideActiveClass).length)
                        return;
                    var s = {
                        left: window.pageXOffset,
                        top: window.pageYOffset
                    }
                      , i = window.innerWidth
                      , r = window.innerHeight
                      , n = T.container.offset();
                    T.rtl && (n.left = n.left - T.container[0].scrollLeft);
                    for (var o = [[n.left, n.top], [n.left + T.width, n.top], [n.left, n.top + T.height], [n.left + T.width, n.top + T.height]], l = 0; l < o.length; l++) {
                        var p = o[l];
                        p[0] >= s.left && p[0] <= s.left + i && p[1] >= s.top && p[1] <= s.top + r && (t = !0)
                    }
                    if (!t)
                        return
                }
                T.isHorizontal() ? (37 !== a && 39 !== a || (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
                (39 === a && !T.rtl || 37 === a && T.rtl) && T.slideNext(),
                (37 === a && !T.rtl || 39 === a && T.rtl) && T.slidePrev()) : (38 !== a && 40 !== a || (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
                40 === a && T.slideNext(),
                38 === a && T.slidePrev()),
                T.emit("onKeyPress", T, a)
            }
        }
        function d(e) {
            var a = 0
              , t = 0
              , s = 0
              , i = 0;
            return "detail"in e && (t = e.detail),
            "wheelDelta"in e && (t = -e.wheelDelta / 120),
            "wheelDeltaY"in e && (t = -e.wheelDeltaY / 120),
            "wheelDeltaX"in e && (a = -e.wheelDeltaX / 120),
            "axis"in e && e.axis === e.HORIZONTAL_AXIS && (a = t,
            t = 0),
            s = 10 * a,
            i = 10 * t,
            "deltaY"in e && (i = e.deltaY),
            "deltaX"in e && (s = e.deltaX),
            (s || i) && e.deltaMode && (1 === e.deltaMode ? (s *= 40,
            i *= 40) : (s *= 800,
            i *= 800)),
            s && !a && (a = s < 1 ? -1 : 1),
            i && !t && (t = i < 1 ? -1 : 1),
            {
                spinX: a,
                spinY: t,
                pixelX: s,
                pixelY: i
            }
        }
        function u(e) {
            e.originalEvent && (e = e.originalEvent);
            var a = 0
              , t = T.rtl ? -1 : 1
              , s = d(e);
            if (T.params.mousewheelForceToAxis)
                if (T.isHorizontal()) {
                    if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY)))
                        return;
                    a = s.pixelX * t
                } else {
                    if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX)))
                        return;
                    a = s.pixelY
                }
            else
                a = Math.abs(s.pixelX) > Math.abs(s.pixelY) ? -s.pixelX * t : -s.pixelY;
            if (0 !== a) {
                if (T.params.mousewheelInvert && (a = -a),
                T.params.freeMode) {
                    var i = T.getWrapperTranslate() + a * T.params.mousewheelSensitivity
                      , r = T.isBeginning
                      , n = T.isEnd;
                    if (i >= T.minTranslate() && (i = T.minTranslate()),
                    i <= T.maxTranslate() && (i = T.maxTranslate()),
                    T.setWrapperTransition(0),
                    T.setWrapperTranslate(i),
                    T.updateProgress(),
                    T.updateActiveIndex(),
                    (!r && T.isBeginning || !n && T.isEnd) && T.updateClasses(),
                    T.params.freeModeSticky ? (clearTimeout(T.mousewheel.timeout),
                    T.mousewheel.timeout = setTimeout(function() {
                        T.slideReset()
                    }, 300)) : T.params.lazyLoading && T.lazy && T.lazy.load(),
                    T.emit("onScroll", T, e),
                    T.params.autoplay && T.params.autoplayDisableOnInteraction && T.stopAutoplay(),
                    0 === i || i === T.maxTranslate())
                        return
                } else {
                    if ((new window.Date).getTime() - T.mousewheel.lastScrollTime > 60)
                        if (a < 0)
                            if (T.isEnd && !T.params.loop || T.animating) {
                                if (T.params.mousewheelReleaseOnEdges)
                                    return !0
                            } else
                                T.slideNext(),
                                T.emit("onScroll", T, e);
                        else if (T.isBeginning && !T.params.loop || T.animating) {
                            if (T.params.mousewheelReleaseOnEdges)
                                return !0
                        } else
                            T.slidePrev(),
                            T.emit("onScroll", T, e);
                    T.mousewheel.lastScrollTime = (new window.Date).getTime()
                }
                return e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                !1
            }
        }
        function c(a, t) {
            a = e(a);
            var s, i, r, n = T.rtl ? -1 : 1;
            s = a.attr("data-swiper-parallax") || "0",
            i = a.attr("data-swiper-parallax-x"),
            r = a.attr("data-swiper-parallax-y"),
            i || r ? (i = i || "0",
            r = r || "0") : T.isHorizontal() ? (i = s,
            r = "0") : (r = s,
            i = "0"),
            i = i.indexOf("%") >= 0 ? parseInt(i, 10) * t * n + "%" : i * t * n + "px",
            r = r.indexOf("%") >= 0 ? parseInt(r, 10) * t + "%" : r * t + "px",
            a.transform("translate3d(" + i + ", " + r + ",0px)")
        }
        function m(e) {
            return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e),
            e
        }
        if (!(this instanceof a))
            return new a(s,i);
        var h = {
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            },
            flip: {
                slideShadows: !0,
                limitRotation: !0
            },
            cube: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            },
            fade: {
                crossFade: !1
            },
            parallax: !1,
            zoom: !1,
            zoomMax: 3,
            zoomMin: 1,
            zoomToggle: !0,
            scrollbar: null,
            scrollbarHide: !0,
            scrollbarDraggable: !1,
            scrollbarSnapOnRelease: !1,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelReleaseOnEdges: !1,
            mousewheelInvert: !1,
            mousewheelForceToAxis: !1,
            mousewheelSensitivity: 1,
            mousewheelEventsTarged: "container",
            hashnav: !1,
            hashnavWatchState: !1,
            history: !1,
            replaceState: !1,
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            onlyExternal: !1,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            pagination: null,
            paginationElement: "span",
            paginationClickable: !1,
            paginationHide: !1,
            paginationBulletRender: null,
            paginationProgressRender: null,
            paginationFractionRender: null,
            paginationCustomRender: null,
            paginationType: "bullets",
            resistance: !0,
            resistanceRatio: .85,
            nextButton: null,
            prevButton: null,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            lazyLoading: !1,
            lazyLoadingInPrevNext: !1,
            lazyLoadingInPrevNextAmount: 1,
            lazyLoadingOnTransitionStart: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            control: void 0,
            controlInverse: !1,
            controlBy: "slide",
            normalizeSlideIndex: !0,
            allowSwipeToPrev: !0,
            allowSwipeToNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            buttonDisabledClass: "swiper-button-disabled",
            paginationCurrentClass: "swiper-pagination-current",
            paginationTotalClass: "swiper-pagination-total",
            paginationHiddenClass: "swiper-pagination-hidden",
            paginationProgressbarClass: "swiper-pagination-progressbar",
            paginationClickableClass: "swiper-pagination-clickable",
            paginationModifierClass: "swiper-pagination-",
            lazyLoadingClass: "swiper-lazy",
            lazyStatusLoadingClass: "swiper-lazy-loading",
            lazyStatusLoadedClass: "swiper-lazy-loaded",
            lazyPreloaderClass: "swiper-lazy-preloader",
            notificationClass: "swiper-notification",
            preloaderClass: "preloader",
            zoomContainerClass: "swiper-zoom-container",
            observer: !1,
            observeParents: !1,
            a11y: !1,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            runCallbacksOnInit: !0
        }
          , g = i && i.virtualTranslate;
        i = i || {};
        var f = {};
        for (var v in i)
            if ("object" != typeof i[v] || null === i[v] || (i[v].nodeType || i[v] === window || i[v] === document || void 0 !== t && i[v]instanceof t || "undefined" != typeof jQuery && i[v]instanceof jQuery))
                f[v] = i[v];
            else {
                f[v] = {};
                for (var w in i[v])
                    f[v][w] = i[v][w]
            }
        for (var y in h)
            if (void 0 === i[y])
                i[y] = h[y];
            else if ("object" == typeof i[y])
                for (var x in h[y])
                    void 0 === i[y][x] && (i[y][x] = h[y][x]);
        var T = this;
        if (T.params = i,
        T.originalParams = f,
        T.classNames = [],
        void 0 !== e && void 0 !== t && (e = t),
        (void 0 !== e || (e = void 0 === t ? window.Dom7 || window.Zepto || window.jQuery : t)) && (T.$ = e,
        T.currentBreakpoint = void 0,
        T.getActiveBreakpoint = function() {
            if (!T.params.breakpoints)
                return !1;
            var e, a = !1, t = [];
            for (e in T.params.breakpoints)
                T.params.breakpoints.hasOwnProperty(e) && t.push(e);
            t.sort(function(e, a) {
                return parseInt(e, 10) > parseInt(a, 10)
            });
            for (var s = 0; s < t.length; s++)
                (e = t[s]) >= window.innerWidth && !a && (a = e);
            return a || "max"
        }
        ,
        T.setBreakpoint = function() {
            var e = T.getActiveBreakpoint();
            if (e && T.currentBreakpoint !== e) {
                var a = e in T.params.breakpoints ? T.params.breakpoints[e] : T.originalParams
                  , t = T.params.loop && a.slidesPerView !== T.params.slidesPerView;
                for (var s in a)
                    T.params[s] = a[s];
                T.currentBreakpoint = e,
                t && T.destroyLoop && T.reLoop(!0)
            }
        }
        ,
        T.params.breakpoints && T.setBreakpoint(),
        T.container = e(s),
        0 !== T.container.length)) {
            if (T.container.length > 1) {
                var b = [];
                return T.container.each(function() {
                    b.push(new a(this,i))
                }),
                b
            }
            T.container[0].swiper = T,
            T.container.data("swiper", T),
            T.classNames.push(T.params.containerModifierClass + T.params.direction),
            T.params.freeMode && T.classNames.push(T.params.containerModifierClass + "free-mode"),
            T.support.flexbox || (T.classNames.push(T.params.containerModifierClass + "no-flexbox"),
            T.params.slidesPerColumn = 1),
            T.params.autoHeight && T.classNames.push(T.params.containerModifierClass + "autoheight"),
            (T.params.parallax || T.params.watchSlidesVisibility) && (T.params.watchSlidesProgress = !0),
            T.params.touchReleaseOnEdges && (T.params.resistanceRatio = 0),
            ["cube", "coverflow", "flip"].indexOf(T.params.effect) >= 0 && (T.support.transforms3d ? (T.params.watchSlidesProgress = !0,
            T.classNames.push(T.params.containerModifierClass + "3d")) : T.params.effect = "slide"),
            "slide" !== T.params.effect && T.classNames.push(T.params.containerModifierClass + T.params.effect),
            "cube" === T.params.effect && (T.params.resistanceRatio = 0,
            T.params.slidesPerView = 1,
            T.params.slidesPerColumn = 1,
            T.params.slidesPerGroup = 1,
            T.params.centeredSlides = !1,
            T.params.spaceBetween = 0,
            T.params.virtualTranslate = !0),
            "fade" !== T.params.effect && "flip" !== T.params.effect || (T.params.slidesPerView = 1,
            T.params.slidesPerColumn = 1,
            T.params.slidesPerGroup = 1,
            T.params.watchSlidesProgress = !0,
            T.params.spaceBetween = 0,
            void 0 === g && (T.params.virtualTranslate = !0)),
            T.params.grabCursor && T.support.touch && (T.params.grabCursor = !1),
            T.wrapper = T.container.children("." + T.params.wrapperClass),
            T.params.pagination && (T.paginationContainer = e(T.params.pagination),
            T.params.uniqueNavElements && "string" == typeof T.params.pagination && T.paginationContainer.length > 1 && 1 === T.container.find(T.params.pagination).length && (T.paginationContainer = T.container.find(T.params.pagination)),
            "bullets" === T.params.paginationType && T.params.paginationClickable ? T.paginationContainer.addClass(T.params.paginationModifierClass + "clickable") : T.params.paginationClickable = !1,
            T.paginationContainer.addClass(T.params.paginationModifierClass + T.params.paginationType)),
            (T.params.nextButton || T.params.prevButton) && (T.params.nextButton && (T.nextButton = e(T.params.nextButton),
            T.params.uniqueNavElements && "string" == typeof T.params.nextButton && T.nextButton.length > 1 && 1 === T.container.find(T.params.nextButton).length && (T.nextButton = T.container.find(T.params.nextButton))),
            T.params.prevButton && (T.prevButton = e(T.params.prevButton),
            T.params.uniqueNavElements && "string" == typeof T.params.prevButton && T.prevButton.length > 1 && 1 === T.container.find(T.params.prevButton).length && (T.prevButton = T.container.find(T.params.prevButton)))),
            T.isHorizontal = function() {
                return "horizontal" === T.params.direction
            }
            ,
            T.rtl = T.isHorizontal() && ("rtl" === T.container[0].dir.toLowerCase() || "rtl" === T.container.css("direction")),
            T.rtl && T.classNames.push(T.params.containerModifierClass + "rtl"),
            T.rtl && (T.wrongRTL = "-webkit-box" === T.wrapper.css("display")),
            T.params.slidesPerColumn > 1 && T.classNames.push(T.params.containerModifierClass + "multirow"),
            T.device.android && T.classNames.push(T.params.containerModifierClass + "android"),
            T.container.addClass(T.classNames.join(" ")),
            T.translate = 0,
            T.progress = 0,
            T.velocity = 0,
            T.lockSwipeToNext = function() {
                T.params.allowSwipeToNext = !1,
                T.params.allowSwipeToPrev === !1 && T.params.grabCursor && T.unsetGrabCursor()
            }
            ,
            T.lockSwipeToPrev = function() {
                T.params.allowSwipeToPrev = !1,
                T.params.allowSwipeToNext === !1 && T.params.grabCursor && T.unsetGrabCursor()
            }
            ,
            T.lockSwipes = function() {
                T.params.allowSwipeToNext = T.params.allowSwipeToPrev = !1,
                T.params.grabCursor && T.unsetGrabCursor()
            }
            ,
            T.unlockSwipeToNext = function() {
                T.params.allowSwipeToNext = !0,
                T.params.allowSwipeToPrev === !0 && T.params.grabCursor && T.setGrabCursor()
            }
            ,
            T.unlockSwipeToPrev = function() {
                T.params.allowSwipeToPrev = !0,
                T.params.allowSwipeToNext === !0 && T.params.grabCursor && T.setGrabCursor()
            }
            ,
            T.unlockSwipes = function() {
                T.params.allowSwipeToNext = T.params.allowSwipeToPrev = !0,
                T.params.grabCursor && T.setGrabCursor()
            }
            ,
            T.setGrabCursor = function(e) {
                T.container[0].style.cursor = "move",
                T.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                T.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                T.container[0].style.cursor = e ? "grabbing" : "grab"
            }
            ,
            T.unsetGrabCursor = function() {
                T.container[0].style.cursor = ""
            }
            ,
            T.params.grabCursor && T.setGrabCursor(),
            T.imagesToLoad = [],
            T.imagesLoaded = 0,
            T.loadImage = function(e, a, t, s, i, r) {
                function n() {
                    r && r()
                }
                var o;
                e.complete && i ? n() : a ? (o = new window.Image,
                o.onload = n,
                o.onerror = n,
                s && (o.sizes = s),
                t && (o.srcset = t),
                a && (o.src = a)) : n()
            }
            ,
            T.preloadImages = function() {
                function e() {
                    void 0 !== T && null !== T && T && (void 0 !== T.imagesLoaded && T.imagesLoaded++,
                    T.imagesLoaded === T.imagesToLoad.length && (T.params.updateOnImagesReady && T.update(),
                    T.emit("onImagesReady", T)))
                }
                T.imagesToLoad = T.container.find("img");
                for (var a = 0; a < T.imagesToLoad.length; a++)
                    T.loadImage(T.imagesToLoad[a], T.imagesToLoad[a].currentSrc || T.imagesToLoad[a].getAttribute("src"), T.imagesToLoad[a].srcset || T.imagesToLoad[a].getAttribute("srcset"), T.imagesToLoad[a].sizes || T.imagesToLoad[a].getAttribute("sizes"), !0, e)
            }
            ,
            T.autoplayTimeoutId = void 0,
            T.autoplaying = !1,
            T.autoplayPaused = !1,
            T.startAutoplay = function() {
                return void 0 === T.autoplayTimeoutId && (!!T.params.autoplay && (!T.autoplaying && (T.autoplaying = !0,
                T.emit("onAutoplayStart", T),
                void n())))
            }
            ,
            T.stopAutoplay = function(e) {
                T.autoplayTimeoutId && (T.autoplayTimeoutId && clearTimeout(T.autoplayTimeoutId),
                T.autoplaying = !1,
                T.autoplayTimeoutId = void 0,
                T.emit("onAutoplayStop", T))
            }
            ,
            T.pauseAutoplay = function(e) {
                T.autoplayPaused || (T.autoplayTimeoutId && clearTimeout(T.autoplayTimeoutId),
                T.autoplayPaused = !0,
                0 === e ? (T.autoplayPaused = !1,
                n()) : T.wrapper.transitionEnd(function() {
                    T && (T.autoplayPaused = !1,
                    T.autoplaying ? n() : T.stopAutoplay())
                }))
            }
            ,
            T.minTranslate = function() {
                return -T.snapGrid[0]
            }
            ,
            T.maxTranslate = function() {
                return -T.snapGrid[T.snapGrid.length - 1]
            }
            ,
            T.updateAutoHeight = function() {
                var e, a = [], t = 0;
                if ("auto" !== T.params.slidesPerView && T.params.slidesPerView > 1)
                    for (e = 0; e < Math.ceil(T.params.slidesPerView); e++) {
                        var s = T.activeIndex + e;
                        if (s > T.slides.length)
                            break;
                        a.push(T.slides.eq(s)[0])
                    }
                else
                    a.push(T.slides.eq(T.activeIndex)[0]);
                for (e = 0; e < a.length; e++)
                    if (void 0 !== a[e]) {
                        var i = a[e].offsetHeight;
                        t = i > t ? i : t
                    }
                t && T.wrapper.css("height", t + "px")
            }
            ,
            T.updateContainerSize = function() {
                var e, a;
                e = void 0 !== T.params.width ? T.params.width : T.container[0].clientWidth,
                a = void 0 !== T.params.height ? T.params.height : T.container[0].clientHeight,
                0 === e && T.isHorizontal() || 0 === a && !T.isHorizontal() || (e = e - parseInt(T.container.css("padding-left"), 10) - parseInt(T.container.css("padding-right"), 10),
                a = a - parseInt(T.container.css("padding-top"), 10) - parseInt(T.container.css("padding-bottom"), 10),
                T.width = e,
                T.height = a,
                T.size = T.isHorizontal() ? T.width : T.height)
            }
            ,
            T.updateSlidesSize = function() {
                T.slides = T.wrapper.children("." + T.params.slideClass),
                T.snapGrid = [],
                T.slidesGrid = [],
                T.slidesSizesGrid = [];
                var e, a = T.params.spaceBetween, t = -T.params.slidesOffsetBefore, s = 0, i = 0;
                if (void 0 !== T.size) {
                    "string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * T.size),
                    T.virtualSize = -a,
                    T.rtl ? T.slides.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : T.slides.css({
                        marginRight: "",
                        marginBottom: ""
                    });
                    var n;
                    T.params.slidesPerColumn > 1 && (n = Math.floor(T.slides.length / T.params.slidesPerColumn) === T.slides.length / T.params.slidesPerColumn ? T.slides.length : Math.ceil(T.slides.length / T.params.slidesPerColumn) * T.params.slidesPerColumn,
                    "auto" !== T.params.slidesPerView && "row" === T.params.slidesPerColumnFill && (n = Math.max(n, T.params.slidesPerView * T.params.slidesPerColumn)));
                    var o, l = T.params.slidesPerColumn, p = n / l, d = p - (T.params.slidesPerColumn * p - T.slides.length);
                    for (e = 0; e < T.slides.length; e++) {
                        o = 0;
                        var u = T.slides.eq(e);
                        if (T.params.slidesPerColumn > 1) {
                            var c, m, h;
                            "column" === T.params.slidesPerColumnFill ? (m = Math.floor(e / l),
                            h = e - m * l,
                            (m > d || m === d && h === l - 1) && ++h >= l && (h = 0,
                            m++),
                            c = m + h * n / l,
                            u.css({
                                "-webkit-box-ordinal-group": c,
                                "-moz-box-ordinal-group": c,
                                "-ms-flex-order": c,
                                "-webkit-order": c,
                                order: c
                            })) : (h = Math.floor(e / p),
                            m = e - h * p),
                            u.css("margin-" + (T.isHorizontal() ? "top" : "left"), 0 !== h && T.params.spaceBetween && T.params.spaceBetween + "px").attr("data-swiper-column", m).attr("data-swiper-row", h)
                        }
                        "none" !== u.css("display") && ("auto" === T.params.slidesPerView ? (o = T.isHorizontal() ? u.outerWidth(!0) : u.outerHeight(!0),
                        T.params.roundLengths && (o = r(o))) : (o = (T.size - (T.params.slidesPerView - 1) * a) / T.params.slidesPerView,
                        T.params.roundLengths && (o = r(o)),
                        T.isHorizontal() ? T.slides[e].style.width = o + "px" : T.slides[e].style.height = o + "px"),
                        T.slides[e].swiperSlideSize = o,
                        T.slidesSizesGrid.push(o),
                        T.params.centeredSlides ? (t = t + o / 2 + s / 2 + a,
                        0 === s && 0 !== e && (t = t - T.size / 2 - a),
                        0 === e && (t = t - T.size / 2 - a),
                        Math.abs(t) < .001 && (t = 0),
                        i % T.params.slidesPerGroup == 0 && T.snapGrid.push(t),
                        T.slidesGrid.push(t)) : (i % T.params.slidesPerGroup == 0 && T.snapGrid.push(t),
                        T.slidesGrid.push(t),
                        t = t + o + a),
                        T.virtualSize += o + a,
                        s = o,
                        i++)
                    }
                    T.virtualSize = Math.max(T.virtualSize, T.size) + T.params.slidesOffsetAfter;
                    var g;
                    if (T.rtl && T.wrongRTL && ("slide" === T.params.effect || "coverflow" === T.params.effect) && T.wrapper.css({
                        width: T.virtualSize + T.params.spaceBetween + "px"
                    }),
                    T.support.flexbox && !T.params.setWrapperSize || (T.isHorizontal() ? T.wrapper.css({
                        width: T.virtualSize + T.params.spaceBetween + "px"
                    }) : T.wrapper.css({
                        height: T.virtualSize + T.params.spaceBetween + "px"
                    })),
                    T.params.slidesPerColumn > 1 && (T.virtualSize = (o + T.params.spaceBetween) * n,
                    T.virtualSize = Math.ceil(T.virtualSize / T.params.slidesPerColumn) - T.params.spaceBetween,
                    T.isHorizontal() ? T.wrapper.css({
                        width: T.virtualSize + T.params.spaceBetween + "px"
                    }) : T.wrapper.css({
                        height: T.virtualSize + T.params.spaceBetween + "px"
                    }),
                    T.params.centeredSlides)) {
                        for (g = [],
                        e = 0; e < T.snapGrid.length; e++)
                            T.snapGrid[e] < T.virtualSize + T.snapGrid[0] && g.push(T.snapGrid[e]);
                        T.snapGrid = g
                    }
                    if (!T.params.centeredSlides) {
                        for (g = [],
                        e = 0; e < T.snapGrid.length; e++)
                            T.snapGrid[e] <= T.virtualSize - T.size && g.push(T.snapGrid[e]);
                        T.snapGrid = g,
                        Math.floor(T.virtualSize - T.size) - Math.floor(T.snapGrid[T.snapGrid.length - 1]) > 1 && T.snapGrid.push(T.virtualSize - T.size)
                    }
                    0 === T.snapGrid.length && (T.snapGrid = [0]),
                    0 !== T.params.spaceBetween && (T.isHorizontal() ? T.rtl ? T.slides.css({
                        marginLeft: a + "px"
                    }) : T.slides.css({
                        marginRight: a + "px"
                    }) : T.slides.css({
                        marginBottom: a + "px"
                    })),
                    T.params.watchSlidesProgress && T.updateSlidesOffset()
                }
            }
            ,
            T.updateSlidesOffset = function() {
                for (var e = 0; e < T.slides.length; e++)
                    T.slides[e].swiperSlideOffset = T.isHorizontal() ? T.slides[e].offsetLeft : T.slides[e].offsetTop
            }
            ,
            T.currentSlidesPerView = function() {
                var e, a, t = 1;
                if (T.params.centeredSlides) {
                    var s, i = T.slides[T.activeIndex].swiperSlideSize;
                    for (e = T.activeIndex + 1; e < T.slides.length; e++)
                        T.slides[e] && !s && (i += T.slides[e].swiperSlideSize,
                        t++,
                        i > T.size && (s = !0));
                    for (a = T.activeIndex - 1; a >= 0; a--)
                        T.slides[a] && !s && (i += T.slides[a].swiperSlideSize,
                        t++,
                        i > T.size && (s = !0))
                } else
                    for (e = T.activeIndex + 1; e < T.slides.length; e++)
                        T.slidesGrid[e] - T.slidesGrid[T.activeIndex] < T.size && t++;
                return t
            }
            ,
            T.updateSlidesProgress = function(e) {
                if (void 0 === e && (e = T.translate || 0),
                0 !== T.slides.length) {
                    void 0 === T.slides[0].swiperSlideOffset && T.updateSlidesOffset();
                    var a = -e;
                    T.rtl && (a = e),
                    T.slides.removeClass(T.params.slideVisibleClass);
                    for (var t = 0; t < T.slides.length; t++) {
                        var s = T.slides[t]
                          , i = (a + (T.params.centeredSlides ? T.minTranslate() : 0) - s.swiperSlideOffset) / (s.swiperSlideSize + T.params.spaceBetween);
                        if (T.params.watchSlidesVisibility) {
                            var r = -(a - s.swiperSlideOffset)
                              , n = r + T.slidesSizesGrid[t];
                            (r >= 0 && r < T.size || n > 0 && n <= T.size || r <= 0 && n >= T.size) && T.slides.eq(t).addClass(T.params.slideVisibleClass)
                        }
                        s.progress = T.rtl ? -i : i
                    }
                }
            }
            ,
            T.updateProgress = function(e) {
                void 0 === e && (e = T.translate || 0);
                var a = T.maxTranslate() - T.minTranslate()
                  , t = T.isBeginning
                  , s = T.isEnd;
                0 === a ? (T.progress = 0,
                T.isBeginning = T.isEnd = !0) : (T.progress = (e - T.minTranslate()) / a,
                T.isBeginning = T.progress <= 0,
                T.isEnd = T.progress >= 1),
                T.isBeginning && !t && T.emit("onReachBeginning", T),
                T.isEnd && !s && T.emit("onReachEnd", T),
                T.params.watchSlidesProgress && T.updateSlidesProgress(e),
                T.emit("onProgress", T, T.progress)
            }
            ,
            T.updateActiveIndex = function() {
                var e, a, t, s = T.rtl ? T.translate : -T.translate;
                for (a = 0; a < T.slidesGrid.length; a++)
                    void 0 !== T.slidesGrid[a + 1] ? s >= T.slidesGrid[a] && s < T.slidesGrid[a + 1] - (T.slidesGrid[a + 1] - T.slidesGrid[a]) / 2 ? e = a : s >= T.slidesGrid[a] && s < T.slidesGrid[a + 1] && (e = a + 1) : s >= T.slidesGrid[a] && (e = a);
                T.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0),
                t = Math.floor(e / T.params.slidesPerGroup),
                t >= T.snapGrid.length && (t = T.snapGrid.length - 1),
                e !== T.activeIndex && (T.snapIndex = t,
                T.previousIndex = T.activeIndex,
                T.activeIndex = e,
                T.updateClasses(),
                T.updateRealIndex())
            }
            ,
            T.updateRealIndex = function() {
                T.realIndex = parseInt(T.slides.eq(T.activeIndex).attr("data-swiper-slide-index") || T.activeIndex, 10)
            }
            ,
            T.updateClasses = function() {
                T.slides.removeClass(T.params.slideActiveClass + " " + T.params.slideNextClass + " " + T.params.slidePrevClass + " " + T.params.slideDuplicateActiveClass + " " + T.params.slideDuplicateNextClass + " " + T.params.slideDuplicatePrevClass);
                var a = T.slides.eq(T.activeIndex);
                a.addClass(T.params.slideActiveClass),
                i.loop && (a.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + T.realIndex + '"]').addClass(T.params.slideDuplicateActiveClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + T.realIndex + '"]').addClass(T.params.slideDuplicateActiveClass));
                var t = a.next("." + T.params.slideClass).addClass(T.params.slideNextClass);
                T.params.loop && 0 === t.length && (t = T.slides.eq(0),
                t.addClass(T.params.slideNextClass));
                var s = a.prev("." + T.params.slideClass).addClass(T.params.slidePrevClass);
                if (T.params.loop && 0 === s.length && (s = T.slides.eq(-1),
                s.addClass(T.params.slidePrevClass)),
                i.loop && (t.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicateNextClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicateNextClass),
                s.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicatePrevClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicatePrevClass)),
                T.paginationContainer && T.paginationContainer.length > 0) {
                    var r, n = T.params.loop ? Math.ceil((T.slides.length - 2 * T.loopedSlides) / T.params.slidesPerGroup) : T.snapGrid.length;
                    if (T.params.loop ? (r = Math.ceil((T.activeIndex - T.loopedSlides) / T.params.slidesPerGroup),
                    r > T.slides.length - 1 - 2 * T.loopedSlides && (r -= T.slides.length - 2 * T.loopedSlides),
                    r > n - 1 && (r -= n),
                    r < 0 && "bullets" !== T.params.paginationType && (r = n + r)) : r = void 0 !== T.snapIndex ? T.snapIndex : T.activeIndex || 0,
                    "bullets" === T.params.paginationType && T.bullets && T.bullets.length > 0 && (T.bullets.removeClass(T.params.bulletActiveClass),
                    T.paginationContainer.length > 1 ? T.bullets.each(function() {
                        e(this).index() === r && e(this).addClass(T.params.bulletActiveClass)
                    }) : T.bullets.eq(r).addClass(T.params.bulletActiveClass)),
                    "fraction" === T.params.paginationType && (T.paginationContainer.find("." + T.params.paginationCurrentClass).text(r + 1),
                    T.paginationContainer.find("." + T.params.paginationTotalClass).text(n)),
                    "progress" === T.params.paginationType) {
                        var o = (r + 1) / n
                          , l = o
                          , p = 1;
                        T.isHorizontal() || (p = o,
                        l = 1),
                        T.paginationContainer.find("." + T.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + p + ")").transition(T.params.speed)
                    }
                    "custom" === T.params.paginationType && T.params.paginationCustomRender && (T.paginationContainer.html(T.params.paginationCustomRender(T, r + 1, n)),
                    T.emit("onPaginationRendered", T, T.paginationContainer[0]))
                }
                T.params.loop || (T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.isBeginning ? (T.prevButton.addClass(T.params.buttonDisabledClass),
                T.params.a11y && T.a11y && T.a11y.disable(T.prevButton)) : (T.prevButton.removeClass(T.params.buttonDisabledClass),
                T.params.a11y && T.a11y && T.a11y.enable(T.prevButton))),
                T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.isEnd ? (T.nextButton.addClass(T.params.buttonDisabledClass),
                T.params.a11y && T.a11y && T.a11y.disable(T.nextButton)) : (T.nextButton.removeClass(T.params.buttonDisabledClass),
                T.params.a11y && T.a11y && T.a11y.enable(T.nextButton))))
            }
            ,
            T.updatePagination = function() {
                if (T.params.pagination && T.paginationContainer && T.paginationContainer.length > 0) {
                    var e = "";
                    if ("bullets" === T.params.paginationType) {
                        for (var a = T.params.loop ? Math.ceil((T.slides.length - 2 * T.loopedSlides) / T.params.slidesPerGroup) : T.snapGrid.length, t = 0; t < a; t++)
                            e += T.params.paginationBulletRender ? T.params.paginationBulletRender(T, t, T.params.bulletClass) : "<" + T.params.paginationElement + ' class="' + T.params.bulletClass + '"></' + T.params.paginationElement + ">";
                        T.paginationContainer.html(e),
                        T.bullets = T.paginationContainer.find("." + T.params.bulletClass),
                        T.params.paginationClickable && T.params.a11y && T.a11y && T.a11y.initPagination()
                    }
                    "fraction" === T.params.paginationType && (e = T.params.paginationFractionRender ? T.params.paginationFractionRender(T, T.params.paginationCurrentClass, T.params.paginationTotalClass) : '<span class="' + T.params.paginationCurrentClass + '"></span> / <span class="' + T.params.paginationTotalClass + '"></span>',
                    T.paginationContainer.html(e)),
                    "progress" === T.params.paginationType && (e = T.params.paginationProgressRender ? T.params.paginationProgressRender(T, T.params.paginationProgressbarClass) : '<span class="' + T.params.paginationProgressbarClass + '"></span>',
                    T.paginationContainer.html(e)),
                    "custom" !== T.params.paginationType && T.emit("onPaginationRendered", T, T.paginationContainer[0])
                }
            }
            ,
            T.update = function(e) {
                function a() {
                    T.rtl,
                    T.translate;
                    t = Math.min(Math.max(T.translate, T.maxTranslate()), T.minTranslate()),
                    T.setWrapperTranslate(t),
                    T.updateActiveIndex(),
                    T.updateClasses()
                }
                if (T) {
                    T.updateContainerSize(),
                    T.updateSlidesSize(),
                    T.updateProgress(),
                    T.updatePagination(),
                    T.updateClasses(),
                    T.params.scrollbar && T.scrollbar && T.scrollbar.set();
                    var t;
                    if (e) {
                        T.controller && T.controller.spline && (T.controller.spline = void 0),
                        T.params.freeMode ? (a(),
                        T.params.autoHeight && T.updateAutoHeight()) : (("auto" === T.params.slidesPerView || T.params.slidesPerView > 1) && T.isEnd && !T.params.centeredSlides ? T.slideTo(T.slides.length - 1, 0, !1, !0) : T.slideTo(T.activeIndex, 0, !1, !0)) || a()
                    } else
                        T.params.autoHeight && T.updateAutoHeight()
                }
            }
            ,
            T.onResize = function(e) {
                T.params.onBeforeResize && T.params.onBeforeResize(T),
                T.params.breakpoints && T.setBreakpoint();
                var a = T.params.allowSwipeToPrev
                  , t = T.params.allowSwipeToNext;
                T.params.allowSwipeToPrev = T.params.allowSwipeToNext = !0,
                T.updateContainerSize(),
                T.updateSlidesSize(),
                ("auto" === T.params.slidesPerView || T.params.freeMode || e) && T.updatePagination(),
                T.params.scrollbar && T.scrollbar && T.scrollbar.set(),
                T.controller && T.controller.spline && (T.controller.spline = void 0);
                var s = !1;
                if (T.params.freeMode) {
                    var i = Math.min(Math.max(T.translate, T.maxTranslate()), T.minTranslate());
                    T.setWrapperTranslate(i),
                    T.updateActiveIndex(),
                    T.updateClasses(),
                    T.params.autoHeight && T.updateAutoHeight()
                } else
                    T.updateClasses(),
                    s = ("auto" === T.params.slidesPerView || T.params.slidesPerView > 1) && T.isEnd && !T.params.centeredSlides ? T.slideTo(T.slides.length - 1, 0, !1, !0) : T.slideTo(T.activeIndex, 0, !1, !0);
                T.params.lazyLoading && !s && T.lazy && T.lazy.load(),
                T.params.allowSwipeToPrev = a,
                T.params.allowSwipeToNext = t,
                T.params.onAfterResize && T.params.onAfterResize(T)
            }
            ,
            T.touchEventsDesktop = {
                start: "mousedown",
                move: "mousemove",
                end: "mouseup"
            },
            window.navigator.pointerEnabled ? T.touchEventsDesktop = {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled && (T.touchEventsDesktop = {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            }),
            T.touchEvents = {
                start: T.support.touch || !T.params.simulateTouch ? "touchstart" : T.touchEventsDesktop.start,
                move: T.support.touch || !T.params.simulateTouch ? "touchmove" : T.touchEventsDesktop.move,
                end: T.support.touch || !T.params.simulateTouch ? "touchend" : T.touchEventsDesktop.end
            },
            (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === T.params.touchEventsTarget ? T.container : T.wrapper).addClass("swiper-wp8-" + T.params.direction),
            T.initEvents = function(e) {
                var a = e ? "off" : "on"
                  , t = e ? "removeEventListener" : "addEventListener"
                  , s = "container" === T.params.touchEventsTarget ? T.container[0] : T.wrapper[0]
                  , r = T.support.touch ? s : document
                  , n = !!T.params.nested;
                if (T.browser.ie)
                    s[t](T.touchEvents.start, T.onTouchStart, !1),
                    r[t](T.touchEvents.move, T.onTouchMove, n),
                    r[t](T.touchEvents.end, T.onTouchEnd, !1);
                else {
                    if (T.support.touch) {
                        var o = !("touchstart" !== T.touchEvents.start || !T.support.passiveListener || !T.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        s[t](T.touchEvents.start, T.onTouchStart, o),
                        s[t](T.touchEvents.move, T.onTouchMove, n),
                        s[t](T.touchEvents.end, T.onTouchEnd, o)
                    }
                    (i.simulateTouch && !T.device.ios && !T.device.android || i.simulateTouch && !T.support.touch && T.device.ios) && (s[t]("mousedown", T.onTouchStart, !1),
                    document[t]("mousemove", T.onTouchMove, n),
                    document[t]("mouseup", T.onTouchEnd, !1))
                }
                window[t]("resize", T.onResize),
                T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.nextButton[a]("click", T.onClickNext),
                T.params.a11y && T.a11y && T.nextButton[a]("keydown", T.a11y.onEnterKey)),
                T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.prevButton[a]("click", T.onClickPrev),
                T.params.a11y && T.a11y && T.prevButton[a]("keydown", T.a11y.onEnterKey)),
                T.params.pagination && T.params.paginationClickable && (T.paginationContainer[a]("click", "." + T.params.bulletClass, T.onClickIndex),
                T.params.a11y && T.a11y && T.paginationContainer[a]("keydown", "." + T.params.bulletClass, T.a11y.onEnterKey)),
                (T.params.preventClicks || T.params.preventClicksPropagation) && s[t]("click", T.preventClicks, !0)
            }
            ,
            T.attachEvents = function() {
                T.initEvents()
            }
            ,
            T.detachEvents = function() {
                T.initEvents(!0)
            }
            ,
            T.allowClick = !0,
            T.preventClicks = function(e) {
                T.allowClick || (T.params.preventClicks && e.preventDefault(),
                T.params.preventClicksPropagation && T.animating && (e.stopPropagation(),
                e.stopImmediatePropagation()))
            }
            ,
            T.onClickNext = function(e) {
                e.preventDefault(),
                T.isEnd && !T.params.loop || T.slideNext()
            }
            ,
            T.onClickPrev = function(e) {
                e.preventDefault(),
                T.isBeginning && !T.params.loop || T.slidePrev()
            }
            ,
            T.onClickIndex = function(a) {
                a.preventDefault();
                var t = e(this).index() * T.params.slidesPerGroup;
                T.params.loop && (t += T.loopedSlides),
                T.slideTo(t)
            }
            ,
            T.updateClickedSlide = function(a) {
                var t = o(a, "." + T.params.slideClass)
                  , s = !1;
                if (t)
                    for (var i = 0; i < T.slides.length; i++)
                        T.slides[i] === t && (s = !0);
                if (!t || !s)
                    return T.clickedSlide = void 0,
                    void (T.clickedIndex = void 0);
                if (T.clickedSlide = t,
                T.clickedIndex = e(t).index(),
                T.params.slideToClickedSlide && void 0 !== T.clickedIndex && T.clickedIndex !== T.activeIndex) {
                    var r, n = T.clickedIndex, l = "auto" === T.params.slidesPerView ? T.currentSlidesPerView() : T.params.slidesPerView;
                    if (T.params.loop) {
                        if (T.animating)
                            return;
                        r = parseInt(e(T.clickedSlide).attr("data-swiper-slide-index"), 10),
                        T.params.centeredSlides ? n < T.loopedSlides - l / 2 || n > T.slides.length - T.loopedSlides + l / 2 ? (T.fixLoop(),
                        n = T.wrapper.children("." + T.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + T.params.slideDuplicateClass + ")").eq(0).index(),
                        setTimeout(function() {
                            T.slideTo(n)
                        }, 0)) : T.slideTo(n) : n > T.slides.length - l ? (T.fixLoop(),
                        n = T.wrapper.children("." + T.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + T.params.slideDuplicateClass + ")").eq(0).index(),
                        setTimeout(function() {
                            T.slideTo(n)
                        }, 0)) : T.slideTo(n)
                    } else
                        T.slideTo(n)
                }
            }
            ;
            var S, C, z, M, E, P, I, k, L, D, B = "input, select, textarea, button, video", H = Date.now(), G = [];
            T.animating = !1,
            T.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            };
            var X, A;
            T.onTouchStart = function(a) {
                if (a.originalEvent && (a = a.originalEvent),
                (X = "touchstart" === a.type) || !("which"in a) || 3 !== a.which) {
                    if (T.params.noSwiping && o(a, "." + T.params.noSwipingClass))
                        return void (T.allowClick = !0);
                    if (!T.params.swipeHandler || o(a, T.params.swipeHandler)) {
                        var t = T.touches.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX
                          , s = T.touches.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;
                        if (!(T.device.ios && T.params.iOSEdgeSwipeDetection && t <= T.params.iOSEdgeSwipeThreshold)) {
                            if (S = !0,
                            C = !1,
                            z = !0,
                            E = void 0,
                            A = void 0,
                            T.touches.startX = t,
                            T.touches.startY = s,
                            M = Date.now(),
                            T.allowClick = !0,
                            T.updateContainerSize(),
                            T.swipeDirection = void 0,
                            T.params.threshold > 0 && (k = !1),
                            "touchstart" !== a.type) {
                                var i = !0;
                                e(a.target).is(B) && (i = !1),
                                document.activeElement && e(document.activeElement).is(B) && document.activeElement.blur(),
                                i && a.preventDefault()
                            }
                            T.emit("onTouchStart", T, a)
                        }
                    }
                }
            }
            ,
            T.onTouchMove = function(a) {
                if (a.originalEvent && (a = a.originalEvent),
                !X || "mousemove" !== a.type) {
                    if (a.preventedByNestedSwiper)
                        return T.touches.startX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX,
                        void (T.touches.startY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY);
                    if (T.params.onlyExternal)
                        return T.allowClick = !1,
                        void (S && (T.touches.startX = T.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX,
                        T.touches.startY = T.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY,
                        M = Date.now()));
                    if (X && T.params.touchReleaseOnEdges && !T.params.loop)
                        if (T.isHorizontal()) {
                            if (T.touches.currentX < T.touches.startX && T.translate <= T.maxTranslate() || T.touches.currentX > T.touches.startX && T.translate >= T.minTranslate())
                                return
                        } else if (T.touches.currentY < T.touches.startY && T.translate <= T.maxTranslate() || T.touches.currentY > T.touches.startY && T.translate >= T.minTranslate())
                            return;
                    if (X && document.activeElement && a.target === document.activeElement && e(a.target).is(B))
                        return C = !0,
                        void (T.allowClick = !1);
                    if (z && T.emit("onTouchMove", T, a),
                    !(a.targetTouches && a.targetTouches.length > 1)) {
                        if (T.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX,
                        T.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY,
                        void 0 === E) {
                            var t;
                            T.isHorizontal() && T.touches.currentY === T.touches.startY || !T.isHorizontal() && T.touches.currentX === T.touches.startX ? E = !1 : (t = 180 * Math.atan2(Math.abs(T.touches.currentY - T.touches.startY), Math.abs(T.touches.currentX - T.touches.startX)) / Math.PI,
                            E = T.isHorizontal() ? t > T.params.touchAngle : 90 - t > T.params.touchAngle)
                        }
                        if (E && T.emit("onTouchMoveOpposite", T, a),
                        void 0 === A && (T.touches.currentX === T.touches.startX && T.touches.currentY === T.touches.startY || (A = !0)),
                        S) {
                            if (E)
                                return void (S = !1);
                            if (A) {
                                T.allowClick = !1,
                                T.emit("onSliderMove", T, a),
                                a.preventDefault(),
                                T.params.touchMoveStopPropagation && !T.params.nested && a.stopPropagation(),
                                C || (i.loop && T.fixLoop(),
                                I = T.getWrapperTranslate(),
                                T.setWrapperTransition(0),
                                T.animating && T.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),
                                T.params.autoplay && T.autoplaying && (T.params.autoplayDisableOnInteraction ? T.stopAutoplay() : T.pauseAutoplay()),
                                D = !1,
                                !T.params.grabCursor || T.params.allowSwipeToNext !== !0 && T.params.allowSwipeToPrev !== !0 || T.setGrabCursor(!0)),
                                C = !0;
                                var s = T.touches.diff = T.isHorizontal() ? T.touches.currentX - T.touches.startX : T.touches.currentY - T.touches.startY;
                                s *= T.params.touchRatio,
                                T.rtl && (s = -s),
                                T.swipeDirection = s > 0 ? "prev" : "next",
                                P = s + I;
                                var r = !0;
                                if (s > 0 && P > T.minTranslate() ? (r = !1,
                                T.params.resistance && (P = T.minTranslate() - 1 + Math.pow(-T.minTranslate() + I + s, T.params.resistanceRatio))) : s < 0 && P < T.maxTranslate() && (r = !1,
                                T.params.resistance && (P = T.maxTranslate() + 1 - Math.pow(T.maxTranslate() - I - s, T.params.resistanceRatio))),
                                r && (a.preventedByNestedSwiper = !0),
                                !T.params.allowSwipeToNext && "next" === T.swipeDirection && P < I && (P = I),
                                !T.params.allowSwipeToPrev && "prev" === T.swipeDirection && P > I && (P = I),
                                T.params.threshold > 0) {
                                    if (!(Math.abs(s) > T.params.threshold || k))
                                        return void (P = I);
                                    if (!k)
                                        return k = !0,
                                        T.touches.startX = T.touches.currentX,
                                        T.touches.startY = T.touches.currentY,
                                        P = I,
                                        void (T.touches.diff = T.isHorizontal() ? T.touches.currentX - T.touches.startX : T.touches.currentY - T.touches.startY)
                                }
                                T.params.followFinger && ((T.params.freeMode || T.params.watchSlidesProgress) && T.updateActiveIndex(),
                                T.params.freeMode && (0 === G.length && G.push({
                                    position: T.touches[T.isHorizontal() ? "startX" : "startY"],
                                    time: M
                                }),
                                G.push({
                                    position: T.touches[T.isHorizontal() ? "currentX" : "currentY"],
                                    time: (new window.Date).getTime()
                                })),
                                T.updateProgress(P),
                                T.setWrapperTranslate(P))
                            }
                        }
                    }
                }
            }
            ,
            T.onTouchEnd = function(a) {
                if (a.originalEvent && (a = a.originalEvent),
                z && T.emit("onTouchEnd", T, a),
                z = !1,
                S) {
                    T.params.grabCursor && C && S && (T.params.allowSwipeToNext === !0 || T.params.allowSwipeToPrev === !0) && T.setGrabCursor(!1);
                    var t = Date.now()
                      , s = t - M;
                    if (T.allowClick && (T.updateClickedSlide(a),
                    T.emit("onTap", T, a),
                    s < 300 && t - H > 300 && (L && clearTimeout(L),
                    L = setTimeout(function() {
                        T && (T.params.paginationHide && T.paginationContainer.length > 0 && !e(a.target).hasClass(T.params.bulletClass) && T.paginationContainer.toggleClass(T.params.paginationHiddenClass),
                        T.emit("onClick", T, a))
                    }, 300)),
                    s < 300 && t - H < 300 && (L && clearTimeout(L),
                    T.emit("onDoubleTap", T, a))),
                    H = Date.now(),
                    setTimeout(function() {
                        T && (T.allowClick = !0)
                    }, 0),
                    !S || !C || !T.swipeDirection || 0 === T.touches.diff || P === I)
                        return void (S = C = !1);
                    S = C = !1;
                    var i;
                    if (i = T.params.followFinger ? T.rtl ? T.translate : -T.translate : -P,
                    T.params.freeMode) {
                        if (i < -T.minTranslate())
                            return void T.slideTo(T.activeIndex);
                        if (i > -T.maxTranslate())
                            return void (T.slides.length < T.snapGrid.length ? T.slideTo(T.snapGrid.length - 1) : T.slideTo(T.slides.length - 1));
                        if (T.params.freeModeMomentum) {
                            if (G.length > 1) {
                                var r = G.pop()
                                  , n = G.pop()
                                  , o = r.position - n.position
                                  , l = r.time - n.time;
                                T.velocity = o / l,
                                T.velocity = T.velocity / 2,
                                Math.abs(T.velocity) < T.params.freeModeMinimumVelocity && (T.velocity = 0),
                                (l > 150 || (new window.Date).getTime() - r.time > 300) && (T.velocity = 0)
                            } else
                                T.velocity = 0;
                            T.velocity = T.velocity * T.params.freeModeMomentumVelocityRatio,
                            G.length = 0;
                            var p = 1e3 * T.params.freeModeMomentumRatio
                              , d = T.velocity * p
                              , u = T.translate + d;
                            T.rtl && (u = -u);
                            var c, m = !1, h = 20 * Math.abs(T.velocity) * T.params.freeModeMomentumBounceRatio;
                            if (u < T.maxTranslate())
                                T.params.freeModeMomentumBounce ? (u + T.maxTranslate() < -h && (u = T.maxTranslate() - h),
                                c = T.maxTranslate(),
                                m = !0,
                                D = !0) : u = T.maxTranslate();
                            else if (u > T.minTranslate())
                                T.params.freeModeMomentumBounce ? (u - T.minTranslate() > h && (u = T.minTranslate() + h),
                                c = T.minTranslate(),
                                m = !0,
                                D = !0) : u = T.minTranslate();
                            else if (T.params.freeModeSticky) {
                                var g, f = 0;
                                for (f = 0; f < T.snapGrid.length; f += 1)
                                    if (T.snapGrid[f] > -u) {
                                        g = f;
                                        break
                                    }
                                u = Math.abs(T.snapGrid[g] - u) < Math.abs(T.snapGrid[g - 1] - u) || "next" === T.swipeDirection ? T.snapGrid[g] : T.snapGrid[g - 1],
                                T.rtl || (u = -u)
                            }
                            if (0 !== T.velocity)
                                p = T.rtl ? Math.abs((-u - T.translate) / T.velocity) : Math.abs((u - T.translate) / T.velocity);
                            else if (T.params.freeModeSticky)
                                return void T.slideReset();
                            T.params.freeModeMomentumBounce && m ? (T.updateProgress(c),
                            T.setWrapperTransition(p),
                            T.setWrapperTranslate(u),
                            T.onTransitionStart(),
                            T.animating = !0,
                            T.wrapper.transitionEnd(function() {
                                T && D && (T.emit("onMomentumBounce", T),
                                T.setWrapperTransition(T.params.speed),
                                T.setWrapperTranslate(c),
                                T.wrapper.transitionEnd(function() {
                                    T && T.onTransitionEnd()
                                }))
                            })) : T.velocity ? (T.updateProgress(u),
                            T.setWrapperTransition(p),
                            T.setWrapperTranslate(u),
                            T.onTransitionStart(),
                            T.animating || (T.animating = !0,
                            T.wrapper.transitionEnd(function() {
                                T && T.onTransitionEnd()
                            }))) : T.updateProgress(u),
                            T.updateActiveIndex()
                        }
                        return void ((!T.params.freeModeMomentum || s >= T.params.longSwipesMs) && (T.updateProgress(),
                        T.updateActiveIndex()))
                    }
                    var v, w = 0, y = T.slidesSizesGrid[0];
                    for (v = 0; v < T.slidesGrid.length; v += T.params.slidesPerGroup)
                        void 0 !== T.slidesGrid[v + T.params.slidesPerGroup] ? i >= T.slidesGrid[v] && i < T.slidesGrid[v + T.params.slidesPerGroup] && (w = v,
                        y = T.slidesGrid[v + T.params.slidesPerGroup] - T.slidesGrid[v]) : i >= T.slidesGrid[v] && (w = v,
                        y = T.slidesGrid[T.slidesGrid.length - 1] - T.slidesGrid[T.slidesGrid.length - 2]);
                    var x = (i - T.slidesGrid[w]) / y;
                    if (s > T.params.longSwipesMs) {
                        if (!T.params.longSwipes)
                            return void T.slideTo(T.activeIndex);
                        "next" === T.swipeDirection && (x >= T.params.longSwipesRatio ? T.slideTo(w + T.params.slidesPerGroup) : T.slideTo(w)),
                        "prev" === T.swipeDirection && (x > 1 - T.params.longSwipesRatio ? T.slideTo(w + T.params.slidesPerGroup) : T.slideTo(w))
                    } else {
                        if (!T.params.shortSwipes)
                            return void T.slideTo(T.activeIndex);
                        "next" === T.swipeDirection && T.slideTo(w + T.params.slidesPerGroup),
                        "prev" === T.swipeDirection && T.slideTo(w)
                    }
                }
            }
            ,
            T._slideTo = function(e, a) {
                return T.slideTo(e, a, !0, !0)
            }
            ,
            T.slideTo = function(e, a, t, s) {
                void 0 === t && (t = !0),
                void 0 === e && (e = 0),
                e < 0 && (e = 0),
                T.snapIndex = Math.floor(e / T.params.slidesPerGroup),
                T.snapIndex >= T.snapGrid.length && (T.snapIndex = T.snapGrid.length - 1);
                var i = -T.snapGrid[T.snapIndex];
                if (T.params.autoplay && T.autoplaying && (s || !T.params.autoplayDisableOnInteraction ? T.pauseAutoplay(a) : T.stopAutoplay()),
                T.updateProgress(i),
                T.params.normalizeSlideIndex)
                    for (var r = 0; r < T.slidesGrid.length; r++)
                        -Math.floor(100 * i) >= Math.floor(100 * T.slidesGrid[r]) && (e = r);
                return !(!T.params.allowSwipeToNext && i < T.translate && i < T.minTranslate()) && (!(!T.params.allowSwipeToPrev && i > T.translate && i > T.maxTranslate() && (T.activeIndex || 0) !== e) && (void 0 === a && (a = T.params.speed),
                T.previousIndex = T.activeIndex || 0,
                T.activeIndex = e,
                T.updateRealIndex(),
                T.rtl && -i === T.translate || !T.rtl && i === T.translate ? (T.params.autoHeight && T.updateAutoHeight(),
                T.updateClasses(),
                "slide" !== T.params.effect && T.setWrapperTranslate(i),
                !1) : (T.updateClasses(),
                T.onTransitionStart(t),
                0 === a || T.browser.lteIE9 ? (T.setWrapperTranslate(i),
                T.setWrapperTransition(0),
                T.onTransitionEnd(t)) : (T.setWrapperTranslate(i),
                T.setWrapperTransition(a),
                T.animating || (T.animating = !0,
                T.wrapper.transitionEnd(function() {
                    T && T.onTransitionEnd(t)
                }))),
                !0)))
            }
            ,
            T.onTransitionStart = function(e) {
                void 0 === e && (e = !0),
                T.params.autoHeight && T.updateAutoHeight(),
                T.lazy && T.lazy.onTransitionStart(),
                e && (T.emit("onTransitionStart", T),
                T.activeIndex !== T.previousIndex && (T.emit("onSlideChangeStart", T),
                T.activeIndex > T.previousIndex ? T.emit("onSlideNextStart", T) : T.emit("onSlidePrevStart", T)))
            }
            ,
            T.onTransitionEnd = function(e) {
                T.animating = !1,
                T.setWrapperTransition(0),
                void 0 === e && (e = !0),
                T.lazy && T.lazy.onTransitionEnd(),
                e && (T.emit("onTransitionEnd", T),
                T.activeIndex !== T.previousIndex && (T.emit("onSlideChangeEnd", T),
                T.activeIndex > T.previousIndex ? T.emit("onSlideNextEnd", T) : T.emit("onSlidePrevEnd", T))),
                T.params.history && T.history && T.history.setHistory(T.params.history, T.activeIndex),
                T.params.hashnav && T.hashnav && T.hashnav.setHash()
            }
            ,
            T.slideNext = function(e, a, t) {
                if (T.params.loop) {
                    if (T.animating)
                        return !1;
                    T.fixLoop();
                    T.container[0].clientLeft;
                    return T.slideTo(T.activeIndex + T.params.slidesPerGroup, a, e, t)
                }
                return T.slideTo(T.activeIndex + T.params.slidesPerGroup, a, e, t)
            }
            ,
            T._slideNext = function(e) {
                return T.slideNext(!0, e, !0)
            }
            ,
            T.slidePrev = function(e, a, t) {
                if (T.params.loop) {
                    if (T.animating)
                        return !1;
                    T.fixLoop();
                    T.container[0].clientLeft;
                    return T.slideTo(T.activeIndex - 1, a, e, t)
                }
                return T.slideTo(T.activeIndex - 1, a, e, t)
            }
            ,
            T._slidePrev = function(e) {
                return T.slidePrev(!0, e, !0)
            }
            ,
            T.slideReset = function(e, a, t) {
                return T.slideTo(T.activeIndex, a, e)
            }
            ,
            T.disableTouchControl = function() {
                return T.params.onlyExternal = !0,
                !0
            }
            ,
            T.enableTouchControl = function() {
                return T.params.onlyExternal = !1,
                !0
            }
            ,
            T.setWrapperTransition = function(e, a) {
                T.wrapper.transition(e),
                "slide" !== T.params.effect && T.effects[T.params.effect] && T.effects[T.params.effect].setTransition(e),
                T.params.parallax && T.parallax && T.parallax.setTransition(e),
                T.params.scrollbar && T.scrollbar && T.scrollbar.setTransition(e),
                T.params.control && T.controller && T.controller.setTransition(e, a),
                T.emit("onSetTransition", T, e)
            }
            ,
            T.setWrapperTranslate = function(e, a, t) {
                var s = 0
                  , i = 0;
                T.isHorizontal() ? s = T.rtl ? -e : e : i = e,
                T.params.roundLengths && (s = r(s),
                i = r(i)),
                T.params.virtualTranslate || (T.support.transforms3d ? T.wrapper.transform("translate3d(" + s + "px, " + i + "px, 0px)") : T.wrapper.transform("translate(" + s + "px, " + i + "px)")),
                T.translate = T.isHorizontal() ? s : i;
                var n, o = T.maxTranslate() - T.minTranslate();
                n = 0 === o ? 0 : (e - T.minTranslate()) / o,
                n !== T.progress && T.updateProgress(e),
                a && T.updateActiveIndex(),
                "slide" !== T.params.effect && T.effects[T.params.effect] && T.effects[T.params.effect].setTranslate(T.translate),
                T.params.parallax && T.parallax && T.parallax.setTranslate(T.translate),
                T.params.scrollbar && T.scrollbar && T.scrollbar.setTranslate(T.translate),
                T.params.control && T.controller && T.controller.setTranslate(T.translate, t),
                T.emit("onSetTranslate", T, T.translate)
            }
            ,
            T.getTranslate = function(e, a) {
                var t, s, i, r;
                return void 0 === a && (a = "x"),
                T.params.virtualTranslate ? T.rtl ? -T.translate : T.translate : (i = window.getComputedStyle(e, null),
                window.WebKitCSSMatrix ? (s = i.transform || i.webkitTransform,
                s.split(",").length > 6 && (s = s.split(", ").map(function(e) {
                    return e.replace(",", ".")
                }).join(", ")),
                r = new window.WebKitCSSMatrix("none" === s ? "" : s)) : (r = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
                t = r.toString().split(",")),
                "x" === a && (s = window.WebKitCSSMatrix ? r.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])),
                "y" === a && (s = window.WebKitCSSMatrix ? r.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])),
                T.rtl && s && (s = -s),
                s || 0)
            }
            ,
            T.getWrapperTranslate = function(e) {
                return void 0 === e && (e = T.isHorizontal() ? "x" : "y"),
                T.getTranslate(T.wrapper[0], e)
            }
            ,
            T.observers = [],
            T.initObservers = function() {
                if (T.params.observeParents)
                    for (var e = T.container.parents(), a = 0; a < e.length; a++)
                        l(e[a]);
                l(T.container[0], {
                    childList: !1
                }),
                l(T.wrapper[0], {
                    attributes: !1
                })
            }
            ,
            T.disconnectObservers = function() {
                for (var e = 0; e < T.observers.length; e++)
                    T.observers[e].disconnect();
                T.observers = []
            }
            ,
            T.createLoop = function() {
                T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass).remove();
                var a = T.wrapper.children("." + T.params.slideClass);
                "auto" !== T.params.slidesPerView || T.params.loopedSlides || (T.params.loopedSlides = a.length),
                T.loopedSlides = parseInt(T.params.loopedSlides || T.params.slidesPerView, 10),
                T.loopedSlides = T.loopedSlides + T.params.loopAdditionalSlides,
                T.loopedSlides > a.length && (T.loopedSlides = a.length);
                var t, s = [], i = [];
                for (a.each(function(t, r) {
                    var n = e(this);
                    t < T.loopedSlides && i.push(r),
                    t < a.length && t >= a.length - T.loopedSlides && s.push(r),
                    n.attr("data-swiper-slide-index", t)
                }),
                t = 0; t < i.length; t++)
                    T.wrapper.append(e(i[t].cloneNode(!0)).addClass(T.params.slideDuplicateClass));
                for (t = s.length - 1; t >= 0; t--)
                    T.wrapper.prepend(e(s[t].cloneNode(!0)).addClass(T.params.slideDuplicateClass))
            }
            ,
            T.destroyLoop = function() {
                T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass).remove(),
                T.slides.removeAttr("data-swiper-slide-index")
            }
            ,
            T.reLoop = function(e) {
                var a = T.activeIndex - T.loopedSlides;
                T.destroyLoop(),
                T.createLoop(),
                T.updateSlidesSize(),
                e && T.slideTo(a + T.loopedSlides, 0, !1)
            }
            ,
            T.fixLoop = function() {
                var e;
                T.activeIndex < T.loopedSlides ? (e = T.slides.length - 3 * T.loopedSlides + T.activeIndex,
                e += T.loopedSlides,
                T.slideTo(e, 0, !1, !0)) : ("auto" === T.params.slidesPerView && T.activeIndex >= 2 * T.loopedSlides || T.activeIndex > T.slides.length - 2 * T.params.slidesPerView) && (e = -T.slides.length + T.activeIndex + T.loopedSlides,
                e += T.loopedSlides,
                T.slideTo(e, 0, !1, !0))
            }
            ,
            T.appendSlide = function(e) {
                if (T.params.loop && T.destroyLoop(),
                "object" == typeof e && e.length)
                    for (var a = 0; a < e.length; a++)
                        e[a] && T.wrapper.append(e[a]);
                else
                    T.wrapper.append(e);
                T.params.loop && T.createLoop(),
                T.params.observer && T.support.observer || T.update(!0)
            }
            ,
            T.prependSlide = function(e) {
                T.params.loop && T.destroyLoop();
                var a = T.activeIndex + 1;
                if ("object" == typeof e && e.length) {
                    for (var t = 0; t < e.length; t++)
                        e[t] && T.wrapper.prepend(e[t]);
                    a = T.activeIndex + e.length
                } else
                    T.wrapper.prepend(e);
                T.params.loop && T.createLoop(),
                T.params.observer && T.support.observer || T.update(!0),
                T.slideTo(a, 0, !1)
            }
            ,
            T.removeSlide = function(e) {
                T.params.loop && (T.destroyLoop(),
                T.slides = T.wrapper.children("." + T.params.slideClass));
                var a, t = T.activeIndex;
                if ("object" == typeof e && e.length) {
                    for (var s = 0; s < e.length; s++)
                        a = e[s],
                        T.slides[a] && T.slides.eq(a).remove(),
                        a < t && t--;
                    t = Math.max(t, 0)
                } else
                    a = e,
                    T.slides[a] && T.slides.eq(a).remove(),
                    a < t && t--,
                    t = Math.max(t, 0);
                T.params.loop && T.createLoop(),
                T.params.observer && T.support.observer || T.update(!0),
                T.params.loop ? T.slideTo(t + T.loopedSlides, 0, !1) : T.slideTo(t, 0, !1)
            }
            ,
            T.removeAllSlides = function() {
                for (var e = [], a = 0; a < T.slides.length; a++)
                    e.push(a);
                T.removeSlide(e)
            }
            ,
            T.effects = {
                fade: {
                    setTranslate: function() {
                        for (var e = 0; e < T.slides.length; e++) {
                            var a = T.slides.eq(e)
                              , t = a[0].swiperSlideOffset
                              , s = -t;
                            T.params.virtualTranslate || (s -= T.translate);
                            var i = 0;
                            T.isHorizontal() || (i = s,
                            s = 0);
                            var r = T.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                            a.css({
                                opacity: r
                            }).transform("translate3d(" + s + "px, " + i + "px, 0px)")
                        }
                    },
                    setTransition: function(e) {
                        if (T.slides.transition(e),
                        T.params.virtualTranslate && 0 !== e) {
                            var a = !1;
                            T.slides.transitionEnd(function() {
                                if (!a && T) {
                                    a = !0,
                                    T.animating = !1;
                                    for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++)
                                        T.wrapper.trigger(e[t])
                                }
                            })
                        }
                    }
                },
                flip: {
                    setTranslate: function() {
                        for (var a = 0; a < T.slides.length; a++) {
                            var t = T.slides.eq(a)
                              , s = t[0].progress;
                            T.params.flip.limitRotation && (s = Math.max(Math.min(t[0].progress, 1), -1));
                            var i = t[0].swiperSlideOffset
                              , r = -180 * s
                              , n = r
                              , o = 0
                              , l = -i
                              , p = 0;
                            if (T.isHorizontal() ? T.rtl && (n = -n) : (p = l,
                            l = 0,
                            o = -n,
                            n = 0),
                            t[0].style.zIndex = -Math.abs(Math.round(s)) + T.slides.length,
                            T.params.flip.slideShadows) {
                                var d = T.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top")
                                  , u = T.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                                0 === d.length && (d = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'),
                                t.append(d)),
                                0 === u.length && (u = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                t.append(u)),
                                d.length && (d[0].style.opacity = Math.max(-s, 0)),
                                u.length && (u[0].style.opacity = Math.max(s, 0))
                            }
                            t.transform("translate3d(" + l + "px, " + p + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
                        }
                    },
                    setTransition: function(a) {
                        if (T.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a),
                        T.params.virtualTranslate && 0 !== a) {
                            var t = !1;
                            T.slides.eq(T.activeIndex).transitionEnd(function() {
                                if (!t && T && e(this).hasClass(T.params.slideActiveClass)) {
                                    t = !0,
                                    T.animating = !1;
                                    for (var a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], s = 0; s < a.length; s++)
                                        T.wrapper.trigger(a[s])
                                }
                            })
                        }
                    }
                },
                cube: {
                    setTranslate: function() {
                        var a, t = 0;
                        T.params.cube.shadow && (T.isHorizontal() ? (a = T.wrapper.find(".swiper-cube-shadow"),
                        0 === a.length && (a = e('<div class="swiper-cube-shadow"></div>'),
                        T.wrapper.append(a)),
                        a.css({
                            height: T.width + "px"
                        })) : (a = T.container.find(".swiper-cube-shadow"),
                        0 === a.length && (a = e('<div class="swiper-cube-shadow"></div>'),
                        T.container.append(a))));
                        for (var s = 0; s < T.slides.length; s++) {
                            var i = T.slides.eq(s)
                              , r = 90 * s
                              , n = Math.floor(r / 360);
                            T.rtl && (r = -r,
                            n = Math.floor(-r / 360));
                            var o = Math.max(Math.min(i[0].progress, 1), -1)
                              , l = 0
                              , p = 0
                              , d = 0;
                            s % 4 == 0 ? (l = 4 * -n * T.size,
                            d = 0) : (s - 1) % 4 == 0 ? (l = 0,
                            d = 4 * -n * T.size) : (s - 2) % 4 == 0 ? (l = T.size + 4 * n * T.size,
                            d = T.size) : (s - 3) % 4 == 0 && (l = -T.size,
                            d = 3 * T.size + 4 * T.size * n),
                            T.rtl && (l = -l),
                            T.isHorizontal() || (p = l,
                            l = 0);
                            var u = "rotateX(" + (T.isHorizontal() ? 0 : -r) + "deg) rotateY(" + (T.isHorizontal() ? r : 0) + "deg) translate3d(" + l + "px, " + p + "px, " + d + "px)";
                            if (o <= 1 && o > -1 && (t = 90 * s + 90 * o,
                            T.rtl && (t = 90 * -s - 90 * o)),
                            i.transform(u),
                            T.params.cube.slideShadows) {
                                var c = T.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top")
                                  , m = T.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'),
                                i.append(c)),
                                0 === m.length && (m = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                i.append(m)),
                                c.length && (c[0].style.opacity = Math.max(-o, 0)),
                                m.length && (m[0].style.opacity = Math.max(o, 0))
                            }
                        }
                        if (T.wrapper.css({
                            "-webkit-transform-origin": "50% 50% -" + T.size / 2 + "px",
                            "-moz-transform-origin": "50% 50% -" + T.size / 2 + "px",
                            "-ms-transform-origin": "50% 50% -" + T.size / 2 + "px",
                            "transform-origin": "50% 50% -" + T.size / 2 + "px"
                        }),
                        T.params.cube.shadow)
                            if (T.isHorizontal())
                                a.transform("translate3d(0px, " + (T.width / 2 + T.params.cube.shadowOffset) + "px, " + -T.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + T.params.cube.shadowScale + ")");
                            else {
                                var h = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90)
                                  , g = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2)
                                  , f = T.params.cube.shadowScale
                                  , v = T.params.cube.shadowScale / g
                                  , w = T.params.cube.shadowOffset;
                                a.transform("scale3d(" + f + ", 1, " + v + ") translate3d(0px, " + (T.height / 2 + w) + "px, " + -T.height / 2 / v + "px) rotateX(-90deg)")
                            }
                        var y = T.isSafari || T.isUiWebView ? -T.size / 2 : 0;
                        T.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (T.isHorizontal() ? 0 : t) + "deg) rotateY(" + (T.isHorizontal() ? -t : 0) + "deg)")
                    },
                    setTransition: function(e) {
                        T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                        T.params.cube.shadow && !T.isHorizontal() && T.container.find(".swiper-cube-shadow").transition(e)
                    }
                },
                coverflow: {
                    setTranslate: function() {
                        for (var a = T.translate, t = T.isHorizontal() ? -a + T.width / 2 : -a + T.height / 2, s = T.isHorizontal() ? T.params.coverflow.rotate : -T.params.coverflow.rotate, i = T.params.coverflow.depth, r = 0, n = T.slides.length; r < n; r++) {
                            var o = T.slides.eq(r)
                              , l = T.slidesSizesGrid[r]
                              , p = o[0].swiperSlideOffset
                              , d = (t - p - l / 2) / l * T.params.coverflow.modifier
                              , u = T.isHorizontal() ? s * d : 0
                              , c = T.isHorizontal() ? 0 : s * d
                              , m = -i * Math.abs(d)
                              , h = T.isHorizontal() ? 0 : T.params.coverflow.stretch * d
                              , g = T.isHorizontal() ? T.params.coverflow.stretch * d : 0;
                            Math.abs(g) < .001 && (g = 0),
                            Math.abs(h) < .001 && (h = 0),
                            Math.abs(m) < .001 && (m = 0),
                            Math.abs(u) < .001 && (u = 0),
                            Math.abs(c) < .001 && (c = 0);
                            var f = "translate3d(" + g + "px," + h + "px," + m + "px)  rotateX(" + c + "deg) rotateY(" + u + "deg)";
                            if (o.transform(f),
                            o[0].style.zIndex = 1 - Math.abs(Math.round(d)),
                            T.params.coverflow.slideShadows) {
                                var v = T.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top")
                                  , w = T.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                                0 === v.length && (v = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'),
                                o.append(v)),
                                0 === w.length && (w = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                o.append(w)),
                                v.length && (v[0].style.opacity = d > 0 ? d : 0),
                                w.length && (w[0].style.opacity = -d > 0 ? -d : 0)
                            }
                        }
                        if (T.browser.ie) {
                            T.wrapper[0].style.perspectiveOrigin = t + "px 50%"
                        }
                    },
                    setTransition: function(e) {
                        T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                    }
                }
            },
            T.lazy = {
                initialImageLoaded: !1,
                loadImageInSlide: function(a, t) {
                    if (void 0 !== a && (void 0 === t && (t = !0),
                    0 !== T.slides.length)) {
                        var s = T.slides.eq(a)
                          , i = s.find("." + T.params.lazyLoadingClass + ":not(." + T.params.lazyStatusLoadedClass + "):not(." + T.params.lazyStatusLoadingClass + ")");
                        !s.hasClass(T.params.lazyLoadingClass) || s.hasClass(T.params.lazyStatusLoadedClass) || s.hasClass(T.params.lazyStatusLoadingClass) || (i = i.add(s[0])),
                        0 !== i.length && i.each(function() {
                            var a = e(this);
                            a.addClass(T.params.lazyStatusLoadingClass);
                            var i = a.attr("data-background")
                              , r = a.attr("data-src")
                              , n = a.attr("data-srcset")
                              , o = a.attr("data-sizes");
                            T.loadImage(a[0], r || i, n, o, !1, function() {
                                if (void 0 !== T && null !== T && T) {
                                    if (i ? (a.css("background-image", 'url("' + i + '")'),
                                    a.removeAttr("data-background")) : (n && (a.attr("srcset", n),
                                    a.removeAttr("data-srcset")),
                                    o && (a.attr("sizes", o),
                                    a.removeAttr("data-sizes")),
                                    r && (a.attr("src", r),
                                    a.removeAttr("data-src"))),
                                    a.addClass(T.params.lazyStatusLoadedClass).removeClass(T.params.lazyStatusLoadingClass),
                                    s.find("." + T.params.lazyPreloaderClass + ", ." + T.params.preloaderClass).remove(),
                                    T.params.loop && t) {
                                        var e = s.attr("data-swiper-slide-index");
                                        if (s.hasClass(T.params.slideDuplicateClass)) {
                                            var l = T.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + T.params.slideDuplicateClass + ")");
                                            T.lazy.loadImageInSlide(l.index(), !1)
                                        } else {
                                            var p = T.wrapper.children("." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                            T.lazy.loadImageInSlide(p.index(), !1)
                                        }
                                    }
                                    T.emit("onLazyImageReady", T, s[0], a[0])
                                }
                            }),
                            T.emit("onLazyImageLoad", T, s[0], a[0])
                        })
                    }
                },
                load: function() {
                    var a, t = T.params.slidesPerView;
                    if ("auto" === t && (t = 0),
                    T.lazy.initialImageLoaded || (T.lazy.initialImageLoaded = !0),
                    T.params.watchSlidesVisibility)
                        T.wrapper.children("." + T.params.slideVisibleClass).each(function() {
                            T.lazy.loadImageInSlide(e(this).index())
                        });
                    else if (t > 1)
                        for (a = T.activeIndex; a < T.activeIndex + t; a++)
                            T.slides[a] && T.lazy.loadImageInSlide(a);
                    else
                        T.lazy.loadImageInSlide(T.activeIndex);
                    if (T.params.lazyLoadingInPrevNext)
                        if (t > 1 || T.params.lazyLoadingInPrevNextAmount && T.params.lazyLoadingInPrevNextAmount > 1) {
                            var s = T.params.lazyLoadingInPrevNextAmount
                              , i = t
                              , r = Math.min(T.activeIndex + i + Math.max(s, i), T.slides.length)
                              , n = Math.max(T.activeIndex - Math.max(i, s), 0);
                            for (a = T.activeIndex + t; a < r; a++)
                                T.slides[a] && T.lazy.loadImageInSlide(a);
                            for (a = n; a < T.activeIndex; a++)
                                T.slides[a] && T.lazy.loadImageInSlide(a)
                        } else {
                            var o = T.wrapper.children("." + T.params.slideNextClass);
                            o.length > 0 && T.lazy.loadImageInSlide(o.index());
                            var l = T.wrapper.children("." + T.params.slidePrevClass);
                            l.length > 0 && T.lazy.loadImageInSlide(l.index())
                        }
                },
                onTransitionStart: function() {
                    T.params.lazyLoading && (T.params.lazyLoadingOnTransitionStart || !T.params.lazyLoadingOnTransitionStart && !T.lazy.initialImageLoaded) && T.lazy.load()
                },
                onTransitionEnd: function() {
                    T.params.lazyLoading && !T.params.lazyLoadingOnTransitionStart && T.lazy.load()
                }
            },
            T.scrollbar = {
                isTouched: !1,
                setDragPosition: function(e) {
                    var a = T.scrollbar
                      , t = T.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY
                      , s = t - a.track.offset()[T.isHorizontal() ? "left" : "top"] - a.dragSize / 2
                      , i = -T.minTranslate() * a.moveDivider
                      , r = -T.maxTranslate() * a.moveDivider;
                    s < i ? s = i : s > r && (s = r),
                    s = -s / a.moveDivider,
                    T.updateProgress(s),
                    T.setWrapperTranslate(s, !0)
                },
                dragStart: function(e) {
                    var a = T.scrollbar;
                    a.isTouched = !0,
                    e.preventDefault(),
                    e.stopPropagation(),
                    a.setDragPosition(e),
                    clearTimeout(a.dragTimeout),
                    a.track.transition(0),
                    T.params.scrollbarHide && a.track.css("opacity", 1),
                    T.wrapper.transition(100),
                    a.drag.transition(100),
                    T.emit("onScrollbarDragStart", T)
                },
                dragMove: function(e) {
                    var a = T.scrollbar;
                    a.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                    a.setDragPosition(e),
                    T.wrapper.transition(0),
                    a.track.transition(0),
                    a.drag.transition(0),
                    T.emit("onScrollbarDragMove", T))
                },
                dragEnd: function(e) {
                    var a = T.scrollbar;
                    a.isTouched && (a.isTouched = !1,
                    T.params.scrollbarHide && (clearTimeout(a.dragTimeout),
                    a.dragTimeout = setTimeout(function() {
                        a.track.css("opacity", 0),
                        a.track.transition(400)
                    }, 1e3)),
                    T.emit("onScrollbarDragEnd", T),
                    T.params.scrollbarSnapOnRelease && T.slideReset())
                },
                draggableEvents: function() {
                    return T.params.simulateTouch !== !1 || T.support.touch ? T.touchEvents : T.touchEventsDesktop
                }(),
                enableDraggable: function() {
                    var a = T.scrollbar
                      , t = T.support.touch ? a.track : document;
                    e(a.track).on(a.draggableEvents.start, a.dragStart),
                    e(t).on(a.draggableEvents.move, a.dragMove),
                    e(t).on(a.draggableEvents.end, a.dragEnd)
                },
                disableDraggable: function() {
                    var a = T.scrollbar
                      , t = T.support.touch ? a.track : document;
                    e(a.track).off(a.draggableEvents.start, a.dragStart),
                    e(t).off(a.draggableEvents.move, a.dragMove),
                    e(t).off(a.draggableEvents.end, a.dragEnd)
                },
                set: function() {
                    if (T.params.scrollbar) {
                        var a = T.scrollbar;
                        a.track = e(T.params.scrollbar),
                        T.params.uniqueNavElements && "string" == typeof T.params.scrollbar && a.track.length > 1 && 1 === T.container.find(T.params.scrollbar).length && (a.track = T.container.find(T.params.scrollbar)),
                        a.drag = a.track.find(".swiper-scrollbar-drag"),
                        0 === a.drag.length && (a.drag = e('<div class="swiper-scrollbar-drag"></div>'),
                        a.track.append(a.drag)),
                        a.drag[0].style.width = "",
                        a.drag[0].style.height = "",
                        a.trackSize = T.isHorizontal() ? a.track[0].offsetWidth : a.track[0].offsetHeight,
                        a.divider = T.size / T.virtualSize,
                        a.moveDivider = a.divider * (a.trackSize / T.size),
                        a.dragSize = a.trackSize * a.divider,
                        T.isHorizontal() ? a.drag[0].style.width = a.dragSize + "px" : a.drag[0].style.height = a.dragSize + "px",
                        a.divider >= 1 ? a.track[0].style.display = "none" : a.track[0].style.display = "",
                        T.params.scrollbarHide && (a.track[0].style.opacity = 0)
                    }
                },
                setTranslate: function() {
                    if (T.params.scrollbar) {
                        var e, a = T.scrollbar, t = (T.translate,
                        a.dragSize);
                        e = (a.trackSize - a.dragSize) * T.progress,
                        T.rtl && T.isHorizontal() ? (e = -e,
                        e > 0 ? (t = a.dragSize - e,
                        e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e)) : e < 0 ? (t = a.dragSize + e,
                        e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e),
                        T.isHorizontal() ? (T.support.transforms3d ? a.drag.transform("translate3d(" + e + "px, 0, 0)") : a.drag.transform("translateX(" + e + "px)"),
                        a.drag[0].style.width = t + "px") : (T.support.transforms3d ? a.drag.transform("translate3d(0px, " + e + "px, 0)") : a.drag.transform("translateY(" + e + "px)"),
                        a.drag[0].style.height = t + "px"),
                        T.params.scrollbarHide && (clearTimeout(a.timeout),
                        a.track[0].style.opacity = 1,
                        a.timeout = setTimeout(function() {
                            a.track[0].style.opacity = 0,
                            a.track.transition(400)
                        }, 1e3))
                    }
                },
                setTransition: function(e) {
                    T.params.scrollbar && T.scrollbar.drag.transition(e)
                }
            },
            T.controller = {
                LinearSpline: function(e, a) {
                    var t = function() {
                        var e, a, t;
                        return function(s, i) {
                            for (a = -1,
                            e = s.length; e - a > 1; )
                                s[t = e + a >> 1] <= i ? a = t : e = t;
                            return e
                        }
                    }();
                    this.x = e,
                    this.y = a,
                    this.lastIndex = e.length - 1;
                    var s, i;
                    this.x.length;
                    this.interpolate = function(e) {
                        return e ? (i = t(this.x, e),
                        s = i - 1,
                        (e - this.x[s]) * (this.y[i] - this.y[s]) / (this.x[i] - this.x[s]) + this.y[s]) : 0
                    }
                },
                getInterpolateFunction: function(e) {
                    T.controller.spline || (T.controller.spline = T.params.loop ? new T.controller.LinearSpline(T.slidesGrid,e.slidesGrid) : new T.controller.LinearSpline(T.snapGrid,e.snapGrid))
                },
                setTranslate: function(e, t) {
                    function s(a) {
                        e = a.rtl && "horizontal" === a.params.direction ? -T.translate : T.translate,
                        "slide" === T.params.controlBy && (T.controller.getInterpolateFunction(a),
                        r = -T.controller.spline.interpolate(-e)),
                        r && "container" !== T.params.controlBy || (i = (a.maxTranslate() - a.minTranslate()) / (T.maxTranslate() - T.minTranslate()),
                        r = (e - T.minTranslate()) * i + a.minTranslate()),
                        T.params.controlInverse && (r = a.maxTranslate() - r),
                        a.updateProgress(r),
                        a.setWrapperTranslate(r, !1, T),
                        a.updateActiveIndex()
                    }
                    var i, r, n = T.params.control;
                    if (Array.isArray(n))
                        for (var o = 0; o < n.length; o++)
                            n[o] !== t && n[o]instanceof a && s(n[o]);
                    else
                        n instanceof a && t !== n && s(n)
                },
                setTransition: function(e, t) {
                    function s(a) {
                        a.setWrapperTransition(e, T),
                        0 !== e && (a.onTransitionStart(),
                        a.wrapper.transitionEnd(function() {
                            r && (a.params.loop && "slide" === T.params.controlBy && a.fixLoop(),
                            a.onTransitionEnd())
                        }))
                    }
                    var i, r = T.params.control;
                    if (Array.isArray(r))
                        for (i = 0; i < r.length; i++)
                            r[i] !== t && r[i]instanceof a && s(r[i]);
                    else
                        r instanceof a && t !== r && s(r)
                }
            },
            T.hashnav = {
                onHashCange: function(e, a) {
                    var t = document.location.hash.replace("#", "");
                    t !== T.slides.eq(T.activeIndex).attr("data-hash") && T.slideTo(T.wrapper.children("." + T.params.slideClass + '[data-hash="' + t + '"]').index())
                },
                attachEvents: function(a) {
                    var t = a ? "off" : "on";
                    e(window)[t]("hashchange", T.hashnav.onHashCange)
                },
                setHash: function() {
                    if (T.hashnav.initialized && T.params.hashnav)
                        if (T.params.replaceState && window.history && window.history.replaceState)
                            window.history.replaceState(null, null, "#" + T.slides.eq(T.activeIndex).attr("data-hash") || "");
                        else {
                            var e = T.slides.eq(T.activeIndex)
                              , a = e.attr("data-hash") || e.attr("data-history");
                            document.location.hash = a || ""
                        }
                },
                init: function() {
                    if (T.params.hashnav && !T.params.history) {
                        T.hashnav.initialized = !0;
                        var e = document.location.hash.replace("#", "");
                        if (e)
                            for (var a = 0, t = T.slides.length; a < t; a++) {
                                var s = T.slides.eq(a)
                                  , i = s.attr("data-hash") || s.attr("data-history");
                                if (i === e && !s.hasClass(T.params.slideDuplicateClass)) {
                                    var r = s.index();
                                    T.slideTo(r, 0, T.params.runCallbacksOnInit, !0)
                                }
                            }
                        T.params.hashnavWatchState && T.hashnav.attachEvents()
                    }
                },
                destroy: function() {
                    T.params.hashnavWatchState && T.hashnav.attachEvents(!0)
                }
            },
            T.history = {
                init: function() {
                    if (T.params.history) {
                        if (!window.history || !window.history.pushState)
                            return T.params.history = !1,
                            void (T.params.hashnav = !0);
                        T.history.initialized = !0,
                        this.paths = this.getPathValues(),
                        (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, T.params.runCallbacksOnInit),
                        T.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                    }
                },
                setHistoryPopState: function() {
                    T.history.paths = T.history.getPathValues(),
                    T.history.scrollToSlide(T.params.speed, T.history.paths.value, !1)
                },
                getPathValues: function() {
                    var e = window.location.pathname.slice(1).split("/")
                      , a = e.length;
                    return {
                        key: e[a - 2],
                        value: e[a - 1]
                    }
                },
                setHistory: function(e, a) {
                    if (T.history.initialized && T.params.history) {
                        var t = T.slides.eq(a)
                          , s = this.slugify(t.attr("data-history"));
                        window.location.pathname.includes(e) || (s = e + "/" + s),
                        T.params.replaceState ? window.history.replaceState(null, null, s) : window.history.pushState(null, null, s)
                    }
                },
                slugify: function(e) {
                    return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                },
                scrollToSlide: function(e, a, t) {
                    if (a)
                        for (var s = 0, i = T.slides.length; s < i; s++) {
                            var r = T.slides.eq(s)
                              , n = this.slugify(r.attr("data-history"));
                            if (n === a && !r.hasClass(T.params.slideDuplicateClass)) {
                                var o = r.index();
                                T.slideTo(o, e, t)
                            }
                        }
                    else
                        T.slideTo(0, e, t)
                }
            },
            T.disableKeyboardControl = function() {
                T.params.keyboardControl = !1,
                e(document).off("keydown", p)
            }
            ,
            T.enableKeyboardControl = function() {
                T.params.keyboardControl = !0,
                e(document).on("keydown", p)
            }
            ,
            T.mousewheel = {
                event: !1,
                lastScrollTime: (new window.Date).getTime()
            },
            T.params.mousewheelControl && (T.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                var e = "onwheel"in document;
                if (!e) {
                    var a = document.createElement("div");
                    a.setAttribute("onwheel", "return;"),
                    e = "function" == typeof a.onwheel
                }
                return !e && document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0 && (e = document.implementation.hasFeature("Events.wheel", "3.0")),
                e
            }() ? "wheel" : "mousewheel"),
            T.disableMousewheelControl = function() {
                if (!T.mousewheel.event)
                    return !1;
                var a = T.container;
                return "container" !== T.params.mousewheelEventsTarged && (a = e(T.params.mousewheelEventsTarged)),
                a.off(T.mousewheel.event, u),
                T.params.mousewheelControl = !1,
                !0
            }
            ,
            T.enableMousewheelControl = function() {
                if (!T.mousewheel.event)
                    return !1;
                var a = T.container;
                return "container" !== T.params.mousewheelEventsTarged && (a = e(T.params.mousewheelEventsTarged)),
                a.on(T.mousewheel.event, u),
                T.params.mousewheelControl = !0,
                !0
            }
            ,
            T.parallax = {
                setTranslate: function() {
                    T.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        c(this, T.progress)
                    }),
                    T.slides.each(function() {
                        var a = e(this);
                        a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            c(this, Math.min(Math.max(a[0].progress, -1), 1))
                        })
                    })
                },
                setTransition: function(a) {
                    void 0 === a && (a = T.params.speed),
                    T.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var t = e(this)
                          , s = parseInt(t.attr("data-swiper-parallax-duration"), 10) || a;
                        0 === a && (s = 0),
                        t.transition(s)
                    })
                }
            },
            T.zoom = {
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    slide: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    image: void 0,
                    imageWrap: void 0,
                    zoomMax: T.params.zoomMax
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                },
                getDistanceBetweenTouches: function(e) {
                    if (e.targetTouches.length < 2)
                        return 1;
                    var a = e.targetTouches[0].pageX
                      , t = e.targetTouches[0].pageY
                      , s = e.targetTouches[1].pageX
                      , i = e.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(s - a, 2) + Math.pow(i - t, 2))
                },
                onGestureStart: function(a) {
                    var t = T.zoom;
                    if (!T.support.gestures) {
                        if ("touchstart" !== a.type || "touchstart" === a.type && a.targetTouches.length < 2)
                            return;
                        t.gesture.scaleStart = t.getDistanceBetweenTouches(a)
                    }
                    if (!(t.gesture.slide && t.gesture.slide.length || (t.gesture.slide = e(this),
                    0 === t.gesture.slide.length && (t.gesture.slide = T.slides.eq(T.activeIndex)),
                    t.gesture.image = t.gesture.slide.find("img, svg, canvas"),
                    t.gesture.imageWrap = t.gesture.image.parent("." + T.params.zoomContainerClass),
                    t.gesture.zoomMax = t.gesture.imageWrap.attr("data-swiper-zoom") || T.params.zoomMax,
                    0 !== t.gesture.imageWrap.length)))
                        return void (t.gesture.image = void 0);
                    t.gesture.image.transition(0),
                    t.isScaling = !0
                },
                onGestureChange: function(e) {
                    var a = T.zoom;
                    if (!T.support.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                            return;
                        a.gesture.scaleMove = a.getDistanceBetweenTouches(e)
                    }
                    a.gesture.image && 0 !== a.gesture.image.length && (T.support.gestures ? a.scale = e.scale * a.currentScale : a.scale = a.gesture.scaleMove / a.gesture.scaleStart * a.currentScale,
                    a.scale > a.gesture.zoomMax && (a.scale = a.gesture.zoomMax - 1 + Math.pow(a.scale - a.gesture.zoomMax + 1, .5)),
                    a.scale < T.params.zoomMin && (a.scale = T.params.zoomMin + 1 - Math.pow(T.params.zoomMin - a.scale + 1, .5)),
                    a.gesture.image.transform("translate3d(0,0,0) scale(" + a.scale + ")"))
                },
                onGestureEnd: function(e) {
                    var a = T.zoom;
                    !T.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || a.gesture.image && 0 !== a.gesture.image.length && (a.scale = Math.max(Math.min(a.scale, a.gesture.zoomMax), T.params.zoomMin),
                    a.gesture.image.transition(T.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"),
                    a.currentScale = a.scale,
                    a.isScaling = !1,
                    1 === a.scale && (a.gesture.slide = void 0))
                },
                onTouchStart: function(e, a) {
                    var t = e.zoom;
                    t.gesture.image && 0 !== t.gesture.image.length && (t.image.isTouched || ("android" === e.device.os && a.preventDefault(),
                    t.image.isTouched = !0,
                    t.image.touchesStart.x = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX,
                    t.image.touchesStart.y = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY))
                },
                onTouchMove: function(e) {
                    var a = T.zoom;
                    if (a.gesture.image && 0 !== a.gesture.image.length && (T.allowClick = !1,
                    a.image.isTouched && a.gesture.slide)) {
                        a.image.isMoved || (a.image.width = a.gesture.image[0].offsetWidth,
                        a.image.height = a.gesture.image[0].offsetHeight,
                        a.image.startX = T.getTranslate(a.gesture.imageWrap[0], "x") || 0,
                        a.image.startY = T.getTranslate(a.gesture.imageWrap[0], "y") || 0,
                        a.gesture.slideWidth = a.gesture.slide[0].offsetWidth,
                        a.gesture.slideHeight = a.gesture.slide[0].offsetHeight,
                        a.gesture.imageWrap.transition(0),
                        T.rtl && (a.image.startX = -a.image.startX),
                        T.rtl && (a.image.startY = -a.image.startY));
                        var t = a.image.width * a.scale
                          , s = a.image.height * a.scale;
                        if (!(t < a.gesture.slideWidth && s < a.gesture.slideHeight)) {
                            if (a.image.minX = Math.min(a.gesture.slideWidth / 2 - t / 2, 0),
                            a.image.maxX = -a.image.minX,
                            a.image.minY = Math.min(a.gesture.slideHeight / 2 - s / 2, 0),
                            a.image.maxY = -a.image.minY,
                            a.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                            a.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                            !a.image.isMoved && !a.isScaling) {
                                if (T.isHorizontal() && Math.floor(a.image.minX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x < a.image.touchesStart.x || Math.floor(a.image.maxX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x > a.image.touchesStart.x)
                                    return void (a.image.isTouched = !1);
                                if (!T.isHorizontal() && Math.floor(a.image.minY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y < a.image.touchesStart.y || Math.floor(a.image.maxY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y > a.image.touchesStart.y)
                                    return void (a.image.isTouched = !1)
                            }
                            e.preventDefault(),
                            e.stopPropagation(),
                            a.image.isMoved = !0,
                            a.image.currentX = a.image.touchesCurrent.x - a.image.touchesStart.x + a.image.startX,
                            a.image.currentY = a.image.touchesCurrent.y - a.image.touchesStart.y + a.image.startY,
                            a.image.currentX < a.image.minX && (a.image.currentX = a.image.minX + 1 - Math.pow(a.image.minX - a.image.currentX + 1, .8)),
                            a.image.currentX > a.image.maxX && (a.image.currentX = a.image.maxX - 1 + Math.pow(a.image.currentX - a.image.maxX + 1, .8)),
                            a.image.currentY < a.image.minY && (a.image.currentY = a.image.minY + 1 - Math.pow(a.image.minY - a.image.currentY + 1, .8)),
                            a.image.currentY > a.image.maxY && (a.image.currentY = a.image.maxY - 1 + Math.pow(a.image.currentY - a.image.maxY + 1, .8)),
                            a.velocity.prevPositionX || (a.velocity.prevPositionX = a.image.touchesCurrent.x),
                            a.velocity.prevPositionY || (a.velocity.prevPositionY = a.image.touchesCurrent.y),
                            a.velocity.prevTime || (a.velocity.prevTime = Date.now()),
                            a.velocity.x = (a.image.touchesCurrent.x - a.velocity.prevPositionX) / (Date.now() - a.velocity.prevTime) / 2,
                            a.velocity.y = (a.image.touchesCurrent.y - a.velocity.prevPositionY) / (Date.now() - a.velocity.prevTime) / 2,
                            Math.abs(a.image.touchesCurrent.x - a.velocity.prevPositionX) < 2 && (a.velocity.x = 0),
                            Math.abs(a.image.touchesCurrent.y - a.velocity.prevPositionY) < 2 && (a.velocity.y = 0),
                            a.velocity.prevPositionX = a.image.touchesCurrent.x,
                            a.velocity.prevPositionY = a.image.touchesCurrent.y,
                            a.velocity.prevTime = Date.now(),
                            a.gesture.imageWrap.transform("translate3d(" + a.image.currentX + "px, " + a.image.currentY + "px,0)")
                        }
                    }
                },
                onTouchEnd: function(e, a) {
                    var t = e.zoom;
                    if (t.gesture.image && 0 !== t.gesture.image.length) {
                        if (!t.image.isTouched || !t.image.isMoved)
                            return t.image.isTouched = !1,
                            void (t.image.isMoved = !1);
                        t.image.isTouched = !1,
                        t.image.isMoved = !1;
                        var s = 300
                          , i = 300
                          , r = t.velocity.x * s
                          , n = t.image.currentX + r
                          , o = t.velocity.y * i
                          , l = t.image.currentY + o;
                        0 !== t.velocity.x && (s = Math.abs((n - t.image.currentX) / t.velocity.x)),
                        0 !== t.velocity.y && (i = Math.abs((l - t.image.currentY) / t.velocity.y));
                        var p = Math.max(s, i);
                        t.image.currentX = n,
                        t.image.currentY = l;
                        var d = t.image.width * t.scale
                          , u = t.image.height * t.scale;
                        t.image.minX = Math.min(t.gesture.slideWidth / 2 - d / 2, 0),
                        t.image.maxX = -t.image.minX,
                        t.image.minY = Math.min(t.gesture.slideHeight / 2 - u / 2, 0),
                        t.image.maxY = -t.image.minY,
                        t.image.currentX = Math.max(Math.min(t.image.currentX, t.image.maxX), t.image.minX),
                        t.image.currentY = Math.max(Math.min(t.image.currentY, t.image.maxY), t.image.minY),
                        t.gesture.imageWrap.transition(p).transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function(e) {
                    var a = e.zoom;
                    a.gesture.slide && e.previousIndex !== e.activeIndex && (a.gesture.image.transform("translate3d(0,0,0) scale(1)"),
                    a.gesture.imageWrap.transform("translate3d(0,0,0)"),
                    a.gesture.slide = a.gesture.image = a.gesture.imageWrap = void 0,
                    a.scale = a.currentScale = 1)
                },
                toggleZoom: function(a, t) {
                    var s = a.zoom;
                    if (s.gesture.slide || (s.gesture.slide = a.clickedSlide ? e(a.clickedSlide) : a.slides.eq(a.activeIndex),
                    s.gesture.image = s.gesture.slide.find("img, svg, canvas"),
                    s.gesture.imageWrap = s.gesture.image.parent("." + a.params.zoomContainerClass)),
                    s.gesture.image && 0 !== s.gesture.image.length) {
                        var i, r, n, o, l, p, d, u, c, m, h, g, f, v, w, y, x, T;
                        void 0 === s.image.touchesStart.x && t ? (i = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX,
                        r = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (i = s.image.touchesStart.x,
                        r = s.image.touchesStart.y),
                        s.scale && 1 !== s.scale ? (s.scale = s.currentScale = 1,
                        s.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),
                        s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),
                        s.gesture.slide = void 0) : (s.scale = s.currentScale = s.gesture.imageWrap.attr("data-swiper-zoom") || a.params.zoomMax,
                        t ? (x = s.gesture.slide[0].offsetWidth,
                        T = s.gesture.slide[0].offsetHeight,
                        n = s.gesture.slide.offset().left,
                        o = s.gesture.slide.offset().top,
                        l = n + x / 2 - i,
                        p = o + T / 2 - r,
                        c = s.gesture.image[0].offsetWidth,
                        m = s.gesture.image[0].offsetHeight,
                        h = c * s.scale,
                        g = m * s.scale,
                        f = Math.min(x / 2 - h / 2, 0),
                        v = Math.min(T / 2 - g / 2, 0),
                        w = -f,
                        y = -v,
                        d = l * s.scale,
                        u = p * s.scale,
                        d < f && (d = f),
                        d > w && (d = w),
                        u < v && (u = v),
                        u > y && (u = y)) : (d = 0,
                        u = 0),
                        s.gesture.imageWrap.transition(300).transform("translate3d(" + d + "px, " + u + "px,0)"),
                        s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + s.scale + ")"))
                    }
                },
                attachEvents: function(a) {
                    var t = a ? "off" : "on";
                    if (T.params.zoom) {
                        var s = (T.slides,
                        !("touchstart" !== T.touchEvents.start || !T.support.passiveListener || !T.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        });
                        T.support.gestures ? (T.slides[t]("gesturestart", T.zoom.onGestureStart, s),
                        T.slides[t]("gesturechange", T.zoom.onGestureChange, s),
                        T.slides[t]("gestureend", T.zoom.onGestureEnd, s)) : "touchstart" === T.touchEvents.start && (T.slides[t](T.touchEvents.start, T.zoom.onGestureStart, s),
                        T.slides[t](T.touchEvents.move, T.zoom.onGestureChange, s),
                        T.slides[t](T.touchEvents.end, T.zoom.onGestureEnd, s)),
                        T[t]("touchStart", T.zoom.onTouchStart),
                        T.slides.each(function(a, s) {
                            e(s).find("." + T.params.zoomContainerClass).length > 0 && e(s)[t](T.touchEvents.move, T.zoom.onTouchMove)
                        }),
                        T[t]("touchEnd", T.zoom.onTouchEnd),
                        T[t]("transitionEnd", T.zoom.onTransitionEnd),
                        T.params.zoomToggle && T.on("doubleTap", T.zoom.toggleZoom)
                    }
                },
                init: function() {
                    T.zoom.attachEvents()
                },
                destroy: function() {
                    T.zoom.attachEvents(!0)
                }
            },
            T._plugins = [];
            for (var Y in T.plugins) {
                var O = T.plugins[Y](T, T.params[Y]);
                O && T._plugins.push(O)
            }
            return T.callPlugins = function(e) {
                for (var a = 0; a < T._plugins.length; a++)
                    e in T._plugins[a] && T._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }
            ,
            T.emitterEventListeners = {},
            T.emit = function(e) {
                T.params[e] && T.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var a;
                if (T.emitterEventListeners[e])
                    for (a = 0; a < T.emitterEventListeners[e].length; a++)
                        T.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                T.callPlugins && T.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }
            ,
            T.on = function(e, a) {
                return e = m(e),
                T.emitterEventListeners[e] || (T.emitterEventListeners[e] = []),
                T.emitterEventListeners[e].push(a),
                T
            }
            ,
            T.off = function(e, a) {
                var t;
                if (e = m(e),
                void 0 === a)
                    return T.emitterEventListeners[e] = [],
                    T;
                if (T.emitterEventListeners[e] && 0 !== T.emitterEventListeners[e].length) {
                    for (t = 0; t < T.emitterEventListeners[e].length; t++)
                        T.emitterEventListeners[e][t] === a && T.emitterEventListeners[e].splice(t, 1);
                    return T
                }
            }
            ,
            T.once = function(e, a) {
                e = m(e);
                var t = function() {
                    a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]),
                    T.off(e, t)
                };
                return T.on(e, t),
                T
            }
            ,
            T.a11y = {
                makeFocusable: function(e) {
                    return e.attr("tabIndex", "0"),
                    e
                },
                addRole: function(e, a) {
                    return e.attr("role", a),
                    e
                },
                addLabel: function(e, a) {
                    return e.attr("aria-label", a),
                    e
                },
                disable: function(e) {
                    return e.attr("aria-disabled", !0),
                    e
                },
                enable: function(e) {
                    return e.attr("aria-disabled", !1),
                    e
                },
                onEnterKey: function(a) {
                    13 === a.keyCode && (e(a.target).is(T.params.nextButton) ? (T.onClickNext(a),
                    T.isEnd ? T.a11y.notify(T.params.lastSlideMessage) : T.a11y.notify(T.params.nextSlideMessage)) : e(a.target).is(T.params.prevButton) && (T.onClickPrev(a),
                    T.isBeginning ? T.a11y.notify(T.params.firstSlideMessage) : T.a11y.notify(T.params.prevSlideMessage)),
                    e(a.target).is("." + T.params.bulletClass) && e(a.target)[0].click())
                },
                liveRegion: e('<span class="' + T.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function(e) {
                    var a = T.a11y.liveRegion;
                    0 !== a.length && (a.html(""),
                    a.html(e))
                },
                init: function() {
                    T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.a11y.makeFocusable(T.nextButton),
                    T.a11y.addRole(T.nextButton, "button"),
                    T.a11y.addLabel(T.nextButton, T.params.nextSlideMessage)),
                    T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.a11y.makeFocusable(T.prevButton),
                    T.a11y.addRole(T.prevButton, "button"),
                    T.a11y.addLabel(T.prevButton, T.params.prevSlideMessage)),
                    e(T.container).append(T.a11y.liveRegion)
                },
                initPagination: function() {
                    T.params.pagination && T.params.paginationClickable && T.bullets && T.bullets.length && T.bullets.each(function() {
                        var a = e(this);
                        T.a11y.makeFocusable(a),
                        T.a11y.addRole(a, "button"),
                        T.a11y.addLabel(a, T.params.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
                    })
                },
                destroy: function() {
                    T.a11y.liveRegion && T.a11y.liveRegion.length > 0 && T.a11y.liveRegion.remove()
                }
            },
            T.init = function() {
                T.params.loop && T.createLoop(),
                T.updateContainerSize(),
                T.updateSlidesSize(),
                T.updatePagination(),
                T.params.scrollbar && T.scrollbar && (T.scrollbar.set(),
                T.params.scrollbarDraggable && T.scrollbar.enableDraggable()),
                "slide" !== T.params.effect && T.effects[T.params.effect] && (T.params.loop || T.updateProgress(),
                T.effects[T.params.effect].setTranslate()),
                T.params.loop ? T.slideTo(T.params.initialSlide + T.loopedSlides, 0, T.params.runCallbacksOnInit) : (T.slideTo(T.params.initialSlide, 0, T.params.runCallbacksOnInit),
                0 === T.params.initialSlide && (T.parallax && T.params.parallax && T.parallax.setTranslate(),
                T.lazy && T.params.lazyLoading && (T.lazy.load(),
                T.lazy.initialImageLoaded = !0))),
                T.attachEvents(),
                T.params.observer && T.support.observer && T.initObservers(),
                T.params.preloadImages && !T.params.lazyLoading && T.preloadImages(),
                T.params.zoom && T.zoom && T.zoom.init(),
                T.params.autoplay && T.startAutoplay(),
                T.params.keyboardControl && T.enableKeyboardControl && T.enableKeyboardControl(),
                T.params.mousewheelControl && T.enableMousewheelControl && T.enableMousewheelControl(),
                T.params.hashnavReplaceState && (T.params.replaceState = T.params.hashnavReplaceState),
                T.params.history && T.history && T.history.init(),
                T.params.hashnav && T.hashnav && T.hashnav.init(),
                T.params.a11y && T.a11y && T.a11y.init(),
                T.emit("onInit", T)
            }
            ,
            T.cleanupStyles = function() {
                T.container.removeClass(T.classNames.join(" ")).removeAttr("style"),
                T.wrapper.removeAttr("style"),
                T.slides && T.slides.length && T.slides.removeClass([T.params.slideVisibleClass, T.params.slideActiveClass, T.params.slideNextClass, T.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),
                T.paginationContainer && T.paginationContainer.length && T.paginationContainer.removeClass(T.params.paginationHiddenClass),
                T.bullets && T.bullets.length && T.bullets.removeClass(T.params.bulletActiveClass),
                T.params.prevButton && e(T.params.prevButton).removeClass(T.params.buttonDisabledClass),
                T.params.nextButton && e(T.params.nextButton).removeClass(T.params.buttonDisabledClass),
                T.params.scrollbar && T.scrollbar && (T.scrollbar.track && T.scrollbar.track.length && T.scrollbar.track.removeAttr("style"),
                T.scrollbar.drag && T.scrollbar.drag.length && T.scrollbar.drag.removeAttr("style"))
            }
            ,
            T.destroy = function(e, a) {
                T.detachEvents(),
                T.stopAutoplay(),
                T.params.scrollbar && T.scrollbar && T.params.scrollbarDraggable && T.scrollbar.disableDraggable(),
                T.params.loop && T.destroyLoop(),
                a && T.cleanupStyles(),
                T.disconnectObservers(),
                T.params.zoom && T.zoom && T.zoom.destroy(),
                T.params.keyboardControl && T.disableKeyboardControl && T.disableKeyboardControl(),
                T.params.mousewheelControl && T.disableMousewheelControl && T.disableMousewheelControl(),
                T.params.a11y && T.a11y && T.a11y.destroy(),
                T.params.history && !T.params.replaceState && window.removeEventListener("popstate", T.history.setHistoryPopState),
                T.params.hashnav && T.hashnav && T.hashnav.destroy(),
                T.emit("onDestroy"),
                e !== !1 && (T = null)
            }
            ,
            T.init(),
            T
        }
    };
    a.prototype = {
        isSafari: function() {
            var e = window.navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
        isArray: function(e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
            lteIE9: function() {
                var e = document.createElement("div");
                return e.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->",
                1 === e.getElementsByTagName("i").length
            }()
        },
        device: function() {
            var e = window.navigator.userAgent
              , a = e.match(/(Android);?[\s\/]+([\d.]+)?/)
              , t = e.match(/(iPad).*OS\s([\d_]+)/)
              , s = e.match(/(iPod)(.*OS\s([\d_]+))?/)
              , i = !t && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            return {
                ios: t || i || s,
                android: a
            }
        }(),
        support: {
            touch: window.Modernizr && Modernizr.touch === !0 || function() {
                return !!("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(),
            transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                var e = document.createElement("div").style;
                return "webkitPerspective"in e || "MozPerspective"in e || "OPerspective"in e || "MsPerspective"in e || "perspective"in e
            }(),
            flexbox: function() {
                for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++)
                    if (a[t]in e)
                        return !0
            }(),
            observer: function() {
                return "MutationObserver"in window || "WebkitMutationObserver"in window
            }(),
            passiveListener: function() {
                var e = !1;
                try {
                    var a = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    window.addEventListener("testPassiveListener", null, a)
                } catch (e) {}
                return e
            }(),
            gestures: function() {
                return "ongesturestart"in window
            }()
        },
        plugins: {}
    };
    for (var t = (function() {
        var e = function(e) {
            var a = this
              , t = 0;
            for (t = 0; t < e.length; t++)
                a[t] = e[t];
            return a.length = e.length,
            this
        }
          , a = function(a, t) {
            var s = []
              , i = 0;
            if (a && !t && a instanceof e)
                return a;
            if (a)
                if ("string" == typeof a) {
                    var r, n, o = a.trim();
                    if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                        var l = "div";
                        for (0 === o.indexOf("<li") && (l = "ul"),
                        0 === o.indexOf("<tr") && (l = "tbody"),
                        0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"),
                        0 === o.indexOf("<tbody") && (l = "table"),
                        0 === o.indexOf("<option") && (l = "select"),
                        n = document.createElement(l),
                        n.innerHTML = a,
                        i = 0; i < n.childNodes.length; i++)
                            s.push(n.childNodes[i])
                    } else
                        for (r = t || "#" !== a[0] || a.match(/[ .<>:~]/) ? (t || document).querySelectorAll(a) : [document.getElementById(a.split("#")[1])],
                        i = 0; i < r.length; i++)
                            r[i] && s.push(r[i])
                } else if (a.nodeType || a === window || a === document)
                    s.push(a);
                else if (a.length > 0 && a[0].nodeType)
                    for (i = 0; i < a.length; i++)
                        s.push(a[i]);
            return new e(s)
        };
        return e.prototype = {
            addClass: function(e) {
                if (void 0 === e)
                    return this;
                for (var a = e.split(" "), t = 0; t < a.length; t++)
                    for (var s = 0; s < this.length; s++)
                        this[s].classList.add(a[t]);
                return this
            },
            removeClass: function(e) {
                for (var a = e.split(" "), t = 0; t < a.length; t++)
                    for (var s = 0; s < this.length; s++)
                        this[s].classList.remove(a[t]);
                return this
            },
            hasClass: function(e) {
                return !!this[0] && this[0].classList.contains(e)
            },
            toggleClass: function(e) {
                for (var a = e.split(" "), t = 0; t < a.length; t++)
                    for (var s = 0; s < this.length; s++)
                        this[s].classList.toggle(a[t]);
                return this
            },
            attr: function(e, a) {
                if (1 === arguments.length && "string" == typeof e)
                    return this[0] ? this[0].getAttribute(e) : void 0;
                for (var t = 0; t < this.length; t++)
                    if (2 === arguments.length)
                        this[t].setAttribute(e, a);
                    else
                        for (var s in e)
                            this[t][s] = e[s],
                            this[t].setAttribute(s, e[s]);
                return this
            },
            removeAttr: function(e) {
                for (var a = 0; a < this.length; a++)
                    this[a].removeAttribute(e);
                return this
            },
            data: function(e, a) {
                if (void 0 !== a) {
                    for (var t = 0; t < this.length; t++) {
                        var s = this[t];
                        s.dom7ElementDataStorage || (s.dom7ElementDataStorage = {}),
                        s.dom7ElementDataStorage[e] = a
                    }
                    return this
                }
                if (this[0]) {
                    var i = this[0].getAttribute("data-" + e);
                    return i ? i : this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0
                }
            },
            transform: function(e) {
                for (var a = 0; a < this.length; a++) {
                    var t = this[a].style;
                    t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
                }
                return this
            },
            transition: function(e) {
                "string" != typeof e && (e += "ms");
                for (var a = 0; a < this.length; a++) {
                    var t = this[a].style;
                    t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
                }
                return this
            },
            on: function(e, t, s, i) {
                function r(e) {
                    var i = e.target;
                    if (a(i).is(t))
                        s.call(i, e);
                    else
                        for (var r = a(i).parents(), n = 0; n < r.length; n++)
                            a(r[n]).is(t) && s.call(r[n], e)
                }
                var n, o, l = e.split(" ");
                for (n = 0; n < this.length; n++)
                    if ("function" == typeof t || t === !1)
                        for ("function" == typeof t && (s = arguments[1],
                        i = arguments[2] || !1),
                        o = 0; o < l.length; o++)
                            this[n].addEventListener(l[o], s, i);
                    else
                        for (o = 0; o < l.length; o++)
                            this[n].dom7LiveListeners || (this[n].dom7LiveListeners = []),
                            this[n].dom7LiveListeners.push({
                                listener: s,
                                liveListener: r
                            }),
                            this[n].addEventListener(l[o], r, i);
                return this
            },
            off: function(e, a, t, s) {
                for (var i = e.split(" "), r = 0; r < i.length; r++)
                    for (var n = 0; n < this.length; n++)
                        if ("function" == typeof a || a === !1)
                            "function" == typeof a && (t = arguments[1],
                            s = arguments[2] || !1),
                            this[n].removeEventListener(i[r], t, s);
                        else if (this[n].dom7LiveListeners)
                            for (var o = 0; o < this[n].dom7LiveListeners.length; o++)
                                this[n].dom7LiveListeners[o].listener === t && this[n].removeEventListener(i[r], this[n].dom7LiveListeners[o].liveListener, s);
                return this
            },
            once: function(e, a, t, s) {
                function i(n) {
                    t(n),
                    r.off(e, a, i, s)
                }
                var r = this;
                "function" == typeof a && (a = !1,
                t = arguments[1],
                s = arguments[2]),
                r.on(e, a, i, s)
            },
            trigger: function(e, a) {
                for (var t = 0; t < this.length; t++) {
                    var s;
                    try {
                        s = new window.CustomEvent(e,{
                            detail: a,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (t) {
                        s = document.createEvent("Event"),
                        s.initEvent(e, !0, !0),
                        s.detail = a
                    }
                    this[t].dispatchEvent(s)
                }
                return this
            },
            transitionEnd: function(e) {
                function a(r) {
                    if (r.target === this)
                        for (e.call(this, r),
                        t = 0; t < s.length; t++)
                            i.off(s[t], a)
                }
                var t, s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = this;
                if (e)
                    for (t = 0; t < s.length; t++)
                        i.on(s[t], a);
                return this
            },
            width: function() {
                return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
            },
            outerWidth: function(e) {
                return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
            },
            height: function() {
                return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
            },
            outerHeight: function(e) {
                return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
            },
            offset: function() {
                if (this.length > 0) {
                    var e = this[0]
                      , a = e.getBoundingClientRect()
                      , t = document.body
                      , s = e.clientTop || t.clientTop || 0
                      , i = e.clientLeft || t.clientLeft || 0
                      , r = window.pageYOffset || e.scrollTop
                      , n = window.pageXOffset || e.scrollLeft;
                    return {
                        top: a.top + r - s,
                        left: a.left + n - i
                    }
                }
                return null
            },
            css: function(e, a) {
                var t;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (t = 0; t < this.length; t++)
                            for (var s in e)
                                this[t].style[s] = e[s];
                        return this
                    }
                    if (this[0])
                        return window.getComputedStyle(this[0], null).getPropertyValue(e)
                }
                if (2 === arguments.length && "string" == typeof e) {
                    for (t = 0; t < this.length; t++)
                        this[t].style[e] = a;
                    return this
                }
                return this
            },
            each: function(e) {
                for (var a = 0; a < this.length; a++)
                    e.call(this[a], a, this[a]);
                return this
            },
            html: function(e) {
                if (void 0 === e)
                    return this[0] ? this[0].innerHTML : void 0;
                for (var a = 0; a < this.length; a++)
                    this[a].innerHTML = e;
                return this
            },
            text: function(e) {
                if (void 0 === e)
                    return this[0] ? this[0].textContent.trim() : null;
                for (var a = 0; a < this.length; a++)
                    this[a].textContent = e;
                return this
            },
            is: function(t) {
                if (!this[0])
                    return !1;
                var s, i;
                if ("string" == typeof t) {
                    var r = this[0];
                    if (r === document)
                        return t === document;
                    if (r === window)
                        return t === window;
                    if (r.matches)
                        return r.matches(t);
                    if (r.webkitMatchesSelector)
                        return r.webkitMatchesSelector(t);
                    if (r.mozMatchesSelector)
                        return r.mozMatchesSelector(t);
                    if (r.msMatchesSelector)
                        return r.msMatchesSelector(t);
                    for (s = a(t),
                    i = 0; i < s.length; i++)
                        if (s[i] === this[0])
                            return !0;
                    return !1
                }
                if (t === document)
                    return this[0] === document;
                if (t === window)
                    return this[0] === window;
                if (t.nodeType || t instanceof e) {
                    for (s = t.nodeType ? [t] : t,
                    i = 0; i < s.length; i++)
                        if (s[i] === this[0])
                            return !0;
                    return !1
                }
                return !1
            },
            index: function() {
                if (this[0]) {
                    for (var e = this[0], a = 0; null !== (e = e.previousSibling); )
                        1 === e.nodeType && a++;
                    return a
                }
            },
            eq: function(a) {
                if (void 0 === a)
                    return this;
                var t, s = this.length;
                return a > s - 1 ? new e([]) : a < 0 ? (t = s + a,
                new e(t < 0 ? [] : [this[t]])) : new e([this[a]])
            },
            append: function(a) {
                var t, s;
                for (t = 0; t < this.length; t++)
                    if ("string" == typeof a) {
                        var i = document.createElement("div");
                        for (i.innerHTML = a; i.firstChild; )
                            this[t].appendChild(i.firstChild)
                    } else if (a instanceof e)
                        for (s = 0; s < a.length; s++)
                            this[t].appendChild(a[s]);
                    else
                        this[t].appendChild(a);
                return this
            },
            prepend: function(a) {
                var t, s;
                for (t = 0; t < this.length; t++)
                    if ("string" == typeof a) {
                        var i = document.createElement("div");
                        for (i.innerHTML = a,
                        s = i.childNodes.length - 1; s >= 0; s--)
                            this[t].insertBefore(i.childNodes[s], this[t].childNodes[0])
                    } else if (a instanceof e)
                        for (s = 0; s < a.length; s++)
                            this[t].insertBefore(a[s], this[t].childNodes[0]);
                    else
                        this[t].insertBefore(a, this[t].childNodes[0]);
                return this
            },
            insertBefore: function(e) {
                for (var t = a(e), s = 0; s < this.length; s++)
                    if (1 === t.length)
                        t[0].parentNode.insertBefore(this[s], t[0]);
                    else if (t.length > 1)
                        for (var i = 0; i < t.length; i++)
                            t[i].parentNode.insertBefore(this[s].cloneNode(!0), t[i])
            },
            insertAfter: function(e) {
                for (var t = a(e), s = 0; s < this.length; s++)
                    if (1 === t.length)
                        t[0].parentNode.insertBefore(this[s], t[0].nextSibling);
                    else if (t.length > 1)
                        for (var i = 0; i < t.length; i++)
                            t[i].parentNode.insertBefore(this[s].cloneNode(!0), t[i].nextSibling)
            },
            next: function(t) {
                return new e(this.length > 0 ? t ? this[0].nextElementSibling && a(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
            },
            nextAll: function(t) {
                var s = []
                  , i = this[0];
                if (!i)
                    return new e([]);
                for (; i.nextElementSibling; ) {
                    var r = i.nextElementSibling;
                    t ? a(r).is(t) && s.push(r) : s.push(r),
                    i = r
                }
                return new e(s)
            },
            prev: function(t) {
                return new e(this.length > 0 ? t ? this[0].previousElementSibling && a(this[0].previousElementSibling).is(t) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
            },
            prevAll: function(t) {
                var s = []
                  , i = this[0];
                if (!i)
                    return new e([]);
                for (; i.previousElementSibling; ) {
                    var r = i.previousElementSibling;
                    t ? a(r).is(t) && s.push(r) : s.push(r),
                    i = r
                }
                return new e(s)
            },
            parent: function(e) {
                for (var t = [], s = 0; s < this.length; s++)
                    e ? a(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode);
                return a(a.unique(t))
            },
            parents: function(e) {
                for (var t = [], s = 0; s < this.length; s++)
                    for (var i = this[s].parentNode; i; )
                        e ? a(i).is(e) && t.push(i) : t.push(i),
                        i = i.parentNode;
                return a(a.unique(t))
            },
            find: function(a) {
                for (var t = [], s = 0; s < this.length; s++)
                    for (var i = this[s].querySelectorAll(a), r = 0; r < i.length; r++)
                        t.push(i[r]);
                return new e(t)
            },
            children: function(t) {
                for (var s = [], i = 0; i < this.length; i++)
                    for (var r = this[i].childNodes, n = 0; n < r.length; n++)
                        t ? 1 === r[n].nodeType && a(r[n]).is(t) && s.push(r[n]) : 1 === r[n].nodeType && s.push(r[n]);
                return new e(a.unique(s))
            },
            remove: function() {
                for (var e = 0; e < this.length; e++)
                    this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this
            },
            add: function() {
                var e, t, s = this;
                for (e = 0; e < arguments.length; e++) {
                    var i = a(arguments[e]);
                    for (t = 0; t < i.length; t++)
                        s[s.length] = i[t],
                        s.length++
                }
                return s
            }
        },
        a.fn = e.prototype,
        a.unique = function(e) {
            for (var a = [], t = 0; t < e.length; t++)
                a.indexOf(e[t]) === -1 && a.push(e[t]);
            return a
        }
        ,
        a
    }()), s = ["jQuery", "Zepto", "Dom7"], i = 0; i < s.length; i++)
        window[s[i]] && function(e) {
            e.fn.swiper = function(t) {
                var s;
                return e(this).each(function() {
                    var e = new a(this,t);
                    s || (s = e)
                }),
                s
            }
        }(window[s[i]]);
    var r;
    r = void 0 === t ? window.Dom7 || window.Zepto || window.jQuery : t,
    r && ("transitionEnd"in r.fn || (r.fn.transitionEnd = function(e) {
        function a(r) {
            if (r.target === this)
                for (e.call(this, r),
                t = 0; t < s.length; t++)
                    i.off(s[t], a)
        }
        var t, s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = this;
        if (e)
            for (t = 0; t < s.length; t++)
                i.on(s[t], a);
        return this
    }
    ),
    "transform"in r.fn || (r.fn.transform = function(e) {
        for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
        }
        return this
    }
    ),
    "transition"in r.fn || (r.fn.transition = function(e) {
        "string" != typeof e && (e += "ms");
        for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
        }
        return this
    }
    ),
    "outerWidth"in r.fn || (r.fn.outerWidth = function(e) {
        return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
    }
    )),
    window.Swiper = a
}(),
"undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
    "use strict";
    return window.Swiper
});

!function(e) {
    "use strict";
    var t, n;
    n = {},
    e.fn.jParticle = function(n) {
        return this.each(function(i, a) {
            "object" == typeof a.sandbox && e(a).removeJParticle(),
            a.sandbox = t(a, n)
        }),
        this
    }
    ,
    e.fn.removeJParticle = function() {
        return this.each(function(e, t) {
            t.sandbox && (t.sandbox.remove(),
            delete t.sandbox)
        }),
        this
    }
    ,
    e.fn.freezeJParticle = function() {
        return this.each(function(e, t) {
            t.sandbox && t.sandbox.freeze()
        }),
        this
    }
    ,
    e.fn.unfreezeJParticle = function() {
        return this.each(function(e, t) {
            t.sandbox && t.sandbox.unfreeze()
        }),
        this
    }
    ,
    t = function(t, i) {
        var a, o;
        return a = {},
        a.canvas = {},
        a.mouse = {},
        a.particles = [],
        a.isAnimated = !1,
        a.initialize = function(e, t) {
            a.initParams(t),
            a.initHTML(e),
            a.initParticles(),
            a.initEvents(),
            a.initAnimation()
        }
        ,
        a.initParams = function(t) {
            t && t.color && (!t.particle || t.particle && !t.particle.color) && (t.particle || (t.particle = {}),
            t.particle.color = t.color),
            a.params = e.extend({
                particlesNumber: 100,
                linkDist: 50,
                createLinkDist: 150,
                disableLinks: !1,
                disableMouse: !1,
                background: "black",
                color: "white",
                width: null,
                height: null,
                linksWidth: 1
            }, t)
        }
        ,
        a.initHTML = function(t) {
            var n;
            n = a.canvas,
            n.container = e(t),
            n.element = e("<canvas/>"),
            n.context = n.element.get(0).getContext("2d"),
            n.container.append(n.element),
            n.element.css("display", "block"),
            n.element.get(0).width = a.params.width ? a.params.width : n.container.width(),
            n.element.get(0).height = a.params.height ? a.params.height : n.container.height(),
            n.element.css("background", a.params.background)
        }
        ,
        a.resize = function(e, t) {
            e && (canvas.element.get(0).width = e),
            t && (canvas.element.get(0).height = t)
        }
        ,
        a.initParticles = function() {
            var e, t;
            for (e = 0,
            t = a.params.particlesNumber; t > e; e += 1)
                a.particles.push(o(a.canvas.element.get(0), a.params.particle))
        }
        ,
        a.initEvents = function() {
            a.canvas.element.mouseenter(function() {
                a.mouse.hoverCanvas = !0,
                a.isAnimated || a.draw()
            }),
            a.canvas.element.mouseleave(function() {
                a.mouse.hoverCanvas = !1
            }),
            a.canvas.element.mousemove(function(t) {
                a.mouse = e.extend(a.mouse, n.getMousePosition(t, a.canvas.element[0]))
            })
        }
        ,
        a.initAnimation = function() {
            window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.ORequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                setTimeOut(e, 1e3 / 60)
            }
            ,
            a.isAnimated = !0,
            a.draw()
        }
        ,
        a.draw = function() {
            var e, t, n, i, o, r;
            for (e = 0,
            n = a.particles.length,
            i = a.canvas,
            i.context.clearRect(0, 0, i.element.get(0).width, i.element.get(0).height); n > e; e += 1)
                if (o = a.particles[e],
                a.isAnimated && o.update(),
                o.draw(),
                !a.params.disableMouse && a.mouse.hoverCanvas && a.drawLink(o.getPosition("x"), o.getPosition("y"), a.mouse.x, a.mouse.y),
                !a.params.disableLinks)
                    for (t = e + 1; n > t; t += 1)
                        r = a.particles[t],
                        a.drawLink(o.getPosition("x"), o.getPosition("y"), r.getPosition("x"), r.getPosition("y"));
            a.requestID = window.requestAnimFrame(a.draw)
        }
        ,
        a.drawLink = function(e, t, i, o) {
            var r;
            n.getDistance(e, t, i, o) <= a.params.createLinkDist && (r = a.canvas.context,
            r.save(),
            r.beginPath(),
            r.lineWidth = a.params.linksWidth,
            r.moveTo(e, t),
            r.lineTo(i, o),
            r.globalAlpha = a.getOpacityLink(e, t, i, o),
            r.strokeStyle = a.params.color,
            r.lineCap = "round",
            r.stroke(),
            r.closePath(),
            r.restore())
        }
        ,
        a.getOpacityLink = function(e, t, i, o) {
            var r, s, c, u;
            return r = n.getDistance(e, t, i, o),
            c = a.params.linkDist,
            u = a.params.createLinkDist,
            s = c >= r ? 1 : r > u ? 0 : 1 - 100 * (r - c) / (u - c) / 100
        }
        ,
        a.freeze = function() {
            a.isAnimated && (a.isAnimated = !1)
        }
        ,
        a.unfreeze = function() {
            a.isAnimated || (a.isAnimated = !0)
        }
        ,
        a.remove = function() {
            a.canvas.element.remove()
        }
        ,
        o = function(t, i) {
            var a;
            return a = {},
            a.canvas = {},
            a.vector = {},
            a.initialize = function(t, n) {
                a.params = e.extend({
                    color: "white",
                    minSize: 2,
                    maxSize: 4,
                    speed: 60
                }, n),
                a.setCanvasContext(t),
                a.initSize(),
                a.initPosition(),
                a.initVectors()
            }
            ,
            a.initPosition = function() {
                a.x = n.getRandNumber(0 + a.radius, a.canvas.element.width - a.radius),
                a.y = n.getRandNumber(0 + a.radius, a.canvas.element.height - a.radius)
            }
            ,
            a.initSize = function() {
                a.size = n.getRandNumber(a.params.minSize, a.params.maxSize),
                a.radius = a.size / 2
            }
            ,
            a.initVectors = function() {
                do
                    a.vector.x = n.getRandNumber(-a.params.speed / 60, a.params.speed / 60, !1),
                    a.vector.y = n.getRandNumber(-a.params.speed / 60, a.params.speed / 60, !1);
                while (0 == a.vector.x || 0 == a.vector.y)
            }
            ,
            a.setCanvasContext = function(e) {
                var t;
                if (a.canvas.element = e,
                t = e.getContext("2d"),
                "object" != typeof t || "object" != typeof t.canvas)
                    throw "Error: Can't set canvas context to Particle because context isn't a CanvasRenderingContext2D object.";
                a.canvas.context = t
            }
            ,
            a.draw = function() {
                var e = a.canvas.context;
                e.beginPath(),
                e.arc(a.x, a.y, a.size / 2, 0, 2 * Math.PI),
                e.fillStyle = a.params.color,
                e.fill(),
                e.closePath()
            }
            ,
            a.update = function() {
                a.x += a.vector.x,
                a.y += a.vector.y,
                (0 > a.x - a.radius || a.x + a.radius > a.canvas.element.width) && (a.vector.x = -a.vector.x),
                (0 > a.y - a.radius || a.y + a.radius > a.canvas.element.height) && (a.vector.y = -a.vector.y)
            }
            ,
            a.getPosition = function(e) {
                return "string" == typeof e && "x" != e && "y" != e && (e = null),
                "string" == typeof e ? a[e] : {
                    x: a.x,
                    y: a.y
                }
            }
            ,
            a.initialize(t, i),
            {
                getPosition: a.getPosition,
                update: a.update,
                draw: a.draw
            }
        }
        ,
        a.initialize(t, i),
        {
            remove: a.remove,
            freeze: a.freeze,
            unfreeze: a.unfreeze,
            resize: a.resize
        }
    }
    ,
    n.getRandNumber = function(e, t, n) {
        var i;
        return null == e && (e = 0),
        null == t && (t = 10),
        null == n && (n = !0),
        i = Math.random() * (t - e) + e,
        n ? Math.round(i) : i
    }
    ,
    n.getDistance = function(e, t, n, i) {
        return Math.sqrt(Math.pow(n - e, 2) + Math.pow(i - t, 2))
    }
    ,
    n.getMousePosition = function(t, n) {
        var i;
        return "undefined" == typeof n && (n = e("body")[0]),
        i = n.getBoundingClientRect(),
        {
            x: t.clientX - i.left,
            y: t.clientY - i.top
        }
    }
}(jQuery);

/**
* jquery-match-height master by @liabru
* http://brm.io/jquery-match-height/
* License: MIT
*/

!function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    var e = -1
      , o = -1
      , a = function(t) {
        return parseFloat(t) || 0
    }
      , n = function(e) {
        var o = 1
          , n = t(e)
          , i = null
          , r = [];
        return n.each(function() {
            var e = t(this)
              , n = e.offset().top - a(e.css("margin-top"))
              , s = r.length > 0 ? r[r.length - 1] : null;
            null === s ? r.push(e) : Math.floor(Math.abs(i - n)) <= o ? r[r.length - 1] = s.add(e) : r.push(e),
            i = n
        }),
        r
    }
      , i = function(e) {
        var o = {
            byRow: !0,
            property: "height",
            target: null,
            remove: !1
        };
        return "object" == typeof e ? t.extend(o, e) : ("boolean" == typeof e ? o.byRow = e : "remove" === e && (o.remove = !0),
        o)
    }
      , r = t.fn.matchHeight = function(e) {
        var o = i(e);
        if (o.remove) {
            var a = this;
            return this.css(o.property, ""),
            t.each(r._groups, function(t, e) {
                e.elements = e.elements.not(a)
            }),
            this
        }
        return this.length <= 1 && !o.target ? this : (r._groups.push({
            elements: this,
            options: o
        }),
        r._apply(this, o),
        this)
    }
    ;
    r.version = "master",
    r._groups = [],
    r._throttle = 80,
    r._maintainScroll = !1,
    r._beforeUpdate = null,
    r._afterUpdate = null,
    r._rows = n,
    r._parse = a,
    r._parseOptions = i,
    r._apply = function(e, o) {
        var s = i(o)
          , h = t(e)
          , l = [h]
          , c = t(window).scrollTop()
          , p = t("html").outerHeight(!0)
          , u = h.parents().filter(":hidden");
        return u.each(function() {
            var e = t(this);
            e.data("style-cache", e.attr("style"))
        }),
        u.css("display", "block"),
        s.byRow && !s.target && (h.each(function() {
            var e = t(this)
              , o = e.css("display");
            "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"),
            e.data("style-cache", e.attr("style")),
            e.css({
                display: o,
                "padding-top": "0",
                "padding-bottom": "0",
                "margin-top": "0",
                "margin-bottom": "0",
                "border-top-width": "0",
                "border-bottom-width": "0",
                height: "100px",
                overflow: "hidden"
            })
        }),
        l = n(h),
        h.each(function() {
            var e = t(this);
            e.attr("style", e.data("style-cache") || "")
        })),
        t.each(l, function(e, o) {
            var n = t(o)
              , i = 0;
            if (s.target)
                i = s.target.outerHeight(!1);
            else {
                if (s.byRow && n.length <= 1)
                    return void n.css(s.property, "");
                n.each(function() {
                    var e = t(this)
                      , o = e.attr("style")
                      , a = e.css("display");
                    "inline-block" !== a && "flex" !== a && "inline-flex" !== a && (a = "block");
                    var n = {
                        display: a
                    };
                    n[s.property] = "",
                    e.css(n),
                    e.outerHeight(!1) > i && (i = e.outerHeight(!1)),
                    o ? e.attr("style", o) : e.css("display", "")
                })
            }
            n.each(function() {
                var e = t(this)
                  , o = 0;
                s.target && e.is(s.target) || ("border-box" !== e.css("box-sizing") && (o += a(e.css("border-top-width")) + a(e.css("border-bottom-width")),
                o += a(e.css("padding-top")) + a(e.css("padding-bottom"))),
                e.css(s.property, i - o + "px"))
            })
        }),
        u.each(function() {
            var e = t(this);
            e.attr("style", e.data("style-cache") || null)
        }),
        r._maintainScroll && t(window).scrollTop(c / p * t("html").outerHeight(!0)),
        this
    }
    ,
    r._applyDataApi = function() {
        var e = {};
        t("[data-match-height], [data-mh]").each(function() {
            var o = t(this)
              , a = o.attr("data-mh") || o.attr("data-match-height");
            a in e ? e[a] = e[a].add(o) : e[a] = o
        }),
        t.each(e, function() {
            this.matchHeight(!0)
        })
    }
    ;
    var s = function(e) {
        r._beforeUpdate && r._beforeUpdate(e, r._groups),
        t.each(r._groups, function() {
            r._apply(this.elements, this.options)
        }),
        r._afterUpdate && r._afterUpdate(e, r._groups)
    };
    r._update = function(a, n) {
        if (n && "resize" === n.type) {
            var i = t(window).width();
            if (i === e)
                return;
            e = i
        }
        a ? -1 === o && (o = setTimeout(function() {
            s(n),
            o = -1
        }, r._throttle)) : s(n)
    }
    ,
    t(r._applyDataApi);
    var h = t.fn.on ? "on" : "bind";
    t(window)[h]("load", function(t) {
        r._update(!1, t)
    }),
    t(window)[h]("resize orientationchange", function(t) {
        r._update(!0, t)
    })
});
/**
	/*
	 *
	 *	jQuery Sliding Menu Plugin
	 *	Mobile app list-style navigation in the browser
	 *
	 *	Written by Ali Zahid
	 *	http://alizahid.github.io/jquery-sliding-menu/
	 *
	 */
(function($) {
    var usedIds = [];
    $.fn.menu = function(options) {
        var selector = this.selector;
        var settings = $.extend({
            dataJSON: false,
            backLabel: ''
        }, options);
        return this.each(function() {
            var self = this, menu = $(self), data;
            if (menu.hasClass('sliding-menu')) {
                return
            }
            var menuWidth = menu.width();
            if (settings.dataJSON) {
                data = processJSON(settings.dataJSON)
            } else {
                data = process(menu)
            }
            menu.empty().addClass('sliding-menu');
            var rootPanel;
            if (settings.dataJSON) {
                $(data).each(function(index, item) {
                    var panel = $('<ul></ul>');
                    if (item.root) {
                        rootPanel = '#' + item.id
                    }
                    panel.attr('id', item.id);
                    panel.addClass('menu-panel');
                    panel.width(menuWidth);
                    $(item.children).each(function(index, item) {
                        var link = $('<a></a>');
                        link.attr('class', item.styleClass);
                        link.attr('href', item.href);
                        link.text(item.label);
                        var li = $('<li></li>');
                        li.append(link);
                        panel.append(li)
                    });
                    menu.append(panel)
                })
            } else {
                $(data).each(function(index, item) {
                    var panel = $(item);
                    if (panel.hasClass('menu-panel-root')) {
                        rootPanel = '#' + panel.attr('id')
                    }
                    panel.width(menuWidth);
                    menu.append(item)
                })
            }
            rootPanel = $(rootPanel);
            rootPanel.addClass('menu-panel-root');
            var currentPanel = rootPanel;
            menu.height(rootPanel.height());
            var wrapper = $('<div></div>').addClass('sliding-menu-wrapper').width(data.length * menuWidth);
            menu.wrapInner(wrapper);
            wrapper = $('.sliding-menu-wrapper', menu);
            $('a', self).on('click', function(e) {
                var href = $(this).attr('href')
                  , label = $(this).text();
                if (wrapper.is(':animated')) {
                    e.preventDefault();
                    return
                }
                if (href == '#') {
                    e.preventDefault()
                } else if (href.indexOf('#menu-panel') == 0) {
                    var target = $(href)
                      , isBack = $(this).hasClass('back')
                      , marginLeft = parseInt(wrapper.css('margin-left'));
                    if (isBack) {
                        if (href == '#menu-panel-back') {
                            target = currentPanel.prev()
                        }
                        wrapper.stop(true, true).animate({
                            marginLeft: marginLeft + menuWidth
                        }, 'fast')
                    } else {
                        target.insertAfter(currentPanel);
                        if (settings.backLabel === true) {
                            $('.back', target).text(label)
                        } else {
                            $('.back', target).text(settings.backLabel)
                        }
                        wrapper.stop(true, true).animate({
                            marginLeft: marginLeft - menuWidth
                        }, 'fast')
                    }
                    currentPanel = target;
                    menu.stop(true, true).animate({
                        height: target.height()
                    }, 'fast');
                    e.preventDefault()
                }
            });
            return this
        });
        function process(data) {
            var ul = $('ul', data)
              , panels = [];
            $(ul).each(function(index, item) {
                var panel = $(item)
                  , handler = panel.prev()
                  , id = getNewId();
                if (handler.length == 1) {
                    handler.addClass('nav').attr('href', '#menu-panel-' + id)
                }
                panel.attr('id', 'menu-panel-' + id);
                if (index == 0) {
                    panel.addClass('menu-panel-root')
                } else {
                    panel.addClass('menu-panel');
                    var li = $('<li></li>')
                      , back = $('<a></a>').addClass('back').attr('href', '#menu-panel-back');
                    panel.prepend(back)
                }
                panels.push(item)
            });
            return panels
        }
        function processJSON(data, parent) {
            var root = {
                id: 'menu-panel-' + getNewId(),
                children: [],
                root: (parent ? false : true)
            }
              , panels = [];
            if (parent) {
                root.children.push({
                    styleClass: 'back',
                    href: '#' + parent.id
                })
            }
            $(data).each(function(index, item) {
                root.children.push(item);
                if (item.children) {
                    var panel = processJSON(item.children, root);
                    item.href = '#' + panel[0].id;
                    item.styleClass = 'nav';
                    panels = panels.concat(panel)
                }
            });
            return [root].concat(panels)
        }
        function getNewId() {
            var id;
            do {
                id = Math.random().toString(36).substring(3, 8)
            } while (usedIds.indexOf(id) >= 0);
            usedIds.push(id);
            return id
        }
    }
}(jQuery));
// count
(function($) {
    $.fn.countTo = function(options) {
        options = options || {};
        return $(this).each(function() {
            var settings = $.extend({}, $.fn.countTo.defaults, {
                from: $(this).data('from'),
                to: $(this).data('num'),
                speed: $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals: $(this).data('decimals')
            }, options);
            var loops = Math.ceil(settings.speed / settings.refreshInterval)
              , increment = (settings.to - settings.from) / loops;
            var self = this
              , $self = $(this)
              , loopCount = 0
              , value = settings.from
              , data = $self.data('countTo') || {};
            $self.data('countTo', data);
            if (data.interval) {
                clearInterval(data.interval)
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);
            render(value);
            function updateTimer() {
                value += increment;
                loopCount++;
                render(value);
                if (typeof (settings.onUpdate) == 'function') {
                    settings.onUpdate.call(self, value)
                }
                if (loopCount >= loops) {
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;
                    if (typeof (settings.onComplete) == 'function') {
                        settings.onComplete.call(self, value)
                    }
                }
            }
            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.text(formattedValue)
            }
        })
    }
    ;
    $.fn.countTo.defaults = {
        from: 0,
        to: 0,
        speed: 2500,
        refreshInterval: 100,
        decimals: 0,
        formatter: formatter,
        onUpdate: null,
        onComplete: null
    };
    function formatter(value, settings) {
        return value.toFixed(settings.decimals)
    }
}(jQuery));
/*!
Mailchimp Ajax Submit
jQuery Plugin

*/

(function($) {
    'use strict';
    $.ajaxChimp = {
        responses: {
            'We have sent you a confirmation email': 0,
            'Please enter a value': 1,
            'An email address must contain a single @': 2,
            'The domain portion of the email address is invalid (the portion after the @: )': 3,
            'The username portion of the email address is invalid (the portion before the @: )': 4,
            'This email address looks fake or invalid. Please enter a real email address': 5
        },
        translations: {
            'en': null
        },
        init: function(selector, options) {
            $(selector).ajaxChimp(options)
        }
    };
    $.fn.ajaxChimp = function(options) {
        $(this).each(function(i, elem) {
            var form = $(elem);
            var email = form.find('input[type=text]');
            var label = form.find('label[for=' + email.attr('id') + ']');
            var settings = $.extend({
                'url': form.attr('action'),
                'language': 'en'
            }, options);
            var url = settings.url.replace('/post?', '/post-json?').concat('&c=?');
            form.attr('novalidate', 'true');
            email.attr('name', 'EMAIL');
            form.submit(function() {
                var msg;
                function successCallback(resp) {
                    if (resp.result === 'success') {
                        msg = 'We have sent you a confirmation email';
                        label.removeClass('error').addClass('valid');
                        email.removeClass('error').addClass('valid')
                    } else {
                        email.removeClass('valid').addClass('error');
                        label.removeClass('valid').addClass('error');
                        var index = -1;
                        try {
                            var parts = resp.msg.split(' - ', 2);
                            if (parts[1] === undefined) {
                                msg = resp.msg
                            } else {
                                var i = parseInt(parts[0], 10);
                                if (i.toString() === parts[0]) {
                                    index = parts[0];
                                    msg = parts[1]
                                } else {
                                    index = -1;
                                    msg = resp.msg
                                }
                            }
                        } catch (e) {
                            index = -1;
                            msg = resp.msg
                        }
                    }
                    if (settings.language !== 'en' && $.ajaxChimp.responses[msg] !== undefined && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]) {
                        msg = $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]
                    }
                    label.html(msg);
                    label.show(2000);
                    if (settings.callback) {
                        settings.callback(resp)
                    }
                }
                var data = {};
                var dataArray = form.serializeArray();
                $.each(dataArray, function(index, item) {
                    data[item.name] = item.value
                });
                $.ajax({
                    url: url,
                    data: data,
                    success: successCallback,
                    dataType: 'jsonp',
                    error: function(resp, text) {
                        console.log('mailchimp ajax submit error: ' + text)
                    }
                });
                var submitMsg = 'Submitting...';
                if (settings.language !== 'en' && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language]['submit']) {
                    submitMsg = $.ajaxChimp.translations[settings.language]['submit']
                }
                label.html(submitMsg).show(2000);
                return false
            })
        });
        return this
    }
}
)(jQuery);
