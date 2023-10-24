import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './routes';

import store from './store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* esse provider serve para que a store seja passada para todos! */}
    <Provider store={store}>
      <Router />
    </Provider>


  </React.StrictMode>
);
