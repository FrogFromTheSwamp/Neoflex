import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { QueryProvider } from './app/providers/query/QueryProvider'
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryProvider>
  </React.StrictMode>
);


