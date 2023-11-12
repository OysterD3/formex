import { forwardRef, useId } from 'react';
import { createBEM } from '../../utils/bem.ts';
import InputLabel from './InputLabel.tsx';
import InputHelperText from './InputHelperText.tsx';

const bem = createBEM('input-group');

export interface InputGroupProps {
  label: string;
  id?: string;
  name?: string;
  helperText?: string;
  row?: boolean;
  children: React.ReactNode;
}

const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
  ({ label, id, name, helperText, children, row }, ref) => {
    const _id = useId();
    const inputId = id || _id;

    return (
      <div ref={ref}>
        <InputLabel htmlFor={inputId}>{label}</InputLabel>
        {helperText && <InputHelperText>{helperText}</InputHelperText>}
        <fieldset
          className={bem('wrapper', { row: !!row })}
          id={inputId}
          name={name}
        >
          {children}
        </fieldset>
      </div>
    );
  },
);

InputGroup.displayName = 'InputGroup';

export default InputGroup;
