import { useId } from 'react';
import InputButton from '../../InputLayout/InputButton.tsx';

export interface CheckboxProps {
  label: string;
  id?: string;
  name?: string;
  helperText?: string;
  checked?: boolean;
}

const Checkbox = ({ id, label, name, helperText, checked }: CheckboxProps) => {
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
