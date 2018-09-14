interface Currencies {
  [currency: string]: Currency
}

interface Currency {
  symbol: string
  fraction: number
}

export const currencies: Currencies = {
  USD: { symbol: '$', fraction: 2 },
  EUR: { symbol: '€', fraction: 2 },
  GBP: { symbol: '£', fraction: 2 },
  INR: { symbol: '₹', fraction: 2 },
  CRC: { symbol: '₡', fraction: 2 },
  VND: { symbol: '₫', fraction: 0 },
  HUF: { symbol: 'Ft', fraction: 2 },
  ILS: { symbol: '₪', fraction: 2 },
  CNY: { symbol: '¥', fraction: 2 },
  KRW: { symbol: '₩', fraction: 0 },
  NGN: { symbol: '₦', fraction: 2 },
  PYG: { symbol: '₲', fraction: 0 },
  PHP: { symbol: '₱', fraction: 2 },
  PLN: { symbol: 'zł', fraction: 2 },
  THB: { symbol: '฿', fraction: 2 },
  UAH: { symbol: '₴', fraction: 2 },
  JPY: { symbol: '¥', fraction: 0 }
}

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
  showSelection?: boolean
  onChange: (values: Values) => void
}

export function lowestCommonToFormat(val: string | number, fraction: number = 2): string {
  val = val.toString()

  // Create divide first
  let divide = '1'
  for (let i = 0; i < fraction; i++) { divide += '0'}
  const divideInt = parseInt(divide, 10)

  // If val includes . lets multiply it first
  if (val.indexOf('.') !== -1) {
    val = (parseFloat(val) * divideInt).toString()
  }

  // If fraction is 0 parseInt and return it
  if (fraction === 0) { return parseInt(val, 10).toString() }

  return (parseInt(val, 10) / divideInt).toFixed(fraction)
}

export function formatToLowestCommon(val: string | number, fraction: number = 2): string {
  const valStr = val.toString()

  let multi = '1'
  for (let i = 0; i < fraction; i++) { multi += '0'}
  const multiInt = parseInt(multi, 10)

  const valFloat = (parseFloat(valStr) * multiInt).toString()

  return parseInt(valFloat, 10).toString()
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
  public locale: string = this.getLocale()
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
    if (info.value) {this.value = formatToLowestCommon(info.value, currencies[this.currency].fraction)}
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

  public displayValue(): string {
    const fraction = currencies[this.currency.toUpperCase()].fraction
    const formatter = new Intl.NumberFormat(this.locale, {
      localeMatcher: 'best fit',
      style: 'currency',
      currency: this.currency.toUpperCase(),
      currencyDisplay: 'symbol',

      minimumFractionDigits: fraction,
      maximumFractionDigits: fraction
    })

    return formatter.format(parseFloat(this.formatValue()))
  }

  public formatValue(): string {
    const val = (this.value === '' ? '0' : this.value) // Lets make sure value is at least a
    const fraction = currencies[this.currency.toUpperCase()].fraction

    if (fraction === 0) { return val }

    let divide = '1'
    for (let i = 0; i < fraction; i++) {
      divide += '0'
    }
    const divideInt = parseInt(divide, 10)

    return (parseInt(val, 10) / divideInt).toFixed(fraction)
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

  private updateOutput() {
    this.value = (this.value === '' ? '' : parseInt(this.value, 10).toString())
    this.format = this.formatValue()
    this.display = this.displayValue()

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
    evt.preventDefault() // Disable normal operations

    const charCode = evt.keyCode || evt.which

    // If delete
    if (charCode === 8 || charCode === 46) {
      // Add key to value
      this.value = this.value.substring(0, this.value.length - 1)

      // Update display in input field
      this.updateOutput()
      return
    }

    // If hitting 0-9
    if (charCode >= 48 && charCode <= 57) {
      // Add key to value
      this.value += String.fromCharCode(charCode)

      // Update display in input field
      this.updateOutput()
      return
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

  // Try to identify the users locale - default en
  private getLocale(): string {
    if (navigator.languages !== undefined) {
      return navigator.languages[0]
    } else if (navigator.language) {
      return navigator.language
    } else {
      return 'en'
    }
  }
}
