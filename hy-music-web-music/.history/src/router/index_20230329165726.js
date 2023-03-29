import React from 'react';

import HYDiscover from '@/pages/discover';
import HYFriend from '@/pages/friend';
import HYMine from '@/pages/mine';
import { Redirect } from 'react-router-dom';

const routes = [
  {
    path: '/',
    exact: true,
    // component: HYDiscover,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: '/friend',
    component: HYFriend,
  },
  {
    path: '/discover',
    component: HYDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: '/discover/recommend',
        component: HYRecommend,
      },
      {
        path: '/discover/ranking',
        component: HYRanking,
      },
      {
        path: '/discover/songs',
        component: HYSongs,
      },
      {
        path: '/discover/djradio',
        exact: true,
        component: HYDjradio,
      },
      {
        path: '/discover/artist',
        component: HYArtist,
      },
      {
        path: '/discover/album',
        component: HYAlbum,
      },
      {
        path: '/discover/player',
        component: HYPlayer,
      },
    ],
  },
  {
    path: '/mine',
    component: HYMine,
  },
];

export default routes;
