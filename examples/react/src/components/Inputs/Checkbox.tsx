import { useId } from 'react';

export interface CheckboxProps {
  label: string;
  id?: string;
  name?: string;
  helperText?: string;
}

const Checkbox = ({ id, label, name, helperText }: CheckboxProps) => {
  const _id = useId();

  const inputId = id || _id;
  return (
    <div className="relative flex items-start">
      <div className="flex h-6 items-center">
        <input
          id={inputId}
          aria-describedby={helperText ? `${inputId}-description` : undefined}
          name={name || inputId}
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
      </div>
      <div className="ml-3 text-sm leading-6">
        <label htmlFor={inputId} className="font-medium text-gray-900">
          {label}
        </label>
        {helperText && (
          <p id={`${inputId}-description`} className="text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    </div>
  );
};

export default Checkbox;
