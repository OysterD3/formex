import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { HTMLAttributes } from 'react';
import type { DragAndDropData } from '@formex/core';
import EditorElement from './EditorElement';

const DraggableElement = ({
  index,
  item,
  id,
  dragHandler,
  wrapper,
}: {
  id: string;
  index: number;
  item: DragAndDropData;
  dragHandler:
    | React.ForwardRefExoticComponent<HTMLAttributes<HTMLElement>>
    | undefined;
  wrapper:
    | React.ForwardRefExoticComponent<HTMLAttributes<HTMLElement>>
    | undefined;
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    setActivatorNodeRef,
  } = useSortable({ id });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  const Handler = dragHandler || 'div';
  const Wrapper = wrapper || 'li';

  return (
    <Wrapper ref={setNodeRef} style={style} data-index={index}>
      <Handler ref={setActivatorNodeRef} {...attributes} {...listeners} />
      <EditorElement element={item.element} index={index} />
    </Wrapper>
  );
};

export default DraggableElement;
