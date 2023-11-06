import Editor from './components/Editor.tsx';
import InputElements from './components/ElementPicker/Elements/InputElements.tsx';

function App() {
  return (
    <div className="h-screen w-screen bg-slate-700 overflow-none flex">
      <aside className="w-sm border-r border-slate-100">
        <InputElements />
      </aside>
      <main className="p-4 py-6 h-full w-full">
        <Editor />
      </main>
    </div>
  );
}

export default App;
