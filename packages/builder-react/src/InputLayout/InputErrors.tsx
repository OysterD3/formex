import React from 'react';
import { createBEM } from '../utils/bem.ts';

interface InputErrorsProps {
  errors: string[];
}

const bem = createBEM('input');

const InputErrors = ({ errors }: InputErrorsProps) => {
  return (
    <React.Fragment>
      {errors.map((error) => (
        <p key={error} className={bem('error')}>
          {error}
        </p>
      ))}
    </React.Fragment>
  );
};

export default InputErrors;
