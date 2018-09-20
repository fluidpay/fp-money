export interface Currencies {
  [currency: string]: Currency
}

export interface Currency {
  symbol: string
  fraction: number
}

export const currencies: Currencies = {
  USD: { symbol: '$', fraction: 2 },
  EUR: { symbol: '€', fraction: 2 },
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
  JPY: { symbol: '¥', fraction: 0 }
}

export function intToFraction(val: string | number, fraction: number = 2): number {
  val = val.toString()

  // Create divide first
  let divide = '1'
  for (let i = 0; i < fraction; i++) { divide += '0'}
  const divideInt = parseInt(divide, 10)

  // If val includes . lets multiply it first
  if (val.indexOf('.') !== -1) {
    val = (parseFloat(val) * divideInt).toString()
  }

  // If fraction is 0 parseInt and return it
  if (fraction === 0) { return parseInt(val, 10) }

  return parseFloat((parseInt(val, 10) / divideInt).toFixed(fraction))
}

export function fractionToInt(val: string | number, fraction: number = 2): number {
  const valStr = val.toString()

  let multi = '1'
  for (let i = 0; i < fraction; i++) { multi += '0'}
  const multiInt = parseInt(multi, 10)

  const valFloat = (parseFloat(valStr) * multiInt).toString()

  return parseInt(valFloat, 10)
}

export function displayValue(value: string | number, currency: string, locale: string = getLocale()): string {
  const fraction = currencies[currency.toUpperCase()].fraction
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
export function getLocale(): string {
  if (navigator.languages !== undefined) {
    return navigator.languages[0]
  } else if (navigator.language) {
    return navigator.language
  } else {
    return 'en-US'
  }
}
