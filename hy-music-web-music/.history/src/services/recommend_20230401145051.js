import request from './request';

export function getTopBanners() {
  return request({
    url: '/banner',
  });
}

export function getHotRecommends(limit) {
  return request({
    url: '/personalized',
    params: {
      limit,
    },
  });
}

export function getNewAlbums(limit) {
  return request({
    url: '/top/album',
    params: {
      offset: 0,
      limit,
      year:2023,
      month=6
    },
  });
}

export function getTopList(idx) {
  return request({
    url: '/top/list',
    params: {
      idx,
    },
  });
}
