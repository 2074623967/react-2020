import React from 'react';
import { Redirect } from 'react-router-dom';

const HYDiscover = React.lazy(() => import('@/pages/discover'));
const HYRecommend = React.lazy(_ =>
  import('../pages/discover/c-pages/recommend')
);
const HYRanking = React.lazy(_ => import('../pages/discover/c-pages/ranking'));
const HYSongs = React.lazy(_ => import('../pages/discover/c-pages/songs'));
const HYDjradio = React.lazy(_ => import('../pages/discover/c-pages/djradio'));
const HYArtist = React.lazy(_ => import('../pages/discover/c-pages/artist'));
const HYAlbum = React.lazy(_ => import('../pages/discover/c-pages/album'));

const HYFriend = React.lazy(_ => import('../pages/friend'));
const HYMine = React.lazy(_ => import('../pages/mine'));

//当网速慢时，指定路由组件页面未加载出
const withLoadingComponent=(comp:JSX.Element)=>(
   <React.Suspense fallback
  )

// import HYDiscover from "@/pages/discover";
// import HYRecommend from "../pages/discover/c-pages/recommend";
// import HYRanking from "../pages/discover/c-pages/ranking";
// import HYSongs from "../pages/discover/c-pages/songs";
// import HYDjradio from "../pages/discover/c-pages/djradio";
// import HYArtist from "../pages/discover/c-pages/artist";
// import HYAlbum from "../pages/discover/c-pages/album";
// import HYPlayer from "../pages/player";

// import HYMine from "@/pages/mine";
// import HYFriend from "@/pages/friend";

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
    ],
  },
  {
    path: '/mine',
    component: HYMine,
  },
];

export default routes;
