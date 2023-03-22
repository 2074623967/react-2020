import { PureComponent } from 'react'

export function connect(mapStateToProps,mapDispatchToProps){
     return function enhanceHOC(WrappedComponent){
         return class extends PureComponent{
          render(){
           return 
          }
        }
    }
}