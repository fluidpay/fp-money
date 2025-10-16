var p = Object.defineProperty;
var f = (t, e, i) => e in t ? p(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var r = (t, e, i) => f(t, typeof e != "symbol" ? e + "" : e, i);
import { defineComponent as y, createElementBlock as m, openBlock as v } from "vue";
const u = {
  USD: { symbol: "$", fraction: 2 },
  CAD: { symbol: "$", fraction: 2 },
  EUR: { symbol: "€", fraction: 2 },
  MXN: { symbol: "$", fraction: 2 },
  AUD: { symbol: "$", fraction: 2 },
  SEK: { symbol: "kr", fraction: 2 },
  NOK: { symbol: "kr", fraction: 2 },
  DKK: { symbol: "kr", fraction: 2 },
  GBP: { symbol: "£", fraction: 2 },
  INR: { symbol: "₹", fraction: 2 },
  CRC: { symbol: "₡", fraction: 2 },
  VND: { symbol: "₫", fraction: 0 },
  HUF: { symbol: "Ft", fraction: 2 },
  ILS: { symbol: "₪", fraction: 2 },
  CNY: { symbol: "¥", fraction: 2 },
  KRW: { symbol: "₩", fraction: 0 },
  NGN: { symbol: "₦", fraction: 2 },
  PYG: { symbol: "₲", fraction: 0 },
  PHP: { symbol: "₱", fraction: 2 },
  PLN: { symbol: "zł", fraction: 2 },
  THB: { symbol: "฿", fraction: 2 },
  UAH: { symbol: "₴", fraction: 2 },
  PEN: { symbol: "S/", fraction: 2 },
  RUB: { symbol: "₽", fraction: 2 },
  JPY: { symbol: "¥", fraction: 0 }
};
function c(t, e = 2) {
  t = t.toString(), t === "" && (t = "0");
  let i = "1";
  for (let n = 0; n < e; n++)
    i += "0";
  const s = parseInt(i, 10);
  return t.indexOf(".") !== -1 && (t = (parseFloat(t) * s).toString()), e === 0 ? parseInt(t, 10) : parseFloat((parseInt(t, 10) / s).toFixed(e));
}
function l(t, e = 2) {
  const i = t.toString();
  if (i.trim() === "")
    return 0;
  let s = "1";
  for (let o = 0; o < e; o++)
    s += "0";
  const n = parseInt(s, 10), a = Math.round(parseFloat(i) * n).toString();
  return parseInt(a, 10);
}
function b(t, e, i, s = h()) {
  return new Intl.NumberFormat(s, {
    localeMatcher: "best fit",
    style: "currency",
    currency: e.toUpperCase(),
    currencyDisplay: "symbol",
    minimumFractionDigits: i,
    maximumFractionDigits: i
  }).format(c(t, i));
}
function h() {
  return window.global && typeof window.global.navigator > "u" ? "en-US" : navigator.languages !== void 0 ? navigator.languages[0] : navigator.language ? navigator.language : "en-US";
}
function g(t) {
  return String(t).indexOf("-") !== -1;
}
class O {
  constructor(e) {
    r(this, "container");
    r(this, "currencyDiv");
    r(this, "input");
    r(this, "select");
    r(this, "mobileOs");
    // Input items
    r(this, "isNegative", !1);
    r(this, "value", "");
    r(this, "display", "");
    r(this, "format", "");
    r(this, "currencies", JSON.parse(JSON.stringify(u)));
    r(this, "currency", "");
    // default is set in the constructor
    r(this, "locale", h());
    r(this, "valueFormat", "float");
    r(this, "minValue");
    r(this, "maxValue");
    r(this, "step", 1);
    r(this, "disabled", !1);
    r(this, "displayOnly", !1);
    r(this, "showSelection", !1);
    // Callbacks
    r(this, "onChange");
    r(this, "debounceUpdateOutput", S(() => {
      this.updateOutput();
    }));
    this.validate(e), this.mobileOs = this.getMobileOs();
    let i;
    if (typeof e.container == "string" ? i = document.querySelector(e.container) : i = e.container, !i)
      throw new Error("Container not found");
    this.container = i, e.currencies && (this.currencies = JSON.parse(JSON.stringify(e.currencies))), e.currency && this.currencies[e.currency] ? this.currency = e.currency.toUpperCase() : this.currency = Object.keys(this.currencies)[0], e.locale && (this.locale = e.locale), e.valueFormat && (this.valueFormat = e.valueFormat), e.value !== void 0 && this.setValue(e.value), e.minValue !== void 0 && (this.minValue = l(e.minValue, this.currencies[this.currency].fraction)), e.maxValue !== void 0 && (this.maxValue = l(e.maxValue, this.currencies[this.currency].fraction)), e.step && (this.step = e.step), e.disabled === !0 && (this.disabled = !0), e.displayOnly === !0 && (this.displayOnly = !0), e.showSelection !== void 0 && (this.showSelection = e.showSelection), this.onChange = e.onChange ? this.onChange = e.onChange : () => {
    }, this.currencyDiv = document.createElement("div"), this.input = document.createElement("input"), this.mobileOs === "android" && (this.input.inputMode = "numeric"), this.mobileOs === "ios" && (this.input.inputMode = "numeric", this.input.pattern = "[0-9]*"), this.select = document.createElement("select"), this.render(), this.setCurrency(this.currency), this.disabled && this.setDisabled(this.disabled), this.displayOnly && this.setDisplayOnly(this.displayOnly);
  }
  setValue(e) {
    const i = this.currencies[this.currency].fraction;
    this.isFraction(e) && this.valueFormat === "int" ? e = c(e, i).toString() : this.isFraction(e) && this.valueFormat === "float" ? e = l(e, i).toString() : e = e.toString(), this.value.toString() !== e && (this.isNegative = g(e), this.value = e, this.debounceUpdateOutput());
  }
  setCurrencies(e) {
    this.currencies = JSON.parse(JSON.stringify(e)), this.currencies[this.currency] || (this.currency = Object.keys(this.currencies)[0]), this.updateCurrenciesSelect(), this.setCurrency(this.currency);
  }
  setCurrency(e) {
    e || (e = Object.keys(this.currencies)[0]), this.currency = e.toUpperCase(), this.currencyDiv.innerHTML = this.currencies[this.currency].symbol;
    const i = this.currencies[this.currency].fraction;
    let s = "";
    for (let n = 0; n < i; n++)
      s += "0";
    this.input.placeholder = "0" + (i === 0 ? "" : "." + s), this.select.value = this.currency, this.debounceUpdateOutput();
  }
  setLocale(e) {
    this.locale = e, this.debounceUpdateOutput();
  }
  setDisabled(e) {
    this.disabled = e, this.disabled ? (this.container.classList.add("disabled"), this.input.disabled = !0, this.select.disabled = !0) : (this.container.classList.remove("disabled"), this.input.disabled = !1, this.select.disabled = !1);
  }
  setDisplayOnly(e) {
    this.displayOnly = e, this.displayOnly ? (this.container.classList.add("display-only"), this.input.tabIndex = -1, this.input.readOnly = !0, this.select.disabled = !0) : (this.container.classList.remove("display-only"), this.input.readOnly = !1, this.input.removeAttribute("tabindex"), this.select.disabled = !1);
  }
  destroy() {
    this.container.innerHTML = "";
  }
  validate(e) {
    let i;
    if (typeof e.container == "string" ? i = document.querySelector(e.container) : i = e.container, !i)
      throw new Error("Could not find container");
  }
  updateOutput() {
    if (this.value !== "") {
      let e = parseInt(this.value, 10);
      this.minValue !== void 0 && e < this.minValue && (e = this.minValue), this.maxValue !== void 0 && e > this.maxValue && (e = this.maxValue), this.value = e.toString();
    }
    this.isNegative ? (this.value = "-" + this.value.replace("-", ""), this.value === "-" && (this.value = "")) : this.value = this.value.replace("-", ""), this.format = c(this.value, this.currencies[this.currency].fraction).toFixed(
      this.currencies[this.currency].fraction
    ), this.display = b(this.value, this.currency, this.currencies[this.currency].fraction, this.locale), this.updateInputDisplay(), this.onChange({
      value: this.value,
      display: this.display,
      format: this.format,
      currency: this.currency,
      locale: this.locale
    });
  }
  updateInputDisplay() {
    if (this.value === "") {
      this.input.value = "";
      return;
    }
    let e = this.display.replace(this.currencies[this.currency.toUpperCase()].symbol, "");
    const i = this.currency;
    e = e.replace(i, ""), i.split("").forEach((s, n) => {
      e = e.replace(i.substring(0, i.length - n), "");
    });
    for (const s in u)
      Object.prototype.hasOwnProperty.call(u, s) && (e = e.replace(s, ""), e = e.replace(u[s].symbol, ""));
    e = e.trim(), this.isNegative && (e = "-" + e.replace("-", "")), this.input.value = e;
  }
  render() {
    this.container.classList.add("fpm"), this.currencyDiv.classList.add("fpm-currency"), this.input.classList.add("fpm-value"), this.input.dataset.lpignore = "true", this.select.classList.add("fpm-select"), this.input.addEventListener(
      "keydown",
      (e) => {
        this.inputKeydown(e);
      },
      !1
    ), this.input.addEventListener(
      "click",
      (e) => {
        if (this.displayOnly) {
          e.preventDefault();
          return;
        }
        this.input.focus(), this.moveCursorToEnd(this.input);
      },
      !1
    ), this.displayOnly && this.setDisplayOnly(!0), this.updateCurrenciesSelect(), this.select.addEventListener("change", () => {
      this.setCurrency(this.select.value);
    }), this.container.appendChild(this.currencyDiv), this.container.appendChild(this.input), this.showSelection && this.container.appendChild(this.select);
  }
  // For the currency select dropdown to update options
  updateCurrenciesSelect() {
    this.select.innerHTML = "";
    for (const e in this.currencies)
      if (Object.prototype.hasOwnProperty.call(this.currencies, e)) {
        const i = document.createElement("option");
        i.value = e, i.text = e.toUpperCase(), this.select.appendChild(i);
      }
  }
  // Check if value is a fraction
  isFraction(e) {
    return e.toString().includes(".");
  }
  // Deal with key inputs into money field
  inputKeydown(e) {
    if (this.displayOnly) {
      e.preventDefault();
      return;
    }
    const i = e.key, s = i.charCodeAt(0);
    if (i.toLowerCase() === "unidentified") {
      e.preventDefault(), setTimeout(() => {
        this.updateOutput();
      }, 100);
      return;
    }
    if (s === 68 || s === 66) {
      e.preventDefault(), this.value = this.value.substring(0, this.value.length - 1), this.value === "-" && (this.value = ""), this.updateOutput();
      return;
    }
    if (s >= 48 && s <= 57) {
      e.preventDefault(), this.value += e.key, this.updateOutput();
      return;
    }
    if (s !== 84) {
      if (s === 43) {
        e.preventDefault(), this.isNegative = !1, this.updateOutput();
        return;
      }
      if (s === 45) {
        if (e.preventDefault(), this.minValue !== void 0 && this.minValue >= 0)
          return;
        this.isNegative = !0, this.updateOutput();
        return;
      }
      if (i === "ArrowUp") {
        e.preventDefault(), this.value = String(parseInt(this.value, 10) + l(this.step)), this.updateOutput();
        return;
      }
      if (i === "ArrowDown") {
        e.preventDefault(), this.value = String(parseInt(this.value, 10) - l(this.step)), this.updateOutput();
        return;
      }
      e.preventDefault(), e.stopPropagation();
    }
  }
  // Will take in an element and select the end of the input field
  moveCursorToEnd(e) {
    e.setSelectionRange(e.value.length, e.value.length);
  }
  getMobileOs() {
    const e = navigator.userAgent || navigator.vendor;
    return /Windows Phone|iemobile/.test(e) ? "windows" : /android/i.test(e) ? "android" : /iPad|iPhone|iPod/.test(e) ? "ios" : "unknown";
  }
}
function S(t, e = 50, i = !1) {
  let s;
  return function(...n) {
    const a = self, o = () => {
      s = null, i || t.apply(a, n);
    }, d = i && !s;
    clearTimeout(s), s = setTimeout(o, e), d && t.apply(a, n);
  };
}
const C = y({
  name: "Fpmoney",
  emits: ["update:modelValue", "update:currency", "update:locale", "update:format", "update:display"],
  props: {
    modelValue: {
      type: [String, Number],
      validator: (t) => ["string", "number"].includes(typeof t) || t === null
    },
    currency: {
      type: String,
      required: !1,
      default: null
    },
    locale: {
      type: String,
      required: !1,
      default: null
    },
    format: {
      type: String,
      required: !1,
      default: null
    },
    display: {
      type: String,
      required: !1,
      default: null
    },
    // One way bindings
    currencies: {
      type: Object,
      required: !1,
      default: null
    },
    minValue: {
      type: Number,
      required: !1,
      default: null
    },
    maxValue: {
      type: Number,
      required: !1,
      default: null
    },
    step: {
      type: Number,
      required: !1,
      default: null
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    displayOnly: {
      type: Boolean,
      default: !1
    },
    valueFormat: {
      type: String,
      required: !1,
      default: "float"
    },
    showSelection: {
      type: Boolean,
      default: !1
    },
    // Callbacks
    onChange: {
      type: Function,
      required: !1,
      default: null
    }
  },
  data() {
    return {
      fpmoney: null,
      values: {
        value: "",
        format: "",
        display: "",
        currency: "",
        locale: ""
      }
    };
  },
  mounted() {
    this.init();
  },
  watch: {
    modelValue(t, e) {
      !this.fpmoney || t?.toString() === e?.toString() || this.fpmoney.setValue(t);
    },
    currencies(t, e) {
      !this.fpmoney || JSON.stringify(t) === JSON.stringify(e) || this.fpmoney.setCurrencies(t);
    },
    currency(t, e) {
      !this.fpmoney || t?.toLowerCase() === e?.toLowerCase() || this.fpmoney.setCurrency(t);
    },
    locale(t, e) {
      !this.fpmoney || t?.toLowerCase() === e?.toLowerCase() || this.fpmoney.setLocale(t);
    },
    disabled(t) {
      this.fpmoney && this.fpmoney.setDisabled(t);
    },
    displayOnly(t) {
      this.fpmoney && this.fpmoney.setDisplayOnly(t);
    }
  },
  methods: {
    init() {
      const t = {
        container: this.$refs.fpmoney,
        onChange: (e) => {
          this.values = e, this.$emit("update:modelValue", this.valueFormat === "int" ? this.values.value : this.values.format), this.$emit("update:format", this.values.format), this.$emit("update:display", this.values.display), this.$emit("update:currency", this.values.currency), this.$emit("update:locale", this.values.locale), this.onChange && this.onChange(e);
        }
      };
      this.currencies ? t.currencies = this.currencies : t.currencies = u, this.currency && this.currencies && this.currencies[this.currency] ? t.currency = this.currency : t.currency = Object.keys(t.currencies)[0], this.valueFormat && (t.valueFormat = this.valueFormat), this.modelValue !== void 0 && this.modelValue !== null && (t.value = this.modelValue), this.locale && (t.locale = this.locale), this.minValue !== void 0 && this.minValue !== null && (t.minValue = this.minValue), this.maxValue !== void 0 && this.maxValue !== null && (t.maxValue = this.maxValue), this.step !== void 0 && this.step !== null && (t.step = this.step), this.disabled && (t.disabled = !0), this.displayOnly && (t.displayOnly = !0), t.showSelection = this.showSelection, this.fpmoney = new O(t);
    }
  }
}), V = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [s, n] of e)
    i[s] = n;
  return i;
}, w = { ref: "fpmoney" };
function D(t, e, i, s, n, a) {
  return v(), m("div", w, null, 512);
}
const x = /* @__PURE__ */ V(C, [["render", D]]);
export {
  x as default
};
