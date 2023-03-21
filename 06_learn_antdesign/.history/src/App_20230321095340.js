import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props){
   super(props)
   this.state={
  isActive:true}
  }
  render() {
    return (
      <h2 className={"foo bar active title"}}></h2>
    )
  }
}
