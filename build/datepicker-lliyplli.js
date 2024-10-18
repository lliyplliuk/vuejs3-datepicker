import './DatePickerComponent.css';
import { defineComponent as Ee, openBlock as k, createElementBlock as T, normalizeClass as I, createElementVNode as A, ref as we, computed as v, watch as Xe, resolveComponent as et, createTextVNode as Pn, toDisplayString as $, createCommentVNode as G, createVNode as Zt, renderSlot as q, withDirectives as Tt, normalizeStyle as sa, withModifiers as rt, Fragment as tt, renderList as at, vShow as ra, resolveDirective as Rn, withCtx as Ve, createBlock as Bt } from "vue";
const Wn = ["click"], nt = [], An = {
  instances: nt,
  beforeMount: Oa,
  update: (e, t) => {
    JSON.stringify(t.value) !== JSON.stringify(t.oldValue) && Oa(e, t);
  },
  unmounted: Aa
};
function Oa(e, { value: t }) {
  Aa(e);
  const a = t, n = typeof a == "function";
  if (!n && !(typeof a == "object") || !(a.isActive !== !1))
    return;
  const i = n ? a : a.handler, o = In({ el: e, handler: i });
  o.eventHandlers.forEach(
    ({ event: h, handler: g }) => setTimeout(() => document.addEventListener(h, g, !1), 0)
  ), nt.push(o);
}
function Aa(e) {
  const t = nt.findIndex((n) => n.el === e);
  if (t === -1)
    return;
  nt[t].eventHandlers.forEach(
    ({ event: n, handler: s }) => document.removeEventListener(n, s, !1)
  ), nt.splice(t, 1);
}
function In({ el: e, handler: t }) {
  return {
    el: e,
    eventHandlers: Wn.map((a) => ({
      event: a,
      handler: (n) => Hn({ event: n, el: e, handler: t })
    }))
  };
}
function Hn({ event: e, el: t, handler: a }) {
  const n = e.path || (e.composedPath ? e.composedPath() : void 0);
  if (n ? n.indexOf(t) < 0 : !t.contains(e.target))
    return a && a(e, t);
}
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Ia;
function d() {
  return Ia.apply(null, arguments);
}
function Un(e) {
  Ia = e;
}
function ie(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function We(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function O(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function ia(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (O(e, t))
      return !1;
  return !0;
}
function Z(e) {
  return e === void 0;
}
function ke(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function ct(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Ha(e, t) {
  var a = [], n, s = e.length;
  for (n = 0; n < s; ++n)
    a.push(t(e[n], n));
  return a;
}
function Ye(e, t) {
  for (var a in t)
    O(t, a) && (e[a] = t[a]);
  return O(t, "toString") && (e.toString = t.toString), O(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function ye(e, t, a, n) {
  return ln(e, t, a, n, !0).utc();
}
function Ln() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function M(e) {
  return e._pf == null && (e._pf = Ln()), e._pf;
}
var qt;
Array.prototype.some ? qt = Array.prototype.some : qt = function(e) {
  var t = Object(this), a = t.length >>> 0, n;
  for (n = 0; n < a; n++)
    if (n in t && e.call(this, t[n], n, t))
      return !0;
  return !1;
};
function oa(e) {
  var t = null, a = !1, n = e._d && !isNaN(e._d.getTime());
  if (n && (t = M(e), a = qt.call(t.parsedDateParts, function(s) {
    return s != null;
  }), n = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && a), e._strict && (n = n && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = n;
  else
    return n;
  return e._isValid;
}
function Ot(e) {
  var t = ye(NaN);
  return e != null ? Ye(M(t), e) : M(t).userInvalidated = !0, t;
}
var Ca = d.momentProperties = [], zt = !1;
function la(e, t) {
  var a, n, s, r = Ca.length;
  if (Z(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), Z(t._i) || (e._i = t._i), Z(t._f) || (e._f = t._f), Z(t._l) || (e._l = t._l), Z(t._strict) || (e._strict = t._strict), Z(t._tzm) || (e._tzm = t._tzm), Z(t._isUTC) || (e._isUTC = t._isUTC), Z(t._offset) || (e._offset = t._offset), Z(t._pf) || (e._pf = M(t)), Z(t._locale) || (e._locale = t._locale), r > 0)
    for (a = 0; a < r; a++)
      n = Ca[a], s = t[n], Z(s) || (e[n] = s);
  return e;
}
function ft(e) {
  la(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), zt === !1 && (zt = !0, d.updateOffset(this), zt = !1);
}
function oe(e) {
  return e instanceof ft || e != null && e._isAMomentObject != null;
}
function Ua(e) {
  d.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function ae(e, t) {
  var a = !0;
  return Ye(function() {
    if (d.deprecationHandler != null && d.deprecationHandler(null, e), a) {
      var n = [], s, r, i, o = arguments.length;
      for (r = 0; r < o; r++) {
        if (s = "", typeof arguments[r] == "object") {
          s += `
[` + r + "] ";
          for (i in arguments[0])
            O(arguments[0], i) && (s += i + ": " + arguments[0][i] + ", ");
          s = s.slice(0, -2);
        } else
          s = arguments[r];
        n.push(s);
      }
      Ua(
        e + `
Arguments: ` + Array.prototype.slice.call(n).join("") + `
` + new Error().stack
      ), a = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Fa = {};
function La(e, t) {
  d.deprecationHandler != null && d.deprecationHandler(e, t), Fa[e] || (Ua(t), Fa[e] = !0);
}
d.suppressDeprecationWarnings = !1;
d.deprecationHandler = null;
function ge(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function $n(e) {
  var t, a;
  for (a in e)
    O(e, a) && (t = e[a], ge(t) ? this[a] = t : this["_" + a] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Qt(e, t) {
  var a = Ye({}, e), n;
  for (n in t)
    O(t, n) && (We(e[n]) && We(t[n]) ? (a[n] = {}, Ye(a[n], e[n]), Ye(a[n], t[n])) : t[n] != null ? a[n] = t[n] : delete a[n]);
  for (n in e)
    O(e, n) && !O(t, n) && We(e[n]) && (a[n] = Ye({}, a[n]));
  return a;
}
function ua(e) {
  e != null && this.set(e);
}
var Kt;
Object.keys ? Kt = Object.keys : Kt = function(e) {
  var t, a = [];
  for (t in e)
    O(e, t) && a.push(t);
  return a;
};
var jn = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function En(e, t, a) {
  var n = this._calendar[e] || this._calendar.sameElse;
  return ge(n) ? n.call(t, a) : n;
}
function me(e, t, a) {
  var n = "" + Math.abs(e), s = t - n.length, r = e >= 0;
  return (r ? a ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + n;
}
var da = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, gt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Gt = {}, Le = {};
function y(e, t, a, n) {
  var s = n;
  typeof n == "string" && (s = function() {
    return this[n]();
  }), e && (Le[e] = s), t && (Le[t[0]] = function() {
    return me(s.apply(this, arguments), t[1], t[2]);
  }), a && (Le[a] = function() {
    return this.localeData().ordinal(
      s.apply(this, arguments),
      e
    );
  });
}
function Bn(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function zn(e) {
  var t = e.match(da), a, n;
  for (a = 0, n = t.length; a < n; a++)
    Le[t[a]] ? t[a] = Le[t[a]] : t[a] = Bn(t[a]);
  return function(s) {
    var r = "", i;
    for (i = 0; i < n; i++)
      r += ge(t[i]) ? t[i].call(s, e) : t[i];
    return r;
  };
}
function St(e, t) {
  return e.isValid() ? (t = $a(t, e.localeData()), Gt[t] = Gt[t] || zn(t), Gt[t](e)) : e.localeData().invalidDate();
}
function $a(e, t) {
  var a = 5;
  function n(s) {
    return t.longDateFormat(s) || s;
  }
  for (gt.lastIndex = 0; a >= 0 && gt.test(e); )
    e = e.replace(
      gt,
      n
    ), gt.lastIndex = 0, a -= 1;
  return e;
}
var Gn = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function xn(e) {
  var t = this._longDateFormat[e], a = this._longDateFormat[e.toUpperCase()];
  return t || !a ? t : (this._longDateFormat[e] = a.match(da).map(function(n) {
    return n === "MMMM" || n === "MM" || n === "DD" || n === "dddd" ? n.slice(1) : n;
  }).join(""), this._longDateFormat[e]);
}
var Jn = "Invalid date";
function Zn() {
  return this._invalidDate;
}
var qn = "%d", Qn = /\d{1,2}/;
function Kn(e) {
  return this._ordinal.replace("%d", e);
}
var Xn = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function es(e, t, a, n) {
  var s = this._relativeTime[a];
  return ge(s) ? s(e, t, a, n) : s.replace(/%d/i, e);
}
function ts(e, t) {
  var a = this._relativeTime[e > 0 ? "future" : "past"];
  return ge(a) ? a(t) : a.replace(/%s/i, t);
}
var Va = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function ne(e) {
  return typeof e == "string" ? Va[e] || Va[e.toLowerCase()] : void 0;
}
function ca(e) {
  var t = {}, a, n;
  for (n in e)
    O(e, n) && (a = ne(n), a && (t[a] = e[n]));
  return t;
}
var as = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function ns(e) {
  var t = [], a;
  for (a in e)
    O(e, a) && t.push({ unit: a, priority: as[a] });
  return t.sort(function(n, s) {
    return n.priority - s.priority;
  }), t;
}
var ja = /\d/, ee = /\d\d/, Ea = /\d{3}/, fa = /\d{4}/, Ct = /[+-]?\d{6}/, U = /\d\d?/, Ba = /\d\d\d\d?/, za = /\d\d\d\d\d\d?/, Ft = /\d{1,3}/, ha = /\d{1,4}/, Vt = /[+-]?\d{1,6}/, Be = /\d+/, Pt = /[+-]?\d+/, ss = /Z|[+-]\d\d:?\d\d/gi, Rt = /Z|[+-]\d\d(?::?\d\d)?/gi, rs = /[+-]?\d+(\.\d{1,3})?/, ht = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, ze = /^[1-9]\d?/, ma = /^([1-9]\d|\d)/, bt;
bt = {};
function f(e, t, a) {
  bt[e] = ge(t) ? t : function(n, s) {
    return n && a ? a : t;
  };
}
function is(e, t) {
  return O(bt, e) ? bt[e](t._strict, t._locale) : new RegExp(os(e));
}
function os(e) {
  return Me(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, a, n, s, r) {
        return a || n || s || r;
      }
    )
  );
}
function Me(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function te(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function _(e) {
  var t = +e, a = 0;
  return t !== 0 && isFinite(t) && (a = te(t)), a;
}
var Xt = {};
function W(e, t) {
  var a, n = t, s;
  for (typeof e == "string" && (e = [e]), ke(t) && (n = function(r, i) {
    i[t] = _(r);
  }), s = e.length, a = 0; a < s; a++)
    Xt[e[a]] = n;
}
function mt(e, t) {
  W(e, function(a, n, s, r) {
    s._w = s._w || {}, t(a, s._w, s, r);
  });
}
function ls(e, t, a) {
  t != null && O(Xt, e) && Xt[e](t, a._a, a, e);
}
function Wt(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var x = 0, pe = 1, fe = 2, B = 3, re = 4, ve = 5, Re = 6, us = 7, ds = 8;
y("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? me(e, 4) : "+" + e;
});
y(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
y(0, ["YYYY", 4], 0, "year");
y(0, ["YYYYY", 5], 0, "year");
y(0, ["YYYYYY", 6, !0], 0, "year");
f("Y", Pt);
f("YY", U, ee);
f("YYYY", ha, fa);
f("YYYYY", Vt, Ct);
f("YYYYYY", Vt, Ct);
W(["YYYYY", "YYYYYY"], x);
W("YYYY", function(e, t) {
  t[x] = e.length === 2 ? d.parseTwoDigitYear(e) : _(e);
});
W("YY", function(e, t) {
  t[x] = d.parseTwoDigitYear(e);
});
W("Y", function(e, t) {
  t[x] = parseInt(e, 10);
});
function st(e) {
  return Wt(e) ? 366 : 365;
}
d.parseTwoDigitYear = function(e) {
  return _(e) + (_(e) > 68 ? 1900 : 2e3);
};
var Ga = Ge("FullYear", !0);
function cs() {
  return Wt(this.year());
}
function Ge(e, t) {
  return function(a) {
    return a != null ? (xa(this, e, a), d.updateOffset(this, t), this) : it(this, e);
  };
}
function it(e, t) {
  if (!e.isValid())
    return NaN;
  var a = e._d, n = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return n ? a.getUTCMilliseconds() : a.getMilliseconds();
    case "Seconds":
      return n ? a.getUTCSeconds() : a.getSeconds();
    case "Minutes":
      return n ? a.getUTCMinutes() : a.getMinutes();
    case "Hours":
      return n ? a.getUTCHours() : a.getHours();
    case "Date":
      return n ? a.getUTCDate() : a.getDate();
    case "Day":
      return n ? a.getUTCDay() : a.getDay();
    case "Month":
      return n ? a.getUTCMonth() : a.getMonth();
    case "FullYear":
      return n ? a.getUTCFullYear() : a.getFullYear();
    default:
      return NaN;
  }
}
function xa(e, t, a) {
  var n, s, r, i, o;
  if (!(!e.isValid() || isNaN(a))) {
    switch (n = e._d, s = e._isUTC, t) {
      case "Milliseconds":
        return void (s ? n.setUTCMilliseconds(a) : n.setMilliseconds(a));
      case "Seconds":
        return void (s ? n.setUTCSeconds(a) : n.setSeconds(a));
      case "Minutes":
        return void (s ? n.setUTCMinutes(a) : n.setMinutes(a));
      case "Hours":
        return void (s ? n.setUTCHours(a) : n.setHours(a));
      case "Date":
        return void (s ? n.setUTCDate(a) : n.setDate(a));
      case "FullYear":
        break;
      default:
        return;
    }
    r = a, i = e.month(), o = e.date(), o = o === 29 && i === 1 && !Wt(r) ? 28 : o, s ? n.setUTCFullYear(r, i, o) : n.setFullYear(r, i, o);
  }
}
function fs(e) {
  return e = ne(e), ge(this[e]) ? this[e]() : this;
}
function hs(e, t) {
  if (typeof e == "object") {
    e = ca(e);
    var a = ns(e), n, s = a.length;
    for (n = 0; n < s; n++)
      this[a[n].unit](e[a[n].unit]);
  } else if (e = ne(e), ge(this[e]))
    return this[e](t);
  return this;
}
function ms(e, t) {
  return (e % t + t) % t;
}
var E;
Array.prototype.indexOf ? E = Array.prototype.indexOf : E = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function ya(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var a = ms(t, 12);
  return e += (t - a) / 12, a === 1 ? Wt(e) ? 29 : 28 : 31 - a % 7 % 2;
}
y("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
y("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
y("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
f("M", U, ze);
f("MM", U, ee);
f("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
f("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
W(["M", "MM"], function(e, t) {
  t[pe] = _(e) - 1;
});
W(["MMM", "MMMM"], function(e, t, a, n) {
  var s = a._locale.monthsParse(e, n, a._strict);
  s != null ? t[pe] = s : M(a).invalidMonth = e;
});
var ys = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Ja = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Za = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, gs = ht, Ds = ht;
function ws(e, t) {
  return e ? ie(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Za).test(t) ? "format" : "standalone"][e.month()] : ie(this._months) ? this._months : this._months.standalone;
}
function Ss(e, t) {
  return e ? ie(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Za.test(t) ? "format" : "standalone"][e.month()] : ie(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function ps(e, t, a) {
  var n, s, r, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n)
      r = ye([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(
        r,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[n] = this.months(r, "").toLocaleLowerCase();
  return a ? t === "MMM" ? (s = E.call(this._shortMonthsParse, i), s !== -1 ? s : null) : (s = E.call(this._longMonthsParse, i), s !== -1 ? s : null) : t === "MMM" ? (s = E.call(this._shortMonthsParse, i), s !== -1 ? s : (s = E.call(this._longMonthsParse, i), s !== -1 ? s : null)) : (s = E.call(this._longMonthsParse, i), s !== -1 ? s : (s = E.call(this._shortMonthsParse, i), s !== -1 ? s : null));
}
function vs(e, t, a) {
  var n, s, r;
  if (this._monthsParseExact)
    return ps.call(this, e, t, a);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
    if (s = ye([2e3, n]), a && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp(
      "^" + this.months(s, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[n] = new RegExp(
      "^" + this.monthsShort(s, "").replace(".", "") + "$",
      "i"
    )), !a && !this._monthsParse[n] && (r = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[n] = new RegExp(r.replace(".", ""), "i")), a && t === "MMMM" && this._longMonthsParse[n].test(e))
      return n;
    if (a && t === "MMM" && this._shortMonthsParse[n].test(e))
      return n;
    if (!a && this._monthsParse[n].test(e))
      return n;
  }
}
function qa(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = _(t);
    else if (t = e.localeData().monthsParse(t), !ke(t))
      return e;
  }
  var a = t, n = e.date();
  return n = n < 29 ? n : Math.min(n, ya(e.year(), a)), e._isUTC ? e._d.setUTCMonth(a, n) : e._d.setMonth(a, n), e;
}
function Qa(e) {
  return e != null ? (qa(this, e), d.updateOffset(this, !0), this) : it(this, "Month");
}
function Ms() {
  return ya(this.year(), this.month());
}
function bs(e) {
  return this._monthsParseExact ? (O(this, "_monthsRegex") || Ka.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (O(this, "_monthsShortRegex") || (this._monthsShortRegex = gs), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function ks(e) {
  return this._monthsParseExact ? (O(this, "_monthsRegex") || Ka.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (O(this, "_monthsRegex") || (this._monthsRegex = Ds), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Ka() {
  function e(h, g) {
    return g.length - h.length;
  }
  var t = [], a = [], n = [], s, r, i, o;
  for (s = 0; s < 12; s++)
    r = ye([2e3, s]), i = Me(this.monthsShort(r, "")), o = Me(this.months(r, "")), t.push(i), a.push(o), n.push(o), n.push(i);
  t.sort(e), a.sort(e), n.sort(e), this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + a.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function _s(e, t, a, n, s, r, i) {
  var o;
  return e < 100 && e >= 0 ? (o = new Date(e + 400, t, a, n, s, r, i), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, a, n, s, r, i), o;
}
function ot(e) {
  var t, a;
  return e < 100 && e >= 0 ? (a = Array.prototype.slice.call(arguments), a[0] = e + 400, t = new Date(Date.UTC.apply(null, a)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function kt(e, t, a) {
  var n = 7 + t - a, s = (7 + ot(e, 0, n).getUTCDay() - t) % 7;
  return -s + n - 1;
}
function Xa(e, t, a, n, s) {
  var r = (7 + a - n) % 7, i = kt(e, n, s), o = 1 + 7 * (t - 1) + r + i, h, g;
  return o <= 0 ? (h = e - 1, g = st(h) + o) : o > st(e) ? (h = e + 1, g = o - st(e)) : (h = e, g = o), {
    year: h,
    dayOfYear: g
  };
}
function lt(e, t, a) {
  var n = kt(e.year(), t, a), s = Math.floor((e.dayOfYear() - n - 1) / 7) + 1, r, i;
  return s < 1 ? (i = e.year() - 1, r = s + be(i, t, a)) : s > be(e.year(), t, a) ? (r = s - be(e.year(), t, a), i = e.year() + 1) : (i = e.year(), r = s), {
    week: r,
    year: i
  };
}
function be(e, t, a) {
  var n = kt(e, t, a), s = kt(e + 1, t, a);
  return (st(e) - n + s) / 7;
}
y("w", ["ww", 2], "wo", "week");
y("W", ["WW", 2], "Wo", "isoWeek");
f("w", U, ze);
f("ww", U, ee);
f("W", U, ze);
f("WW", U, ee);
mt(
  ["w", "ww", "W", "WW"],
  function(e, t, a, n) {
    t[n.substr(0, 1)] = _(e);
  }
);
function Ns(e) {
  return lt(e, this._week.dow, this._week.doy).week;
}
var Ys = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function Ts() {
  return this._week.dow;
}
function Os() {
  return this._week.doy;
}
function Cs(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Fs(e) {
  var t = lt(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
y("d", 0, "do", "day");
y("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
y("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
y("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
y("e", 0, 0, "weekday");
y("E", 0, 0, "isoWeekday");
f("d", U);
f("e", U);
f("E", U);
f("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
f("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
f("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
mt(["dd", "ddd", "dddd"], function(e, t, a, n) {
  var s = a._locale.weekdaysParse(e, n, a._strict);
  s != null ? t.d = s : M(a).invalidWeekday = e;
});
mt(["d", "e", "E"], function(e, t, a, n) {
  t[n] = _(e);
});
function Vs(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Ps(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function ga(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Rs = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), en = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Ws = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), As = ht, Is = ht, Hs = ht;
function Us(e, t) {
  var a = ie(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? ga(a, this._week.dow) : e ? a[e.day()] : a;
}
function Ls(e) {
  return e === !0 ? ga(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function $s(e) {
  return e === !0 ? ga(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function js(e, t, a) {
  var n, s, r, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n)
      r = ye([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(
        r,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(
        r,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(r, "").toLocaleLowerCase();
  return a ? t === "dddd" ? (s = E.call(this._weekdaysParse, i), s !== -1 ? s : null) : t === "ddd" ? (s = E.call(this._shortWeekdaysParse, i), s !== -1 ? s : null) : (s = E.call(this._minWeekdaysParse, i), s !== -1 ? s : null) : t === "dddd" ? (s = E.call(this._weekdaysParse, i), s !== -1 || (s = E.call(this._shortWeekdaysParse, i), s !== -1) ? s : (s = E.call(this._minWeekdaysParse, i), s !== -1 ? s : null)) : t === "ddd" ? (s = E.call(this._shortWeekdaysParse, i), s !== -1 || (s = E.call(this._weekdaysParse, i), s !== -1) ? s : (s = E.call(this._minWeekdaysParse, i), s !== -1 ? s : null)) : (s = E.call(this._minWeekdaysParse, i), s !== -1 || (s = E.call(this._weekdaysParse, i), s !== -1) ? s : (s = E.call(this._shortWeekdaysParse, i), s !== -1 ? s : null));
}
function Es(e, t, a) {
  var n, s, r;
  if (this._weekdaysParseExact)
    return js.call(this, e, t, a);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
    if (s = ye([2e3, 1]).day(n), a && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp(
      "^" + this.weekdays(s, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[n] || (r = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[n] = new RegExp(r.replace(".", ""), "i")), a && t === "dddd" && this._fullWeekdaysParse[n].test(e))
      return n;
    if (a && t === "ddd" && this._shortWeekdaysParse[n].test(e))
      return n;
    if (a && t === "dd" && this._minWeekdaysParse[n].test(e))
      return n;
    if (!a && this._weekdaysParse[n].test(e))
      return n;
  }
}
function Bs(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = it(this, "Day");
  return e != null ? (e = Vs(e, this.localeData()), this.add(e - t, "d")) : t;
}
function zs(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Gs(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Ps(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function xs(e) {
  return this._weekdaysParseExact ? (O(this, "_weekdaysRegex") || Da.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (O(this, "_weekdaysRegex") || (this._weekdaysRegex = As), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Js(e) {
  return this._weekdaysParseExact ? (O(this, "_weekdaysRegex") || Da.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (O(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Is), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Zs(e) {
  return this._weekdaysParseExact ? (O(this, "_weekdaysRegex") || Da.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (O(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Hs), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Da() {
  function e(b, F) {
    return F.length - b.length;
  }
  var t = [], a = [], n = [], s = [], r, i, o, h, g;
  for (r = 0; r < 7; r++)
    i = ye([2e3, 1]).day(r), o = Me(this.weekdaysMin(i, "")), h = Me(this.weekdaysShort(i, "")), g = Me(this.weekdays(i, "")), t.push(o), a.push(h), n.push(g), s.push(o), s.push(h), s.push(g);
  t.sort(e), a.sort(e), n.sort(e), s.sort(e), this._weekdaysRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + a.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function wa() {
  return this.hours() % 12 || 12;
}
function qs() {
  return this.hours() || 24;
}
y("H", ["HH", 2], 0, "hour");
y("h", ["hh", 2], 0, wa);
y("k", ["kk", 2], 0, qs);
y("hmm", 0, 0, function() {
  return "" + wa.apply(this) + me(this.minutes(), 2);
});
y("hmmss", 0, 0, function() {
  return "" + wa.apply(this) + me(this.minutes(), 2) + me(this.seconds(), 2);
});
y("Hmm", 0, 0, function() {
  return "" + this.hours() + me(this.minutes(), 2);
});
y("Hmmss", 0, 0, function() {
  return "" + this.hours() + me(this.minutes(), 2) + me(this.seconds(), 2);
});
function tn(e, t) {
  y(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
tn("a", !0);
tn("A", !1);
function an(e, t) {
  return t._meridiemParse;
}
f("a", an);
f("A", an);
f("H", U, ma);
f("h", U, ze);
f("k", U, ze);
f("HH", U, ee);
f("hh", U, ee);
f("kk", U, ee);
f("hmm", Ba);
f("hmmss", za);
f("Hmm", Ba);
f("Hmmss", za);
W(["H", "HH"], B);
W(["k", "kk"], function(e, t, a) {
  var n = _(e);
  t[B] = n === 24 ? 0 : n;
});
W(["a", "A"], function(e, t, a) {
  a._isPm = a._locale.isPM(e), a._meridiem = e;
});
W(["h", "hh"], function(e, t, a) {
  t[B] = _(e), M(a).bigHour = !0;
});
W("hmm", function(e, t, a) {
  var n = e.length - 2;
  t[B] = _(e.substr(0, n)), t[re] = _(e.substr(n)), M(a).bigHour = !0;
});
W("hmmss", function(e, t, a) {
  var n = e.length - 4, s = e.length - 2;
  t[B] = _(e.substr(0, n)), t[re] = _(e.substr(n, 2)), t[ve] = _(e.substr(s)), M(a).bigHour = !0;
});
W("Hmm", function(e, t, a) {
  var n = e.length - 2;
  t[B] = _(e.substr(0, n)), t[re] = _(e.substr(n));
});
W("Hmmss", function(e, t, a) {
  var n = e.length - 4, s = e.length - 2;
  t[B] = _(e.substr(0, n)), t[re] = _(e.substr(n, 2)), t[ve] = _(e.substr(s));
});
function Qs(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Ks = /[ap]\.?m?\.?/i, Xs = Ge("Hours", !0);
function er(e, t, a) {
  return e > 11 ? a ? "pm" : "PM" : a ? "am" : "AM";
}
var nn = {
  calendar: jn,
  longDateFormat: Gn,
  invalidDate: Jn,
  ordinal: qn,
  dayOfMonthOrdinalParse: Qn,
  relativeTime: Xn,
  months: ys,
  monthsShort: Ja,
  week: Ys,
  weekdays: Rs,
  weekdaysMin: Ws,
  weekdaysShort: en,
  meridiemParse: Ks
}, L = {}, Qe = {}, ut;
function tr(e, t) {
  var a, n = Math.min(e.length, t.length);
  for (a = 0; a < n; a += 1)
    if (e[a] !== t[a])
      return a;
  return n;
}
function Pa(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function ar(e) {
  for (var t = 0, a, n, s, r; t < e.length; ) {
    for (r = Pa(e[t]).split("-"), a = r.length, n = Pa(e[t + 1]), n = n ? n.split("-") : null; a > 0; ) {
      if (s = At(r.slice(0, a).join("-")), s)
        return s;
      if (n && n.length >= a && tr(r, n) >= a - 1)
        break;
      a--;
    }
    t++;
  }
  return ut;
}
function nr(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function At(e) {
  var t = null, a;
  if (L[e] === void 0 && typeof module < "u" && module && module.exports && nr(e))
    try {
      t = ut._abbr, a = require, a("./locale/" + e), Oe(t);
    } catch {
      L[e] = null;
    }
  return L[e];
}
function Oe(e, t) {
  var a;
  return e && (Z(t) ? a = _e(e) : a = Sa(e, t), a ? ut = a : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), ut._abbr;
}
function Sa(e, t) {
  if (t !== null) {
    var a, n = nn;
    if (t.abbr = e, L[e] != null)
      La(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), n = L[e]._config;
    else if (t.parentLocale != null)
      if (L[t.parentLocale] != null)
        n = L[t.parentLocale]._config;
      else if (a = At(t.parentLocale), a != null)
        n = a._config;
      else
        return Qe[t.parentLocale] || (Qe[t.parentLocale] = []), Qe[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return L[e] = new ua(Qt(n, t)), Qe[e] && Qe[e].forEach(function(s) {
      Sa(s.name, s.config);
    }), Oe(e), L[e];
  } else
    return delete L[e], null;
}
function sr(e, t) {
  if (t != null) {
    var a, n, s = nn;
    L[e] != null && L[e].parentLocale != null ? L[e].set(Qt(L[e]._config, t)) : (n = At(e), n != null && (s = n._config), t = Qt(s, t), n == null && (t.abbr = e), a = new ua(t), a.parentLocale = L[e], L[e] = a), Oe(e);
  } else
    L[e] != null && (L[e].parentLocale != null ? (L[e] = L[e].parentLocale, e === Oe() && Oe(e)) : L[e] != null && delete L[e]);
  return L[e];
}
function _e(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return ut;
  if (!ie(e)) {
    if (t = At(e), t)
      return t;
    e = [e];
  }
  return ar(e);
}
function rr() {
  return Kt(L);
}
function pa(e) {
  var t, a = e._a;
  return a && M(e).overflow === -2 && (t = a[pe] < 0 || a[pe] > 11 ? pe : a[fe] < 1 || a[fe] > ya(a[x], a[pe]) ? fe : a[B] < 0 || a[B] > 24 || a[B] === 24 && (a[re] !== 0 || a[ve] !== 0 || a[Re] !== 0) ? B : a[re] < 0 || a[re] > 59 ? re : a[ve] < 0 || a[ve] > 59 ? ve : a[Re] < 0 || a[Re] > 999 ? Re : -1, M(e)._overflowDayOfYear && (t < x || t > fe) && (t = fe), M(e)._overflowWeeks && t === -1 && (t = us), M(e)._overflowWeekday && t === -1 && (t = ds), M(e).overflow = t), e;
}
var ir = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, or = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, lr = /Z|[+-]\d\d(?::?\d\d)?/, Dt = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], xt = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], ur = /^\/?Date\((-?\d+)/i, dr = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, cr = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function sn(e) {
  var t, a, n = e._i, s = ir.exec(n) || or.exec(n), r, i, o, h, g = Dt.length, b = xt.length;
  if (s) {
    for (M(e).iso = !0, t = 0, a = g; t < a; t++)
      if (Dt[t][1].exec(s[1])) {
        i = Dt[t][0], r = Dt[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (s[3]) {
      for (t = 0, a = b; t < a; t++)
        if (xt[t][1].exec(s[3])) {
          o = (s[2] || " ") + xt[t][0];
          break;
        }
      if (o == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!r && o != null) {
      e._isValid = !1;
      return;
    }
    if (s[4])
      if (lr.exec(s[4]))
        h = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (o || "") + (h || ""), Ma(e);
  } else
    e._isValid = !1;
}
function fr(e, t, a, n, s, r) {
  var i = [
    hr(e),
    Ja.indexOf(t),
    parseInt(a, 10),
    parseInt(n, 10),
    parseInt(s, 10)
  ];
  return r && i.push(parseInt(r, 10)), i;
}
function hr(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function mr(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function yr(e, t, a) {
  if (e) {
    var n = en.indexOf(e), s = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (n !== s)
      return M(a).weekdayMismatch = !0, a._isValid = !1, !1;
  }
  return !0;
}
function gr(e, t, a) {
  if (e)
    return cr[e];
  if (t)
    return 0;
  var n = parseInt(a, 10), s = n % 100, r = (n - s) / 100;
  return r * 60 + s;
}
function rn(e) {
  var t = dr.exec(mr(e._i)), a;
  if (t) {
    if (a = fr(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !yr(t[1], a, e))
      return;
    e._a = a, e._tzm = gr(t[8], t[9], t[10]), e._d = ot.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), M(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Dr(e) {
  var t = ur.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (sn(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (rn(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : d.createFromInputFallback(e);
}
d.createFromInputFallback = ae(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function He(e, t, a) {
  return e ?? t ?? a;
}
function wr(e) {
  var t = new Date(d.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function va(e) {
  var t, a, n = [], s, r, i;
  if (!e._d) {
    for (s = wr(e), e._w && e._a[fe] == null && e._a[pe] == null && Sr(e), e._dayOfYear != null && (i = He(e._a[x], s[x]), (e._dayOfYear > st(i) || e._dayOfYear === 0) && (M(e)._overflowDayOfYear = !0), a = ot(i, 0, e._dayOfYear), e._a[pe] = a.getUTCMonth(), e._a[fe] = a.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = n[t] = s[t];
    for (; t < 7; t++)
      e._a[t] = n[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[B] === 24 && e._a[re] === 0 && e._a[ve] === 0 && e._a[Re] === 0 && (e._nextDay = !0, e._a[B] = 0), e._d = (e._useUTC ? ot : _s).apply(
      null,
      n
    ), r = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[B] = 24), e._w && typeof e._w.d < "u" && e._w.d !== r && (M(e).weekdayMismatch = !0);
  }
}
function Sr(e) {
  var t, a, n, s, r, i, o, h, g;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (r = 1, i = 4, a = He(
    t.GG,
    e._a[x],
    lt(H(), 1, 4).year
  ), n = He(t.W, 1), s = He(t.E, 1), (s < 1 || s > 7) && (h = !0)) : (r = e._locale._week.dow, i = e._locale._week.doy, g = lt(H(), r, i), a = He(t.gg, e._a[x], g.year), n = He(t.w, g.week), t.d != null ? (s = t.d, (s < 0 || s > 6) && (h = !0)) : t.e != null ? (s = t.e + r, (t.e < 0 || t.e > 6) && (h = !0)) : s = r), n < 1 || n > be(a, r, i) ? M(e)._overflowWeeks = !0 : h != null ? M(e)._overflowWeekday = !0 : (o = Xa(a, n, s, r, i), e._a[x] = o.year, e._dayOfYear = o.dayOfYear);
}
d.ISO_8601 = function() {
};
d.RFC_2822 = function() {
};
function Ma(e) {
  if (e._f === d.ISO_8601) {
    sn(e);
    return;
  }
  if (e._f === d.RFC_2822) {
    rn(e);
    return;
  }
  e._a = [], M(e).empty = !0;
  var t = "" + e._i, a, n, s, r, i, o = t.length, h = 0, g, b;
  for (s = $a(e._f, e._locale).match(da) || [], b = s.length, a = 0; a < b; a++)
    r = s[a], n = (t.match(is(r, e)) || [])[0], n && (i = t.substr(0, t.indexOf(n)), i.length > 0 && M(e).unusedInput.push(i), t = t.slice(
      t.indexOf(n) + n.length
    ), h += n.length), Le[r] ? (n ? M(e).empty = !1 : M(e).unusedTokens.push(r), ls(r, n, e)) : e._strict && !n && M(e).unusedTokens.push(r);
  M(e).charsLeftOver = o - h, t.length > 0 && M(e).unusedInput.push(t), e._a[B] <= 12 && M(e).bigHour === !0 && e._a[B] > 0 && (M(e).bigHour = void 0), M(e).parsedDateParts = e._a.slice(0), M(e).meridiem = e._meridiem, e._a[B] = pr(
    e._locale,
    e._a[B],
    e._meridiem
  ), g = M(e).era, g !== null && (e._a[x] = e._locale.erasConvertYear(g, e._a[x])), va(e), pa(e);
}
function pr(e, t, a) {
  var n;
  return a == null ? t : e.meridiemHour != null ? e.meridiemHour(t, a) : (e.isPM != null && (n = e.isPM(a), n && t < 12 && (t += 12), !n && t === 12 && (t = 0)), t);
}
function vr(e) {
  var t, a, n, s, r, i, o = !1, h = e._f.length;
  if (h === 0) {
    M(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (s = 0; s < h; s++)
    r = 0, i = !1, t = la({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[s], Ma(t), oa(t) && (i = !0), r += M(t).charsLeftOver, r += M(t).unusedTokens.length * 10, M(t).score = r, o ? r < n && (n = r, a = t) : (n == null || r < n || i) && (n = r, a = t, i && (o = !0));
  Ye(e, a || t);
}
function Mr(e) {
  if (!e._d) {
    var t = ca(e._i), a = t.day === void 0 ? t.date : t.day;
    e._a = Ha(
      [t.year, t.month, a, t.hour, t.minute, t.second, t.millisecond],
      function(n) {
        return n && parseInt(n, 10);
      }
    ), va(e);
  }
}
function br(e) {
  var t = new ft(pa(on(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function on(e) {
  var t = e._i, a = e._f;
  return e._locale = e._locale || _e(e._l), t === null || a === void 0 && t === "" ? Ot({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), oe(t) ? new ft(pa(t)) : (ct(t) ? e._d = t : ie(a) ? vr(e) : a ? Ma(e) : kr(e), oa(e) || (e._d = null), e));
}
function kr(e) {
  var t = e._i;
  Z(t) ? e._d = new Date(d.now()) : ct(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Dr(e) : ie(t) ? (e._a = Ha(t.slice(0), function(a) {
    return parseInt(a, 10);
  }), va(e)) : We(t) ? Mr(e) : ke(t) ? e._d = new Date(t) : d.createFromInputFallback(e);
}
function ln(e, t, a, n, s) {
  var r = {};
  return (t === !0 || t === !1) && (n = t, t = void 0), (a === !0 || a === !1) && (n = a, a = void 0), (We(e) && ia(e) || ie(e) && e.length === 0) && (e = void 0), r._isAMomentObject = !0, r._useUTC = r._isUTC = s, r._l = a, r._i = e, r._f = t, r._strict = n, br(r);
}
function H(e, t, a, n) {
  return ln(e, t, a, n, !1);
}
var _r = ae(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = H.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Ot();
  }
), Nr = ae(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = H.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Ot();
  }
);
function un(e, t) {
  var a, n;
  if (t.length === 1 && ie(t[0]) && (t = t[0]), !t.length)
    return H();
  for (a = t[0], n = 1; n < t.length; ++n)
    (!t[n].isValid() || t[n][e](a)) && (a = t[n]);
  return a;
}
function Yr() {
  var e = [].slice.call(arguments, 0);
  return un("isBefore", e);
}
function Tr() {
  var e = [].slice.call(arguments, 0);
  return un("isAfter", e);
}
var Or = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Ke = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function Cr(e) {
  var t, a = !1, n, s = Ke.length;
  for (t in e)
    if (O(e, t) && !(E.call(Ke, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (n = 0; n < s; ++n)
    if (e[Ke[n]]) {
      if (a)
        return !1;
      parseFloat(e[Ke[n]]) !== _(e[Ke[n]]) && (a = !0);
    }
  return !0;
}
function Fr() {
  return this._isValid;
}
function Vr() {
  return le(NaN);
}
function It(e) {
  var t = ca(e), a = t.year || 0, n = t.quarter || 0, s = t.month || 0, r = t.week || t.isoWeek || 0, i = t.day || 0, o = t.hour || 0, h = t.minute || 0, g = t.second || 0, b = t.millisecond || 0;
  this._isValid = Cr(t), this._milliseconds = +b + g * 1e3 + // 1000
  h * 6e4 + // 1000 * 60
  o * 1e3 * 60 * 60, this._days = +i + r * 7, this._months = +s + n * 3 + a * 12, this._data = {}, this._locale = _e(), this._bubble();
}
function pt(e) {
  return e instanceof It;
}
function ea(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Pr(e, t, a) {
  var n = Math.min(e.length, t.length), s = Math.abs(e.length - t.length), r = 0, i;
  for (i = 0; i < n; i++)
    (a && e[i] !== t[i] || !a && _(e[i]) !== _(t[i])) && r++;
  return r + s;
}
function dn(e, t) {
  y(e, 0, 0, function() {
    var a = this.utcOffset(), n = "+";
    return a < 0 && (a = -a, n = "-"), n + me(~~(a / 60), 2) + t + me(~~a % 60, 2);
  });
}
dn("Z", ":");
dn("ZZ", "");
f("Z", Rt);
f("ZZ", Rt);
W(["Z", "ZZ"], function(e, t, a) {
  a._useUTC = !0, a._tzm = ba(Rt, e);
});
var Rr = /([\+\-]|\d\d)/gi;
function ba(e, t) {
  var a = (t || "").match(e), n, s, r;
  return a === null ? null : (n = a[a.length - 1] || [], s = (n + "").match(Rr) || ["-", 0, 0], r = +(s[1] * 60) + _(s[2]), r === 0 ? 0 : s[0] === "+" ? r : -r);
}
function ka(e, t) {
  var a, n;
  return t._isUTC ? (a = t.clone(), n = (oe(e) || ct(e) ? e.valueOf() : H(e).valueOf()) - a.valueOf(), a._d.setTime(a._d.valueOf() + n), d.updateOffset(a, !1), a) : H(e).local();
}
function ta(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
d.updateOffset = function() {
};
function Wr(e, t, a) {
  var n = this._offset || 0, s;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = ba(Rt, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !a && (e = e * 60);
    return !this._isUTC && t && (s = ta(this)), this._offset = e, this._isUTC = !0, s != null && this.add(s, "m"), n !== e && (!t || this._changeInProgress ? hn(
      this,
      le(e - n, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, d.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? n : ta(this);
}
function Ar(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Ir(e) {
  return this.utcOffset(0, e);
}
function Hr(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(ta(this), "m")), this;
}
function Ur() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = ba(ss, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Lr(e) {
  return this.isValid() ? (e = e ? H(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function $r() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function jr() {
  if (!Z(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return la(e, this), e = on(e), e._a ? (t = e._isUTC ? ye(e._a) : H(e._a), this._isDSTShifted = this.isValid() && Pr(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Er() {
  return this.isValid() ? !this._isUTC : !1;
}
function Br() {
  return this.isValid() ? this._isUTC : !1;
}
function cn() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var zr = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Gr = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function le(e, t) {
  var a = e, n = null, s, r, i;
  return pt(e) ? a = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : ke(e) || !isNaN(+e) ? (a = {}, t ? a[t] = +e : a.milliseconds = +e) : (n = zr.exec(e)) ? (s = n[1] === "-" ? -1 : 1, a = {
    y: 0,
    d: _(n[fe]) * s,
    h: _(n[B]) * s,
    m: _(n[re]) * s,
    s: _(n[ve]) * s,
    ms: _(ea(n[Re] * 1e3)) * s
    // the millisecond decimal point is included in the match
  }) : (n = Gr.exec(e)) ? (s = n[1] === "-" ? -1 : 1, a = {
    y: Pe(n[2], s),
    M: Pe(n[3], s),
    w: Pe(n[4], s),
    d: Pe(n[5], s),
    h: Pe(n[6], s),
    m: Pe(n[7], s),
    s: Pe(n[8], s)
  }) : a == null ? a = {} : typeof a == "object" && ("from" in a || "to" in a) && (i = xr(
    H(a.from),
    H(a.to)
  ), a = {}, a.ms = i.milliseconds, a.M = i.months), r = new It(a), pt(e) && O(e, "_locale") && (r._locale = e._locale), pt(e) && O(e, "_isValid") && (r._isValid = e._isValid), r;
}
le.fn = It.prototype;
le.invalid = Vr;
function Pe(e, t) {
  var a = e && parseFloat(e.replace(",", "."));
  return (isNaN(a) ? 0 : a) * t;
}
function Ra(e, t) {
  var a = {};
  return a.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(a.months, "M").isAfter(t) && --a.months, a.milliseconds = +t - +e.clone().add(a.months, "M"), a;
}
function xr(e, t) {
  var a;
  return e.isValid() && t.isValid() ? (t = ka(t, e), e.isBefore(t) ? a = Ra(e, t) : (a = Ra(t, e), a.milliseconds = -a.milliseconds, a.months = -a.months), a) : { milliseconds: 0, months: 0 };
}
function fn(e, t) {
  return function(a, n) {
    var s, r;
    return n !== null && !isNaN(+n) && (La(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), r = a, a = n, n = r), s = le(a, n), hn(this, s, e), this;
  };
}
function hn(e, t, a, n) {
  var s = t._milliseconds, r = ea(t._days), i = ea(t._months);
  e.isValid() && (n = n ?? !0, i && qa(e, it(e, "Month") + i * a), r && xa(e, "Date", it(e, "Date") + r * a), s && e._d.setTime(e._d.valueOf() + s * a), n && d.updateOffset(e, r || i));
}
var Jr = fn(1, "add"), Zr = fn(-1, "subtract");
function mn(e) {
  return typeof e == "string" || e instanceof String;
}
function qr(e) {
  return oe(e) || ct(e) || mn(e) || ke(e) || Kr(e) || Qr(e) || e === null || e === void 0;
}
function Qr(e) {
  var t = We(e) && !ia(e), a = !1, n = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], s, r, i = n.length;
  for (s = 0; s < i; s += 1)
    r = n[s], a = a || O(e, r);
  return t && a;
}
function Kr(e) {
  var t = ie(e), a = !1;
  return t && (a = e.filter(function(n) {
    return !ke(n) && mn(e);
  }).length === 0), t && a;
}
function Xr(e) {
  var t = We(e) && !ia(e), a = !1, n = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], s, r;
  for (s = 0; s < n.length; s += 1)
    r = n[s], a = a || O(e, r);
  return t && a;
}
function ei(e, t) {
  var a = e.diff(t, "days", !0);
  return a < -6 ? "sameElse" : a < -1 ? "lastWeek" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : a < 7 ? "nextWeek" : "sameElse";
}
function ti(e, t) {
  arguments.length === 1 && (arguments[0] ? qr(arguments[0]) ? (e = arguments[0], t = void 0) : Xr(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var a = e || H(), n = ka(a, this).startOf("day"), s = d.calendarFormat(this, n) || "sameElse", r = t && (ge(t[s]) ? t[s].call(this, a) : t[s]);
  return this.format(
    r || this.localeData().calendar(s, this, H(a))
  );
}
function ai() {
  return new ft(this);
}
function ni(e, t) {
  var a = oe(e) ? e : H(e);
  return this.isValid() && a.isValid() ? (t = ne(t) || "millisecond", t === "millisecond" ? this.valueOf() > a.valueOf() : a.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function si(e, t) {
  var a = oe(e) ? e : H(e);
  return this.isValid() && a.isValid() ? (t = ne(t) || "millisecond", t === "millisecond" ? this.valueOf() < a.valueOf() : this.clone().endOf(t).valueOf() < a.valueOf()) : !1;
}
function ri(e, t, a, n) {
  var s = oe(e) ? e : H(e), r = oe(t) ? t : H(t);
  return this.isValid() && s.isValid() && r.isValid() ? (n = n || "()", (n[0] === "(" ? this.isAfter(s, a) : !this.isBefore(s, a)) && (n[1] === ")" ? this.isBefore(r, a) : !this.isAfter(r, a))) : !1;
}
function ii(e, t) {
  var a = oe(e) ? e : H(e), n;
  return this.isValid() && a.isValid() ? (t = ne(t) || "millisecond", t === "millisecond" ? this.valueOf() === a.valueOf() : (n = a.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) : !1;
}
function oi(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function li(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function ui(e, t, a) {
  var n, s, r;
  if (!this.isValid())
    return NaN;
  if (n = ka(e, this), !n.isValid())
    return NaN;
  switch (s = (n.utcOffset() - this.utcOffset()) * 6e4, t = ne(t), t) {
    case "year":
      r = vt(this, n) / 12;
      break;
    case "month":
      r = vt(this, n);
      break;
    case "quarter":
      r = vt(this, n) / 3;
      break;
    case "second":
      r = (this - n) / 1e3;
      break;
    case "minute":
      r = (this - n) / 6e4;
      break;
    case "hour":
      r = (this - n) / 36e5;
      break;
    case "day":
      r = (this - n - s) / 864e5;
      break;
    case "week":
      r = (this - n - s) / 6048e5;
      break;
    default:
      r = this - n;
  }
  return a ? r : te(r);
}
function vt(e, t) {
  if (e.date() < t.date())
    return -vt(t, e);
  var a = (t.year() - e.year()) * 12 + (t.month() - e.month()), n = e.clone().add(a, "months"), s, r;
  return t - n < 0 ? (s = e.clone().add(a - 1, "months"), r = (t - n) / (n - s)) : (s = e.clone().add(a + 1, "months"), r = (t - n) / (s - n)), -(a + r) || 0;
}
d.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
d.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function di() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function ci(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, a = t ? this.clone().utc() : this;
  return a.year() < 0 || a.year() > 9999 ? St(
    a,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : ge(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", St(a, "Z")) : St(
    a,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function fi() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", a, n, s, r;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), a = "[" + e + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", s = "-MM-DD[T]HH:mm:ss.SSS", r = t + '[")]', this.format(a + n + s + r);
}
function hi(e) {
  e || (e = this.isUtc() ? d.defaultFormatUtc : d.defaultFormat);
  var t = St(this, e);
  return this.localeData().postformat(t);
}
function mi(e, t) {
  return this.isValid() && (oe(e) && e.isValid() || H(e).isValid()) ? le({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function yi(e) {
  return this.from(H(), e);
}
function gi(e, t) {
  return this.isValid() && (oe(e) && e.isValid() || H(e).isValid()) ? le({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Di(e) {
  return this.to(H(), e);
}
function yn(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = _e(e), t != null && (this._locale = t), this);
}
var gn = ae(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Dn() {
  return this._locale;
}
var _t = 1e3, $e = 60 * _t, Nt = 60 * $e, wn = (365 * 400 + 97) * 24 * Nt;
function je(e, t) {
  return (e % t + t) % t;
}
function Sn(e, t, a) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, a) - wn : new Date(e, t, a).valueOf();
}
function pn(e, t, a) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, a) - wn : Date.UTC(e, t, a);
}
function wi(e) {
  var t, a;
  if (e = ne(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (a = this._isUTC ? pn : Sn, e) {
    case "year":
      t = a(this.year(), 0, 1);
      break;
    case "quarter":
      t = a(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = a(this.year(), this.month(), 1);
      break;
    case "week":
      t = a(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = a(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = a(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= je(
        t + (this._isUTC ? 0 : this.utcOffset() * $e),
        Nt
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= je(t, $e);
      break;
    case "second":
      t = this._d.valueOf(), t -= je(t, _t);
      break;
  }
  return this._d.setTime(t), d.updateOffset(this, !0), this;
}
function Si(e) {
  var t, a;
  if (e = ne(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (a = this._isUTC ? pn : Sn, e) {
    case "year":
      t = a(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = a(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = a(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = a(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = a(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = a(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += Nt - je(
        t + (this._isUTC ? 0 : this.utcOffset() * $e),
        Nt
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += $e - je(t, $e) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += _t - je(t, _t) - 1;
      break;
  }
  return this._d.setTime(t), d.updateOffset(this, !0), this;
}
function pi() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function vi() {
  return Math.floor(this.valueOf() / 1e3);
}
function Mi() {
  return new Date(this.valueOf());
}
function bi() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function ki() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function _i() {
  return this.isValid() ? this.toISOString() : null;
}
function Ni() {
  return oa(this);
}
function Yi() {
  return Ye({}, M(this));
}
function Ti() {
  return M(this).overflow;
}
function Oi() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
y("N", 0, 0, "eraAbbr");
y("NN", 0, 0, "eraAbbr");
y("NNN", 0, 0, "eraAbbr");
y("NNNN", 0, 0, "eraName");
y("NNNNN", 0, 0, "eraNarrow");
y("y", ["y", 1], "yo", "eraYear");
y("y", ["yy", 2], 0, "eraYear");
y("y", ["yyy", 3], 0, "eraYear");
y("y", ["yyyy", 4], 0, "eraYear");
f("N", _a);
f("NN", _a);
f("NNN", _a);
f("NNNN", Li);
f("NNNNN", $i);
W(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, a, n) {
    var s = a._locale.erasParse(e, n, a._strict);
    s ? M(a).era = s : M(a).invalidEra = e;
  }
);
f("y", Be);
f("yy", Be);
f("yyy", Be);
f("yyyy", Be);
f("yo", ji);
W(["y", "yy", "yyy", "yyyy"], x);
W(["yo"], function(e, t, a, n) {
  var s;
  a._locale._eraYearOrdinalRegex && (s = e.match(a._locale._eraYearOrdinalRegex)), a._locale.eraYearOrdinalParse ? t[x] = a._locale.eraYearOrdinalParse(e, s) : t[x] = parseInt(e, 10);
});
function Ci(e, t) {
  var a, n, s, r = this._eras || _e("en")._eras;
  for (a = 0, n = r.length; a < n; ++a) {
    switch (typeof r[a].since) {
      case "string":
        s = d(r[a].since).startOf("day"), r[a].since = s.valueOf();
        break;
    }
    switch (typeof r[a].until) {
      case "undefined":
        r[a].until = 1 / 0;
        break;
      case "string":
        s = d(r[a].until).startOf("day").valueOf(), r[a].until = s.valueOf();
        break;
    }
  }
  return r;
}
function Fi(e, t, a) {
  var n, s, r = this.eras(), i, o, h;
  for (e = e.toUpperCase(), n = 0, s = r.length; n < s; ++n)
    if (i = r[n].name.toUpperCase(), o = r[n].abbr.toUpperCase(), h = r[n].narrow.toUpperCase(), a)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (o === e)
            return r[n];
          break;
        case "NNNN":
          if (i === e)
            return r[n];
          break;
        case "NNNNN":
          if (h === e)
            return r[n];
          break;
      }
    else if ([i, o, h].indexOf(e) >= 0)
      return r[n];
}
function Vi(e, t) {
  var a = e.since <= e.until ? 1 : -1;
  return t === void 0 ? d(e.since).year() : d(e.since).year() + (t - e.offset) * a;
}
function Pi() {
  var e, t, a, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (a = this.clone().startOf("day").valueOf(), n[e].since <= a && a <= n[e].until || n[e].until <= a && a <= n[e].since)
      return n[e].name;
  return "";
}
function Ri() {
  var e, t, a, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (a = this.clone().startOf("day").valueOf(), n[e].since <= a && a <= n[e].until || n[e].until <= a && a <= n[e].since)
      return n[e].narrow;
  return "";
}
function Wi() {
  var e, t, a, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (a = this.clone().startOf("day").valueOf(), n[e].since <= a && a <= n[e].until || n[e].until <= a && a <= n[e].since)
      return n[e].abbr;
  return "";
}
function Ai() {
  var e, t, a, n, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (a = s[e].since <= s[e].until ? 1 : -1, n = this.clone().startOf("day").valueOf(), s[e].since <= n && n <= s[e].until || s[e].until <= n && n <= s[e].since)
      return (this.year() - d(s[e].since).year()) * a + s[e].offset;
  return this.year();
}
function Ii(e) {
  return O(this, "_erasNameRegex") || Na.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Hi(e) {
  return O(this, "_erasAbbrRegex") || Na.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Ui(e) {
  return O(this, "_erasNarrowRegex") || Na.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function _a(e, t) {
  return t.erasAbbrRegex(e);
}
function Li(e, t) {
  return t.erasNameRegex(e);
}
function $i(e, t) {
  return t.erasNarrowRegex(e);
}
function ji(e, t) {
  return t._eraYearOrdinalRegex || Be;
}
function Na() {
  var e = [], t = [], a = [], n = [], s, r, i, o, h, g = this.eras();
  for (s = 0, r = g.length; s < r; ++s)
    i = Me(g[s].name), o = Me(g[s].abbr), h = Me(g[s].narrow), t.push(i), e.push(o), a.push(h), n.push(i), n.push(o), n.push(h);
  this._erasRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + a.join("|") + ")",
    "i"
  );
}
y(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
y(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Ht(e, t) {
  y(0, [e, e.length], 0, t);
}
Ht("gggg", "weekYear");
Ht("ggggg", "weekYear");
Ht("GGGG", "isoWeekYear");
Ht("GGGGG", "isoWeekYear");
f("G", Pt);
f("g", Pt);
f("GG", U, ee);
f("gg", U, ee);
f("GGGG", ha, fa);
f("gggg", ha, fa);
f("GGGGG", Vt, Ct);
f("ggggg", Vt, Ct);
mt(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, a, n) {
    t[n.substr(0, 2)] = _(e);
  }
);
mt(["gg", "GG"], function(e, t, a, n) {
  t[n] = d.parseTwoDigitYear(e);
});
function Ei(e) {
  return vn.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Bi(e) {
  return vn.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function zi() {
  return be(this.year(), 1, 4);
}
function Gi() {
  return be(this.isoWeekYear(), 1, 4);
}
function xi() {
  var e = this.localeData()._week;
  return be(this.year(), e.dow, e.doy);
}
function Ji() {
  var e = this.localeData()._week;
  return be(this.weekYear(), e.dow, e.doy);
}
function vn(e, t, a, n, s) {
  var r;
  return e == null ? lt(this, n, s).year : (r = be(e, n, s), t > r && (t = r), Zi.call(this, e, t, a, n, s));
}
function Zi(e, t, a, n, s) {
  var r = Xa(e, t, a, n, s), i = ot(r.year, 0, r.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
y("Q", 0, "Qo", "quarter");
f("Q", ja);
W("Q", function(e, t) {
  t[pe] = (_(e) - 1) * 3;
});
function qi(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
y("D", ["DD", 2], "Do", "date");
f("D", U, ze);
f("DD", U, ee);
f("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
W(["D", "DD"], fe);
W("Do", function(e, t) {
  t[fe] = _(e.match(U)[0]);
});
var Mn = Ge("Date", !0);
y("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
f("DDD", Ft);
f("DDDD", Ea);
W(["DDD", "DDDD"], function(e, t, a) {
  a._dayOfYear = _(e);
});
function Qi(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
y("m", ["mm", 2], 0, "minute");
f("m", U, ma);
f("mm", U, ee);
W(["m", "mm"], re);
var Ki = Ge("Minutes", !1);
y("s", ["ss", 2], 0, "second");
f("s", U, ma);
f("ss", U, ee);
W(["s", "ss"], ve);
var Xi = Ge("Seconds", !1);
y("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
y(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
y(0, ["SSS", 3], 0, "millisecond");
y(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
y(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
y(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
y(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
y(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
y(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
f("S", Ft, ja);
f("SS", Ft, ee);
f("SSS", Ft, Ea);
var Te, bn;
for (Te = "SSSS"; Te.length <= 9; Te += "S")
  f(Te, Be);
function eo(e, t) {
  t[Re] = _(("0." + e) * 1e3);
}
for (Te = "S"; Te.length <= 9; Te += "S")
  W(Te, eo);
bn = Ge("Milliseconds", !1);
y("z", 0, 0, "zoneAbbr");
y("zz", 0, 0, "zoneName");
function to() {
  return this._isUTC ? "UTC" : "";
}
function ao() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var l = ft.prototype;
l.add = Jr;
l.calendar = ti;
l.clone = ai;
l.diff = ui;
l.endOf = Si;
l.format = hi;
l.from = mi;
l.fromNow = yi;
l.to = gi;
l.toNow = Di;
l.get = fs;
l.invalidAt = Ti;
l.isAfter = ni;
l.isBefore = si;
l.isBetween = ri;
l.isSame = ii;
l.isSameOrAfter = oi;
l.isSameOrBefore = li;
l.isValid = Ni;
l.lang = gn;
l.locale = yn;
l.localeData = Dn;
l.max = Nr;
l.min = _r;
l.parsingFlags = Yi;
l.set = hs;
l.startOf = wi;
l.subtract = Zr;
l.toArray = bi;
l.toObject = ki;
l.toDate = Mi;
l.toISOString = ci;
l.inspect = fi;
typeof Symbol < "u" && Symbol.for != null && (l[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
l.toJSON = _i;
l.toString = di;
l.unix = vi;
l.valueOf = pi;
l.creationData = Oi;
l.eraName = Pi;
l.eraNarrow = Ri;
l.eraAbbr = Wi;
l.eraYear = Ai;
l.year = Ga;
l.isLeapYear = cs;
l.weekYear = Ei;
l.isoWeekYear = Bi;
l.quarter = l.quarters = qi;
l.month = Qa;
l.daysInMonth = Ms;
l.week = l.weeks = Cs;
l.isoWeek = l.isoWeeks = Fs;
l.weeksInYear = xi;
l.weeksInWeekYear = Ji;
l.isoWeeksInYear = zi;
l.isoWeeksInISOWeekYear = Gi;
l.date = Mn;
l.day = l.days = Bs;
l.weekday = zs;
l.isoWeekday = Gs;
l.dayOfYear = Qi;
l.hour = l.hours = Xs;
l.minute = l.minutes = Ki;
l.second = l.seconds = Xi;
l.millisecond = l.milliseconds = bn;
l.utcOffset = Wr;
l.utc = Ir;
l.local = Hr;
l.parseZone = Ur;
l.hasAlignedHourOffset = Lr;
l.isDST = $r;
l.isLocal = Er;
l.isUtcOffset = Br;
l.isUtc = cn;
l.isUTC = cn;
l.zoneAbbr = to;
l.zoneName = ao;
l.dates = ae(
  "dates accessor is deprecated. Use date instead.",
  Mn
);
l.months = ae(
  "months accessor is deprecated. Use month instead",
  Qa
);
l.years = ae(
  "years accessor is deprecated. Use year instead",
  Ga
);
l.zone = ae(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Ar
);
l.isDSTShifted = ae(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  jr
);
function no(e) {
  return H(e * 1e3);
}
function so() {
  return H.apply(null, arguments).parseZone();
}
function kn(e) {
  return e;
}
var C = ua.prototype;
C.calendar = En;
C.longDateFormat = xn;
C.invalidDate = Zn;
C.ordinal = Kn;
C.preparse = kn;
C.postformat = kn;
C.relativeTime = es;
C.pastFuture = ts;
C.set = $n;
C.eras = Ci;
C.erasParse = Fi;
C.erasConvertYear = Vi;
C.erasAbbrRegex = Hi;
C.erasNameRegex = Ii;
C.erasNarrowRegex = Ui;
C.months = ws;
C.monthsShort = Ss;
C.monthsParse = vs;
C.monthsRegex = ks;
C.monthsShortRegex = bs;
C.week = Ns;
C.firstDayOfYear = Os;
C.firstDayOfWeek = Ts;
C.weekdays = Us;
C.weekdaysMin = $s;
C.weekdaysShort = Ls;
C.weekdaysParse = Es;
C.weekdaysRegex = xs;
C.weekdaysShortRegex = Js;
C.weekdaysMinRegex = Zs;
C.isPM = Qs;
C.meridiem = er;
function Yt(e, t, a, n) {
  var s = _e(), r = ye().set(n, t);
  return s[a](r, e);
}
function _n(e, t, a) {
  if (ke(e) && (t = e, e = void 0), e = e || "", t != null)
    return Yt(e, t, a, "month");
  var n, s = [];
  for (n = 0; n < 12; n++)
    s[n] = Yt(e, n, a, "month");
  return s;
}
function Ya(e, t, a, n) {
  typeof e == "boolean" ? (ke(t) && (a = t, t = void 0), t = t || "") : (t = e, a = t, e = !1, ke(t) && (a = t, t = void 0), t = t || "");
  var s = _e(), r = e ? s._week.dow : 0, i, o = [];
  if (a != null)
    return Yt(t, (a + r) % 7, n, "day");
  for (i = 0; i < 7; i++)
    o[i] = Yt(t, (i + r) % 7, n, "day");
  return o;
}
function ro(e, t) {
  return _n(e, t, "months");
}
function io(e, t) {
  return _n(e, t, "monthsShort");
}
function oo(e, t, a) {
  return Ya(e, t, a, "weekdays");
}
function lo(e, t, a) {
  return Ya(e, t, a, "weekdaysShort");
}
function uo(e, t, a) {
  return Ya(e, t, a, "weekdaysMin");
}
Oe("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, a = _(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + a;
  }
});
d.lang = ae(
  "moment.lang is deprecated. Use moment.locale instead.",
  Oe
);
d.langData = ae(
  "moment.langData is deprecated. Use moment.localeData instead.",
  _e
);
var De = Math.abs;
function co() {
  var e = this._data;
  return this._milliseconds = De(this._milliseconds), this._days = De(this._days), this._months = De(this._months), e.milliseconds = De(e.milliseconds), e.seconds = De(e.seconds), e.minutes = De(e.minutes), e.hours = De(e.hours), e.months = De(e.months), e.years = De(e.years), this;
}
function Nn(e, t, a, n) {
  var s = le(t, a);
  return e._milliseconds += n * s._milliseconds, e._days += n * s._days, e._months += n * s._months, e._bubble();
}
function fo(e, t) {
  return Nn(this, e, t, 1);
}
function ho(e, t) {
  return Nn(this, e, t, -1);
}
function Wa(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function mo() {
  var e = this._milliseconds, t = this._days, a = this._months, n = this._data, s, r, i, o, h;
  return e >= 0 && t >= 0 && a >= 0 || e <= 0 && t <= 0 && a <= 0 || (e += Wa(aa(a) + t) * 864e5, t = 0, a = 0), n.milliseconds = e % 1e3, s = te(e / 1e3), n.seconds = s % 60, r = te(s / 60), n.minutes = r % 60, i = te(r / 60), n.hours = i % 24, t += te(i / 24), h = te(Yn(t)), a += h, t -= Wa(aa(h)), o = te(a / 12), a %= 12, n.days = t, n.months = a, n.years = o, this;
}
function Yn(e) {
  return e * 4800 / 146097;
}
function aa(e) {
  return e * 146097 / 4800;
}
function yo(e) {
  if (!this.isValid())
    return NaN;
  var t, a, n = this._milliseconds;
  if (e = ne(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + n / 864e5, a = this._months + Yn(t), e) {
      case "month":
        return a;
      case "quarter":
        return a / 3;
      case "year":
        return a / 12;
    }
  else
    switch (t = this._days + Math.round(aa(this._months)), e) {
      case "week":
        return t / 7 + n / 6048e5;
      case "day":
        return t + n / 864e5;
      case "hour":
        return t * 24 + n / 36e5;
      case "minute":
        return t * 1440 + n / 6e4;
      case "second":
        return t * 86400 + n / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + n;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function Ne(e) {
  return function() {
    return this.as(e);
  };
}
var Tn = Ne("ms"), go = Ne("s"), Do = Ne("m"), wo = Ne("h"), So = Ne("d"), po = Ne("w"), vo = Ne("M"), Mo = Ne("Q"), bo = Ne("y"), ko = Tn;
function _o() {
  return le(this);
}
function No(e) {
  return e = ne(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Ae(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Yo = Ae("milliseconds"), To = Ae("seconds"), Oo = Ae("minutes"), Co = Ae("hours"), Fo = Ae("days"), Vo = Ae("months"), Po = Ae("years");
function Ro() {
  return te(this.days() / 7);
}
var Se = Math.round, Ue = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function Wo(e, t, a, n, s) {
  return s.relativeTime(t || 1, !!a, e, n);
}
function Ao(e, t, a, n) {
  var s = le(e).abs(), r = Se(s.as("s")), i = Se(s.as("m")), o = Se(s.as("h")), h = Se(s.as("d")), g = Se(s.as("M")), b = Se(s.as("w")), F = Se(s.as("y")), V = r <= a.ss && ["s", r] || r < a.s && ["ss", r] || i <= 1 && ["m"] || i < a.m && ["mm", i] || o <= 1 && ["h"] || o < a.h && ["hh", o] || h <= 1 && ["d"] || h < a.d && ["dd", h];
  return a.w != null && (V = V || b <= 1 && ["w"] || b < a.w && ["ww", b]), V = V || g <= 1 && ["M"] || g < a.M && ["MM", g] || F <= 1 && ["y"] || ["yy", F], V[2] = t, V[3] = +e > 0, V[4] = n, Wo.apply(null, V);
}
function Io(e) {
  return e === void 0 ? Se : typeof e == "function" ? (Se = e, !0) : !1;
}
function Ho(e, t) {
  return Ue[e] === void 0 ? !1 : t === void 0 ? Ue[e] : (Ue[e] = t, e === "s" && (Ue.ss = t - 1), !0);
}
function Uo(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var a = !1, n = Ue, s, r;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (a = e), typeof t == "object" && (n = Object.assign({}, Ue, t), t.s != null && t.ss == null && (n.ss = t.s - 1)), s = this.localeData(), r = Ao(this, !a, n, s), a && (r = s.pastFuture(+this, r)), s.postformat(r);
}
var Jt = Math.abs;
function Ie(e) {
  return (e > 0) - (e < 0) || +e;
}
function Ut() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Jt(this._milliseconds) / 1e3, t = Jt(this._days), a = Jt(this._months), n, s, r, i, o = this.asSeconds(), h, g, b, F;
  return o ? (n = te(e / 60), s = te(n / 60), e %= 60, n %= 60, r = te(a / 12), a %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", h = o < 0 ? "-" : "", g = Ie(this._months) !== Ie(o) ? "-" : "", b = Ie(this._days) !== Ie(o) ? "-" : "", F = Ie(this._milliseconds) !== Ie(o) ? "-" : "", h + "P" + (r ? g + r + "Y" : "") + (a ? g + a + "M" : "") + (t ? b + t + "D" : "") + (s || n || e ? "T" : "") + (s ? F + s + "H" : "") + (n ? F + n + "M" : "") + (e ? F + i + "S" : "")) : "P0D";
}
var N = It.prototype;
N.isValid = Fr;
N.abs = co;
N.add = fo;
N.subtract = ho;
N.as = yo;
N.asMilliseconds = Tn;
N.asSeconds = go;
N.asMinutes = Do;
N.asHours = wo;
N.asDays = So;
N.asWeeks = po;
N.asMonths = vo;
N.asQuarters = Mo;
N.asYears = bo;
N.valueOf = ko;
N._bubble = mo;
N.clone = _o;
N.get = No;
N.milliseconds = Yo;
N.seconds = To;
N.minutes = Oo;
N.hours = Co;
N.days = Fo;
N.weeks = Ro;
N.months = Vo;
N.years = Po;
N.humanize = Uo;
N.toISOString = Ut;
N.toString = Ut;
N.toJSON = Ut;
N.locale = yn;
N.localeData = Dn;
N.toIsoString = ae(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Ut
);
N.lang = gn;
y("X", 0, 0, "unix");
y("x", 0, 0, "valueOf");
f("x", Pt);
f("X", rs);
W("X", function(e, t, a) {
  a._d = new Date(parseFloat(e) * 1e3);
});
W("x", function(e, t, a) {
  a._d = new Date(_(e));
});
//! moment.js
d.version = "2.30.1";
Un(H);
d.fn = l;
d.min = Yr;
d.max = Tr;
d.now = Or;
d.utc = ye;
d.unix = no;
d.months = ro;
d.isDate = ct;
d.locale = Oe;
d.invalid = Ot;
d.duration = le;
d.isMoment = oe;
d.weekdays = oo;
d.parseZone = so;
d.localeData = _e;
d.isDuration = pt;
d.monthsShort = io;
d.weekdaysMin = uo;
d.defineLocale = Sa;
d.updateLocale = sr;
d.locales = rr;
d.weekdaysShort = lo;
d.normalizeUnits = ne;
d.relativeTimeRounding = Io;
d.relativeTimeThreshold = Ho;
d.calendarFormat = ei;
d.prototype = l;
d.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
const Lo = Ee({
  name: "IconView",
  props: {
    height: {
      type: [String, Number],
      default: "16"
    },
    width: {
      type: [String, Number],
      default: "16"
    },
    color: {
      type: String,
      default: "black"
    },
    customClass: {
      type: String,
      required: !1,
      default: ""
    }
  },
  setup() {
    return {};
  }
}), xe = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [n, s] of t)
    a[n] = s;
  return a;
}, $o = ["height", "width"], jo = ["fill"];
function Eo(e, t, a, n, s, r) {
  return k(), T("span", {
    class: I(e.customClass)
  }, [
    (k(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512",
      height: e.height,
      width: e.width,
      role: "img",
      "aria-hidden": "true",
      "data-icon": "calendarAlt"
    }, [
      A("path", {
        fill: e.color,
        d: "M400 64h-48V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H128V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h352c8.8 0 16 7.2 16 16v48H32v-48c0-8.8 7.2-16 16-16zm352 384H48c-8.8 0-16-7.2-16-16V192h384v272c0 8.8-7.2 16-16 16zM148 320h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 96h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm192 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12z"
      }, null, 8, jo)
    ], 8, $o))
  ], 2);
}
const Bo = /* @__PURE__ */ xe(Lo, [["render", Eo]]), p = (e, t = !1) => t ? e.getUTCFullYear() : e.getFullYear(), R = (e, t = !1) => t ? e.getUTCMonth() : e.getMonth(), X = (e, t = !1) => t ? e.getUTCDate() : e.getDate(), ce = (e, t = !1) => t ? e.getUTCDay() : e.getDay(), na = (e, t, a = !1) => a ? e.setUTCFullYear(t) : e.setFullYear(t), On = (e, t, a = !1) => a ? e.setUTCMonth(t) : e.setMonth(t), Mt = (e, t, a = !1) => a ? e.setUTCDate(t) : e.setDate(t), wt = (e, t, a = !1) => {
  const n = new Date(e.getTime()), s = new Date(t.getTime());
  return a ? (n.setUTCHours(0, 0, 0, 0), s.setUTCHours(0, 0, 0, 0)) : (n.setHours(0, 0, 0, 0), s.setHours(0, 0, 0, 0)), n.getTime() === s.getTime();
}, zo = (e, t, a = !1) => {
  const n = new Date(e.getTime()), s = new Date(t.getTime());
  return a ? (n.setUTCHours(0, 0, 0, 0), s.setUTCHours(0, 0, 0, 0)) : (n.setHours(0, 0, 0, 0), s.setHours(0, 0, 0, 0)), n.getTime() > s.getTime();
}, Go = (e, t, a = !1) => {
  const n = new Date(e.getTime()), s = new Date(t.getTime());
  return a ? (n.setUTCHours(0, 0, 0, 0), s.setUTCHours(0, 0, 0, 0)) : (n.setHours(0, 0, 0, 0), s.setHours(0, 0, 0, 0)), n.getTime() < s.getTime();
}, xo = (e) => Object.prototype.toString.call(e) !== "[object Date]" ? !1 : !Number.isNaN(e.getTime()), Lt = (e, t) => {
  if (typeof e != "object")
    throw TypeError("Invalid Type");
  return t[ce(e)];
}, dt = (e, t) => {
  if (!t)
    throw Error("missing 2nd parameter Months array");
  if (typeof e == "object")
    return t[R(e)];
  if (typeof e == "number")
    return t[e];
  throw TypeError("Invalid type");
}, $t = (e, t) => {
  if (!t)
    throw Error("missing 2nd paramter Months array");
  if (typeof e == "object")
    return t[R(e)];
  if (typeof e == "number")
    return t[e];
  throw TypeError("Invalid type");
}, Jo = (e, t) => /8|3|5|10/.test(t) ? 30 : t === 1 ? !(e % 4) && e % 100 || !(e % 400) ? 29 : 28 : 31, Zo = (e) => {
  switch (e) {
    case 1:
    case 21:
    case 31:
      return "st";
    case 2:
    case 22:
      return "nd";
    case 3:
    case 23:
      return "rd";
    default:
      return "th";
  }
}, qo = (e, t, a) => {
  const n = p(e), s = R(e) + 1, r = X(e);
  return t.replace(/dd/, `0${r}`.slice(-2)).replace(/d/, r).replace(/yyyy/, n).replace(/yy/, String(n).slice(2)).replace(/MMMM/, dt(R(e), a.months)).replace(/MMM/, $t(R(e), a.monthsAbbr)).replace(/MM/, `0${s}`.slice(-2)).replace(/M(?!a|ä|e)/, s.toString()).replace(/su/, Zo(X(e))).replace(/D(?!e|é|i)/, Lt(e, a.days));
}, Qo = (e) => e === null || e instanceof Date || typeof e == "string" || typeof e == "number", he = (e) => typeof e == "string" ? new Date(e) : e, Ko = Ee({
  name: "DateInput",
  components: {
    IconView: Bo
  },
  props: {
    selectedDate: {
      type: [Date, String],
      default: null
    },
    resetTypedDate: {
      type: [Date],
      default: /* @__PURE__ */ new Date()
    },
    format: {
      type: [String, Function]
    },
    translation: {
      type: Object
    },
    inline: {
      type: Boolean
    },
    id: {
      type: String
    },
    name: {
      type: String
    },
    openDate: {
      type: Date
    },
    placeholder: {
      type: String
    },
    inputClass: {
      type: [String, Object, Array]
    },
    clearButton: {
      type: Boolean
    },
    clearButtonIcon: {
      type: String
    },
    calendarButton: {
      type: Boolean
    },
    calendarButtonIcon: {
      type: String
    },
    calendarButtonIconContent: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    required: {
      type: Boolean
    },
    typeable: {
      type: Boolean
    },
    addBootstrapClass: {
      type: Boolean,
      default: !1,
      required: !1
    },
    useUtc: {
      type: Boolean
    },
    minimumView: {
      type: String,
      default: "day"
    },
    maximumView: {
      type: String,
      default: "year"
    },
    hideInput: {
      type: Boolean,
      default: !0
    },
    fullMonthName: {
      type: Boolean,
      default: !1
    },
    iconColor: {
      default: "black",
      type: String
    },
    iconHeight: {
      default: 16,
      type: [String, Number]
    },
    iconWidth: {
      default: 16,
      type: [String, Number]
    },
    theme: {
      default: "green",
      type: String
    }
  },
  emits: ["show-calendar", "typed-date", "clear-date", "close-calendar"],
  setup(e, { emit: t }) {
    const a = we(), n = we(null), s = v(() => e.addBootstrapClass ? typeof e.inputClass == "string" ? [e.inputClass, "form-control"].join(" ") : {
      "form-control": !0,
      ...e.inputClass
    } : e.inputClass), r = v(() => {
      var V, j;
      if (!e.selectedDate)
        return null;
      if (a.value)
        return a.value;
      const b = he(e.selectedDate);
      let F = typeof e.format == "function" ? e.format(b) : qo(b, e.format, e.translation);
      if (e.minimumView === e.maximumView) {
        const [, ue, se] = F.split(" ");
        if (e.maximumView === "month") {
          if (e.fullMonthName) {
            const de = (V = e.translation) == null ? void 0 : V.monthsAbbr.indexOf(ue);
            return (j = e.translation) == null ? void 0 : j.months[de];
          }
          F = ue;
        } else
          e.maximumView === "year" && (F = se);
      }
      return F;
    });
    Xe(
      () => e.resetTypedDate,
      () => {
        a.value = "";
      }
    );
    function i() {
      t("show-calendar");
    }
    function o(b) {
      if ([
        27,
        // escape
        13
        // enter
      ].includes(b.keyCode) && n.value.blur(), e.typeable) {
        const { value: F } = n.value, V = typeof e.format == "function" ? e.format(F) : e.format, j = d(F, V.toUpperCase()).toDate();
        Number.isNaN(j) || (a.value = F, t("typed-date", new Date(j)));
      }
    }
    function h() {
      t("clear-date");
    }
    function g() {
      if (e.format) {
        const b = n.value.value, F = typeof e.format == "function" ? e.format(b) : e.format;
        if (b) {
          const V = d(b, F.toUpperCase()).toDate();
          if (console.log(V), !V || Number.isNaN(V))
            h(), n.value.value = null, a.value = "";
          else {
            t("typed-date", V), t("close-calendar", !0);
            return;
          }
        }
      }
      e.typeable && Number.isNaN(Date.parse(n.value.value)) && (h(), n.value.value = null, a.value = ""), t("close-calendar", !0);
    }
    return {
      typedDate: a,
      computedInputClass: s,
      formattedValue: r,
      showCalendar: i,
      parseTypedDate: o,
      inputBlurred: g,
      inputRef: n,
      clearDate: h
    };
  }
});
const Xo = { key: 0 }, el = {
  key: 1,
  style: { position: "relative" }
}, tl = { key: 0 }, al = ["type", "name", "id", "value", "open-date", "placeholder", "clear-button", "disabled", "required", "readonly"], nl = {
  key: 0,
  class: "vuejs3-datepicker__value"
}, sl = { class: "vuejs3-datepicker__icon" }, rl = {
  key: 0,
  class: "vuejs3-datepicker__content"
}, il = {
  key: 1,
  class: "vuejs3-datepicker__content"
}, ol = { key: 0 };
function ll(e, t, a, n, s, r) {
  const i = et("IconView");
  return k(), T("div", {
    class: I([e.addBootstrapClass ? "input-group" : ""])
  }, [
    e.calendarButton ? (k(), T("span", {
      key: 0,
      class: I(["vuejs3-datepicker__calendar-button", { "input-group-prepend": e.addBootstrapClass, "cursor-na": e.disabled }]),
      onClick: t[0] || (t[0] = (...o) => e.showCalendar && e.showCalendar(...o))
    }, [
      A("span", {
        class: I({ "input-group-text": e.addBootstrapClass })
      }, [
        A("i", {
          class: I(e.calendarButtonIcon)
        }, [
          Pn($(e.calendarButtonIconContent) + " ", 1),
          e.calendarButtonIcon ? G("", !0) : (k(), T("span", Xo, "…"))
        ], 2)
      ], 2)
    ], 2)) : G("", !0),
    e.typeable || !e.hideInput ? (k(), T("div", el, [
      e.inline ? G("", !0) : (k(), T("span", tl, [
        Zt(i, {
          customClass: "vuejs3-datepicker__typeablecalendar",
          color: e.iconColor,
          width: e.iconWidth,
          height: e.iconHeight
        }, null, 8, ["color", "width", "height"])
      ])),
      A("input", {
        type: e.inline ? "hidden" : "text",
        class: I([e.computedInputClass, "vuejs3-datepicker__inputvalue"]),
        name: e.name,
        ref: "inputRef",
        id: e.id,
        value: e.formattedValue,
        "open-date": e.openDate,
        placeholder: e.placeholder,
        "clear-button": e.clearButton,
        disabled: e.disabled,
        required: e.required,
        readonly: !e.typeable,
        onClick: t[1] || (t[1] = (...o) => e.showCalendar && e.showCalendar(...o)),
        onKeyup: t[2] || (t[2] = (...o) => e.parseTypedDate && e.parseTypedDate(...o)),
        onBlur: t[3] || (t[3] = (...o) => e.inputBlurred && e.inputBlurred(...o)),
        autocomplete: "off"
      }, null, 42, al)
    ])) : (k(), T("div", {
      key: 2,
      onClick: t[4] || (t[4] = (...o) => e.showCalendar && e.showCalendar(...o)),
      id: "calendar-div"
    }, [
      e.inline ? G("", !0) : (k(), T("div", nl, [
        A("span", sl, [
          Zt(i, {
            color: e.iconColor,
            width: e.iconWidth,
            height: e.iconHeight
          }, null, 8, ["color", "width", "height"])
        ]),
        e.formattedValue ? (k(), T("div", rl, $(e.formattedValue), 1)) : (k(), T("div", il, $(e.placeholder), 1))
      ]))
    ])),
    e.clearButton && e.selectedDate ? (k(), T("span", {
      key: 3,
      class: I(["vuejs3-datepicker__clear-button", { "input-group-append": e.addBootstrapClass }]),
      onClick: t[5] || (t[5] = (o) => e.clearDate())
    }, [
      A("span", {
        class: I({ "input-group-text": e.addBootstrapClass })
      }, [
        A("i", {
          class: I(e.clearButtonIcon)
        }, [
          e.clearButtonIcon ? G("", !0) : (k(), T("span", ol, "×"))
        ], 2)
      ], 2)
    ], 2)) : G("", !0),
    q(e.$slots, "belowDate", {}, void 0, !0)
  ], 2);
}
const ul = /* @__PURE__ */ xe(Ko, [["render", ll], ["__scopeId", "data-v-f3ee40f5"]]), dl = Ee({
  name: "PickerDay",
  props: {
    showDayView: {
      type: Boolean
    },
    selectedDate: {
      type: [String, Date],
      required: !1,
      default: null
    },
    pageDate: {
      type: Date,
      default: /* @__PURE__ */ new Date()
    },
    fullMonthName: {
      type: Boolean
    },
    allowedToShowView: {
      type: Function,
      required: !0
    },
    dayCellContent: {
      type: Function,
      default: (e) => e.date
    },
    disabledDates: {
      type: Object
    },
    highlighted: {
      type: Object
    },
    calendarClass: {
      type: [String, Object, Array]
    },
    calendarStyle: {
      type: Object
    },
    translation: {
      type: Object
    },
    isRtl: {
      type: Boolean
    },
    mondayFirst: {
      type: Boolean
    },
    useUtc: {
      type: Boolean
    },
    minimumView: {
      type: String,
      default: "day"
    },
    maximumView: {
      type: String,
      default: "year"
    },
    preventDisableDateSelection: {
      type: Boolean,
      default: !0
    },
    theme: {
      default: "green",
      type: String
    }
  },
  emits: ["show-year-calendar", "changed-month", "show-month-calendar", "selected-disabled", "select-date"],
  setup(e, { emit: t }) {
    function a(u) {
      u.isDisabled ? (t("selected-disabled", u), e.preventDisableDateSelection || t("select-date", u)) : t("select-date", u);
    }
    function n() {
      t("show-month-calendar");
    }
    function s() {
      t("show-year-calendar");
    }
    function r(u) {
      const m = e.pageDate;
      On(m, R(m) + u), t("changed-month", m);
    }
    function i() {
      const u = e.disabledDates;
      if (!u || !u.to)
        return !1;
      const m = e.pageDate;
      return R(u.to) >= R(m) && p(u.to) >= p(m);
    }
    function o() {
      i() || r(-1);
    }
    function h() {
      const u = e.disabledDates;
      if (!u || !u.from)
        return !1;
      const m = e.pageDate;
      return R(u.from) <= R(m) && p(u.from) <= p(m);
    }
    function g() {
      h() || r(1);
    }
    function b(u) {
      const m = he(e.selectedDate);
      return e.selectedDate ? wt(m, u) : !1;
    }
    function F(u) {
      let m = !1;
      const w = e.disabledDates;
      return w ? typeof w > "u" ? !1 : (typeof w.dates < "u" && w.dates.forEach((Fe) => {
        wt(u, Fe) && (m = !0);
      }), typeof w.to < "u" && w.to && Go(u, w.to) && (m = !0), typeof w.from < "u" && w.from && zo(u, w.from) && (m = !0), typeof w.days < "u" && w.days.indexOf(ce(u)) !== -1 && (m = !0), typeof w.daysOfMonth < "u" && w.daysOfMonth.indexOf(X(u)) !== -1 && (m = !0), typeof w.customPredictor == "function" && w.customPredictor(u) && (m = !0), m) : m;
    }
    function V(u) {
      return typeof u < "u" && u;
    }
    function j(u) {
      const m = e.highlighted;
      if (!(m && m.includeDisabled) && F(u))
        return !1;
      let w = !1;
      return typeof m > "u" ? !1 : (typeof m.dates < "u" && m.dates.forEach((Fe) => {
        wt(u, Fe) && (w = !0);
      }), V(m.from) && V(m.to) && (w = u >= m.from && u <= m.to), typeof m.days < "u" && m.days.indexOf(ce(u)) !== -1 && (w = !0), typeof m.daysOfMonth < "u" && m.daysOfMonth.indexOf(X(u)) !== -1 && (w = !0), typeof m.customPredictor == "function" && m.customPredictor(u) && (w = !0), w);
    }
    function ue(u) {
      return {
        selected: u.isSelected,
        disabled: u.isDisabled,
        highlighted: u.isHighlighted,
        today: u.isToday,
        weekend: u.isWeekend,
        sat: u.isSaturday,
        sun: u.isSunday,
        "highlight-start": u.isHighlightStart,
        "highlight-end": u.isHighlightEnd
      };
    }
    function se(u) {
      const m = e.highlighted;
      return m ? j(u) && m.from instanceof Date && p(m.from) === p(u) && R(m.from) === R(u) && X(m.from) === X(u) : !1;
    }
    function de(u) {
      const m = e.highlighted;
      return m ? j(u) && m.to instanceof Date && p(m.to) === p(u) && R(m.to) === R(u) && X(m.to) === X(u) : !1;
    }
    const J = v(() => {
      if (e.mondayFirst) {
        const u = e.translation && e.translation.days && e.translation.days.slice();
        return u.push(u.shift()), u;
      }
      return e.translation && e.translation.days;
    }), Q = v(() => {
      const u = e.pageDate, m = e.useUtc ? new Date(Date.UTC(u.getUTCFullYear(), u.getUTCMonth(), 1)) : new Date(u.getFullYear(), u.getMonth(), 1, u.getHours(), u.getMinutes());
      return e.mondayFirst ? ce(m) > 0 ? ce(m) - 1 : 6 : ce(m);
    }), K = v(() => {
      const u = e.pageDate, m = [], w = e.useUtc ? new Date(Date.UTC(u.getUTCFullYear(), u.getUTCMonth(), 1)) : new Date(u.getFullYear(), u.getMonth(), 1, u.getHours(), u.getMinutes()), Fe = Jo(p(w), R(w));
      for (let qe = 0; qe < Fe; qe += 1)
        m.push({
          date: X(w),
          timestamp: w.getTime(),
          isSelected: b(w),
          isDisabled: F(w),
          isHighlighted: j(w),
          isHighlightStart: se(w),
          isHighlightEnd: de(w),
          isToday: wt(w, /* @__PURE__ */ new Date()),
          isWeekend: ce(w) === 0 || ce(w) === 6,
          isSaturday: ce(w) === 6,
          isSunday: ce(w) === 0
        }), Mt(w, X(w) + 1);
      return m;
    }), D = v(() => {
      const u = e.fullMonthName ? e.translation && e.translation.months : e.translation && e.translation.monthsAbbr;
      return $t(R(e.pageDate), u);
    }), c = v(() => {
      const u = e.translation && e.translation.months;
      return dt(R(e.pageDate), u);
    }), Y = v(() => {
      const u = e.translation && e.translation.yearSuffix;
      return `${p(e.pageDate)}${u}`;
    }), P = v(() => (e.translation && e.translation.ymd && e.translation && e.translation.ymd) === !0), Ce = v(() => e.isRtl ? h() : i()), Je = v(() => e.isRtl ? i() : h()), jt = v(() => {
      const u = he(e.selectedDate);
      return e.selectedDate ? Lt(u, e.translation && e.translation.daysNames) : null;
    }), Ze = v(() => {
      const u = he(e.selectedDate);
      return e.selectedDate ? X(u) : null;
    }), Et = v(() => !(e.minimumView === e.maximumView && (e.minimumView !== "day" || e.maximumView !== "day")));
    return {
      isDefined: V,
      showMonthCalendar: n,
      daysOfWeek: J,
      blankDays: Q,
      isYmd: P,
      days: K,
      currMonthName: D,
      currYearName: Y,
      isLeftNavDisabled: Ce,
      isRightNavDisabled: Je,
      selectDate: a,
      previousMonth: o,
      nextMonth: g,
      dayClasses: ue,
      monthName: c,
      getDayName: jt,
      getDisplayDate: Ze,
      showYearCalendar: s,
      isNextMonthDisabled: h,
      ifDifferentViews: Et,
      isSelectedDate: b,
      isDisabledDate: F,
      isHighlightedDate: j,
      isHighlightStart: se,
      isHighlightEnd: de
    };
  }
}), cl = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar"
}, fl = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar-day"
}, hl = { class: "vuejs3-datepicker__calendar-actionarea" }, ml = ["innerHTML", "onClick"];
function yl(e, t, a, n, s, r) {
  return Tt((k(), T("div", {
    class: I(["vuejs3-datepicker__calendar", `vuejs3-${e.theme}`, e.calendarClass]),
    style: sa(e.calendarStyle),
    onMousedown: t[4] || (t[4] = rt(() => {
    }, ["prevent"]))
  }, [
    q(e.$slots, "customCalendarHeader"),
    e.ifDifferentViews && e.selectedDate ? (k(), T("section", cl, [
      A("p", {
        class: "vuejs3-datepicker__calendar-topbar-year",
        onClick: t[0] || (t[0] = (...i) => e.showYearCalendar && e.showYearCalendar(...i))
      }, $(e.currYearName), 1),
      q(e.$slots, "formatDateTopBar", {}, () => [
        e.selectedDate ? (k(), T("p", fl, $(e.getDayName) + " " + $(e.getDisplayDate) + " " + $(e.monthName), 1)) : G("", !0)
      ])
    ])) : G("", !0),
    A("div", hl, [
      A("header", null, [
        A("span", {
          onClick: t[1] || (t[1] = (i) => e.isRtl ? e.nextMonth() : e.previousMonth()),
          class: I(["prev", { disabled: e.isLeftNavDisabled }])
        }, "<", 2),
        A("span", {
          class: I(["day__month_btn", e.allowedToShowView("month") ? "up" : ""]),
          onClick: t[2] || (t[2] = (...i) => e.showMonthCalendar && e.showMonthCalendar(...i))
        }, $(e.isYmd ? e.currYearName : e.currMonthName) + " " + $(e.isYmd ? e.currMonthName : e.currYearName), 3),
        A("span", {
          onClick: t[3] || (t[3] = (i) => e.isRtl ? e.previousMonth() : e.nextMonth()),
          class: I(["next", { disabled: e.isRightNavDisabled }])
        }, ">", 2)
      ]),
      A("div", {
        class: I(e.isRtl ? "flex-rtl" : "")
      }, [
        (k(!0), T(tt, null, at(e.daysOfWeek, (i) => (k(), T("span", {
          class: "cell day-header",
          key: i.timestamp
        }, $(i), 1))), 128)),
        e.blankDays > 0 ? (k(!0), T(tt, { key: 0 }, at(e.blankDays, (i) => (k(), T("span", {
          class: "cell day blank",
          key: i.timestamp
        }))), 128)) : G("", !0),
        (k(!0), T(tt, null, at(e.days, (i) => (k(), T("span", {
          class: I(["cell day", e.dayClasses(i)]),
          key: i.timestamp,
          innerHTML: e.dayCellContent(i),
          onClick: (o) => e.selectDate(i)
        }, null, 10, ml))), 128))
      ], 2)
    ])
  ], 38)), [
    [ra, e.showDayView]
  ]);
}
const gl = /* @__PURE__ */ xe(dl, [["render", yl]]), Dl = Ee({
  name: "PickerMonth",
  props: {
    showMonthView: {
      type: Boolean
    },
    selectedDate: {
      type: [String, Date],
      required: !1,
      default: null
    },
    pageDate: {
      type: Date,
      default: /* @__PURE__ */ new Date()
    },
    disabledDates: {
      type: Object
    },
    calendarClass: {
      type: [String, Object, Array]
    },
    calendarStyle: {
      type: Object
    },
    translation: {
      type: Object
    },
    isRtl: {
      type: Boolean
    },
    allowedToShowView: {
      type: Function,
      required: !0
    },
    useUtc: {
      type: Boolean
    },
    fullMonthName: {
      type: Boolean
    },
    minimumView: {
      type: String,
      default: "day"
    },
    maximumView: {
      type: String,
      default: "year"
    },
    theme: {
      default: "green",
      type: String
    }
  },
  setup(e, { emit: t }) {
    function a(c) {
      c.isDisabled || t("select-month", c);
    }
    function n(c) {
      const Y = e.pageDate;
      na(Y, p(Y) + c), t("changed-year", Y);
    }
    function s() {
      const c = e.disabledDates;
      return !c || !c.to ? !1 : p(c.to) >= p(e.pageDate);
    }
    function r() {
      s() || n(-1);
    }
    function i() {
      const c = e.disabledDates;
      return !c || !c.from ? !1 : p(c.from) <= p(e.pageDate);
    }
    function o() {
      i() || n(1);
    }
    function h() {
      t("show-year-calendar");
    }
    function g(c) {
      const Y = he(e.selectedDate);
      return Y && p(Y) === p(c) && R(Y) === R(c);
    }
    function b(c) {
      let Y = !1;
      const P = e.disabledDates;
      return !P || typeof P > "u" ? !1 : (typeof P.to < "u" && P.to && (R(c) < R(P.to) && p(c) <= p(P.to) || p(c) < p(P.to)) && (Y = !0), typeof P.from < "u" && P.from && (R(c) > R(P.from) && p(c) >= p(P.from) || p(c) > p(P.from)) && (Y = !0), typeof P.customPredictor == "function" && P.customPredictor(c) && (Y = !0), Y);
    }
    const F = v(() => {
      const c = e.pageDate, Y = [], P = e.useUtc ? new Date(Date.UTC(c.getUTCFullYear(), 0, c.getUTCDate())) : new Date(c.getFullYear(), 0, c.getDate(), c.getHours(), c.getMinutes());
      for (let Ce = 0; Ce < 12; Ce += 1)
        Y.push({
          month: dt(Ce, e.translation && e.translation.months),
          timestamp: P.getTime(),
          isSelected: g(P),
          isDisabled: b(P)
        }), On(P, R(P) + 1);
      return Y;
    }), V = v(() => {
      const c = e.translation && e.translation.yearSuffix;
      return `${p(e.pageDate)}${c}`;
    }), j = v(() => e.isRtl ? i() : s()), ue = v(() => e.isRtl ? s() : i()), se = v(() => {
      const c = e.translation && e.translation.months;
      return dt(R(e.pageDate), c);
    }), de = v(() => {
      const c = he(e.selectedDate);
      return e.selectedDate ? X(c) : null;
    }), J = v(() => {
      const c = he(e.selectedDate);
      return e.selectedDate ? Lt(c, e.translation && e.translation.daysNames) : null;
    }), Q = v(() => {
      const c = e.translation && e.translation.yearSuffix;
      return `${p(e.pageDate)}${c}`;
    }), K = v(() => {
      const c = e.fullMonthName ? e.translation && e.translation.months : e.translation && e.translation.monthsAbbr;
      return $t(R(e.pageDate), c);
    }), D = v(() => !(e.minimumView === e.maximumView && (e.minimumView !== "day" || e.maximumView !== "day")));
    return {
      isRightNavDisabled: ue,
      isLeftNavDisabled: j,
      pageYearName: V,
      months: F,
      selectMonth: a,
      previousYear: r,
      nextYear: o,
      currYearName: Q,
      getDisplayDate: de,
      monthName: se,
      showYearCalendar: h,
      getDayName: J,
      currMonthName: K,
      ifDifferentViews: D,
      isSelectedMonth: g,
      isDisabledMonth: b
    };
  }
}), wl = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar"
}, Sl = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar-day"
}, pl = { class: "vuejs3-datepicker__calendar-actionarea" }, vl = ["onClick"];
function Ml(e, t, a, n, s, r) {
  return Tt((k(), T("div", {
    class: I(["vuejs3-datepicker__calendar", `vuejs3-${e.theme}`, e.calendarClass]),
    style: sa(e.calendarStyle),
    onMousedown: t[4] || (t[4] = rt(() => {
    }, ["prevent"]))
  }, [
    q(e.$slots, "customCalendarHeader"),
    e.ifDifferentViews ? (k(), T("section", wl, [
      A("p", {
        class: "vuejs3-datepicker__calendar-topbar-year",
        onClick: t[0] || (t[0] = (...i) => e.showYearCalendar && e.showYearCalendar(...i))
      }, $(e.currYearName), 1),
      q(e.$slots, "formatDateTopBar", {}, () => [
        e.selectedDate ? (k(), T("p", Sl, $(e.getDayName) + " " + $(e.getDisplayDate) + " " + $(e.monthName), 1)) : G("", !0)
      ])
    ])) : G("", !0),
    A("div", pl, [
      A("header", null, [
        A("span", {
          onClick: t[1] || (t[1] = (i) => e.isRtl ? e.nextYear() : e.previousYear()),
          class: I(["prev", { disabled: e.isLeftNavDisabled }])
        }, "<", 2),
        A("span", {
          class: I(["month__year_btn", e.allowedToShowView("year") ? "up" : ""]),
          onClick: t[2] || (t[2] = (...i) => e.showYearCalendar && e.showYearCalendar(...i))
        }, $(e.pageYearName), 3),
        A("span", {
          onClick: t[3] || (t[3] = (i) => e.isRtl ? e.previousYear() : e.nextYear()),
          class: I(["next", { disabled: e.isRightNavDisabled }])
        }, ">", 2)
      ]),
      (k(!0), T(tt, null, at(e.months, (i) => (k(), T("span", {
        class: I(["cell month", { selected: i.isSelected, disabled: i.isDisabled }]),
        key: i.timestamp,
        onClick: rt((o) => e.selectMonth(i), ["stop"])
      }, $(i.month), 11, vl))), 128))
    ])
  ], 38)), [
    [ra, e.showMonthView]
  ]);
}
const bl = /* @__PURE__ */ xe(Dl, [["render", Ml]]), kl = Ee({
  name: "PickerYear",
  props: {
    showYearView: {
      type: Boolean
    },
    selectedDate: {
      type: [String, Date],
      required: !1,
      default: null
    },
    pageDate: {
      type: Date,
      default: /* @__PURE__ */ new Date()
    },
    disabledDates: {
      type: Object
    },
    highlighted: {
      type: Object
    },
    calendarClass: {
      type: [String, Object, Array]
    },
    calendarStyle: {
      type: Object
    },
    translation: {
      type: Object
    },
    isRtl: {
      type: Boolean
    },
    allowedToShowView: {
      type: Function,
      required: !0
    },
    useUtc: {
      type: Boolean
    },
    fullMonthName: {
      type: Boolean
    },
    minimumView: {
      type: String,
      default: "day"
    },
    maximumView: {
      type: String,
      default: "year"
    },
    theme: {
      default: "green",
      type: String
    }
  },
  emits: ["select-year", "changed-decade"],
  setup(e, { emit: t }) {
    function a(D) {
      D.isDisabled || t("select-year", D);
    }
    function n(D) {
      const c = e.pageDate;
      na(c, p(c) + D), t("changed-decade", c);
    }
    function s() {
      const D = e.disabledDates;
      if (!D || !D.to)
        return !1;
      const c = p(D.to), Y = Math.floor(p(e.pageDate) / 10) * 10 - 1;
      return c > Y;
    }
    function r() {
      s() || n(-10);
    }
    function i() {
      const D = e.disabledDates;
      if (!D || !D.from)
        return !1;
      const c = p(D.from), Y = Math.ceil(p(e.pageDate) / 10) * 10;
      return c <= Y;
    }
    function o() {
      i() || n(10);
    }
    function h(D) {
      const c = he(e.selectedDate);
      return e.selectedDate ? p(c) === p(D) : !1;
    }
    function g(D) {
      let c = !1;
      return typeof e.disabledDates > "u" || !e.disabledDates ? !1 : (typeof e.disabledDates.to < "u" && e.disabledDates.to && p(D) < p(e.disabledDates.to) && (c = !0), typeof e.disabledDates.from < "u" && e.disabledDates.from && p(D) > p(e.disabledDates.from) && (c = !0), typeof e.disabledDates.customPredictor == "function" && (c = e.disabledDates.customPredictor(D)), c);
    }
    const b = v(() => {
      const D = e.pageDate, c = [], Y = e.useUtc ? new Date(Date.UTC(Math.floor(D.getUTCFullYear() / 10) * 10, D.getUTCMonth(), D.getUTCDate())) : new Date(Math.floor(D.getFullYear() / 10) * 10, D.getMonth(), D.getDate(), D.getHours(), D.getMinutes());
      for (let P = 0; P < 10; P += 1)
        c.push({
          year: p(Y),
          timestamp: Y.getTime(),
          isSelected: h(Y),
          isDisabled: g(Y)
        }), na(Y, p(Y) + 1);
      return c;
    }), F = v(() => {
      const D = Math.floor(p(e.pageDate) / 10) * 10, c = D + 9, Y = e.translation && e.translation.yearSuffix;
      return `${D} - ${c}${Y}`;
    }), V = v(() => e.isRtl ? i() : s()), j = v(() => e.isRtl ? s() : i()), ue = v(() => {
      const D = he(e.selectedDate);
      return e.selectedDate ? Lt(D, e.translation && e.translation.daysNames) : null;
    }), se = v(() => {
      const D = e.translation && e.translation.months;
      return dt(R(e.pageDate), D);
    }), de = v(() => {
      const D = he(e.selectedDate);
      return e.selectedDate ? X(D) : null;
    }), J = v(() => {
      const D = e.translation && e.translation.yearSuffix;
      return `${p(e.pageDate)}${D}`;
    }), Q = v(() => {
      const D = e.fullMonthName ? e.translation && e.translation.months : e.translation && e.translation.monthsAbbr;
      return $t(R(e.pageDate), D);
    }), K = v(() => !(e.minimumView === e.maximumView && (e.minimumView !== "day" || e.maximumView !== "day")));
    return {
      isRightNavDisabled: j,
      isLeftNavDisabled: V,
      getPageDecade: F,
      years: b,
      nextDecade: o,
      previousDecade: r,
      selectYear: a,
      getDayName: ue,
      monthName: se,
      getDisplayDate: de,
      currYearName: J,
      currMonthName: Q,
      ifDifferentViews: K,
      // methods
      isNextDecadeDisabled: i,
      isPreviousDecadeDisabled: s,
      isDisabledYear: g
    };
  }
}), _l = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar"
}, Nl = { class: "vuejs3-datepicker__calendar-topbar-year" }, Yl = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar-day"
}, Tl = { class: "vuejs3-datepicker__calendar-actionarea" }, Ol = ["onClick"];
function Cl(e, t, a, n, s, r) {
  return Tt((k(), T("div", {
    class: I(["vuejs3-datepicker__calendar", `vuejs3-${e.theme}`, e.calendarClass]),
    style: sa(e.calendarStyle),
    onMousedown: t[2] || (t[2] = rt(() => {
    }, ["prevent"]))
  }, [
    q(e.$slots, "customCalendarHeader"),
    e.ifDifferentViews && e.selectedDate ? (k(), T("section", _l, [
      A("p", Nl, $(e.currYearName), 1),
      q(e.$slots, "formatDateTopBar", {}, () => [
        e.selectedDate ? (k(), T("p", Yl, $(e.getDayName) + " " + $(e.getDisplayDate) + " " + $(e.monthName), 1)) : G("", !0)
      ])
    ])) : G("", !0),
    A("div", Tl, [
      A("header", null, [
        A("span", {
          onClick: t[0] || (t[0] = (i) => e.isRtl ? e.nextDecade() : e.previousDecade()),
          class: I(["prev", { disabled: e.isLeftNavDisabled }])
        }, "<", 2),
        A("span", null, $(e.getPageDecade), 1),
        A("span", {
          onClick: t[1] || (t[1] = (i) => e.isRtl ? e.previousDecade() : e.nextDecade()),
          class: I(["next", { disabled: e.isRightNavDisabled }])
        }, ">", 2)
      ]),
      (k(!0), T(tt, null, at(e.years, (i) => (k(), T("span", {
        class: I(["cell year", { selected: i.isSelected, disabled: i.isDisabled }]),
        key: i.timestamp,
        onClick: rt((o) => e.selectYear(i), ["stop"])
      }, $(i.year), 11, Ol))), 128))
    ])
  ], 38)), [
    [ra, e.showYearView]
  ]);
}
const Fl = /* @__PURE__ */ xe(kl, [["render", Cl]]), Vl = () => {
  const e = "العربية";
  return {
    months: [
      "كانون الثاني",
      "شباط",
      "آذار",
      "نيسان",
      "ايار",
      "حزيران",
      "تموز",
      "آب",
      "أيلول",
      "تشرين الاول",
      "تشرين الثاني",
      "كانون الاول"
    ],
    monthsAbbr: ["كانون الثاني", "شباط", "آذار", "نيسان", "ايار", "حزيران", "تموز", "آب", "أيلول", "تشرين الاول", "تشرين الثاني", "كانون الاول"],
    days: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !0,
    langName: e,
    daysNames: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
  };
}, Pl = () => {
  const e = "Afrikaans", t = [
    "Januarie",
    "Februarie",
    "Maart",
    "April",
    "Mei",
    "Junie",
    "Julie",
    "Augustus",
    "September",
    "Oktober",
    "November",
    "Desember"
  ], a = ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"], n = ["So.", "Ma.", "Di.", "Wo.", "Do.", "Vr.", "Sa."];
  return {
    months: t,
    monthsAbbr: a,
    days: n,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    language: e,
    langName: e,
    daysNames: n
  };
}, Rl = () => {
  const e = "German";
  return {
    months: [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember"
    ],
    monthsAbbr: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
    days: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
  };
}, Wl = () => {
  const e = "English";
  return {
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    monthsAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  };
}, Al = () => {
  const e = "Español";
  return {
    months: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ],
    monthsAbbr: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    days: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
  };
}, Il = () => {
  const e = "Français";
  return {
    months: [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre"
    ],
    monthsAbbr: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jui", "Juil", "Aoû", "Sep", "Oct", "Nov", "Déc"],
    days: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
  };
}, Hl = () => {
  const e = "Hindi";
  return {
    months: [
      "जनवरी",
      "फ़रवरी",
      "मार्च",
      "अप्रैल",
      "मई",
      "जून",
      "जुलाई",
      "अगस्त",
      "सितंबर",
      "अक्टूबर",
      "नवंबर",
      "दिसंबर"
    ],
    monthsAbbr: ["जन", "फ़र", "मार्च", "अप्रै", "मई", "जून", "जुला", "अगस्त", "सितं", "अक्टू", "नवं", "दिसं"],
    days: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"]
  };
}, Ul = () => {
  const e = "Japanese";
  return {
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    monthsAbbr: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    days: ["日", "月", "火", "水", "木", "金", "土"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
  };
}, Ll = () => {
  const e = "Dutch", t = [
    "januari",
    "februari",
    "maart",
    "april",
    "mei",
    "juni",
    "juli",
    "augustus",
    "september",
    "oktober",
    "november",
    "december"
  ], a = ["jan.", "feb.", "mrt.", "apr.", "mei", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "dec."], n = ["zo.", "ma.", "di.", "wo.", "do.", "vr.", "za."];
  return {
    months: t,
    monthsAbbr: a,
    days: n,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    language: e,
    daysNames: n
  };
}, $l = () => {
  const e = "Português";
  return {
    months: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    ],
    monthsAbbr: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    days: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: [
      "Domingo",
      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sábado"
    ]
  };
}, jl = () => {
  const e = "Italian";
  return {
    months: [
      "Gennaio",
      "Febbraio",
      "Marzo",
      "Aprile",
      "Maggio",
      "Giugno",
      "Luglio",
      "Agosto",
      "Settembre",
      "Ottobre",
      "Novembre",
      "Dicembre"
    ],
    monthsAbbr: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
    days: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Gioved", "Venerdì", "Sabato"]
  };
}, El = () => {
  const e = "Polish";
  return {
    months: [
      "Styczeń",
      "Luty",
      "Marzec",
      "Kwiecień",
      "Maj",
      "Czerwiec",
      "Lipiec",
      "Sierpień",
      "Wrzesień",
      "Październik",
      "Listopad",
      "Grudzień"
    ],
    monthsAbbr: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"],
    days: ["Nd", "Pn", "Wt", "Śr", "Cz", "Pt", "So"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"]
  };
}, Bl = () => {
  const e = "Russian";
  return {
    months: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь"
    ],
    monthsAbbr: ["Янв.", "Фев.", "Мар.", "Апр.", "Май", "Июн.", "Июл.", "Авг.", "Сен.", "Окт.", "Ноя.", "Дек."],
    days: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
  };
}, zl = () => {
  const e = "Türkçe";
  return {
    months: [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık"
    ],
    monthsAbbr: ["Oca", "Şub", "Mar", "Nis", " May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
    days: ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Pzr"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
  };
}, Gl = () => {
  const e = "Vietnamese";
  return {
    months: [
      "Tháng 1",
      "Tháng 2",
      "Tháng 3",
      "Tháng 4",
      "Tháng 5",
      "Tháng 6",
      "Tháng 7",
      "Tháng 8",
      "Tháng 9",
      "Tháng 10",
      "Tháng 11",
      "Tháng 12"
    ],
    monthsAbbr: [
      "Tháng 1",
      "Tháng 2",
      "Tháng 3",
      "Tháng 4",
      "Tháng 5",
      "Tháng 6",
      "Tháng 7",
      "Tháng 8",
      "Tháng 9",
      "Tháng 10",
      "Tháng 11",
      "Tháng 12"
    ],
    days: ["CN", "H", "B", "T", "N", "S", "B"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: ["CN", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"]
  };
}, xl = () => {
  const e = "Bulgarian";
  return {
    months: [
      "Януари",
      "Февруари",
      "Март",
      "Април",
      "Май",
      "Юни",
      "Юли",
      "Август",
      "Септември",
      "Октомври",
      "Ноември",
      "Декември"
    ],
    monthsAbbr: ["Яну", "Фев", "Мар", "Апр", "Май", "Юни", "Юли", "Авг", "Сеп", "Окт", "Ное", "Дек"],
    days: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"]
  };
}, Jl = () => {
  const e = "Arabic-Tunisia", t = [
    "جانفي",
    "فيفري",
    "مارس",
    "أفريل",
    "ماي",
    "جوان",
    "جويلية",
    "أوت",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر"
  ];
  return {
    months: t,
    monthsAbbr: t,
    days: ["أحد", "أثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !0,
    langName: e,
    daysNames: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
  };
}, Zl = () => {
  const e = "Indonesia";
  return {
    months: [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "Nopember",
      "Desember"
    ],
    monthsAbbr: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nop", "Des"],
    days: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
  };
}, ql = () => {
  const e = "kr";
  return {
    months: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월"
    ],
    monthsAbbr: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월"
    ],
    days: [
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
      "일요일"
    ],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: [
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
      "일요일"
    ]
  };
}, Ql = () => {
  const e = "繁體中文";
  return {
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    monthsAbbr: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    days: ["日", "一", "二", "三", "四", "五", "六"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    daysNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
  };
}, Kl = {
  ar: Vl(),
  af: Pl(),
  arTn: Jl(),
  hi: Hl(),
  ja: Ul(),
  de: Rl(),
  en: Wl(),
  es: Al(),
  fr: Il(),
  nl: Ll(),
  pt: $l(),
  it: jl(),
  pl: El(),
  ru: Bl(),
  tr: zl(),
  zh_TW: Ql(),
  vn: Gl(),
  bg: xl(),
  kr: ql(),
  id: Zl()
}, Xl = Ee({
  name: "Datepicker",
  components: {
    DateInput: ul,
    PickerDay: gl,
    PickerMonth: bl,
    PickerYear: Fl
  },
  directives: {
    clickoutside: An
  },
  props: {
    modelValue: {
      type: [Date, String, Number]
    },
    value: {
      type: [Date, String, Number]
    },
    format: {
      type: [String, Function],
      default: "dd MMM yyyy"
    },
    language: {
      type: String,
      default: "en"
    },
    openDate: {
      validator: (e) => Qo(e),
      type: Date,
      default: /* @__PURE__ */ new Date()
    },
    minimumView: {
      type: String,
      default: "day"
    },
    maximumView: {
      type: String,
      default: "year"
    },
    name: {
      type: String
    },
    id: {
      type: String
    },
    dayCellContent: {
      type: Function
    },
    fullMonthName: {
      type: Boolean
    },
    disabledDates: {
      type: Object
    },
    highlighted: {
      type: Object
    },
    placeholder: {
      type: String
    },
    inline: {
      type: Boolean
    },
    calendarClass: {
      type: [String, Object, Array]
    },
    inputClass: {
      type: [String, Object, Array]
    },
    wrapperClass: {
      type: [String, Object, Array]
    },
    mondayFirst: {
      type: Boolean,
      default: !0
    },
    clearButton: {
      type: Boolean
    },
    clearButtonIcon: {
      type: String
    },
    calendarButton: {
      type: Boolean
    },
    calendarButtonIcon: {
      type: String
    },
    calendarButtonIconContent: {
      type: String
    },
    addBootstrapClass: {
      type: Boolean
    },
    initialView: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    required: {
      type: Boolean
    },
    typeable: {
      type: Boolean
    },
    useUtc: {
      type: Boolean
    },
    hideInput: {
      type: Boolean,
      default: !0
    },
    preventDisableDateSelection: {
      type: Boolean,
      default: !0
    },
    iconColor: {
      default: "black",
      type: String
    },
    iconHeight: {
      default: 16,
      type: [String, Number]
    },
    iconWidth: {
      default: 16,
      type: [String, Number]
    },
    theme: {
      default: "green",
      type: String
    }
  },
  emits: [
    "input",
    "cleared",
    "update:modelValue",
    "opened",
    "closed",
    "changed-month",
    "changed-year",
    "changed-day",
    "selected",
    "selected-disabled"
  ],
  setup(e, { emit: t }) {
    const a = new Date(e.modelValue), n = we(0), s = we(null);
    e.modelValue && xo(a) && (n.value = a.getTime(), s.value = a), e.openDate && (n.value = Mt(new Date(e.openDate), 1));
    const r = we(!1), i = we(!1), o = we(!1), h = we(0), g = we(/* @__PURE__ */ new Date()), b = v(() => e.initialView ? e.initialView : e.minimumView), F = v(() => new Date(n.value)), V = v(() => Kl[e.language]), j = v(() => !!e.inline), ue = v(() => ({
      position: j.value ? "static" : void 0
    })), se = v(() => r.value || i.value || o.value), de = v(() => V.value && V.value.rtl === !0);
    function J(S) {
      S || (e.openDate ? S = new Date(e.openDate) : S = /* @__PURE__ */ new Date()), n.value = Mt(new Date(S), 1);
    }
    function Q(S) {
      const z = ["day", "month", "year"], yt = z.indexOf(e.minimumView), Vn = z.indexOf(e.maximumView), Ta = z.indexOf(S);
      return Ta >= yt && Ta <= Vn;
    }
    function K(S) {
      r.value = !1, i.value = !1, o.value = !1, j.value || S && t("closed");
    }
    function D() {
      return Q("day") ? (K(), r.value = !0, !0) : !1;
    }
    function c() {
      return Q("month") ? (K(), i.value = !0, !0) : !1;
    }
    function Y() {
      return Q("year") ? (K(), o.value = !0, !0) : !1;
    }
    function P() {
      const S = b.value;
      if (!Q(S))
        throw new Error(
          `initialView '${S}' cannot be rendered based on minimum '${e.minimumView}' and maximum '${e.maximumView}'`
        );
      switch (S) {
        case "year":
          Y();
          break;
        case "month":
          c();
          break;
        default:
          D();
          break;
      }
    }
    function Ce() {
      return e.disabled || j.value ? !1 : se.value ? K(!0) : (P(), t("opened"), !0);
    }
    function Je(S) {
      if (!Number.isNaN(S)) {
        const z = new Date(S);
        s.value = z, J(z), t("selected", z), t("update:modelValue", z), t("input", z);
      }
    }
    function jt() {
      s.value = null, J(), t("selected", null), e.modelValue ? t("update:modelValue", null) : t("input", null), t("cleared");
    }
    function Ze(S) {
      Je(S.timestamp), j.value || K(!0), g.value = /* @__PURE__ */ new Date();
    }
    function Et(S) {
      t("selected-disabled", S);
    }
    function u(S) {
      const z = new Date(S.timestamp);
      Q("day") ? (J(z), D()) : Ze(S), t("changed-month", S);
    }
    function m(S) {
      const z = new Date(S.timestamp);
      Q("month") ? (J(z), c()) : Ze(S), t("changed-year", S);
    }
    function w(S) {
      let z = S;
      if (typeof S == "string" || typeof S == "number") {
        const yt = new Date(S);
        z = Number.isNaN(yt.valueOf()) ? "" : yt;
      }
      if (!z) {
        J(), s.value = null;
        return;
      }
      s.value = z, J(S);
    }
    function Fe(S) {
      J(S), t("changed-month", S);
    }
    function qe(S) {
      Je(S.getTime());
    }
    function Cn() {
      e.value && w(e.value), j.value && P();
    }
    function Fn() {
      K();
    }
    return Xe(
      () => e.modelValue,
      (S) => {
        w(S);
      }
    ), Xe(
      () => e.value,
      (S) => {
        w(S);
      }
    ), Xe(
      () => e.openDate,
      () => {
        J();
      }
    ), Xe(
      () => e.initialView,
      () => {
        P();
      }
    ), Cn(), {
      pageTimestamp: n,
      selectedDate: s,
      showDayView: r,
      showMonthView: i,
      showYearView: o,
      calendarHeight: h,
      resetTypedDate: g,
      // computed
      pageDate: F,
      translation: V,
      calendarStyle: ue,
      isOpen: se,
      isInline: j,
      isRtl: de,
      // methods
      setTypedDate: qe,
      handleChangedMonthFromDayPicker: Fe,
      selectYear: m,
      selectMonth: u,
      selectDisabledDate: Et,
      clearDate: jt,
      showCalendar: Ce,
      close: K,
      allowedToShowView: Q,
      showYearCalendar: Y,
      showMonthCalendar: c,
      setPageDate: J,
      selectDate: Ze,
      closeOnClickOutside: Fn,
      showDayCalendar: D,
      computedInitialView: b,
      setDate: Mt,
      setDate1: Je,
      setValue: w
    };
  }
});
function eu(e, t, a, n, s, r) {
  const i = et("date-input"), o = et("picker-day"), h = et("picker-month"), g = et("picker-year"), b = Rn("clickoutside");
  return Tt((k(), T("div", {
    class: I(["vuejs3-datepicker", [e.isRtl ? "rtl" : "", `vuejs3-${e.theme}`, e.wrapperClass]])
  }, [
    Zt(i, {
      selectedDate: e.selectedDate,
      resetTypedDate: e.resetTypedDate,
      format: e.format,
      translation: e.translation,
      inline: e.inline,
      id: e.id,
      name: e.name,
      fullMonthName: e.fullMonthName,
      openDate: e.openDate,
      placeholder: e.placeholder,
      inputClass: e.inputClass,
      typeable: e.typeable,
      clearButton: e.clearButton,
      clearButtonIcon: e.clearButtonIcon,
      calendarButton: e.calendarButton,
      calendarButtonIcon: e.calendarButtonIcon,
      calendarButtonIconContent: e.calendarButtonIconContent,
      disabled: e.disabled,
      required: e.required,
      addBootstrapClass: e.addBootstrapClass,
      "use-utc": e.useUtc,
      onShowCalendar: e.showCalendar,
      onCloseCalendar: e.close,
      onTypedDate: e.setTypedDate,
      onClearDate: e.clearDate,
      minimumView: e.minimumView,
      maximumView: e.maximumView,
      hideInput: e.hideInput,
      iconWidth: e.iconWidth,
      iconHeight: e.iconHeight,
      iconColor: e.iconColor,
      theme: e.theme
    }, {
      belowDate: Ve(() => [
        q(e.$slots, "belowDate")
      ]),
      _: 3
    }, 8, ["selectedDate", "resetTypedDate", "format", "translation", "inline", "id", "name", "fullMonthName", "openDate", "placeholder", "inputClass", "typeable", "clearButton", "clearButtonIcon", "calendarButton", "calendarButtonIcon", "calendarButtonIconContent", "disabled", "required", "addBootstrapClass", "use-utc", "onShowCalendar", "onCloseCalendar", "onTypedDate", "onClearDate", "minimumView", "maximumView", "hideInput", "iconWidth", "iconHeight", "iconColor", "theme"]),
    e.allowedToShowView("day") ? (k(), Bt(o, {
      key: 0,
      pageDate: e.pageDate,
      selectedDate: e.selectedDate,
      showDayView: e.showDayView,
      fullMonthName: e.fullMonthName,
      allowedToShowView: e.allowedToShowView,
      disabledDates: e.disabledDates,
      highlighted: e.highlighted,
      calendarClass: e.calendarClass,
      calendarStyle: e.calendarStyle,
      translation: e.translation,
      pageTimestamp: e.pageTimestamp,
      isRtl: e.isRtl,
      mondayFirst: e.mondayFirst,
      dayCellContent: e.dayCellContent,
      onChangedMonth: e.handleChangedMonthFromDayPicker,
      onSelectDate: e.selectDate,
      onShowMonthCalendar: e.showMonthCalendar,
      onSelectedDisabled: e.selectDisabledDate,
      onShowYearCalendar: e.showYearCalendar,
      minimumView: e.minimumView,
      maximumView: e.maximumView,
      preventDisableDateSelection: e.preventDisableDateSelection,
      theme: e.theme
    }, {
      customCalendarHeader: Ve(() => [
        q(e.$slots, "customCalendarHeader")
      ]),
      formatDateTopBar: Ve(() => [
        q(e.$slots, "formatDateTopBar")
      ]),
      _: 3
    }, 8, ["pageDate", "selectedDate", "showDayView", "fullMonthName", "allowedToShowView", "disabledDates", "highlighted", "calendarClass", "calendarStyle", "translation", "pageTimestamp", "isRtl", "mondayFirst", "dayCellContent", "onChangedMonth", "onSelectDate", "onShowMonthCalendar", "onSelectedDisabled", "onShowYearCalendar", "minimumView", "maximumView", "preventDisableDateSelection", "theme"])) : G("", !0),
    e.allowedToShowView("month") ? (k(), Bt(h, {
      key: 1,
      pageDate: e.pageDate,
      selectedDate: e.selectedDate,
      showMonthView: e.showMonthView,
      allowedToShowView: e.allowedToShowView,
      disabledDates: e.disabledDates,
      calendarClass: e.calendarClass,
      calendarStyle: e.calendarStyle,
      translation: e.translation,
      isRtl: e.isRtl,
      "use-utc": e.useUtc,
      fullMonthName: e.fullMonthName,
      onSelectMonth: e.selectMonth,
      onShowYearCalendar: e.showYearCalendar,
      onChangedYear: e.setPageDate,
      minimumView: e.minimumView,
      maximumView: e.maximumView,
      theme: e.theme
    }, {
      customCalendarHeader: Ve(() => [
        q(e.$slots, "customCalendarHeader")
      ]),
      formatDateTopBar: Ve(() => [
        q(e.$slots, "formatDateTopBar")
      ]),
      _: 3
    }, 8, ["pageDate", "selectedDate", "showMonthView", "allowedToShowView", "disabledDates", "calendarClass", "calendarStyle", "translation", "isRtl", "use-utc", "fullMonthName", "onSelectMonth", "onShowYearCalendar", "onChangedYear", "minimumView", "maximumView", "theme"])) : G("", !0),
    e.allowedToShowView("year") ? (k(), Bt(g, {
      key: 2,
      pageDate: e.pageDate,
      selectedDate: e.selectedDate,
      showYearView: e.showYearView,
      allowedToShowView: e.allowedToShowView,
      disabledDates: e.disabledDates,
      calendarClass: e.calendarClass,
      calendarStyle: e.calendarStyle,
      translation: e.translation,
      isRtl: e.isRtl,
      "use-utc": e.useUtc,
      onSelectYear: e.selectYear,
      onChangedDecade: e.setPageDate,
      fullMonthName: e.fullMonthName,
      minimumView: e.minimumView,
      maximumView: e.maximumView,
      theme: e.theme
    }, {
      customCalendarHeader: Ve(() => [
        q(e.$slots, "customCalendarHeader")
      ]),
      formatDateTopBar: Ve(() => [
        q(e.$slots, "formatDateTopBar")
      ]),
      _: 3
    }, 8, ["pageDate", "selectedDate", "showYearView", "allowedToShowView", "disabledDates", "calendarClass", "calendarStyle", "translation", "isRtl", "use-utc", "onSelectYear", "onChangedDecade", "fullMonthName", "minimumView", "maximumView", "theme"])) : G("", !0)
  ], 2)), [
    [b, {
      handler: e.inline ? null : e.closeOnClickOutside
    }]
  ]);
}
const au = /* @__PURE__ */ xe(Xl, [["render", eu]]);
export {
  au as default
};
