import { useDraggable } from '@dnd-kit/core';
import { type HTMLAttributes, useId } from 'react';
import { CSS } from '@dnd-kit/utilities';
import { useFormexConfig } from '../FormexProvider';
import type { Elements, DragAndDropData } from '@formex/core';

function ElementPickerElement({
  type,
  element,
  wrapper,
}: {
  type: DragAndDropData['type'];
  element: Elements;
  wrapper:
    | React.ForwardRefExoticComponent<HTMLAttributes<HTMLElement>>
    | undefined;
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
  const Wrapper = wrapper || 'li';

  return (
    <Wrapper ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <ElementComponent />
    </Wrapper>
  );
}

export default ElementPickerElement;
