import { Children, cloneElement, isValidElement, useId } from 'react';
import InputGroup from '../../InputLayout/InputGroup.tsx';
import { mergeProps } from '../../../utils/props.ts';

export interface CheckboxGroupProps {
  label?: string;
  name?: string;
  helperText?: string;
  children: React.ReactNode;
  row?: boolean;
  id?: string;
}

export const DEFAULT_CHECKBOX_GROUP_PROPS = {
  label: '',
  name: undefined,
  helperText: undefined,
  row: false,
  id: undefined,
};

const CheckboxGroup = (props: CheckboxGroupProps) => {
  const { label, name, helperText, children, row, id } = mergeProps(
    DEFAULT_CHECKBOX_GROUP_PROPS,
    props,
  );

  const _id = useId();
  const inputId = id || _id;

  return (
    <InputGroup
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
          });
        }
        return null;
      })}
    </InputGroup>
  );
};

export default CheckboxGroup;
