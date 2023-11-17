import {
  Editor,
  FormexProvider,
  ElementPicker,
  ConfigurationPanel,
} from '@formex/builder-react';

function App() {
  return (
    <FormexProvider>
      <div className="h-screen w-screen overflow-none flex">
        <aside>
          <ElementPicker />
        </aside>
        <main className="p-4 py-6 h-screen w-full">
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
