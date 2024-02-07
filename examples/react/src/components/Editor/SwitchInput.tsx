import { SwitchProps, EditorComponentProps } from '@formex/builder-react';
import { FormControlLabel, Switch } from '@mui/material';

const SwitchInput = ({ label }: EditorComponentProps<SwitchProps>) => {
  return <FormControlLabel label={label} control={<Switch />} />;
};

export default SwitchInput;
