import { describe, it, assert, expect } from 'vitest'
import {
  displayValue,
  fractionToInt,
  intToFraction,
  percentOfValue,
  getLocale,
  isNegative,
  bankersRounding,
  originalNumberFromPercentage
} from './helpers'

interface PercentTest {
  val: number
  perc: number
  fraction: number
  round: string
  expected: number
}

describe('helpers', () => {
  describe('intToFraction', () => {
    it('should convert integer to fraction with 2 decimals', () => {
      assert.equal(intToFraction(100, 2), 1.0)
      assert.equal(intToFraction(12345, 2), 123.45)
      assert.equal(intToFraction(1, 2), 0.01)
    })

    it('should handle different fraction values', () => {
      assert.equal(intToFraction(1000, 0), 1000)
      assert.equal(intToFraction(1000, 1), 100)
      assert.equal(intToFraction(1000, 3), 1.0)
      assert.equal(intToFraction(12345678, 8), 0.12345678) // Bitcoin-like precision
    })

    it('should handle negative numbers', () => {
      assert.equal(intToFraction(-100, 2), -1.0)
      assert.equal(intToFraction(-12345, 2), -123.45)
    })

    it('should handle zero', () => {
      assert.equal(intToFraction(0, 2), 0)
    })

    it('should handle string inputs', () => {
      assert.equal(intToFraction('100', 2), 1.0)
      assert.equal(intToFraction('12345', 2), 123.45)
    })

    it('should handle very large numbers', () => {
      assert.equal(intToFraction(999999999, 2), 9999999.99)
    })
  })

  describe('fractionToInt', () => {
    it('should convert fraction to integer with 2 decimals', () => {
      assert.equal(fractionToInt(1.0, 2), 100)
      assert.equal(fractionToInt(123.45, 2), 12345)
      assert.equal(fractionToInt(0.01, 2), 1)
    })

    it('should handle different fraction values', () => {
      assert.equal(fractionToInt(1000, 0), 1000)
      assert.equal(fractionToInt(100, 1), 1000)
      assert.equal(fractionToInt(1.0, 3), 1000)
      assert.equal(fractionToInt(0.12345678, 8), 12345678) // Bitcoin-like precision
    })

    it('should handle negative numbers', () => {
      assert.equal(fractionToInt(-1.0, 2), -100)
      assert.equal(fractionToInt(-123.45, 2), -12345)
    })

    it('should handle zero', () => {
      assert.equal(fractionToInt(0, 2), 0)
    })

    it('should handle string inputs', () => {
      assert.equal(fractionToInt('1.0', 2), 100)
      assert.equal(fractionToInt('123.45', 2), 12345)
    })

    it('should handle floating point precision issues', () => {
      assert.equal(fractionToInt(0.1 + 0.2, 2), 30) // JavaScript floating point quirk
      assert.equal(fractionToInt(1.005, 2), 100) // Rounding edge case
    })

    it('should be inverse of intToFraction', () => {
      const original = 12345
      const decimal = intToFraction(original, 2)
      const backToInt = fractionToInt(decimal, 2)
      assert.equal(backToInt, original)
    })
  })

  describe('percentOfValue', () => {
    it('should calculate percentage with ceil rounding', () => {
      const tests = [
        { val: 1.0, perc: 10.25, fraction: 2, round: 'ceil', expected: 0.11 },
        { val: 100, perc: 10.501, fraction: 2, round: 'ceil', expected: 10.51 },
        { val: 898.0, perc: 56.7, fraction: 3, round: 'ceil', expected: 509.166 }
      ] as PercentTest[]

      for (const t of tests) {
        assert.equal(percentOfValue(t.val, t.perc, t.fraction, t.round), t.expected)
      }
    })

    it('should calculate percentage with floor rounding', () => {
      assert.equal(percentOfValue(1.0, 10.25, 2, 'floor'), 0.1)
      assert.equal(percentOfValue(100, 10.99, 2, 'floor'), 10.99)
      assert.equal(percentOfValue(50, 15.555, 2, 'floor'), 7.77)
    })

    it('should calculate percentage with standard rounding', () => {
      const tests = [
        { val: 1.0, perc: 10.25, fraction: 2, round: 'round', expected: 0.1 },
        { val: 1.0, perc: 10.5, fraction: 2, round: 'round', expected: 0.11 },
        { val: 100, perc: 10.5, fraction: 2, round: 'round', expected: 10.5 },
        { val: 100, perc: 7.5, fraction: 2, round: 'round', expected: 7.5 }
      ] as PercentTest[]

      for (const t of tests) {
        assert.equal(percentOfValue(t.val, t.perc, t.fraction, t.round), t.expected)
      }
    })

    it('should calculate percentage with bankers rounding', () => {
      const tests = [
        { val: 1.0, perc: 10.25, fraction: 2, round: 'bankers', expected: 0.1 },
        { val: 1.0, perc: 10.5, fraction: 2, round: 'bankers', expected: 0.1 }, // Even round down
        { val: 1.0, perc: 10.51, fraction: 2, round: 'bankers', expected: 0.11 },
        { val: 1.0, perc: 2.5, fraction: 2, round: 'bankers', expected: 0.02 }, // Even round down
        { val: 1.0, perc: 3.5, fraction: 2, round: 'bankers', expected: 0.04 } // Odd round up
      ] as PercentTest[]

      for (const t of tests) {
        assert.equal(percentOfValue(t.val, t.perc, t.fraction, t.round), t.expected)
      }
    })

    it('should handle edge cases', () => {
      assert.equal(percentOfValue(0, 10, 2, 'round'), 0)
      assert.equal(percentOfValue(100, 0, 2, 'round'), 0)
      assert.equal(percentOfValue(100, 100, 2, 'round'), 100)
    })
  })

  describe('displayValue', () => {
    it('should format USD correctly from integer (cents)', () => {
      assert.equal(displayValue(100, 'USD', 2), '$1.00')
      assert.equal(displayValue(123456, 'USD', 2), '$1,234.56')
      assert.equal(displayValue(1000000, 'USD', 2), '$10,000.00')
    })

    it('should format different currencies', () => {
      assert.equal(displayValue(100, 'EUR', 2), '€1.00')
      assert.equal(displayValue(100, 'GBP', 2), '£1.00')
      assert.equal(displayValue(100, 'JPY', 0), '¥100')
    })

    it('should handle zero-fraction currencies', () => {
      assert.equal(displayValue(1000, 'JPY', 0), '¥1,000')
      assert.equal(displayValue(500, 'KRW', 0), '₩500')
    })

    it('should handle high-precision currencies', () => {
      // Bitcoin-like 8 decimal places - 12345678 satoshis = 0.12345678 BTC
      // Note: Intl.NumberFormat may show full precision with 8 decimal places
      const result = displayValue(12345678, 'THB', 8, 'en-US')
      expect(result).toContain('0.12345678')
    })

    it('should handle negative values', () => {
      assert.equal(displayValue(-100, 'USD', 2), '-$1.00')
      assert.equal(displayValue(-123456, 'EUR', 2), '-€1,234.56')
    })

    it('should handle zero', () => {
      assert.equal(displayValue(0, 'USD', 2), '$0.00')
    })

    it('should handle very large numbers', () => {
      assert.equal(displayValue(123456789, 'USD', 2), '$1,234,567.89')
    })

    it('should use case-insensitive currency codes', () => {
      assert.equal(displayValue(100, 'usd', 2), '$1.00')
      assert.equal(displayValue(100, 'USD', 2), '$1.00')
      assert.equal(displayValue(100, 'UsD', 2), '$1.00')
    })
  })

  describe('getLocale', () => {
    it('should return a valid locale string', () => {
      const locale = getLocale()
      expect(locale).toBeTypeOf('string')
      expect(locale).toMatch(/^[a-z]{2}-[A-Z]{2}$/) // Format: en-US
    })
  })

  describe('isNegative', () => {
    it('should identify negative numbers', () => {
      assert.equal(isNegative(-1), true)
      assert.equal(isNegative(-100.5), true)
      assert.equal(isNegative('-50'), true)
    })

    it('should identify positive numbers as not negative', () => {
      assert.equal(isNegative(1), false)
      assert.equal(isNegative(100.5), false)
      assert.equal(isNegative('50'), false)
    })

    it('should handle zero', () => {
      assert.equal(isNegative(0), false)
      assert.equal(isNegative('0'), false)
    })

    it('should handle string inputs', () => {
      assert.equal(isNegative('-123.45'), true)
      assert.equal(isNegative('123.45'), false)
    })
  })

  describe('bankersRounding', () => {
    it('should round .5 to nearest even number', () => {
      assert.equal(bankersRounding(0.5, 0), 0) // 0 is even
      assert.equal(bankersRounding(1.5, 0), 2) // Round up to 2
      assert.equal(bankersRounding(2.5, 0), 2) // Round down to 2
      assert.equal(bankersRounding(3.5, 0), 4) // Round up to 4
    })

    it('should handle decimal places', () => {
      assert.equal(bankersRounding(1.225, 2), 1.22) // Round down to even
      assert.equal(bankersRounding(1.235, 2), 1.24) // Round up to even
      assert.equal(bankersRounding(1.245, 2), 1.24) // Round down to even
      assert.equal(bankersRounding(1.255, 2), 1.26) // Round up to even
    })

    it('should handle negative numbers', () => {
      assert.equal(bankersRounding(-0.5, 0), 0)
      assert.equal(bankersRounding(-1.5, 0), -2)
      assert.equal(bankersRounding(-2.5, 0), -2)
    })

    it('should handle numbers that dont need rounding', () => {
      assert.equal(bankersRounding(1.0, 2), 1.0)
      assert.equal(bankersRounding(123.45, 2), 123.45)
    })
  })

  describe('originalNumberFromPercentage', () => {
    it('should calculate original value before percentage increase', () => {
      // If 15 is the result after a 50% increase, original was 15 / 1.5 = 10
      assert.equal(originalNumberFromPercentage(15, 50, 2), 10)

      // If 125 is the result after a 25% increase, original was 125 / 1.25 = 100
      assert.equal(originalNumberFromPercentage(125, 25, 2), 100)

      // If 110 is the result after a 10% increase, original was 110 / 1.1 = 100
      assert.equal(originalNumberFromPercentage(110, 10, 2), 100)
    })

    it('should handle decimal results', () => {
      assert.equal(originalNumberFromPercentage(15.5, 25, 2), 12.4)
      assert.equal(originalNumberFromPercentage(11.5, 15, 2), 10)
    })

    it('should handle different fraction precision', () => {
      assert.equal(originalNumberFromPercentage(15, 50, 0), 10)
      assert.equal(originalNumberFromPercentage(10, 33.33, 2), 7.5)
    })

    it('should handle edge cases', () => {
      assert.equal(originalNumberFromPercentage(0, 50, 2), 0)
      assert.equal(originalNumberFromPercentage(100, 0, 2), 100)
    })
  })

  describe('Real-world scenarios', () => {
    it('should handle typical e-commerce cart calculations', () => {
      const subtotal = 99.99
      const subtotalInt = fractionToInt(subtotal, 2) // 9999

      // 10% discount
      const discount = percentOfValue(subtotal, 10, 2, 'round') // 10.00
      const discountInt = fractionToInt(discount, 2) // 1000

      const totalInt = subtotalInt - discountInt // 8999
      const total = intToFraction(totalInt, 2) // 89.99

      assert.equal(total, 89.99)
      assert.equal(displayValue(totalInt, 'USD', 2), '$89.99')
    })

    it('should handle cryptocurrency with high precision', () => {
      const btcAmount = 0.12345678
      const btcInt = fractionToInt(btcAmount, 8)
      assert.equal(btcInt, 12345678)

      const backToBtc = intToFraction(btcInt, 8)
      assert.equal(backToBtc, 0.12345678)
    })

    it('should handle multi-currency conversion scenario', () => {
      // Convert $100 USD to cents
      const usdCents = fractionToInt(100, 2)
      assert.equal(usdCents, 10000)

      // Display in different currencies (using cents/smallest unit)
      const usdDisplay = displayValue(10000, 'USD', 2)
      const eurDisplay = displayValue(10000, 'EUR', 2)
      const gbpDisplay = displayValue(10000, 'GBP', 2)

      assert.equal(usdDisplay, '$100.00')
      assert.equal(eurDisplay, '€100.00')
      assert.equal(gbpDisplay, '£100.00')
    })

    it('should handle tax calculation', () => {
      const priceInt = 10000 // $100.00 in cents
      const price = intToFraction(priceInt, 2)
      const taxRate = 8.5 // 8.5% tax

      const tax = percentOfValue(price, taxRate, 2, 'round')
      assert.equal(tax, 8.5)

      const taxInt = fractionToInt(tax, 2)
      const totalInt = priceInt + taxInt

      assert.equal(displayValue(totalInt, 'USD', 2), '$108.50')
    })

    it('should handle tip calculation', () => {
      const billInt = 8675 // $86.75 in cents
      const billAmount = intToFraction(billInt, 2)
      const tipPercent = 20

      const tipAmount = percentOfValue(billAmount, tipPercent, 2, 'round')
      assert.equal(tipAmount, 17.35)

      const tipInt = fractionToInt(tipAmount, 2)
      const totalInt = billInt + tipInt

      assert.equal(displayValue(totalInt, 'USD', 2), '$104.10')
    })

    it('should handle subscription pricing', () => {
      const monthlyPriceInt = 999 // $9.99 in cents
      const monthlyPrice = intToFraction(monthlyPriceInt, 2)
      const annualDiscount = 20 // 20% off

      const annualBeforeDiscount = monthlyPrice * 12
      const discountAmount = percentOfValue(annualBeforeDiscount, annualDiscount, 2, 'round')
      const annualPrice = annualBeforeDiscount - discountAmount

      assert.equal(displayValue(monthlyPriceInt, 'USD', 2), '$9.99')

      const annualPriceInt = fractionToInt(annualPrice, 2)
      assert.equal(displayValue(annualPriceInt, 'USD', 2), '$95.90')
    })
  })

  describe('Edge cases and validation', () => {
    it('should handle empty string inputs', () => {
      assert.equal(fractionToInt('', 2), 0)
      assert.equal(intToFraction('', 2), 0)
    })

    it('should handle decimal fraction values', () => {
      // Even though fraction should be integer, it loops based on i < fraction
      // For 2.5, loop runs i=0,1,2 (3 times), so multiplier is 1000
      assert.equal(fractionToInt(1, 2.5), 1000)
    })

    it('should preserve precision for financial calculations', () => {
      // Ensure no precision loss in common scenarios
      const amounts = [0.01, 0.1, 1.0, 10.0, 100.0, 1000.0]

      amounts.forEach((amount) => {
        const asInt = fractionToInt(amount, 2)
        const backToDecimal = intToFraction(asInt, 2)
        assert.equal(backToDecimal, amount)
      })
    })
  })
})
