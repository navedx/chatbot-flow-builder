import { createContext, useState } from 'react';

export const NodeDataContext = createContext();

export const NodeDataProvider = ({ children }) => {
    const [nodes, setNodes] = useState([]);

    return (
        <NodeDataContext.Provider value={{ nodes, setNodes }}>{children}</NodeDataContext.Provider>
    );
}