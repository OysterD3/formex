import {
  Editor,
  FormexProvider,
  ElementPicker,
  ConfigurationPanel,
  INPUTS,
  INPUT_GROUPS,
  ElementPickerComponent,
  createFormexConfig,
  INPUT_ATTRIBUTES_INPUT_MAP,
  INPUTS_ATTRIBUTES_MAP,
} from '@formex/builder-react';
import { Grid } from '@mui/material';
import TextField from './components/Configs/TextField.tsx';
import Switch from './components/Configs/Switch.tsx';
import NumberInput from './components/Configs/NumberInput.tsx';
import Radio from './components/Configs/Radio.tsx';
import ElementPickerElementComponent from './components/ElementPicker.tsx';
import EditorContainer from './components/Editor/Container.tsx';
import EditorWrapper from './components/Editor/Wrapper.tsx';
import DragHandler from './components/Editor/DragHandler.tsx';
import ElementPickerContainer from './components/ElementPicker/Container.tsx';
import ElementPickerWrapper from './components/ElementPicker/Wrapper.tsx';
import ConfigsContainer from './components/Configs/Container.tsx';
import ConfigsWrapper from './components/Configs/Wrapper.tsx';
import SingleLineTextInput from './components/Editor/SingleLineTextInput.tsx';

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
  return (
    <FormexProvider configs={configs}>
      <Grid container>
        <Grid item xs={3}>
          <ElementPicker
            container={ElementPickerContainer}
            wrapper={ElementPickerWrapper}
          />
        </Grid>
        <Grid item xs={6}>
          <Editor
            dragHandler={DragHandler}
            container={EditorContainer}
            wrapper={EditorWrapper}
          />
        </Grid>
        <Grid item xs={3}>
          <ConfigurationPanel
            container={ConfigsContainer}
            wrapper={ConfigsWrapper}
          />
        </Grid>
      </Grid>
    </FormexProvider>
  );
}

export default App;
