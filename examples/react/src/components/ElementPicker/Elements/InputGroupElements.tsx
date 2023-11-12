import {
  DRAG_AND_DROP_DATA_TYPE,
  INPUT_GROUP_ELEMENTS,
} from '../../../constants.ts';
import { createBEM } from '../../../utils/bem.ts';
import ElementPickerElementBase from './common/Base.tsx';

const bem = createBEM('element-picker-group');

const InputElementsPicker = () => {
  return (
    <ul className={bem('container')}>
      {Object.values(INPUT_GROUP_ELEMENTS).map(
        ({ value, icon, label, description }) => (
          <ElementPickerElementBase
            draggable
            key={value}
            icon={icon}
            title={label}
            description={description}
            row
            type={DRAG_AND_DROP_DATA_TYPE.group}
            element={value}
          />
        ),
      )}
    </ul>
  );
};

export default InputElementsPicker;
