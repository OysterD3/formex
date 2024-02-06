import { INPUT_GROUPS, INPUTS } from '../elements';
import type { AllValue, CommonProps } from './_common';
import type { Elements, InputElements, InputGroupElements } from './elements';

export type Option<TValue = string> = {
  label: string;
  value: TValue;
};

export type AddressProps = CommonProps & {
  autoFocus: boolean;
  defaultValue: string | undefined;
  onChange: (e: Event) => void;
  value: string;
};

export type CheckboxProps = Omit<CommonProps, 'placeholder' | 'readOnly'> & {
  defaultChecked: boolean;
  onChange: (e: Event) => void;
  value: string;
  variant: 'card' | 'default';
};

export type CheckboxGroupProps = Omit<
  CommonProps,
  'placeholder' | 'readOnly'
> & {
  onChange: (e: Event) => void;
  options: Option[];
  row: boolean;
  value: string[];
  variant: 'default' | 'card';
};

export type DatePickerProps = CommonProps & {
  defaultValue: string;
  disablePast: boolean;
  format: string;
  onChange: (value: string) => void;
  value: string;
};

export type DateTimePickerProps = CommonProps & {
  defaultValue: string;
  disablePast: boolean;
  format: string;
  interval: 1 | 15 | 30;
  onChange: (value: string) => void;
  value: string;
};

export type EmailProps = CommonProps & {
  autoFocus: boolean;
  defaultValue: string | undefined;
  onChange: (e: Event) => void;
  value: string;
};

export type FileUploadProps = Omit<CommonProps, 'placeholder'> & {
  accept: HTMLInputElement['accept'];
  multiple: boolean;
  onChange: (value: File) => void;
  size: number;
  value: File;
};

export type MultiLineTextProps = CommonProps & {
  autoFocus: boolean;
  defaultValue: string;
  maxRows: number;
  minRows: number;
  onChange: (e: Event) => void;
  value: string;
};

export type NumberProps = CommonProps & {
  autoFocus: boolean;
  defaultValue: string | undefined;
  max: number;
  min: number;
  onChange: (e: Event) => void;
  prefix: string;
  suffix: string;
  value: string;
};

export type PasswordProps = CommonProps & {
  onChange: (e: Event) => void;
  value: string;
};

export type PhoneProps = CommonProps & {
  autoFocus: boolean;
  defaultValue: string | undefined;
  onChange: (e: Event) => void;
  prefix: string;
  value: string;
};

export type RadioProps = Omit<CommonProps, 'placeholder' | 'readOnly'> & {
  defaultChecked: boolean;
  onChange: (e: Event) => void;
  value: string;
  variant: 'default' | 'card';
};

export type RadioGroupProps = Omit<CommonProps, 'placeholder' | 'readOnly'> & {
  onChange: (e: Event) => void;
  options: Option[];
  row: boolean;
  value: string;
  variant: 'default' | 'card';
};

export type RichTextProps = CommonProps & {
  defaultValue: string;
  onChange: (value: string) => void;
  value: string;
};

export type SelectProps<TValue = string> = CommonProps & {
  defaultValue: TValue;
  multiple: boolean;
  onChange: (value: TValue) => void;
  options: Option<TValue>[];
  value: TValue;
};

export type SingleLineTextProps = CommonProps & {
  autoFocus: boolean;
  defaultValue: string | undefined;
  onChange: (e: Event) => void;
  prefix: string;
  suffix: string;
  value: string;
};

type Value = string | number | boolean;

export type SwitchProps = Omit<CommonProps, 'placeholder'> & {
  defaultValue: Value;
  falseValue: Value;
  onChange: (value: Value) => void;
  trueValue: Value;
  value: Value;
};

export type TimePickerProps = CommonProps & {
  defaultValue: string;
  disablePast: boolean;
  format: string;
  interval: 1 | 15 | 30;
  onChange: (value: string) => void;
  value: string;
};

export type URLProps = CommonProps & {
  autoFocus: boolean;
  defaultValue: string | undefined;
  onChange: (e: Event) => void;
  prefix: string;
  suffix: string;
  value: string;
};

export type InputElementProps<T extends InputElements | AllValue> =
  T extends typeof INPUTS.singleLineText
    ? SingleLineTextProps
    : T extends typeof INPUTS.multiLineText
    ? MultiLineTextProps
    : T extends typeof INPUTS.file
    ? FileUploadProps
    : T extends typeof INPUTS.checkbox
    ? CheckboxProps
    : T extends typeof INPUTS.radio
    ? RadioProps
    : T extends typeof INPUTS.select
    ? SelectProps<unknown>
    : T extends typeof INPUTS.number
    ? NumberProps
    : T extends typeof INPUTS.date
    ? DatePickerProps
    : T extends typeof INPUTS.time
    ? TimePickerProps
    : T extends typeof INPUTS.richText
    ? RichTextProps
    : T extends typeof INPUTS.switch
    ? SwitchProps
    : T extends typeof INPUTS.email
    ? EmailProps
    : T extends typeof INPUTS.password
    ? PasswordProps
    : T extends typeof INPUTS.phone
    ? PhoneProps
    : T extends typeof INPUTS.url
    ? URLProps
    : T extends typeof INPUTS.datetime
    ? DateTimePickerProps
    : T extends typeof INPUTS.address
    ? AddressProps
    : T extends AllValue
    ? SingleLineTextProps &
        MultiLineTextProps &
        FileUploadProps &
        CheckboxProps &
        RadioProps &
        SelectProps &
        NumberProps &
        DatePickerProps &
        TimePickerProps &
        RichTextProps &
        SwitchProps &
        EmailProps &
        PasswordProps &
        PhoneProps &
        URLProps &
        DateTimePickerProps &
        AddressProps
    : never;

export type InputGroupElementProps<T extends InputGroupElements | AllValue> =
  T extends typeof INPUT_GROUPS.radio
    ? RadioGroupProps
    : T extends typeof INPUT_GROUPS.checkbox
    ? CheckboxGroupProps
    : T extends AllValue
    ? RadioGroupProps & CheckboxGroupProps
    : never;

export type ElementProps<T extends Elements | AllValue> =
  T extends InputElements
    ? InputElementProps<T>
    : T extends InputGroupElements
    ? InputGroupElementProps<T>
    : T extends AllValue
    ? InputElementProps<AllValue> & InputGroupElementProps<AllValue>
    : never;

export type EditorComponentProps<T extends object> = Omit<
  T,
  'value' | 'onChange'
>;
