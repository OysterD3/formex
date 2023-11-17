import {
  Controller,
  useFieldArray,
  useFormContext,
  useWatch,
} from 'react-hook-form';
import { useMemo } from 'react';
import { FormexFormValues } from '../../types';
import { RadioGroupProps } from '../Inputs/Radio/RadioGroup.tsx';
import IconButton from '../StaticElements/IconButton.tsx';
import Button from '../StaticElements/Button.tsx';
import { useFormexComponents } from '../FormexProvider.tsx';
import { INPUT_GROUPS, INPUTS } from '../constants.ts';

const ConfigurationRadioGroup = () => {
  const { control } =
    useFormContext<
      FormexFormValues<
        RadioGroupProps & { options: { label: string; value: string }[] }
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

export default ConfigurationRadioGroup;
