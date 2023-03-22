import React, { PureComponent } from 'react';

import store from '../store';

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: store.getState().counter,
    };
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={}>+1</button>
        <button>+5</button>
      </div>
    );
  }
}
