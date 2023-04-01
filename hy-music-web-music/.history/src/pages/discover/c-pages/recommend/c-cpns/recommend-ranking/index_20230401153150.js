import React, { memo } from 'react';

import { RankingWrapper } from './style';


export default memo(function HYRecommendRanking() {
  return (
    <RankingWrapper>
      <HYThemeHeaderRCM title="榜单" />
    </RankingWrapper>
  );
});
