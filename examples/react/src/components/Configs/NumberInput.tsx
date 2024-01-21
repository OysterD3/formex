import { forwardRef } from 'react';
import { InputAttributeConfigurationProps } from '@formex/builder-react';
import { TextField } from '@mui/material';

const NumberInput = forwardRef<
  HTMLInputElement,
  InputAttributeConfigurationProps
>((props, ref) => {
  return <TextField {...props} inputMode="numeric" type="number" ref={ref} />;
});

NumberInput.displayName = 'Number';

export default NumberInput;
