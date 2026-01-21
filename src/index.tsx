import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { QueryProvider } from './app/providers/query/QueryProvider'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryProvider>
        <App />
    </QueryProvider>
  </React.StrictMode>
);


