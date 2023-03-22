import React,{ PureComponent } from 'react';

import {StoreContext} from './connect';

export function connect(mapStateToProps, mapDispatchToProps) {
  return function enhanceHOC(WrappedComponent) {
    class Enhance extends PureComponent {
      constructor(props) {
        super(props);
        this.state = {
          storeState:mapStateToProps(store.getState())
        };
      }
      componentDidMount() {
        this.unsubscribue = store.subscribe(() => {
          this.setState({
            storeState:mapStateToProps(store.getState())
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
