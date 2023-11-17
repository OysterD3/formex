import { useFormContext, useWatch } from 'react-hook-form';
import { FormexFormValues, InputGroupElements } from '../../types';
import { INPUT_GROUPS } from '../constants.ts';
import Checkbox from '../Inputs/Checkbox/Checkbox.tsx';
import RadioButton from '../Inputs/Radio/RadioButton.tsx';
import RadioGroup from '../Inputs/Radio/RadioGroup.tsx';
import CheckboxGroup from '../Inputs/Checkbox/CheckboxGroup.tsx';

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
