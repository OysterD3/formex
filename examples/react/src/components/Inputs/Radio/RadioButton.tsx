import { useId } from 'react';
import InputButton from '../../InputLayout/InputButton.tsx';

export type RadioButtonProps = {
  label: string;
  id?: string;
  name?: string;
  helperText?: string;
  checked?: boolean;
};

const RadioButton = ({
  label,
  id,
  name,
  helperText,
  checked,
}: RadioButtonProps) => {
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