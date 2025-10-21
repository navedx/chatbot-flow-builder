import './styles/app.css';
import NodesPanel from './components/panel/NodesPanel';
import Flow from './components/Flow';
import Header from './components/Header';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { SelectedNodeProvider } from './context/SelectedNodeContext';


function App() {
  return (
    <div className="app">
      <Header />
      <div className="flow-container">
        <DndProvider backend={HTML5Backend}>
          <SelectedNodeProvider>
            <Flow />
            <NodesPanel />
          </SelectedNodeProvider>
        </DndProvider>
      </div>
    </div>
  );
}

export default App;
