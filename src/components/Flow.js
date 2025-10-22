import { useRef, useCallback } from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
  applyNodeChanges,
  addEdge,
  getIncomers,
  getOutgoers,
  getConnectedEdges,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { TextNode } from './nodes/TextNode';
import { CustomEdge } from './CustomEdge';
import { useDrop } from 'react-dnd';
import { TEXT_NODE } from '../constants';
import { useSelectedNode, useNodeData, useEdges } from '../context';

const nodeTypes = { textNode: TextNode };
const edgeTypes = {
  'custom-edge': CustomEdge,
};

const FlowCanvas = () => {
  const { nodes, setNodes } = useNodeData();
  const { edges, setEdges } = useEdges();
  const { selectedNode, setSelectedNode } = useSelectedNode();
  const reactFlowWrapper = useRef(null);
  const { screenToFlowPosition } = useReactFlow();

  const addNode = (item, position) => {
    setNodes((prevNodes) => {
      const newNode = {
        id: `node-${prevNodes.length + 1}`,
        type: item.type,
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

  const onNodesDelete = useCallback(
    (deleted) => {
      let remainingNodes = [...nodes];

      // Check if the selected node is being deleted
      const isSelectedNodeDeleted = deleted.some(
        (node) => node.id === selectedNode?.id
      );
      if (isSelectedNodeDeleted) {
        setSelectedNode(null);
      }

      setEdges(
        deleted.reduce((acc, node) => {
          const incomers = getIncomers(node, remainingNodes, acc);
          const outgoers = getOutgoers(node, remainingNodes, acc);
          const connectedEdges = getConnectedEdges([node], acc);

          const remainingEdges = acc.filter(
            (edge) => !connectedEdges.includes(edge)
          );

          const createdEdges = incomers.flatMap(({ id: source }) =>
            outgoers.map(({ id: target }) => ({
              id: `${source}->${target}`,
              source,
              target,
            }))
          );

          remainingNodes = remainingNodes.filter((rn) => rn.id !== node.id);

          return [...remainingEdges, ...createdEdges];
        }, edges)
      );
    },
    [nodes, edges, selectedNode, setSelectedNode]
  );

  const onPaneClick = useCallback(() => {
    setSelectedNode(null);
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
        onNodesDelete={onNodesDelete}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
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
