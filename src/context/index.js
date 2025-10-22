import { useContext } from 'react';
import { NodeDataContext } from './NodeDataContext';
import { SelectedNodeContext } from './SelectedNodeContext';
import { EdgesContext } from './EdgesContext';
import { MessageContext } from './MessageContext';

export const useNodeData = () => useContext(NodeDataContext);
export const useSelectedNode = () => useContext(SelectedNodeContext);
export const useEdges = () => useContext(EdgesContext);
export const useMessage = () => useContext(MessageContext);