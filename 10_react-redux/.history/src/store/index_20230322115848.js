import {legacy_createStore} from 'redux';

import reducer from './reducer.js';

const store = redux.legacy_createStore(reducer);

export default store;
