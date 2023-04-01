import React, { memo } from 'react';

import { RankingWrapper } from './style';
import HYThemeHeaderRCM from '@/components/theme-header-rcm';

export default memo(function HYRecommendRanking() {
  return (
    <RankingWrapper>
      <HYThemeHeaderRCM title="榜单" />
    </RankingWrapper>
  );
});
