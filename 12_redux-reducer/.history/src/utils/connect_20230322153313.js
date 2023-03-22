import React, { PureComponent } from 'react';

import { StoreContext } from './connect';

export function connect(mapStateToProps, mapDispatchToProps) {
  return function enhanceHOC(WrappedComponent) {
    class EnhanceComponent extends PureComponent {
      constructor(props) {
        super(props,this.context);
        this.state = {
          storeState: mapStateToProps(this.context.getState()),
        };
      }
      componentDidMount() {
        this.unsubscribue = this.context.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(this.context.getState()),
          });
        });
      }
      componentWillUnmount() {
        this.unsubscribue();
      }
      render() {
        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(this.context.getState())}
            {...mapDispatchToProps(this.context.dispatch)}
          />
        );
      }
    }
    EnhanceComponent.contextType = StoreContext;
    return EnhanceComponent;
  };
}
