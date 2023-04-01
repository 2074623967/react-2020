import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import { RankingWrapper } from './style';


export default memo(function HYRecommendRanking() {
  return (
    <RankingWrapper>
      <HYThemeHeaderRCM title="榜单" />
    </RankingWrapper>
  );
});
