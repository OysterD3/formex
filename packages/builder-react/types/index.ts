import {
  INPUT_ELEMENTS,
  INPUT_GROUP_ELEMENTS,
  INPUT_GROUPS,
  INPUTS,
  MISCELLANEOUS,
  STATIC_ELEMENTS,
} from '../src/constants.ts';
import { TextFieldProps } from '../src/Inputs/TextField.tsx';
import { TextAreaProps } from '../src/Inputs/TextArea.tsx';
import { CheckboxProps } from '../src/Inputs/Checkbox/Checkbox.tsx';
import { RadioButtonProps } from '../src/Inputs/Radio/RadioButton.tsx';
import { RichTextProps } from '../src/Inputs/RichText.tsx';
import { SelectProps } from '../src/Inputs/Select';
import { DatePickerProps } from '../src/Inputs/DatePicker';
import { TimePickerProps } from '../src/Inputs/TimePicker.tsx';
import { FileUploadProps } from '../src/Inputs/FileUpload.tsx';
import { SwitchProps } from '../src/Inputs/Switch.tsx';
import { RadioGroupProps } from '../src/Inputs/Radio/RadioGroup.tsx';
import { CheckboxGroupProps } from '../src/Inputs/Checkbox/CheckboxGroup.tsx';
import { OptionProps } from '../src/Inputs/Select/Option.tsx';
import { ValuesOf } from './utils.ts';

export type InputElements = ValuesOf<typeof INPUTS>;
export type InputElementProps<T extends InputElements> =
  T extends typeof INPUTS.text
    ? TextFieldProps
    : T extends typeof INPUTS.textArea
    ? TextAreaProps
    : T extends typeof INPUTS.file
    ? FileUploadProps
    : T extends typeof INPUTS.checkbox
    ? CheckboxProps
    : T extends typeof INPUTS.radio
    ? RadioButtonProps
    : T extends typeof INPUTS.select
    ? SelectProps<unknown>
    : T extends typeof INPUTS.number
    ? TextFieldProps
    : T extends typeof INPUTS.date
    ? DatePickerProps
    : T extends typeof INPUTS.time
    ? TimePickerProps
    : T extends typeof INPUTS.richText
    ? RichTextProps
    : T extends typeof INPUTS.switch
    ? SwitchProps
    : never;
export type InputGroupElements = ValuesOf<typeof INPUT_GROUPS>;
export type InputGroupElementProps<T extends InputGroupElements> =
  T extends typeof INPUT_GROUPS.radio
    ? RadioGroupProps
    : T extends typeof INPUT_GROUPS.checkbox
    ? CheckboxGroupProps
    : never;

export type StaticElements = ValuesOf<typeof STATIC_ELEMENTS>;

export type MiscElements = ValuesOf<typeof MISCELLANEOUS>;
export type MiscElementProps<T extends MiscElements> =
  T extends typeof MISCELLANEOUS.selectOption ? OptionProps : never;

export type Elements = InputElements | InputGroupElements | MiscElements;
export type ElementProps<T extends Elements> = T extends InputElements
  ? InputElementProps<T>
  : T extends InputGroupElements
  ? InputGroupElementProps<T>
  : T extends MiscElements
  ? MiscElementProps<T>
  : never;

export * from './editor.ts';
