import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  topBanners: [],
});
// const defaultState ={
//   topBanners: [],
// };

function reducer(state = defaultState, action) {
  console.log(action);
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      console.log('6666', action);
      console.log({ ...state, topBanners: action.banners });
      // return {...state,topBanners:action.banners}
      return state.set('topBanners', action.banners);
    default:
      return state;
  }
}

export default reducer;
