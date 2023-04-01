import React, { memo } from 'react';

import { AlbumWrapper } from './style';
import { HotRecommendWrapper } from './style';

export default memo(function HYNewAlbum() {
  return <AlbumWrapper>
    <HYThemeHeaderRCM
        title="热门推荐"
        keywords={['华语', '流行', '民谣', '摇滚', '电子']}
      />
  </AlbumWrapper>;
});
