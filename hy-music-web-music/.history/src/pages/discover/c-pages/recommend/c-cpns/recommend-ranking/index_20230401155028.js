import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getTopListAction } from '../../store/actionCreators';

import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import HYTopRanking from '@/components/top-ranking';
import { RankingWrapper } from './style';

export default memo(function HYRecomendRanking() {
  // redux hooks
  const { upRanking, newRanking, originRanking } = useSelector(
    state => ({
      upRanking: state.getIn(['recommend', 'upRanking']),
      newRanking: state.getIn(['recommend', 'newRanking']),
      originRanking: state.getIn(['recommend', 'originRanking']),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getTopListAction(24381616));
    dispatch(getTopListAction(24381616));
    dispatch(getTopListAction(24381616));
  }, [dispatch]);
  console.log(upRanking, newRanking, originRanking);
  return (
    <RankingWrapper>
      <HYThemeHeaderRCM title="榜单" />
      <div className="tops">
        {/* <HYTopRanking info={upRanking}/>
        <HYTopRanking info={newRanking}/>
        <HYTopRanking info={originRanking}/> */}
      </div>
    </RankingWrapper>
  );
});
