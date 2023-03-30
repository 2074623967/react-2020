import React, { memo } from 'react';
import { connect } from 'react-redux';

import {getTopBannerAction} from ’

function HYRecommend() {
  return <div>HYRecommend</div>;
}

const mapStateToProps = state => ({
  topBanners: state.recommend.topBanners
});

const mapDispatchToProps = dispatch => ({
  getBanners: () => {
    dispatch(getTopBannerAction())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(memo(HYRecommend));
