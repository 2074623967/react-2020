import React, { memo } from 'react';

import HYThemeHeaderRCM from '@/components/theme-header-rcm';

export default memo(function HYNewAlbum() {
  return <AlbumWrapper>
      <HYThemeHeaderRCM
        title="新碟上架"
      />
  </AlbumWrapper>;
});
