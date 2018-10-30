<script>
import FPMoney, {intToFraction, fractionToInt, currencies} from './fp-money'

export default {
  name: 'fp-money',
  props: {
    value: [String, Number],
    currencies: Object,
    currency: String,
    locale: String,
    maxValue: Number,
    onChange: Function,
    valueFormat: {
      type: String,
      default: 'float',
      // The value must match one of these strings
      validator(value) {
        return ['float', 'int'].indexOf(value) !== -1
      }
    },
    showSelection: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      fpmoney: null,
      values: {
        value: '',
        format: '',
        display: '',
        currency: '',
        locale: ''
      }
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
  watch: {
    value(newValue, oldValue) {
      if (newValue.toString() === oldValue.toString()) {return}
      if (this.valueFormat === 'int') {
        this.fpmoney.setValue(intToFraction(newValue))
      } else {
        this.fpmoney.setValue(newValue)
      }
    },
    currency(newValue, oldValue) {
      this.fpmoney.setCurrency(newValue)
    },
    locale(newValue, oldValue) {
      this.fpmoney.setLocale(newValue)
    }
  },
  methods: {
    init() {
      const options = {
        container: this.$refs.fpmoney,
        onChange: (values) => {
          this.values = values // Set values in data

          // Set Values
          this.$emit('input', (this.valueFormat === 'int' ? this.values.value : this.values.format))
          this.$emit('update:value', this.values.value)
          this.$emit('update:format', this.values.format)
          this.$emit('update:display', this.values.display)
          this.$emit('update:currency', this.values.currency)
          this.$emit('update:locale', this.values.locale)

          // If the requester wants and onChange callback lets send them the values
          if (this.onChange) { this.onChange(values) }
        }
      }
      if (this.currencies) {options.currencies = this.currencies} else {options.currencies = currencies}
      if (this.currency) {options.currency = this.currency} else {options.currency = Object.keys(options.currencies)[0]}
      if (this.value) {
        if (this.valueFormat === 'int') {
          const getCurrency = options.currencies[options.currency]
          options.value = intToFraction(this.value, getCurrency.fraction)
        } else {
          options.value = this.value
        }
      }
      if (this.locale) {options.locale = this.locale}
      if (this.maxValue) {options.maxValue = this.maxValue}
      options.showSelection = this.showSelection
      this.fpmoney = new FPMoney(options)
    }
  }
}
</script>

<template>
  <div ref="fpmoney"></div>
</template>
