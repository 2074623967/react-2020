import React, { memo } from 'react';

import AppHeader from 'components/app-header'
import AppFooter from 'components/app-header'

const App = memo(() => {
  return (
    <div>
      <h2>AppHeader</h2>
      <h2>Content</h2>
      <h2>AppFooter</h2>
    </div>
  );
});

export default App;
