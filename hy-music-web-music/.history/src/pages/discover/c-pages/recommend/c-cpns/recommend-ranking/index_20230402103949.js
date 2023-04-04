import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getTopListAction } from '../../store/actionCreators';

import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import HYTopRanking from '@/components/top-ranking';
import { RankingWrapper } from './style';

export default memo(function HYRecomendRanking() {
  // redux hooks
  const { topUpList, topNewList, originRanking } = useSelector(
    state => ({
      topUpList: state.getIn(['recommend', 'topUpList']),
      topNewList: state.getIn(['recommend', 'topNewList']),
      originRanking: state.getIn(['recommend', 'originRanking']),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getTopListAction());
  }, [dispatch]);
  return (
    <RankingWrapper>
      <HYThemeHeaderRCM title="榜单" />
      <div className="tops">
        <HYTopRanking info={topUpList} />
        <HYTopRanking info={topNewList} />
        <HYTopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  );
});
