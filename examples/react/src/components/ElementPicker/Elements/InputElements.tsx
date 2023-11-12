import { DRAG_AND_DROP_DATA_TYPE, INPUT_ELEMENTS } from '../../../constants.ts';
import ElementPickerElementBase from './common/Base.tsx';

const InputElementsPicker = () => {
  const handleDragStart =
    (element: string) => (e: React.DragEvent<HTMLLIElement>) => {
      e.dataTransfer.setData(
        'text/plain',
        JSON.stringify({ type: DRAG_AND_DROP_DATA_TYPE.input, element }),
      );
    };

  return (
    <ul className="flex flex-col gap-1">
      {Object.values(INPUT_ELEMENTS).map(
        ({ value, icon, label, description }) => (
          <ElementPickerElementBase
            draggable
            onDragStart={handleDragStart(value)}
            key={value}
            icon={icon}
            title={label}
            description={description}
            row
          />
        ),
      )}
    </ul>
  );
};

export default InputElementsPicker;
