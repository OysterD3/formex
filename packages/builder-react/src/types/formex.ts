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

/**
 * Configuration for `<ConfigurationPanel />`
 */
type ConfigurationPanelConfig = {
  inputAttributesEditorConfig?: InputAttributeConfiguration;
  elementAttributesConfig?: ElementAttributeConfiguration;
  /**
   * Components for each input attributes' input in the configuration panel
   */
  elementComponents:
    | {
        [key in ConfigurationPanelAttributeInputElement]: (
          props: InputAttributeConfigurationProps,
        ) => React.ReactNode;
      }
    | null;
};

/**
 * The master configuration for the formex
 */
export type Configs<TElements extends Elements = Elements> = {
  configurationPanel: ConfigurationPanelConfig;
  /**
   * Configuration for `<ElementPicker />`
   */
  elementPicker: {
    /**
     * Need this to make the generic type for the `config` prop work
     */
    config:
      | TElements[]
      | {
          wrapper: (props: { children: React.ReactNode }) => React.ReactNode;
          elements: TElements[];
        }[];
    /**
     * Components for each element in the `<ElementPicker />`
     */
    elementComponents: ElementPickerComponent<TElements> | null;
  };
  editor: {
    /**
     * Components for each element in the `<Editor />`
     */
    elementComponents:
      | {
          [key in TElements]: (
            props: EditorComponentProps<ElementProps<key>>,
          ) => React.ReactNode;
        }
      | null;
  };
};

/**
 * Props for the input attributes' input in the configuration panel
 */
export type InputAttributeConfigurationProps =
  CommonInputAttributeConfigurationProps & {
    field: ControllerRenderProps<FormexFormValues>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<FormexFormValues>;
  };
