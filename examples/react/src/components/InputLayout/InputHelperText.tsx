import { createBEM } from '../../utils/bem.ts';

interface InputHelperTextProps {
  children: React.ReactNode;
}

const bem = createBEM('input');

const InputHelperText = ({ children }: InputHelperTextProps) => {
  return <p className={bem('helper-text')}>{children}</p>;
};

export default InputHelperText;
