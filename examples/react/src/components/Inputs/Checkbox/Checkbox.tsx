import { useId } from 'react';
import InputButton from '../../InputLayout/InputButton.tsx';
import { mergeProps } from '../../../utils/props.ts';

export interface CheckboxProps {
  label?: string;
  id?: string;
  name?: string;
  helperText?: string;
  checked?: boolean;
}

export const DEFAULT_CHECKBOX_PROPS = {
  label: '',
  id: undefined,
  name: undefined,
  helperText: undefined,
  checked: false,
};

const Checkbox = (props: CheckboxProps) => {
  const { id, label, name, helperText, checked } = mergeProps(
    DEFAULT_CHECKBOX_PROPS,
    props,
  );

  const _id = useId();

  const inputId = id || _id;
  return (
    <InputButton
      label={label}
      type="checkbox"
      id={inputId}
      name={name}
      helperText={helperText}
      checked={checked}
    />
  );
};

export default Checkbox;
