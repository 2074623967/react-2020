import React from 'react';
import ReactDOM from 'react-dom/client';


import store from './store'
// import { StoreContext } from './utils/context';
import

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
);
