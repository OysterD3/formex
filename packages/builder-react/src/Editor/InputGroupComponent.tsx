import { useFormContext, useWatch } from 'react-hook-form';
import { FormexFormValues, InputGroupElements } from '../../types';
import { INPUT_GROUPS, INPUTS } from '../constants.ts';
import { useFormexComponents } from '../FormexProvider.tsx';

const InputGroupComponent = <T extends InputGroupElements>({
  element,
  index,
}: {
  element: T;
  index: number;
}) => {
  const { control } = useFormContext<FormexFormValues>();
  const [componentProps] = useWatch({
    control,
    name: [`items.${index}.props`],
  });

  const components = useFormexComponents();
  const RadioGroup = components[INPUT_GROUPS.radio];
  const RadioButton = components[INPUTS.radio];
  const Checkbox = components[INPUTS.checkbox];
  const CheckboxGroup = components[INPUT_GROUPS.checkbox];

  switch (element) {
    case INPUT_GROUPS.radio:
      return (
        <RadioGroup {...componentProps}>
          {(componentProps.options as { label: string; value: string }[]).map(
            (option) => (
              <RadioButton
                label={option.label}
                value={option.value}
                key={option.value}
              />
            ),
          )}
        </RadioGroup>
      );
    case INPUT_GROUPS.checkbox:
      return (
        <CheckboxGroup {...componentProps}>
          {(componentProps.options as { label: string; value: string }[]).map(
            (option) => (
              <Checkbox
                label={option.label}
                value={option.value}
                key={option.value}
              />
            ),
          )}
        </CheckboxGroup>
      );
    default:
      return null;
  }
};

export default InputGroupComponent;
