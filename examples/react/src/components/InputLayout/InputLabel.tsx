import { createBEM } from '../../utils/bem.ts';

interface InputLabelProps {
  htmlFor?: string;
  children: React.ReactNode;
}

const bem = createBEM('input');

const InputLabel = ({ htmlFor, children }: InputLabelProps) => {
  return (
    <label htmlFor={htmlFor} className={bem('label')}>
      {children}
    </label>
  );
};

export default InputLabel;
