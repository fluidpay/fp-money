export interface Currency {
    symbol: string;
    fraction: number;
}
export interface Currencies {
    [currency: string]: Currency;
}
export declare const currencies: Currencies;
export declare function intToFraction(val: string | number, fraction?: number): number;
export declare function fractionToInt(val: string | number, fraction?: number): number;
export declare function percentOfValue(val: string | number, perc: string | number, fraction: number, round?: string): number;
export declare function displayValue(value: string | number, currency: string, fraction: number, locale?: string): string;
export declare function getLocale(): string;
export declare function isNegative(value: string | number): boolean;
export declare function bankersRounding(num: number, fraction: number): number;
