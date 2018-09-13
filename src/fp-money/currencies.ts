export interface Currencies {
  [currency: string]: Currency
}

export interface Currency {
  symbol: string
  fraction: number
}

export default {
  USD: { symbol: '$', fraction: 2 },
  EUR: { symbol: '€', fraction: 2 },
  GBP: { symbol: '£', fraction: 2 },
  INR: { symbol: '₹', fraction: 2 },
  VND: { symbol: '₫', fraction: 0 },
  ILS: { symbol: '₪', fraction: 2 },
  JPY: { symbol: '¥', fraction: 0 },
  CNY: { symbol: '¥', fraction: 2 },
  CRC: { symbol: '₡', fraction: 2 },
  NGN: { symbol: '₦', fraction: 2 },
  PYG: { symbol: '₲', fraction: 0 },
  PHP: { symbol: '₱', fraction: 2 },
  PLN: { symbol: 'zł', fraction: 2 },
  THB: { symbol: '฿', fraction: 2 },
  UAH: { symbol: '₴', fraction: 2 },
  KRW: { symbol: '₩', fraction: 0 }
} as Currencies
