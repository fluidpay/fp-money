# fp-money

Advanced currency input formatter with full TypeScript support

<a href="http://fpmoney.fluidpay.com" target="_blank">📚 Live Documentation & Examples</a>

![fp-money demo](https://raw.githubusercontent.com/fluidpay/fp-money/master/fpmoney.gif)

## Installation

```bash
npm install fp-money
```

## Usage

### Vanilla JavaScript

```javascript
import FPMoney from 'fp-money'
import 'fp-money/style.css'

const moneyInput = new FPMoney({
  // Required
  container: document.querySelector('#money-input'),

  // Optional - values
  value: 1000.5,                 // Initial value (default: 0)
  currency: 'USD',               // Currency code (default: 'USD')
  locale: 'en-US',               // Locale (default: browser locale)
  currencies: {...},             // Custom currency definitions

  // Optional - constraints
  minValue: 0,                   // Minimum allowed value
  maxValue: 999999,              // Maximum allowed value
  step: 0.01,                    // Increment/decrement step

  // Optional - behavior
  disabled: false,               // Disable input
  displayOnly: false,            // Display-only mode
  showSelection: false,          // Show currency selector
  valueFormat: 'float',          // 'float' | 'int'

  // Optional - callback
  onChange: (values) => {
    console.log(values)
    // { value: 100050, format: "1000.50", display: "$1,000.50", currency: "USD", locale: "en-US" }
  }
})
```

### Vue 3 Component

```vue
<script setup>
import { ref } from 'vue'
import FPMoney from 'fp-money/vue'
import 'fp-money/vue/style.css'

const value = ref(1000.5)
const currency = ref('USD')

function handleChange(values) {
  console.log(values)
}
</script>

<template>
  <FPMoney
    v-model="value"
    v-model:currency="currency"
    v-model:locale="locale"
    v-model:format="format"
    v-model:display="display"
    :currencies="currencies"
    :disabled="false"
    :display-only="false"
    :min-value="0"
    :max-value="999999"
    :step="0.01"
    :show-selection="true"
    :value-format="'float'"
    :on-change="handleChange"
  />
</template>
```

## Utility Functions

```javascript
import { fractionToInt, intToFraction, displayValue, getLocale } from 'fp-money'

// Convert decimal to integer (for storage)
const int = fractionToInt(86753.09, 2) // Returns: 8675309

// Convert integer back to decimal
const decimal = intToFraction(8675309, 2) // Returns: 86753.09

// Format as currency string
const formatted = displayValue(86753.09, 'USD', 2, 'en-US') // Returns: "$86,753.09"

// Get browser locale
const locale = getLocale() // Returns: "en-US" (or your browser's locale)
```

## Custom Currencies

```javascript
const customCurrencies = {
  USD: { symbol: '$', fraction: 2 },
  EUR: { symbol: '€', fraction: 2 },
  BTC: { symbol: '₿', fraction: 8 }
}

new FPMoney({
  container: document.querySelector('#money'),
  currencies: customCurrencies,
  currency: 'BTC'
})
```

## License

MIT

## Links

- [Documentation](http://fpmoney.fluidpay.com)
- [GitHub](https://github.com/fluidpay/fp-money)
- [npm](https://www.npmjs.com/package/fp-money)
