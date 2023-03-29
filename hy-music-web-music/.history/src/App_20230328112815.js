import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';

import routes from './router';

import HYAppHeader from '@/components/app-header';
import HYAppFooter from '@/components/app-footer';

const App = memo(() => {
  return (
    <div>
      <Hash
      <HYAppHeader />
      {renderRoutes(routes)}
      <HYAppFooter />
    </div>
  );
});

export default App;
