import React, { PureComponent } from 'react';

import Home from './pages/Home2';
import About from './pages/About2';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <About />
      </div>
    );
  }
}
