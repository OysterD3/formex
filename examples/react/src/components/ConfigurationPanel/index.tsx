import { useFormContext, useWatch } from 'react-hook-form';
import { INPUTS } from '../../constants.ts';
import { DragAndDropData, FormexFormValues } from '../../types';
import { createBEM } from '../../utils/bem.ts';
import ConfigurationTextField from './TextField.tsx';
import ConfigurationTextArea from './TextArea.tsx';
import ConfigurationTimePicker from './TimePicker.tsx';
import ConfigurationCheckbox from './Checkbox.tsx';
import ConfigurationSwitch from './Switch.tsx';
import ConfigurationRadio from './Radio.tsx';
import ConfigurationSelect from './Select.tsx';
import ConfigurationDatePicker from './DatePicker.tsx';
import ConfigurationFileUpload from './File.tsx';
import ConfigurationRichText from './RichText.tsx';

const bem = createBEM('configuration-panel');

const InputConfigurationPanel = ({
  item,
  isSelected,
}: {
  item: DragAndDropData;
  isSelected: boolean;
}) => {
  if (!isSelected) return null;

  switch (item.element) {
    case INPUTS.text:
    case INPUTS.number:
      return <ConfigurationTextField />;
    case INPUTS.textArea:
      return <ConfigurationTextArea />;
    case INPUTS.time:
      return <ConfigurationTimePicker />;
    case INPUTS.checkbox:
      return <ConfigurationCheckbox />;
    case INPUTS.switch:
      return <ConfigurationSwitch />;
    case INPUTS.radio:
      return <ConfigurationRadio />;
    case INPUTS.select:
      return <ConfigurationSelect />;
    case INPUTS.date:
      return <ConfigurationDatePicker />;
    case INPUTS.file:
      return <ConfigurationFileUpload />;
    case INPUTS.richText:
      return <ConfigurationRichText />;
    default:
      return null;
  }
};

const ConfigurationPanel = () => {
  const { control } = useFormContext<FormexFormValues>();
  const [activeIndex, items] = useWatch({
    name: ['activeIndex', 'items'],
    control,
  });

  return (
    <div className={bem('container')}>
      {items.map((item, index) => (
        <InputConfigurationPanel
          key={index}
          item={item}
          isSelected={activeIndex === index}
        />
      ))}
    </div>
  );
};

export default ConfigurationPanel;
