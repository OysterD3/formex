import {
  FormexProvider,
  INPUTS,
  INPUT_GROUPS,
  ElementPickerComponent,
  INPUT_ATTRIBUTES_INPUT_MAP,
  INPUTS_ATTRIBUTES_MAP,
} from '@formex/builder-react';
import TextField from './components/Configs/TextField.tsx';
import Switch from './components/Configs/Switch.tsx';
import NumberInput from './components/Configs/NumberInput.tsx';
import Radio from './components/Configs/Radio.tsx';
import ElementPickerElementComponent from './components/ElementPicker.tsx';
import SingleLineTextInput from './components/Editor/SingleLineTextInput.tsx';
import FormBuilder from './components/FormBuilder.tsx';

const elementPickersComponent = [
  ...Object.values(INPUTS),
  ...Object.values(INPUT_GROUPS),
].reduce((acc, element) => {
  acc[element] = () => <ElementPickerElementComponent element={element} />;
  return acc;
}, {} as ElementPickerComponent);

const configs = {
  configurationPanel: {
    inputAttributesEditorConfig: INPUT_ATTRIBUTES_INPUT_MAP,
    elementAttributesConfig: INPUTS_ATTRIBUTES_MAP,
    elementComponents: {
      [INPUTS.singleLineText]: TextField,
      [INPUTS.switch]: Switch,
      [INPUTS.number]: NumberInput,
      [INPUTS.radio]: Radio,
    },
  },
  elementPicker: {
    config: [INPUTS.singleLineText],
    elementComponents: elementPickersComponent,
  },
  editor: {
    elementComponents: {
      [INPUTS.singleLineText]: SingleLineTextInput,
    },
  },
};

function App() {
  const handleSave = (values: any) => console.log(values);

  return (
    <FormexProvider configs={configs} handleSave={handleSave}>
      <FormBuilder />
    </FormexProvider>
  );
}

export default App;
