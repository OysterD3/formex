import { INPUT_ELEMENTS } from '../../constants';

const ElementsPicker = () => {
  const handleDragStart =
    (value: string) => (e: React.DragEvent<HTMLLIElement>) => {
      e.dataTransfer.setData('text/plain', value);
    };

  return (
    <div>
      <h3>Elements</h3>
      <ul className="flex flex-col gap-1">
        {Object.keys(INPUT_ELEMENTS).map((element) => (
          <li
            className="px-4 py-2 text-white cursor-pointer rounded-md hover:shadow-md ease-in-out transition-all duration-200"
            key={element}
            draggable
            onDragStart={handleDragStart(element)}
          >
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ElementsPicker;
