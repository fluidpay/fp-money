<script lang="ts">
import { defineComponent } from 'vue'
import FPMoney, { Constructor, currencies, Values } from './fp-money'

export default defineComponent({
  name: 'Fpmoney',
  emits: ['update:modelValue', 'update:currency', 'update:locale', 'update:format', 'update:display'],
  props: {
    modelValue: {
      type: [String, Number],
      required: true
    },
    currency: {
      type: String,
      required: false,
      default: null
    },
    locale: {
      type: String,
      required: false,
      default: null
    },
    format: {
      type: String,
      required: false,
      default: null
    },
    display: {
      type: String,
      required: false,
      default: null
    },

    // One way bindings
    currencies: {
      type: Object,
      required: false,
      default: null
    },
    minValue: {
      type: Number,
      required: false,
      default: null
    },
    maxValue: {
      type: Number,
      required: false,
      default: null
    },
    step: {
      type: Number,
      required: false,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    displayOnly: {
      type: Boolean,
      default: false
    },
    valueFormat: {
      type: String,
      required: false,
      default: 'float'
    },
    showSelection: {
      type: Boolean,
      default: false
    },

    // Callbacks
    onChange: {
      type: Function,
      required: false,
      default: null
    }
  },
  data() {
    return {
      fpmoney: null as FPMoney | null,
      values: {
        value: '',
        format: '',
        display: '',
        currency: '',
        locale: ''
      } as Values
    }
  },
  mounted() {
    this.init()
  },
  watch: {
    modelValue(newValue, oldValue) {
      if (!this.fpmoney || newValue.toString() === oldValue.toString()) {
        return
      }
      this.fpmoney.setValue(newValue)
    },
    currencies(newValue, oldValue) {
      if (!this.fpmoney || JSON.stringify(newValue) === JSON.stringify(oldValue)) {
        return
      }
      this.fpmoney.setCurrencies(newValue)
    },
    currency(newValue, oldValue) {
      if (!this.fpmoney || newValue.toLowerCase() === oldValue.toLowerCase()) {
        return
      }
      this.fpmoney.setCurrency(newValue)
    },
    locale(newValue, oldValue) {
      if (!this.fpmoney || newValue.toLowerCase() === oldValue.toLowerCase()) {
        return
      }
      this.fpmoney.setLocale(newValue)
    },
    disabled(newValue) {
      if (!this.fpmoney) {
        return
      }
      this.fpmoney.setDisabled(newValue)
    },
    displayOnly(newValue) {
      if (!this.fpmoney) {
        return
      }
      this.fpmoney.setDisplayOnly(newValue)
    }
  },
  methods: {
    init() {
      const options = {
        container: this.$refs.fpmoney,
        onChange: (values: Values) => {
          this.values = values // Set values in data

          console.log(values)

          // Set Values
          this.$emit('update:modelValue', this.valueFormat === 'int' ? this.values.value : this.values.format)
          this.$emit('update:format', this.values.format)
          this.$emit('update:display', this.values.display)
          this.$emit('update:currency', this.values.currency)
          this.$emit('update:locale', this.values.locale)

          // If the requester wants and onChange callback lets send them the values
          if (this.onChange) {
            this.onChange(values)
          }
        }
      } as Constructor

      // Set options
      if (this.currencies) {
        options.currencies = this.currencies
      } else {
        options.currencies = currencies
      }
      if (this.currency && this.currencies && this.currencies[this.currency]) {
        options.currency = this.currency
      } else {
        options.currency = Object.keys(options.currencies)[0]
      }
      if (this.valueFormat) {
        options.valueFormat = this.valueFormat
      }
      if (this.modelValue !== undefined && this.modelValue !== null) {
        options.value = this.modelValue
      }
      if (this.locale) {
        options.locale = this.locale
      }
      if (this.minValue !== undefined && this.minValue !== null) {
        options.minValue = this.minValue
      }
      if (this.maxValue !== undefined && this.maxValue !== null) {
        options.maxValue = this.maxValue
      }
      if (this.step !== undefined && this.step !== null) {
        options.step = this.step
      }
      if (this.disabled === true) {
        options.disabled = true
      }
      if (this.displayOnly === true) {
        options.displayOnly = true
      }
      options.showSelection = this.showSelection

      console.log('options', options)

      // Initate the FPMoney class
      this.fpmoney = new FPMoney(options)
    }
  }
})
</script>

<template>
  <div ref="fpmoney" />
</template>
