import { useFormContext, useWatch } from 'react-hook-form';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useDroppable } from '@dnd-kit/core';
import { getElementAttribute } from '../utils/dom';
import { FormexFormValues } from '../../types';
import { useFormexConfig, useFormexFields } from '../FormexProvider';
import DraggableElement from './DraggableElement';

const Editor = () => {
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

  const {
    editor: { ElementContainer },
  } = useFormexConfig();

  const Container = ElementContainer || 'ul';

  return (
    <Container ref={setNodeRef} onClick={handleClick}>
      <SortableContext items={fields} strategy={verticalListSortingStrategy}>
        {fields.map(({ id, ...item }, index) => (
          <DraggableElement id={id} index={index} item={item} key={id} />
        ))}
      </SortableContext>
    </Container>
  );
};

export default Editor;
