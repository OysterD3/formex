import { createBEM } from '../../utils/bem.ts';

interface InputLabelProps {
  id?: string;
  children: React.ReactNode;
}

const bem = createBEM('input');

const InputLabel = ({ id, children }: InputLabelProps) => {
  return (
    <label htmlFor={id} className={bem('label')}>
      {children}
    </label>
  );
};

export default InputLabel;
