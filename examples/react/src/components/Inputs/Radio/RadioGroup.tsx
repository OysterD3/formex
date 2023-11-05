import { isValidElement, Children, cloneElement, useId } from 'react';
import { createBEM } from '../../../utils/bem.ts';
import InputLayout from '../../InputLayout';

const bem = createBEM('input-radio-group');

export interface RadioGroupProps {
  label: string;
  name: string;
  helperText?: string;
  children: React.ReactNode;
  row?: boolean;
}

const RadioGroup = ({
  label,
  name,
  helperText,
  children,
  row,
}: RadioGroupProps) => {
  const id = useId();

  return (
    <InputLayout label={label} id={id} helperText={helperText}>
      <fieldset className={bem('wrapper', { row: !!row })}>
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return cloneElement(child as React.ReactElement, {
              name,
            });
          }
          return null;
        })}
      </fieldset>
    </InputLayout>
  );
};

export default RadioGroup;
