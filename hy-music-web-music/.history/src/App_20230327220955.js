import React, { memo } from 'react';

import AppHeader from '@/'

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
