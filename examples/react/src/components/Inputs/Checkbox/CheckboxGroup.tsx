import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useId,
} from 'react';
import InputGroup from '../../InputLayout/InputGroup.tsx';
import { mergeProps } from '../../../utils/props.ts';
import { CheckboxProps } from './Checkbox.tsx';

export interface CheckboxGroupProps {
  label?: string;
  name?: string;
  helperText?: string;
  children: React.ReactNode;
  row?: boolean;
  id?: string;
  value?: string[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  variant?: 'default' | 'card';
}

export const DEFAULT_CHECKBOX_GROUP_PROPS = {
  label: '',
  name: undefined,
  helperText: undefined,
  row: false,
  id: undefined,
  variant: 'default',
};

const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (props, ref) => {
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
    } = mergeProps(DEFAULT_CHECKBOX_GROUP_PROPS, props);

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
      >
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return cloneElement(child as React.ReactElement, {
              name,
              onChange,
              variant,
              defaultChecked:
                value &&
                (child as React.ReactElement<CheckboxProps>).props.value &&
                value.includes(
                  (child as React.ReactElement<CheckboxProps>).props.value!,
                ),
            });
          }
          return null;
        })}
      </InputGroup>
    );
  },
);

CheckboxGroup.displayName = 'CheckboxGroup';

export default CheckboxGroup;
