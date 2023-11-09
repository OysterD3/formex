import InputLabel from './InputLabel.tsx';
import InputWrapper from './InputWrapper.tsx';
import InputHelperText from './InputHelperText.tsx';
import InputErrors from './InputErrors.tsx';

interface InputLayoutProps {
  slots?: {
    wrapper?: typeof InputWrapper;
    label?: typeof InputLabel;
    helperText?: typeof InputHelperText;
    errors?: typeof InputErrors;
  };
  label?: string;
  id: string;
  helperText?: string;
  children: React.ReactNode;
}

const InputLayout = ({
  slots,
  children,
  label,
  id,
  helperText,
}: InputLayoutProps) => {
  const {
    wrapper: Wrapper = InputWrapper,
    label: labelSlot = InputLabel,
    helperText: helperTextSlot = InputHelperText,
    errors: errorsSlot = InputErrors,
  } = slots || {};
  return (
    <Wrapper>
      {labelSlot && labelSlot({ htmlFor: id, children: label })}
      {children}
      {helperTextSlot && helperText && helperTextSlot({ children: helperText })}
      {errorsSlot && errorsSlot({ errors: [] })}
    </Wrapper>
  );
};

export default InputLayout;
