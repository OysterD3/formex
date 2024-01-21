import { useDraggable } from '@dnd-kit/core';
import { useId } from 'react';
import { CSS } from '@dnd-kit/utilities';
import { createBEM } from '../../../utils/bem.ts';
import { DragAndDropData, Elements } from '../../../../types';
import { useFormexConfig } from '../../../FormexProvider.tsx';

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
  type,
  element,
}: {
  type: DragAndDropData['type'];
  element: Elements;
}) {
  const id = useId();

  const { setNodeRef, attributes, listeners, transform } = useDraggable({
    id,
    data: {
      type,
      element,
    },
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  const {
    elementPicker: { elementComponents },
  } = useFormexConfig();

  if (!elementComponents) return null;

  const ElementComponent = elementComponents[element];

  return (
    <li ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <ElementComponent />
    </li>
  );
}

export default ElementPickerElementBase;
