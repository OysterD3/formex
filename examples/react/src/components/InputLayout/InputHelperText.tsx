import { createBEM } from '../../utils/bem.ts';

interface InputHelperTextProps {
  helperText: string;
}

const bem = createBEM('input');

const InputHelperText = ({ helperText }: InputHelperTextProps) => {
  return <p className={bem('helper-text')}>{helperText}</p>;
};

export default InputHelperText;
