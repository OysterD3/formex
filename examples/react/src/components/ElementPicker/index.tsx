import { createBEM } from '../../utils/bem.ts';
import InputElements from './Elements/InputElements.tsx';
import InputGroupElements from './Elements/InputGroupElements.tsx';

const bem = createBEM('element-picker');

const ElementPicker = () => {
  return (
    <div className={bem('container')}>
      <div className={bem('wrapper')}>
        <h2 className={bem('heading')}>Inputs</h2>
        <div className={bem('element-wrapper')}>
          <InputElements />
        </div>
      </div>
      <div className={bem('wrapper')}>
        <h2 className={bem('heading')}>Input Groups</h2>
        <div className={bem('element-wrapper')}>
          <InputGroupElements />
        </div>
      </div>
    </div>
  );
};

export default ElementPicker;
