import { useId } from 'react';
import InputButton from '../../InputLayout/InputButton.tsx';
import { mergeProps } from '../../../utils/props.ts';
import InputCard from '../../InputLayout/InputCard.tsx';

export type RadioButtonProps = {
  label?: string;
  id?: string;
  name?: string;
  helperText?: string;
  checked?: boolean;
  variant?: 'default' | 'card';
  value?: string;
};

export const DEFAULT_RADIO_BUTTON_PROPS = {
  label: '',
  id: undefined,
  name: undefined,
  helperText: undefined,
  checked: undefined,
  variant: 'default',
  value: undefined,
};

const RadioButton = (props: RadioButtonProps) => {
  const { label, id, name, helperText, checked, variant, value } = mergeProps(
    DEFAULT_RADIO_BUTTON_PROPS,
    props,
  );

  const _id = useId();

  const inputId = id || _id;

  if (variant === 'default') {
    return (
      <InputButton
        label={label}
        type="radio"
        id={inputId}
        name={name}
        helperText={helperText}
        checked={checked}
      />
    );
  }

  return (
    <InputCard
      type="radio"
      label={label}
      name={name}
      helperText={helperText}
      checked={checked}
      value={value}
    />
  );
};

export default RadioButton;
