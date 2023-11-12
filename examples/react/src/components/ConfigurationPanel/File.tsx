import { Controller, useFormContext, useWatch } from 'react-hook-form';
import TextField from '../Inputs/TextField.tsx';
import { FormexFormValues } from '../../types';
import { FileUploadProps } from '../Inputs/FileUpload.tsx';
import Switch from '../Inputs/Switch.tsx';

const ConfigurationFileUpload = () => {
  const { control } = useFormContext<FormexFormValues<FileUploadProps>>();
  const [index] = useWatch({
    name: ['activeIndex'],
    control,
  });

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
    </>
  );
};

export default ConfigurationFileUpload;
