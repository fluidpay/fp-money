import { describe, it, assert } from 'vitest'
import { displayValue, fractionToInt, intToFraction, percentOfValue } from './helpers'

interface PercentTest {
  val: number
  perc: number
  fraction: number
  round: string
  expected: number
}

describe('helpers', () => {
  it('intToFraction', () => {
    const val = intToFraction(100, 2)
    assert.equal(val, 1.0)
  })

  it('fractionToInt', () => {
    const val = fractionToInt(1.0, 2)
    assert.equal(val, 100)
  })

  it('percentOfValue', () => {
    const tests = [
      // ceil
      { val: 1.0, perc: 10.25, fraction: 2, round: 'ceil', expected: 0.11 },
      { val: 100, perc: 10.501, fraction: 2, round: 'ceil', expected: 10.51 },
      { val: 898.0, perc: 56.7, fraction: 3, round: 'ceil', expected: 509.166 },

      // Floor
      { val: 1.0, perc: 10.25, fraction: 2, round: 'floor', expected: 0.1 },

      // Round
      { val: 1.0, perc: 10.25, fraction: 2, round: 'round', expected: 0.1 },
      { val: 1.0, perc: 10.5, fraction: 2, round: 'round', expected: 0.11 },
      { val: 1.0, perc: 10.5, fraction: 2, round: 'round', expected: 0.11 },
      { val: 100, perc: 10.5, fraction: 2, round: 'round', expected: 10.5 },

      // Bankers Round
      { val: 1.0, perc: 10.25, fraction: 2, round: 'bankers', expected: 0.1 },
      { val: 1.0, perc: 10.5, fraction: 2, round: 'bankers', expected: 0.1 },
      { val: 1.0, perc: 10.51, fraction: 2, round: 'bankers', expected: 0.11 },
      { val: 1.0, perc: 2.5, fraction: 2, round: 'bankers', expected: 0.02 }, // Even round down
      { val: 1.0, perc: 3.5, fraction: 2, round: 'bankers', expected: 0.04 }, // Odd round up
    ] as PercentTest[]

    for (const t of tests) {
      assert.equal(percentOfValue(t.val, t.perc, t.fraction, t.round), t.expected)
    }
  })

  it('displayValue', () => {
    let val = displayValue(100, 'usd', 2)
    assert.equal(val, '$1.00')

    val = displayValue(100, 'jpy', 0)
    assert.equal(val, '¥100')
  })
})
