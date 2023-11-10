import { useId } from 'react';
import InputButton from '../../InputLayout/InputButton.tsx';
import { mergeProps } from '../../../utils/props.ts';
import InputCard from '../../InputLayout/InputCard.tsx';

export interface CheckboxProps {
  label?: string;
  variant: 'card' | 'default';
  id?: string;
  name?: string;
  helperText?: string;
  checked?: boolean;
  value?: string;
}

export const DEFAULT_CHECKBOX_PROPS = {
  label: '',
  variant: 'default',
  id: undefined,
  name: undefined,
  helperText: undefined,
  checked: false,
  value: undefined,
};

const Checkbox = (props: CheckboxProps) => {
  const { id, label, name, helperText, checked, variant, value } = mergeProps(
    DEFAULT_CHECKBOX_PROPS,
    props,
  );

  const _id = useId();

  const inputId = id || _id;

  if (variant === 'default') {
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
  }

  return (
    <InputCard
      type="checkbox"
      label={label}
      name={name}
      helperText={helperText}
      checked={checked}
      value={value}
    />
  );
};

export default Checkbox;
