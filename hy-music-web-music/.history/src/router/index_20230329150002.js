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
    render:()=>(
       <Redirect/>
      )
  },
  {
    path: '/friend',
    component: HYFriend,
  },
  {
    path: '/mine',
    component: HYMine,
  },
];

export default routes;
