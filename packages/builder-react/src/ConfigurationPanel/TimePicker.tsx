import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { useMemo } from 'react';
import { FormexFormValues } from '../../types';
import { TimePickerProps } from '../Inputs/TimePicker.tsx';
import { useFormexComponents } from '../FormexProvider.tsx';
import { INPUTS, MISCELLANEOUS } from '../constants.ts';

const ConfigurationTimePicker = () => {
  const { control } = useFormContext<FormexFormValues<TimePickerProps>>();
  const [index] = useWatch({
    name: ['activeIndex'],
    control,
  });

  const components = useFormexComponents();
  const { TextField, Switch, Select, Option } = useMemo(
    () => ({
      TextField: components[INPUTS.text],
      Switch: components[INPUTS.switch],
      Select: components[INPUTS.select],
      Option: components[MISCELLANEOUS.selectOption],
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
            value={value ? String(value) : '15'}
            displayValue={(val) => {
              switch (val) {
                case '1':
                  return '1 minute';
                case '15':
                  return '15 minutes';
                case '30':
                  return '30 minutes';
                default:
                  return null;
              }
            }}
            label="Interval"
          >
            <Option value="1">1 minute</Option>
            <Option value="15">15 minutes</Option>
            <Option value="30">30 minutes</Option>
          </Select>
        )}
        name={`items.${index}.props.interval`}
        control={control}
      />
      <Controller
        render={({ field: { value, ...field } }) => (
          <Select
            {...field}
            value={value}
            displayValue={(val) => {
              switch (val) {
                case 'HH:mm':
                  return '00:00';
                case 'hh:mm a':
                  return '12:00 am';
                case 'hh:mm A':
                  return '12:00 AM';
                default:
                  return null;
              }
            }}
            label="Interval"
          >
            <Option value="HH:mm">00:00</Option>
            <Option value="hh:mm a">12:00 am</Option>
            <Option value="hh:mm A">12:00 AM</Option>
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

export default ConfigurationTimePicker;
