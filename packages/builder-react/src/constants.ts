import { ControllerFieldState, ControllerRenderProps } from 'react-hook-form';
import type {
  AllValue,
  ElementProps,
  Elements,
  FormexFormValues,
  InputGroupElements,
} from '../types';
import { EditorComponentProps, ValuesOf } from '../types/utils.ts';
import { Option } from '../types/props/option.ts';
import { CommonProps } from '../types/props/common.ts';
import {
  DEFAULT_ADDRESS_PROPS,
  DEFAULT_CHECKBOX_GROUP_PROPS,
  DEFAULT_CHECKBOX_PROPS,
  DEFAULT_DATE_PICKER_PROPS,
  DEFAULT_DATE_TIME_PICKER_PROPS,
  DEFAULT_EMAIL_PROPS,
  DEFAULT_FILE_UPLOAD_PROPS,
  DEFAULT_MULTI_LINE_TEXT_PROPS,
  DEFAULT_NUMBER_PROPS,
  DEFAULT_PASSWORD_PROPS,
  DEFAULT_PHONE_PROPS,
  DEFAULT_RADIO_GROUP_PROPS,
  DEFAULT_RADIO_PROPS,
  DEFAULT_RICH_TEXT_PROPS,
  DEFAULT_SELECT_PROPS,
  DEFAULT_SINGLE_LINE_TEXT_PROPS,
  DEFAULT_SWITCH_PROPS,
  DEFAULT_TIME_PICKER_PROPS,
  DEFAULT_URL_PROPS,
} from './props';
import { UseControllerReturn } from 'react-hook-form/dist/types/controller';
import { UseFormStateReturn } from 'react-hook-form/dist/types';

export const INPUTS = {
  address: 'ADDRESS',
  checkbox: 'CHECKBOX',
  date: 'DATE',
  datetime: 'DATETIME',
  email: 'EMAIL',
  file: 'FILE',
  multiLineText: 'MULTI_LINE_TEXT',
  number: 'NUMBER',
  password: 'PASSWORD',
  phone: 'PHONE',
  radio: 'RADIO',
  richText: 'RICH_TEXT',
  select: 'SELECT',
  singleLineText: 'SINGLE_LINE_TEXT',
  switch: 'SWITCH',
  time: 'TIME',
  url: 'URL',
} as const;
export const INPUT_GROUPS = {
  radio: 'RADIO_GROUP',
  checkbox: 'CHECKBOX_GROUP',
} as const;

export type ElementPickerConfigComponentProps = {
  label: string;
  icon: string;
  description: string;
};

type ElementPickerConfig<TValue extends Elements> =
  ElementPickerConfigComponentProps & {
    value: TValue;
    defaultComponentProps: EditorComponentProps<ElementProps<TValue>>;
  };

export const ELEMENT_PICKER_ELEMENTS: {
  [key in Elements]: ElementPickerConfig<key>;
} = {
  [INPUTS.address]: {
    defaultComponentProps: DEFAULT_ADDRESS_PROPS,
    description: 'Address input',
    icon: 'map-pin-2-line',
    label: 'Address',
    value: INPUTS.address,
  },
  [INPUTS.checkbox]: {
    defaultComponentProps: DEFAULT_CHECKBOX_PROPS,
    description: 'Checkbox',
    icon: 'checkbox-line',
    label: 'Checkbox',
    value: INPUTS.checkbox,
  },
  [INPUTS.date]: {
    defaultComponentProps: DEFAULT_DATE_PICKER_PROPS,
    description: 'Date picker',
    icon: 'calendar-line',
    label: 'Date',
    value: INPUTS.date,
  },
  [INPUTS.datetime]: {
    defaultComponentProps: DEFAULT_DATE_TIME_PICKER_PROPS,
    description: 'Date time picker',
    icon: 'calendar-event-line',
    label: 'Date Time',
    value: INPUTS.datetime,
  },
  [INPUTS.email]: {
    defaultComponentProps: DEFAULT_EMAIL_PROPS,
    description: 'Email input',
    icon: 'mail-line',
    label: 'Email',
    value: INPUTS.email,
  },
  [INPUTS.file]: {
    defaultComponentProps: DEFAULT_FILE_UPLOAD_PROPS,
    description: 'File upload',
    icon: 'upload-cloud-2-line',
    label: 'File',
    value: INPUTS.file,
  },
  [INPUTS.multiLineText]: {
    defaultComponentProps: DEFAULT_MULTI_LINE_TEXT_PROPS,
    description: 'Multi line text input',
    icon: 'input-method-line',
    label: 'Text Area',
    value: INPUTS.multiLineText,
  },
  [INPUTS.number]: {
    defaultComponentProps: DEFAULT_NUMBER_PROPS,
    description: 'Number input',
    icon: 'calculator-line',
    label: 'Number',
    value: INPUTS.number,
  },
  [INPUTS.password]: {
    defaultComponentProps: DEFAULT_PASSWORD_PROPS,
    description: 'Password input',
    icon: 'lock-password-line',
    label: 'Password',
    value: INPUTS.password,
  },
  [INPUTS.phone]: {
    defaultComponentProps: DEFAULT_PHONE_PROPS,
    description: 'Phone input',
    icon: 'phone-line',
    label: 'Phone',
    value: INPUTS.phone,
  },
  [INPUTS.radio]: {
    defaultComponentProps: DEFAULT_RADIO_PROPS,
    description: 'Radio buttons',
    icon: 'radio-button-line',
    label: 'Radio',
    value: INPUTS.radio,
  },
  [INPUTS.richText]: {
    defaultComponentProps: DEFAULT_RICH_TEXT_PROPS,
    description: 'Rich text editor',
    icon: 'code-view',
    label: 'Rich Text',
    value: INPUTS.richText,
  },
  [INPUTS.select]: {
    defaultComponentProps: DEFAULT_SELECT_PROPS,
    description: 'Dropdown list',
    icon: 'dropdown-list',
    label: 'Select',
    value: INPUTS.select,
  },
  [INPUTS.singleLineText]: {
    defaultComponentProps: DEFAULT_SINGLE_LINE_TEXT_PROPS,
    description: 'Single line text input',
    icon: 'text',
    label: 'Text Input',
    value: INPUTS.singleLineText,
  },
  [INPUTS.switch]: {
    defaultComponentProps: DEFAULT_SWITCH_PROPS,
    description: 'Switch',
    icon: 'toggle-line',
    label: 'Switch',
    value: INPUTS.switch,
  },
  [INPUTS.time]: {
    defaultComponentProps: DEFAULT_TIME_PICKER_PROPS,
    description: 'Time picker',
    icon: 'time-line',
    label: 'Time',
    value: INPUTS.time,
  },
  [INPUTS.url]: {
    defaultComponentProps: DEFAULT_URL_PROPS,
    description: 'URL input',
    icon: 'link-line',
    label: 'URL',
    value: INPUTS.url,
  },
  [INPUT_GROUPS.radio]: {
    label: 'Radio Group',
    value: INPUT_GROUPS.radio,
    icon: 'radio-button-line',
    description: 'Radio buttons',
    defaultComponentProps: DEFAULT_RADIO_GROUP_PROPS,
  },
  [INPUT_GROUPS.checkbox]: {
    label: 'Checkbox Group',
    value: INPUT_GROUPS.checkbox,
    icon: 'checkbox-line',
    description: 'Checkbox',
    defaultComponentProps: DEFAULT_CHECKBOX_GROUP_PROPS,
  },
} as const;

export const INPUT_GROUP_ELEMENTS: {
  [key in InputGroupElements]: ElementPickerConfig<key>;
} = {
  [INPUT_GROUPS.radio]: {
    label: 'Radio Group',
    value: INPUT_GROUPS.radio,
    icon: 'radio-button-line',
    description: 'Radio buttons',
    defaultComponentProps: DEFAULT_RADIO_GROUP_PROPS,
  },
  [INPUT_GROUPS.checkbox]: {
    label: 'Checkbox Group',
    value: INPUT_GROUPS.checkbox,
    icon: 'checkbox-line',
    description: 'Checkbox',
    defaultComponentProps: DEFAULT_CHECKBOX_GROUP_PROPS,
  },
} as const;

export const STATIC_ELEMENTS = {
  button: {
    label: 'Button',
    value: 'BUTTON',
  },
  divider: {
    label: 'Divider',
    value: 'DIVIDER',
  },
  description: {
    label: 'Description',
    value: 'DESCRIPTION',
  },
  captcha: {
    label: 'Captcha',
    value: 'CAPTCHA',
  },
  quote: {
    label: 'Quote',
    value: 'QUOTE',
  },
  header: {
    label: 'Header',
    value: 'HEADER',
  },
  image: {
    label: 'Image',
    value: 'IMAGE',
  },
  link: {
    label: 'Link',
    value: 'LINK',
  },
  staticHTML: {
    label: 'Static HTML',
    value: 'STATIC_HTML',
  },
} as const;

export const LAYOUT_ELEMENTS = {
  steps: {
    label: 'Steps',
    value: 'STEPS',
  },
  container: {
    label: 'Container',
    value: 'CONTAINER',
  },
} as const;

export const DRAG_AND_DROP_DATA_TYPE = {
  input: 'INPUT',
  group: 'GROUP',
  static: 'STATIC',
} as const;

export type InputAttributes = {
  [key in keyof EditorComponentProps<
    ElementProps<AllValue> & CommonProps
  >]: key;
};
export type InputAttribute = ValuesOf<InputAttributes>;

export const INPUT_ATTRIBUTES: InputAttributes = {
  accept: 'accept',
  autoFocus: 'autoFocus',
  defaultChecked: 'defaultChecked',
  defaultValue: 'defaultValue',
  description: 'description',
  disabled: 'disabled',
  disablePast: 'disablePast',
  falseValue: 'falseValue',
  format: 'format',
  id: 'id',
  interval: 'interval',
  label: 'label',
  max: 'max',
  maxRows: 'maxRows',
  min: 'min',
  minRows: 'minRows',
  multiple: 'multiple',
  name: 'name',
  options: 'options',
  placeholder: 'placeholder',
  prefix: 'prefix',
  readOnly: 'readOnly',
  required: 'required',
  row: 'row',
  size: 'size',
  suffix: 'suffix',
  tooltip: 'tooltip',
  trueValue: 'trueValue',
  variant: 'variant',
} as const;

export type ConfigurationPanelAttributeInputElement =
  | typeof INPUTS.switch
  | typeof INPUTS.radio
  | typeof INPUTS.number
  | typeof INPUTS.singleLineText;

export type InputAttributeConfigurationProps<
  TElements extends Elements = Elements,
> = {
  label: string;
  placeholder: string;
  tooltip?: string;
  description?: string;
  options?: readonly Option[];
  field: ControllerRenderProps<FormexFormValues<TElements>>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<FormexFormValues<TElements>>;
};

export type InputAttributeConfiguration = {
  [key in InputAttribute]: {
    label: string;
    placeholder: string;
    tooltip?: string;
    description?: string;
    inputType: ConfigurationPanelAttributeInputElement;
    options?: readonly Option[];
  };
};

export const INPUT_ATTRIBUTES_INPUT_MAP: InputAttributeConfiguration = {
  [INPUT_ATTRIBUTES.label]: {
    label: 'Label',
    placeholder: 'Label',
    inputType: INPUTS.singleLineText,
  },
  [INPUT_ATTRIBUTES.placeholder]: {
    label: 'Placeholder',
    placeholder: 'Placeholder',
    inputType: INPUTS.singleLineText,
  },
  [INPUT_ATTRIBUTES.description]: {
    label: 'Description',
    placeholder: 'Description',
    inputType: INPUTS.singleLineText,
  },
  [INPUT_ATTRIBUTES.disabled]: {
    label: 'Disabled',
    placeholder: '',
    inputType: INPUTS.switch,
  },
  [INPUT_ATTRIBUTES.readOnly]: {
    label: 'Read Only',
    placeholder: '',
    inputType: INPUTS.switch,
  },
  [INPUT_ATTRIBUTES.required]: {
    label: 'Required',
    placeholder: '',
    inputType: INPUTS.switch,
  },
  [INPUT_ATTRIBUTES.defaultValue]: {
    label: 'Default Value',
    placeholder: 'Default Value',
    inputType: INPUTS.singleLineText,
  },
  [INPUT_ATTRIBUTES.autoFocus]: {
    label: 'Auto Focus',
    placeholder: '',
    inputType: INPUTS.switch,
  },
  [INPUT_ATTRIBUTES.tooltip]: {
    label: 'Tooltip',
    placeholder: 'Tooltip',
    inputType: INPUTS.singleLineText,
  },
  [INPUT_ATTRIBUTES.prefix]: {
    label: 'Prefix',
    placeholder: 'Prefix',
    inputType: INPUTS.singleLineText,
  },
  [INPUT_ATTRIBUTES.suffix]: {
    label: 'Suffix',
    placeholder: 'Suffix',
    inputType: INPUTS.singleLineText,
  },
  [INPUT_ATTRIBUTES.options]: {
    label: 'Options',
    placeholder: 'Options',
    inputType: INPUTS.singleLineText,
  },
  [INPUT_ATTRIBUTES.id]: {
    label: 'ID',
    placeholder: 'ID',
    inputType: INPUTS.singleLineText,
  },
  [INPUT_ATTRIBUTES.name]: {
    label: 'Name',
    placeholder: 'Name',
    inputType: INPUTS.singleLineText,
  },
  [INPUT_ATTRIBUTES.defaultChecked]: {
    label: 'Default Checked',
    placeholder: '',
    inputType: INPUTS.switch,
  },
  [INPUT_ATTRIBUTES.variant]: {
    label: 'Variants',
    placeholder: '',
    inputType: INPUTS.radio,
    options: [
      {
        label: 'Default',
        value: 'default',
      },
      {
        label: 'Card',
        value: 'card',
      },
    ],
  },
  [INPUT_ATTRIBUTES.disablePast]: {
    label: 'Disable Past',
    placeholder: '',
    inputType: INPUTS.switch,
  },
  [INPUT_ATTRIBUTES.format]: {
    label: 'Format',
    placeholder: '',
    inputType: INPUTS.singleLineText,
  },
  [INPUT_ATTRIBUTES.interval]: {
    label: 'Interval',
    placeholder: '',
    inputType: INPUTS.singleLineText,
  },
  [INPUT_ATTRIBUTES.accept]: {
    label: 'Accept',
    placeholder: '',
    inputType: INPUTS.singleLineText,
  },
  [INPUT_ATTRIBUTES.multiple]: {
    label: 'Multiple',
    placeholder: '',
    inputType: INPUTS.switch,
  },
  [INPUT_ATTRIBUTES.max]: {
    label: 'Max',
    placeholder: '',
    inputType: INPUTS.number,
  },
  [INPUT_ATTRIBUTES.min]: {
    label: 'Min',
    placeholder: '',
    inputType: INPUTS.number,
  },
  [INPUT_ATTRIBUTES.size]: {
    label: 'Size',
    placeholder: '',
    inputType: INPUTS.number,
  },
  [INPUT_ATTRIBUTES.minRows]: {
    label: 'Min Rows',
    placeholder: '',
    inputType: INPUTS.number,
  },
  [INPUT_ATTRIBUTES.maxRows]: {
    label: 'Max Rows',
    placeholder: '',
    inputType: INPUTS.number,
  },
  [INPUT_ATTRIBUTES.trueValue]: {
    label: 'True Value',
    placeholder: '',
    inputType: INPUTS.singleLineText,
  },
  [INPUT_ATTRIBUTES.falseValue]: {
    label: 'False Value',
    placeholder: '',
    inputType: INPUTS.singleLineText,
  },
  [INPUT_ATTRIBUTES.row]: {
    label: 'Row layout',
    placeholder: '',
    inputType: INPUTS.switch,
  },
} as const;

export type ElementAttributeConfiguration<
  TAvailable extends Elements = Elements,
> = {
  [key in TAvailable]: readonly (keyof EditorComponentProps<
    ElementProps<key>
  >)[];
};

export const INPUTS_ATTRIBUTES_MAP: ElementAttributeConfiguration = {
  [INPUTS.address]: [
    INPUT_ATTRIBUTES.autoFocus,
    INPUT_ATTRIBUTES.defaultValue,
    INPUT_ATTRIBUTES.description,
    INPUT_ATTRIBUTES.disabled,
    INPUT_ATTRIBUTES.id,
    INPUT_ATTRIBUTES.label,
    INPUT_ATTRIBUTES.name,
    INPUT_ATTRIBUTES.placeholder,
    INPUT_ATTRIBUTES.readOnly,
    INPUT_ATTRIBUTES.required,
    INPUT_ATTRIBUTES.tooltip,
  ],
  [INPUTS.checkbox]: [
    INPUT_ATTRIBUTES.defaultChecked,
    INPUT_ATTRIBUTES.description,
    INPUT_ATTRIBUTES.disabled,
    INPUT_ATTRIBUTES.id,
    INPUT_ATTRIBUTES.label,
    INPUT_ATTRIBUTES.name,
    INPUT_ATTRIBUTES.required,
    INPUT_ATTRIBUTES.tooltip,
    INPUT_ATTRIBUTES.variant,
  ],
  [INPUTS.date]: [
    INPUT_ATTRIBUTES.defaultValue,
    INPUT_ATTRIBUTES.description,
    INPUT_ATTRIBUTES.disabled,
    INPUT_ATTRIBUTES.disablePast,
    INPUT_ATTRIBUTES.format,
    INPUT_ATTRIBUTES.id,
    INPUT_ATTRIBUTES.label,
    INPUT_ATTRIBUTES.name,
    INPUT_ATTRIBUTES.placeholder,
    INPUT_ATTRIBUTES.readOnly,
    INPUT_ATTRIBUTES.required,
    INPUT_ATTRIBUTES.tooltip,
  ],
  [INPUTS.datetime]: [
    INPUT_ATTRIBUTES.defaultValue,
    INPUT_ATTRIBUTES.description,
    INPUT_ATTRIBUTES.disabled,
    INPUT_ATTRIBUTES.disablePast,
    INPUT_ATTRIBUTES.format,
    INPUT_ATTRIBUTES.id,
    INPUT_ATTRIBUTES.interval,
    INPUT_ATTRIBUTES.label,
    INPUT_ATTRIBUTES.name,
    INPUT_ATTRIBUTES.placeholder,
    INPUT_ATTRIBUTES.readOnly,
    INPUT_ATTRIBUTES.required,
    INPUT_ATTRIBUTES.tooltip,
  ],
  [INPUTS.email]: [
    INPUT_ATTRIBUTES.autoFocus,
    INPUT_ATTRIBUTES.defaultValue,
    INPUT_ATTRIBUTES.description,
    INPUT_ATTRIBUTES.disabled,
    INPUT_ATTRIBUTES.id,
    INPUT_ATTRIBUTES.label,
    INPUT_ATTRIBUTES.name,
    INPUT_ATTRIBUTES.placeholder,
    INPUT_ATTRIBUTES.readOnly,
    INPUT_ATTRIBUTES.required,
    INPUT_ATTRIBUTES.tooltip,
  ],
  [INPUTS.file]: [
    INPUT_ATTRIBUTES.accept,
    INPUT_ATTRIBUTES.description,
    INPUT_ATTRIBUTES.disabled,
    INPUT_ATTRIBUTES.id,
    INPUT_ATTRIBUTES.label,
    INPUT_ATTRIBUTES.multiple,
    INPUT_ATTRIBUTES.name,
    INPUT_ATTRIBUTES.readOnly,
    INPUT_ATTRIBUTES.required,
    INPUT_ATTRIBUTES.size,
    INPUT_ATTRIBUTES.tooltip,
  ],
  [INPUTS.multiLineText]: [
    INPUT_ATTRIBUTES.autoFocus,
    INPUT_ATTRIBUTES.defaultValue,
    INPUT_ATTRIBUTES.description,
    INPUT_ATTRIBUTES.disabled,
    INPUT_ATTRIBUTES.id,
    INPUT_ATTRIBUTES.label,
    INPUT_ATTRIBUTES.maxRows,
    INPUT_ATTRIBUTES.minRows,
    INPUT_ATTRIBUTES.name,
    INPUT_ATTRIBUTES.placeholder,
    INPUT_ATTRIBUTES.readOnly,
    INPUT_ATTRIBUTES.required,
    INPUT_ATTRIBUTES.tooltip,
  ],
  [INPUTS.number]: [
    INPUT_ATTRIBUTES.autoFocus,
    INPUT_ATTRIBUTES.defaultValue,
    INPUT_ATTRIBUTES.description,
    INPUT_ATTRIBUTES.disabled,
    INPUT_ATTRIBUTES.id,
    INPUT_ATTRIBUTES.label,
    INPUT_ATTRIBUTES.max,
    INPUT_ATTRIBUTES.min,
    INPUT_ATTRIBUTES.name,
    INPUT_ATTRIBUTES.placeholder,
    INPUT_ATTRIBUTES.prefix,
    INPUT_ATTRIBUTES.readOnly,
    INPUT_ATTRIBUTES.required,
    INPUT_ATTRIBUTES.suffix,
    INPUT_ATTRIBUTES.tooltip,
  ],
  [INPUTS.password]: [
    INPUT_ATTRIBUTES.description,
    INPUT_ATTRIBUTES.disabled,
    INPUT_ATTRIBUTES.id,
    INPUT_ATTRIBUTES.label,
    INPUT_ATTRIBUTES.name,
    INPUT_ATTRIBUTES.placeholder,
    INPUT_ATTRIBUTES.readOnly,
    INPUT_ATTRIBUTES.required,
    INPUT_ATTRIBUTES.tooltip,
  ],
  [INPUTS.phone]: [
    INPUT_ATTRIBUTES.autoFocus,
    INPUT_ATTRIBUTES.defaultValue,
    INPUT_ATTRIBUTES.description,
    INPUT_ATTRIBUTES.disabled,
    INPUT_ATTRIBUTES.id,
    INPUT_ATTRIBUTES.label,
    INPUT_ATTRIBUTES.name,
    INPUT_ATTRIBUTES.placeholder,
    INPUT_ATTRIBUTES.prefix,
    INPUT_ATTRIBUTES.readOnly,
    INPUT_ATTRIBUTES.required,
    INPUT_ATTRIBUTES.tooltip,
  ],
  [INPUTS.radio]: [
    INPUT_ATTRIBUTES.defaultChecked,
    INPUT_ATTRIBUTES.description,
    INPUT_ATTRIBUTES.disabled,
    INPUT_ATTRIBUTES.id,
    INPUT_ATTRIBUTES.label,
    INPUT_ATTRIBUTES.name,
    INPUT_ATTRIBUTES.required,
    INPUT_ATTRIBUTES.tooltip,
    INPUT_ATTRIBUTES.variant,
  ],
  [INPUTS.richText]: [
    INPUT_ATTRIBUTES.defaultValue,
    INPUT_ATTRIBUTES.description,
    INPUT_ATTRIBUTES.disabled,
    INPUT_ATTRIBUTES.id,
    INPUT_ATTRIBUTES.label,
    INPUT_ATTRIBUTES.name,
    INPUT_ATTRIBUTES.placeholder,
    INPUT_ATTRIBUTES.readOnly,
    INPUT_ATTRIBUTES.required,
    INPUT_ATTRIBUTES.tooltip,
  ],
  [INPUTS.select]: [
    INPUT_ATTRIBUTES.defaultValue,
    INPUT_ATTRIBUTES.description,
    INPUT_ATTRIBUTES.disabled,
    INPUT_ATTRIBUTES.id,
    INPUT_ATTRIBUTES.label,
    INPUT_ATTRIBUTES.multiple,
    INPUT_ATTRIBUTES.name,
    INPUT_ATTRIBUTES.options,
    INPUT_ATTRIBUTES.placeholder,
    INPUT_ATTRIBUTES.readOnly,
    INPUT_ATTRIBUTES.required,
    INPUT_ATTRIBUTES.tooltip,
  ],
  [INPUTS.singleLineText]: [
    INPUT_ATTRIBUTES.autoFocus,
    INPUT_ATTRIBUTES.defaultValue,
    INPUT_ATTRIBUTES.description,
    INPUT_ATTRIBUTES.disabled,
    INPUT_ATTRIBUTES.id,
    INPUT_ATTRIBUTES.label,
    INPUT_ATTRIBUTES.name,
    INPUT_ATTRIBUTES.placeholder,
    INPUT_ATTRIBUTES.prefix,
    INPUT_ATTRIBUTES.readOnly,
    INPUT_ATTRIBUTES.required,
    INPUT_ATTRIBUTES.suffix,
    INPUT_ATTRIBUTES.tooltip,
  ],
  [INPUTS.switch]: [
    INPUT_ATTRIBUTES.defaultValue,
    INPUT_ATTRIBUTES.description,
    INPUT_ATTRIBUTES.disabled,
    INPUT_ATTRIBUTES.falseValue,
    INPUT_ATTRIBUTES.id,
    INPUT_ATTRIBUTES.label,
    INPUT_ATTRIBUTES.name,
    INPUT_ATTRIBUTES.readOnly,
    INPUT_ATTRIBUTES.required,
    INPUT_ATTRIBUTES.tooltip,
    INPUT_ATTRIBUTES.trueValue,
  ],
  [INPUTS.time]: [
    INPUT_ATTRIBUTES.defaultValue,
    INPUT_ATTRIBUTES.description,
    INPUT_ATTRIBUTES.disabled,
    INPUT_ATTRIBUTES.disablePast,
    INPUT_ATTRIBUTES.format,
    INPUT_ATTRIBUTES.id,
    INPUT_ATTRIBUTES.interval,
    INPUT_ATTRIBUTES.label,
    INPUT_ATTRIBUTES.name,
    INPUT_ATTRIBUTES.placeholder,
    INPUT_ATTRIBUTES.readOnly,
    INPUT_ATTRIBUTES.required,
    INPUT_ATTRIBUTES.tooltip,
  ],
  [INPUTS.url]: [
    INPUT_ATTRIBUTES.autoFocus,
    INPUT_ATTRIBUTES.defaultValue,
    INPUT_ATTRIBUTES.description,
    INPUT_ATTRIBUTES.disabled,
    INPUT_ATTRIBUTES.id,
    INPUT_ATTRIBUTES.label,
    INPUT_ATTRIBUTES.name,
    INPUT_ATTRIBUTES.placeholder,
    INPUT_ATTRIBUTES.prefix,
    INPUT_ATTRIBUTES.readOnly,
    INPUT_ATTRIBUTES.required,
    INPUT_ATTRIBUTES.suffix,
    INPUT_ATTRIBUTES.tooltip,
  ],
  [INPUT_GROUPS.checkbox]: [],
  [INPUT_GROUPS.radio]: [],
} as const;
