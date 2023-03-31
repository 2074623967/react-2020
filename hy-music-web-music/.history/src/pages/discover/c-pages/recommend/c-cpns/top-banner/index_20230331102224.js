import React, { memo, useEffect, useRef, useCallback, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { getTopBannerAction } from '../../store/actionCreators';

import { Carousel } from 'antd';
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style';

export default memo(function HYTopBanner() {
  //组件和redux关联:获取数据和进行操作
  const { topBanners } = useSelector(
    state => ({
      topBanners: state.getIn(['recommend', 'topBanners']),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  //发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);
  return (
    <BannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay>
          {
           topBanners.map((item,index)=>{
            return (
              <div className='banner-item' key={item.imageUrl}>
              <img src={item.imageUrl}/>
              </div>
              )
          })
          }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
      </div>
    </BannerWrapper>
  );
});
