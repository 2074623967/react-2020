import React, { memo, useEffect, useRef, useCallback, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import {getHotRecommendAction} from 

import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import { HotRecommendWrapper } from './style';

export default memo(function HYHotRecommend() {

 //组件和redux关联:获取数据和进行操作
 const { topBanners } = useSelector(
  state => ({
    topBanners: state.getIn(['recommend', 'topBanners']),
  }),
  shallowEqual
);
const dispatch = useDispatch();

//其他hookes
const bannerRef = useRef();
useEffect(() => {
  dispatch(getTopBannerAction());
}, [dispatch]);

  return (
    <HotRecommendWrapper>
      <HYThemeHeaderRCM
        title="热门推荐"
        keywords={['华语', '流行', '民谣', '摇滚', '电子']}
      />
    </HotRecommendWrapper>
  );
});
