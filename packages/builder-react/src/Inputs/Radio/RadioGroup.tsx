import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useId,
} from 'react';
import InputGroup from '../../InputLayout/InputGroup.tsx';
import { mergeProps } from '../../utils/props.ts';
import { RadioButtonProps } from './RadioButton.tsx';

export interface RadioGroupProps {
  label?: string;
  name?: string;
  helperText?: string;
  children: React.ReactNode;
  row?: boolean;
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: 'default' | 'card';
  disabled?: boolean;
}

export const DEFAULT_RADIO_GROUP_PROPS = {
  label: 'Radio group',
  name: undefined,
  helperText: undefined,
  children: undefined,
  row: false,
  id: undefined,
  variant: 'default',
  disabled: false,
};

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>((props, ref) => {
  const {
    label,
    name,
    helperText,
    children,
    row,
    id,
    onChange,
    value,
    variant,
    disabled,
  } = mergeProps(DEFAULT_RADIO_GROUP_PROPS, props);

  const _id = useId();
  const inputId = id || _id;

  return (
    <InputGroup
      ref={ref}
      label={label}
      id={inputId}
      name={name}
      helperText={helperText}
      row={row}
      disabled={disabled}
    >
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            name,
            onChange,
            variant,
            defaultChecked:
              (child as React.ReactElement<RadioButtonProps>).props.value ===
              value,
            disabled,
          });
        }
        return null;
      })}
    </InputGroup>
  );
});

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
