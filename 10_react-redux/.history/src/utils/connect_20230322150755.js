import React,{ PureComponent } from 'react';

import store from '../store';

export function connect(mapStateToProps, mapDispatchToProps) {
  return function enhanceHOC(WrappedComponent) {
    return class extends PureComponent {
      constructor(props) {
        super(props);
        this.state = {
          storeState
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
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(store.getState())}
            {...mapDispatchToProps(store.dispatch)}
          />
        );
      }
    };
  };
}
