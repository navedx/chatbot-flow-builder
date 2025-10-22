import { useNodeData, useSelectedNode } from '../../context';
import { ArrowLeftIcon } from '../ui/Icons';

export default function SettingsPanel() {
  const { setNodes } = useNodeData();
  const { selectedNode, setSelectedNode } = useSelectedNode();

  const handleChange = (e) => {
    const newValue = e.target.value;

    setNodes((prevNodes) => {
      return prevNodes.map((node) => {
        if (node.selected) {
          return { ...node, data: {  value: newValue } };
        }
        return node;
      })
    })

    if (selectedNode) {
      setSelectedNode({ ...selectedNode, data: { value: newValue } });
    }
  }

  return (
    <div className="panel panel-column">
      <div className="settings-header">
        <ArrowLeftIcon onClick={() => setSelectedNode(null)} style={{ cursor: 'pointer' }}/>
        <p>Message</p>
      </div>
      <div className="settings-content">
        <p>Text</p>
        <textarea
          name="text"
          id="text"
          value={selectedNode?.data?.value || ''}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
