import type { ElementPickerComponent } from './index.ts';
import type {
  ConfigurationPanelAttributeInputElement,
  ElementAttributeConfiguration,
  InputAttributeConfiguration,
  Elements,
  EditorComponentProps,
  ElementProps,
  FormexFormValues,
  CommonInputAttributeConfigurationProps,
} from '@formex/core';
import type {
  ControllerFieldState,
  ControllerRenderProps,
  UseFormStateReturn,
} from 'react-hook-form';

type ConfigurationPanelConfig = {
  inputAttributesEditorConfig?: InputAttributeConfiguration;
  elementAttributesConfig?: ElementAttributeConfiguration;
  elementComponents:
    | {
        [key in ConfigurationPanelAttributeInputElement]: (
          props: InputAttributeConfigurationProps,
        ) => React.ReactNode;
      }
    | null;
};

export type Configs<TElements extends Elements = Elements> = {
  configurationPanel: ConfigurationPanelConfig;
  elementPicker: {
    config:
      | TElements[]
      | {
          wrapper: (props: { children: React.ReactNode }) => React.ReactNode;
          elements: TElements[];
        }[];
    elementComponents: ElementPickerComponent<TElements> | null;
  };
  editor: {
    elementComponents:
      | {
          [key in TElements]: (
            props: EditorComponentProps<ElementProps<key>>,
          ) => React.ReactNode;
        }
      | null;
  };
};

export type InputAttributeConfigurationProps =
  CommonInputAttributeConfigurationProps & {
    field: ControllerRenderProps<FormexFormValues>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<FormexFormValues>;
  };
