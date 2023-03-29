import React, { memo } from 'react';
import rend

import HYAppHeader from '@/components/app-header';
import HYAppFooter from '@/components/app-footer';

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
