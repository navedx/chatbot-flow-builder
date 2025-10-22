import { useContext } from 'react';
import { NodeDataContext } from './NodeDataContext';
import { SelectedNodeContext } from './SelectedNodeContext';
import { EdgesContext } from './EdgesContext';

export const useNodeData = () => useContext(NodeDataContext);
export const useSelectedNode = () => useContext(SelectedNodeContext);
export const useEdges = () => useContext(EdgesContext);