import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';

import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from './router';
import store from '@/store';

import HYAppHeader from '@/components/app-header';
import HYAppFooter from '@/components/app-footer';

export default memo(() => {
  return (
    <div>
      <Provider store={store}>
        <HashRouter>
          <HYAppHeader />
          <Suspense fallback={<div>page loading</div>}
          {renderRoutes(routes)}
          ></Suspense>
          <HYAppFooter />
        </HashRouter>
      </Provider>
    </div>
  );
});
