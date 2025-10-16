import './fp-money.scss'

// Main class
import FPMoney from './fp-money'

// Types
export type { Values, Constructor } from './fp-money'
export type { Currencies, Currency } from './helpers'

// Export the main class
export default FPMoney

export {
  // Constants
  currencies,

  // Utility functions
  intToFraction,
  fractionToInt,
  percentOfValue,
  displayValue,
  getLocale,
  isNegative,
  bankersRounding,
  originalNumberFromPercentage
} from './helpers'
