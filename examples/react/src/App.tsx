import {
  FormexProvider,
  INPUTS,
  INPUT_GROUPS,
  ElementPickerComponent,
  INPUT_ATTRIBUTES_INPUT_MAP,
  INPUTS_ATTRIBUTES_MAP,
  FormexFormValues,
} from '@formex/builder-react';
import TextField from './components/Configs/TextField.tsx';
import Switch from './components/Configs/Switch.tsx';
import NumberInput from './components/Configs/NumberInput.tsx';
import Radio from './components/Configs/Radio.tsx';
import ElementPickerElementComponent from './components/ElementPicker.tsx';
import SingleLineTextInput from './components/Editor/SingleLineTextInput.tsx';
import FormBuilder from './components/FormBuilder.tsx';
import { createTheme, ThemeProvider } from '@mui/material';
import SwitchInput from './components/Editor/SwitchInput.tsx';
import NumberInput2 from './components/Editor/NumberInput.tsx';
import { useState } from 'react';
import FormRenderer from './components/FormRenderer.tsx';

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
    config: [INPUTS.singleLineText, INPUTS.switch, INPUTS.number],
    elementComponents: elementPickersComponent,
  },
  editor: {
    elementComponents: {
      [INPUTS.singleLineText]: SingleLineTextInput,
      [INPUTS.switch]: SwitchInput,
      [INPUTS.number]: NumberInput2,
    },
  },
};

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [formData, setFormData] = useState<FormexFormValues['items']>([]);
  const handleSave = (values: FormexFormValues) => {
    setFormData(values.items);
  };

  return (
    <ThemeProvider theme={theme}>
      <FormexProvider configs={configs} onSave={handleSave}>
        <FormBuilder />
      </FormexProvider>
      {formData.length > 0 && <FormRenderer items={formData} />}
    </ThemeProvider>
  );
}

export default App;
