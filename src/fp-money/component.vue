<script>
import FPMoney from './fp-money'

export default {
  name: 'fp-money',
  props: {
    value: [String, Number],
    currencies: Object,
    currency: String,
    locale: String,
    maxValue: Number,
    onChange: Function,
    showSelection: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      fpmoney: null
    }
  },
  mounted() {
    this.init()
  },
  updated() {
    if (this.fpmoney) {
      this.fpmoney.destroy()
    }
    this.init()
  },
  methods: {
    init() {
      const options = {
        container: this.$refs.fpmoney
      }
      if (this.value) {options.value = this.value}
      if (this.currencies) {options.currencies = this.currencies}
      if (this.currency) {options.currency = this.currency}
      if (this.locale) {options.locale = this.locale}
      if (this.maxValue) {options.maxValue = this.maxValue}
      options.showSelection = this.showSelection
      if (this.onChange) {options.onChange = this.onChange}
      this.fpmoney = new FPMoney(options)
    }
  }
}
</script>

<template>
  <div ref="fpmoney"></div>
</template>
