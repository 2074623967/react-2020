import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  topBanners: [],
});
// const defaultState ={
//   topBanners: [],
// };

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      console.log(state.set('topBanners', action.topBanners));
      // return {...state,topBanners:action.banners}
      return state.set('topBanners', action.topBanners);
    default:
      return state;
  }
}

export default reducer;
