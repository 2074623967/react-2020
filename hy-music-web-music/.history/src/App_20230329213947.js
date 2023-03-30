import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';

import { HashRouter } from 'react-router-dom';

import routes from './router';
import store from '@/store';

import HYAppHeader from '@/components/app-header';
import HYAppFooter from '@/components/app-footer';

export default memo(() => {
  return (
    <div>
      <HashRouter>
        <HYAppHeader />
        {renderRoutes(routes)}
        <HYAppFooter />
      </HashRouter>
    </div>
  );
});

export default App;
