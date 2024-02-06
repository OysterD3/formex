import type {
  ElementPickerConfig,
  Elements,
  InputGroupElements,
} from './types';
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
