import { Button, Grid, Stack } from '@mui/material';
import {
  ConfigurationPanel,
  Editor,
  ElementPicker,
  useFormexEditor,
} from '@formex/builder-react';
import ElementPickerContainer from './ElementPicker/Container.tsx';
import ElementPickerWrapper from './ElementPicker/Wrapper.tsx';
import DragHandler from './Editor/DragHandler.tsx';
import EditorContainer from './Editor/Container.tsx';
import EditorWrapper from './Editor/Wrapper.tsx';
import ConfigsContainer from './Configs/Container.tsx';
import ConfigsWrapper from './Configs/Wrapper.tsx';

const FormBuilder = () => {
  const { onSave } = useFormexEditor();

  const handleSave = (values, errors) => {
    if (errors) {
      console.error(errors);
    } else {
      console.log(values);
    }
  };

  return (
    <Stack>
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
      <Button onClick={onSave(handleSave)}>Save</Button>
    </Stack>
  );
};

export default FormBuilder;
