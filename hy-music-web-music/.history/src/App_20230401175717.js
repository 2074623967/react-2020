import React, { memo, Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

import routes from './router';
import store from '@/store';

import { HashRouter } from 'react-router-dom';
import HYAppHeader from '@/components/app-header';
import HYAppFooter from '@/components/app-footer';
import HYAppPlayer

export default memo(() => {
  return (
    <div>
      <Provider store={store}>
        <HashRouter>
          <HYAppHeader />
          <Suspense fallback={<div>page loading</div>}>
            {renderRoutes(routes)}
          </Suspense>
          <HYAppFooter />
        </HashRouter>
      </Provider>
    </div>
  );
});
