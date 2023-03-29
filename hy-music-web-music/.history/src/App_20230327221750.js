import React, { memo } from 'react';

import HYAppHeader from 'components/app-header';
import hyAppFooter from 'components/app-footer';

const App = memo(() => {
  return (
    <div>
      <AppHeader />
      <h2>Content</h2>
      <AppFooter />
    </div>
  );
});

export default App;
