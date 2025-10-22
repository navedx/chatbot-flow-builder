import Button from './ui/Button';
import { useMessage } from '../context/MessageContext';
import { useSelectedNode } from '../context/SelectedNodeContext';
import { useNodeData } from '../context/NodeDataContext';

export default function Header() {
  const { message, setMessage } = useMessage();
  const { selectedNode, setSelectedNode } = useSelectedNode();
  const { setNodes } = useNodeData();

  const handleSave = () => {
    if (!selectedNode) {
      console.warn('No node selected');
      return;
    }
    
    setNodes((prevNodes) => {
      return prevNodes.map((node) => {
        if (node.id === selectedNode.id) {
          return { ...node, data: { value: message } };
        }
        return node;
      });
    });
    setSelectedNode(null);
    setMessage('');
  }

  return (
    <div className="header">
      <Button onClick={handleSave}>Save Changes</Button>
    </div>
  );
}
