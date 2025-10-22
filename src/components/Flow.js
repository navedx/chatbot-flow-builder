import { useState, useRef, useCallback, useEffect } from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
  applyNodeChanges,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { TextNode } from './nodes/TextNode';
import { CustomEdge } from './CustomEdge';
import { useDrop } from 'react-dnd';
import { TEXT_NODE } from '../constants';
import { useSelectedNode } from '../context/SelectedNodeContext';
import { useNodeData } from '../context/NodeDataContext';

const nodeTypes = { textNode: TextNode };
const edgeTypes = {
  'custom-edge': CustomEdge,
};

const FlowCanvas = () => {
  const { nodes, setNodes } = useNodeData();
  const [edges, setEdges] = useState([]);
  const { selectedNode, setSelectedNode } = useSelectedNode();
  const reactFlowWrapper = useRef(null);
  const { screenToFlowPosition } = useReactFlow();

  const addNode = (item, position) => {
    setNodes((prevNodes) => {
      const newNode = {
        id: `node-${prevNodes.length + 1}`,
        type: 'textNode',
        position,
        data: { value: 'textNode' },
      };
      return [...prevNodes, newNode];
    });
  };

  const [, drop] = useDrop(() => ({
    accept: [TEXT_NODE],
    drop: (item, monitor) => {
      const clientOffset = monitor.getClientOffset();

      if (!clientOffset) return;

      const position = screenToFlowPosition({
        x: clientOffset.x,
        y: clientOffset.y,
      });

      addNode(item, position);
    },
  }));

  const setRefs = (node) => {
    reactFlowWrapper.current = node;
    drop(node);
  };

  const onNodesChange = (changes) => {
    setNodes((prevNodes) => applyNodeChanges(changes, prevNodes));
  };

  const onConnect = (connection) => {
    setEdges((prevEdges) => addEdge(connection, prevEdges));
  };

  const onNodeClick = useCallback((event, node) => {
    // toggle: if the clicked node is already selected, deselect it
    setSelectedNode((prev) => (prev?.id === node?.id ? null : node));
  }, []);

  const styledNodes = nodes?.map((node) => ({
    ...node,
    style: {
      border: node.id === selectedNode?.id ? '2px solid blue' : '',
      borderRadius: 5,
    },
  }));

  return (
    <div ref={setRefs} style={{ width: '100%', height: '100vh' }}>
      <ReactFlow
        nodes={styledNodes}
        edges={edges}
        edgeTypes={edgeTypes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        fitView
      />
    </div>
  );
};

export default function Flow() {
  return (
    <ReactFlowProvider>
      <FlowCanvas />
    </ReactFlowProvider>
  );
}
