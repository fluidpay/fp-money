<script>
import FPMoney, {intToFraction, fractionToInt, currencies} from './fp-money'

export default {
  name: 'fp-money',
  props: {
    value: [String, Number],
    currencies: Object,
    currency: String,
    locale: String,
    minValue: Number,
    maxValue: Number,
    step: Number,
    disabled: Boolean,
    displayOnly: Boolean,
    onChange: Function,
    valueFormat: String,
    showSelection: {
      type: Boolean,
      default: false
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
  watch: {
    value(newValue, oldValue) {
      if (newValue.toString() === oldValue.toString()) {return}
      this.fpmoney.setValue(newValue)
    },
    currencies(newValue, oldValue) {
      this.fpmoney.setCurrencies(newValue)
    },
    currency(newValue, oldValue) {
      this.fpmoney.setCurrency(newValue)
    },
    locale(newValue, oldValue) {
      this.fpmoney.setLocale(newValue)
    },
    disabled(newValue, oldValue) {
      this.fpmoney.setDisabled(newValue)
    },
    displayOnly(newValue, oldValue) {
      this.fpmoney.setDisplayOnly(newValue)
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
      if (this.valueFormat) {options.valueFormat = this.valueFormat}
      if (this.value !== undefined) {options.value = this.value}
      if (this.locale) {options.locale = this.locale}
      if (this.minValue) {options.minValue = this.minValue}
      if (this.maxValue) {options.maxValue = this.maxValue}
      if (this.step !== undefined) {options.step = this.step}
      if (this.disabled === true) {options.disabled = true}
      if (this.displayOnly === true) {options.displayOnly = true}
      options.showSelection = this.showSelection
      this.fpmoney = new FPMoney(options)
    }
  }
}
</script>

<template>
  <div ref="fpmoney"></div>
</template>
