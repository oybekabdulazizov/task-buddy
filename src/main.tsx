import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import App from './App.tsx';
import { createStore } from './services/store/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={createStore()}>
      <App />
    </Provider>
  </React.StrictMode>
);
