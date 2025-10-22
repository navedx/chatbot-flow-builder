import Button from './ui/Button';
import { useNodeData, useEdges } from '../context';
import { toast } from 'react-hot-toast';

export default function Header() {
  const { nodes } = useNodeData();
  const { edges } = useEdges();

  const handleSave = () => {
    // 1️⃣ Validate: multiple disconnected nodes
    const nodesWithoutTarget = nodes?.filter(
      node => !edges.some(edge => edge.target === node.id)
    );

    if (nodes.length > 1 && nodesWithoutTarget.length > 1) {
      toast.error('Cannot save flow: multiple nodes have no incoming connections');
      return; // stop saving
    }

    // 2️⃣ Clean nodes & edges for serialization
    const cleanNodes = nodes.map(({ id, type, position, data }) => ({
      id,
      type,
      position,
      data, // make sure data is plain JSON
    }));

    const cleanEdges = edges.map(({ id, source, target, animated, label }) => ({
      id,
      source,
      target,
      animated,
      label,
    }));

    // 3️⃣ Save (localStorage or send to backend)
    const flow = { nodes: cleanNodes, edges: cleanEdges };
    localStorage.setItem('flow', JSON.stringify(flow));

    // 4️⃣ Success toast
    toast.success('Flow saved successfully!');
  };
  return (
    <div className="header">
      <Button onClick={handleSave}>Save Changes</Button>
    </div>
  );
}
