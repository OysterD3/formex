import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { useMemo } from 'react';
import { FormexFormValues } from '../../types';
import { TextAreaProps } from '../Inputs/TextArea.tsx';
import { useFormexComponents } from '../FormexProvider.tsx';
import { INPUTS } from '../constants.ts';

const ConfigurationTextArea = () => {
  const { control } = useFormContext<FormexFormValues<TextAreaProps>>();
  const [index] = useWatch({
    name: ['activeIndex'],
    control,
  });

  const components = useFormexComponents();
  const { TextField, Switch } = useMemo(
    () => ({
      TextField: components[INPUTS.text],
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

export default ConfigurationTextArea;