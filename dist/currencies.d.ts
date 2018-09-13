export interface Currencies {
    [currency: string]: Currency;
}
export interface Currency {
    symbol: string;
    fraction: number;
}
declare const _default: Currencies;
export default _default;
