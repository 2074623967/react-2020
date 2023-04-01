import React, { memo } from 'react';

import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import { HotRecommendWrapper } from './style';

export default memo(function HYHotRecommend() {
  return (
    <HotRecommendWrapper>
      <HYThemeHeaderRCM title/>
    </HotRecommendWrapper>
  );
});
