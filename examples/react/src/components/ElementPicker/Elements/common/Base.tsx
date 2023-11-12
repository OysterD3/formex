import { useDraggable } from '@dnd-kit/core';
import { useId } from 'react';
import { CSS } from '@dnd-kit/utilities';
import { createBEM } from '../../../../utils/bem.ts';
import { DragAndDropData, Elements } from '../../../../types';

const bem = createBEM('element-picker-element');

function ElementPickerElementBase(props: {
  icon: string;
  title: string;
  row?: false;
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent<HTMLLIElement>) => void;
  type: DragAndDropData['type'];
  element: Elements;
}): JSX.Element;

function ElementPickerElementBase(props: {
  icon: string;
  title: string;
  description: string;
  row: true;
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent<HTMLLIElement>) => void;
  type: DragAndDropData['type'];
  element: Elements;
}): JSX.Element;

function ElementPickerElementBase({
  icon,
  title,
  description,
  row = false,
  draggable,
  type,
  element,
}: {
  icon: string;
  title: string;
  description?: string;
  row?: boolean;
  draggable?: boolean;
  type: DragAndDropData['type'];
  element: Elements;
}) {
  const id = useId();

  const { setNodeRef, attributes, listeners, transform } = useDraggable({
    id,
    disabled: !draggable,
    data: {
      type,
      element,
    },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      className={bem('container', { row })}
      {...attributes}
      {...listeners}
    >
      <div className={bem('icon-wrapper')}>
        <div className={`i-ri-${icon} h-6 w-8`}></div>
      </div>
      <div className={bem('label-wrapper')}>
        <div className={bem('title')}>{title}</div>
        {description && <div className={bem('description')}>{description}</div>}
      </div>
    </li>
  );
}

export default ElementPickerElementBase;
