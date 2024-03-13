"use client"

import {createContext} from 'react';

type credentialsTypes = {endPoint: string, azureApiKey: string, deploymentId: string}
export const ChatContext = createContext(
    {} as credentialsTypes);
const AidaProvider = ({children, credentials}: {
    children: React.ReactNode,
    credentials: credentialsTypes
}) => {

    return (
        <ChatContext.Provider value={credentials}>
            {children}
        </ChatContext.Provider>
    );
}

export default AidaProvider