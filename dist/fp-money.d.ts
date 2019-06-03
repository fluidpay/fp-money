import { Currencies } from './currencies';
export * from './currencies';
export interface Values {
    value: string;
    display: string;
    format: string;
    currency: string;
    locale: string;
}
export interface Constructor {
    container: HTMLDivElement;
    value?: string | number;
    currencies?: Currencies;
    currency?: string;
    locale?: string;
    valueFormat?: string;
    minValue?: number;
    maxValue?: number;
    step?: number;
    disabled?: boolean;
    displayOnly?: boolean;
    showSelection?: boolean;
    onChange?: (values: Values) => void;
}
export default class FPMoney {
    container: HTMLDivElement;
    currencyDiv: HTMLDivElement;
    input: HTMLInputElement;
    select: HTMLSelectElement;
    mobileOs: string;
    isNegative: boolean;
    value: string;
    display: string;
    format: string;
    currencies: Currencies;
    currency: string;
    locale: string;
    valueFormat: string;
    minValue?: number;
    maxValue?: number;
    step: number;
    disabled: boolean;
    displayOnly: boolean;
    showSelection: boolean;
    onChange: (values: Values) => void;
    constructor(info: Constructor);
    setValue(value: number | string): void;
    setCurrencies(currenciesValue: Currencies): void;
    setCurrency(currency: string): void;
    setLocale(locale: string): void;
    setDisabled(bool: boolean): void;
    setDisplayOnly(bool: boolean): void;
    destroy(): void;
    private validate;
    private updateOutput;
    private updateInputDisplay;
    private render;
    private updateCurrenciesSelect;
    private inputKeydown;
    private moveCursorToEnd;
    private getMobileOs;
}
