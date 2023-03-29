import HYDiscover from '@/pages/discover';
import HYFriend from '@/pages/friend';
import HYMine from '@/pages/mine';

const routes = [
  {
    path: '/',
    exact: true,
    component: HYDiscover,
  },
  {
    path: '/friend',
    component: HYFriend,
  },
  {
    path: '/',
    component: HYMine,
  },
];

export default routes;
