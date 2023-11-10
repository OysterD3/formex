import { useState } from 'react';
import { nanoid } from 'nanoid';
import * as classNames from 'classnames';
import {
  DRAG_AND_DROP_DATA_TYPE,
  INPUT_ELEMENTS,
  INPUTS,
} from '../constants.ts';
import { getElementAttribute } from '../utils/dom.ts';
import {
  DragAndDropData,
  EditorActiveItem,
  ElementProps,
  Elements,
  InputElements,
} from '../types';
import { isInputDragAndDropData } from '../types/guard.ts';
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

const InputsComponent = <T extends Elements>({
  element,
  componentProps,
}: {
  element: T;
  componentProps: ElementProps<T>;
}) => {
  switch (element) {
    case INPUTS.text:
      return <TextField {...componentProps} />;
    case INPUTS.textArea:
      return <TextArea {...componentProps} />;
    case INPUTS.number:
      return <TextField {...componentProps} />;
    case INPUTS.select:
      return (
        <Select {...componentProps}>
          <Option value="1">Option 1</Option>
          <Option value="2">Option 2</Option>
        </Select>
      );
    case INPUTS.checkbox:
      return <Checkbox {...componentProps} />;
    case INPUTS.radio:
      return (
        <RadioGroup {...componentProps}>
          <RadioButton label="Option 1" />
          <RadioButton label="Option 2" />
        </RadioGroup>
      );
    case INPUTS.date:
      return <DatePicker {...componentProps} />;
    case INPUTS.time:
      return <TimePicker {...componentProps} />;
    case INPUTS.file:
      return <FileUpload {...componentProps} />;
    case INPUTS.richText:
      return <RichText {...componentProps} />;
    case INPUTS.switch:
      return <Switch {...componentProps} />;
    default:
      return null;
  }
};

const Editor = () => {
  const [items, setItems] = useState<EditorActiveItem[]>([]);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const handleDrop = (e: React.DragEvent<HTMLUListElement>) => {
    e.preventDefault();
    const raw = e.dataTransfer.getData('text/plain');
    if (!raw) return;
    const data: DragAndDropData = JSON.parse(raw);
    setItems((prev) => [
      ...prev.slice(0, dragIndex!),
      {
        id: nanoid(),
        ...data,
      },
      ...prev.slice(dragIndex!),
    ]);
    setDragIndex(null);
  };

  const handleDragOver = (
    e: React.DragEvent<HTMLUListElement>,
    index: number,
  ) => {
    e.preventDefault();
    setDragIndex(index);
  };

  const handleClick = (e: React.MouseEvent<HTMLUListElement>) => {
    const data = getElementAttribute(e, 'data-id');
    if (data) {
    }
  };

  return (
    <>
      <ul
        className="h-full w-full bg-white"
        onDragOver={(e) => handleDragOver(e, items.length)}
        onDrop={handleDrop}
        onDragLeave={() => setDragIndex(null)}
        onClick={handleClick}
      >
        {items.map(({ id, ...item }, index) => (
          <li
            className={classNames(
              'px-4 py-2 text-black cursor-pointer border border-transparent hover:border-blue ease-in-out transition-all duration-200',
              dragIndex === index && 'border-t-red-500',
              dragIndex === index + 1 &&
                index === items.length - 1 &&
                'border-b-red-500',
            )}
            data-id={id}
            key={id}
            onDragOver={(e) => {
              e.stopPropagation();
              handleDragOver(e, index);
            }}
          >
            {isInputDragAndDropData(item) && (
              <InputsComponent
                element={item.element}
                componentProps={
                  INPUT_ELEMENTS[item.element].defaultComponentProps
                }
              />
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Editor;
