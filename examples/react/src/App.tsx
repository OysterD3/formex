import Editor from './components/Editor.tsx';
import FormexWrapper from './components/FormexWrapper.tsx';
import ConfigurationPanel from './components/ConfigurationPanel';
import ElementsPicker from './components/ElementPicker';

function App() {
  return (
    <FormexWrapper>
      <div className="h-screen w-screen overflow-none flex">
        <aside>
          <ElementsPicker />
        </aside>
        <main className="p-4 py-6 h-full w-full">
          <Editor />
        </main>
        <aside>
          <ConfigurationPanel />
        </aside>
      </div>
    </FormexWrapper>
  );
}

export default App;
