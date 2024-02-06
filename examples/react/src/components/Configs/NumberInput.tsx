import { InputAttributeConfigurationProps } from '@formex/builder-react';
import { TextField } from '@mui/material';

const NumberInput = ({
  field,
  fieldState: { error },
  formState: _formState,
  ...props
}: InputAttributeConfigurationProps) => {
  return (
    <TextField
      {...field}
      error={!!error}
      helperText={error?.message}
      {...props}
      inputMode="numeric"
      type="number"
    />
  );
};

export default NumberInput;
