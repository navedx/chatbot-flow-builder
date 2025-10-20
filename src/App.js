import './styles/app.css';
import NodesPanel from './components/NodesPanel';
import Flow from './components/Flow';
import Header from './components/Header';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="flow-container">
        <DndProvider backend={HTML5Backend}>
          <Flow />
          <NodesPanel />
        </DndProvider>
      </div>
    </div>
  );
}

export default App;
