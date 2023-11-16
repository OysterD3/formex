import { useFormContext, useWatch } from 'react-hook-form';
import { FormexFormValues, InputElements } from '../../types';
import { INPUTS } from '../../constants.ts';
import TextField from '../Inputs/TextField.tsx';
import TextArea from '../Inputs/TextArea.tsx';
import Select from '../Inputs/Select';
import Option from '../Inputs/Select/Option.tsx';
import Checkbox from '../Inputs/Checkbox/Checkbox.tsx';
import RadioButton from '../Inputs/Radio/RadioButton.tsx';
import DatePicker from '../Inputs/DatePicker';
import TimePicker from '../Inputs/TimePicker.tsx';
import FileUpload from '../Inputs/FileUpload.tsx';
import RichText from '../Inputs/RichText.tsx';
import Switch from '../Inputs/Switch.tsx';

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

  switch (element) {
    case INPUTS.text:
      return <TextField {...componentProps} readOnly />;
    case INPUTS.textArea:
      return <TextArea {...componentProps} readOnly />;
    case INPUTS.number:
      return <TextField {...componentProps} readOnly />;
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
    default:
      return null;
  }
};

export default InputComponent;
