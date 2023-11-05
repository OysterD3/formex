import InputCard from '../../InputLayout/InputCard.tsx';

export interface RadioCardProps {
  label: string;
  name?: string;
  helperText?: string;
  checked?: boolean;
  value?: string;
}

const RadioCard = ({
  label,
  name,
  helperText,
  checked,
  value,
}: RadioCardProps) => {
  return (
    <InputCard
      type="radio"
      label={label}
      name={name}
      helperText={helperText}
      checked={checked}
      value={value}
    />
  );
};

export default RadioCard;
