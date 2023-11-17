import { Controller, useFormContext, useWatch } from 'react-hook-form';
import { useMemo } from 'react';
import { FormexFormValues } from '../../types';
import { FileUploadProps } from '../Inputs/FileUpload.tsx';
import { useFormexComponents } from '../FormexProvider.tsx';
import { INPUTS } from '../constants.ts';

const ConfigurationFileUpload = () => {
  const { control } = useFormContext<FormexFormValues<FileUploadProps>>();
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
          <TextField {...field} value={value || ''} label="Helper text" />
        )}
        name={`items.${index}.props.helperText`}
        control={control}
      />
      <Controller
        render={({ field: { value, ...field } }) => (
          <TextField {...field} value={value || '*'} label="Helper text" />
        )}
        name={`items.${index}.props.accept`}
        control={control}
      />
      <Controller
        render={({ field: { value, ...field } }) => (
          <Switch {...field} value={value || false} label="Multiple" />
        )}
        name={`items.${index}.props.multiple`}
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
          <TextField {...field} value={value || ''} label="Upload text" />
        )}
        name={`items.${index}.props.uploadText`}
        control={control}
      />
      <Controller
        render={({ field: { value, ...field } }) => (
          <TextField
            {...field}
            value={value || ''}
            label="Drag and drop text"
          />
        )}
        name={`items.${index}.props.dragAndDropText`}
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

export default ConfigurationFileUpload;
