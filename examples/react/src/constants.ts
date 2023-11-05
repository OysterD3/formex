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

export const INPUT_ELEMENTS = {
  [INPUTS.text]: {
    label: 'Text Input',
    value: INPUTS.text,
    componentProps: {
      type: 'text',
      label: 'Text Input',
      placeholder: 'Insert text',
    },
  },
  [INPUTS.textArea]: {
    label: 'Text Area',
    value: INPUTS.textArea,
    componentProps: {
      label: 'Text Area',
      placeholder: 'Insert text',
    },
  },
  [INPUTS.number]: {
    label: 'Number',
    value: INPUTS.number,
    componentProps: {
      label: 'Number',
      placeholder: 'Insert number',
      type: 'number',
      inputMode: 'numeric',
    },
  },
  [INPUTS.select]: {
    label: 'Select',
    value: INPUTS.select,
    componentProps: {
      label: 'Select',
    },
  },
  [INPUTS.checkbox]: {
    label: 'Checkbox',
    value: INPUTS.checkbox,
    componentProps: {
      label: 'Checkbox',
      helperText: 'Helper text',
    },
  },
  [INPUTS.radio]: {
    label: 'Radio',
    value: INPUTS.radio,
    componentProps: {
      label: 'Radio',
      name: 'foo',
      helperText: 'Helper text',
      row: true,
    },
  },
  [INPUTS.date]: {
    label: 'Date',
    value: INPUTS.date,
    componentProps: {
      label: 'Date',
      placeholder: 'Select date',
      value: '2020-12-31',
    },
  },
  [INPUTS.time]: {
    label: 'Time',
    value: INPUTS.time,
    componentProps: {
      label: 'Time',
      placeholder: 'Select time',
      interval: 15,
    },
  },
  [INPUTS.file]: {
    label: 'File',
    value: INPUTS.file,
    componentProps: {
      label: 'File',
      helperText: 'Helper text',
    },
  },
  [INPUTS.richText]: {
    label: 'Rich Text',
    value: INPUTS.richText,
    componentProps: {
      label: 'Rich Text',
      id: 'abc',
      defaultValue:
        '{"time":1698505259832,"blocks":[{"id":"Q8N6L2v2WS","type":"paragraph","data":{"text":"123"}}],"version":"2.28.2"}',
    },
  },
  [INPUTS.switch]: {
    label: 'Switch',
    value: INPUTS.switch,
    componentProps: {
      label: 'Switch',
      value: true,
    },
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