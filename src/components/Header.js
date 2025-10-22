import Button from './ui/Button';
import { useNodeData, useEdges } from '../context';
import { toast } from 'react-hot-toast';

export default function Header() {
  const { nodes } = useNodeData();
  const { edges } = useEdges();

  const handleSave = () => {
    // 1️. Check for disconnected nodes
    const nodesWithoutTarget = nodes?.filter(
      node => !edges.some(edge => edge.target === node.id)
    );

    if (nodes.length > 1 && nodesWithoutTarget.length > 1) {
      toast.error('Cannot save flow');
      return; 
    }

    // 2. Clean nodes & edges
    const cleanNodes = nodes.map(({ id, type, position, data }) => ({
      id,
      type,
      position,
      data,
    }));

    const cleanEdges = edges.map(({ id, source, target, animated, label }) => ({
      id,
      source,
      target,
      animated,
      label,
    }));

    // 3 Save
    const flow = { nodes: cleanNodes, edges: cleanEdges };
    localStorage.setItem('flow', JSON.stringify(flow));

    // 4. Success toast
    toast.success('Flow saved successfully!');
  };
  return (
    <div className="header">
      <Button onClick={handleSave}>Save Changes</Button>
    </div>
  );
}
