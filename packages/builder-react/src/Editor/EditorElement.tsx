import { useFormContext, useWatch } from 'react-hook-form';
import { DragAndDropData, Elements, FormexFormValues } from '../../types';
import { useFormexConfig } from '../FormexProvider.tsx';

const EditorElement = <TElement extends Elements>({
  element,
  index,
}: {
  element: TElement;
  index: number;
}) => {
  const { control } = useFormContext<FormexFormValues<TElement>>();
  const [items]: [DragAndDropData<TElement>[]] = useWatch({
    control,
    name: [`items`],
  });

  const {
    editor: { elementComponents },
  } = useFormexConfig();

  if (!elementComponents || !items[index]) return null;

  const componentProps = items[index].props;

  const ElementComponent = () => elementComponents[element](componentProps);

  return <ElementComponent />;
};

export default EditorElement;
