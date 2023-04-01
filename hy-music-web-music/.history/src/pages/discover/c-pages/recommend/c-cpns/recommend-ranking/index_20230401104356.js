import React, { memo } from 'react';

import { RecommendRankingWrapper } from './style';
import HYThemeHeaderRCM from '@/components/theme-header-rcm';

export default memo(function HYNewAlbum() {
  return <RecommendRankingWrapper>
     <HYThemeHeaderRCM
        title="新碟上架"
      />
  </RecommendRankingWrapper>;
});
