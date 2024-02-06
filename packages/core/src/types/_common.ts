export type CommonProps = {
  description: string;
  disabled: boolean;
  id: string;
  label: string;
  name: string;
  placeholder: string;
  readOnly: boolean;
  required: boolean;
  tooltip: string;
};

export type ValuesOf<T extends Record<string, unknown>> = T[keyof T];

export type AllValue = 'all';
