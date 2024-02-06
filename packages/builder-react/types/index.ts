import { INPUT_GROUPS, INPUTS, STATIC_ELEMENTS } from '../src';
import type {
  SingleLineTextProps,
  TimePickerProps,
  SwitchProps,
  SelectProps,
  RichTextProps,
  RadioGroupProps,
  RadioProps,
  FileUploadProps,
  DatePickerProps,
  CheckboxGroupProps,
  CheckboxProps,
  MultiLineTextProps,
  NumberProps,
  EmailProps,
  PasswordProps,
  PhoneProps,
  URLProps,
  DateTimePickerProps,
  AddressProps,
} from '../src';
import { ValuesOf } from './utils.ts';

export type AllValue = 'all';

export type InputElements = ValuesOf<typeof INPUTS>;
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
export type InputGroupElements = ValuesOf<typeof INPUT_GROUPS>;
export type InputGroupElementProps<T extends InputGroupElements | AllValue> =
  T extends typeof INPUT_GROUPS.radio
    ? RadioGroupProps
    : T extends typeof INPUT_GROUPS.checkbox
    ? CheckboxGroupProps
    : T extends AllValue
    ? RadioGroupProps & CheckboxGroupProps
    : never;

export type StaticElements = ValuesOf<typeof STATIC_ELEMENTS>;

export type Elements = InputElements | InputGroupElements;
export type ElementProps<T extends Elements | AllValue> =
  T extends InputElements
    ? InputElementProps<T>
    : T extends InputGroupElements
    ? InputGroupElementProps<T>
    : T extends AllValue
    ? InputElementProps<AllValue> & InputGroupElementProps<AllValue>
    : never;

export type ElementPickerComponent<TAvailable extends Elements = Elements> = {
  [key in TAvailable]: () => React.ReactNode;
};

export * from './editor.ts';
export * from './utils.ts';
export * from './formex.ts';
