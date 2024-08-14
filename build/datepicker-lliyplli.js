import './DatePickerComponent.css';
var at = Object.defineProperty;
var nt = (e, n, t) => n in e ? at(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var d = (e, n, t) => (nt(e, typeof n != "symbol" ? n + "" : n, t), t);
import { defineComponent as le, openBlock as v, createElementBlock as k, normalizeClass as V, createElementVNode as O, ref as te, computed as b, watch as fe, resolveComponent as he, createTextVNode as rt, toDisplayString as B, createCommentVNode as J, createVNode as Oe, renderSlot as x, withDirectives as ke, normalizeStyle as Fe, withModifiers as be, Fragment as ye, renderList as we, vShow as Be, resolveDirective as st, withCtx as re, createBlock as Se } from "vue";
const ot = ["click"], ge = [], it = {
  instances: ge,
  beforeMount: Ie,
  update: (e, n) => {
    JSON.stringify(n.value) !== JSON.stringify(n.oldValue) && Ie(e, n);
  },
  unmounted: qe
};
function Ie(e, { value: n }) {
  qe(e);
  const t = n, a = typeof t == "function";
  if (!a && !(typeof t == "object") || !(t.isActive !== !1))
    return;
  const o = a ? t : t.handler, l = lt({ el: e, handler: o });
  l.eventHandlers.forEach(
    ({ event: y, handler: D }) => setTimeout(() => document.addEventListener(y, D, !1), 0)
  ), ge.push(l);
}
function qe(e) {
  const n = ge.findIndex((a) => a.el === e);
  if (n === -1)
    return;
  ge[n].eventHandlers.forEach(
    ({ event: a, handler: r }) => document.removeEventListener(a, r, !1)
  ), ge.splice(n, 1);
}
function lt({ el: e, handler: n }) {
  return {
    el: e,
    eventHandlers: ot.map((t) => ({
      event: t,
      handler: (a) => ut({ event: a, el: e, handler: n })
    }))
  };
}
function ut({ event: e, el: n, handler: t }) {
  const a = e.path || (e.composedPath ? e.composedPath() : void 0);
  if (a ? a.indexOf(n) < 0 : !n.contains(e.target))
    return t && t(e, n);
}
function U(e) {
  const n = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && n === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || n === "[object Number]" || typeof e == "string" || n === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function $(e, n) {
  return e instanceof Date ? new e.constructor(n) : new Date(n);
}
function Le(e, n) {
  const t = U(e);
  return isNaN(n) ? $(e, NaN) : (n && t.setDate(t.getDate() + n), t);
}
const Je = 6048e5, dt = 6e4, ct = 36e5, mt = 1e3;
let ft = {};
function pe() {
  return ft;
}
function ae(e, n) {
  var l, y, D, p;
  const t = pe(), a = (n == null ? void 0 : n.weekStartsOn) ?? ((y = (l = n == null ? void 0 : n.locale) == null ? void 0 : l.options) == null ? void 0 : y.weekStartsOn) ?? t.weekStartsOn ?? ((p = (D = t.locale) == null ? void 0 : D.options) == null ? void 0 : p.weekStartsOn) ?? 0, r = U(e), s = r.getDay(), o = (s < a ? 7 : 0) + s - a;
  return r.setDate(r.getDate() - o), r.setHours(0, 0, 0, 0), r;
}
function ie(e) {
  return ae(e, { weekStartsOn: 1 });
}
function ht(e) {
  const n = U(e), t = n.getFullYear(), a = $(e, 0);
  a.setFullYear(t + 1, 0, 4), a.setHours(0, 0, 0, 0);
  const r = ie(a), s = $(e, 0);
  s.setFullYear(t, 0, 4), s.setHours(0, 0, 0, 0);
  const o = ie(s);
  return n.getTime() >= r.getTime() ? t + 1 : n.getTime() >= o.getTime() ? t : t - 1;
}
function ze(e) {
  const n = U(e), t = new Date(
    Date.UTC(
      n.getFullYear(),
      n.getMonth(),
      n.getDate(),
      n.getHours(),
      n.getMinutes(),
      n.getSeconds(),
      n.getMilliseconds()
    )
  );
  return t.setUTCFullYear(n.getFullYear()), +e - +t;
}
function yt(e) {
  const n = ht(e), t = $(e, 0);
  return t.setFullYear(n, 0, 4), t.setHours(0, 0, 0, 0), ie(t);
}
const wt = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, gt = (e, n, t) => {
  let a;
  const r = wt[e];
  return typeof r == "string" ? a = r : n === 1 ? a = r.one : a = r.other.replace("{{count}}", n.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + a : a + " ago" : a;
};
function Ye(e) {
  return (n = {}) => {
    const t = n.width ? String(n.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const bt = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Dt = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, pt = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Nt = {
  date: Ye({
    formats: bt,
    defaultWidth: "full"
  }),
  time: Ye({
    formats: Dt,
    defaultWidth: "full"
  }),
  dateTime: Ye({
    formats: pt,
    defaultWidth: "full"
  })
}, vt = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Mt = (e, n, t, a) => vt[e];
function ce(e) {
  return (n, t) => {
    const a = t != null && t.context ? String(t.context) : "standalone";
    let r;
    if (a === "formatting" && e.formattingValues) {
      const o = e.defaultFormattingWidth || e.defaultWidth, l = t != null && t.width ? String(t.width) : o;
      r = e.formattingValues[l] || e.formattingValues[o];
    } else {
      const o = e.defaultWidth, l = t != null && t.width ? String(t.width) : e.defaultWidth;
      r = e.values[l] || e.values[o];
    }
    const s = e.argumentCallback ? e.argumentCallback(n) : n;
    return r[s];
  };
}
const Tt = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, kt = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Ct = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
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
  ]
}, Pt = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, St = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Yt = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Ot = (e, n) => {
  const t = Number(e), a = t % 100;
  if (a > 20 || a < 10)
    switch (a % 10) {
      case 1:
        return t + "st";
      case 2:
        return t + "nd";
      case 3:
        return t + "rd";
    }
  return t + "th";
}, Vt = {
  ordinalNumber: Ot,
  era: ce({
    values: Tt,
    defaultWidth: "wide"
  }),
  quarter: ce({
    values: kt,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: ce({
    values: Ct,
    defaultWidth: "wide"
  }),
  day: ce({
    values: Pt,
    defaultWidth: "wide"
  }),
  dayPeriod: ce({
    values: St,
    defaultWidth: "wide",
    formattingValues: Yt,
    defaultFormattingWidth: "wide"
  })
};
function me(e) {
  return (n, t = {}) => {
    const a = t.width, r = a && e.matchPatterns[a] || e.matchPatterns[e.defaultMatchWidth], s = n.match(r);
    if (!s)
      return null;
    const o = s[0], l = a && e.parsePatterns[a] || e.parsePatterns[e.defaultParseWidth], y = Array.isArray(l) ? Bt(l, (M) => M.test(o)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Ft(l, (M) => M.test(o))
    );
    let D;
    D = e.valueCallback ? e.valueCallback(y) : y, D = t.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      t.valueCallback(D)
    ) : D;
    const p = n.slice(o.length);
    return { value: D, rest: p };
  };
}
function Ft(e, n) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && n(e[t]))
      return t;
}
function Bt(e, n) {
  for (let t = 0; t < e.length; t++)
    if (n(e[t]))
      return t;
}
function Ht(e) {
  return (n, t = {}) => {
    const a = n.match(e.matchPattern);
    if (!a)
      return null;
    const r = a[0], s = n.match(e.parsePattern);
    if (!s)
      return null;
    let o = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    o = t.valueCallback ? t.valueCallback(o) : o;
    const l = n.slice(r.length);
    return { value: o, rest: l };
  };
}
const $t = /^(\d+)(th|st|nd|rd)?/i, At = /\d+/i, It = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Wt = {
  any: [/^b/i, /^(a|c)/i]
}, jt = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Et = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Rt = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, qt = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Lt = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Jt = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, zt = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, xt = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Ut = {
  ordinalNumber: Ht({
    matchPattern: $t,
    parsePattern: At,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: me({
    matchPatterns: It,
    defaultMatchWidth: "wide",
    parsePatterns: Wt,
    defaultParseWidth: "any"
  }),
  quarter: me({
    matchPatterns: jt,
    defaultMatchWidth: "wide",
    parsePatterns: Et,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: me({
    matchPatterns: Rt,
    defaultMatchWidth: "wide",
    parsePatterns: qt,
    defaultParseWidth: "any"
  }),
  day: me({
    matchPatterns: Lt,
    defaultMatchWidth: "wide",
    parsePatterns: Jt,
    defaultParseWidth: "any"
  }),
  dayPeriod: me({
    matchPatterns: zt,
    defaultMatchWidth: "any",
    parsePatterns: xt,
    defaultParseWidth: "any"
  })
}, Qt = {
  code: "en-US",
  formatDistance: gt,
  formatLong: Nt,
  formatRelative: Mt,
  localize: Vt,
  match: Ut,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Gt(e) {
  const n = U(e), t = +ie(n) - +yt(n);
  return Math.round(t / Je) + 1;
}
function xe(e, n) {
  var p, M, S, T;
  const t = U(e), a = t.getFullYear(), r = pe(), s = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((M = (p = n == null ? void 0 : n.locale) == null ? void 0 : p.options) == null ? void 0 : M.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((T = (S = r.locale) == null ? void 0 : S.options) == null ? void 0 : T.firstWeekContainsDate) ?? 1, o = $(e, 0);
  o.setFullYear(a + 1, 0, s), o.setHours(0, 0, 0, 0);
  const l = ae(o, n), y = $(e, 0);
  y.setFullYear(a, 0, s), y.setHours(0, 0, 0, 0);
  const D = ae(y, n);
  return t.getTime() >= l.getTime() ? a + 1 : t.getTime() >= D.getTime() ? a : a - 1;
}
function Xt(e, n) {
  var l, y, D, p;
  const t = pe(), a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((y = (l = n == null ? void 0 : n.locale) == null ? void 0 : l.options) == null ? void 0 : y.firstWeekContainsDate) ?? t.firstWeekContainsDate ?? ((p = (D = t.locale) == null ? void 0 : D.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, r = xe(e, n), s = $(e, 0);
  return s.setFullYear(r, 0, a), s.setHours(0, 0, 0, 0), ae(s, n);
}
function Kt(e, n) {
  const t = U(e), a = +ae(t, n) - +Xt(t, n);
  return Math.round(a / Je) + 1;
}
const We = (e, n) => {
  switch (e) {
    case "P":
      return n.date({ width: "short" });
    case "PP":
      return n.date({ width: "medium" });
    case "PPP":
      return n.date({ width: "long" });
    case "PPPP":
    default:
      return n.date({ width: "full" });
  }
}, Ue = (e, n) => {
  switch (e) {
    case "p":
      return n.time({ width: "short" });
    case "pp":
      return n.time({ width: "medium" });
    case "ppp":
      return n.time({ width: "long" });
    case "pppp":
    default:
      return n.time({ width: "full" });
  }
}, Zt = (e, n) => {
  const t = e.match(/(P+)(p+)?/) || [], a = t[1], r = t[2];
  if (!r)
    return We(e, n);
  let s;
  switch (a) {
    case "P":
      s = n.dateTime({ width: "short" });
      break;
    case "PP":
      s = n.dateTime({ width: "medium" });
      break;
    case "PPP":
      s = n.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      s = n.dateTime({ width: "full" });
      break;
  }
  return s.replace("{{date}}", We(a, n)).replace("{{time}}", Ue(r, n));
}, je = {
  p: Ue,
  P: Zt
}, _t = /^D+$/, ea = /^Y+$/, ta = ["D", "DD", "YY", "YYYY"];
function aa(e) {
  return _t.test(e);
}
function na(e) {
  return ea.test(e);
}
function Ee(e, n, t) {
  const a = ra(e, n, t);
  if (console.warn(a), ta.includes(e))
    throw new RangeError(a);
}
function ra(e, n, t) {
  const a = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${n}\`) for formatting ${a} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
function sa() {
  return Object.assign({}, pe());
}
function oa(e) {
  let t = U(e).getDay();
  return t === 0 && (t = 7), t;
}
function ia(e, n) {
  const t = n instanceof Date ? $(n, 0) : new n(0);
  return t.setFullYear(
    e.getFullYear(),
    e.getMonth(),
    e.getDate()
  ), t.setHours(
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  ), t;
}
const la = 10;
class Qe {
  constructor() {
    d(this, "subPriority", 0);
  }
  validate(n, t) {
    return !0;
  }
}
class ua extends Qe {
  constructor(n, t, a, r, s) {
    super(), this.value = n, this.validateValue = t, this.setValue = a, this.priority = r, s && (this.subPriority = s);
  }
  validate(n, t) {
    return this.validateValue(n, this.value, t);
  }
  set(n, t, a) {
    return this.setValue(n, t, this.value, a);
  }
}
class da extends Qe {
  constructor() {
    super(...arguments);
    d(this, "priority", la);
    d(this, "subPriority", -1);
  }
  set(t, a) {
    return a.timestampIsSet ? t : $(t, ia(t, Date));
  }
}
class C {
  run(n, t, a, r) {
    const s = this.parse(n, t, a, r);
    return s ? {
      setter: new ua(
        s.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: s.rest
    } : null;
  }
  validate(n, t, a) {
    return !0;
  }
}
class ca extends C {
  constructor() {
    super(...arguments);
    d(this, "priority", 140);
    d(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(t, a, r) {
    switch (a) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(t, { width: "abbreviated" }) || r.era(t, { width: "narrow" });
      case "GGGGG":
        return r.era(t, { width: "narrow" });
      case "GGGG":
      default:
        return r.era(t, { width: "wide" }) || r.era(t, { width: "abbreviated" }) || r.era(t, { width: "narrow" });
    }
  }
  set(t, a, r) {
    return a.era = r, t.setFullYear(r, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
const A = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, K = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function I(e, n) {
  return e && {
    value: n(e.value),
    rest: e.rest
  };
}
function F(e, n) {
  const t = n.match(e);
  return t ? {
    value: parseInt(t[0], 10),
    rest: n.slice(t[0].length)
  } : null;
}
function Z(e, n) {
  const t = n.match(e);
  if (!t)
    return null;
  if (t[0] === "Z")
    return {
      value: 0,
      rest: n.slice(1)
    };
  const a = t[1] === "+" ? 1 : -1, r = t[2] ? parseInt(t[2], 10) : 0, s = t[3] ? parseInt(t[3], 10) : 0, o = t[5] ? parseInt(t[5], 10) : 0;
  return {
    value: a * (r * ct + s * dt + o * mt),
    rest: n.slice(t[0].length)
  };
}
function Ge(e) {
  return F(A.anyDigitsSigned, e);
}
function H(e, n) {
  switch (e) {
    case 1:
      return F(A.singleDigit, n);
    case 2:
      return F(A.twoDigits, n);
    case 3:
      return F(A.threeDigits, n);
    case 4:
      return F(A.fourDigits, n);
    default:
      return F(new RegExp("^\\d{1," + e + "}"), n);
  }
}
function Te(e, n) {
  switch (e) {
    case 1:
      return F(A.singleDigitSigned, n);
    case 2:
      return F(A.twoDigitsSigned, n);
    case 3:
      return F(A.threeDigitsSigned, n);
    case 4:
      return F(A.fourDigitsSigned, n);
    default:
      return F(new RegExp("^-?\\d{1," + e + "}"), n);
  }
}
function He(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function Xe(e, n) {
  const t = n > 0, a = t ? n : 1 - n;
  let r;
  if (a <= 50)
    r = e || 100;
  else {
    const s = a + 50, o = Math.trunc(s / 100) * 100, l = e >= s % 100;
    r = e + o - (l ? 100 : 0);
  }
  return t ? r : 1 - r;
}
function Ke(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
class ma extends C {
  constructor() {
    super(...arguments);
    d(this, "priority", 130);
    d(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, a, r) {
    const s = (o) => ({
      year: o,
      isTwoDigitYear: a === "yy"
    });
    switch (a) {
      case "y":
        return I(H(4, t), s);
      case "yo":
        return I(
          r.ordinalNumber(t, {
            unit: "year"
          }),
          s
        );
      default:
        return I(H(a.length, t), s);
    }
  }
  validate(t, a) {
    return a.isTwoDigitYear || a.year > 0;
  }
  set(t, a, r) {
    const s = t.getFullYear();
    if (r.isTwoDigitYear) {
      const l = Xe(
        r.year,
        s
      );
      return t.setFullYear(l, 0, 1), t.setHours(0, 0, 0, 0), t;
    }
    const o = !("era" in a) || a.era === 1 ? r.year : 1 - r.year;
    return t.setFullYear(o, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class fa extends C {
  constructor() {
    super(...arguments);
    d(this, "priority", 130);
    d(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(t, a, r) {
    const s = (o) => ({
      year: o,
      isTwoDigitYear: a === "YY"
    });
    switch (a) {
      case "Y":
        return I(H(4, t), s);
      case "Yo":
        return I(
          r.ordinalNumber(t, {
            unit: "year"
          }),
          s
        );
      default:
        return I(H(a.length, t), s);
    }
  }
  validate(t, a) {
    return a.isTwoDigitYear || a.year > 0;
  }
  set(t, a, r, s) {
    const o = xe(t, s);
    if (r.isTwoDigitYear) {
      const y = Xe(
        r.year,
        o
      );
      return t.setFullYear(
        y,
        0,
        s.firstWeekContainsDate
      ), t.setHours(0, 0, 0, 0), ae(t, s);
    }
    const l = !("era" in a) || a.era === 1 ? r.year : 1 - r.year;
    return t.setFullYear(l, 0, s.firstWeekContainsDate), t.setHours(0, 0, 0, 0), ae(t, s);
  }
}
class ha extends C {
  constructor() {
    super(...arguments);
    d(this, "priority", 130);
    d(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, a) {
    return Te(a === "R" ? 4 : a.length, t);
  }
  set(t, a, r) {
    const s = $(t, 0);
    return s.setFullYear(r, 0, 4), s.setHours(0, 0, 0, 0), ie(s);
  }
}
class ya extends C {
  constructor() {
    super(...arguments);
    d(this, "priority", 130);
    d(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(t, a) {
    return Te(a === "u" ? 4 : a.length, t);
  }
  set(t, a, r) {
    return t.setFullYear(r, 0, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class wa extends C {
  constructor() {
    super(...arguments);
    d(this, "priority", 120);
    d(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, a, r) {
    switch (a) {
      case "Q":
      case "QQ":
        return H(a.length, t);
      case "Qo":
        return r.ordinalNumber(t, { unit: "quarter" });
      case "QQQ":
        return r.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(t, {
          width: "wide",
          context: "formatting"
        }) || r.quarter(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.quarter(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(t, a) {
    return a >= 1 && a <= 4;
  }
  set(t, a, r) {
    return t.setMonth((r - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class ga extends C {
  constructor() {
    super(...arguments);
    d(this, "priority", 120);
    d(this, "incompatibleTokens", [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, a, r) {
    switch (a) {
      case "q":
      case "qq":
        return H(a.length, t);
      case "qo":
        return r.ordinalNumber(t, { unit: "quarter" });
      case "qqq":
        return r.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(t, {
          width: "wide",
          context: "standalone"
        }) || r.quarter(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.quarter(t, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(t, a) {
    return a >= 1 && a <= 4;
  }
  set(t, a, r) {
    return t.setMonth((r - 1) * 3, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class ba extends C {
  constructor() {
    super(...arguments);
    d(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
    d(this, "priority", 110);
  }
  parse(t, a, r) {
    const s = (o) => o - 1;
    switch (a) {
      case "M":
        return I(
          F(A.month, t),
          s
        );
      case "MM":
        return I(H(2, t), s);
      case "Mo":
        return I(
          r.ordinalNumber(t, {
            unit: "month"
          }),
          s
        );
      case "MMM":
        return r.month(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.month(t, { width: "narrow", context: "formatting" });
      case "MMMMM":
        return r.month(t, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(t, { width: "wide", context: "formatting" }) || r.month(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.month(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, a) {
    return a >= 0 && a <= 11;
  }
  set(t, a, r) {
    return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
  }
}
class Da extends C {
  constructor() {
    super(...arguments);
    d(this, "priority", 110);
    d(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, a, r) {
    const s = (o) => o - 1;
    switch (a) {
      case "L":
        return I(
          F(A.month, t),
          s
        );
      case "LL":
        return I(H(2, t), s);
      case "Lo":
        return I(
          r.ordinalNumber(t, {
            unit: "month"
          }),
          s
        );
      case "LLL":
        return r.month(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.month(t, { width: "narrow", context: "standalone" });
      case "LLLLL":
        return r.month(t, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(t, { width: "wide", context: "standalone" }) || r.month(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.month(t, { width: "narrow", context: "standalone" });
    }
  }
  validate(t, a) {
    return a >= 0 && a <= 11;
  }
  set(t, a, r) {
    return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
  }
}
function pa(e, n, t) {
  const a = U(e), r = Kt(a, t) - n;
  return a.setDate(a.getDate() - r * 7), a;
}
class Na extends C {
  constructor() {
    super(...arguments);
    d(this, "priority", 100);
    d(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(t, a, r) {
    switch (a) {
      case "w":
        return F(A.week, t);
      case "wo":
        return r.ordinalNumber(t, { unit: "week" });
      default:
        return H(a.length, t);
    }
  }
  validate(t, a) {
    return a >= 1 && a <= 53;
  }
  set(t, a, r, s) {
    return ae(pa(t, r, s), s);
  }
}
function va(e, n) {
  const t = U(e), a = Gt(t) - n;
  return t.setDate(t.getDate() - a * 7), t;
}
class Ma extends C {
  constructor() {
    super(...arguments);
    d(this, "priority", 100);
    d(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, a, r) {
    switch (a) {
      case "I":
        return F(A.week, t);
      case "Io":
        return r.ordinalNumber(t, { unit: "week" });
      default:
        return H(a.length, t);
    }
  }
  validate(t, a) {
    return a >= 1 && a <= 53;
  }
  set(t, a, r) {
    return ie(va(t, r));
  }
}
const Ta = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], ka = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class Ca extends C {
  constructor() {
    super(...arguments);
    d(this, "priority", 90);
    d(this, "subPriority", 1);
    d(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, a, r) {
    switch (a) {
      case "d":
        return F(A.date, t);
      case "do":
        return r.ordinalNumber(t, { unit: "date" });
      default:
        return H(a.length, t);
    }
  }
  validate(t, a) {
    const r = t.getFullYear(), s = Ke(r), o = t.getMonth();
    return s ? a >= 1 && a <= ka[o] : a >= 1 && a <= Ta[o];
  }
  set(t, a, r) {
    return t.setDate(r), t.setHours(0, 0, 0, 0), t;
  }
}
class Pa extends C {
  constructor() {
    super(...arguments);
    d(this, "priority", 90);
    d(this, "subpriority", 1);
    d(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, a, r) {
    switch (a) {
      case "D":
      case "DD":
        return F(A.dayOfYear, t);
      case "Do":
        return r.ordinalNumber(t, { unit: "date" });
      default:
        return H(a.length, t);
    }
  }
  validate(t, a) {
    const r = t.getFullYear();
    return Ke(r) ? a >= 1 && a <= 366 : a >= 1 && a <= 365;
  }
  set(t, a, r) {
    return t.setMonth(0, r), t.setHours(0, 0, 0, 0), t;
  }
}
function $e(e, n, t) {
  var M, S, T, E;
  const a = pe(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((S = (M = t == null ? void 0 : t.locale) == null ? void 0 : M.options) == null ? void 0 : S.weekStartsOn) ?? a.weekStartsOn ?? ((E = (T = a.locale) == null ? void 0 : T.options) == null ? void 0 : E.weekStartsOn) ?? 0, s = U(e), o = s.getDay(), y = (n % 7 + 7) % 7, D = 7 - r, p = n < 0 || n > 6 ? n - (o + D) % 7 : (y + D) % 7 - (o + D) % 7;
  return Le(s, p);
}
class Sa extends C {
  constructor() {
    super(...arguments);
    d(this, "priority", 90);
    d(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(t, a, r) {
    switch (a) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      case "EEEEE":
        return r.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      case "EEEE":
      default:
        return r.day(t, { width: "wide", context: "formatting" }) || r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, a) {
    return a >= 0 && a <= 6;
  }
  set(t, a, r, s) {
    return t = $e(t, r, s), t.setHours(0, 0, 0, 0), t;
  }
}
class Ya extends C {
  constructor() {
    super(...arguments);
    d(this, "priority", 90);
    d(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, a, r, s) {
    const o = (l) => {
      const y = Math.floor((l - 1) / 7) * 7;
      return (l + s.weekStartsOn + 6) % 7 + y;
    };
    switch (a) {
      case "e":
      case "ee":
        return I(H(a.length, t), o);
      case "eo":
        return I(
          r.ordinalNumber(t, {
            unit: "day"
          }),
          o
        );
      case "eee":
        return r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      case "eeeee":
        return r.day(t, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
      case "eeee":
      default:
        return r.day(t, { width: "wide", context: "formatting" }) || r.day(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.day(t, { width: "short", context: "formatting" }) || r.day(t, { width: "narrow", context: "formatting" });
    }
  }
  validate(t, a) {
    return a >= 0 && a <= 6;
  }
  set(t, a, r, s) {
    return t = $e(t, r, s), t.setHours(0, 0, 0, 0), t;
  }
}
class Oa extends C {
  constructor() {
    super(...arguments);
    d(this, "priority", 90);
    d(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T"
    ]);
  }
  parse(t, a, r, s) {
    const o = (l) => {
      const y = Math.floor((l - 1) / 7) * 7;
      return (l + s.weekStartsOn + 6) % 7 + y;
    };
    switch (a) {
      case "c":
      case "cc":
        return I(H(a.length, t), o);
      case "co":
        return I(
          r.ordinalNumber(t, {
            unit: "day"
          }),
          o
        );
      case "ccc":
        return r.day(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.day(t, { width: "short", context: "standalone" }) || r.day(t, { width: "narrow", context: "standalone" });
      case "ccccc":
        return r.day(t, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(t, { width: "short", context: "standalone" }) || r.day(t, { width: "narrow", context: "standalone" });
      case "cccc":
      default:
        return r.day(t, { width: "wide", context: "standalone" }) || r.day(t, {
          width: "abbreviated",
          context: "standalone"
        }) || r.day(t, { width: "short", context: "standalone" }) || r.day(t, { width: "narrow", context: "standalone" });
    }
  }
  validate(t, a) {
    return a >= 0 && a <= 6;
  }
  set(t, a, r, s) {
    return t = $e(t, r, s), t.setHours(0, 0, 0, 0), t;
  }
}
function Va(e, n) {
  const t = U(e), a = oa(t), r = n - a;
  return Le(t, r);
}
class Fa extends C {
  constructor() {
    super(...arguments);
    d(this, "priority", 90);
    d(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(t, a, r) {
    const s = (o) => o === 0 ? 7 : o;
    switch (a) {
      case "i":
      case "ii":
        return H(a.length, t);
      case "io":
        return r.ordinalNumber(t, { unit: "day" });
      case "iii":
        return I(
          r.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || r.day(t, {
            width: "short",
            context: "formatting"
          }) || r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
      case "iiiii":
        return I(
          r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
      case "iiiiii":
        return I(
          r.day(t, {
            width: "short",
            context: "formatting"
          }) || r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
      case "iiii":
      default:
        return I(
          r.day(t, {
            width: "wide",
            context: "formatting"
          }) || r.day(t, {
            width: "abbreviated",
            context: "formatting"
          }) || r.day(t, {
            width: "short",
            context: "formatting"
          }) || r.day(t, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
    }
  }
  validate(t, a) {
    return a >= 1 && a <= 7;
  }
  set(t, a, r) {
    return t = Va(t, r), t.setHours(0, 0, 0, 0), t;
  }
}
class Ba extends C {
  constructor() {
    super(...arguments);
    d(this, "priority", 80);
    d(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(t, a, r) {
    switch (a) {
      case "a":
      case "aa":
      case "aaa":
        return r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, a, r) {
    return t.setHours(He(r), 0, 0, 0), t;
  }
}
class Ha extends C {
  constructor() {
    super(...arguments);
    d(this, "priority", 80);
    d(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(t, a, r) {
    switch (a) {
      case "b":
      case "bb":
      case "bbb":
        return r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, a, r) {
    return t.setHours(He(r), 0, 0, 0), t;
  }
}
class $a extends C {
  constructor() {
    super(...arguments);
    d(this, "priority", 80);
    d(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(t, a, r) {
    switch (a) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(t, {
          width: "wide",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "abbreviated",
          context: "formatting"
        }) || r.dayPeriod(t, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(t, a, r) {
    return t.setHours(He(r), 0, 0, 0), t;
  }
}
class Aa extends C {
  constructor() {
    super(...arguments);
    d(this, "priority", 70);
    d(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(t, a, r) {
    switch (a) {
      case "h":
        return F(A.hour12h, t);
      case "ho":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return H(a.length, t);
    }
  }
  validate(t, a) {
    return a >= 1 && a <= 12;
  }
  set(t, a, r) {
    const s = t.getHours() >= 12;
    return s && r < 12 ? t.setHours(r + 12, 0, 0, 0) : !s && r === 12 ? t.setHours(0, 0, 0, 0) : t.setHours(r, 0, 0, 0), t;
  }
}
class Ia extends C {
  constructor() {
    super(...arguments);
    d(this, "priority", 70);
    d(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(t, a, r) {
    switch (a) {
      case "H":
        return F(A.hour23h, t);
      case "Ho":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return H(a.length, t);
    }
  }
  validate(t, a) {
    return a >= 0 && a <= 23;
  }
  set(t, a, r) {
    return t.setHours(r, 0, 0, 0), t;
  }
}
class Wa extends C {
  constructor() {
    super(...arguments);
    d(this, "priority", 70);
    d(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(t, a, r) {
    switch (a) {
      case "K":
        return F(A.hour11h, t);
      case "Ko":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return H(a.length, t);
    }
  }
  validate(t, a) {
    return a >= 0 && a <= 11;
  }
  set(t, a, r) {
    return t.getHours() >= 12 && r < 12 ? t.setHours(r + 12, 0, 0, 0) : t.setHours(r, 0, 0, 0), t;
  }
}
class ja extends C {
  constructor() {
    super(...arguments);
    d(this, "priority", 70);
    d(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(t, a, r) {
    switch (a) {
      case "k":
        return F(A.hour24h, t);
      case "ko":
        return r.ordinalNumber(t, { unit: "hour" });
      default:
        return H(a.length, t);
    }
  }
  validate(t, a) {
    return a >= 1 && a <= 24;
  }
  set(t, a, r) {
    const s = r <= 24 ? r % 24 : r;
    return t.setHours(s, 0, 0, 0), t;
  }
}
class Ea extends C {
  constructor() {
    super(...arguments);
    d(this, "priority", 60);
    d(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, a, r) {
    switch (a) {
      case "m":
        return F(A.minute, t);
      case "mo":
        return r.ordinalNumber(t, { unit: "minute" });
      default:
        return H(a.length, t);
    }
  }
  validate(t, a) {
    return a >= 0 && a <= 59;
  }
  set(t, a, r) {
    return t.setMinutes(r, 0, 0), t;
  }
}
class Ra extends C {
  constructor() {
    super(...arguments);
    d(this, "priority", 50);
    d(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, a, r) {
    switch (a) {
      case "s":
        return F(A.second, t);
      case "so":
        return r.ordinalNumber(t, { unit: "second" });
      default:
        return H(a.length, t);
    }
  }
  validate(t, a) {
    return a >= 0 && a <= 59;
  }
  set(t, a, r) {
    return t.setSeconds(r, 0), t;
  }
}
class qa extends C {
  constructor() {
    super(...arguments);
    d(this, "priority", 30);
    d(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(t, a) {
    const r = (s) => Math.trunc(s * Math.pow(10, -a.length + 3));
    return I(H(a.length, t), r);
  }
  set(t, a, r) {
    return t.setMilliseconds(r), t;
  }
}
class La extends C {
  constructor() {
    super(...arguments);
    d(this, "priority", 10);
    d(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(t, a) {
    switch (a) {
      case "X":
        return Z(
          K.basicOptionalMinutes,
          t
        );
      case "XX":
        return Z(K.basic, t);
      case "XXXX":
        return Z(
          K.basicOptionalSeconds,
          t
        );
      case "XXXXX":
        return Z(
          K.extendedOptionalSeconds,
          t
        );
      case "XXX":
      default:
        return Z(K.extended, t);
    }
  }
  set(t, a, r) {
    return a.timestampIsSet ? t : $(
      t,
      t.getTime() - ze(t) - r
    );
  }
}
class Ja extends C {
  constructor() {
    super(...arguments);
    d(this, "priority", 10);
    d(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(t, a) {
    switch (a) {
      case "x":
        return Z(
          K.basicOptionalMinutes,
          t
        );
      case "xx":
        return Z(K.basic, t);
      case "xxxx":
        return Z(
          K.basicOptionalSeconds,
          t
        );
      case "xxxxx":
        return Z(
          K.extendedOptionalSeconds,
          t
        );
      case "xxx":
      default:
        return Z(K.extended, t);
    }
  }
  set(t, a, r) {
    return a.timestampIsSet ? t : $(
      t,
      t.getTime() - ze(t) - r
    );
  }
}
class za extends C {
  constructor() {
    super(...arguments);
    d(this, "priority", 40);
    d(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return Ge(t);
  }
  set(t, a, r) {
    return [$(t, r * 1e3), { timestampIsSet: !0 }];
  }
}
class xa extends C {
  constructor() {
    super(...arguments);
    d(this, "priority", 20);
    d(this, "incompatibleTokens", "*");
  }
  parse(t) {
    return Ge(t);
  }
  set(t, a, r) {
    return [$(t, r), { timestampIsSet: !0 }];
  }
}
const Ua = {
  G: new ca(),
  y: new ma(),
  Y: new fa(),
  R: new ha(),
  u: new ya(),
  Q: new wa(),
  q: new ga(),
  M: new ba(),
  L: new Da(),
  w: new Na(),
  I: new Ma(),
  d: new Ca(),
  D: new Pa(),
  E: new Sa(),
  e: new Ya(),
  c: new Oa(),
  i: new Fa(),
  a: new Ba(),
  b: new Ha(),
  B: new $a(),
  h: new Aa(),
  H: new Ia(),
  K: new Wa(),
  k: new ja(),
  m: new Ea(),
  s: new Ra(),
  S: new qa(),
  X: new La(),
  x: new Ja(),
  t: new za(),
  T: new xa()
}, Qa = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Ga = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Xa = /^'([^]*?)'?$/, Ka = /''/g, Za = /\S/, _a = /[a-zA-Z]/;
function Re(e, n, t, a) {
  var z, Q, W, R, q, f, u, N;
  const r = sa(), s = (a == null ? void 0 : a.locale) ?? r.locale ?? Qt, o = (a == null ? void 0 : a.firstWeekContainsDate) ?? ((Q = (z = a == null ? void 0 : a.locale) == null ? void 0 : z.options) == null ? void 0 : Q.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((R = (W = r.locale) == null ? void 0 : W.options) == null ? void 0 : R.firstWeekContainsDate) ?? 1, l = (a == null ? void 0 : a.weekStartsOn) ?? ((f = (q = a == null ? void 0 : a.locale) == null ? void 0 : q.options) == null ? void 0 : f.weekStartsOn) ?? r.weekStartsOn ?? ((N = (u = r.locale) == null ? void 0 : u.options) == null ? void 0 : N.weekStartsOn) ?? 0;
  if (n === "")
    return e === "" ? U(t) : $(t, NaN);
  const y = {
    firstWeekContainsDate: o,
    weekStartsOn: l,
    locale: s
  }, D = [new da()], p = n.match(Ga).map((c) => {
    const P = c[0];
    if (P in je) {
      const L = je[P];
      return L(c, s.formatLong);
    }
    return c;
  }).join("").match(Qa), M = [];
  for (let c of p) {
    !(a != null && a.useAdditionalWeekYearTokens) && na(c) && Ee(c, n, e), !(a != null && a.useAdditionalDayOfYearTokens) && aa(c) && Ee(c, n, e);
    const P = c[0], L = Ua[P];
    if (L) {
      const { incompatibleTokens: se } = L;
      if (Array.isArray(se)) {
        const oe = M.find(
          (i) => se.includes(i.token) || i.token === P
        );
        if (oe)
          throw new RangeError(
            `The format string mustn't contain \`${oe.fullToken}\` and \`${c}\` at the same time`
          );
      } else if (L.incompatibleTokens === "*" && M.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${c}\` and any other token at the same time`
        );
      M.push({ token: P, fullToken: c });
      const ee = L.run(
        e,
        c,
        s.match,
        y
      );
      if (!ee)
        return $(t, NaN);
      D.push(ee.setter), e = ee.rest;
    } else {
      if (P.match(_a))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + P + "`"
        );
      if (c === "''" ? c = "'" : P === "'" && (c = en(c)), e.indexOf(c) === 0)
        e = e.slice(c.length);
      else
        return $(t, NaN);
    }
  }
  if (e.length > 0 && Za.test(e))
    return $(t, NaN);
  const S = D.map((c) => c.priority).sort((c, P) => P - c).filter((c, P, L) => L.indexOf(c) === P).map(
    (c) => D.filter((P) => P.priority === c).sort((P, L) => L.subPriority - P.subPriority)
  ).map((c) => c[0]);
  let T = U(t);
  if (isNaN(T.getTime()))
    return $(t, NaN);
  const E = {};
  for (const c of S) {
    if (!c.validate(T, y))
      return $(t, NaN);
    const P = c.set(T, E, y);
    Array.isArray(P) ? (T = P[0], Object.assign(E, P[1])) : T = P;
  }
  return $(t, T);
}
function en(e) {
  return e.match(Xa)[1].replace(Ka, "'");
}
const tn = le({
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
}), ue = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [a, r] of n)
    t[a] = r;
  return t;
}, an = ["height", "width"], nn = ["fill"];
function rn(e, n, t, a, r, s) {
  return v(), k("span", {
    class: V(e.customClass)
  }, [
    (v(), k("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 448 512",
      height: e.height,
      width: e.width,
      role: "img",
      "aria-hidden": "true",
      "data-icon": "calendarAlt"
    }, [
      O("path", {
        fill: e.color,
        d: "M400 64h-48V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H128V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h352c8.8 0 16 7.2 16 16v48H32v-48c0-8.8 7.2-16 16-16zm352 384H48c-8.8 0-16-7.2-16-16V192h384v272c0 8.8-7.2 16-16 16zM148 320h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 96h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm192 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12z"
      }, null, 8, nn)
    ], 8, an))
  ], 2);
}
const sn = /* @__PURE__ */ ue(tn, [["render", rn]]), g = (e, n = !1) => n ? e.getUTCFullYear() : e.getFullYear(), Y = (e, n = !1) => n ? e.getUTCMonth() : e.getMonth(), G = (e, n = !1) => n ? e.getUTCDate() : e.getDate(), X = (e, n = !1) => n ? e.getUTCDay() : e.getDay(), Ve = (e, n, t = !1) => t ? e.setUTCFullYear(n) : e.setFullYear(n), Ze = (e, n, t = !1) => t ? e.setUTCMonth(n) : e.setMonth(n), Me = (e, n, t = !1) => t ? e.setUTCDate(n) : e.setDate(n), ve = (e, n, t = !1) => {
  const a = new Date(e.getTime()), r = new Date(n.getTime());
  return t ? (a.setUTCHours(0, 0, 0, 0), r.setUTCHours(0, 0, 0, 0)) : (a.setHours(0, 0, 0, 0), r.setHours(0, 0, 0, 0)), a.getTime() === r.getTime();
}, on = (e, n, t = !1) => {
  const a = new Date(e.getTime()), r = new Date(n.getTime());
  return t ? (a.setUTCHours(0, 0, 0, 0), r.setUTCHours(0, 0, 0, 0)) : (a.setHours(0, 0, 0, 0), r.setHours(0, 0, 0, 0)), a.getTime() > r.getTime();
}, ln = (e, n, t = !1) => {
  const a = new Date(e.getTime()), r = new Date(n.getTime());
  return t ? (a.setUTCHours(0, 0, 0, 0), r.setUTCHours(0, 0, 0, 0)) : (a.setHours(0, 0, 0, 0), r.setHours(0, 0, 0, 0)), a.getTime() < r.getTime();
}, un = (e) => Object.prototype.toString.call(e) !== "[object Date]" ? !1 : !Number.isNaN(e.getTime()), Ce = (e, n) => {
  if (typeof e != "object")
    throw TypeError("Invalid Type");
  return n[X(e)];
}, De = (e, n) => {
  if (!n)
    throw Error("missing 2nd parameter Months array");
  if (typeof e == "object")
    return n[Y(e)];
  if (typeof e == "number")
    return n[e];
  throw TypeError("Invalid type");
}, Pe = (e, n) => {
  if (!n)
    throw Error("missing 2nd paramter Months array");
  if (typeof e == "object")
    return n[Y(e)];
  if (typeof e == "number")
    return n[e];
  throw TypeError("Invalid type");
}, dn = (e, n) => /8|3|5|10/.test(n) ? 30 : n === 1 ? !(e % 4) && e % 100 || !(e % 400) ? 29 : 28 : 31, cn = (e) => {
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
}, mn = (e, n, t) => {
  const a = g(e), r = Y(e) + 1, s = G(e);
  return n.replace(/dd/, `0${s}`.slice(-2)).replace(/d/, s).replace(/yyyy/, a).replace(/yy/, String(a).slice(2)).replace(/MMMM/, De(Y(e), t.months)).replace(/MMM/, Pe(Y(e), t.monthsAbbr)).replace(/MM/, `0${r}`.slice(-2)).replace(/M(?!a|ä|e)/, r.toString()).replace(/su/, cn(G(e))).replace(/D(?!e|é|i)/, Ce(e, t.days));
}, fn = (e) => e === null || e instanceof Date || typeof e == "string" || typeof e == "number", _ = (e) => typeof e == "string" ? new Date(e) : e, hn = le({
  name: "DateInput",
  components: {
    IconView: sn
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
  setup(e, { emit: n }) {
    const t = te(), a = te(null), r = b(() => e.addBootstrapClass ? typeof e.inputClass == "string" ? [e.inputClass, "form-control"].join(" ") : {
      "form-control": !0,
      ...e.inputClass
    } : e.inputClass), s = b(() => {
      var S, T;
      if (!e.selectedDate)
        return null;
      if (t.value)
        return t.value;
      const p = _(e.selectedDate);
      let M = typeof e.format == "function" ? e.format(p) : mn(p, e.format, e.translation);
      if (e.minimumView === e.maximumView) {
        const [, E, z] = M.split(" ");
        if (e.maximumView === "month") {
          if (e.fullMonthName) {
            const Q = (S = e.translation) == null ? void 0 : S.monthsAbbr.indexOf(E);
            return (T = e.translation) == null ? void 0 : T.months[Q];
          }
          M = E;
        } else
          e.maximumView === "year" && (M = z);
      }
      return M;
    });
    fe(
      () => e.resetTypedDate,
      () => {
        t.value = "";
      }
    );
    function o() {
      n("show-calendar");
    }
    function l(p) {
      if ([
        27,
        // escape
        13
        // enter
      ].includes(p.keyCode) && a.value.blur(), e.typeable) {
        const { value: M } = a.value, S = typeof e.format == "function" ? e.format(M) : e.format, T = Re(M, S, /* @__PURE__ */ new Date());
        Number.isNaN(T) || (t.value = M, n("typed-date", new Date(T)));
      }
    }
    function y() {
      n("clear-date");
    }
    function D() {
      if (e.format) {
        const p = a.value.value, M = typeof e.format == "function" ? e.format(p) : e.format;
        if (p) {
          const S = Re(p, M, /* @__PURE__ */ new Date());
          if (!S || Number.isNaN(S))
            y(), a.value.value = null, t.value = "";
          else {
            n("typed-date", S), n("close-calendar", !0);
            return;
          }
        }
      }
      e.typeable && Number.isNaN(Date.parse(a.value.value)) && (y(), a.value.value = null, t.value = ""), n("close-calendar", !0);
    }
    return {
      typedDate: t,
      computedInputClass: r,
      formattedValue: s,
      showCalendar: o,
      parseTypedDate: l,
      inputBlurred: D,
      inputRef: a,
      clearDate: y
    };
  }
});
const yn = { key: 0 }, wn = {
  key: 1,
  style: { position: "relative" }
}, gn = { key: 0 }, bn = ["type", "name", "id", "value", "open-date", "placeholder", "clear-button", "disabled", "required", "readonly"], Dn = {
  key: 0,
  class: "vuejs3-datepicker__value"
}, pn = { class: "vuejs3-datepicker__icon" }, Nn = {
  key: 0,
  class: "vuejs3-datepicker__content"
}, vn = {
  key: 1,
  class: "vuejs3-datepicker__content"
}, Mn = { key: 0 };
function Tn(e, n, t, a, r, s) {
  const o = he("IconView");
  return v(), k("div", {
    class: V([e.addBootstrapClass ? "input-group" : ""])
  }, [
    e.calendarButton ? (v(), k("span", {
      key: 0,
      class: V(["vuejs3-datepicker__calendar-button", { "input-group-prepend": e.addBootstrapClass, "cursor-na": e.disabled }]),
      onClick: n[0] || (n[0] = (...l) => e.showCalendar && e.showCalendar(...l))
    }, [
      O("span", {
        class: V({ "input-group-text": e.addBootstrapClass })
      }, [
        O("i", {
          class: V(e.calendarButtonIcon)
        }, [
          rt(B(e.calendarButtonIconContent) + " ", 1),
          e.calendarButtonIcon ? J("", !0) : (v(), k("span", yn, "…"))
        ], 2)
      ], 2)
    ], 2)) : J("", !0),
    e.typeable || !e.hideInput ? (v(), k("div", wn, [
      e.inline ? J("", !0) : (v(), k("span", gn, [
        Oe(o, {
          customClass: "vuejs3-datepicker__typeablecalendar",
          color: e.iconColor,
          width: e.iconWidth,
          height: e.iconHeight
        }, null, 8, ["color", "width", "height"])
      ])),
      O("input", {
        type: e.inline ? "hidden" : "text",
        class: V([e.computedInputClass, "vuejs3-datepicker__inputvalue"]),
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
        onClick: n[1] || (n[1] = (...l) => e.showCalendar && e.showCalendar(...l)),
        onKeyup: n[2] || (n[2] = (...l) => e.parseTypedDate && e.parseTypedDate(...l)),
        onBlur: n[3] || (n[3] = (...l) => e.inputBlurred && e.inputBlurred(...l)),
        autocomplete: "off"
      }, null, 42, bn)
    ])) : (v(), k("div", {
      key: 2,
      onClick: n[4] || (n[4] = (...l) => e.showCalendar && e.showCalendar(...l)),
      id: "calendar-div"
    }, [
      e.inline ? J("", !0) : (v(), k("div", Dn, [
        O("span", pn, [
          Oe(o, {
            color: e.iconColor,
            width: e.iconWidth,
            height: e.iconHeight
          }, null, 8, ["color", "width", "height"])
        ]),
        e.formattedValue ? (v(), k("div", Nn, B(e.formattedValue), 1)) : (v(), k("div", vn, B(e.placeholder), 1))
      ]))
    ])),
    e.clearButton && e.selectedDate ? (v(), k("span", {
      key: 3,
      class: V(["vuejs3-datepicker__clear-button", { "input-group-append": e.addBootstrapClass }]),
      onClick: n[5] || (n[5] = (l) => e.clearDate())
    }, [
      O("span", {
        class: V({ "input-group-text": e.addBootstrapClass })
      }, [
        O("i", {
          class: V(e.clearButtonIcon)
        }, [
          e.clearButtonIcon ? J("", !0) : (v(), k("span", Mn, "×"))
        ], 2)
      ], 2)
    ], 2)) : J("", !0),
    x(e.$slots, "belowDate", {}, void 0, !0)
  ], 2);
}
const kn = /* @__PURE__ */ ue(hn, [["render", Tn], ["__scopeId", "data-v-8ef9da0b"]]), Cn = le({
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
  setup(e, { emit: n }) {
    function t(i) {
      i.isDisabled ? (n("selected-disabled", i), e.preventDisableDateSelection || n("select-date", i)) : n("select-date", i);
    }
    function a() {
      n("show-month-calendar");
    }
    function r() {
      n("show-year-calendar");
    }
    function s(i) {
      const m = e.pageDate;
      Ze(m, Y(m) + i), n("changed-month", m);
    }
    function o() {
      const i = e.disabledDates;
      if (!i || !i.to)
        return !1;
      const m = e.pageDate;
      return Y(i.to) >= Y(m) && g(i.to) >= g(m);
    }
    function l() {
      o() || s(-1);
    }
    function y() {
      const i = e.disabledDates;
      if (!i || !i.from)
        return !1;
      const m = e.pageDate;
      return Y(i.from) <= Y(m) && g(i.from) <= g(m);
    }
    function D() {
      y() || s(1);
    }
    function p(i) {
      const m = _(e.selectedDate);
      return e.selectedDate ? ve(m, i) : !1;
    }
    function M(i) {
      let m = !1;
      const h = e.disabledDates;
      return h ? typeof h > "u" ? !1 : (typeof h.dates < "u" && h.dates.forEach((ne) => {
        ve(i, ne) && (m = !0);
      }), typeof h.to < "u" && h.to && ln(i, h.to) && (m = !0), typeof h.from < "u" && h.from && on(i, h.from) && (m = !0), typeof h.days < "u" && h.days.indexOf(X(i)) !== -1 && (m = !0), typeof h.daysOfMonth < "u" && h.daysOfMonth.indexOf(G(i)) !== -1 && (m = !0), typeof h.customPredictor == "function" && h.customPredictor(i) && (m = !0), m) : m;
    }
    function S(i) {
      return typeof i < "u" && i;
    }
    function T(i) {
      const m = e.highlighted;
      if (!(m && m.includeDisabled) && M(i))
        return !1;
      let h = !1;
      return typeof m > "u" ? !1 : (typeof m.dates < "u" && m.dates.forEach((ne) => {
        ve(i, ne) && (h = !0);
      }), S(m.from) && S(m.to) && (h = i >= m.from && i <= m.to), typeof m.days < "u" && m.days.indexOf(X(i)) !== -1 && (h = !0), typeof m.daysOfMonth < "u" && m.daysOfMonth.indexOf(G(i)) !== -1 && (h = !0), typeof m.customPredictor == "function" && m.customPredictor(i) && (h = !0), h);
    }
    function E(i) {
      return {
        selected: i.isSelected,
        disabled: i.isDisabled,
        highlighted: i.isHighlighted,
        today: i.isToday,
        weekend: i.isWeekend,
        sat: i.isSaturday,
        sun: i.isSunday,
        "highlight-start": i.isHighlightStart,
        "highlight-end": i.isHighlightEnd
      };
    }
    function z(i) {
      const m = e.highlighted;
      return m ? T(i) && m.from instanceof Date && g(m.from) === g(i) && Y(m.from) === Y(i) && G(m.from) === G(i) : !1;
    }
    function Q(i) {
      const m = e.highlighted;
      return m ? T(i) && m.to instanceof Date && g(m.to) === g(i) && Y(m.to) === Y(i) && G(m.to) === G(i) : !1;
    }
    const W = b(() => {
      if (e.mondayFirst) {
        const i = e.translation && e.translation.days && e.translation.days.slice();
        return i.push(i.shift()), i;
      }
      return e.translation && e.translation.days;
    }), R = b(() => {
      const i = e.pageDate, m = e.useUtc ? new Date(Date.UTC(i.getUTCFullYear(), i.getUTCMonth(), 1)) : new Date(i.getFullYear(), i.getMonth(), 1, i.getHours(), i.getMinutes());
      return e.mondayFirst ? X(m) > 0 ? X(m) - 1 : 6 : X(m);
    }), q = b(() => {
      const i = e.pageDate, m = [], h = e.useUtc ? new Date(Date.UTC(i.getUTCFullYear(), i.getUTCMonth(), 1)) : new Date(i.getFullYear(), i.getMonth(), 1, i.getHours(), i.getMinutes()), ne = dn(g(h), Y(h));
      for (let de = 0; de < ne; de += 1)
        m.push({
          date: G(h),
          timestamp: h.getTime(),
          isSelected: p(h),
          isDisabled: M(h),
          isHighlighted: T(h),
          isHighlightStart: z(h),
          isHighlightEnd: Q(h),
          isToday: ve(h, /* @__PURE__ */ new Date()),
          isWeekend: X(h) === 0 || X(h) === 6,
          isSaturday: X(h) === 6,
          isSunday: X(h) === 0
        }), Me(h, G(h) + 1);
      return m;
    }), f = b(() => {
      const i = e.fullMonthName ? e.translation && e.translation.months : e.translation && e.translation.monthsAbbr;
      return Pe(Y(e.pageDate), i);
    }), u = b(() => {
      const i = e.translation && e.translation.months;
      return De(Y(e.pageDate), i);
    }), N = b(() => {
      const i = e.translation && e.translation.yearSuffix;
      return `${g(e.pageDate)}${i}`;
    }), c = b(() => (e.translation && e.translation.ymd && e.translation && e.translation.ymd) === !0), P = b(() => e.isRtl ? y() : o()), L = b(() => e.isRtl ? o() : y()), se = b(() => {
      const i = _(e.selectedDate);
      return e.selectedDate ? Ce(i, e.translation && e.translation.daysNames) : null;
    }), ee = b(() => {
      const i = _(e.selectedDate);
      return e.selectedDate ? G(i) : null;
    }), oe = b(() => !(e.minimumView === e.maximumView && (e.minimumView !== "day" || e.maximumView !== "day")));
    return {
      isDefined: S,
      showMonthCalendar: a,
      daysOfWeek: W,
      blankDays: R,
      isYmd: c,
      days: q,
      currMonthName: f,
      currYearName: N,
      isLeftNavDisabled: P,
      isRightNavDisabled: L,
      selectDate: t,
      previousMonth: l,
      nextMonth: D,
      dayClasses: E,
      monthName: u,
      getDayName: se,
      getDisplayDate: ee,
      showYearCalendar: r,
      isNextMonthDisabled: y,
      ifDifferentViews: oe,
      isSelectedDate: p,
      isDisabledDate: M,
      isHighlightedDate: T,
      isHighlightStart: z,
      isHighlightEnd: Q
    };
  }
}), Pn = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar"
}, Sn = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar-day"
}, Yn = { class: "vuejs3-datepicker__calendar-actionarea" }, On = ["innerHTML", "onClick"];
function Vn(e, n, t, a, r, s) {
  return ke((v(), k("div", {
    class: V(["vuejs3-datepicker__calendar", `vuejs3-${e.theme}`, e.calendarClass]),
    style: Fe(e.calendarStyle),
    onMousedown: n[4] || (n[4] = be(() => {
    }, ["prevent"]))
  }, [
    x(e.$slots, "customCalendarHeader"),
    e.ifDifferentViews && e.selectedDate ? (v(), k("section", Pn, [
      O("p", {
        class: "vuejs3-datepicker__calendar-topbar-year",
        onClick: n[0] || (n[0] = (...o) => e.showYearCalendar && e.showYearCalendar(...o))
      }, B(e.currYearName), 1),
      x(e.$slots, "formatDateTopBar", {}, () => [
        e.selectedDate ? (v(), k("p", Sn, B(e.getDayName) + " " + B(e.getDisplayDate) + " " + B(e.monthName), 1)) : J("", !0)
      ])
    ])) : J("", !0),
    O("div", Yn, [
      O("header", null, [
        O("span", {
          onClick: n[1] || (n[1] = (o) => e.isRtl ? e.nextMonth() : e.previousMonth()),
          class: V(["prev", { disabled: e.isLeftNavDisabled }])
        }, "<", 2),
        O("span", {
          class: V(["day__month_btn", e.allowedToShowView("month") ? "up" : ""]),
          onClick: n[2] || (n[2] = (...o) => e.showMonthCalendar && e.showMonthCalendar(...o))
        }, B(e.isYmd ? e.currYearName : e.currMonthName) + " " + B(e.isYmd ? e.currMonthName : e.currYearName), 3),
        O("span", {
          onClick: n[3] || (n[3] = (o) => e.isRtl ? e.previousMonth() : e.nextMonth()),
          class: V(["next", { disabled: e.isRightNavDisabled }])
        }, ">", 2)
      ]),
      O("div", {
        class: V(e.isRtl ? "flex-rtl" : "")
      }, [
        (v(!0), k(ye, null, we(e.daysOfWeek, (o) => (v(), k("span", {
          class: "cell day-header",
          key: o.timestamp
        }, B(o), 1))), 128)),
        e.blankDays > 0 ? (v(!0), k(ye, { key: 0 }, we(e.blankDays, (o) => (v(), k("span", {
          class: "cell day blank",
          key: o.timestamp
        }))), 128)) : J("", !0),
        (v(!0), k(ye, null, we(e.days, (o) => (v(), k("span", {
          class: V(["cell day", e.dayClasses(o)]),
          key: o.timestamp,
          innerHTML: e.dayCellContent(o),
          onClick: (l) => e.selectDate(o)
        }, null, 10, On))), 128))
      ], 2)
    ])
  ], 38)), [
    [Be, e.showDayView]
  ]);
}
const Fn = /* @__PURE__ */ ue(Cn, [["render", Vn]]), Bn = le({
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
  setup(e, { emit: n }) {
    function t(u) {
      u.isDisabled || n("select-month", u);
    }
    function a(u) {
      const N = e.pageDate;
      Ve(N, g(N) + u), n("changed-year", N);
    }
    function r() {
      const u = e.disabledDates;
      return !u || !u.to ? !1 : g(u.to) >= g(e.pageDate);
    }
    function s() {
      r() || a(-1);
    }
    function o() {
      const u = e.disabledDates;
      return !u || !u.from ? !1 : g(u.from) <= g(e.pageDate);
    }
    function l() {
      o() || a(1);
    }
    function y() {
      n("show-year-calendar");
    }
    function D(u) {
      const N = _(e.selectedDate);
      return N && g(N) === g(u) && Y(N) === Y(u);
    }
    function p(u) {
      let N = !1;
      const c = e.disabledDates;
      return !c || typeof c > "u" ? !1 : (typeof c.to < "u" && c.to && (Y(u) < Y(c.to) && g(u) <= g(c.to) || g(u) < g(c.to)) && (N = !0), typeof c.from < "u" && c.from && (Y(u) > Y(c.from) && g(u) >= g(c.from) || g(u) > g(c.from)) && (N = !0), typeof c.customPredictor == "function" && c.customPredictor(u) && (N = !0), N);
    }
    const M = b(() => {
      const u = e.pageDate, N = [], c = e.useUtc ? new Date(Date.UTC(u.getUTCFullYear(), 0, u.getUTCDate())) : new Date(u.getFullYear(), 0, u.getDate(), u.getHours(), u.getMinutes());
      for (let P = 0; P < 12; P += 1)
        N.push({
          month: De(P, e.translation && e.translation.months),
          timestamp: c.getTime(),
          isSelected: D(c),
          isDisabled: p(c)
        }), Ze(c, Y(c) + 1);
      return N;
    }), S = b(() => {
      const u = e.translation && e.translation.yearSuffix;
      return `${g(e.pageDate)}${u}`;
    }), T = b(() => e.isRtl ? o() : r()), E = b(() => e.isRtl ? r() : o()), z = b(() => {
      const u = e.translation && e.translation.months;
      return De(Y(e.pageDate), u);
    }), Q = b(() => {
      const u = _(e.selectedDate);
      return e.selectedDate ? G(u) : null;
    }), W = b(() => {
      const u = _(e.selectedDate);
      return e.selectedDate ? Ce(u, e.translation && e.translation.daysNames) : null;
    }), R = b(() => {
      const u = e.translation && e.translation.yearSuffix;
      return `${g(e.pageDate)}${u}`;
    }), q = b(() => {
      const u = e.fullMonthName ? e.translation && e.translation.months : e.translation && e.translation.monthsAbbr;
      return Pe(Y(e.pageDate), u);
    }), f = b(() => !(e.minimumView === e.maximumView && (e.minimumView !== "day" || e.maximumView !== "day")));
    return {
      isRightNavDisabled: E,
      isLeftNavDisabled: T,
      pageYearName: S,
      months: M,
      selectMonth: t,
      previousYear: s,
      nextYear: l,
      currYearName: R,
      getDisplayDate: Q,
      monthName: z,
      showYearCalendar: y,
      getDayName: W,
      currMonthName: q,
      ifDifferentViews: f,
      isSelectedMonth: D,
      isDisabledMonth: p
    };
  }
}), Hn = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar"
}, $n = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar-day"
}, An = { class: "vuejs3-datepicker__calendar-actionarea" }, In = ["onClick"];
function Wn(e, n, t, a, r, s) {
  return ke((v(), k("div", {
    class: V(["vuejs3-datepicker__calendar", `vuejs3-${e.theme}`, e.calendarClass]),
    style: Fe(e.calendarStyle),
    onMousedown: n[4] || (n[4] = be(() => {
    }, ["prevent"]))
  }, [
    x(e.$slots, "customCalendarHeader"),
    e.ifDifferentViews ? (v(), k("section", Hn, [
      O("p", {
        class: "vuejs3-datepicker__calendar-topbar-year",
        onClick: n[0] || (n[0] = (...o) => e.showYearCalendar && e.showYearCalendar(...o))
      }, B(e.currYearName), 1),
      x(e.$slots, "formatDateTopBar", {}, () => [
        e.selectedDate ? (v(), k("p", $n, B(e.getDayName) + " " + B(e.getDisplayDate) + " " + B(e.monthName), 1)) : J("", !0)
      ])
    ])) : J("", !0),
    O("div", An, [
      O("header", null, [
        O("span", {
          onClick: n[1] || (n[1] = (o) => e.isRtl ? e.nextYear() : e.previousYear()),
          class: V(["prev", { disabled: e.isLeftNavDisabled }])
        }, "<", 2),
        O("span", {
          class: V(["month__year_btn", e.allowedToShowView("year") ? "up" : ""]),
          onClick: n[2] || (n[2] = (...o) => e.showYearCalendar && e.showYearCalendar(...o))
        }, B(e.pageYearName), 3),
        O("span", {
          onClick: n[3] || (n[3] = (o) => e.isRtl ? e.previousYear() : e.nextYear()),
          class: V(["next", { disabled: e.isRightNavDisabled }])
        }, ">", 2)
      ]),
      (v(!0), k(ye, null, we(e.months, (o) => (v(), k("span", {
        class: V(["cell month", { selected: o.isSelected, disabled: o.isDisabled }]),
        key: o.timestamp,
        onClick: be((l) => e.selectMonth(o), ["stop"])
      }, B(o.month), 11, In))), 128))
    ])
  ], 38)), [
    [Be, e.showMonthView]
  ]);
}
const jn = /* @__PURE__ */ ue(Bn, [["render", Wn]]), En = le({
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
  setup(e, { emit: n }) {
    function t(f) {
      f.isDisabled || n("select-year", f);
    }
    function a(f) {
      const u = e.pageDate;
      Ve(u, g(u) + f), n("changed-decade", u);
    }
    function r() {
      const f = e.disabledDates;
      if (!f || !f.to)
        return !1;
      const u = g(f.to), N = Math.floor(g(e.pageDate) / 10) * 10 - 1;
      return u > N;
    }
    function s() {
      r() || a(-10);
    }
    function o() {
      const f = e.disabledDates;
      if (!f || !f.from)
        return !1;
      const u = g(f.from), N = Math.ceil(g(e.pageDate) / 10) * 10;
      return u <= N;
    }
    function l() {
      o() || a(10);
    }
    function y(f) {
      const u = _(e.selectedDate);
      return e.selectedDate ? g(u) === g(f) : !1;
    }
    function D(f) {
      let u = !1;
      return typeof e.disabledDates > "u" || !e.disabledDates ? !1 : (typeof e.disabledDates.to < "u" && e.disabledDates.to && g(f) < g(e.disabledDates.to) && (u = !0), typeof e.disabledDates.from < "u" && e.disabledDates.from && g(f) > g(e.disabledDates.from) && (u = !0), typeof e.disabledDates.customPredictor == "function" && (u = e.disabledDates.customPredictor(f)), u);
    }
    const p = b(() => {
      const f = e.pageDate, u = [], N = e.useUtc ? new Date(Date.UTC(Math.floor(f.getUTCFullYear() / 10) * 10, f.getUTCMonth(), f.getUTCDate())) : new Date(Math.floor(f.getFullYear() / 10) * 10, f.getMonth(), f.getDate(), f.getHours(), f.getMinutes());
      for (let c = 0; c < 10; c += 1)
        u.push({
          year: g(N),
          timestamp: N.getTime(),
          isSelected: y(N),
          isDisabled: D(N)
        }), Ve(N, g(N) + 1);
      return u;
    }), M = b(() => {
      const f = Math.floor(g(e.pageDate) / 10) * 10, u = f + 9, N = e.translation && e.translation.yearSuffix;
      return `${f} - ${u}${N}`;
    }), S = b(() => e.isRtl ? o() : r()), T = b(() => e.isRtl ? r() : o()), E = b(() => {
      const f = _(e.selectedDate);
      return e.selectedDate ? Ce(f, e.translation && e.translation.daysNames) : null;
    }), z = b(() => {
      const f = e.translation && e.translation.months;
      return De(Y(e.pageDate), f);
    }), Q = b(() => {
      const f = _(e.selectedDate);
      return e.selectedDate ? G(f) : null;
    }), W = b(() => {
      const f = e.translation && e.translation.yearSuffix;
      return `${g(e.pageDate)}${f}`;
    }), R = b(() => {
      const f = e.fullMonthName ? e.translation && e.translation.months : e.translation && e.translation.monthsAbbr;
      return Pe(Y(e.pageDate), f);
    }), q = b(() => !(e.minimumView === e.maximumView && (e.minimumView !== "day" || e.maximumView !== "day")));
    return {
      isRightNavDisabled: T,
      isLeftNavDisabled: S,
      getPageDecade: M,
      years: p,
      nextDecade: l,
      previousDecade: s,
      selectYear: t,
      getDayName: E,
      monthName: z,
      getDisplayDate: Q,
      currYearName: W,
      currMonthName: R,
      ifDifferentViews: q,
      // methods
      isNextDecadeDisabled: o,
      isPreviousDecadeDisabled: r,
      isDisabledYear: D
    };
  }
}), Rn = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar"
}, qn = { class: "vuejs3-datepicker__calendar-topbar-year" }, Ln = {
  key: 0,
  class: "vuejs3-datepicker__calendar-topbar-day"
}, Jn = { class: "vuejs3-datepicker__calendar-actionarea" }, zn = ["onClick"];
function xn(e, n, t, a, r, s) {
  return ke((v(), k("div", {
    class: V(["vuejs3-datepicker__calendar", `vuejs3-${e.theme}`, e.calendarClass]),
    style: Fe(e.calendarStyle),
    onMousedown: n[2] || (n[2] = be(() => {
    }, ["prevent"]))
  }, [
    x(e.$slots, "customCalendarHeader"),
    e.ifDifferentViews && e.selectedDate ? (v(), k("section", Rn, [
      O("p", qn, B(e.currYearName), 1),
      x(e.$slots, "formatDateTopBar", {}, () => [
        e.selectedDate ? (v(), k("p", Ln, B(e.getDayName) + " " + B(e.getDisplayDate) + " " + B(e.monthName), 1)) : J("", !0)
      ])
    ])) : J("", !0),
    O("div", Jn, [
      O("header", null, [
        O("span", {
          onClick: n[0] || (n[0] = (o) => e.isRtl ? e.nextDecade() : e.previousDecade()),
          class: V(["prev", { disabled: e.isLeftNavDisabled }])
        }, "<", 2),
        O("span", null, B(e.getPageDecade), 1),
        O("span", {
          onClick: n[1] || (n[1] = (o) => e.isRtl ? e.previousDecade() : e.nextDecade()),
          class: V(["next", { disabled: e.isRightNavDisabled }])
        }, ">", 2)
      ]),
      (v(!0), k(ye, null, we(e.years, (o) => (v(), k("span", {
        class: V(["cell year", { selected: o.isSelected, disabled: o.isDisabled }]),
        key: o.timestamp,
        onClick: be((l) => e.selectYear(o), ["stop"])
      }, B(o.year), 11, zn))), 128))
    ])
  ], 38)), [
    [Be, e.showYearView]
  ]);
}
const Un = /* @__PURE__ */ ue(En, [["render", xn]]), Qn = () => {
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
}, Gn = () => {
  const e = "Afrikaans", n = [
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
  ], t = ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"], a = ["So.", "Ma.", "Di.", "Wo.", "Do.", "Vr.", "Sa."];
  return {
    months: n,
    monthsAbbr: t,
    days: a,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    language: e,
    langName: e,
    daysNames: a
  };
}, Xn = () => {
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
}, Kn = () => {
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
}, Zn = () => {
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
}, _n = () => {
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
}, er = () => {
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
}, tr = () => {
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
}, ar = () => {
  const e = "Dutch", n = [
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
  ], t = ["jan.", "feb.", "mrt.", "apr.", "mei", "juni", "juli", "aug.", "sep.", "okt.", "nov.", "dec."], a = ["zo.", "ma.", "di.", "wo.", "do.", "vr.", "za."];
  return {
    months: n,
    monthsAbbr: t,
    days: a,
    yearSuffix: "",
    ymd: !1,
    rtl: !1,
    langName: e,
    language: e,
    daysNames: a
  };
}, nr = () => {
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
}, rr = () => {
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
}, sr = () => {
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
}, or = () => {
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
}, ir = () => {
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
}, lr = () => {
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
}, ur = () => {
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
}, dr = () => {
  const e = "Arabic-Tunisia", n = [
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
    months: n,
    monthsAbbr: n,
    days: ["أحد", "أثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
    language: e,
    yearSuffix: "",
    ymd: !1,
    rtl: !0,
    langName: e,
    daysNames: ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
  };
}, cr = () => {
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
}, mr = () => {
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
}, fr = () => {
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
}, hr = {
  ar: Qn(),
  af: Gn(),
  arTn: dr(),
  hi: er(),
  ja: tr(),
  de: Xn(),
  en: Kn(),
  es: Zn(),
  fr: _n(),
  nl: ar(),
  pt: nr(),
  it: rr(),
  pl: sr(),
  ru: or(),
  tr: ir(),
  zh_TW: fr(),
  vn: lr(),
  bg: ur(),
  kr: mr(),
  id: cr()
}, yr = le({
  name: "Datepicker",
  components: {
    DateInput: kn,
    PickerDay: Fn,
    PickerMonth: jn,
    PickerYear: Un
  },
  directives: {
    clickoutside: it
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
      validator: (e) => fn(e),
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
  setup(e, { emit: n }) {
    const t = new Date(e.modelValue), a = te(0), r = te(null);
    e.modelValue && un(t) && (a.value = t.getTime(), r.value = t), e.openDate && (a.value = Me(new Date(e.openDate), 1));
    const s = te(!1), o = te(!1), l = te(!1), y = te(0), D = te(/* @__PURE__ */ new Date()), p = b(() => e.initialView ? e.initialView : e.minimumView), M = b(() => new Date(a.value)), S = b(() => hr[e.language]), T = b(() => !!e.inline), E = b(() => ({
      position: T.value ? "static" : void 0
    })), z = b(() => s.value || o.value || l.value), Q = b(() => S.value && S.value.rtl === !0);
    function W(w) {
      w || (e.openDate ? w = new Date(e.openDate) : w = /* @__PURE__ */ new Date()), a.value = Me(new Date(w), 1);
    }
    function R(w) {
      const j = ["day", "month", "year"], Ne = j.indexOf(e.minimumView), tt = j.indexOf(e.maximumView), Ae = j.indexOf(w);
      return Ae >= Ne && Ae <= tt;
    }
    function q(w) {
      s.value = !1, o.value = !1, l.value = !1, T.value || w && n("closed");
    }
    function f() {
      return R("day") ? (q(), s.value = !0, !0) : !1;
    }
    function u() {
      return R("month") ? (q(), o.value = !0, !0) : !1;
    }
    function N() {
      return R("year") ? (q(), l.value = !0, !0) : !1;
    }
    function c() {
      const w = p.value;
      if (!R(w))
        throw new Error(
          `initialView '${w}' cannot be rendered based on minimum '${e.minimumView}' and maximum '${e.maximumView}'`
        );
      switch (w) {
        case "year":
          N();
          break;
        case "month":
          u();
          break;
        default:
          f();
          break;
      }
    }
    function P() {
      return e.disabled || T.value ? !1 : z.value ? q(!0) : (c(), n("opened"), !0);
    }
    function L(w) {
      if (!Number.isNaN(w)) {
        const j = new Date(w);
        r.value = j, W(j), n("selected", j), n("update:modelValue", j), n("input", j);
      }
    }
    function se() {
      r.value = null, W(), n("selected", null), e.modelValue ? n("update:modelValue", null) : n("input", null), n("cleared");
    }
    function ee(w) {
      L(w.timestamp), T.value || q(!0), D.value = /* @__PURE__ */ new Date();
    }
    function oe(w) {
      n("selected-disabled", w);
    }
    function i(w) {
      const j = new Date(w.timestamp);
      R("day") ? (W(j), f()) : ee(w), n("changed-month", w);
    }
    function m(w) {
      const j = new Date(w.timestamp);
      R("month") ? (W(j), u()) : ee(w), n("changed-year", w);
    }
    function h(w) {
      let j = w;
      if (typeof w == "string" || typeof w == "number") {
        const Ne = new Date(w);
        j = Number.isNaN(Ne.valueOf()) ? "" : Ne;
      }
      if (!j) {
        W(), r.value = null;
        return;
      }
      r.value = j, W(w);
    }
    function ne(w) {
      W(w), n("changed-month", w);
    }
    function de(w) {
      L(w.getTime());
    }
    function _e() {
      e.value && h(e.value), T.value && c();
    }
    function et() {
      q();
    }
    return fe(
      () => e.modelValue,
      (w) => {
        h(w);
      }
    ), fe(
      () => e.value,
      (w) => {
        h(w);
      }
    ), fe(
      () => e.openDate,
      () => {
        W();
      }
    ), fe(
      () => e.initialView,
      () => {
        c();
      }
    ), _e(), {
      pageTimestamp: a,
      selectedDate: r,
      showDayView: s,
      showMonthView: o,
      showYearView: l,
      calendarHeight: y,
      resetTypedDate: D,
      // computed
      pageDate: M,
      translation: S,
      calendarStyle: E,
      isOpen: z,
      isInline: T,
      isRtl: Q,
      // methods
      setTypedDate: de,
      handleChangedMonthFromDayPicker: ne,
      selectYear: m,
      selectMonth: i,
      selectDisabledDate: oe,
      clearDate: se,
      showCalendar: P,
      close: q,
      allowedToShowView: R,
      showYearCalendar: N,
      showMonthCalendar: u,
      setPageDate: W,
      selectDate: ee,
      closeOnClickOutside: et,
      showDayCalendar: f,
      computedInitialView: p,
      setDate: Me,
      setDate1: L,
      setValue: h
    };
  }
});
function wr(e, n, t, a, r, s) {
  const o = he("date-input"), l = he("picker-day"), y = he("picker-month"), D = he("picker-year"), p = st("clickoutside");
  return ke((v(), k("div", {
    class: V(["vuejs3-datepicker", [e.isRtl ? "rtl" : "", `vuejs3-${e.theme}`, e.wrapperClass]])
  }, [
    Oe(o, {
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
      belowDate: re(() => [
        x(e.$slots, "belowDate")
      ]),
      _: 3
    }, 8, ["selectedDate", "resetTypedDate", "format", "translation", "inline", "id", "name", "fullMonthName", "openDate", "placeholder", "inputClass", "typeable", "clearButton", "clearButtonIcon", "calendarButton", "calendarButtonIcon", "calendarButtonIconContent", "disabled", "required", "addBootstrapClass", "use-utc", "onShowCalendar", "onCloseCalendar", "onTypedDate", "onClearDate", "minimumView", "maximumView", "hideInput", "iconWidth", "iconHeight", "iconColor", "theme"]),
    e.allowedToShowView("day") ? (v(), Se(l, {
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
      customCalendarHeader: re(() => [
        x(e.$slots, "customCalendarHeader")
      ]),
      formatDateTopBar: re(() => [
        x(e.$slots, "formatDateTopBar")
      ]),
      _: 3
    }, 8, ["pageDate", "selectedDate", "showDayView", "fullMonthName", "allowedToShowView", "disabledDates", "highlighted", "calendarClass", "calendarStyle", "translation", "pageTimestamp", "isRtl", "mondayFirst", "dayCellContent", "onChangedMonth", "onSelectDate", "onShowMonthCalendar", "onSelectedDisabled", "onShowYearCalendar", "minimumView", "maximumView", "preventDisableDateSelection", "theme"])) : J("", !0),
    e.allowedToShowView("month") ? (v(), Se(y, {
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
      customCalendarHeader: re(() => [
        x(e.$slots, "customCalendarHeader")
      ]),
      formatDateTopBar: re(() => [
        x(e.$slots, "formatDateTopBar")
      ]),
      _: 3
    }, 8, ["pageDate", "selectedDate", "showMonthView", "allowedToShowView", "disabledDates", "calendarClass", "calendarStyle", "translation", "isRtl", "use-utc", "fullMonthName", "onSelectMonth", "onShowYearCalendar", "onChangedYear", "minimumView", "maximumView", "theme"])) : J("", !0),
    e.allowedToShowView("year") ? (v(), Se(D, {
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
      customCalendarHeader: re(() => [
        x(e.$slots, "customCalendarHeader")
      ]),
      formatDateTopBar: re(() => [
        x(e.$slots, "formatDateTopBar")
      ]),
      _: 3
    }, 8, ["pageDate", "selectedDate", "showYearView", "allowedToShowView", "disabledDates", "calendarClass", "calendarStyle", "translation", "isRtl", "use-utc", "onSelectYear", "onChangedDecade", "fullMonthName", "minimumView", "maximumView", "theme"])) : J("", !0)
  ], 2)), [
    [p, {
      handler: e.inline ? null : e.closeOnClickOutside
    }]
  ]);
}
const Dr = /* @__PURE__ */ ue(yr, [["render", wr]]);
export {
  Dr as default
};
