import React, { createContext, useContext, useState } from 'react';

const SelectedNodeContext = createContext();

export const useSelectedNode = () => useContext(SelectedNodeContext);

export const SelectedNodeProvider = ({ children }) => {
  const [selectedNodeId, setSelectedNodeId] = useState(null);

  return (
    <SelectedNodeContext.Provider value={{ selectedNodeId, setSelectedNodeId }}>
      {children}
    </SelectedNodeContext.Provider>
  );
}