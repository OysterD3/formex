import { FormControlLabel, RadioGroup, Radio as MuiRadio } from '@mui/material';
import { forwardRef } from 'react';
import { InputAttributeConfigurationProps } from '@formex/builder-react';

const Radio = forwardRef<HTMLInputElement, InputAttributeConfigurationProps>(
  (props, ref) => {
    return (
      <RadioGroup>
        {(props.options || []).map((option) => (
          <FormControlLabel
            key={option.value}
            ref={ref}
            control={<MuiRadio />}
            label={props.label}
            value={props.value}
            onChange={props.onChange}
          />
        ))}
      </RadioGroup>
    );
  },
);

Radio.displayName = 'Radio';

export default Radio;
