import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { useMemo } from 'react';
import { FormexFormValues } from '../../types';
import { CheckboxProps } from '../Inputs/Checkbox/Checkbox';
import { useFormexComponents } from '../FormexProvider.tsx';
import { INPUT_GROUPS, INPUTS } from '../constants.ts';

const ConfigurationCheckbox = () => {
  const { control } = useFormContext<FormexFormValues<CheckboxProps>>();
  const [index] = useWatch({
    name: ['activeIndex'],
    control,
  });

  const components = useFormexComponents();

  const { TextField, Switch, RadioGroup, RadioButton } = useMemo(
    () => ({
      TextField: components[INPUTS.text],
      Switch: components[INPUTS.switch],
      RadioGroup: components[INPUT_GROUPS.radio],
      RadioButton: components[INPUTS.radio],
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
          <Switch {...field} value={value || ''} label="Default checked" />
        )}
        name={`items.${index}.props.defaultChecked`}
        control={control}
      />
      <Controller
        render={({ field: { value, ...field } }) => (
          <RadioGroup
            {...field}
            variant="card"
            value={value || 'default'}
            label="Variant"
          >
            <RadioButton label="Default" value="default" />
            <RadioButton label="Card" value="card" />
          </RadioGroup>
        )}
        name={`items.${index}.props.variant`}
        control={control}
      />
      <Controller
        render={({ field }) => <Switch {...field} label="Disabled" />}
        name={`items.${index}.props.disabled`}
        control={control}
      />
    </>
  );
};

export default ConfigurationCheckbox;
