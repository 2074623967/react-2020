import React, { memo, useEffect, useRef, useCallback, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { Carousel } from 'antd';

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style';
import { getTopBannerAction } from '../';

export default memo(function HYTopBanner() {
  //组件和redux关联:获取数据和进行操作
  const { topBanners } = useSelector(
    state => ({
      topBanners: state.recommend.topBanners,
    }),
    shallowEqual
  );
  console.log(topBanners);

  const dispatch = useDispatch();

  //发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);
  return (
    <BannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeft></BannerLeft>
        <BannerRight></BannerRight>
      </div>
    </BannerWrapper>
  );
});
