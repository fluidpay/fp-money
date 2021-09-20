export interface Currency {
  symbol: string
  fraction: number
}

export interface Currencies {
  [currency: string]: Currency
}

export const currencies: Currencies = {
  USD: { symbol: '$', fraction: 2 },
  CAD: { symbol: '$', fraction: 2 },
  EUR: { symbol: '€', fraction: 2 },
  MXN: { symbol: '$', fraction: 2 },
  AUD: { symbol: '$', fraction: 2 },
  SEK: { symbol: 'kr', fraction: 2 },
  NOK: { symbol: 'kr', fraction: 2 },
  DKK: { symbol: 'kr', fraction: 2 },
  GBP: { symbol: '£', fraction: 2 },
  INR: { symbol: '₹', fraction: 2 },
  CRC: { symbol: '₡', fraction: 2 },
  VND: { symbol: '₫', fraction: 0 },
  HUF: { symbol: 'Ft', fraction: 2 },
  ILS: { symbol: '₪', fraction: 2 },
  CNY: { symbol: '¥', fraction: 2 },
  KRW: { symbol: '₩', fraction: 0 },
  NGN: { symbol: '₦', fraction: 2 },
  PYG: { symbol: '₲', fraction: 0 },
  PHP: { symbol: '₱', fraction: 2 },
  PLN: { symbol: 'zł', fraction: 2 },
  THB: { symbol: '฿', fraction: 2 },
  UAH: { symbol: '₴', fraction: 2 },
  PEN: { symbol: 'S/', fraction: 2 },
  JPY: { symbol: '¥', fraction: 0 }
}

export function intToFraction (val: string | number, fraction = 2): number {
  val = val.toString()
  if (val === '') { val = '0' }

  // Create divide first
  let divide = '1'
  for (let i = 0; i < fraction; i++) { divide += '0' }
  const divideInt = parseInt(divide, 10)

  // If val includes . lets multiply it first
  if (val.indexOf('.') !== -1) {
    val = (parseFloat(val) * divideInt).toString()
  }

  // If fraction is 0 parseInt and return it
  if (fraction === 0) { return parseInt(val, 10) }

  return parseFloat((parseInt(val, 10) / divideInt).toFixed(fraction))
}

export function fractionToInt (val: string | number, fraction = 2): number {
  const valStr = val.toString()
  if (valStr.trim() === '') { return 0 }

  let multi = '1'
  for (let i = 0; i < fraction; i++) { multi += '0' }
  const multiInt = parseInt(multi, 10)

  const valFloat = Math.round(parseFloat(valStr) * multiInt).toString()

  return parseInt(valFloat, 10)
}

export function percentOfValue (val: string | number, perc: string | number, fraction: number, round = 'round'): number {
  // Get a clean number from either string or number
  val = val.toString()
  if (val.trim() === '') { return 0 }
  val = parseFloat(val)

  // Get a clean percentage from either string or number
  perc = perc.toString()
  if (perc.trim() === '') { return 0 }
  perc = parseFloat(perc)

  // Get fraction multiplier
  let multi = '1'
  for (let i = 0; i < fraction; i++) { multi += '0' }
  const multiInt = parseInt(multi, 10)

  // Decide which math round to use
  if (round === 'ceil') {
    return Math.ceil(Number(((val / 100) * perc).toFixed(5)) * multiInt) / multiInt
  } else if (round === 'floor') {
    return Math.floor(Number(((val / 100) * perc).toFixed(5)) * multiInt) / multiInt
  } else if (round === 'round') {
    return Math.round(Number(((val / 100) * perc).toFixed(5)) * multiInt) / multiInt
  } else if (round === 'bankers') {
    return bankersRounding(Number(((val / 100) * perc).toFixed(5)) * multiInt, 0) / multiInt
  }

  // Fallback to using round
  return Math.round(Number(((val / 100) * perc).toFixed(5)) * multiInt) / multiInt
}

export function displayValue (value: string | number, currency: string, fraction: number, locale: string = getLocale()): string {
  const formatter = new Intl.NumberFormat(locale, {
    localeMatcher: 'best fit',
    style: 'currency',
    currency: currency.toUpperCase(),
    currencyDisplay: 'symbol',

    minimumFractionDigits: fraction,
    maximumFractionDigits: fraction
  })

  return formatter.format(intToFraction(value, fraction))
}

// Try to identify the users locale - default en-US
export function getLocale (): string {
  if (navigator.languages !== undefined) {
    return navigator.languages[0]
  } else if (navigator.language) {
    return navigator.language
  } else {
    return 'en-US'
  }
}

// Takes in a value and identifies if its a positive or negative number
export function isNegative (value: string | number): boolean {
  return String(value).indexOf('-') !== -1
}

export function bankersRounding (num: number, fraction: number): number {
  const d = fraction || 0
  const m = Math.pow(10, d)
  const n = +(d ? num * m : num).toFixed(8)
  const i = Math.floor(n)
  const f = n - i
  const e = 1e-8
  const r = (f > 0.5 - e && f < 0.5 + e) ? ((i % 2 === 0) ? i : i + 1) : Math.round(n)

  return d ? r / m : r
}
