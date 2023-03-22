import React, { PureComponent } from 'react';

import Home from './pages/Home3';
import About from './pages/About3';

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
