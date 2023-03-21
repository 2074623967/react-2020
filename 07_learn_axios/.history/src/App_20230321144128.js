import React, { PureComponent } from 'react'
import axios  from 'axios'

export default class App extends PureComponent {
  constructor(props){
  super(props)
this.setState={
 products:[]
}}
componentDidMount(){
   //拿到数据
   this.setState({
    products
  })
}
  render() {
    return (
      <div>App</div>
    )
  }
}
