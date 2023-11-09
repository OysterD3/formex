import InputCard from '../../InputLayout/InputCard.tsx';
import { mergeProps } from '../../../utils/props.ts';

export interface RadioCardProps {
  label?: string;
  name?: string;
  helperText?: string;
  checked?: boolean;
  value?: string;
}

export const DEFAULT_RADIO_CARD_PROPS = {
  label: '',
  name: undefined,
  helperText: undefined,
  checked: undefined,
  value: undefined,
};

const RadioCard = (props: RadioCardProps) => {
  const { label, name, helperText, checked, value } = mergeProps(
    DEFAULT_RADIO_CARD_PROPS,
    props,
  );

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
