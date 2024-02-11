import type { AllValue, CommonProps, ValuesOf } from './_common';
import type { ElementProps, Option, EditorComponentProps } from './props';
import { INPUTS } from '../elements';
import type { Elements } from './elements';

/**
 * All input props map
 */
export type InputAttributes = {
  [key in keyof EditorComponentProps<
    ElementProps<AllValue> & CommonProps
  >]: key;
};
export type InputAttribute = ValuesOf<InputAttributes>;

/**
 * Available input types for the configuration panel
 */
export type ConfigurationPanelAttributeInputElement =
  | typeof INPUTS.switch
  | typeof INPUTS.radio
  | typeof INPUTS.number
  | typeof INPUTS.singleLineText;

/**
 * Configuration for each input attributes' input in the configuration panel
 */
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

/**
 * Elements and their props map without `onChange` and `value`
 */
export type ElementAttributeConfiguration<
  TElements extends Elements = Elements,
> = {
  [key in TElements]: readonly (keyof EditorComponentProps<
    ElementProps<key>
  >)[];
};
