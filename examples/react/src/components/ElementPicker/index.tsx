import { createBEM } from '../../utils/bem.ts';
import InputElements from './Elements/InputElements.tsx';

const bem = createBEM('element-picker');

const ElementPicker = () => {
  return (
    <div className={bem('container')}>
      <InputElements />
    </div>
  );
};

export default ElementPicker;
