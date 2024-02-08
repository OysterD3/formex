import { FormProvider, useForm } from 'react-hook-form';
import { type Elements, FormexFormValues, INPUTS } from '@formex/builder-react';
import { FormexRenderer } from '@formex/renderer-react';
import SingleLineTextInput from './InputElements/SingleLineTextInput.tsx';
import SwitchInput from './InputElements/SwitchInput.tsx';
import NumberInput from './InputElements/NumberInput.tsx';
import { Box, Stack } from '@mui/material';
import FormValueDisplay from './FormValueDisplay.tsx';
import { useEffect } from 'react';

const getDefaultValues = <TElements extends Elements>(
  items: FormexFormValues<TElements>['items'],
) => {
  return items.reduce(
    (acc, item) => {
      if ('defaultValue' in item.props) {
        acc[item.props.name] = item.props.defaultValue;
      }
      return acc;
    },
    {} as Record<string, unknown>,
  );
};

const FormRenderer = <TElements extends Elements>({
  items,
}: {
  items: FormexFormValues<TElements>['items'];
}) => {
  const form = useForm();

  useEffect(() => {
    form.reset(getDefaultValues(items));
  }, []);

  return (
    <FormProvider {...form}>
      <Stack direction="row" gap={2}>
        <Box sx={{ width: '50%' }}>
          <FormexRenderer
            items={items}
            elementComponents={{
              // @ts-expect-error Couldn't know the exact type of the elementComponents
              [INPUTS.singleLineText]: SingleLineTextInput,
              [INPUTS.switch]: SwitchInput,
              [INPUTS.number]: NumberInput,
            }}
          />
        </Box>
        <FormValueDisplay />
      </Stack>
    </FormProvider>
  );
};

export default FormRenderer;
