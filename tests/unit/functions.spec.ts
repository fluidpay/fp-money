import { assert } from 'chai'
import { displayValue, fractionToInt, intToFraction, percentOfValue } from '@/fp-money/currencies'

interface PercentTest {
  val: number
  perc: number
  fraction: number
  round: string
  expected: number
}

describe('functions', () => {
  it('intToFraction', () => {
    const val = intToFraction(100, 2)
    assert.equal(val, 1.00)
  })

  it('fractionToInt', () => {
    const val = fractionToInt(1.00, 2)
    assert.equal(val, 100)
  })

  it('percentOfValue', () => {
    const tests = [
      // ceil
      { val: 1.00, perc: 10.250, fraction: 2, round: 'ceil', expected: .11 },
      { val: 100, perc: 10.501, fraction: 2, round: 'ceil', expected: 10.51 },
      { val: 898.00, perc: 56.7, fraction: 3, round: 'ceil', expected: 509.166 },

      // Floor
      { val: 1.00, perc: 10.250, fraction: 2, round: 'floor', expected: .10 },

      // Round
      { val: 1.00, perc: 10.250, fraction: 2, round: 'round', expected: .10 },
      { val: 1.00, perc: 10.500, fraction: 2, round: 'round', expected: .11 },
      { val: 1.00, perc: 10.500, fraction: 2, round: 'round', expected: .11 },
      { val: 100, perc: 10.500, fraction: 2, round: 'round', expected: 10.50 },

      // Bankers Round
      { val: 1.00, perc: 10.250, fraction: 2, round: 'bankers', expected: .10 },
      { val: 1.00, perc: 10.500, fraction: 2, round: 'bankers', expected: .10 },
      { val: 1.00, perc: 10.510, fraction: 2, round: 'bankers', expected: .11 },
      { val: 1.00, perc: 2.500, fraction: 2, round: 'bankers', expected: .02 }, // Even round down
      { val: 1.00, perc: 3.500, fraction: 2, round: 'bankers', expected: .04 } // Odd round up
    ] as PercentTest[]

    for (const t of tests) {
      assert.equal(percentOfValue(t.val, t.perc, t.fraction, t.round), t.expected)
    }
  })

  it('displayValue', () => {
    const val = displayValue(100, 'usd', 2)
    assert.equal(val, '$1.00')
  })
})
