import { currencies, intToFraction, fractionToInt, displayValue, getLocale } from './currencies'

export { currencies, intToFraction, fractionToInt, displayValue, getLocale }

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
  currency?: string
  locale?: string
  maxValue?: number
  showSelection?: boolean
  onChange: (values: Values) => void
}

export default class FPMoney {
  public container: HTMLDivElement
  public currencyDiv: HTMLDivElement
  public input: HTMLInputElement
  public select: HTMLSelectElement

  // Input items
  public value: string = ''
  public display: string = ''
  public format: string = ''
  public currency: string = 'USD'
  public locale: string = getLocale()
  public maxValue: number = 0
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
    if (info.currency) {this.currency = info.currency.toUpperCase()}
    if (info.locale) {this.locale = info.locale}
    if (info.value) {this.value = fractionToInt(info.value, currencies[this.currency].fraction).toString()}
    if (info.maxValue) {this.maxValue = fractionToInt(info.maxValue, currencies[this.currency].fraction)}
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

  public setCurrency(currency: string) {
    currency = currency.toUpperCase()
    this.currency = currency

    // Currency display
    this.currencyDiv.innerHTML = currencies[currency].symbol

    // Input display
    const fraction = currencies[currency].fraction
    let multi = ''
    for (let i = 0; i < fraction; i++) {
      multi += '0'
    }
    this.input.placeholder = '0' + (fraction === 0 ? '' : '.' + multi)

    // Set currency select
    this.select.value = currency

    // Update display input
    this.updateOutput()
  }

  public setLocale(locale: string) {
    this.locale = locale

    // Update display input
    this.updateOutput()
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

    this.format = intToFraction(this.value, currencies[this.currency].fraction).toFixed(currencies[this.currency].fraction)
    this.display = displayValue(this.value, this.currency, this.locale)

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
    let clean = this.display.replace(currencies[this.currency.toUpperCase()].symbol, '') // Remove symbol
    const cur = this.currency
    cur.split('').forEach((c, i) => {
      clean = clean.replace(cur.substring(0, cur.length - i), '')
    })
    clean = clean.trim() // Remove whitespace
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
      this.input.focus()
      this.moveCursorToEnd(this.input)
    }, false)

    // Add options to select
    for (const c in currencies) {
      if (currencies.hasOwnProperty(c)) {
        const option = document.createElement('option')
        option.value = c
        option.text = c.toUpperCase()
        this.select.appendChild(option)
      }
    }

    // Add event listener to select dropdown
    this.select.addEventListener('change', () => {
      this.setCurrency(this.select.value)
    })

    // Add to container
    this.container.appendChild(this.currencyDiv)
    this.container.appendChild(this.input)
    if (this.showSelection) {this.container.appendChild(this.select)}
  }

  // Deal with key inputs into money field
  private inputKeydown(evt: KeyboardEvent) {
    const charCode = evt.keyCode || evt.which

    if (charCode === 8 || charCode === 46) { // If delete
      evt.preventDefault() // Disable normal operations

      // Remove key from value
      this.value = this.value.substring(0, this.value.length - 1)

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
    } else {
      // Disable normal operations
      evt.preventDefault()
    }
  }

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
