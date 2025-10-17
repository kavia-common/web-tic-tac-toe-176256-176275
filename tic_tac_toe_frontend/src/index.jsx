import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// PUBLIC_INTERFACE
function mount() {
  /** Entrypoint that mounts the React application to #root. */
  const rootElem = document.getElementById('root');
  const root = ReactDOM.createRoot(rootElem);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

mount();
