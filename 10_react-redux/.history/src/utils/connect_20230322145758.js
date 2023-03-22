import { PureComponent } from 'react'

import store from '../store';

export function connect(mapStateToProps,mapDispatchToProps){
     return function enhanceHOC(WrappedComponent){
         return class extends PureComponent{
          render(){
           return <WrappedComponent {...this.props} mapStateToProps/>
          }
        }
    }
}