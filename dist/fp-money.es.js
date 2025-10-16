var f = Object.defineProperty;
var y = (i, t, e) => t in i ? f(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var a = (i, t, e) => y(i, typeof t != "symbol" ? t + "" : t, e);
const h = {
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
function d(i, t = 2) {
  i = i.toString(), i === "" && (i = "0");
  let e = "1";
  for (let r = 0; r < t; r++)
    e += "0";
  const s = parseInt(e, 10);
  return i.indexOf(".") !== -1 && (i = (parseFloat(i) * s).toString()), t === 0 ? parseInt(i, 10) : parseFloat((parseInt(i, 10) / s).toFixed(t));
}
function c(i, t = 2) {
  const e = i.toString();
  if (e.trim() === "")
    return 0;
  let s = "1";
  for (let l = 0; l < t; l++)
    s += "0";
  const r = parseInt(s, 10), n = Math.round(parseFloat(e) * r).toString();
  return parseInt(n, 10);
}
function S(i, t, e, s = "round") {
  if (i = i.toString(), i.trim() === "" || (i = parseFloat(i), t = t.toString(), t.trim() === ""))
    return 0;
  t = parseFloat(t);
  let r = "1";
  for (let l = 0; l < e; l++)
    r += "0";
  const n = parseInt(r, 10);
  return s === "ceil" ? Math.ceil(Number((i / 100 * t).toFixed(5)) * n) / n : s === "floor" ? Math.floor(Number((i / 100 * t).toFixed(5)) * n) / n : s === "round" ? Math.round(Number((i / 100 * t).toFixed(5)) * n) / n : s === "bankers" ? g(Number((i / 100 * t).toFixed(5)) * n, 0) / n : Math.round(Number((i / 100 * t).toFixed(5)) * n) / n;
}
function m(i, t, e, s = p()) {
  return new Intl.NumberFormat(s, {
    localeMatcher: "best fit",
    style: "currency",
    currency: t.toUpperCase(),
    currencyDisplay: "symbol",
    minimumFractionDigits: e,
    maximumFractionDigits: e
  }).format(d(i, e));
}
function p() {
  return window.global && typeof window.global.navigator > "u" ? "en-US" : navigator.languages !== void 0 ? navigator.languages[0] : navigator.language ? navigator.language : "en-US";
}
function b(i) {
  return String(i).indexOf("-") !== -1;
}
function g(i, t) {
  const e = t || 0, s = Math.pow(10, e), r = +(e ? i * s : i).toFixed(8), n = Math.floor(r), l = r - n, u = 1e-8, o = l > 0.5 - u && l < 0.5 + u ? n % 2 === 0 ? n : n + 1 : Math.round(r);
  return e ? o / s : o;
}
function C(i, t, e) {
  const s = i.toString();
  if (s.trim() === "")
    return 0;
  i = parseFloat(s);
  const r = t.toString();
  if (r.trim() === "")
    return 0;
  t = parseFloat(r);
  let n = "1";
  for (let o = 0; o < e; o++)
    n += "0";
  const l = parseInt(n, 10), u = 1 + t / 100;
  return Math.round(Number((i / u).toFixed(5)) * l) / l;
}
class F {
  constructor(t) {
    a(this, "container");
    a(this, "currencyDiv");
    a(this, "input");
    a(this, "select");
    a(this, "mobileOs");
    // Input items
    a(this, "isNegative", !1);
    a(this, "value", "");
    a(this, "display", "");
    a(this, "format", "");
    a(this, "currencies", JSON.parse(JSON.stringify(h)));
    a(this, "currency", "");
    // default is set in the constructor
    a(this, "locale", p());
    a(this, "valueFormat", "float");
    a(this, "minValue");
    a(this, "maxValue");
    a(this, "step", 1);
    a(this, "disabled", !1);
    a(this, "displayOnly", !1);
    a(this, "showSelection", !1);
    // Callbacks
    a(this, "onChange");
    a(this, "debounceUpdateOutput", v(() => {
      this.updateOutput();
    }));
    this.validate(t), this.mobileOs = this.getMobileOs();
    let e;
    if (typeof t.container == "string" ? e = document.querySelector(t.container) : e = t.container, !e)
      throw new Error("Container not found");
    this.container = e, t.currencies && (this.currencies = JSON.parse(JSON.stringify(t.currencies))), t.currency && this.currencies[t.currency] ? this.currency = t.currency.toUpperCase() : this.currency = Object.keys(this.currencies)[0], t.locale && (this.locale = t.locale), t.valueFormat && (this.valueFormat = t.valueFormat), t.value !== void 0 && this.setValue(t.value), t.minValue !== void 0 && (this.minValue = c(t.minValue, this.currencies[this.currency].fraction)), t.maxValue !== void 0 && (this.maxValue = c(t.maxValue, this.currencies[this.currency].fraction)), t.step && (this.step = t.step), t.disabled === !0 && (this.disabled = !0), t.displayOnly === !0 && (this.displayOnly = !0), t.showSelection !== void 0 && (this.showSelection = t.showSelection), this.onChange = t.onChange ? this.onChange = t.onChange : () => {
    }, this.currencyDiv = document.createElement("div"), this.input = document.createElement("input"), this.mobileOs === "android" && (this.input.inputMode = "numeric"), this.mobileOs === "ios" && (this.input.inputMode = "numeric", this.input.pattern = "[0-9]*"), this.select = document.createElement("select"), this.render(), this.setCurrency(this.currency), this.disabled && this.setDisabled(this.disabled), this.displayOnly && this.setDisplayOnly(this.displayOnly);
  }
  setValue(t) {
    const e = this.currencies[this.currency].fraction;
    this.isFraction(t) && this.valueFormat === "int" ? t = d(t, e).toString() : this.isFraction(t) && this.valueFormat === "float" ? t = c(t, e).toString() : t = t.toString(), this.value.toString() !== t && (this.isNegative = b(t), this.value = t, this.debounceUpdateOutput());
  }
  setCurrencies(t) {
    this.currencies = JSON.parse(JSON.stringify(t)), this.currencies[this.currency] || (this.currency = Object.keys(this.currencies)[0]), this.updateCurrenciesSelect(), this.setCurrency(this.currency);
  }
  setCurrency(t) {
    t || (t = Object.keys(this.currencies)[0]), this.currency = t.toUpperCase(), this.currencyDiv.innerHTML = this.currencies[this.currency].symbol;
    const e = this.currencies[this.currency].fraction;
    let s = "";
    for (let r = 0; r < e; r++)
      s += "0";
    this.input.placeholder = "0" + (e === 0 ? "" : "." + s), this.select.value = this.currency, this.debounceUpdateOutput();
  }
  setLocale(t) {
    this.locale = t, this.debounceUpdateOutput();
  }
  setDisabled(t) {
    this.disabled = t, this.disabled ? (this.container.classList.add("disabled"), this.input.disabled = !0, this.select.disabled = !0) : (this.container.classList.remove("disabled"), this.input.disabled = !1, this.select.disabled = !1);
  }
  setDisplayOnly(t) {
    this.displayOnly = t, this.displayOnly ? (this.container.classList.add("display-only"), this.input.tabIndex = -1, this.input.readOnly = !0, this.select.disabled = !0) : (this.container.classList.remove("display-only"), this.input.readOnly = !1, this.input.removeAttribute("tabindex"), this.select.disabled = !1);
  }
  destroy() {
    this.container.innerHTML = "";
  }
  validate(t) {
    let e;
    if (typeof t.container == "string" ? e = document.querySelector(t.container) : e = t.container, !e)
      throw new Error("Could not find container");
  }
  updateOutput() {
    if (this.value !== "") {
      let t = parseInt(this.value, 10);
      this.minValue !== void 0 && t < this.minValue && (t = this.minValue), this.maxValue !== void 0 && t > this.maxValue && (t = this.maxValue), this.value = t.toString();
    }
    this.isNegative ? (this.value = "-" + this.value.replace("-", ""), this.value === "-" && (this.value = "")) : this.value = this.value.replace("-", ""), this.format = d(this.value, this.currencies[this.currency].fraction).toFixed(
      this.currencies[this.currency].fraction
    ), this.display = m(this.value, this.currency, this.currencies[this.currency].fraction, this.locale), this.updateInputDisplay(), this.onChange({
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
    let t = this.display.replace(this.currencies[this.currency.toUpperCase()].symbol, "");
    const e = this.currency;
    t = t.replace(e, ""), e.split("").forEach((s, r) => {
      t = t.replace(e.substring(0, e.length - r), "");
    });
    for (const s in h)
      Object.prototype.hasOwnProperty.call(h, s) && (t = t.replace(s, ""), t = t.replace(h[s].symbol, ""));
    t = t.trim(), this.isNegative && (t = "-" + t.replace("-", "")), this.input.value = t;
  }
  render() {
    this.container.classList.add("fpm"), this.currencyDiv.classList.add("fpm-currency"), this.input.classList.add("fpm-value"), this.input.dataset.lpignore = "true", this.select.classList.add("fpm-select"), this.input.addEventListener(
      "keydown",
      (t) => {
        this.inputKeydown(t);
      },
      !1
    ), this.input.addEventListener(
      "click",
      (t) => {
        if (this.displayOnly) {
          t.preventDefault();
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
    for (const t in this.currencies)
      if (Object.prototype.hasOwnProperty.call(this.currencies, t)) {
        const e = document.createElement("option");
        e.value = t, e.text = t.toUpperCase(), this.select.appendChild(e);
      }
  }
  // Check if value is a fraction
  isFraction(t) {
    return t.toString().includes(".");
  }
  // Deal with key inputs into money field
  inputKeydown(t) {
    if (this.displayOnly) {
      t.preventDefault();
      return;
    }
    const e = t.key, s = e.charCodeAt(0);
    if (e.toLowerCase() === "unidentified") {
      t.preventDefault(), setTimeout(() => {
        this.updateOutput();
      }, 100);
      return;
    }
    if (s === 68 || s === 66) {
      t.preventDefault(), this.value = this.value.substring(0, this.value.length - 1), this.value === "-" && (this.value = ""), this.updateOutput();
      return;
    }
    if (s >= 48 && s <= 57) {
      t.preventDefault(), this.value += t.key, this.updateOutput();
      return;
    }
    if (s !== 84) {
      if (s === 43) {
        t.preventDefault(), this.isNegative = !1, this.updateOutput();
        return;
      }
      if (s === 45) {
        if (t.preventDefault(), this.minValue !== void 0 && this.minValue >= 0)
          return;
        this.isNegative = !0, this.updateOutput();
        return;
      }
      if (e === "ArrowUp") {
        t.preventDefault(), this.value = String(parseInt(this.value, 10) + c(this.step)), this.updateOutput();
        return;
      }
      if (e === "ArrowDown") {
        t.preventDefault(), this.value = String(parseInt(this.value, 10) - c(this.step)), this.updateOutput();
        return;
      }
      t.preventDefault(), t.stopPropagation();
    }
  }
  // Will take in an element and select the end of the input field
  moveCursorToEnd(t) {
    t.setSelectionRange(t.value.length, t.value.length);
  }
  getMobileOs() {
    const t = navigator.userAgent || navigator.vendor;
    return /Windows Phone|iemobile/.test(t) ? "windows" : /android/i.test(t) ? "android" : /iPad|iPhone|iPod/.test(t) ? "ios" : "unknown";
  }
}
function v(i, t = 50, e = !1) {
  let s;
  return function(...r) {
    const n = self, l = () => {
      s = null, e || i.apply(n, r);
    }, u = e && !s;
    clearTimeout(s), s = setTimeout(l, t), u && i.apply(n, r);
  };
}
export {
  g as bankersRounding,
  h as currencies,
  F as default,
  m as displayValue,
  c as fractionToInt,
  p as getLocale,
  d as intToFraction,
  b as isNegative,
  C as originalNumberFromPercentage,
  S as percentOfValue
};
