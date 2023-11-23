export interface TextAreaProps {
  label?: string;
  id?: string;
  name?: string;
  helperText?: string;
  placeholder?: string;
  rows?: number;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
}

export const DEFAULT_TEXT_AREA_PROPS = {
  label: 'Textarea',
  id: undefined,
  name: undefined,
  helperText: undefined,
  placeholder: 'Type something...',
  rows: 3,
  value: undefined,
  defaultValue: undefined,
  disabled: false,
  readOnly: false,
};
