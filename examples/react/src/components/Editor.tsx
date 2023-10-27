import { useState } from 'react';
import { nanoid } from 'nanoid';
import * as classNames from 'classnames';
import { INPUT_ELEMENTS, INPUTS } from '../constants.ts';
import TextField from './Inputs/TextField.tsx';
import TextArea from './Inputs/TextArea.tsx';
import Select from './Inputs/Select.tsx';
import Checkbox from './Inputs/Checkbox.tsx';
import RadioGroup from './Inputs/Radio/RadioGroup.tsx';
import RadioButton from './Inputs/Radio/RadioButton.tsx';

const InputsComponent = ({
  label,
  value,
  componentProps,
}: {
  label: string;
  value: string;
  componentProps?: Record<string, any>;
}) => {
  switch (value) {
    case INPUTS.text:
      return <TextField {...componentProps} />;
    case INPUTS.textArea:
      return <TextArea {...componentProps} />;
    case INPUTS.number:
      return <TextField {...componentProps} />;
    case INPUTS.select:
      return <Select {...componentProps} />;
    case INPUTS.checkbox:
      return <Checkbox {...componentProps} />;
    case INPUTS.radio:
      return (
        <RadioGroup {...componentProps}>
          <RadioButton label="Option 1" />
          <RadioButton label="Option 2" />
        </RadioGroup>
      );
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

  return (
    <ul
      className="h-full w-full bg-white"
      onDragOver={(e) => handleDragOver(e, items.length)}
      onDrop={handleDrop}
      onDragLeave={() => setDragIndex(null)}
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
          key={item.id}
          draggable
          onDragOver={(e) => {
            e.stopPropagation();
            handleDragOver(e, index);
          }}
        >
          <InputsComponent {...INPUT_ELEMENTS[item.element]} />
        </li>
      ))}
    </ul>
  );
};

export default Editor;
