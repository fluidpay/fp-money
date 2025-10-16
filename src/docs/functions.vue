<script lang="ts">
import { defineComponent } from 'vue'
import { fractionToInt, intToFraction, displayValue, getLocale } from '../fp-money/fp-money'
import ShikiStyle from './components/shiki_style.vue'

export default defineComponent({
  name: 'Functions',
  components: { ShikiStyle },
  data() {
    return {}
  },
  methods: {
    fractionToInt(value: number, fraction: number) {
      return fractionToInt(value, fraction)
    },
    intToFraction(value: number, fraction: number) {
      return intToFraction(value, fraction)
    },
    displayValue(value: number, currency: string, fraction: number, locale: string) {
      return displayValue(value, currency, fraction, locale)
    },
    getLocale() {
      return getLocale()
    }
  }
})
</script>

<style lang="scss">
.functions {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);

  .section {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-m);
    padding: var(--spacing-l);
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: var(--border-radius);

    .header {
      font-size: 24px;
      font-weight: var(--font-weight-bold);
      padding-bottom: var(--spacing-s);
      border-bottom: solid 1px var(--font-color);
    }

    .description {
      color: var(--font-color);
    }

    .result {
      padding: var(--spacing-m);
      background-color: rgba(0, 0, 0, 0.05);
      border-radius: var(--border-radius);
      font-weight: var(--font-weight-bold);
      color: var(--font-color);
    }
  }
}
</style>

<template>
  <div class="main functions">
    <div class="section">
      <div class="header">fractionToInt</div>
      <div class="description">
        Converts a fractional number to an integer by multiplying by 10^fraction. Useful for storing currency values as
        integers to avoid floating point precision issues.
      </div>
      <ShikiStyle language="javascript">
        <pre>
import { fractionToInt } from 'fp-money'

// Convert 86753.09 with 2 decimal places to integer
const result = fractionToInt(86753.09, 2)
// Returns: 8675309
        </pre>
      </ShikiStyle>
      <div class="result">Result: fractionToInt(86753.09, 2) = {{ fractionToInt(86753.09, 2) }}</div>
    </div>

    <div class="section">
      <div class="header">intToFraction</div>
      <div class="description">
        Converts an integer back to a fractional number by dividing by 10^fraction. The inverse of fractionToInt.
      </div>
      <ShikiStyle language="javascript">
        <pre>
import { intToFraction } from 'fp-money'

// Convert 8675309 back to fractional with 2 decimal places
const result = intToFraction(8675309, 2)
// Returns: 86753.09
        </pre>
      </ShikiStyle>
      <div class="result">Result: intToFraction(8675309, 2) = {{ intToFraction(8675309, 2) }}</div>
    </div>

    <div class="section">
      <div class="header">displayValue</div>
      <div class="description">
        Formats a number as a currency string with proper locale formatting. Includes currency symbol and thousands
        separators.
      </div>
      <ShikiStyle language="javascript">
        <pre>
import { displayValue } from 'fp-money'

// Display 86753.09 as USD currency
const result = displayValue(86753.09, 'usd', 2, 'en-us')
// Returns: "$86,753.09"
        </pre>
      </ShikiStyle>
      <div class="result">
        Result: displayValue(86753.09, 'usd', 2, 'en-us') = {{ displayValue(86753.09, 'usd', 2, 'en-us') }}
      </div>
    </div>

    <div class="section">
      <div class="header">getLocale</div>
      <div class="description">
        Returns the current browser locale string. Useful for automatically detecting user's language/region settings.
      </div>
      <ShikiStyle language="javascript">
        <pre>
import { getLocale } from 'fp-money'

// Get the browser's current locale
const locale = getLocale()
// Returns: "en-US" (or your browser's locale)
        </pre>
      </ShikiStyle>
      <div class="result">Result: getLocale() = {{ getLocale() }}</div>
    </div>
  </div>
</template>
