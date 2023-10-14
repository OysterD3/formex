import { HelloWorld } from '@formex/react';
import ElementsPicker from './components/Sidebar/ElementsPicker.tsx';

function App() {
  return (
    <div className="h-screen w-screen bg-slate-700 overflow-none flex">
      <aside className="w-sm border-r border-slate-100">
        <ElementsPicker />
      </aside>
      <main className="p-4 py-6">
        <HelloWorld />
      </main>
    </div>
  );
}

export default App;
