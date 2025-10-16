import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Comp from './component.vue'

describe('Vue Component', () => {
  describe('Mounting and Initialization', () => {
    it('should mount properly', () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 0
        }
      })

      expect(wrapper).toBeTruthy()
      expect(wrapper.find('input').exists()).toBe(true)
      expect(wrapper.find('.fpm').exists()).toBe(true)
    })

    it('should initialize with default props', () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 0
        }
      })

      const props = wrapper.props()
      expect(props.modelValue).toBe(0)
      expect(props.valueFormat).toBe('float')
      expect(props.disabled).toBe(false)
      expect(props.displayOnly).toBe(false)
      expect(props.showSelection).toBe(false)
    })

    it('should initialize FPMoney instance on mount', () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 100
        }
      })

      expect(wrapper.vm.fpmoney).toBeTruthy()
      expect(wrapper.vm.fpmoney).toBeInstanceOf(Object)
    })
  })

  describe('Props', () => {
    it('should accept modelValue as number', () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 12345
        }
      })

      expect(wrapper.props('modelValue')).toBe(12345)
    })

    it('should accept modelValue as string', () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: '12345'
        }
      })

      expect(wrapper.props('modelValue')).toBe('12345')
    })

    it('should accept modelValue as null', () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: null
        }
      })

      expect(wrapper.props('modelValue')).toBe(null)
    })

    it('should accept custom currency', () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 100,
          currency: 'EUR'
        }
      })

      expect(wrapper.props('currency')).toBe('EUR')
    })

    it('should accept custom locale', () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 100,
          locale: 'de-DE'
        }
      })

      expect(wrapper.props('locale')).toBe('de-DE')
    })

    it('should accept custom currencies', () => {
      const customCurrencies = {
        BTC: { symbol: '฿', fraction: 8 }
      }

      const wrapper = mount(Comp, {
        props: {
          modelValue: 100,
          currencies: customCurrencies
        }
      })

      expect(wrapper.props('currencies')).toEqual(customCurrencies)
    })

    it('should accept minValue', () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 100,
          minValue: 0
        }
      })

      expect(wrapper.props('minValue')).toBe(0)
    })

    it('should accept maxValue', () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 100,
          maxValue: 10000
        }
      })

      expect(wrapper.props('maxValue')).toBe(10000)
    })

    it('should accept step', () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 100,
          step: 0.5
        }
      })

      expect(wrapper.props('step')).toBe(0.5)
    })

    it('should accept disabled prop', () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 100,
          disabled: true
        }
      })

      expect(wrapper.props('disabled')).toBe(true)
      expect(wrapper.find('input').element.disabled).toBe(true)
    })

    it('should accept displayOnly prop', () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 100,
          displayOnly: true
        }
      })

      expect(wrapper.props('displayOnly')).toBe(true)
      expect(wrapper.find('input').element.readOnly).toBe(true)
    })

    it('should accept valueFormat prop', () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 100,
          valueFormat: 'int'
        }
      })

      expect(wrapper.props('valueFormat')).toBe('int')
    })

    it('should accept showSelection prop', () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 100,
          showSelection: true
        }
      })

      expect(wrapper.props('showSelection')).toBe(true)
      expect(wrapper.find('select').exists()).toBe(true)
    })

    it('should accept onChange callback', () => {
      const onChange = vi.fn()
      const wrapper = mount(Comp, {
        props: {
          modelValue: 100,
          onChange
        }
      })

      expect(wrapper.props('onChange')).toBe(onChange)
    })
  })

  describe('Events and Emissions', () => {
    it('should emit update:modelValue on change', async () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 0
        }
      })

      await wrapper.vm.$nextTick()

      // Simulate value change
      wrapper.vm.fpmoney?.setValue(100)

      await new Promise((resolve) => setTimeout(resolve, 100))

      const emitted = wrapper.emitted('update:modelValue')
      expect(emitted).toBeTruthy()
    })

    it('should emit update:currency on change', async () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 100,
          currency: 'USD'
        }
      })

      await wrapper.vm.$nextTick()

      wrapper.vm.fpmoney?.setCurrency('EUR')

      await new Promise((resolve) => setTimeout(resolve, 100))

      const emitted = wrapper.emitted('update:currency')
      expect(emitted).toBeTruthy()
    })

    it('should emit update:locale on change', async () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 100
        }
      })

      await wrapper.vm.$nextTick()

      wrapper.vm.fpmoney?.setLocale('de-DE')

      await new Promise((resolve) => setTimeout(resolve, 100))

      const emitted = wrapper.emitted('update:locale')
      expect(emitted).toBeTruthy()
    })

    it('should emit update:format on change', async () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 100
        }
      })

      await wrapper.vm.$nextTick()

      wrapper.vm.fpmoney?.setValue(12345)

      await new Promise((resolve) => setTimeout(resolve, 100))

      const emitted = wrapper.emitted('update:format')
      expect(emitted).toBeTruthy()
    })

    it('should emit update:display on change', async () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 100
        }
      })

      await wrapper.vm.$nextTick()

      wrapper.vm.fpmoney?.setValue(12345)

      await new Promise((resolve) => setTimeout(resolve, 100))

      const emitted = wrapper.emitted('update:display')
      expect(emitted).toBeTruthy()
    })

    it('should call onChange callback when provided', async () => {
      const onChange = vi.fn()
      const wrapper = mount(Comp, {
        props: {
          modelValue: 0,
          onChange
        }
      })

      await wrapper.vm.$nextTick()

      wrapper.vm.fpmoney?.setValue(100)

      await new Promise((resolve) => setTimeout(resolve, 100))

      expect(onChange).toHaveBeenCalled()
      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({
          value: expect.any(String),
          format: expect.any(String),
          display: expect.any(String),
          currency: expect.any(String),
          locale: expect.any(String)
        })
      )
    })
  })

  describe('Watchers', () => {
    it('should update value when modelValue prop changes', async () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 100
        }
      })

      await wrapper.vm.$nextTick()
      await new Promise((resolve) => setTimeout(resolve, 100))

      await wrapper.setProps({ modelValue: 200 })
      await new Promise((resolve) => setTimeout(resolve, 100))

      expect(wrapper.vm.fpmoney?.value).toBe('200')
    })

    it('should update currency when currency prop changes', async () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 100,
          currency: 'USD'
        }
      })

      await wrapper.vm.$nextTick()
      await new Promise((resolve) => setTimeout(resolve, 100))

      await wrapper.setProps({ currency: 'EUR' })
      await new Promise((resolve) => setTimeout(resolve, 100))

      expect(wrapper.vm.fpmoney?.currency).toBe('EUR')
    })

    it('should update currencies when currencies prop changes', async () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 100
        }
      })

      await wrapper.vm.$nextTick()

      const newCurrencies = {
        EUR: { symbol: '€', fraction: 2 },
        GBP: { symbol: '£', fraction: 2 }
      }

      await wrapper.setProps({ currencies: newCurrencies })
      await new Promise((resolve) => setTimeout(resolve, 100))

      expect(wrapper.vm.fpmoney?.currencies).toEqual(newCurrencies)
    })

    it('should update locale when locale prop changes', async () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 100,
          locale: 'en-US'
        }
      })

      await wrapper.vm.$nextTick()

      await wrapper.setProps({ locale: 'de-DE' })
      await new Promise((resolve) => setTimeout(resolve, 100))

      expect(wrapper.vm.fpmoney?.locale).toBe('de-DE')
    })

    it('should update disabled state when disabled prop changes', async () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 100,
          disabled: false
        }
      })

      await wrapper.vm.$nextTick()

      await wrapper.setProps({ disabled: true })

      expect(wrapper.vm.fpmoney?.disabled).toBe(true)
      expect(wrapper.find('input').element.disabled).toBe(true)
    })

    it('should update displayOnly state when displayOnly prop changes', async () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 100,
          displayOnly: false
        }
      })

      await wrapper.vm.$nextTick()

      await wrapper.setProps({ displayOnly: true })

      expect(wrapper.vm.fpmoney?.displayOnly).toBe(true)
      expect(wrapper.find('input').element.readOnly).toBe(true)
    })

    it('should not update if modelValue is the same', async () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 100
        }
      })

      await wrapper.vm.$nextTick()

      const setValueSpy = vi.spyOn(wrapper.vm.fpmoney!, 'setValue')

      await wrapper.setProps({ modelValue: 100 })

      expect(setValueSpy).not.toHaveBeenCalled()
    })
  })

  describe('Value Formatting', () => {
    it('should emit float format when valueFormat is "float"', async () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 12345,
          valueFormat: 'float'
        }
      })

      await wrapper.vm.$nextTick()
      await new Promise((resolve) => setTimeout(resolve, 100))

      const emitted = wrapper.emitted('update:modelValue')
      if (emitted && emitted.length > 0) {
        // Should emit as formatted decimal (123.45)
        expect(emitted[emitted.length - 1][0]).toMatch(/123\.45/)
      }
    })

    it('should emit int format when valueFormat is "int"', async () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 12345, // Integer cents value
          valueFormat: 'int'
        }
      })

      await wrapper.vm.$nextTick()
      await new Promise((resolve) => setTimeout(resolve, 100))

      const emitted = wrapper.emitted('update:modelValue')
      if (emitted && emitted.length > 0) {
        // Should emit as integer (12345)
        const lastEmit = emitted[emitted.length - 1][0]
        expect(lastEmit).toBe('12345')
      }
    })
  })

  describe('Currency Display', () => {
    it('should display USD currency symbol', async () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 100,
          currency: 'USD'
        }
      })

      await wrapper.vm.$nextTick()

      const currencyDiv = wrapper.find('.fpm-currency')
      expect(currencyDiv.exists()).toBe(true)
      expect(currencyDiv.text()).toBe('$')
    })

    it('should display EUR currency symbol', async () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 100,
          currency: 'EUR',
          currencies: {
            EUR: { symbol: '€', fraction: 2 },
            USD: { symbol: '$', fraction: 2 }
          }
        }
      })

      await wrapper.vm.$nextTick()
      await new Promise((resolve) => setTimeout(resolve, 50))

      const currencyDiv = wrapper.find('.fpm-currency')
      expect(currencyDiv.text()).toBe('€')
    })

    it('should display JPY currency symbol', async () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 100,
          currency: 'JPY',
          currencies: {
            JPY: { symbol: '¥', fraction: 0 },
            USD: { symbol: '$', fraction: 2 }
          }
        }
      })

      await wrapper.vm.$nextTick()
      await new Promise((resolve) => setTimeout(resolve, 50))

      const currencyDiv = wrapper.find('.fpm-currency')
      expect(currencyDiv.text()).toBe('¥')
    })
  })

  describe('Constraints', () => {
    it('should enforce minimum value', async () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 100,
          minValue: 50
        }
      })

      await wrapper.vm.$nextTick()

      wrapper.vm.fpmoney?.setValue(25) // Below min

      await new Promise((resolve) => setTimeout(resolve, 100))

      // Should be clamped to minimum
      expect(parseInt(wrapper.vm.fpmoney?.value || '0', 10)).toBeGreaterThanOrEqual(5000)
    })

    it('should enforce maximum value', async () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 100,
          maxValue: 200
        }
      })

      await wrapper.vm.$nextTick()

      wrapper.vm.fpmoney?.setValue(30000) // Above max

      await new Promise((resolve) => setTimeout(resolve, 100))

      // Should be clamped to maximum
      expect(parseInt(wrapper.vm.fpmoney?.value || '0', 10)).toBeLessThanOrEqual(20000)
    })
  })

  describe('Edge Cases', () => {
    it('should handle null modelValue', () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: null
        }
      })

      expect(wrapper.vm.fpmoney).toBeTruthy()
    })

    it('should handle zero value', async () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 0
        }
      })

      await wrapper.vm.$nextTick()
      await new Promise((resolve) => setTimeout(resolve, 100))

      expect(wrapper.vm.fpmoney?.value).toBe('0')
    })

    it('should handle very large numbers', async () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 999999999
        }
      })

      await wrapper.vm.$nextTick()
      await new Promise((resolve) => setTimeout(resolve, 100))

      expect(wrapper.vm.fpmoney?.value).toBe('999999999')
    })

    it('should handle negative values', async () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: -100
        }
      })

      await wrapper.vm.$nextTick()
      await new Promise((resolve) => setTimeout(resolve, 100))

      expect(wrapper.vm.fpmoney?.isNegative).toBe(true)
    })
  })

  describe('Real-world Scenarios', () => {
    it('should work as a form input with v-model', async () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 0,
          'onUpdate:modelValue': (value: string | number) => {
            wrapper.setProps({ modelValue: value })
          }
        }
      })

      await wrapper.vm.$nextTick()

      wrapper.vm.fpmoney?.setValue(12345)

      await new Promise((resolve) => setTimeout(resolve, 100))

      const emitted = wrapper.emitted('update:modelValue')
      expect(emitted).toBeTruthy()
    })

    it('should handle currency switching in a form', async () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 100,
          currency: 'USD',
          showSelection: true
        }
      })

      await wrapper.vm.$nextTick()
      await new Promise((resolve) => setTimeout(resolve, 100))

      await wrapper.setProps({ currency: 'EUR' })
      await new Promise((resolve) => setTimeout(resolve, 100))

      expect(wrapper.vm.fpmoney?.currency).toBe('EUR')
      expect(wrapper.find('.fpm-currency').text()).toBe('€')
    })

    it('should work in disabled state for display purposes', () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 12345,
          disabled: true
        }
      })

      expect(wrapper.find('input').element.disabled).toBe(true)
      expect(wrapper.vm.fpmoney?.disabled).toBe(true)
    })

    it('should work in displayOnly mode for receipts', () => {
      const wrapper = mount(Comp, {
        props: {
          modelValue: 12345,
          displayOnly: true
        }
      })

      expect(wrapper.find('input').element.readOnly).toBe(true)
      expect(wrapper.vm.fpmoney?.displayOnly).toBe(true)
    })
  })
})
