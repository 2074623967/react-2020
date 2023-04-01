import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { getNewAlbumAction } from '../../store/actionCreators';
import { NEW_ALBUM_PAGE_NUM, NEW_ALBUM_PER_PAGE } from '@/common/contants';

import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import HYSongsCover from '@/components/songs-cover';
import { AlbumWrapper } from './style';

export default memo(function HYNewAlbum() {
  //组件和redux关联:获取数据和进行操作
  const { newAlbums } = useSelector(
    state => ({
      newAlbums: state.getIn(['recommend', 'newAlbums']),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  //其他hookes
  useEffect(() => {
    dispatch(getNewAlbumAction(NEW_ALBUM_PAGE_NUM*));
  }, [dispatch]);

  return (
    <AlbumWrapper>
      <HYThemeHeaderRCM title="新碟上架" />
      <div className="recommend-list">
        {newAlbums.map((item, index) => {
          return <HYSongsCover key={item.id} info={item} />;
        })}
      </div>
    </AlbumWrapper>
  );
});
