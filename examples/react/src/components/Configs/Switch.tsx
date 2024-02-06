import { FormControlLabel, Switch as MuiSwitch } from '@mui/material';
import { InputAttributeConfigurationProps } from '@formex/builder-react';

const Switch = ({
  field,
  fieldState: _fieldState,
  formState: _formState,
  ...props
}: InputAttributeConfigurationProps) => {
  return (
    <FormControlLabel {...field} control={<MuiSwitch />} label={props.label} />
  );
};

export default Switch;
