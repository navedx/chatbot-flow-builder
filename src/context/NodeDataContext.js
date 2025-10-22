import React, { createContext, useContext, useState } from 'react';

const NodeDataContext = createContext();

export const useNodeData = () => useContext(NodeDataContext);

export const NodeDataProvider = ({ children }) => {
    const [nodes, setNodes] = useState([]);

    return (
        <NodeDataContext.Provider value={{ nodes, setNodes }}>{children}</NodeDataContext.Provider>
    );
}