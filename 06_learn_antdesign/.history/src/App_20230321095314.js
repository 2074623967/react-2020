import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props){
   super(props)
   this.state={
  isActive:true}
  }
  render() {
    return (
      <div>App</div>
    )
  }
}
