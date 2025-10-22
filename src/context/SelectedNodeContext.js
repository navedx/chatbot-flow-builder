import { createContext, useState } from 'react';

export const SelectedNodeContext = createContext();

export const SelectedNodeProvider = ({ children }) => {
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <SelectedNodeContext.Provider value={{ selectedNode, setSelectedNode }}>
      {children}
    </SelectedNodeContext.Provider>
  );
};
