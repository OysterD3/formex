import { DEFAULT_TEXT_AREA_PROPS } from './components/Inputs/TextArea.tsx';
import { DEFAULT_SELECT_PROPS } from './components/Inputs/Select';
import { DEFAULT_CHECKBOX_PROPS } from './components/Inputs/Checkbox/Checkbox.tsx';
import { DEFAULT_RADIO_BUTTON_PROPS } from './components/Inputs/Radio/RadioButton.tsx';
import { DEFAULT_DATE_PICKER_PROPS } from './components/Inputs/DatePicker';
import { DEFAULT_TIME_PICKER_PROPS } from './components/Inputs/TimePicker.tsx';
import { DEFAULT_SWITCH_PROPS } from './components/Inputs/Switch.tsx';
import { DEFAULT_RICH_TEXT_PROPS } from './components/Inputs/RichText.tsx';
import { DEFAULT_FILE_UPLOAD_PROPS } from './components/Inputs/FileUpload.tsx';
import { DEFAULT_TEXT_FIELD_PROPS } from './components/Inputs/TextField.tsx';
import { DEFAULT_RADIO_GROUP_PROPS } from './components/Inputs/Radio/RadioGroup.tsx';
import { DEFAULT_CHECKBOX_GROUP_PROPS } from './components/Inputs/Checkbox/CheckboxGroup.tsx';

export const INPUTS = {
  text: 'TEXT',
  textArea: 'TEXT_AREA',
  number: 'NUMBER',
  select: 'SELECT',
  checkbox: 'CHECKBOX',
  radio: 'RADIO',
  date: 'DATE',
  time: 'TIME',
  file: 'FILE',
  richText: 'RICH_TEXT',
  switch: 'SWITCH',
} as const;

export const INPUT_GROUPS = {
  radio: 'RADIO_GROUP',
  checkbox: 'CHECKBOX_GROUP',
} as const;

export const INPUT_ELEMENTS = {
  [INPUTS.text]: {
    label: 'Text Input',
    value: INPUTS.text,
    icon: 'text',
    description: 'Single line text input',
    defaultComponentProps: DEFAULT_TEXT_FIELD_PROPS,
  },
  [INPUTS.textArea]: {
    label: 'Text Area',
    value: INPUTS.textArea,
    icon: 'input-method-line',
    description: 'Multi line text input',
    defaultComponentProps: DEFAULT_TEXT_AREA_PROPS,
  },
  [INPUTS.number]: {
    label: 'Number',
    value: INPUTS.number,
    icon: 'calculator-line',
    description: 'Number input',
    defaultComponentProps: {
      ...DEFAULT_TEXT_FIELD_PROPS,
      type: 'number',
      inputMode: 'numeric',
    },
  },
  [INPUTS.select]: {
    label: 'Select',
    value: INPUTS.select,
    icon: 'dropdown-list',
    description: 'Dropdown list',
    defaultComponentProps: DEFAULT_SELECT_PROPS,
  },
  [INPUTS.checkbox]: {
    label: 'Checkbox',
    value: INPUTS.checkbox,
    icon: 'checkbox-line',
    description: 'Checkbox',
    defaultComponentProps: DEFAULT_CHECKBOX_PROPS,
  },
  [INPUTS.radio]: {
    label: 'Radio',
    value: INPUTS.radio,
    icon: 'radio-button-line',
    description: 'Radio buttons',
    defaultComponentProps: DEFAULT_RADIO_BUTTON_PROPS,
  },
  [INPUTS.date]: {
    label: 'Date',
    value: INPUTS.date,
    icon: 'calendar-line',
    description: 'Date picker',
    defaultComponentProps: DEFAULT_DATE_PICKER_PROPS,
  },
  [INPUTS.time]: {
    label: 'Time',
    value: INPUTS.time,
    icon: 'time-line',
    description: 'Time picker',
    defaultComponentProps: DEFAULT_TIME_PICKER_PROPS,
  },
  [INPUTS.file]: {
    label: 'File',
    value: INPUTS.file,
    icon: 'upload-cloud-2-line',
    description: 'File upload',
    defaultComponentProps: DEFAULT_FILE_UPLOAD_PROPS,
  },
  [INPUTS.richText]: {
    label: 'Rich Text',
    value: INPUTS.richText,
    icon: 'code-view',
    description: 'Rich text editor',
    defaultComponentProps: DEFAULT_RICH_TEXT_PROPS,
  },
  [INPUTS.switch]: {
    label: 'Switch',
    value: INPUTS.switch,
    icon: 'toggle-line',
    description: 'Switch',
    defaultComponentProps: DEFAULT_SWITCH_PROPS,
  },
} as const;

export const INPUT_GROUP_ELEMENTS = {
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

export const INPUT_CONFIGS = {
  [INPUTS.text]: {
    label: '',
    placeholder: '',
    helperText: '',
  },
};

export const DRAG_AND_DROP_DATA_TYPE = {
  input: 'INPUT',
  group: 'GROUP',
  static: 'STATIC',
} as const;
