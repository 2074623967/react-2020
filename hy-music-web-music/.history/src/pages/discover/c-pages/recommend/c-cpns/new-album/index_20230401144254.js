import React, { memo, useEffect ,useRef } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { getNewAlbumAction } from '../../store/actionCreators';
import { NEW_ALBUM_PAGE_NUM, NEW_ALBUM_PER_PAGE } from '@/common/contants';

import { Carousel } from 'antd';
import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import HYAlbumCover from '@/components/album-cover';
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
  const pageRef = useRef();
  useEffect(() => {
    dispatch(getNewAlbumAction(NEW_ALBUM_PAGE_NUM * NEW_ALBUM_PER_PAGE));
  }, [dispatch]);

  return (
    <AlbumWrapper>
      <HYThemeHeaderRCM title="新碟上架" />
      <div className="content">
        <button className="arrow arrow-left sprite_02" 
                onClick={e => pageRef.current.prev()}></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {
              [0, 1].map(item => {
                return (
                  <div key={item} className="page">
                    {
                      newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
                        return <HYAlbumCover key={iten.id} 
                                             info={iten} 
                                             size={100} 
                                             width={118} 
                                             bgp="-570px"/>
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02"
                onClick={e => pageRef.current.next()}></button>
      </div>
    </AlbumWrapper>
  )
});
