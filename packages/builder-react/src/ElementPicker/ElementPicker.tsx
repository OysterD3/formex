import type { HTMLAttributes } from 'react';
import { useFormexConfig } from '../FormexProvider.tsx';
import type { Elements, InputElements, InputGroupElements } from '@formex/core';
import { DRAG_AND_DROP_DATA_TYPE, INPUT_GROUPS, INPUTS } from '@formex/core';
import ElementPickerElement from './ElementPickerElement.tsx';

const getType = (element: Elements) => {
  if (Object.values(INPUTS).includes(element as InputElements))
    return DRAG_AND_DROP_DATA_TYPE.input;
  if (Object.values(INPUT_GROUPS).includes(element as InputGroupElements))
    return DRAG_AND_DROP_DATA_TYPE.group;
  return null;
};

const ElementPicker = ({
  container,
  wrapper,
}: {
  container?: React.ForwardRefExoticComponent<HTMLAttributes<HTMLElement>>;
  wrapper?: React.ForwardRefExoticComponent<HTMLAttributes<HTMLElement>>;
}) => {
  const {
    elementPicker: { config },
  } = useFormexConfig();
  const Container = container || 'ul';

  return (
    <Container>
      {config.map((v, idx) => {
        if (typeof v === 'object' && 'wrapper' in v) {
          const Wrapper = v.wrapper;
          return (
            <Wrapper key={idx}>
              {v.elements.map((el) => {
                const type = getType(el);
                if (!type) return null;
                return (
                  <ElementPickerElement
                    key={el}
                    type={type}
                    element={el}
                    wrapper={wrapper}
                  />
                );
              })}
            </Wrapper>
          );
        }
        const type = getType(v);
        if (!type) return <div>Check {type}</div>;

        return (
          <ElementPickerElement
            key={v}
            type={type}
            element={v}
            wrapper={wrapper}
          />
        );
      })}
    </Container>
  );
};

export default ElementPicker;
