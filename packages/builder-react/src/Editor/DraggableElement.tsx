import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { DragAndDropData } from '../../types';
import { useFormexConfig } from '../FormexProvider.tsx';
import EditorElement from './EditorElement.tsx';

const DraggableElement = ({
  index,
  item,
  id,
}: {
  id: string;
  index: number;
  item: DragAndDropData;
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

  const {
    editor: { DragHandler, ElementWrapper },
  } = useFormexConfig();

  const Handler = DragHandler || 'div';
  const Wrapper = ElementWrapper || 'li';

  return (
    <Wrapper ref={setNodeRef} style={style} data-index={index}>
      <Handler ref={setActivatorNodeRef} {...attributes} {...listeners} />
      <EditorElement element={item.element} index={index} />
    </Wrapper>
  );
};

export default DraggableElement;
