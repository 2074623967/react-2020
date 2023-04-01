import React, { memo, useEffect, useRef, useCallback, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { getHotRecommendAction } from '../../store/actionCreators';
import { HOT_RECOMMEND_LIMIT } from '@/common/contants';

import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import HYSongsCover from '@/components/songs-cover';
import { HotRecommendWrapper } from './style';

export default memo(function HYHotRecommend() {
  //组件和redux关联:获取数据和进行操作
  const { hotRecommends } = useSelector(
    state => ({
      hotRecommends: state.getIn(['recommend', 'hotRecommends']),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  //其他hookes
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <HYThemeHeaderRCM
        title="热门推荐"
        keywords={['华语', '流行', '民谣', '摇滚', '电子']}
      />
      <div className="recommend-list">
        {hotRecommends.map((item, index) => {
          return <HYSongsCover key={item.id} info={item} />;
        })}
      </div>
    </HotRecommendWrapper>
  );
});
