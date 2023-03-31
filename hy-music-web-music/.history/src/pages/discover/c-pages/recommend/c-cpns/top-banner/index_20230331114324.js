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

  //其他hookes
  const bannerRef = useRef();
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  return (
    <BannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} className='Carousel'>
            {topBanners.map((item, index) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img src={item.imageUrl} alt={item.typeTitle} />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={e => bannerRef.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={e => bannerRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});
<style scoped lang='less'>
    :deep(.ant-carousel .slick-dots li button) {
      display: block;
      width: 10px;
      height: 10px;
      padding: 0;
      color: transparent;
      font-size: 0;
      background: #fff;
      border: 0;
      border-radius: 50%;
      outline: none;
      cursor: pointer;
      opacity: 0.3;
      -webkit-transition: all 0.5s;
      transition: all 0.5s;
    }
</style>