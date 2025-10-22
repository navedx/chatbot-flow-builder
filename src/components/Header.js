import Button from './ui/Button';
import { useNodeData, useEdges } from '../context';
import { toast } from 'react-hot-toast';

export default function Header() {
  const { nodes } = useNodeData();
  const { edges } = useEdges();

  const handleSave = () => {
    if (nodes.length === 0) {
      toast.error('No nodes to save', { style : { background: '#fdcacb' } });
      return;
    }

    // 1️. Check for disconnected nodes
    const nodesWithoutTarget = nodes?.filter(
      node => !edges.some(edge => edge.target === node.id)
    );

    if (nodes.length > 1 && nodesWithoutTarget.length > 1) {
      toast.error('Cannot save flow', { style : { background: '#fdcacb' } });
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
    toast.success('Flow saved successfully!');
  };
  return (
    <div className="header">
      <Button onClick={handleSave}>Save Changes</Button>
    </div>
  );
}
