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
  maxValue?: number
  displayOnly?: boolean
  showSelection?: boolean
  onChange: (values: Values) => void
}

export default class FPMoney {
  public container: HTMLDivElement
  public currencyDiv: HTMLDivElement
  public input: HTMLInputElement
  public select: HTMLSelectElement

  // Input items
  public isNegative: boolean = false
  public value: string = ''
  public display: string = ''
  public format: string = ''
  public currencies: Currencies = JSON.parse(JSON.stringify(currencies))
  public currency: string = '' // default is set in the constructor
  public locale: string = getLocale()
  public valueFormat: string = 'float'
  public maxValue: number = 0
  public displayOnly: boolean = false
  public showSelection: boolean = true

  // Callbacks
  public onChange: (values: Values) => void

  constructor(info: Constructor) {
    this.validate(info)

    // Set container
    let el: HTMLDivElement
    if (typeof info.container === 'string') {
      el = document.querySelector(info.container) as any as HTMLDivElement
    } else {
      el = info.container
    }
    this.container = el

    // Set values
    if (info.currencies) {this.currencies = info.currencies}
    if (info.currency) {this.currency = info.currency.toUpperCase()} else {this.currency = Object.keys(this.currencies)[0]}
    if (info.locale) {this.locale = info.locale}
    if (info.valueFormat) {this.valueFormat = info.valueFormat}
    if (info.value !== undefined) {
      let curVal = info.value
      this.isNegative = isNegative(curVal.toString())
      if (info.valueFormat === 'int') {curVal = intToFraction(curVal, this.currencies[this.currency].fraction)}
      this.value = fractionToInt(curVal, this.currencies[this.currency].fraction).toString()
    }
    if (info.maxValue) {this.maxValue = fractionToInt(info.maxValue, this.currencies[this.currency].fraction)}
    if (info.displayOnly === true) {this.displayOnly = true}
    if (info.showSelection !== undefined) {this.showSelection = info.showSelection}

    // Set Callbacks
    this.onChange = (info.onChange ? this.onChange = info.onChange : () => {return})

    // Render select and input
    this.currencyDiv = document.createElement('div')
    this.input = document.createElement('input')
    this.select = document.createElement('select')
    this.render()

    // Set default currency
    this.setCurrency(this.currency)
  }

  public setValue(value: number) {
    const fraction = this.currencies[this.currency].fraction
    // Dont do anything if nothing changed
    if (this.value.toString() === (this.valueFormat === 'float' ? fractionToInt(value, fraction).toString() : value.toString())) {return}

    // Check if negative number
    this.isNegative = isNegative(value.toString())

    // Normalize number to int
    if (this.format === 'int') {value = intToFraction(value, fraction)}
    this.value = fractionToInt(value, fraction).toString()

    this.updateOutput()
  }

  public setCurrencies(currenciesValue: Currencies) {
    this.currencies = currenciesValue

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
    this.updateOutput()
  }

  public setLocale(locale: string) {
    this.locale = locale

    // Update display input
    this.updateOutput()
  }

  public setDisplayOnly(bool: boolean) {
    this.displayOnly = bool

    if (this.displayOnly) {
      this.currencyDiv.classList.add('display-only')
      this.input.classList.add('display-only')
      this.input.disabled = true
      this.select.classList.add('display-only')
      this.select.disabled = true
    } else {
      this.currencyDiv.classList.remove('display-only')
      this.input.classList.remove('display-only')
      this.input.disabled = false
      this.select.classList.remove('display-only')
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
      // Limit if max
      if (this.maxValue !== 0 && val > this.maxValue) {val = this.maxValue}
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

    const charCode = evt.keyCode || evt.which
    const isShift = evt.shiftKey

    if (charCode === 8 || charCode === 46) { // If delete
      evt.preventDefault() // Disable normal operations

      // Remove key from value
      this.value = this.value.substring(0, this.value.length - 1)
      if (this.value === '-') { this.value = '' }

      // Update display in input field
      this.updateOutput()
    } else if ((charCode >= 48 && charCode <= 57) || (charCode >= 96 && charCode <= 105)) { // If hitting 0-9
      evt.preventDefault() // Disable normal operations

      // Add key to value
      this.value += evt.key

      // Update display in input field
      this.updateOutput()
    } else if (charCode === 9 || charCode === 13) {
      // Tab or enter let it operate normally
    } else if (charCode === 107 || (isShift && charCode === 187)) { // If + plus character
      evt.preventDefault() // Disable normal operations

      // Set isNegative
      this.isNegative = false

      // Update display in input field
      this.updateOutput()
    } else if (charCode === 109 || charCode === 189) { // If - negative character
      evt.preventDefault() // Disable normal operations

      // Set isNegative
      this.isNegative = true

      // Update display in input field
      this.updateOutput()
    } else {
      // Disable normal operations
      evt.preventDefault()
    }
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
}
