import React from 'react';

interface InputErrorsProps {
  errors: string[];
}

const InputErrors = ({ errors }: InputErrorsProps) => {
  return (
    <React.Fragment>
      {errors.map((error) => (
        <p key={error} className="text-sm text-red-600">
          {error}
        </p>
      ))}
    </React.Fragment>
  );
};

export default InputErrors;
