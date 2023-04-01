import React, { memo } from 'react';

import { RecommendRankingWrapper } from './style';
import HYThemeHeaderRCM from '@/components/theme-header-rcm';

export default memo(function HYRecommendRanking() {
  return (
    <RecommendRankingWrapper>
      <HYThemeHeaderRCM title="榜单" />
    </RecommendRankingWrapper>
  );
});
