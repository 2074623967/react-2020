import React, { PureComponent } from 'react'

import store from '../store';
import { subAction } from '../store/actionCreators';

export default class About extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: store.getState().counter,
    };
  }
  componentDidMount() {
    this.unsubscribue = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter,
      });
    });
  }
  componentWillUnmount(){
    this.unsubscribue()
  }
  render() {
    return (
      <div>
        <h1>About</h1>
         <h2>当前计数: {this.state.counter}</h2>
        <button onClick={e => this.subcrement()}>-1</button>
        <button onClick={e => this.subNumber(5)}>-5</button>
      </div>
    )
  }
  subcrement() {
    store.dispatch(subAction(1));
  }
  subNumber(num) {
    store.dispatch(subAction(num));
  }
}
