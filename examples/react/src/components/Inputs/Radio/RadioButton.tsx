import { useId } from 'react';
import InputButton from '../../InputLayout/InputButton.tsx';
import { mergeProps } from '../../../utils/props.ts';

export type RadioButtonProps = {
  label?: string;
  id?: string;
  name?: string;
  helperText?: string;
  checked?: boolean;
};

export const DEFAULT_RADIO_BUTTON_PROPS = {
  label: '',
  id: undefined,
  name: undefined,
  helperText: undefined,
  checked: undefined,
};

const RadioButton = (props: RadioButtonProps) => {
  const { label, id, name, helperText, checked } = mergeProps(
    DEFAULT_RADIO_BUTTON_PROPS,
    props,
  );

  const _id = useId();

  const inputId = id || _id;

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
};

export default RadioButton;
