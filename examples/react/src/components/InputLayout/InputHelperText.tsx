interface InputHelperTextProps {
  helperText: string;
}

const InputHelperText = ({ helperText }: InputHelperTextProps) => {
  return <p className="text-sm text-gray-500">{helperText}</p>;
};

export default InputHelperText;
