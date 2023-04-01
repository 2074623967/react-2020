import React, { memo } from 'react';

import { AlbumWrapper } from './style';
import HYThemeHeaderRCM from '@/components/theme-header-rcm';

export default memo(function HYNewAlbum() {
  return <AlbumWrapper>
      <HYThemeHeaderRCM
        title=""
        keywords={['华语', '流行', '民谣', '摇滚', '电子']}
      />
  </AlbumWrapper>;
});
