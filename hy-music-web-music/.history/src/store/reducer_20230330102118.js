import { combineReducers } from 'redux';

import {reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store'

const cReducer = combineReducers({
 recommendReducer:recommendReducer
});

export default cReducer;
