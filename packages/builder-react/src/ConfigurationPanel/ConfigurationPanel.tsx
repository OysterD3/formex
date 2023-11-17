import { useFormContext, useWatch } from 'react-hook-form';
import React from 'react';
import { INPUT_GROUPS, INPUTS } from '../constants';
import { DragAndDropData, FormexFormValues } from '../../types';
import { createBEM } from '../utils/bem';
import {
  isInputDragAndDropData,
  isInputGroupDragAndDropData,
} from '../../types/guard';
import IconButton from '../StaticElements/IconButton';
import { getElementAttribute } from '../utils/dom';
import { useFormexFields } from '../FormexProvider';
import ConfigurationTextField from './TextField';
import ConfigurationTextArea from './TextArea';
import ConfigurationTimePicker from './TimePicker';
import ConfigurationCheckbox from './Checkbox';
import ConfigurationSwitch from './Switch';
import ConfigurationRadio from './Radio';
import ConfigurationSelect from './Select';
import ConfigurationDatePicker from './DatePicker';
import ConfigurationFileUpload from './File';
import ConfigurationRichText from './RichText';
import ConfigurationRadioGroup from './RadioGroup';
import ConfigurationCheckboxGroup from './CheckboxGroup';

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

const InputGroupConfigurationPanel = ({
  item,
  isSelected,
}: {
  item: DragAndDropData;
  isSelected: boolean;
}) => {
  if (!isSelected) return null;

  switch (item.element) {
    case INPUT_GROUPS.radio:
      return <ConfigurationRadioGroup />;
    case INPUT_GROUPS.checkbox:
      return <ConfigurationCheckboxGroup />;
    default:
      return null;
  }
};

const ConfigurationPanel = ({
  onRemove,
}: {
  onRemove?: (index: number) => void;
}) => {
  const { control } = useFormContext<FormexFormValues>();
  const [activeIndex] = useWatch({
    name: ['activeIndex'],
    control,
  });
  const { remove, fields } = useFormexFields();

  const handleDelete = (e: React.MouseEvent<HTMLDivElement>) => {
    const data = getElementAttribute(e, 'data-delete-index');
    if (data !== null) {
      remove(parseInt(data));
      onRemove?.(parseInt(data));
    }
  };

  return (
    <div className={bem('container')} onClick={handleDelete}>
      {fields.map((item, index) => {
        if (activeIndex !== index) return null;

        return (
          <React.Fragment key={index}>
            <div className={bem('heading-wrapper')}>
              <h2 className={bem('heading')}>Configuration Panel</h2>
              <IconButton color="danger" data-delete-index={index}>
                <div className="i-ri-delete-bin-2-line w-full h-full" />
              </IconButton>
            </div>
            {isInputDragAndDropData(item) && (
              <InputConfigurationPanel
                item={item}
                isSelected={activeIndex === index}
              />
            )}
            {isInputGroupDragAndDropData(item) && (
              <InputGroupConfigurationPanel
                item={item}
                isSelected={activeIndex === index}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ConfigurationPanel;
