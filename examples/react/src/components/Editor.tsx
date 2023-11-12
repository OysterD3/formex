import { useState } from 'react';
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form';
import { INPUT_ELEMENTS, INPUT_GROUP_ELEMENTS, INPUTS } from '../constants.ts';
import { getElementAttribute } from '../utils/dom.ts';
import { DragAndDropData, Elements, FormexFormValues } from '../types';
import {
  isInputDragAndDropData,
  isInputGroupDragAndDropData,
} from '../types/guard.ts';
import { createBEM } from '../utils/bem.ts';
import TextField from './Inputs/TextField.tsx';
import TextArea from './Inputs/TextArea.tsx';
import Select from './Inputs/Select';
import Checkbox from './Inputs/Checkbox/Checkbox.tsx';
import RadioGroup from './Inputs/Radio/RadioGroup.tsx';
import RadioButton from './Inputs/Radio/RadioButton.tsx';
import DatePicker from './Inputs/DatePicker';
import TimePicker from './Inputs/TimePicker.tsx';
import FileUpload from './Inputs/FileUpload.tsx';
import RichText from './Inputs/RichText.tsx';
import Switch from './Inputs/Switch.tsx';
import Option from './Inputs/Select/Option.tsx';

const bem = createBEM('editor');

const InputsComponent = <T extends Elements>({
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
      return <Checkbox {...componentProps} readOnly />;
    case INPUTS.radio:
      return <RadioButton {...componentProps} readOnly />;
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

const Editor = () => {
  const { control, setValue } = useFormContext<FormexFormValues>();
  const { fields, insert } = useFieldArray({
    control,
    name: 'items',
  });
  const [activeIndex] = useWatch({
    control,
    name: ['activeIndex'],
  });
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const handleDrop = (e: React.DragEvent<HTMLUListElement>) => {
    e.preventDefault();
    const raw = e.dataTransfer.getData('text/plain');
    if (!raw || dragIndex === null) return;
    const data: DragAndDropData = JSON.parse(raw);
    if (isInputDragAndDropData(data)) {
      if (data.element === INPUTS.select) {
        insert(dragIndex, {
          ...data,
          props: {
            ...INPUT_ELEMENTS[data.element].defaultComponentProps,
            options: [{ label: 'Option 1', value: 'option-1' }],
          },
        });
      } else {
        insert(dragIndex, {
          ...data,
          props: INPUT_ELEMENTS[data.element].defaultComponentProps,
        });
      }
    } else if (isInputGroupDragAndDropData(data)) {
      insert(dragIndex, {
        ...data,
        props: INPUT_GROUP_ELEMENTS[data.element].defaultComponentProps,
      });
    }
    setDragIndex(null);
  };

  const handleDragOver = (
    e: React.DragEvent<HTMLUListElement | HTMLLIElement>,
    index: number,
  ) => {
    e.preventDefault();
    setDragIndex(index);
  };

  const handleClick = (e: React.MouseEvent<HTMLUListElement>) => {
    const data = getElementAttribute(e, 'data-index');
    if (data && !isNaN(parseInt(data))) {
      const index = parseInt(data);
      if (activeIndex === index) {
        setValue('activeIndex', -1);
        return;
      }
      setValue('activeIndex', index);
    }
  };

  return (
    <ul
      className={bem('container')}
      onDragOver={(e) => handleDragOver(e, fields.length)}
      onDrop={handleDrop}
      onDragLeave={() => setDragIndex(null)}
      onClick={handleClick}
    >
      {fields.map(({ id, ...item }, index) => (
        <li
          className={bem('element', {
            active: activeIndex === index,
            'drag-top': dragIndex === index,
            'drag-bottom':
              dragIndex === index + 1 && index === fields.length - 1,
          })}
          data-index={index}
          key={id}
          onDragOver={(e) => {
            e.stopPropagation();
            handleDragOver(e, index);
          }}
        >
          {isInputDragAndDropData(item) && (
            <InputsComponent element={item.element} index={index} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default Editor;
