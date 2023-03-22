import redux from 'redux';

import reducer from './reducer.js';

const store = redux.(reducer);

export default store;
