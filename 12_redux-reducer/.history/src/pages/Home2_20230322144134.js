import React, { PureComponent } from 'react';

function Home extends PureComponent {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <button onClick={e => this.addNumber(5)}>+5</button>
      </div>
    );
  }
  increment() {
    store.dispatch(addAction(1));
  }
  addNumber(num) {
    store.dispatch(addAction(num));
  }
}
