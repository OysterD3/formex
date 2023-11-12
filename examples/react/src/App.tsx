import Editor from './components/Editor';
import FormexProvider from './components/FormexProvider.tsx';
import ConfigurationPanel from './components/ConfigurationPanel';
import ElementsPicker from './components/ElementPicker';

function App() {
  return (
    <FormexProvider>
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
    </FormexProvider>
  );
}

export default App;
