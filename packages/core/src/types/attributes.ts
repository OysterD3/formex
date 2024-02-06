import type { AllValue, CommonProps, ValuesOf } from './_common';
import type { ElementProps, Option, EditorComponentProps } from './props';
import { INPUTS } from '../elements';
import type { Elements } from './elements';

export type InputAttributes = {
  [key in keyof EditorComponentProps<
    ElementProps<AllValue> & CommonProps
  >]: key;
};
export type InputAttribute = ValuesOf<InputAttributes>;

export type ConfigurationPanelAttributeInputElement =
  | typeof INPUTS.switch
  | typeof INPUTS.radio
  | typeof INPUTS.number
  | typeof INPUTS.singleLineText;

export type InputAttributeConfiguration = {
  [key in InputAttribute]: {
    label: string;
    placeholder: string;
    tooltip?: string;
    description?: string;
    inputType: ConfigurationPanelAttributeInputElement;
    options?: readonly Option[];
  };
};

export type ElementAttributeConfiguration<
  TElements extends Elements = Elements,
> = {
  [key in TElements]: readonly (keyof EditorComponentProps<
    ElementProps<key>
  >)[];
};
