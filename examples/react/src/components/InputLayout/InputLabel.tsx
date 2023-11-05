import { createBEM } from '../../utils/bem.ts';

interface InputLabelProps {
  id: string;
  label: string;
}

const bem = createBEM('input');

const InputLabel = ({ id, label }: InputLabelProps) => {
  return (
    <label htmlFor={id} className={bem('label')}>
      {label}
    </label>
  );
};

export default InputLabel;
