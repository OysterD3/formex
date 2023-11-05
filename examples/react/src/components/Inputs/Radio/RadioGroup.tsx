import { Children, cloneElement, isValidElement, useId } from 'react';
import InputGroup from '../../InputLayout/InputGroup.tsx';

export interface RadioGroupProps {
  label: string;
  name: string;
  helperText?: string;
  children: React.ReactNode;
  row?: boolean;
  id?: string;
}

const RadioGroup = ({
  label,
  name,
  helperText,
  children,
  row,
  id,
}: RadioGroupProps) => {
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

export default RadioGroup;
