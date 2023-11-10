import { useState } from 'react';
import { nanoid } from 'nanoid';
import * as classNames from 'classnames';
import { INPUT_ELEMENTS, INPUTS } from '../constants.ts';
import { getElementAttribute } from '../utils/dom.ts';
import { ElementProps, Elements } from '../types';
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
  label,
  value,
  componentProps,
}: {
  label: string;
  value: T;
  componentProps: ElementProps<T>;
}) => {
  switch (value) {
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
      return label;
  }
};

const Editor = () => {
  const [items, setItems] = useState<
    {
      id: string;
      element: string;
    }[]
  >([]);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const handleDrop = (e: React.DragEvent<HTMLUListElement>) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    setItems((prev) => [
      ...prev.slice(0, dragIndex!),
      {
        id: nanoid(),
        element: data,
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
        {items.map((item, index) => (
          <li
            className={classNames(
              'px-4 py-2 text-black cursor-pointer border border-transparent hover:border-blue ease-in-out transition-all duration-200',
              dragIndex === index && 'border-t-red-500',
              dragIndex === index + 1 &&
                index === items.length - 1 &&
                'border-b-red-500',
            )}
            data-id={item.id}
            key={item.id}
            onDragOver={(e) => {
              e.stopPropagation();
              handleDragOver(e, index);
            }}
          >
            <InputsComponent {...INPUT_ELEMENTS[item.element]} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Editor;
