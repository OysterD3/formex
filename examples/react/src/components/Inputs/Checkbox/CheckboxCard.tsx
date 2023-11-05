import InputCard from '../../InputLayout/InputCard.tsx';

export interface CheckboxCardProps {
  label: string;
  name?: string;
  helperText?: string;
  checked?: boolean;
  value?: string;
}

const CheckboxCard = ({
  label,
  name,
  helperText,
  checked,
  value,
}: CheckboxCardProps) => {
  return (
    <InputCard
      type="checkbox"
      label={label}
      name={name}
      helperText={helperText}
      checked={checked}
      value={value}
    />
  );
};

export default CheckboxCard;
