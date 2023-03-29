import React, { memo } from 'react';

import HYAppHeader from '@/c/app-header';
import HYAppFooter from 'components/app-footer';

const App = memo(() => {
  return (
    <div>
      <HYAppHeader />
      <h2>Content</h2>
      <HYAppFooter />
    </div>
  );
});

export default App;
