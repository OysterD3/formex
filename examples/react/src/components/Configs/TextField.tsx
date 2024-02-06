import { TextField as MuiTextField } from '@mui/material';
import { InputAttributeConfigurationProps } from '@formex/builder-react';

const TextField = ({
  field,
  fieldState: { error },
  formState: _,
  ...props
}: InputAttributeConfigurationProps) => {
  return (
    <MuiTextField
      {...field}
      {...props}
      error={!!error}
      helperText={error?.message}
    />
  );
};

export default TextField;
