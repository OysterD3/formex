import type {
  EditorComponentProps,
  ElementProps,
  Elements,
  FormexFormValues,
} from '@formex/core';
import ElementComponent from './ElementComponent';

export const FormexRenderer = <TElements extends Elements>({
  items,
  elementComponents,
}: {
  items: FormexFormValues<TElements>['items'];
  elementComponents: {
    [key in TElements]: (
      props: EditorComponentProps<ElementProps<key>>,
    ) => React.ReactNode;
  };
}) => {
  return (
    <>
      {items.map((item) => (
        <ElementComponent<TElements>
          key={item.nanoId}
          element={item.element as TElements}
          props={item.props}
          componentMap={elementComponents}
        />
      ))}
    </>
  );
};
