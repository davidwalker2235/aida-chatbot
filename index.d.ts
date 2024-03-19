import { Component } from 'react';

export interface AidaChatbotProps<T = any> {
  endPoint: string;
  azureApiKey: string;
  deploymentId: string;
}


declare class AidaChatbot extends Component<AidaChatbotProps> {}


declare module 'aida-chatbot' {}

export default AidaChatbot;