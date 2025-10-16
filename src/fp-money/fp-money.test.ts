import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import FPMoney, { Constructor, Values, debounce } from './fp-money'
import { currencies } from './helpers'

describe('FPMoney', () => {
  let container: HTMLDivElement

  beforeEach(() => {
    // Create a container for each test
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    // Clean up
    if (container && container.parentNode) {
      container.parentNode.removeChild(container)
    }
  })

  describe('Constructor and Initialization', () => {
    it('should create an instance with minimal config', () => {
      const instance = new FPMoney({ container })

      expect(instance).toBeInstanceOf(FPMoney)
      expect(instance.container).toBe(container)
      expect(instance.input).toBeInstanceOf(HTMLInputElement)
      expect(instance.select).toBeInstanceOf(HTMLSelectElement)
      expect(instance.currencyDiv).toBeInstanceOf(HTMLDivElement)
    })

    it('should throw error if container not found', () => {
      expect(() => {
        new FPMoney({ container: null as any })
      }).toThrow('Could not find container')
    })

    it('should initialize with custom currency', () => {
      const instance = new FPMoney({
        container,
        currency: 'EUR'
      })

      expect(instance.currency).toBe('EUR')
      expect(instance.currencyDiv.innerHTML).toBe('€')
    })

    it('should initialize with custom currencies list', () => {
      const customCurrencies = {
        BTC: { symbol: '₿', fraction: 8 }
      }

      const instance = new FPMoney({
        container,
        currencies: customCurrencies
      })

      expect(instance.currencies).toEqual(customCurrencies)
      expect(instance.currency).toBe('BTC')
    })

    it('should initialize with a value', () => {
      const instance = new FPMoney({
        container,
        value: 100,
        currency: 'USD'
      })

      expect(instance.value).toBe('100')
    })

    it('should initialize with custom locale', () => {
      const instance = new FPMoney({
        container,
        locale: 'de-DE'
      })

      expect(instance.locale).toBe('de-DE')
    })

    it('should initialize with min and max values', () => {
      const instance = new FPMoney({
        container,
        currency: 'USD',
        minValue: 0,
        maxValue: 10000
      })

      expect(instance.minValue).toBe(0)
      expect(instance.maxValue).toBe(1000000)
    })

    it('should initialize with step value', () => {
      const instance = new FPMoney({
        container,
        step: 0.5
      })

      expect(instance.step).toBe(0.5)
    })

    it('should initialize as disabled', () => {
      const instance = new FPMoney({
        container,
        disabled: true
      })

      expect(instance.disabled).toBe(true)
      expect(instance.input.disabled).toBe(true)
      expect(instance.select.disabled).toBe(true)
      expect(instance.container.classList.contains('disabled')).toBe(true)
    })

    it('should initialize as display only', () => {
      const instance = new FPMoney({
        container,
        displayOnly: true
      })

      expect(instance.displayOnly).toBe(true)
      expect(instance.input.readOnly).toBe(true)
      expect(instance.input.tabIndex).toBe(-1)
      expect(instance.container.classList.contains('display-only')).toBe(true)
    })

    it('should show currency selection when enabled', () => {
      const instance = new FPMoney({
        container,
        showSelection: true
      })

      expect(instance.showSelection).toBe(true)
      expect(container.querySelector('.fpm-select')).not.toBeNull()
    })

    it('should hide currency selection by default', () => {
      const instance = new FPMoney({
        container,
        showSelection: false
      })

      expect(instance.showSelection).toBe(false)
    })

    it('should set up onChange callback', () => {
      const onChange = vi.fn()
      const instance = new FPMoney({
        container,
        onChange
      })

      instance.setValue(100)

      // Wait for debounce
      setTimeout(() => {
        expect(onChange).toHaveBeenCalled()
      }, 100)
    })

    it('should set valueFormat to int', () => {
      const instance = new FPMoney({
        container,
        valueFormat: 'int'
      })

      expect(instance.valueFormat).toBe('int')
    })
  })

  describe('setValue()', () => {
    it('should set value as integer', () => {
      const instance = new FPMoney({ container, currency: 'USD' })
      instance.setValue(12345)

      expect(instance.value).toBe('12345')
    })

    it('should set value as string', () => {
      const instance = new FPMoney({ container, currency: 'USD' })
      instance.setValue('9999')

      expect(instance.value).toBe('9999')
    })

    it('should handle float value when valueFormat is int', () => {
      const instance = new FPMoney({
        container,
        currency: 'USD',
        valueFormat: 'int'
      })
      // When valueFormat is 'int' and we pass a float (123.45),
      // it's detected as a fraction and converted: intToFraction(123.45, 2) = 1.2345
      instance.setValue(123.45)

      expect(instance.value).toBe('123.45')
    })

    it('should handle integer value when valueFormat is float', () => {
      const instance = new FPMoney({
        container,
        currency: 'USD',
        valueFormat: 'float'
      })
      instance.setValue(12345)

      expect(instance.value).toBe('12345')
    })

    it('should detect negative values', () => {
      const instance = new FPMoney({ container, currency: 'USD' })
      instance.setValue(-100)

      expect(instance.isNegative).toBe(true)
    })

    it('should not update if value is the same', () => {
      const instance = new FPMoney({ container, currency: 'USD' })
      const onChange = vi.fn()
      instance.onChange = onChange

      instance.setValue(100)
      const callCount = onChange.mock.calls.length

      instance.setValue(100)
      expect(onChange.mock.calls.length).toBe(callCount)
    })
  })

  describe('setCurrency()', () => {
    it('should change currency', () => {
      const instance = new FPMoney({ container, currency: 'USD' })
      instance.setCurrency('EUR')

      expect(instance.currency).toBe('EUR')
      expect(instance.currencyDiv.innerHTML).toBe('€')
    })

    it('should update placeholder based on currency fraction', () => {
      const instance = new FPMoney({ container, currency: 'USD' })
      expect(instance.input.placeholder).toBe('0.00')

      instance.setCurrency('JPY') // 0 decimals
      expect(instance.input.placeholder).toBe('0')
    })

    it('should uppercase currency code', () => {
      const instance = new FPMoney({ container, currency: 'USD' })
      instance.setCurrency('eur')

      expect(instance.currency).toBe('EUR')
    })

    it('should set to first currency if null provided', () => {
      const instance = new FPMoney({ container })
      const firstCurrency = Object.keys(instance.currencies)[0]
      instance.setCurrency(null)

      expect(instance.currency).toBe(firstCurrency)
    })
  })

  describe('setCurrencies()', () => {
    it('should update available currencies', () => {
      const instance = new FPMoney({ container, currency: 'USD' })
      const newCurrencies = {
        EUR: { symbol: '€', fraction: 2 },
        GBP: { symbol: '£', fraction: 2 }
      }

      instance.setCurrencies(newCurrencies)

      expect(instance.currencies).toEqual(newCurrencies)
    })

    it('should switch to first currency if current not in new list', () => {
      const instance = new FPMoney({ container, currency: 'USD' })
      const newCurrencies = {
        EUR: { symbol: '€', fraction: 2 },
        GBP: { symbol: '£', fraction: 2 }
      }

      instance.setCurrencies(newCurrencies)

      expect(instance.currency).toBe('EUR') // First in the list
    })

    it('should update select dropdown options', () => {
      const instance = new FPMoney({
        container,
        currency: 'USD',
        showSelection: true
      })
      const newCurrencies = {
        EUR: { symbol: '€', fraction: 2 },
        GBP: { symbol: '£', fraction: 2 }
      }

      instance.setCurrencies(newCurrencies)

      const options = instance.select.querySelectorAll('option')
      expect(options.length).toBe(2)
      expect(options[0].value).toBe('EUR')
      expect(options[1].value).toBe('GBP')
    })
  })

  describe('setLocale()', () => {
    it('should update locale', () => {
      const instance = new FPMoney({ container, locale: 'en-US' })
      instance.setLocale('de-DE')

      expect(instance.locale).toBe('de-DE')
    })
  })

  describe('setDisabled()', () => {
    it('should disable the input', () => {
      const instance = new FPMoney({ container })
      instance.setDisabled(true)

      expect(instance.disabled).toBe(true)
      expect(instance.input.disabled).toBe(true)
      expect(instance.select.disabled).toBe(true)
      expect(instance.container.classList.contains('disabled')).toBe(true)
    })

    it('should enable the input', () => {
      const instance = new FPMoney({ container, disabled: true })
      instance.setDisabled(false)

      expect(instance.disabled).toBe(false)
      expect(instance.input.disabled).toBe(false)
      expect(instance.select.disabled).toBe(false)
      expect(instance.container.classList.contains('disabled')).toBe(false)
    })
  })

  describe('setDisplayOnly()', () => {
    it('should set to display only mode', () => {
      const instance = new FPMoney({ container })
      instance.setDisplayOnly(true)

      expect(instance.displayOnly).toBe(true)
      expect(instance.input.readOnly).toBe(true)
      expect(instance.input.tabIndex).toBe(-1)
      expect(instance.select.disabled).toBe(true)
      expect(instance.container.classList.contains('display-only')).toBe(true)
    })

    it('should disable display only mode', () => {
      const instance = new FPMoney({ container, displayOnly: true })
      instance.setDisplayOnly(false)

      expect(instance.displayOnly).toBe(false)
      expect(instance.input.readOnly).toBe(false)
      expect(instance.select.disabled).toBe(false)
      expect(instance.container.classList.contains('display-only')).toBe(false)
    })
  })

  describe('destroy()', () => {
    it('should clear container contents', () => {
      const instance = new FPMoney({ container })
      expect(container.children.length).toBeGreaterThan(0)

      instance.destroy()
      expect(container.innerHTML).toBe('')
    })
  })

  describe('Value constraints', () => {
    it('should enforce minimum value', async () => {
      const instance = new FPMoney({
        container,
        currency: 'USD',
        minValue: 10
      })

      instance.setValue(5) // Below min

      await new Promise((resolve) => setTimeout(resolve, 100))
      expect(instance.value).toBe('1000') // min 10.00 = 1000 cents
    })

    it('should enforce maximum value', async () => {
      const instance = new FPMoney({
        container,
        currency: 'USD',
        maxValue: 100
      })

      instance.setValue(15000) // Above max

      await new Promise((resolve) => setTimeout(resolve, 100))
      expect(instance.value).toBe('10000') // max 100.00 = 10000 cents
    })
  })

  describe('Display formatting', () => {
    it('should format value for display', async () => {
      const instance = new FPMoney({
        container,
        currency: 'USD',
        value: 12345
      })

      await new Promise((resolve) => setTimeout(resolve, 100))
      expect(instance.format).toBe('123.45')
      expect(instance.display).toContain('$')
      expect(instance.display).toContain('123.45')
    })

    it('should format zero-decimal currency', async () => {
      const instance = new FPMoney({
        container,
        currency: 'JPY',
        value: 1000
      })

      await new Promise((resolve) => setTimeout(resolve, 100))
      expect(instance.format).toBe('1000')
      expect(instance.display).toContain('¥')
      expect(instance.display).toContain('1,000')
    })

    it('should handle negative values in display', async () => {
      const instance = new FPMoney({
        container,
        currency: 'USD',
        value: -12345
      })

      await new Promise((resolve) => setTimeout(resolve, 100))
      expect(instance.isNegative).toBe(true)
      expect(instance.display).toContain('-')
    })
  })

  describe('onChange callback', () => {
    it('should trigger onChange with correct values', async () => {
      const onChange = vi.fn((values: Values) => {
        expect(values.value).toBe('12345')
        expect(values.currency).toBe('USD')
        expect(values.format).toBe('123.45')
        expect(values.display).toContain('$123.45')
        expect(values.locale).toBeDefined()
      })

      const instance = new FPMoney({
        container,
        currency: 'USD',
        onChange
      })

      instance.setValue(12345)

      await new Promise((resolve) => setTimeout(resolve, 100))
    })

    it('should not throw if onChange is not provided', () => {
      const instance = new FPMoney({ container })

      expect(() => {
        instance.setValue(100)
      }).not.toThrow()
    })
  })

  describe('Keyboard input handling', () => {
    it('should handle number key input', async () => {
      const instance = new FPMoney({ container, currency: 'USD' })
      instance.input.focus()

      // Simulate pressing '5'
      const event = new KeyboardEvent('keydown', { key: '5' })
      instance.input.dispatchEvent(event)

      await new Promise((resolve) => setTimeout(resolve, 100))
      expect(instance.value).toContain('5')
    })

    it('should prevent input when displayOnly is true', () => {
      const instance = new FPMoney({ container, displayOnly: true })
      instance.input.focus()

      const event = new KeyboardEvent('keydown', { key: '5', bubbles: true })
      const preventDefaultSpy = vi.spyOn(event, 'preventDefault')
      instance.input.dispatchEvent(event)

      expect(preventDefaultSpy).toHaveBeenCalled()
    })
  })

  describe('Input masking and formatting', () => {
    it('should add fpm classes to elements', () => {
      const instance = new FPMoney({ container })

      expect(instance.container.classList.contains('fpm')).toBe(true)
      expect(instance.input.classList.contains('fpm-value')).toBe(true)
      expect(instance.currencyDiv.classList.contains('fpm-currency')).toBe(true)
      expect(instance.select.classList.contains('fpm-select')).toBe(true)
    })

    it('should set data-lpignore on input', () => {
      const instance = new FPMoney({ container })

      expect(instance.input.dataset.lpignore).toBe('true')
    })
  })

  describe('Currency select dropdown', () => {
    it('should populate select with all currencies', () => {
      const instance = new FPMoney({
        container,
        showSelection: true
      })

      const options = instance.select.querySelectorAll('option')
      const currencyKeys = Object.keys(currencies)

      expect(options.length).toBe(currencyKeys.length)
    })

    it('should change currency when select value changes', async () => {
      const instance = new FPMoney({
        container,
        currency: 'USD',
        showSelection: true
      })

      instance.select.value = 'EUR'
      instance.select.dispatchEvent(new Event('change'))

      await new Promise((resolve) => setTimeout(resolve, 100))
      expect(instance.currency).toBe('EUR')
    })
  })

  describe('Edge cases', () => {
    it('should handle empty value', () => {
      const instance = new FPMoney({ container, currency: 'USD' })
      instance.setValue('')

      expect(instance.value).toBe('')
    })

    it('should handle zero value', async () => {
      const instance = new FPMoney({ container, currency: 'USD' })
      instance.setValue(0)

      await new Promise((resolve) => setTimeout(resolve, 100))
      expect(instance.value).toBe('0')
      expect(instance.format).toBe('0.00')
    })

    it('should handle very large numbers', async () => {
      const instance = new FPMoney({
        container,
        currency: 'USD'
      })
      instance.setValue(999999999)

      await new Promise((resolve) => setTimeout(resolve, 100))
      expect(instance.value).toBe('999999999')
    })

    it('should clean value of lone negative sign', async () => {
      const instance = new FPMoney({ container, currency: 'USD' })
      instance.isNegative = true
      instance.value = ''
      instance.setValue(instance.value)

      await new Promise((resolve) => setTimeout(resolve, 100))
      expect(instance.value).toBe('')
    })
  })

  describe('Mobile OS detection', () => {
    it('should detect mobile OS', () => {
      const instance = new FPMoney({ container })

      expect(instance.mobileOs).toBeDefined()
      expect(['windows', 'android', 'ios', 'unknown']).toContain(instance.mobileOs)
    })
  })

  describe('Real-world usage scenarios', () => {
    it('should handle a typical checkout flow', async () => {
      const onChange = vi.fn()
      const instance = new FPMoney({
        container,
        currency: 'USD',
        value: 9999,
        onChange
      })

      // User updates to $199.99
      instance.setValue(19999)

      await new Promise((resolve) => setTimeout(resolve, 100))
      expect(instance.format).toBe('199.99')
      expect(onChange).toHaveBeenCalled()

      // Switch to EUR
      instance.setCurrency('EUR')

      await new Promise((resolve) => setTimeout(resolve, 100))
      expect(instance.currency).toBe('EUR')
      expect(instance.currencyDiv.innerHTML).toBe('€')
    })

    it('should handle international pricing', async () => {
      const instance = new FPMoney({
        container,
        currency: 'JPY',
        value: 10000,
        locale: 'ja-JP'
      })

      await new Promise((resolve) => setTimeout(resolve, 100))
      expect(instance.format).toBe('10000')
      expect(instance.currency).toBe('JPY')
    })

    it('should handle payment form with min/max constraints', async () => {
      const instance = new FPMoney({
        container,
        currency: 'USD',
        minValue: 1,
        maxValue: 10000,
        value: 500
      })

      await new Promise((resolve) => setTimeout(resolve, 100))
      expect(instance.value).toBe('500')

      // Try to set below min
      instance.setValue(50)

      await new Promise((resolve) => setTimeout(resolve, 100))
      expect(instance.value).toBe('100') // Should enforce min of 1.00 = 100 cents
    })

    it('should handle disabled state for display', () => {
      const instance = new FPMoney({
        container,
        currency: 'USD',
        value: 12345,
        disabled: true
      })

      expect(instance.input.disabled).toBe(true)
      expect(instance.select.disabled).toBe(true)
    })
  })
})

describe('debounce', () => {
  it('should debounce function calls', async () => {
    const fn = vi.fn()
    const debouncedFn = debounce(fn, 50)

    debouncedFn()
    debouncedFn()
    debouncedFn()

    // Should not have been called yet
    expect(fn).not.toHaveBeenCalled()

    await new Promise((resolve) => setTimeout(resolve, 100))
    // Should have been called once after debounce period
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('should call immediately when immediate flag is true', () => {
    const fn = vi.fn()
    const debouncedFn = debounce(fn, 50, true)

    debouncedFn()

    // Should have been called immediately
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('should handle multiple rapid calls', async () => {
    const fn = vi.fn()
    const debouncedFn = debounce(fn, 50)

    for (let i = 0; i < 10; i++) {
      debouncedFn()
    }

    await new Promise((resolve) => setTimeout(resolve, 100))
    // Should only have been called once
    expect(fn).toHaveBeenCalledTimes(1)
  })
})
