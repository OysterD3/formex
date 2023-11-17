import { useFormContext, useWatch } from 'react-hook-form';
import React, { useMemo } from 'react';
import { FormexFormValues, InputElements } from '../../types';
import { INPUTS, MISCELLANEOUS } from '../constants.ts';
import { useFormexComponents } from '../FormexProvider.tsx';

const InputComponent = <T extends InputElements>({
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
  const {
    TextField,
    TextArea,
    Checkbox,
    RadioButton,
    DatePicker,
    TimePicker,
    FileUpload,
    RichText,
    Switch,
    Select,
    Option,
  } = useMemo(
    () => ({
      TextField: components[INPUTS.text],
      TextArea: components[INPUTS.textArea],
      Checkbox: components[INPUTS.checkbox],
      RadioButton: components[INPUTS.radio],
      DatePicker: components[INPUTS.date],
      TimePicker: components[INPUTS.time],
      FileUpload: components[INPUTS.file],
      RichText: components[INPUTS.richText],
      Switch: components[INPUTS.switch],
      Select: components[INPUTS.select],
      Option: components[MISCELLANEOUS.selectOption],
    }),
    [components],
  );

  switch (element) {
    case INPUTS.text:
      return <TextField {...componentProps} readOnly />;
    case INPUTS.textArea:
      return <TextArea {...componentProps} readOnly />;
    case INPUTS.number:
      return <TextField {...componentProps} readOnly />;
    case INPUTS.checkbox:
      return <Checkbox {...componentProps} />;
    case INPUTS.radio:
      return <RadioButton {...componentProps} />;
    case INPUTS.date:
      return <DatePicker {...componentProps} readOnly />;
    case INPUTS.time:
      return <TimePicker {...componentProps} readOnly />;
    case INPUTS.file:
      return <FileUpload {...componentProps} readOnly />;
    case INPUTS.richText:
      return <RichText {...componentProps} readOnly />;
    case INPUTS.switch:
      return <Switch {...componentProps} readOnly />;
    case INPUTS.select:
      return (
        <Select {...componentProps} readOnly>
          {(componentProps.options as { label: string; value: string }[]).map(
            (option) => (
              <Option value={option.value} key={option.value}>
                {option.label}
              </Option>
            ),
          )}
        </Select>
      );
    default:
      return null;
  }
};

export default InputComponent;
