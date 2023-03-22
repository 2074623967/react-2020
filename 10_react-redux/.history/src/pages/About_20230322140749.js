import React, { PureComponent } from 'react'
import store from '../store';
import { addAction } from '../store/actionCreators';

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
      <div>About</div>
    )
  }
}
