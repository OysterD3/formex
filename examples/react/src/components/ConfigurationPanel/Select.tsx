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
import Switch from '../Inputs/Switch.tsx';
import { createBEM } from '../../utils/bem.ts';

const bem = createBEM('configuration-panel-select');

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
      <fieldset className={bem('option-container')}>
        <legend className="formex-input__label">Options</legend>
        {fields.map((field, i) => (
          <div key={field.id} className={bem('option-wrapper')}>
            <Controller
              render={({ field: { value, ...field } }) => (
                <TextField
                  {...field}
                  value={value || ''}
                  label=""
                  placeholder="Label"
                />
              )}
              name={`items.${index}.props.options.${i}.label`}
              control={control}
            />
            <Controller
              render={({ field: { value, ...field } }) => (
                <TextField
                  {...field}
                  value={value || ''}
                  label=""
                  placeholder="Value"
                />
              )}
              name={`items.${index}.props.options.${i}.value`}
              control={control}
            />
            {fields.length > 1 && (
              <IconButton color="danger" onClick={() => remove(i)}>
                <div className="i-ri-delete-bin-2-line w-full h-full"></div>
              </IconButton>
            )}
          </div>
        ))}
        <Button onClick={() => append({ label: '', value: '' })}>
          Add Option
        </Button>
      </fieldset>
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

export default ConfigurationSelect;
