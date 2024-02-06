import { FormControlLabel, RadioGroup, Radio as MuiRadio } from '@mui/material';
import { InputAttributeConfigurationProps } from '@formex/builder-react';

const Radio = ({
  field,
  fieldState: _fieldState,
  formState: _formState,
  options,
  ...props
}: InputAttributeConfigurationProps) => {
  return (
    <RadioGroup {...field} {...props}>
      {(options || []).map((option) => (
        <FormControlLabel
          key={option.value}
          control={<MuiRadio />}
          label={option.label}
          value={option.value}
        />
      ))}
    </RadioGroup>
  );
};

Radio.displayName = 'Radio';

export default Radio;
