import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { useMemo } from 'react';
import { FormexFormValues } from '../../types';
import { DatePickerProps } from '../Inputs/DatePicker';
import { useFormexComponents } from '../FormexProvider.tsx';
import { INPUTS, MISCELLANEOUS } from '../constants.ts';

const ConfigurationDatePicker = () => {
  const { control } = useFormContext<FormexFormValues<DatePickerProps>>();
  const [index] = useWatch({
    name: ['activeIndex'],
    control,
  });

  const components = useFormexComponents();
  const { TextField, Select, Option, Switch } = useMemo(
    () => ({
      TextField: components[INPUTS.text],
      Select: components[INPUTS.select],
      Option: components[MISCELLANEOUS.selectOption],
      Switch: components[INPUTS.switch],
    }),
    [components],
  );

  return (
    <>
      <Controller
        render={({ field: { value, ...field } }) => (
          <TextField {...field} value={value || ''} label="Label" />
        )}
        name={`items.${index}.props.label`}
        control={control}
      />
      <Controller
        render={({ field: { value, ...field } }) => (
          <TextField {...field} value={value || ''} label="Placeholder" />
        )}
        name={`items.${index}.props.placeholder`}
        control={control}
      />
      <Controller
        render={({ field: { value, ...field } }) => (
          <TextField {...field} value={value || ''} label="Helper text" />
        )}
        name={`items.${index}.props.helperText`}
        control={control}
      />
      <Controller
        render={({ field: { value, ...field } }) => (
          <TextField {...field} value={value || ''} label="Name" />
        )}
        name={`items.${index}.props.name`}
        control={control}
      />
      <Controller
        render={({ field: { value, ...field } }) => (
          <TextField {...field} value={value || ''} label="ID" />
        )}
        name={`items.${index}.props.id`}
        control={control}
      />
      <Controller
        render={({ field: { value, ...field } }) => (
          <TextField {...field} value={value || ''} label="Default Value" />
        )}
        name={`items.${index}.props.defaultValue`}
        control={control}
      />
      <Controller
        render={({ field: { value, ...field } }) => (
          <Select
            {...field}
            value={value}
            displayValue={(val) => {
              switch (val) {
                case 'YYYY-MM-DD':
                  return '2020-01-31';
                case 'DD MMMM YYYY':
                  return '31 January 2020';
                case 'MMMM DD, YYYY':
                  return 'January 31, 2020';
                default:
                  return null;
              }
            }}
            label="Interval"
          >
            <Option value="YYYY-MM-DD">2020-01-31</Option>
            <Option value="DD MMMM YYYY">31 January 2020</Option>
            <Option value="MMMM DD, YYYY">January 31, 2020</Option>
          </Select>
        )}
        name={`items.${index}.props.format`}
        control={control}
      />
      <Controller
        render={({ field }) => <Switch {...field} label="Disabled" />}
        name={`items.${index}.props.disabled`}
        control={control}
      />
      <Controller
        render={({ field }) => <Switch {...field} label="Readonly" />}
        name={`items.${index}.props.readOnly`}
        control={control}
      />
    </>
  );
};

export default ConfigurationDatePicker;