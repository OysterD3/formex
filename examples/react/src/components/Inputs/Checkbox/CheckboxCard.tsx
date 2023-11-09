import InputCard from '../../InputLayout/InputCard.tsx';
import { mergeProps } from '../../../utils/props.ts';

export interface CheckboxCardProps {
  label?: string;
  name?: string;
  helperText?: string;
  checked?: boolean;
  value?: string;
}

export const DEFAULT_CHECKBOX_CARD_PROPS = {
  label: '',
  name: undefined,
  helperText: undefined,
  checked: false,
  value: undefined,
};

const CheckboxCard = (props: CheckboxCardProps) => {
  const { label, name, helperText, checked, value } = mergeProps(
    DEFAULT_CHECKBOX_CARD_PROPS,
    props,
  );

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
