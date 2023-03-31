import React, { memo, useEffect, useRef, useCallback, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import {Carousel} from 'antd'

import {BannerWrapper,BannerLeft,BannerRight,BannerControl} from './style'

export default memo(function HYTopBanner() {
  return (
    <BannerWrapper>
      <div className='banner '>

      </div>
    </BannerWrapper>
    )
});
