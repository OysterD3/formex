import classNames from 'classnames';
import { createBEM } from '../../utils/bem.ts';

interface InputLabelProps {
  htmlFor?: string;
  className?: string;
  children: React.ReactNode;
}

const bem = createBEM('input');

const InputLabel = ({ htmlFor, className, children }: InputLabelProps) => {
  return (
    <label htmlFor={htmlFor} className={classNames(className, bem('label'))}>
      {children}
    </label>
  );
};

export default InputLabel;
