import { INPUT_ELEMENTS, LAYOUT_ELEMENTS, STATIC_ELEMENTS } from '../src';
import type { ValuesOf } from './ts-utils';

export type InputElementType = ValuesOf<typeof INPUT_ELEMENTS>['value'];
export type StaticElementType = ValuesOf<typeof STATIC_ELEMENTS>['value'];
export type LayoutElementType = ValuesOf<typeof LAYOUT_ELEMENTS>['value'];

export type Option = {
  label: string;
  value: string;
};

type InputElementCommon = {
  name: string;
  label: string;
  helperText: string;
  placeholder: string;
  defaultValue: string;
  isReadOnly: boolean;
  isDisabled: boolean;
  id: string;
  isRequired: boolean;
};

export type InputTextBasedCommonProp = InputElementCommon & {
  prefix: string;
  suffix: string;
};

export type InputBooleanBasedCommonProp = InputElementCommon & {
  trueValue: string;
  falseValue: string;
};

export type InputOptionsBasedCommonProp = InputElementCommon & {
  options: Option[];
};

export type InputSingleLineTextElement = InputTextBasedCommonProp;
export type InputMultiLineTextElement = InputTextBasedCommonProp & {
  minRows: number;
  maxRows: number;
};
export type InputNumberElement = InputTextBasedCommonProp;
export type InputPasswordElement = InputTextBasedCommonProp;
export type InputEmailElement = InputTextBasedCommonProp;
export type InputPhoneElement = InputTextBasedCommonProp;
export type InputDateElement = InputTextBasedCommonProp;
export type InputTimeElement = InputTextBasedCommonProp;
export type InputDateTimeElement = InputTextBasedCommonProp;
export type InputCheckboxElement = InputBooleanBasedCommonProp;
export type InputRadioElement = InputOptionsBasedCommonProp;
export type InputDropdownElement = InputOptionsBasedCommonProp & {
  isMultiSelect: boolean;
};
