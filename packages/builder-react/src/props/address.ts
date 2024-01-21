import type { EditorComponentProps } from '../../types/utils.ts';
import type { CommonProps } from '../../types/props/common.ts';

export type AddressProps = CommonProps & {
  autoFocus: boolean;
  defaultValue: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const DEFAULT_ADDRESS_PROPS: EditorComponentProps<AddressProps> = {
  autoFocus: false,
  defaultValue: undefined,
  description: '',
  disabled: false,
  id: '',
  label: 'Address',
  name: '',
  placeholder: '',
  readOnly: false,
  required: false,
  tooltip: '',
};
