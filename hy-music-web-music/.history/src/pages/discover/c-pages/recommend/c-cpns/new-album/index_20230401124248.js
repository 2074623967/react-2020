import React, { memo, useEffect} from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { getHotRecommendAction } from '../../store/actionCreators';
import { HOT_RECOMMEND_LIMIT } from '@/common/contants';

import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import HYSongsCover from '@/components/songs-cover';
import { AlbumWrapper } from './style';

export default memo(function HYNewAlbum() {
  return <AlbumWrapper>
      <HYThemeHeaderRCM
        title="新碟上架"
      />
  </AlbumWrapper>;
});
