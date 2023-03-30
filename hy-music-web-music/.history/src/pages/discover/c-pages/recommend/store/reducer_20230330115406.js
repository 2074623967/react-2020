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
      console
      // return {...state,topBanners:action.topBanners}
      return state.set('topBanners', action.topBanners);
    default:
      return state;
  }
}

export default reducer;
