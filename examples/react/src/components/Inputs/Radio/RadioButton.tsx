import { forwardRef, useId } from 'react';
import InputButton from '../../InputLayout/InputButton.tsx';
import { mergeProps } from '../../../utils/props.ts';
import InputCard from '../../InputLayout/InputCard.tsx';

export type RadioButtonProps = {
  label?: string;
  id?: string;
  name?: string;
  helperText?: string;
  defaultChecked?: boolean;
  variant?: 'default' | 'card';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const DEFAULT_RADIO_BUTTON_PROPS = {
  label: 'Radio button',
  id: undefined,
  name: undefined,
  helperText: undefined,
  defaultChecked: undefined,
  variant: 'default',
  value: '',
};

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  (props, ref) => {
    const {
      label,
      id,
      name,
      helperText,
      defaultChecked,
      variant,
      value,
      onChange,
    } = mergeProps(DEFAULT_RADIO_BUTTON_PROPS, props);

    const _id = useId();

    const inputId = id || _id;

    if (variant === 'default') {
      return (
        <InputButton
          ref={ref}
          label={label}
          type="radio"
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
        ref={ref}
        type="radio"
        label={label}
        name={name}
        helperText={helperText}
        defaultChecked={defaultChecked}
        value={value}
        onChange={onChange}
      />
    );
  },
);

RadioButton.displayName = 'RadioButton';

export default RadioButton;
