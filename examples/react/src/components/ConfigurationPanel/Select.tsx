import {
  Controller,
  useFieldArray,
  useFormContext,
  useWatch,
} from 'react-hook-form';
import TextField from '../Inputs/TextField.tsx';
import { FormexFormValues } from '../../types';
import { SelectProps } from '../Inputs/Select';
import Button from '../StaticElements/Button.tsx';
import IconButton from '../StaticElements/IconButton.tsx';

const ConfigurationSelect = () => {
  const { control } =
    useFormContext<
      FormexFormValues<
        SelectProps<unknown> & { options: { label: string; value: string }[] }
      >
    >();
  const [index] = useWatch({
    name: ['activeIndex'],
    control,
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: `items.${index}.props.options`,
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
      <div className="flex flex-col gap-y-2">
        {fields.map((field, i) => (
          <div className="flex gap-x-1.5 items-center" key={field.id}>
            <Controller
              render={({ field: { value, ...field } }) => (
                <TextField {...field} value={value || ''} placeholder="Label" />
              )}
              name={`items.${index}.props.options.${i}.label`}
              control={control}
            />
            <Controller
              render={({ field: { value, ...field } }) => (
                <TextField {...field} value={value || ''} placeholder="Value" />
              )}
              name={`items.${index}.props.options.${i}.value`}
              control={control}
            />
            <IconButton onClick={() => remove(i)}>
              <div className="i-ri-delete-bin-2-line w-full h-full"></div>
            </IconButton>
          </div>
        ))}
        <Button onClick={() => append({ label: '', value: '' })}>
          Add Option
        </Button>
      </div>
    </>
  );
};

export default ConfigurationSelect;
