import { useState } from 'react';
import { ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { TextNode } from './nodes/TextNode';
import { CustomEdge } from './CustomEdge';
import { useDrop } from 'react-dnd';
import { TEXT_NODE } from '../constants';

const initialNodes = [
  {
    id: 'node-1',
    type: 'textNode',
    position: { x: 0, y: 0 },
    data: { value: 123 },
  },
];

const nodeTypes = { textNode: TextNode };

const edgeTypes = {
  'custom-edge': CustomEdge,
};
const initialEdges = [
  {
    id: 'e1',
    source: 'n1',
    target: 'n2',
    type: 'custom-edge',
  },
];

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const addNode = ({ type }) => {
    const newNode = {
      id: `node-${nodes.length + 1}`,
      type: type,
      position: { x: 0, y: 0 },
      data: { value: 100 },
    };
    const newEdge = {
      id: `edge-${edges.length + 1}`,
      source: newNode.id,
      target: 'n2',
      type: 'custom-edge',
    };
    setNodes([...nodes, newNode]);
    setEdges([...edges, newEdge]);
  };

  const [, drop] = useDrop(() => ({
    accept: [TEXT_NODE], // only accepts draggable items of this type
    drop: addNode,
  }));

  return (
    <ReactFlow
      ref={drop}
      nodes={nodes}
      edges={edges}
      edgeTypes={edgeTypes}
      nodeTypes={nodeTypes}
      fitView
    />
  );
}

export default Flow;
