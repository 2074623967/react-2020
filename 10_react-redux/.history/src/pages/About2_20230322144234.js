import React from 'react'

export default class About extends PureComponent {
  
    return (
      <div>
        <h1>About</h1>
         <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.decrement()}>-1</button>
        <button onClick={e => this.subNumber(5)}>-5</button>
      </div>
    )
  }
  decrement() {
    store.dispatch(subAction(1));
  }
  subNumber(num) {
    store.dispatch(subAction(num));
  }
}
