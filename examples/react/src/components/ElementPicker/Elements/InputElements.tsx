import { DRAG_AND_DROP_DATA_TYPE, INPUT_ELEMENTS } from '../../../constants.ts';
import { createBEM } from '../../../utils/bem.ts';
import ElementPickerElementBase from './common/Base.tsx';

const bem = createBEM('element-picker-input');

const InputElementsPicker = () => {
  return (
    <ul className={bem('container')}>
      {Object.values(INPUT_ELEMENTS).map(
        ({ value, icon, label, description }) => (
          <ElementPickerElementBase
            draggable
            key={value}
            icon={icon}
            title={label}
            description={description}
            row
            type={DRAG_AND_DROP_DATA_TYPE.input}
            element={value}
          />
        ),
      )}
    </ul>
  );
};

export default InputElementsPicker;
