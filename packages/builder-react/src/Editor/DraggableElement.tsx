import { useFormContext, useWatch } from 'react-hook-form';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  isInputDragAndDropData,
  isInputGroupDragAndDropData,
} from '../../types/guard.ts';
import { createBEM } from '../utils/bem.ts';
import { DragAndDropData, FormexFormValues } from '../../types';
import InputComponent from './InputComponent.tsx';
import InputGroupComponent from './InputGroupComponent.tsx';

const bem = createBEM('editor');

const DraggableElement = ({
  index,
  item,
  id,
}: {
  id: string;
  index: number;
  item: DragAndDropData;
}) => {
  const { control } = useFormContext<FormexFormValues>();
  const [activeIndex] = useWatch({
    control,
    name: ['activeIndex'],
  });
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    setActivatorNodeRef,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  return (
    <li
      className={bem('element', {
        active: activeIndex === index,
        dragging: isDragging,
      })}
      ref={setNodeRef}
      style={style}
      data-index={index}
    >
      <div
        ref={setActivatorNodeRef}
        className={bem('drag-handle')}
        {...attributes}
        {...listeners}
      />
      <div className={bem('element-wrapper')}>
        {isInputDragAndDropData(item) && (
          <InputComponent element={item.element} index={index} />
        )}
        {isInputGroupDragAndDropData(item) && (
          <InputGroupComponent element={item.element} index={index} />
        )}
      </div>
    </li>
  );
};

export default DraggableElement;
