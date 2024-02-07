import type {
  EditorComponentProps,
  ElementProps,
  Elements,
} from '@formex/core';

const ElementComponent = <TElements extends Elements>({
  element,
  props,
  componentMap,
}: {
  element: TElements;
  props: EditorComponentProps<ElementProps<TElements>>;
  componentMap: {
    [key in TElements]: (
      props: EditorComponentProps<ElementProps<TElements>>,
    ) => React.ReactNode;
  };
}) => {
  if (!componentMap[element]) return null;
  const Component = () => componentMap[element](props);

  return <Component />;
};

export default ElementComponent;
