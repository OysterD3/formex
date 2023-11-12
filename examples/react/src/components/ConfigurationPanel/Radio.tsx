import { Controller, useFormContext, useWatch } from 'react-hook-form';
import TextField from '../Inputs/TextField.tsx';
import { FormexFormValues } from '../../types';
import Switch from '../Inputs/Switch.tsx';
import RadioGroup from '../Inputs/Radio/RadioGroup.tsx';
import RadioButton, { RadioButtonProps } from '../Inputs/Radio/RadioButton.tsx';

const ConfigurationRadio = () => {
  const { control } = useFormContext<FormexFormValues<RadioButtonProps>>();
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
    </>
  );
};

export default ConfigurationRadio;
