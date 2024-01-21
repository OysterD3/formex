import { useFormContext, useWatch } from 'react-hook-form';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useDroppable } from '@dnd-kit/core';
import { HTMLAttributes } from 'react';
import { getElementAttribute } from '../utils/dom';
import { FormexFormValues } from '../../types';
import { useFormexFields } from '../FormexProvider';
import DraggableElement from './DraggableElement';

const Editor = ({
  container,
  wrapper,
  dragHandler,
}: {
  container?: React.ForwardRefExoticComponent<HTMLAttributes<HTMLElement>>;
  wrapper?: React.ForwardRefExoticComponent<HTMLAttributes<HTMLElement>>;
  dragHandler?: React.ForwardRefExoticComponent<HTMLAttributes<HTMLElement>>;
}) => {
  const { control, setValue } = useFormContext<FormexFormValues>();
  const { fields = [] } = useFormexFields();
  const { setNodeRef } = useDroppable({
    id: 'formex-editor',
  });
  const [activeIndex] = useWatch({
    control,
    name: ['activeIndex'],
  });

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

  const Container = container || 'ul';

  return (
    <Container ref={setNodeRef} onClick={handleClick}>
      <SortableContext items={fields} strategy={verticalListSortingStrategy}>
        {fields.map(({ id, ...item }, index) => (
          <DraggableElement
            id={id}
            index={index}
            item={item}
            key={id}
            dragHandler={dragHandler}
            wrapper={wrapper}
          />
        ))}
      </SortableContext>
    </Container>
  );
};

export default Editor;
