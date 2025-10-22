import { createContext, useState } from 'react';

export const EdgesContext = createContext();

export const EdgesProvider = ({ children }) => {
    const [edges, setEdges] = useState([]);

    return (
        <EdgesContext.Provider value={{ edges, setEdges }}>{children}</EdgesContext.Provider>
    );
}