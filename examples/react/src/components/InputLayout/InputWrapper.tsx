import { createBEM } from '../../utils/bem.ts';

const bem = createBEM('input');

const InputWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={bem('container')}>{children}</div>;
};

export default InputWrapper;
