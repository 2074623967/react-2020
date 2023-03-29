import React, { memo } from 'react';

import AppHeader from 'components/app-header';
import AppFooter from 'components/app-footer';

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
