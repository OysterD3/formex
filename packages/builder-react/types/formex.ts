import type {
  ConfigurationPanelAttributeInputElement,
  ElementAttributeConfiguration,
  InputAttributeConfiguration,
  InputAttributeConfigurationProps,
} from '../src';
import type {
  EditorComponentProps,
  ElementPickerComponent,
  ElementProps,
  Elements,
} from './index.ts';

type ConfigurationPanelConfig<TElements extends Elements = Elements> = {
  inputAttributesEditorConfig?: InputAttributeConfiguration;
  elementAttributesConfig?: ElementAttributeConfiguration;
  elementComponents:
    | {
        [key in ConfigurationPanelAttributeInputElement]: (
          props: InputAttributeConfigurationProps<TElements>,
        ) => React.ReactNode;
      }
    | null;
};

export type Configs<TElements extends Elements = Elements> = {
  configurationPanel: ConfigurationPanelConfig<TElements>;
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
