import React from 'react';
import {createRoot} from 'react-dom/client';

import './assets/css/reset.css'

import App from './App';

const container=document.getElementById('root')
const root = ReactDOM.createRoot(container);
root.render(
    <App />
);
