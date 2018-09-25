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
    maxValue?: number;
    showSelection?: boolean;
    onChange: (values: Values) => void;
}
export default class FPMoney {
    container: HTMLDivElement;
    currencyDiv: HTMLDivElement;
    input: HTMLInputElement;
    select: HTMLSelectElement;
    value: string;
    display: string;
    format: string;
    currencies: Currencies;
    currency: string;
    locale: string;
    maxValue: number;
    showSelection: boolean;
    onChange: (values: Values) => void;
    constructor(info: Constructor);
    setCurrency(currency: string): void;
    setLocale(locale: string): void;
    destroy(): void;
    private validate;
    private updateOutput;
    private updateInputDisplay;
    private render;
    private inputKeydown;
    private moveCursorToEnd;
}
