<script lang="ts">
import { defineComponent } from 'vue'
import { fractionToInt, intToFraction, displayValue, getLocale } from '@/fp-money/fp-money'

export default defineComponent({
  data () {
    return {
    }
  },
  methods: {
    fractionToInt (value: number, fraction: number) {
      return fractionToInt(value, fraction)
    },
    intToFraction (value: number, fraction: number) {
      return intToFraction(value, fraction)
    },
    displayValue (value: number, currency: string, fraction: number, locale: string) {
      return displayValue(value, currency, fraction, locale)
    },
    getLocale () {
      return getLocale()
    }
  }
})
</script>

<style lang="scss">
  @import './assets/scss/_variables.scss';

  .functions {
    .section {
      .item {
        padding: 0 0 $spacing-half 0;

        &:last-child { padding: 0 0 0 0; }
      }
    }
  }
</style>

<template>
  <div class="main functions">
    <pre>
      <code class="language-javascript">
        import {
          currencies, // Array of object currencies
          fractionToInt,
          intToFraction,
          displayValue,
          getLocale // Will output a string based upon your local language
        } from 'fp-money'
      </code>
    </pre>
    <div class="section">
      <div class="item">
        fractionToInt(value, fraction): 86753.09 - {{ fractionToInt(86753.09, 2) }}
      </div>
      <div class="item">
        intToFraction(value, fraction): 8675309 - {{ intToFraction(8675309, 2) }}
      </div>
      <div class="item">
        displayValue(value, currency, fraction, locale): 86753.09 - {{ displayValue(86753.09, 'usd', 2, 'en-us') }}
      </div>
      <div class="item">
        getLocale(): {{ getLocale() }}
      </div>
    </div>
  </div>
</template>
