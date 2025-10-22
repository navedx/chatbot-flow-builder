import './styles/app.css';
import Flow from './components/Flow';
import Header from './components/Header';
import SidePanel from './components/panel/SidePanel';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { SelectedNodeProvider } from './context/SelectedNodeContext';
import { MessageProvider } from './context/MessageContext';
import { NodeDataProvider } from './context/NodeDataContext';

function App() {
  return (
    <div className="app">
      <NodeDataProvider>
        <SelectedNodeProvider>
          <MessageProvider>
            <Header />
            <div className="flow-container">
              <DndProvider backend={HTML5Backend}>
                <Flow />
                <SidePanel />
              </DndProvider>
            </div>
          </MessageProvider>
        </SelectedNodeProvider>
      </NodeDataProvider>
    </div>
  );
}

export default App;
