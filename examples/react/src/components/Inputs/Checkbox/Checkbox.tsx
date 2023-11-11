import { forwardRef, useId } from 'react';
import InputButton from '../../InputLayout/InputButton.tsx';
import { mergeProps } from '../../../utils/props.ts';
import InputCard from '../../InputLayout/InputCard.tsx';

export interface CheckboxProps {
  label?: string;
  variant?: 'card' | 'default';
  id?: string;
  name?: string;
  helperText?: string;
  defaultChecked?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DEFAULT_CHECKBOX_PROPS = {
  label: '',
  variant: 'default',
  id: undefined,
  name: undefined,
  helperText: undefined,
  defaultChecked: false,
  value: '',
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    id,
    label,
    name,
    helperText,
    defaultChecked,
    variant,
    value,
    onChange,
  } = mergeProps(DEFAULT_CHECKBOX_PROPS, props);

  const _id = useId();

  const inputId = id || _id;

  if (variant === 'default') {
    return (
      <InputButton
        ref={ref}
        label={label}
        type="checkbox"
        id={inputId}
        name={name}
        helperText={helperText}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
    );
  }

  return (
    <InputCard
      type="checkbox"
      label={label}
      name={name}
      helperText={helperText}
      defaultChecked={defaultChecked}
      value={value}
      onChange={onChange}
    />
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
