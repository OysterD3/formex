import { SwitchProps, EditorComponentProps } from '@formex/builder-react';
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Switch,
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const isBooleanInString = (value: string | number | boolean) => {
  return value === 'true' || value === 'false';
};

const SwitchInput = ({
  label,
  name,
  trueValue,
  falseValue,
}: EditorComponentProps<SwitchProps>) => {
  const { control } = useFormContext();

  return (
    <Controller
      render={({
        field: { onChange, value, ...field },
        fieldState: { error },
      }) => (
        <FormControl error={!!error}>
          <FormControlLabel
            checked={value === trueValue}
            onChange={(_, checked) => {
              if (checked) {
                onChange(
                  isBooleanInString(trueValue) ? Boolean(trueValue) : trueValue,
                );
              } else {
                onChange(
                  isBooleanInString(falseValue)
                    ? Boolean(falseValue)
                    : falseValue,
                );
              }
            }}
            label={label}
            control={<Switch />}
            {...field}
          />
          {error && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
      name={name}
      control={control}
    />
  );
};

export default SwitchInput;
