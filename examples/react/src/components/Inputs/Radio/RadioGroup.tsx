import { isValidElement, Children, cloneElement } from 'react';
import classNames from 'classnames';

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
  return (
    <div>
      <label>{label}</label>
      {helperText && <p className="text-sm text-gray-500">{helperText}</p>}
      <fieldset className={classNames('mt-4', row && 'flex space-x-6')}>
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return cloneElement(child as React.ReactElement, {
              name,
            });
          }
          return null;
        })}
      </fieldset>
    </div>
  );
};

export default RadioGroup;
