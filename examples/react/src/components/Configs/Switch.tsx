import { forwardRef } from 'react';
import { FormControlLabel, Switch as MuiSwitch } from '@mui/material';
import { InputAttributeConfigurationProps } from '@formex/builder-react';

const Switch = forwardRef<HTMLButtonElement, InputAttributeConfigurationProps>(
  (props, ref) => {
    return (
      <FormControlLabel
        ref={ref}
        control={<MuiSwitch />}
        label={props.label}
        value={props.value}
        onChange={(_, checked) => {
          if (props.onChange) {
            props.onChange(checked);
          }
        }}
      />
    );
  },
);

Switch.displayName = 'Switch';

export default Switch;
