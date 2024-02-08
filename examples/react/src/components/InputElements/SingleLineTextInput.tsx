import {
  SingleLineTextProps,
  EditorComponentProps,
} from '@formex/builder-react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';

const SingleLineTextInput = ({
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
}: EditorComponentProps<SingleLineTextProps>) => {
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
          error={!!error}
          aria-readonly={readOnly}
          required={required}
          helperText={error?.message || description}
          autoFocus={autoFocus}
          InputProps={{
            startAdornment: prefix,
            endAdornment: suffix,
          }}
          {...field}
        />
      )}
      name={name}
      control={control}
    />
  );
};

export default SingleLineTextInput;
