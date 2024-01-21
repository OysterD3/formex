import { useFormexConfig } from '../FormexProvider.tsx';
import { Elements, InputElements, InputGroupElements } from '../../types';
import { DRAG_AND_DROP_DATA_TYPE, INPUT_GROUPS, INPUTS } from '../constants.ts';
import ElementPickerElement from './ElementPickerElement.tsx';

const getType = (element: Elements) => {
  if (Object.values(INPUTS).includes(element as InputElements))
    return DRAG_AND_DROP_DATA_TYPE.input;
  if (Object.values(INPUT_GROUPS).includes(element as InputGroupElements))
    return DRAG_AND_DROP_DATA_TYPE.group;
  return null;
};

const ElementPicker = () => {
  const {
    elementPicker: { config, ElementContainer },
  } = useFormexConfig();

  const Container = ElementContainer || 'ul';

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
                  <ElementPickerElement key={el} type={type} element={el} />
                );
              })}
            </Wrapper>
          );
        }
        const type = getType(v);
        if (!type) return <div>Check {type}</div>;

        return <ElementPickerElement key={v} type={type} element={v} />;
      })}
    </Container>
  );
};

export default ElementPicker;
