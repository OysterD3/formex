import { Controller, useFormContext, useWatch } from 'react-hook-form';
import TextField from '../Inputs/TextField.tsx';
import { FormexFormValues } from '../../types';
import Switch, { SwitchProps } from '../Inputs/Switch.tsx';

const ConfigurationSwitch = () => {
  const { control } = useFormContext<FormexFormValues<SwitchProps>>();
  const [index] = useWatch({
    name: ['activeIndex'],
    control,
  });

  const handleValueChange =
    (onChange: (...event: unknown[]) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value === 'true' || e.target.value === 'false') {
        onChange(Boolean(e.target.value));
      } else if (!isNaN(Number(e.target.value))) {
        onChange(Number(e.target.value));
      } else {
        onChange(e.target.value);
      }
    };

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
        render={({ field: { value, onChange, ref } }) => (
          <TextField
            ref={ref}
            onChange={handleValueChange(onChange)}
            value={value !== undefined ? String(value) : ''}
            label="Default Value"
          />
        )}
        name={`items.${index}.props.defaultValue`}
        control={control}
      />
      <Controller
        render={({ field: { value, onChange, ref } }) => (
          <TextField
            ref={ref}
            onChange={handleValueChange(onChange)}
            value={value !== undefined ? String(value) : 'true'}
            label="True value"
          />
        )}
        name={`items.${index}.props.trueValue`}
        control={control}
      />
      <Controller
        render={({ field: { value, onChange, ref } }) => (
          <TextField
            ref={ref}
            onChange={handleValueChange(onChange)}
            value={value !== undefined ? String(value) : 'true'}
            label="False value"
          />
        )}
        name={`items.${index}.props.falseValue`}
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

export default ConfigurationSwitch;
