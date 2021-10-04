import { Currencies, currencies, intToFraction, fractionToInt, displayValue, getLocale, isNegative } from './currencies'

export * from './currencies'

export interface Values {
  value: string
  display: string
  format: string
  currency: string
  locale: string
}

export interface Constructor {
  container: HTMLDivElement
  value?: string | number
  currencies?: Currencies
  currency?: string
  locale?: string
  valueFormat?: string
  minValue?: number
  maxValue?: number
  step?: number
  disabled?: boolean
  displayOnly?: boolean
  showSelection?: boolean
  onChange?: (values: Values) => void
}

export default class FPMoney {
  public container: HTMLDivElement
  public currencyDiv: HTMLDivElement
  public input: HTMLInputElement
  public select: HTMLSelectElement

  public mobileOs: string

  // Input items
  public isNegative: boolean = false
  public value: string = ''
  public display: string = ''
  public format: string = ''
  public currencies: Currencies = JSON.parse(JSON.stringify(currencies))
  public currency: string = '' // default is set in the constructor
  public locale: string = getLocale()
  public valueFormat: string = 'float'
  public minValue?: number = undefined
  public maxValue?: number = undefined
  public step: number = 1.00
  public disabled: boolean = false
  public displayOnly: boolean = false
  public showSelection: boolean = false

  // Callbacks
  public onChange: (values: Values) => void
  private debounceUpdateOutput = debounce(() => {this.updateOutput()})

  constructor(info: Constructor) {
    this.validate(info)

    this.mobileOs = this.getMobileOs()

    // Set container
    let el: HTMLDivElement
    if (typeof info.container === 'string') {
      el = document.querySelector(info.container) as any as HTMLDivElement
    } else {
      el = info.container
    }
    this.container = el

    // Set values
    if (info.currencies) {this.currencies = JSON.parse(JSON.stringify(info.currencies))}
    if (info.currency) {this.currency = info.currency.toUpperCase()} else {this.currency = Object.keys(this.currencies)[0]}
    if (info.locale) {this.locale = info.locale}
    if (info.valueFormat) {this.valueFormat = info.valueFormat}
    if (info.value !== undefined) {
      let curVal = info.value
      this.isNegative = isNegative(curVal.toString())
      if (info.valueFormat === 'int') {curVal = intToFraction(curVal, this.currencies[this.currency].fraction)}
      this.value = fractionToInt(curVal, this.currencies[this.currency].fraction).toString()
    }
    if (info.minValue !== undefined) {this.minValue = fractionToInt(info.minValue, this.currencies[this.currency].fraction)}
    if (info.maxValue !== undefined) {this.maxValue = fractionToInt(info.maxValue, this.currencies[this.currency].fraction)}
    if (info.step) {this.step = info.step}
    if (info.disabled === true) {this.disabled = true}
    if (info.displayOnly === true) {this.displayOnly = true}
    if (info.showSelection !== undefined) {this.showSelection = info.showSelection}

    // Set Callbacks
    this.onChange = (info.onChange ? this.onChange = info.onChange : () => {return})

    // Render select and input
    this.currencyDiv = document.createElement('div')

    // Input specifics
    this.input = document.createElement('input')
    if (this.mobileOs === 'android') { this.input.inputMode = 'numeric' }
    if (this.mobileOs === 'ios') { this.input.inputMode = 'numeric'; this.input.pattern = '[0-9]*' }
    this.select = document.createElement('select')
    this.render()

    // Set default currency
    this.setCurrency(this.currency)

    // Set disabled
    if (this.disabled) {
      this.setDisabled(this.disabled)
    }

    // Set display only
    if (this.displayOnly) {
      this.setDisplayOnly(this.displayOnly)
    }
  }

  public setValue(value: number | string) {
    const fraction = this.currencies[this.currency].fraction
    value = (this.valueFormat === 'float' ? fractionToInt(value, fraction).toString() : value.toString())

    // Dont do anything if nothing changed
    if (this.value.toString() === value) {return}

    // Check if negative number
    this.isNegative = isNegative(value)

    // Normalize number to int
    this.value = fractionToInt(intToFraction(value, fraction), fraction).toString()

    this.debounceUpdateOutput()
  }

  public setCurrencies(currenciesValue: Currencies) {
    this.currencies = JSON.parse(JSON.stringify(currenciesValue))

    // Double check that the current currency is in the list presented
    // If not, set currency to first key in object
    if (!this.currencies[this.currency]) {
      this.currency = Object.keys(this.currencies)[0]
    }

    this.updateCurrenciesSelect()

    this.setCurrency(this.currency) // This will also run this.updateOutput()
  }

  public setCurrency(currency: string) {
    this.currency = currency.toUpperCase()

    // Currency display
    this.currencyDiv.innerHTML = this.currencies[this.currency].symbol

    // Input display
    const fraction = this.currencies[this.currency].fraction
    let multi = ''
    for (let i = 0; i < fraction; i++) {
      multi += '0'
    }
    this.input.placeholder = '0' + (fraction === 0 ? '' : '.' + multi)

    // Set currency select
    this.select.value = this.currency

    // Update display input
    this.debounceUpdateOutput()
  }

  public setLocale(locale: string) {
    this.locale = locale

    // Update display input
    this.debounceUpdateOutput()
  }

  public setDisabled(bool: boolean) {
    this.disabled = bool

    if (this.disabled) {
      this.container.classList.add('disabled')
      this.input.disabled = true
      this.select.disabled = true
    } else {
      this.container.classList.remove('disabled')
      this.input.disabled = false
      this.select.disabled = false
    }
  }

  public setDisplayOnly(bool: boolean) {
    this.displayOnly = bool

    if (this.displayOnly) {
      this.container.classList.add('display-only')
      this.input.tabIndex = -1
      this.input.readOnly = true
      this.select.disabled = true
    } else {
      this.container.classList.remove('display-only')
      this.input.readOnly = false
      this.input.removeAttribute('tabindex')
      this.select.disabled = false
    }
  }

  public destroy() {
    // Clean out container
    this.container.innerHTML = ''
  }

  private validate(info: Constructor) {
    let el: HTMLDivElement
    if (typeof info.container === 'string') {
      el = document.querySelector(info.container) as any as HTMLDivElement
    } else {
      el = info.container
    }
    if (!el) { throw new Error('Could not find container') }
  }

  private updateOutput() {
    if (this.value !== '') {
      let val = parseInt(this.value, 10)
      // Limit if min/max
      if (this.minValue !== undefined && val < this.minValue) {val = this.minValue}
      if (this.maxValue !== undefined && val > this.maxValue) {val = this.maxValue}
      this.value = val.toString()
    }

    // Identify isNegative
    if (this.isNegative) {
      this.value = '-' + this.value.replace('-', '')
      if (this.value === '-') { this.value = '' }
    } else {
      this.value = this.value.replace('-', '')
    }

    this.format = intToFraction(this.value, this.currencies[this.currency].fraction).toFixed(this.currencies[this.currency].fraction)
    this.display = displayValue(this.value, this.currency, this.currencies[this.currency].fraction, this.locale)

    this.updateInputDisplay()

    // Trigger onChange
    this.onChange({
      value: this.value,
      display: this.display,
      format: this.format,
      currency: this.currency,
      locale: this.locale
    })
  }

  private updateInputDisplay() {
    if (this.value === '') { this.input.value = ''; return }

    // Clean display output
    let clean = this.display.replace(this.currencies[this.currency.toUpperCase()].symbol, '') // Remove symbol
    const cur = this.currency
    clean = clean.replace(cur, '')
    cur.split('').forEach((c, i) => {
      clean = clean.replace(cur.substring(0, cur.length - i), '')
    })

    // Remove all other symbols that are in base currencies
    for (const key in currencies) {
      if (currencies.hasOwnProperty(key)) {
        clean = clean.replace(key, '')
        clean = clean.replace(currencies[key].symbol, '')
      }
    }

    clean = clean.trim() // Remove whitespace
    if (this.isNegative) { clean = '-' + clean.replace('-', '') }
    this.input.value = clean
  }

  private render() {
    // Add classes
    this.container.classList.add('fpm')
    this.currencyDiv.classList.add('fpm-currency')
    this.input.classList.add('fpm-value')
    this.select.classList.add('fpm-select')

    // Add event listeners for input field
    this.input.addEventListener('keydown', (evt: KeyboardEvent) => { this.inputKeydown(evt) }, false)
    this.input.addEventListener('click', (e: MouseEvent) => {
      // Dont do anything if displayOnly
      if (this.displayOnly) {e.preventDefault(); return}

      this.input.focus()
      this.moveCursorToEnd(this.input)
    }, false)

    // Check if displayOnly
    if (this.displayOnly) {this.setDisplayOnly(true)}

    // Add options to select
    this.updateCurrenciesSelect()

    // Add event listener to select dropdown
    this.select.addEventListener('change', () => {
      this.setCurrency(this.select.value)
    })

    // Add to container
    this.container.appendChild(this.currencyDiv)
    this.container.appendChild(this.input)
    if (this.showSelection) {this.container.appendChild(this.select)}
  }

  // For the currency select dropdown to update options
  private updateCurrenciesSelect() {
    // Clear out current select dropdown
    this.select.innerHTML = ''

    // Loop through currencies and add options
    for (const c in this.currencies) {
      if (this.currencies.hasOwnProperty(c)) {
        const option = document.createElement('option')
        option.value = c
        option.text = c.toUpperCase()
        this.select.appendChild(option)
      }
    }
  }

  // Deal with key inputs into money field
  private inputKeydown(evt: KeyboardEvent) {
    // Dont do anything if displayOnly
    if (this.displayOnly) {evt.preventDefault(); return}

    const key = evt.key
    const charCode = key.charCodeAt(0)

    // Deal with unidentified keys. This usually deals with android keyboard issues
    if (key.toLowerCase() === 'unidentified') {
      evt.preventDefault()
      setTimeout(() => {
        this.updateOutput()
      }, 100)
      return
    }

    // If delete
    if (charCode === 68 || charCode === 66) {
      evt.preventDefault() // Disable normal operations

      // Remove key from value

      this.value = this.value.substring(0, this.value.length - 1)
      if (this.value === '-') { this.value = '' }

      // Update display in input field
      this.updateOutput()
      return
    }

    // If hitting 0-9
    if (charCode >= 48 && charCode <= 57) {
      evt.preventDefault() // Disable normal operations

      // Add key to value
      this.value += evt.key

      // Update display in input field
      this.updateOutput()
      return
    }

    // Tab
    if (charCode === 84) {
      // Tab or enter let it operate normally
      return
    }

    // If + plus character
    if (charCode === 43) {
      evt.preventDefault() // Disable normal operations

      // Set isNegative
      this.isNegative = false

      // Update display in input field
      this.updateOutput()
      return
    }

    // If - negative character
    if (charCode === 45) {
      evt.preventDefault() // Disable normal operations
      // If minValue is set and it's greater than or equal 0 we wouldn't handle negative input
      if (this.minValue !== undefined && this.minValue >= 0) {
        return
      }

      // Set isNegative
      this.isNegative = true

      // Update display in input field
      this.updateOutput()
      return
    }

    // Up arrow
    if (key === 'ArrowUp') {
      evt.preventDefault() // Disable normal operations

      // Add step
      this.value = String(parseInt(this.value, 10) + fractionToInt(this.step))

      // Update display in input field
      this.updateOutput()
      return
    }

    // Down arrow
    if (key === 'ArrowDown') {
      evt.preventDefault() // Disable normal operations

      // Remove step
      this.value = String(parseInt(this.value, 10) - fractionToInt(this.step))

      // Update display in input field
      this.updateOutput()
      return
    }

    // Disable normal operations
    evt.preventDefault()
    evt.stopPropagation()
  }

  // Will take in an element and select the end of the input field
  private moveCursorToEnd(el: any) {
    if (typeof el.selectionStart === 'number') {
        el.selectionStart = el.selectionEnd = el.value.length
    } else if (typeof el.createTextRange !== 'undefined') {
        el.focus()
        const range = el.createTextRange()
        range.collapse(false)
        range.select()
    }
  }

  private getMobileOs() {
    const w = window as any
    const userAgent = navigator.userAgent || navigator.vendor || w.opera

        // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
          return 'windows'
      }

    if (/android/i.test(userAgent)) {
          return 'android'
      }

      // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !w.MSStream) {
          return 'ios'
      }

    return 'desktop'
  }
}

type Procedure = (...args: any[]) => void
interface Options { isImmediate: boolean }
function debounce<F extends Procedure>(
  func: F,
  waitMilliseconds = 100,
  options: Options = {isImmediate: false}
): (this: ThisParameterType<F>, ...args: Parameters<F>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined

  return function(this: ThisParameterType<F>, ...args: Parameters<F>) {
    const context = this

    const doLater = () => {
      timeoutId = undefined
      if (!options.isImmediate) {
        func.apply(context, args)
      }
    }

    const shouldCallNow = options.isImmediate && timeoutId === undefined
    if (timeoutId !== undefined) { clearTimeout(timeoutId) }
    timeoutId = setTimeout(doLater, waitMilliseconds)
    if (shouldCallNow) { func.apply(context, args) }
  }
}
