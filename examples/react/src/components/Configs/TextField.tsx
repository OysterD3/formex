import { FormControl, TextField as MuiTextField } from '@mui/material';
import { forwardRef } from 'react';
import { InputAttributeConfigurationProps } from '@formex/builder-react';

const TextField = forwardRef<
  HTMLInputElement,
  InputAttributeConfigurationProps
>((props, ref) => {
  return (
    <FormControl fullWidth>
      <MuiTextField {...props} ref={ref} />
    </FormControl>
  );
});

TextField.displayName = 'TextField';

export default TextField;
