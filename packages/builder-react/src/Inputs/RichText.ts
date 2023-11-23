export interface RichTextProps {
  label?: string;
  id?: string;
  name?: string;
  helperText?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
}

export const DEFAULT_RICH_TEXT_PROPS = {
  label: 'Rich text',
  id: undefined,
  name: undefined,
  helperText: undefined,
  placeholder: 'Type something...',
  value: undefined,
  defaultValue: undefined,
  disabled: false,
  readOnly: false,
};
