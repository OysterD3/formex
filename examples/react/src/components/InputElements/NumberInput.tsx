import { NumberProps, EditorComponentProps } from '@formex/builder-react';
import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const NumberInput = ({
  label,
  defaultValue,
  description,
  placeholder,
  id,
  required,
  autoFocus,
  name,
  readOnly,
  suffix,
  prefix,
}: EditorComponentProps<NumberProps>) => {
  const { control } = useFormContext();

  return (
    <Controller
      render={({ field, fieldState: { error } }) => (
        <TextField
          fullWidth
          label={label}
          defaultValue={defaultValue}
          inputProps={{
            id,
            name,
          }}
          placeholder={placeholder}
          disabled
          aria-readonly={readOnly}
          required={required}
          error={!!error}
          helperText={error?.message || description}
          autoFocus={autoFocus}
          InputProps={{
            startAdornment: prefix,
            endAdornment: suffix,
          }}
          inputMode="numeric"
          type="number"
          {...field}
        />
      )}
      name={name}
      control={control}
    />
  );
};

export default NumberInput;
