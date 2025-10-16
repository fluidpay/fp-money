import { PropType } from 'vue';
import FPMoney, { Values } from '../fp-money';
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<string | number | null>;
        validator: (v: unknown) => boolean;
    };
    currency: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    locale: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    format: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    display: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    currencies: {
        type: ObjectConstructor;
        required: false;
        default: null;
    };
    minValue: {
        type: NumberConstructor;
        required: false;
        default: null;
    };
    maxValue: {
        type: NumberConstructor;
        required: false;
        default: null;
    };
    step: {
        type: NumberConstructor;
        required: false;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    displayOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    valueFormat: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    showSelection: {
        type: BooleanConstructor;
        default: boolean;
    };
    onChange: {
        type: FunctionConstructor;
        required: false;
        default: null;
    };
}>, {}, {
    fpmoney: FPMoney | null;
    values: Values;
}, {}, {
    init(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "update:currency" | "update:locale" | "update:format" | "update:display")[], "update:modelValue" | "update:currency" | "update:locale" | "update:format" | "update:display", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<string | number | null>;
        validator: (v: unknown) => boolean;
    };
    currency: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    locale: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    format: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    display: {
        type: StringConstructor;
        required: false;
        default: null;
    };
    currencies: {
        type: ObjectConstructor;
        required: false;
        default: null;
    };
    minValue: {
        type: NumberConstructor;
        required: false;
        default: null;
    };
    maxValue: {
        type: NumberConstructor;
        required: false;
        default: null;
    };
    step: {
        type: NumberConstructor;
        required: false;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    displayOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    valueFormat: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    showSelection: {
        type: BooleanConstructor;
        default: boolean;
    };
    onChange: {
        type: FunctionConstructor;
        required: false;
        default: null;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onUpdate:currency"?: ((...args: any[]) => any) | undefined;
    "onUpdate:locale"?: ((...args: any[]) => any) | undefined;
    "onUpdate:format"?: ((...args: any[]) => any) | undefined;
    "onUpdate:display"?: ((...args: any[]) => any) | undefined;
}>, {
    currency: string;
    disabled: boolean;
    locale: string;
    format: string;
    display: string;
    currencies: Record<string, any>;
    minValue: number;
    maxValue: number;
    step: number;
    displayOnly: boolean;
    valueFormat: string;
    showSelection: boolean;
    onChange: Function;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
