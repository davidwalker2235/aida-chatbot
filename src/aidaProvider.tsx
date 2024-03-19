import {createContext} from 'react';

export const ChatContext = createContext<{
    endPoint: string;
    azureApiKey: string;
    deploymentId: string;
}>({
    endPoint: '', azureApiKey: '', deploymentId: ''
});

const AidaProvider = ({children, credentials}: {children: any, credentials: {
        endPoint: string;
        azureApiKey: string;
        deploymentId: string;
    }}) => {

    return (
        <ChatContext.Provider value={credentials}>
            {children}
        </ChatContext.Provider>
    );
}

export default AidaProvider