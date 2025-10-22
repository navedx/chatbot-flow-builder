import React, { createContext, useContext, useState } from 'react';

const MessageContext = createContext();

export const useMessage = () => useContext(MessageContext);

export const MessageProvider = ({ children }) => {
    const [message, setMessage] = useState('');

    return (
        <MessageContext.Provider value={{ message, setMessage }}>{children}</MessageContext.Provider>
    );
}