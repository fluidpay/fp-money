interface Currencies {
    [currency: string]: Currency;
}
interface Currency {
    symbol: string;
    fraction: number;
}
export declare const currencies: Currencies;
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
    currency?: string;
    locale?: string;
    showSelection?: boolean;
    onChange: (values: Values) => void;
}
export declare function lowestCommonToFormat(val: string | number, fraction?: number): string;
export declare function formatToLowestCommon(val: string | number, fraction?: number): string;
export default class FPMoney {
    container: HTMLDivElement;
    currencyDiv: HTMLDivElement;
    input: HTMLInputElement;
    select: HTMLSelectElement;
    value: string;
    display: string;
    format: string;
    currency: string;
    locale: string;
    showSelection: boolean;
    onChange: (values: Values) => void;
    constructor(info: Constructor);
    setCurrency(currency: string): void;
    setLocale(locale: string): void;
    displayValue(): string;
    formatValue(): string;
    destroy(): void;
    private validate;
    private updateInputDisplay;
    private updateOutput;
    private render;
    private inputKeydown;
    private moveCursorToEnd;
    private getLocale;
}
export {};